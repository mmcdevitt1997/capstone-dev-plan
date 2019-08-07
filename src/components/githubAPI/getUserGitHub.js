
const gitHubApi = "https://api.github.com/"


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
