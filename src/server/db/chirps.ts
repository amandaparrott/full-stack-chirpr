import { Query } from './index';


const writeChirp = async (userid: string, content: string) => Query(`
INSERT INTO chirps(userid, content) 
VALUES (?, ?)
`, [userid, content]);

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
     WHERE id = ?;
 `, [content, id]);

const deleteChirp = async (id: number) => Query(`
    DELETE FROM chirps
    WHERE id = ?;
`, [id]);

export default {
    writeChirp,
    getChirps,
    getChirp,
    editChirp,
    deleteChirp
}