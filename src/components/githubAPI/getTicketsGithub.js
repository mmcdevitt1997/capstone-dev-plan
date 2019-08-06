import getReposGitHub from './getReposGithub'
import { clientId, clientSecret } from '../../config/GithubAPIKeys'
const gitHubApi = "https://api.github.com/"

export default Object.create(getUserGiHub, {
    getTickets: {
        value: function () {
            getReposGitHub.getRepos().then(repos => repos.name).then(projectTickets =>
                fetch(`${gitHubApi}users/${userLogin}/repos? ${clientId}&${clientSecret}`).then(data => data.json())

            )
        }
    }
})