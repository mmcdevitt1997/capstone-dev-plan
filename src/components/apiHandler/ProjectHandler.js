import ApiHandler from "./ApiHandler"
const userId = sessionStorage.getItem("userId")

export default Object.create(ApiHandler, {
  get: {
     value: function (id) {
        return  ApiHandler.get("projects", id)
      }
  },
getAll: {
    value: function (){
        return ApiHandler.all("projects").then(projectData => {
              Object.keys(projectData).forEach(function (key) {
              projectData[key].id = key
              console.log(Object.values(projectData))
            })
    }
        )
}
},
delete: {
    value: function(id){
        return ApiHandler.delete("projects", id)
    }
},
post: {
    value: function(newData){
        return ApiHandler.post("projects",newData)
    }
},
put: {
    value: function(editData){
    return ApiHandler.put("projects",editData)
    }
}

})
