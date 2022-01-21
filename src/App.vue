<template>
  <div id="app">
    <div class="category-filter">
      <v-input
        v-model="categoryName"
        placeholder="Busca una categoria"
        class="search-input"
      />

      <v-spinner v-if="loadingCategories" />

      <div v-else class="category-list">
        <category-card
          v-for="category in filteredCategories"
          :key="category.uuid4"
          :category="category"
        />
      </div>

      <p class="empty-message" v-if="(!filteredCategories.length && !loadingCategories) || hasError">
        <template v-if="!hasError">
          No hay categorías que mostrar
        </template>
        <template v-else>
          Hubo un error al cargar las categorias
        </template>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ApiCategoryService } from "@/core/services/api.category.service";
import { Category } from "./core/domain/models/category";
import VSpinner from "@/components/VSpinner.vue";
import VInput from "@/components/VInput.vue";
import CategoryCard from "@/components/CategoryCard.vue";

const CategoryService = new ApiCategoryService();

export default Vue.extend({
  name: "App",

  components: {
    VSpinner,
    VInput,
    CategoryCard,
  },

  data() {
    return {
      categoryName: "",
      categories: [] as Category[],
      loadingCategories: false,
      hasError: false,
    };
  },

  created() {
    this.getAllCategories();
  },

  computed: {
    filteredCategories(): Category[] {
      return ApiCategoryService.getAllByName({
        categories: this.categories,
        name: this.categoryName,
      });
    },
  },

  methods: {
    async getAllCategories() {
      try {
        this.hasError = false;
        this.loadingCategories = true;

        const categories = await CategoryService.getAll();

        this.categories = categories;
      } catch (error) {
        this.hasError = true;
      } finally {
        this.loadingCategories = false;
      }
    },
  },
});
</script>

<style>
#app {
  font-family: var(--font-work-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--gray-light);
  min-height: 100vh;
}

.category-filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
}

.category-filter .search-input {
  margin-bottom: 18px;
  width: 100%;
  max-width: 500px;
}

.category-filter .category-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  row-gap: 24px;
  column-gap: 24px;
}

.category-filter .empty-message {
  width: 100%;
  text-align: center;
  color: var(--gray-darkened);
  font-size: 21px;
  line-height: 28px;
}
</style>
