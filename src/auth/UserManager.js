import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { base } from "../config/FbConfig";

const url = "https://dev-plan-578fe.firebaseio.com/users";

const provider = new firebase.auth.GithubAuthProvider();

export const setUserInSessionStorage = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user))
};

export const sessionStorageToken = token => {
    sessionStorage.setItem ("token", JSON.stringify(token) )
}
export const getUserInSessionStorage = () => {
  // eslint-disable-next-line
  const user = sessionStorage.getItem("user");
};
export const sessionStorageUserId = userId => {
  sessionStorage.setItem ("userId",userId)
}

export const getAllUsers = () => {
  return fetch(`${url}.json`).then(r => r.json());
};

export const getUser = userId => {
  return fetch(`${url}/${userId}.json`).then(r => r.json());
};

export const saveUserToJson = user => {
  return base
    .post(`users/${user.id}`, {
      data: user
    })
    .then(() => {
      setUserInSessionStorage(user);
      //gives the user object back in order to set the user in local storage
      return user;
    });
};

// this compares the  users in the database and the github user and will add if the user isn't there
export const checkExistingUsers = (newUser) => {
  return getAllUsers().then(objectOfUsers => {
    let userObjArray = [];
    console.log(objectOfUsers);
    if (objectOfUsers !== null) {
      const userArray = Object.keys(objectOfUsers).map(keys => {
        let newObj = { ...objectOfUsers[keys] };
        return newObj;
      });
      userObjArray = userArray.filter(user => {
        if (user.id === newUser.uid) {
          return true;
        } else {
          return false;
        }
      });
      if (!!userObjArray[0]) {
        setUserInSessionStorage(userObjArray[0]);

        return userObjArray[0];
      } else {
        let userToSave = {
          name: newUser.displayName,
          username: newUser.displayName,
          email: newUser.email,
          password: "",
          userImage: newUser.photoURL,

        };

        userToSave.id = newUser.uid;

        saveUserToJson(userToSave);
        return userToSave;
      }
    }
    return userObjArray[0];
  });
};

export const loginWithGithub = () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      const gitHubApi = "https://api.github.com/"

      const getCurrentUserReposTest = () => {
                   fetch(`${gitHubApi}user?$access_token=${token}`)
                     .then(r => r.json())

             }
       sessionStorageToken(token)

       sessionStorageUserId(user.uid)

      return checkExistingUsers(user, token);

    });
};
