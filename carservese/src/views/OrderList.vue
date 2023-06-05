<template>
  <div>
    <v-card color="blue-grey lighten-5"
      ><v-card-text>
        <add-order class="add-item-store"></add-order>
        <v-data-table
          :headers="headers"
          :items="items"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :search="search"
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

          <template v-slot:[`item.status`]="{ item }">
            <v-select
              @click="log(item.num)"
              background-color="blue lighten-5"
              style="width: 150px"
              :items="[
                'Выполнен',
                'На диагностике',
                'В ремонте',
                'Отменен',
                'На согласовании',
              ]"
              v-model="
                items[
                  items.findIndex((itemIn) => {
                    return itemIn.num == item.num;
                  })
                ].status
              "
              label="Статус заказа"
            ></v-select>
          </template> </v-data-table></v-card-text
    ></v-card>
  </div>
</template>

<script>
import AddOrder from "@/components/AddOrder.vue";
import { mapState } from "vuex";
export default {
  components: { AddOrder },
  data() {
    return {
      sortBy: "fat",
      sortDesc: false,
      search: "",
    };
  },
  computed: mapState("orders", ["items", "headers"]),
  methods: {
    log(i) {
      console.log(i);
    },
    //findIndexInItems() {},
  },
};
</script>

<style>
.add-item-store {
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>