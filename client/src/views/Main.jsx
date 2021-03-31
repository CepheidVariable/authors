import { useEffect, useState } from "react";
import axios from 'axios';

const Main = () =>{
    const [authors, setAuthors] = useState();
    const [errors, setErrors] = useState();

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data.results))
            .catch(err => setErrors(err.response.errors));
    });

    return(
        <>
            <h1>Favorite Authors</h1>
            <button></button>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {authors && authors.map( (a, idx) => {
                        <tr key={idx}>
                            <td>{a.name}</td>
                            <td>
                                <button className="btn btn-sm btn-secondary">Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Main;