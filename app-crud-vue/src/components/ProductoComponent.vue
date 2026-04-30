<template>
  <div class="container mt-5">
    <div class="card p-4 mb-4">
      <h3>Gestion de Productos</h3>
      
      <div class="row g-2">
        <div class="col-md-6">
          <input 
            v-model="form.nombre" 
            type="text" 
            class="form-control" 
            placeholder="Nombre" 
          />
        </div>
        <div class="col-md-4">
          <input 
            v-model.number="form.precio" 
            type="number" 
            class="form-control" 
            placeholder="Precio" 
          />
        </div>
        <div class="col-md-2">
          <button @click="agregar" class="btn btn-success w-100">
            Agregar
          </button>
        </div>
      </div>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in productos" :key="i">
          <td>{{ p.nombre }}</td>
          <td>{{ p.precio }}</td>
          <td>
            <button @click="eliminar(i)" class="btn btn-danger btn-sm">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const productos = ref([]);
const form = ref({ nombre: '', precio: '' });

onMounted(() => {
  const datos = localStorage.getItem('productos');
  if (datos) {
    productos.value = JSON.parse(datos);
  }
});

const actualizarStorage = () => {
  localStorage.setItem('productos', JSON.stringify(productos.value));
};

const agregar = () => {
  if (form.value.nombre && form.value.precio) {
    productos.value.push({ ...form.value });
    form.value.nombre = '';
    form.value.precio = '';
    actualizarStorage();
  }
};

const eliminar = (index) => {
  productos.value.splice(index, 1);
  actualizarStorage();
};
</script>