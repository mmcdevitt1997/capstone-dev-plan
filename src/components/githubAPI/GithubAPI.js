
const gitHubApi = "https://api.github.com/"
let userLogin = getCurrentUserGiHub

       export const getCurrentUserGiHub = () => {
        const currentUserToken = sessionStorage.getItem('token').slice(1,-1)
           console.log(currentUserToken)
         return fetch(`${gitHubApi}user?access_token=${currentUserToken}`,{
         "headers": {
             "Accept": "application/json"
         }
        }
         )
               .then(r => r.json())
               .then(test => console.log(test.login))
       }

