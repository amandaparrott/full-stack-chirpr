import { Query } from './index';
// import type { TChirps, TUsers } from './models'

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

const getChirp = async (id: any) => 
    Query(` 
    SELECT 
        chirps.*, 
        users.name 
    FROM chirps 
    JOIN users ON users.id = chirps.userid 
    WHERE chirps.id = ?
    `, 
    [id]);
    
 const editChirp = async (content: string, id: number) => Query(`
     UPDATE chirps
     SET content = ?
     WHERE id =?;
 `, [content, id]);
// const deleteChirp = async (id: number, chirp: string) => Query();

export default {
    // writeChirp,
    getChirps,
    getChirp,
    editChirp,
    // deleteChirp
}