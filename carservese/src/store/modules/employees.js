export default {
    namespaced: true,
    state: {
        headers: [
            { text: "ФИО", value: "fio" },
            { text: "Должность", value: "role" },
            { text: "Номер телефона", value: "phone" },
            { text: "Логин", value: "login" },
        ],
        items: [
            {
                fio: "Иван Иванов",
                role: "Механик",
                phone: "891831231222",
                login: "ivan112",
            },
            {
                fio: "Иван Иванов",
                role: "Администратор",
                phone: "891831231222",
                login: "ivan1",
            },
            {
                fio: "Иван Иванов",
                role: "Механик",
                phone: "891831231222",
                login: "ivan2",
            },
            {
                fio: "Иван Иванов",
                role: "Механик",
                phone: "891831231222",
                login: "ivan3",
            },
        ],

    },
    getters: {
    },
    mutations: {
        addEmployee(state, data) {
            state.items.push(data)
        }
    },
    actions: {
    },
}