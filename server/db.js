import pg from "pg";
const pool = new pg.Pool({
    user: "postgres",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

export default pool;