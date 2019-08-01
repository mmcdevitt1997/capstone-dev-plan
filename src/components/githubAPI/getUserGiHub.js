
const gitHubApi = "https://api.github.com/"
// let gitHubLogin = null

//        export const getCurrentUserGiHub = () => {
//         const currentUserToken = sessionStorage.getItem('token').slice(1,-1)
//            console.log(currentUserToken)
//            return fetch(`${gitHubApi}user?access_token=${currentUserToken}`,{
//          "headers": {
//              "Accept": "application/json"
//          }
//         }
//          )
//                .then(r => r.json())
//                .then(user=>{
//                 console.log (user.login)
//                 let gitHubLogin = user.login
//                })

//        }

       export default Object.create(null, {
        getUser: {
            value: function () {
                const currentUserToken = sessionStorage.getItem('token').slice(1,-1)
                return fetch(`${gitHubApi}user?access_token=${currentUserToken}`,{
                    "headers": {
                        "Accept": "application/json"
                    }
                   }
                ).then(r => r.json())
        }
    }
})
