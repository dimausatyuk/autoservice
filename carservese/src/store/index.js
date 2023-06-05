import Vue from 'vue'
import Vuex from 'vuex'
import storeCar from "./modules/storeCar"
import orders from "./modules/orders"
import employees from "./modules/employees"
import clients from "./modules/clients"

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    storeCar, orders, employees, clients
  }
})
