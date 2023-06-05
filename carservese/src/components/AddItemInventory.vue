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
          Добавить инвенторизацию
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить инвенторизацию</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="d-flex flex-column">
              <v-col class="margin" cols="10">
                <v-text-field
                  label="Номер инвенторизации"
                  required
                  v-model="num"
                ></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field label="Дата" v-model="date"></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field
                  label="Сотрудник"
                  persistent-hint
                  required
                  v-model="employees"
                ></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field
                  v-model="comment"
                  label="Коментарий"
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
    date: null,
    num: null,
    comment: null,
    employees: null,
  }),
  methods: {
    addItem() {
      this.$store.commit("storeCar/addItemInventoryServese", {
        date: this.date,
        num: this.num,
        comment: this.comment,
        employees: this.employees,
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