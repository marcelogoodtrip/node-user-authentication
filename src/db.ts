import { Pool } from "pg";

const connectionString = `postgres://bijvepbj:sE75Yc5fs2m8nWpfoUn8SMqMmDh8bS7I@kesavan.db.elephantsql.com/bijvepbj`;

const db = new Pool({ connectionString });

export default db;