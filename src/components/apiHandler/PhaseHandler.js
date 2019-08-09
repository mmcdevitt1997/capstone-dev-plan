import ApiHandler from "./ApiHandler"

export default Object.create(ApiHandler, {
    get: {
       value: function (id) {
          return  ApiHandler.get("phases", id)
        }
    },
  getAll: {
      value: function (){
          return fetch("https://dev-plan-578fe.firebaseio.com/phases.json").then(data => data.json())

  }
  },
  delete: {
      value: function(id){
          return ApiHandler.delete("phases", id)
      }
  },
  post: {
      value: function(newData){
          return ApiHandler.post("phases",newData)
      }
  },
  put: {
      value: function(editData){
      return ApiHandler.put("phases",editData)
      }
  }

  })
