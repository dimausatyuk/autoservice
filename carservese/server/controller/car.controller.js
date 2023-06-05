const db = require("../db");


class CarController {
    async createClient(req, res) {
        res.header("Access-Control-Allow-Origin", "http://192.168.1.71:8081")
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        const { fio, phone, birth_date } = req.body
        const newClient = await db.query("insert into client (fio,phone,birth_date) values($1, $2, $3) returning *", [fio, phone, birth_date])
        res.json(newClient.rows[0])
    }
    async getClient(req, res) {
        res.header("Access-Control-Allow-Origin", "*")
        const { id } = req.body
        const client = await db.query("select * from client where id = $1", [id])
        res.json(client.rows[0])
    }
    async getClients(req, res) {
        res.header("Access-Control-Allow-Origin", "*")
        const client = await db.query("select * from client")
        res.json(client.rows)
        console.log(client);
    }
    async updateClient(req, res) {
        res.header("Access-Control-Allow-Origin", "*")
        const { id, fio, phone, birth_date } = req.body
        const newClient = await db.query("update client set fio=$2,phone=$3,birth_date=$4 where id = $1 returning *", [id, fio, phone, birth_date])
        res.json(newClient)
    }
    async deleteClient(req, res) {
        res.header("Access-Control-Allow-Origin", "*")
        const { id } = req.body
        const newClient = await db.query("delete from client where id = $1 returning *", [id])
        res.json(newClient)
    }
}
module.exports = new CarController()