import { navigate } from "@reach/router";
import axios from "axios";
import { useState } from "react"
import AuthorForm from '../components/AuthorForm';

const New = props => {
    const [author, setAuthor] = useState({
        name: ""
    });
    const [errors, setErrors] = useState(false);

    const handleChange = e => {
        setAuthor({
            ...author,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', author)
            .then(() => navigate('/'))
            .catch(err => {
                setErrors(err.response.data.errors)
            });
        setAuthor({
            name: ""
        })
    }

    return (
        <>
            <AuthorForm
                inputs={author}
                action={"Add Author"}
                submitValue="Create"
                onChangeHandler={handleChange}
                onSubmitHandler={handleSubmit}
                errors={errors}
            />
        </>
    )
}

export default New;