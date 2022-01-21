<template>
  <div class="category-card">
    <v-image
      :src="category.image"
      :alt="category.name.esp"
      class="category-image"
    />

    <div class="category-card-content">
      <h3 class="category-name">
        {{ category.name.eng }}
      </h3>

      <ul class="category-details">
        <li class="detail-item">Price: {{ parsedPrice }}</li>
        <li class="detail-item">Type: {{ typeLabel }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Category } from "@/core/domain/models/category";
import { formatter } from "@/core/utils/currency";
import VImage from "@/components/VImage.vue";

export default Vue.extend({
  props: {
    category: {
      type: Object as () => Category,
      required: true
    },
  },

  components: {
    VImage
  },

  computed: {
    parsedPrice(): string {
      const { suggested_budget } = this.category;

      return formatter({ format: "en-US", currency: "USD" }).format(
        suggested_budget / 100
      );
    },

    typeLabel(): string {
      const { category_type } = this.category as Category;

      switch (category_type) {
        case 1:
          return "Normal";

        case 2:
          return "Libre";

        default:
          return "Personalizada";
      }
    },
  },
});
</script>

<style>
.category-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--primary);
  padding: 18px 16px;
  border-radius: 22px;
  transition: box-shadow 0.3s;
}

.category-card:hover {
  box-shadow: var(--box-shadow) 0px 4px 16px 0px;
}

.category-card .category-image {
  width: 168px;
  height: 168px;
}

.category-card .category-card-content {
  width: 100%;
  padding: 12px 6px 0 6px;
  color: var(--white);
}

.category-card .category-card-content .category-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}

.category-card .category-card-content .category-details {
  font-size: 14px;
  line-height: 16px;
}

.category-card .category-card-content .category-details .detail-item:not(:last-child) {
  margin-bottom: 6px;
}
</style>
