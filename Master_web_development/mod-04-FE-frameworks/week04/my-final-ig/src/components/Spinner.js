function Spinner() {
    return (
        <div className="text-center p-5">
            <strong>Loading... </strong>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;