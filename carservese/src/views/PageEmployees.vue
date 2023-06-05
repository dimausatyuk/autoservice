<template>
  <div>
    <v-card color="blue-grey lighten-5"
      ><v-card-text>
        <add-employee class="add-item-store"></add-employee>
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

          <template slot="item.status">
            <v-select
              style="width: 150px"
              :items="[
                'Выполнен',
                'На диагностике',
                'В ремонте',
                'Отменен',
                'На согласовании',
              ]"
              v-model="value"
              label="Статус заказа"
            ></v-select>
          </template> </v-data-table></v-card-text
    ></v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddEmployee from "@/components/AddEmployee.vue";
export default {
  components: { AddEmployee },
  data() {
    return {
      sortBy: "fat",
      sortDesc: false,
      search: "",
    };
  },
  computed: mapState("employees", ["items", "headers"]),
};
</script>

<style>
.add-item-store {
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>