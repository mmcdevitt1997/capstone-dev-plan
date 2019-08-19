# <Dev / Plan>

Dev-Plan is my front-end capstone for Nashville Software School built using React. Dev-Plan helps developers breakdown and manage the different tasks.That integrates withGitHub to provide developers with a way to manage projects and tasks. Helping to mange and maximize the devopler's workflow.

## Getting Started

For this react app you will need to install Dev-Plan with.

```
npm install
```

### Installing

Then you just have to run the app with.

```
npm start
```
### GitHub API


### Technologies:
1. Create-React-App,
2. GitHub Firebase Auth
3. Firebase Storage
4. Firebase Database
5. Reactstrap

### Config File
For the config file there should be two files one for firebase dev-plan/src/config/FbConfig.js and another for the GitHub API at dev-plan/src/config/GithubAPIKeys.js

### Firebase Example
```
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import Rebase from "re-base"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);
 const base = Rebase.createClass(app.database())

export {firebaseConfig, base}
```

### GitHub API Example
```
export const clientId ="clientId= "
export const clientSecret = "clientSecret= "
```