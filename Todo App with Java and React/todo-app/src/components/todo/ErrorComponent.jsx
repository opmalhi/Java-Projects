const ErrorComponent = () => {
    return (
        <div className="ErrorComponent">
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="text-center p-5 border rounded-3 shadow" style={{ maxWidth: '400px', backgroundColor: '#f8d7da' }}>
                    <h2 className="text-danger mb-3">Oops! Something Went Wrong</h2>
                    <p className="text-muted">
                        We’re sorry, but an error has occurred. Please try again or go back to the home page.
                    </p>
                    <button className="btn btn-danger mt-3 px-4" onClick={() => window.location.href = '/'}>
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorComponent