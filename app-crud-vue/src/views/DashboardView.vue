<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container-fluid">
        <div class="navbar-brand ps-3 fw-bold">Panel de Control</div>
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/productos" class="nav-link">
              Productos
            </router-link>
          </li>
          <li class="nav-item">
            <a @click.prevent="handleLogout" class="nav-link" href="#">
               Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="container mt-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();


const handleLogout = () => {
  localStorage.removeItem('logueado');
  
  router.push('/');
};
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>