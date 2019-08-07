// import React, { Component } from 'react'
// import getUserGithub from "../../githubAPI/getUserGitHub"
// import ProjectHandler from "../../apiHandler/ProjectHandler"

// export default class Ticket extends Component {
//     gitIssues = () => {
//         return getUserGithub.getUser().then(user => {
//             return user
//         }).then(ProjectHandler.get(this.props.match.params.id)).then(project => {
//                   return project
//         }).then(fetch(`https://api.github.com/repos${user.login}/${project.projectName}/issues`).then(tickets => {
//                 return console.log(tickets)
//         }))
//     }

//     render() {

//         return (

//             <div>
//                 <p>hello</p>
//             </div>
//         )
//     }
// }