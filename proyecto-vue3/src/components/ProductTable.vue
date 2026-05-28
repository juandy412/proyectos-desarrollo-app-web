<template>
  <div>
    <div class="mb-3">
      <input 
      v-model="searchQuery" 
      class="form-control" 
      placeholder="Buscar productos..." />
    </div>
  </div>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Nombre</th><th>Precio</th><th>Categoría</th><th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in filteredProducts" :key="p.id">
        <td>{{p.name}}</td>
        <td>{{p.price}}</td>
        <td>{{p.category}}</td>
        <td>
          <button class="btn btn-primary btn-sm" @click="$emit('edit',p.id)">Editar</button>
          <button class="btn btn-danger btn-sm ms-2" @click="$emit('delete',p.id)">Eliminar</button>
        </td>
      </tr>
      <tr v-if="filteredProducts.length === 0">
        <td colspan="4" class="text-center">No se encontraron productos.</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ['products'],
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    filteredProducts() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.products;
      }

      return this.products.filter(p => {
        const title = String(p.title || p.name || '').toLowerCase();
        const category = String(p.category || '').toLowerCase();
        return title.includes(query) || category.includes(query);
      });
    }
  }
}
</script>
