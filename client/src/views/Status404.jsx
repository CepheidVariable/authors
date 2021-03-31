import { Link } from "@reach/router";

const Status404 = props => {
    return(
        <>
            <h1 className="display-1">404</h1>
            <p className="display-4">Unable to find that author.</p>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/new" className="btn btn-primary ml-4">Create Author?</Link>
        </>
    )
}

export default Status404;