import ApiHandler from "./ApiHandler"


export default Object.create(ApiHandler, {
  get: {
     value: function (id) {
        return  ApiHandler.get("projects", id)
      }
  },
getAll: {
    value: function (){
        return ApiHandler.all("projects").then(projectData => {
           let test = ""
        console.log(projectData)
              Object.keys(projectData).forEach(function(key){
              projectData[key].id = key
              console.log(projectData)
              test = Object.values(projectData)
            })
            return test
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
