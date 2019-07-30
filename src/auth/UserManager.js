import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import { base } from '../config/FbConfig'



const url = "https://dev-plan-578fe.firebaseio.com/users"

const provider = new firebase.auth.GithubAuthProvider();

const setUserInSessionStorage = (user) => {
    sessionStorage.setItem("user",JSON.stringify(user) )
}

export const getAllUsers = () => {
    return fetch(`${url}.json`)
        .then(res => res.json())

}

export const getUser = (userId) => {
    return fetch(`${url}/${userId}.json`)
        .then(res => res.json())
}

export const saveUserToJson = (user) => {
    return base.post(`users/${user.id}`, {
      data: user
    })
      .then(() => {
        setUserInSessionStorage(user)

        //gives the user object back in order to set the user in local storage
        return user;
      })
  }

// this compares the  users in the database and the github user and will add if
export const checkExistingUsers = (newUser) => {
    return getAllUsers()
        .then(objectOfUsers => {
            let userObjArray = []
            console.log (objectOfUsers)
            if (objectOfUsers !== null) {
                const userArray = Object.keys(objectOfUsers).map(keys => {
                    let newObj = { ...objectOfUsers[keys] }
                    return newObj
                })
                userObjArray = userArray.filter(user => {
                    if (user.id === newUser.uid) {
                        return true
                    } else {
                        return false
                    }
                })
                if (!!userObjArray[0]) {

                    setUserInSessionStorage(userObjArray[0])

                    return userObjArray[0]
                } else {

                    let userToSave = {
                        name: newUser.displayName,
                        username: newUser.displayName,
                        email: newUser.email,
                        password: '',
                        userImage: newUser.photoURL,
                    }

                    userToSave.id = newUser.uid

                    saveUserToJson(userToSave)
                    return userToSave
                }
            }
            return userObjArray[0]
        })
}

export const loginWithGithub = () => {
    return firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...

            console.log("token: ", token, "user: ", user)
            return checkExistingUsers(user)

        })
}