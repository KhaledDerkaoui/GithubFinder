import { useContext } from 'react';
import Spinner from './../layout/Spinner';
import UserItem from './UserItem';
import GithubContext, { GithubProvider } from './../context/githubContext';

function UsersResults(props) {
    const {users,loading} =useContext(GithubContext)
    
    
    
    if (!loading) {
        return (
            <div className='grid grid-col gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map(user => <UserItem key={user.id} user={ user }/> )}
                </div>
        );
    }
    return <Spinner/>
    
}

export default UsersResults;