import { useState, useContext } from 'react';
import GithubContext from '../context/githubContext';
import AlertContext from './../context/alertContext/AlertContext';
import { searchUsers } from './../context/githubActions';
function SearchUsers(props) {
    const { users,dispatch } = useContext(GithubContext)
    const {setAlert,alert}=useContext(AlertContext)
    const [text,setText]=useState("")
    const handleChange = (e) => { setText(e.target.value) }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text === "") { setAlert("error","Please enter something") }
        else {
            //Todo some thing
            dispatch({type:"SET_LOADING"})
            const users = await searchUsers(text)
            dispatch({type:"GET_USERS",payload:users})
            setText("")
        }
    }
    return (
        <div >
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-8 mb-8">
                <div className="relative ">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <div className="relative">
                                <input onChange={handleChange} type="text" value={text} className="input w-full  input-lg text-black bg-gray-200" placeholder='Search' />
                                <button type="submit" className="btn btn-ghost absolute top-0 right-0 rounded-l-none btn btn-lg w-36 text-black ">Go</button>
                            </div>
                        </div>
                    </form>
                </div>
                {users.length>0 && (
                <div >
                    <button className="btn btn-ghost btn-lg" onClick={()=>dispatch({type:"CLEAR_USERS"})}>
                        Clear
                        </button>
                </div>
                )}
            </div>
        </div>
    );
}

export default SearchUsers;