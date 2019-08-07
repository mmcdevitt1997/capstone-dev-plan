
import getUserGiHub from "./getUserGitHub"
import getUserGithub from "./getUserGitHub"
import ProjectHandler from "../apiHandler/ProjectHandler"

export default Object.create(getUserGiHub, {
    getTickets: {
        value: function () {
            return Promise.all([getUserGithub.getUser(), ProjectHandler.get(this.props.match.params.id)])
                .then(dataArr => fetch(`https://api.github.com/repos/${dataArr[0].login}/${dataArr[1].projectName}/issues`))
                .then(tickets => tickets.json())
                .then(ticket => ticket)
        }
    }
})

