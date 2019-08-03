import React from "react";
import getReposGithub from "../githubAPI/getReposGithub";

const gitRepoNames = () =>{ getReposGithub.getRepos().then(data => {
    data.forEach(function (project) {
       return project.name
    })
})
}

export default class AutoComplete extends React.Component {

    constructor(props) {
        super(props);
        this.projectNames = gitRepoNames()
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChanged = (i) => {
        const value = i.target.value
        let suggestions = []
        if (value.length === 0) {
            const regex = new RegExp(`^${value}`)
            suggestions = this.projectNames.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({ suggestions, text: value }));
    }
    suggestionSelected (value){
        this.setState(() =>({
          text: value,
          suggestions:[]
        }))
    }


renderSuggestions(){
    const { suggestions } = this.state
    if (suggestions.length === 0) {
        return null
    }
    return (
        <ul>
            {this.suggestions(projectNames => (
                <li onClick= {()=>this.suggestionSelected(projectNames)}>{projectNames.name}</li>
            ))}
        </ul>
    )

}

render() {
    const {text} = this.state
    return (
        <div>
            <input value ={text} onChange={i => i.target.value} type="text" />
             {this.renderSuggestions()}
        </div>
    )}}
