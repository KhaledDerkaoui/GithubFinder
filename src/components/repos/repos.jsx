import { useContext } from 'react';
import GithubContext from '../context/githubContext';
import RepoItem from './repoItem';


function Repos() {
    const {repos}= useContext(GithubContext)
    return (
        <div className='card rounded-lg shadow-lg bg-base-100'>
            <div className="card-body">
            <h2 className="card-title text-3xl my-4 font-bold">
                Last Repos
            </h2>
            
            {repos.map(repo => <RepoItem key={repo.id} repo={repo}/>)}
            </div>
        </div>
    );
}

export default Repos;