import ApiHandler from "./ApiHandler";

export default Object.create(ApiHandler, {
  get: {
    value: function(id) {
      return ApiHandler.get("projects", id);
    }
  },
  getAll: {
    value: function() {
      return ApiHandler.all("projects")
        .then(subTaskData => {
           let subTaskArr = ""
              Object.keys(subTaskData).forEach(function(key){
                subTaskData[key].id = key
              subTaskArr = Object.values(subTaskData)
            })
            return subTaskArr
    }

        )
    }
  },
  delete: {
    value: function(id) {
      return ApiHandler.delete("projects", id);
    }
  },
  post: {
    value: function(newData) {
      return ApiHandler.post("projects", newData);
    }
  },
  put: {
    value: function(editData) {
      return ApiHandler.put("projects", editData);
    }
  },
  patch: {
    value: function(editData, id) {
      return ApiHandler.put(editData, id);
    }
  }
});
