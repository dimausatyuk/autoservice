export default {
    namespaced: true,
    state: {
        all: [
            [
                [
                    {
                        name: "Масло",
                        code: 123,
                        quantity: 12,
                        purchase_price: 555,
                        selling_price: 1,
                    },
                    {
                        name: "Колодки",
                        code: 123,
                        quantity: 12,
                        purchase_price: 555,
                        selling_price: 2,
                    },
                    {
                        name: "Тормозные диски",
                        code: 123,
                        quantity: 12,
                        purchase_price: 555,
                        selling_price: 3,
                    },
                    {
                        name: "Двигатель",
                        code: 123,
                        quantity: 12,
                        purchase_price: 555,
                        selling_price: 4,
                    },

                ],
                [
                    {
                        text: "Наименование",
                        align: "start",
                        value: "name",
                    },
                    { text: "Артикл", value: "code" },
                    { text: "Количество", value: "quantity" },
                    { text: "Цена закупки", value: "purchase_price" },
                    { text: "Цена продажи", value: "selling_price" },
                ]
            ],
            [
                [
                    { num: 1, date: '21.05.06', employees: "Иван Иванов", comment: "Инвентаризация прошла успешно" },
                    { num: 2, date: '21.06.06', employees: "Артем Батрак", comment: "Недостача товаров" }
                ],
                [
                    { text: "Инвернтаризация №", value: "num" },
                    { text: "Дата", value: "date" },
                    { text: "Сотрудник", value: "employees" },
                    { text: "Коментарий", value: "comment" }
                ]
            ],
            [
                [
                    { num: 1, date: "20.01.2001", employees: "Петр Петрович", producer: "Евгений Козлов", comment: '' },
                    { num: 2, date: "20.02.2001", employees: "Николай Петрович", producer: "Евгений Козлов", comment: '' },
                    { num: 3, date: "20.03.2001", employees: "Евгений Петрович", producer: "Евгений Козлов", comment: '' },

                ],
                [
                    { text: "Оприходование №", value: "num" },
                    { text: "Дата", value: "date" },
                    { text: "Сотрудник", value: "employees" },
                    { text: "Поставщик", value: "producer" },
                    { text: "Коментарий", value: "comment" }
                ]
            ]]
    },
    getters: {
    },
    mutations: {
        addItemStorageServese(state, item) {
            state.all[0][0].push(item)
        },
        addItemInventoryServese(state, item) {
            state.all[1][0].push(item)
        },
        addItemPrihodServese(state, item) {
            state.all[2][0].push(item)
        }
    },
    actions: {
    },
}