import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'




const url = "https://dev-plan-578fe.firebaseio.com/users"

const provider = new firebase.auth.GithubAuthProvider();

const setUserInSessionStorage = () => {
    const user = sessionStorage.getItem("user")
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
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(newUser => {
            setUserInSessionStorage(newUser);
            return newUser;
        });
}
export const checkExistingUsers = (newUser) => {
    return getAllUsers()
        .then(objectOfUsers => {
            let userObjArray = []
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



export const registerWithFirebase = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(data => {
            return data.user.uid;
        })
}

export const register = (user) => {
    return registerWithFirebase(user.email, user.password)
        .then(firebaseId => {
            user.id = firebaseId;
            user.password = '';
        })
        .then(() => saveUserToJson(user))
}


export const login = (email, password) => {
    return registerWithFirebase(email, password)
        .then(firebaseId => {
            return getUser(firebaseId);
        })
        .then(userFromJson => {
            setUserInSessionStorage(userFromJson);
            return userFromJson;
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

        })
}