import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export async function executeQuery(sql: string, params?: any[]) {
    // Create a MySQL connection
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    // Execute the SQL statement
    const [result] = await connection.execute(sql, params);

    // Close the database connection
    await connection.end();

    // Return the query result
    return result;
}