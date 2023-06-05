<template>
  <div>
    <v-card color="blue-grey lighten-5"
      ><v-card-text>
        <add-client class="add-item-store"></add-client>
        <v-dialog v-model="dialog" persistent max-width="600px" v-if="dialog">
          <v-card>
            <v-card-title>
              <span class="text-h5">Изменить клиента</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="d-flex flex-column">
                  <v-col class="margin" cols="10">
                    <v-text-field
                      label="ФИО"
                      required
                      v-model="item.fio"
                    ></v-text-field>
                  </v-col>
                  <v-col class="margin" cols="10">
                    <v-text-field
                      label="Дата рождения"
                      v-model="item.birth_date"
                    ></v-text-field>
                  </v-col>
                  <v-col class="margin" cols="10">
                    <v-text-field
                      label="Номер телефона"
                      persistent-hint
                      required
                      v-model="item.phone"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Закрыть
              </v-btn>
              <v-btn color="blue darken-1" text @click="confirmEdit">
                Изменить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-data-table
          :headers="headers"
          :items="this.$store.state.clients.clients"
          :search="search"
          class="elevation-1"
          :footer-props="{
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
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
          </template>
        </v-data-table></v-card-text
      ></v-card
    >
  </div>
</template>

<script>
import AddClient from "@/components/AddClient.vue";
export default {
  components: { AddClient },
  data() {
    return {
      search: "",
      item: null,
      dialog: false,
      headers: [
        {
          text: "ФИО",
          value: "fio",
        },
        {
          text: "Номер телефона",
          value: "phone",
        },
        {
          text: "День рождения",
          value: "birth_date",
        },
        {
          value: "action",
        },
      ],
    };
  },
  methods: {
    editItem(item) {
      this.dialog = true;
      this.item = structuredClone(item);
    },
    deleteItem(id) {
      console.log(id);
      this.$store.dispatch("clients/deleteClient", id);
    },
    confirmEdit() {
      this.$store.dispatch("clients/editClient", { ...this.item });
      this.dialog = false;
    },
  },
  mounted() {
    this.$store.dispatch("clients/getClients");
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