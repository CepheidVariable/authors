import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "@reach/router";

const Main = () =>{
    const [authors, setAuthors] = useState();
    const [errors, setErrors] = useState();

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data.results))
            .catch(err => setErrors(err.response.errors));
    }, []);

    const handleDelete = id =>{
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res => setAuthors(res.data.results))
            .catch(err => setErrors(err.response.errors))
    }

    return(
        <>
            <h1 className="mt-5">Favorite Authors</h1>
            <Link to={`/new`} className="mt-3 mb-3 btn btn-primary">Add Author</Link>
            <table className="table col-6  ml-auto mr-auto">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors && authors.map( (a, idx) =>
                        <tr key={idx}>
                            <td>{a.name}</td>
                            <td>
                                <Link to={`/edit/${a._id}`} className="btn btn-sm btn-secondary">Edit</Link>
                                <button onClick={() => handleDelete(a._id)} className="btn btn-sm btn-danger ml-2">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Main;