<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import { CurrentAccount } from '../../types/CurrentAccount';
import { GetCurrentAccount } from '../../usecases/getCurrentAccount/GetCurrentAccount';
import { providers } from '../../providers';

// Reactive form data
const age = ref(null);
const city = ref('Campos dos Goytacazes');
const profileImage = ref<string | null>(localStorage.getItem('profilePictureURL'));

// Function to handle image change
const handleImageChange = (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target.files && target.files[0]) {
		profileImage.value = URL.createObjectURL(target.files[0]);
	}
};

// Functions to unlock inputs
const isNameEditable = ref(false);
const isAgeEditable = ref(false);
const isCityEditable = ref(false);
const isNewCityEditable = ref(false);
const isEmailEditable = ref(false);

const toggleEdit = (editableField: string) => {
	switch (editableField) {
		case 'name':
			isNameEditable.value = !isNameEditable.value;
			break;
		case 'age':
			isAgeEditable.value = !isAgeEditable.value;
			break;
		case 'city':
			isCityEditable.value = !isCityEditable.value;
			break;
		case 'newCity':
			isNewCityEditable.value = !isNewCityEditable.value;
			break;
		case 'email':
			isEmailEditable.value = !isEmailEditable.value;
			break;
	}
};

const currentAccount = ref<CurrentAccount | null>(null)
const getCurrentAccountUsecase = ref<GetCurrentAccount | null>(null)

onMounted(() => {
	getCurrentAccountUsecase.value = inject(providers.GET_CURRENT_ACCOUNT.key)
	currentAccount.value = getCurrentAccountUsecase.value.perform()
})
</script>

<template>
	<div class="min-h-screen flex items-start justify-center p-6">
		<div class="w-full max-w-sm bg-green-500 p-6 rounded-lg shadow-md">
			<div class="relative mb-6 flex justify-center">
				<label class="relative cursor-pointer bg-white rounded-full shadow-md">
					<!-- Profile Image Preview -->
					<svg v-if="!profileImage" class="w-16 h-16 text-blue-600" fill="currentColor"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
					</svg>
					<img v-if="profileImage" :src="profileImage" alt="Profile Image" class="w-16 h-16 rounded-full" />
					<input type="file" accept="image/*" @change="handleImageChange"
						class="absolute inset-0 opacity-0 cursor-pointer" />
				</label>
			</div>

			<form class="flex flex-col gap-4" v-if="currentAccount">
				<!-- Name Field -->
				<div class="relative mb-4">
					<input v-model="currentAccount.name" :readonly="!isNameEditable" type="text"
						:class="['w-full px-4 py-2 rounded-lg shadow-md focus:outline-none', isNameEditable ? 'bg-white border border-blue-500' : 'bg-gray-200']" />
					<div class="absolute right-2 -top-4 bg-white p-1 cursor-pointer rounded-full" @click="toggleEdit('name')">
						<img src="/edit.png" alt="edit icon" class="w-5 h-5" />
					</div>
				</div>

				<!-- Age Field -->
				<div class="relative mb-4">
					<input v-model="age" :readonly="!isAgeEditable" type="text" placeholder="Idadade"
						:class="['w-full px-4 py-2 rounded-lg shadow-md focus:outline-none', isAgeEditable ? 'bg-white border border-blue-500' : 'bg-gray-200']" />
					<div class="absolute right-2 -top-4 bg-white p-1 cursor-pointer rounded-full" @click="toggleEdit('age')">
						<img src="/edit.png" alt="edit icon" class="w-5 h-5" />
					</div>
				</div>

				<!-- City Field -->
				<div class="relative mb-4">
					<input v-model="city" :readonly="!isCityEditable" type="text"
						:class="['w-full px-4 py-2 rounded-lg shadow-md focus:outline-none', isCityEditable ? 'bg-white border border-blue-500' : 'bg-gray-200']" />
					<div class="absolute right-2 -top-4 bg-white p-1 cursor-pointer rounded-full" @click="toggleEdit('city')">
						<img src="/edit.png" alt="edit icon" class="w-5 h-5" />
					</div>
				</div>

				<!-- Email Field -->
				<div class="relative mb-4">
					<input v-model="currentAccount.email" :readonly="!isEmailEditable" type="email" placeholder="E-mail"
						:class="['w-full px-4 py-2 rounded-lg shadow-md focus:outline-none', isEmailEditable ? 'bg-white border border-blue-500' : 'bg-gray-200']" />
					<div class="absolute right-2 -top-4 bg-white p-1 cursor-pointer rounded-full" @click="toggleEdit('email')">
						<img src="/edit.png" alt="edit icon" class="w-5 h-5" />
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped>
/* Adjustments for better positioning of the edit icon */
input:focus {
	outline: none;
	border-color: blue;
}
</style>
