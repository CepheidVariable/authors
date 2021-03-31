const AuthorForm = props => {
    const {inputs, action, submitValue, onChangeHandler, onSubmitHandler, errors } = props;

    return(
        <form onSubmit={onSubmitHandler} className="col-6 mt-2">
            <h2 className="text-center mb-3">{action}</h2>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value= {inputs.name}
                        onChange={onChangeHandler}
                    />
                </div>
                <span className="text-danger offset-3 pl-3">{errors.name && errors.name.message}</span>
            </div>
            <div className="form-group row">
                <div className="col-sm-2">
                    <input
                        type="submit"
                        className="form-control btn btn-dark"
                        value={submitValue}
                    />
                </div>
            </div>
        </form>
    )
}

export default AuthorForm;