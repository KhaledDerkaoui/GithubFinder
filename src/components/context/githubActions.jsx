import axios from "axios"


const github = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_URL,
    // headers: {
    //         Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
    // }
})


//Search users
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q:text
    })
    const res = await github.get(`/search/users?${params}`)
    
    return res.data.items
}



//    //Get user
//    export const getUser= async (login) => {
   
//     const res = await github.get(`/users/${login}`)
//     if (res.status === 404) {
//         window.location='/notfound'
//     } else {
//         return res.data
//     }
// }

 
// //Get repos
// export const getRepos = async (login) => {
   
//     const res = await github.get(`/users/${login}/repos`)
//     if (res.status === 404) {
//         window.location='/notfound'
//     } else {
//         return res.data
//     }
// }

//Get user and repos

export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`)
    ])
  
    return { user: user.data, repos: repos.data }
  }
