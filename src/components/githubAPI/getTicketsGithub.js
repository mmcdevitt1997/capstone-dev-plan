import getRepos from './getReposGithub'
import { clientId, clientSecret } from '../../config/GithubAPIKeys'
const gitHubApi = "https://api.github.com/"

export default Object.create(getUserGiHub, {
    getTickets: {
        value: function () {
           return getUserGiHub.getUser().then(res => res.login).then(userLogin =>
               fetch(`${gitHubApi}users/${userLogin}/repos? ${clientId}&${clientSecret}`).then(data => data.json())

            )}}})