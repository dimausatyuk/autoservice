<template>
  <div>
    <v-tabs v-model="active" color="blue darken-3" slider-color="blue darken-3">
      <v-tab ripple>Остатки</v-tab>
      <v-tab ripple>Инвентаризации</v-tab>
      <v-tab ripple>Оприходования</v-tab>
      <v-tab-item v-for="(i, index) in all" :key="i">
        <v-card color="blue-grey lighten-5" flat>
          <v-card-text>
            <add-item-store
              v-if="index == 0"
              class="add-item-store"
            ></add-item-store>
            <add-item-inventory
              v-if="index == 1"
              class="add-item-store"
            ></add-item-inventory>
            <add-item-prihod
              v-if="index == 2"
              class="add-item-store"
            ></add-item-prihod>

            <v-data-table
              :search="search"
              :headers="i[1]"
              :items="i[0]"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              class="elevation-1"
              :footer-props="{
                pageText: '{0} из {1}',
                itemsPerPageText: 'Строк на странице',
                itemsPerPageAllText: 'Все',
              }"
              ><template v-slot:top>
                <v-text-field
                  v-model="search"
                  label="Поиск"
                  class="mx-4"
                ></v-text-field>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>



<script>
import AddItemStore from "@/components/AddItemStore.vue";
import { mapState } from "vuex";
import AddItemInventory from "@/components/AddItemInventory.vue";
import AddItemPrihod from "@/components/AddItemPrihod.vue";
export default {
  components: { AddItemStore, AddItemInventory, AddItemPrihod },
  data() {
    return {
      active: null,
      search: "",
      sortBy: "fat",
      sortDesc: false,
    };
  },
  methods: {
    nextSort() {
      let index = this.headers.findIndex((h) => h.value === this.sortBy);
      index = (index + 1) % this.headers.length;
      this.sortBy = this.headers[index].value;
    },
  },
  computed: mapState("storeCar", ["storage", "inventory", "posting", "all"]),
};
</script>

<style>
.add-item-store {
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}
h1 {
  margin-top: 20px;
}
</style>