import * as express from "express";
import db from "../db"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(await db.chirps.getChirps());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  console.log("test");
  const id = Number(req.params.id);
  try {
    const [chirp] = await db.chirps.getChirp(id);
    res.json(chirp);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(await db.chirps.editChirp(req.body.content, req.body.id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    let newUser = await db.users.newUser(name);
    console.log(newUser);
    res.json(await db.chirps.writeChirp(newUser.insertId, req.body.content)[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await db.chirps.deleteChirp(parseInt(req.params.id)));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;

// import * as express from "express";
// import {
//   GetChirps,
//   GetChirp,
//   UpdateChirp,
//   CreateChirp,
//   DeleteChirp,
// } from "../utils/chirpstore";

// const router = express.Router();

// router.get("/", (req: Express.Request, res: express.Response) => {
//   let data = GetChirps();
//   const chirps = Object.keys(data).map((key) => {
//     return {
//       id: key,
//       user: data[key].user,
//       text: data[key].text,
//     };
//   });

//   chirps.pop();
//   res.json(chirps);
// });

// router.get("/:id", (req, res) => {
//   let id = req.params.id;
//   const data = GetChirp(id)
//   const chirp = {
//     id: id,
//     user: data.user,
//     text: data.text
//   }
//   res.send(JSON.stringify(chirp));
// });

// router.post("/", (req, res) => {
//     CreateChirp({
//     user: req.body.user,
//     text: req.body.text,
//   });
//   res.sendStatus(200);
// });

// router.put("/:id", (req, res) => {
//     UpdateChirp(req.params.id, req.body);
//   res.sendStatus(200);
// });

// router.delete("/:id", (req, res) => {
//   DeleteChirp(req.params.id);
//   res.sendStatus(200);
// });

// export default router;
