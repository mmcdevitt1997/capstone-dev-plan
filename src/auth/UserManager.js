import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import base from '../../node_modules/re-base';



const url = "https://dev-plan-578fe.firebaseio.com/users"

const provider = new firebase.auth.GithubAuthProvider();

const setUserInSessionStorage = () => {
    const user = sessionStorage.getItem("user")
}

export const getUser = (userId) => {
    return fetch(`${url}/${userId}.json`)
        .then(res => res.json())
}

// export const saveUserToJson = (user) => {
//     return fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(newUser => {
//         setUserInSessionStorage(newUser);
//         return newUser;
//       });
//   }

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