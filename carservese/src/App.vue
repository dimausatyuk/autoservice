<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="blue darken-3"
      width="180px"
      v-model="drawer"
      app
    >
      <v-list
        ><v-list-item
          v-for="item in items"
          :key="item.title"
          @click="$router.push(item.path)"
          ><v-list-item-icon left
            ><v-icon color="white">{{ item.icon }}</v-icon></v-list-item-icon
          >
          <v-list-item-title
            class="v-list-item-title-color"
            v-text="item.title"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue-grey lighten-5" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Автосервис</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data: () => {
    return {
      drawer: false,
      items: [
        { title: "Склад", icon: "mdi-home ", path: "/storage" },
        { title: "Заказы", icon: "mdi-clipboard-list", path: "/orders" },
        {
          title: "Статистика",
          icon: "mdi-chart-areaspline",
          path: "/statistics",
        },
        { title: "Сотрудники", icon: "mdi-account", path: "/employees" },
        { title: "Клиенты", icon: "mdi-account", path: "/clients" },
      ],
      document: { document: "" },
    };
  },
};
</script>
<style scoped>
.v-list-item-title-color {
  color: rgb(255, 255, 255);
}
</style>