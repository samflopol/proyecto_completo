import{ createPool}from "mysql2/promise"
const pool=createpoool({
    host:'localhost',
    port:'3306',
    user:'prueba01',
    password:'prueba0',
    database:'prueba0'
});

export default pool;