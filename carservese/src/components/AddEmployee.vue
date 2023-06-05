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
          Добавить сотрудника
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить сотрудника</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="d-flex flex-column">
              <v-col class="margin" cols="10">
                <v-text-field label="ФИО" required v-model="fio"></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field label="Должность" v-model="role"></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field
                  label="Номер телефона"
                  persistent-hint
                  required
                  v-model="phone"
                ></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field
                  v-model="login"
                  label="Логин"
                  required
                ></v-text-field>
              </v-col>
              <v-col class="margin" cols="10">
                <v-text-field
                  type="password"
                  label="Пароль"
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
          <v-btn color="blue darken-1" text @click="addEmployee">
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    fio: "",
    phone: null,
    login: null,
    role: null,
  }),
  methods: {
    addEmployee() {
      this.$store.commit("employees/addEmployee", {
        fio: this.fio,
        phone: this.phone,
        login: this.login,
        role: this.role,
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