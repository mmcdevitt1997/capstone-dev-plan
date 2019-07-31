import {getUserInSessionStorage} from "../../auth/UserManager"
import {clientSecret, clientId} from "../../config/GithubAPIKeys"

const gitHubApi = "https://api.github.com/"
const currentUserToken = sessionStorage.getItem('token')

       export const getCurrentUserRepos = () => {
         return fetch(`${gitHubApi}user?access_token =${currentUserToken}`)
               .then(r => r.json())
               .then(test => console.log(test))
       }
    //    https://api.github.com/users/Matthew McDevitt/repos

