import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react"
import AuthorForm from '../components/AuthorForm';

const Edit = props => {
    const [author, setAuthor] = useState();
    const [errors, setErrors] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors/' + props.id)
            .then(res => setAuthor(res.data.results[0]))
            .catch(err => {
                navigate('/404'); //add 404 redirect
            });
    }, [props]);

    const handleChange = e => {
        setAuthor({
            ...author,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + props.id, author)
            .then(() => navigate('/'))
            .catch(err => {
                setErrors(err.response.data.errors)
            });
    }

    return (
        author ?
        <AuthorForm
            inputs={author}
            action={"Edit Author"}
            submitValue="Update"
            onChangeHandler={handleChange}
            onSubmitHandler={handleSubmit}
            errors={errors}
        /> : <h2>Loading...</h2>
    )
}

export default Edit;