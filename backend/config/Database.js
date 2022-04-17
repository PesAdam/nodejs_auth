import { Sequelize } from "sequelize";

const db = new Sequelize(
    'hz024703db',
    'hz024700',
    'dhynydor',
    {
        host: "46.229.230.164",
        dialect: "mysql"
    }

)

export default db;