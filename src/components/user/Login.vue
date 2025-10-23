<script setup  lang="ts">
import { inject, onMounted, reactive, ref} from 'vue';
import LoginFormInput from './login_form/LoginFormInput.vue';
import router from '../../router';
import { providers } from '../../providers';
import { UpdateCurrentAccount } from '../../usecases/updateCurrentAccount/UpdateCurrentAccount';
import { Login } from '../../usecases/login/Login';

const form = reactive([
  {
    model: '',
    placeholder: 'Nome',
    type: 'text'
  },
  {
    model: '',
    placeholder: 'Email',
    type: 'email'
  },
])

const loginUsecase = ref<Login | null>(null)
const updateCurrentAccountUsecase = ref<UpdateCurrentAccount | null>(null)

const handleSubmit = async () => {
  try {
    const currentAccount = await loginUsecase.value.perform({
      name: form[0].model,
      email: form[1].model
    })
    updateCurrentAccountUsecase.value.perform(currentAccount)

    await router.push({path: '/home'})
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  loginUsecase.value = inject<Login>(providers.LOGIN.key)
  updateCurrentAccountUsecase.value = inject<UpdateCurrentAccount>(providers.UPDATE_CURRENT_ACCOUNT.key)
})

const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:9999/auth/google/login'
}
</script>
<template>

  <!-- I moved the assets folder to the public folder, it makes it easier to import things -->
   
  <div class="login-container">
    <div class="login-header">
      <img src="/assets/empregae-text-logo.png" alt="EmpregAE logo" class="empregae-text-logo" > 
    </div>
    <form class="login-form" @submit.prevent="handleSubmit">
      <img src="/assets/login-user-icon.svg">
      <LoginFormInput v-for="obj in form" :key="obj.placeholder" :model="obj"/>
      <button class="login-submit-buttom" type="submit" >CONFIRMAR</button>
      <button class="login-submit-buttom" type="button" @click="handleGoogleLogin">Login com conta Google</button>
    </form>
  </div>
</template>
<style scoped>
.login-container {
  background: var(--primary-blue-color);
  height: 100vh;
  overflow: hidden auto;
}

.login-header {
  height: 117px;
  background-color: var(--primary-white-color);
  display: grid;
  align-items: center;
  border-bottom-left-radius: 39px;
  border-bottom-right-radius: 39px;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.25);
}

.empregae-text-logo {
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(195px - 117px);
}

.login-submit-buttom {
  background-color: var(--primary-yellow-color);
  height: 55px;
  width: auto;
  padding: 0 17px;
  flex-grow: 0;
  margin: 15px 125px 24px 138px;
  border-radius: 6px;
  font-family: "Kanit";
  font-size: 23px;
  font-weight: 700;
  font-style: normal;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  border: none;
  cursor: pointer;
}
</style>