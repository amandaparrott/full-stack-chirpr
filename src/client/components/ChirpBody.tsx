import react from 'react';
// import React from 'react';


import React from "react";
import { Link } from 'react-router-dom';


const ChirpBody: React.FC<IChirpBodyProps> = props => {
  return (
    <div className="row d-flex justify-content-center">
    <div className="chirpbody card text-center col-8 m-3 shadow-lg border border-secondary rounded-lg bg-warning">
      <div className="card-body">
        <h5 className="card-title">@{props.chirp.name}</h5>
        <p className="card-text">{props.chirp.content}</p>
        <Link to={`/${props.chirp.id}/admin`} >
        <button className="btn btn-secondary rounded">Admin</button>
        </Link> 
        </div>
    </div>
    </div>
  );
};

interface IChirpBodyProps {
    chirp: {
        id: string,
        name: string,
        content: string    
      }
}

export default ChirpBody;