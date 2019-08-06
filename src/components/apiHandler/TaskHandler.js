import ApiHandler from "./ApiHandler"


export default Object.create(ApiHandler, {
  get: {
     value: function (id) {
        return  ApiHandler.get("tasks", id)
      }
  },
getAll: {
    value: function (){
        return ApiHandler.all("tasks").then(taskData => {
           let test = ""

              Object.keys(taskData).forEach(function(key){
              taskData[key].id = key

              test = Object.values(taskData)
            })
            return test
    }
        )
}
},
delete: {
    value: function(id){
        return ApiHandler.delete("tasks", id)
    }
},
post: {
    value: function(newData){
        return ApiHandler.post("tasks",newData)
    }
},
put: {
    value: function(editData){
    return ApiHandler.put("tasks",editData)
    }
}

})
