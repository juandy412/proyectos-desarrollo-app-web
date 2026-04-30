<template>
  <div class="container mt-5 col-md-4">
    <div class="card p-4 shadow-sm">
      <h3 class="text-center mb-4">Acceso al Sistema</h3>
      
      <div class="mb-3">
        <input 
          v-model="form.usuario" 
          type="text" 
          class="form-control" 
          placeholder="Nombre de usuario" 
        />
      </div>

      <div class="mb-3">
        <input 
          v-model="form.clave" 
          type="password" 
          class="form-control" 
          placeholder="Contraseña" 
        />
      </div>

      <button @click="handleLogin" class="btn btn-primary w-100 shadow-sm">
        Iniciar Sesión
      </button>

      <p v-if="errorMessage" class="text-danger mt-3 text-center small">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const errorMessage = ref('');
const form = reactive({
  usuario: '',
  clave: ''
});

const DATABASE_USERS = [
  { user: 'admin', pass: '1234' },
  { user: 'jerson', pass: '5678' }
];

const handleLogin = () => {
  const userFound = DATABASE_USERS.find(u => 
    u.user === form.usuario && u.pass === form.clave
  );

  if (userFound) {
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/dashboard');
  } else {
    errorMessage.value = 'Usuario o contraseña no válidos';
  }
};
</script>