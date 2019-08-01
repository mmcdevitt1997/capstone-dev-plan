const url = "https://dev-plan-578fe.firebaseio.com"

export default Object.create(null, {
    get: {
        value: function (resource, id) {
            return fetch(`${url}/${resource}/${id}`).then(data => data.json())
        }
    },
    all: {
        value: function (resource) {
            return fetch(`${url}/${resource}`).then(data => data.json())
        }
    },

    getAllExpand: {
     value: function (resource, expandResource) {
         return fetch(`${url}/${resource}?_expand=${expandResource}&_sort=timeStamp`).then(data => data.json())
         }
     },

    delete: {
        value: function (resource, id) {
            return fetch(`${url}/${resource}/${id}`, {
                method: "DELETE"
            }).then(e => e.json())
        }
    },
    post: {
        value: function (resource, newData){
            return fetch (`${url}/${resource}`,{
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
            return fetch (`${url}/${resource}/${editData.id}`,{
             method: "PUT",
             headers: {
               "Content-Type": "application/json"
             },
             body: JSON.stringify(editData)
            }).then(e => e.json())
        }
    },

    search: {
        value: function (resource, id) {
            return fetch(`${url}/${resource}/${id}`).then(data => data.json())
        }
    },

 })
