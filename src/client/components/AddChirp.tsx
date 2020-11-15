import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';
// import HomePage from './HomePage';
import { Link } from 'react-router-dom';


const AddChirp: React.FC<IAddChirpProps> = props => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // const handleNameChange = (e) => setName(e.target.value);
  // const handleContentChange = (e) => setContent(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
    newChirp();
    history.push('/');
  }


  const history = useHistory();


  const newChirp = async () => {

    const chirp = {
      name: name,
      content: content
    };
    let res = await fetch("/api/chirps", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chirp),
    })
    if (res.ok) {
      console.log('chirp posted');

    } else {
      console.log('chirp not posted');
    }
  }

  return (
    <form className="d-flex justify-content-center align-items center">
      <div className="form-group col col-6 shadow-lg border border-info rounded mt-3 text-center">
        <label className="font-weight-bolder">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <div className="form-group">
          <label className="font-weight-bolder">Chirp</label>
          <input
            type="text"
            className="form-control"
            placeholder="Chirp it out!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <button
          className="btn btn-info btn-block w-50 mx-auto shadow-sm mb-2"
          onClick={e => handleClick(e)}
        >
          Chirp Chirp Bro!
              </button>
      </div>
    </form>
  );

}
interface IAddChirpProps extends RouteComponentProps {
  // id: number;
  // userid: string;
  // content: string;
}




export default AddChirp;