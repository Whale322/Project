import React, { useState } from "react";
import './App.css';
import axios from "axios";
import RepoDetails from "./RepoDetails";


export const List = (

function App(){
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [details, setDetails] = useState({});
    const [readme, setReadme] = useState("");
    const [detailsLoading, setDetailsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        searchRepos();
    };

    function searchRepos(){
        setLoading(true);
        axios({
            method: "get",
            url: `https://api.github.com/users/${username}/repos`,
        }).then(res => {
            setLoading(false);
            setRepos(res.data);
        });
    }

    function renderRepo(repo){
        return (
            <div className="row" onClick={() => getDetails(repo.name)} key={repo.id}>
                <h2 className="repo-name">
                    {repo.name}
                </h2>
            </div>
        );
    }

    function getDetails(repoName) {
        setDetailsLoading(true);
        axios({
            method: "get",
            url: `https://api.github.com/repos/${username}/${repoName}`,
        }).then(res => {
            setDetailsLoading(false);
            setDetails(res.data);
        });
        axios({
            method: "get",
            url: `https://api.github.com/repos/${username}/${repoName}/contents/README.md`,
        }).then(res => {
            setLoading(false);
            setReadme(atob(res.data.content));
        });
    }

    return(
        <div className="page">
                <form className="form">
                    <input
                        className="input"
                        value={username}
                        placeholder='GitHub Username'
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
                </form>
            <div className="landing-page-container"  display="flex">
                <div className="left-side">
                    <div className="results-container">
                        {repos.map(renderRepo)}
                    </div>
                </div>
                <RepoDetails details={details} readme = {readme} loading={detailsLoading} />
            </div>
        </div>
    )
})