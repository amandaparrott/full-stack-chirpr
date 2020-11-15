import * as mysql from 'mysql';
import chirps from './chirps';
import users from './users';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'hello589',
    database: 'chirpr2'
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve (results);
        })
    })
}

export default {
    chirps,
    users
}