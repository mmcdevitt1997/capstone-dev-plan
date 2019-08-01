import getUserGiHub from './getUserGiHub'
import { clientId, clientSecret } from '../../config/GithubAPIKeys'
const gitHubApi = "https://api.github.com/"

export default Object.create(getUserGiHub, {
    getRepos: {
        value: function () {
           return getUserGiHub.getUser().then(res => res.login).then(userLogin =>
               fetch(`${gitHubApi}users/${userLogin}/repos? ${clientId}&${clientSecret}`).then(data => data.json().then(repos => repos.name))

            )}}})