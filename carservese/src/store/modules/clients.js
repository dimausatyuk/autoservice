export default {
    namespaced: true,
    state: {
        clients: []
    },
    getters: {
    },
    mutations: {
        getClients(state, data) {
            state.clients = data
        },
        editClient(state, data) {

            let clientIndex = state.clients.findIndex((item) => item.id = data.id)
            state.clients[clientIndex].fio = data.fio
            state.clients[clientIndex].phone = data.phone
            state.clients[clientIndex].birth_date = data.birth_date

        },
        addClient(state, data) {
            console.log(data);
            state.clients.push(data)
        },
        deleteClient(state, code) {
            state.clients = state.clients.filter(item => item.id != code)
        }
    },
    actions: {
        async getClients(context) {
            const response = await fetch("http://localhost:8088/api/clients")
            const json = await response.json()
            context.commit("getClients", json)
        },
        async editClient(context, payload) {
            await fetch("http://localhost:8088/api/client", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(payload)
            })
            context.commit("editClient", payload)
        },
        async addClient(context, payload) {
            const response = await fetch("http://localhost:8088/api/client", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })
            const json = await response.json()
            console.log(json);
            context.commit("addClient", json)
        },
        async deleteClient(context, code) {
            context.commit("deleteClient", code)
            await fetch("http://localhost:8088/api/client", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: code })
            })
        }
    },
}