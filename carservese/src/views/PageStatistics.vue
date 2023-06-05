<template>
  <div>
    <v-container>
      <v-row>
        <v-col align-self="center" md="5"
          ><v-card-title>Выбрать период для статистики</v-card-title></v-col
        >
        <date-feild :textLabel="'Дата начала периода'"></date-feild>
        <date-feild :textLabel="'Дата конца периода'"></date-feild>
      </v-row>
      <v-row>
        <v-col v-for="(item, i) in cardList.slice(0, 3)" :key="i">
          <v-card color="blue lighten-5">
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              <v-icon size="30px" color="blue darken-2">{{ item.icon }}</v-icon>
              <span style="font-size: 18px; margin-left: 15px"
                >{{ item.value }}
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, i) in cardList.slice(3)" :key="i">
          <v-card color="blue lighten-5">
            <v-card-title primary-title>
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              <v-icon size="30px" color="blue darken-2">{{ item.icon }}</v-icon>
              <span style="font-size: 18px; margin-left: 15px"
                >{{ item.value }}
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DateFeild from "@/components/DateFeild.vue";
export default {
  data() {
    return {
      cardList: [
        {
          icon: "mdi-basket-plus-outline",
          title: "Количество продаж",
          value: 12,
        },
        {
          icon: "mdi-account-plus",
          title: "Новых клиентов",
          value: 15,
        },
        {
          icon: "mdi-car-wrench",
          title: "Заказов в работе",
          value: 5,
        },
        {
          icon: "mdi-cash",
          title: "Выручка",
          value: 10000,
        },
        {
          icon: "mdi-chat-remove",
          title: "Отказы",
          value: 2,
        },
      ],
    };
  },
  components: { DateFeild },
};
</script>

<style>
</style>