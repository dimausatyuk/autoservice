<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="font-size: 17px"
          height="40px"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Добавить товар
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить товар на склад</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="d-flex flex-column">
              <v-col class="margin" cols="10">
                <v-text-field
                  label="Наименование"
                  required
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field label="Артикл" v-model="articl"></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field
                  label="Количество"
                  persistent-hint
                  required
                  v-model="quantity"
                ></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field
                  v-model="priceBuy"
                  label="Цена закупки"
                  required
                ></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field
                  label="Цена продажи"
                  v-model="priseSale"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Закрыть
          </v-btn>
          <v-btn color="blue darken-1" text @click="addItem"> Добавить </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    name: null,
    articl: null,
    quantity: null,
    priceBuy: null,
    priseSale: null,
  }),
  methods: {
    addItem() {
      this.$store.commit("storeCar/addItemStorageServese", {
        name: this.name,
        code: this.articl,
        quantity: this.quantity,
        purchase_price: this.priceBuy,
        selling_price: this.priseSale,
      });
      this.dialog = false;
    },
  },
};
</script>
<style scoped>
.margin {
  margin-bottom: 0px;
  padding-bottom: 0;
  padding-top: 0;
}
</style>