import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams, RouteComponentProps } from 'react-router-dom';

const EditChirps: React.FC<IEditProps> = (props: IEditProps) => {

    const [name, setName] = useState<string>('');
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${props.match.params.id}`);
            let chirp = await res.json();
            setName(chirp.name);
            setContent(chirp.content);
        })()
    }, []);

    // const handleUserChange = (e) => setUsers(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const editChirp = async (id: string) => {
        
        const chirp = {
            id: id,
            name: name,
            content: content
        };

        let res = await fetch(`/api/chirps/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(chirp)
        })

        if (res.ok) {
            props.history.push('/');
            console.log('chirp edited');
        } else {
            console.log('chirp edit failed');
        }
    }

    const deleteChirp = async (id: string) => {
        let res = await fetch(`/api/chirps/${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            console.log('chirp deleted');
            props.history.push('/');
        } else {
            console.log('delete not successful');
        }
    };

    return (
        <div className="editcard container">
        <div className="card row text-center d-flex justify-content-center bg-warning m-3 shadow-lg border border-info rounded">
            <div className="card-body text-center">
            <h5 className="card-title">@{name}</h5>
                <textarea className="card-text col" defaultValue={content} onChange={(e) => handleContentChange(e)}></textarea>
                <button className="btn btn-secondary rounded mx-4" onClick={() => editChirp(props.match.params.id)}>Save Edit</button>
                <button className="btn btn-secondary rounded mx-4" onClick={() => deleteChirp(props.match.params.id)}>Delete Chirp</button>
            </div>
        </div>
        </div>
    )
}

interface IEditProps extends RouteComponentProps<{id: string}> { }
export default EditChirps;