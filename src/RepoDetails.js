export default function RepoDetails({ details, readme, loading}) {
    if (loading) {
        return(
            <h1 className="loader">Loading...</h1>
        )
    }
    return (
        <div className="repo-details-container">
            <div className="details-row">
                <label className="label">Name:</label>
                <span className="value">{details.name}</span>
            </div>

            <div className="details-row">
                <label className="label">Language:</label>
                <span className="value">{details.language}</span>
            </div>

            <div className="details-row">
                <label className="label">Readme:</label>
                <span className="value">{readme}</span>
            </div>
        </div>

    )
}