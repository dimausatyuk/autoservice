export default {
    namespaced: true,
    state: {
        headers: [
            {
                text: "Номер заказа",
                align: "start",
                value: "num",
            },
            { text: "Дата заказа", value: "date" },
            { text: "Статус", value: "status" },
            { text: "Транспорт", value: "car" },
            { text: "Клиент", value: "client" },
            { text: "Стоимость", value: "price" },
            { text: "Сотрудник-ответственный", value: "employee" },
        ],
        items: [
            {
                num: 1,
                date: '15 - 06 - 2009',
                status: "В ремонте",
                car: "Ford focus 1999 года",
                client: "Артем Батрак",
                price: 12000,
                employee: 'Иван Иванов'
            },
            {
                num: 2,
                date: '20 - 06 - 2009',
                status: "В ремонте",
                car: "Ford focus 1999 года",
                client: "Артем Батрак",
                price: 12000,
                employee: 'Иван Иванов'
            }, {
                num: 3,
                date: '21 - 06 - 2009',
                status: "На диагностике",
                car: "Ford focus 1999 года",
                client: "Артем Батрак",
                price: 12000,
                employee: 'Иван Иванов'
            }, {
                num: 4,
                date: '22 - 06 - 2009',
                status: "На согласовании",
                car: "Ford focus 1999 года",
                client: "Артем Батрак",
                price: 12000,
                employee: 'Иван Иванов'
            },
        ],
    },
    getters: {
    },
    mutations: {
        addOrder(state, data) {
            state.items.push(data)
        }
    },
    actions: {
    },
}