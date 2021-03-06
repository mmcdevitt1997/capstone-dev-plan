
const url = "https://dev-plan-578fe.firebaseio.com"




export default Object.create(null, {
    get: {
        value: function (resource, id) {
            return fetch(`${url}/${resource}/${id}.json`).then(data => data.json())
        }
    },
    all: {
        value: function (resource) {
            return fetch(`${url}/${resource}.json?orderBy="userId"&equalTo="${sessionStorage.getItem("userId")}"`).then(data => data.json())
        }
    },

    getAllExpand: {
     value: function (resource, expandResource) {
         return fetch(`${url}/${resource}?_expand=${expandResource}&_sort=timeStamp.json`).then(data => data.json())
         }
     },

    delete: {
        value: function (resource, id) {
            return fetch(`${url}/${resource}/${id}.json`, {
                method: "DELETE"
            }).then(e => e.json())
        }
    },
    post: {
        value: function (resource, newData){
            return fetch (`${url}/${resource}.json`,{
                method: "POST",
                headers: {
                 "Content-Type": "application/json"
               },
               body: JSON.stringify(newData)
            }).then(e => e.json())
        }
    },
    put: {
        value: function (resource, editData){
            return fetch(`${url}/${resource}/${editData.id}.json`,{
             method: "PUT",
             headers: {
               "Content-Type": "application/json"
             },
             body: JSON.stringify(editData)
            }).then(e => e.json())
        }
    },

    patch: {
        value: function (edit, id) {
            return fetch(`${url}/${id}.json`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(edit)
              }).then(res => res.json())
        }
    },

 })
//  return fetch(`${url}/${resource}.json?orderBy="userId"&equalTo="${currentUserId}"`).then(data => data.json())?\