<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import Card from '../components/Card.vue';
import Navigation from '../components/Navigation.vue';
import { CurrentAccount } from '../types/CurrentAccount';
import { GetCurrentAccount } from '../usecases/getCurrentAccount/GetCurrentAccount';
import { providers } from '../providers';



interface OptionsType {
  title: string;
  icon: string;
  link: string;
}




const options = ref<OptionsType[]>([
  { title: 'Seu Perfil', icon: '/assets/icon-perfil.png', link: '/profile' },
  { title: 'Oportunidades', icon: '/assets/icon-search-y.png', link: '/oportunidades' },
  { title: 'Cursos Gratuitos', icon: '/assets/icon-student.png', link: '/cursos' },
  { title: 'Currículo', icon: '/assets/icon-curriculo.png', link: '/curriculo' },
  { title: 'Empregador', icon: '/assets/icon-empregador.png', link: '/empregador' },
  { title: 'Atendimento', icon: '/assets/icon-atendimento.png', link: '/atendimento' },
]);

const currentAccount = ref<CurrentAccount | null>(null)
const getCurrentAccountUsecase = ref<GetCurrentAccount | null>(null)

onMounted(() => {
  getCurrentAccountUsecase.value = inject<GetCurrentAccount>(providers.GET_CURRENT_ACCOUNT.key)
  currentAccount.value = getCurrentAccountUsecase.value.perform()
})


</script>

<template>
  <Navigation />
  <main class="profile-container">
    <section class="section-container">
        <div class="user-hi">
            <p v-if="currentAccount">Bem-vindo(a), <span>{{ currentAccount.name }}!</span></p>
        </div>
        <div class="cards-wrapper">
            <div class="cards-container">
                <Card 
                v-for="(option, index) in options" 
                :key="index"
                :title="option.title" 
                :icon="option.icon" 
                :link="option.link"
                />
            </div>
        </div>
    </section>
</main>
</template>

<style scoped>
.profile-container {
  background-color: var(--primary-background-color);
  height: 100vh;
}

.section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 8px;
}

.user-hi {
  position: absolute;
  top: 20px;
  left: 20px;
  align-self: flex-end;
}

.cards-wrapper {
  margin-top: 60px; 
  justify-content: center;
  
}

.cards-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--primary-color-white);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}



.card-container img {
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
}

.card-container p {
  font-weight: 600;
  margin: 0;
}

/* Phone */
@media screen and (max-width: 768px){
  .card-container{
    padding: 8px;
    font-size: 13px;
  }

  
}
</style>