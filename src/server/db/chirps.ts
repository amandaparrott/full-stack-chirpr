import { Query } from './index';

// interface IChirpsT {
//     id: number;
//     userid: number;
//     content: string;
//     location: string;
//     _create: Date;
//     name: string;
// }

// const writeChirp = async (userid: string, chirps: string) => Query('insert into chirps(userid, content) values (?, ?));

const getChirps = async () => Query(`
    SELECT
        chirps.*,
        users.name
    FROM chirps
    JOIN users ON  users.id = chirps.userid
`);

const getChirp = async (id: number) => Query(` 
    SELECT 
        chirps.*, 
        users.name 
    FROM chirps 
    JOIN users ON users.id = chirps.userid 
    WHERE chirps.id = ?
    `, 
    [id]);
    
// const editChirp = async (chirp: string, id: number) => Query(`
//     UPDATE chirps
//     SET content = ?
//     WHERE id =?;
// `, [chirp, id]);
// const deleteChirp = async (id: number, chirp: string) => Query();

export default {
    // writeChirp,
    getChirps,
    getChirp,
    // editChirp,
    // deleteChirp
}