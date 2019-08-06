import ApiHandler from "./ApiHandler"


export default Object.create(ApiHandler, {
  get: {
     value: function (id) {
        return  ApiHandler.get("subTasks", id)
      }
  },
getAll: {
    value: function (){
        return ApiHandler.all("subTasks")
        .then(subTaskData => {
           let subTaskArr = ""
              Object.keys(subTaskData).forEach(function(key){
                subTaskData[key].id = key
              console.log(subTaskData)
              subTaskArr = Object.values(subTaskData)
            })
            return subTaskArr
    }

        )
}

},
delete: {
    value: function(id){
        return ApiHandler.delete("subTasks", id)
    }
},
post: {
    value: function(newData){
        return ApiHandler.post("subTasks",newData)
    }
},
put: {
    value: function(editData){
    return ApiHandler.put("subTasks",editData)
    }
}

})
