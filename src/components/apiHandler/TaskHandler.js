import ApiHandler from "./ApiHandler";

export default Object.create(ApiHandler, {
  get: {
    value: function(id) {
      return ApiHandler.get("tasks", id);
    }
  },
  getAll: {
    value: function() {
      return ApiHandler.all("tasks").then(taskData => {
        if (taskData !== null) {
          const taskArray = Object.keys(taskData).map(keys => {
            let newObj = { ...taskData[keys] };
            newObj.id = keys;
            return newObj;
          });
          return taskArray.reverse();
        } else {
          let tasks = [];
          return tasks;
        }
      });
    }
  },
  delete: {
    value: function(id) {
      return ApiHandler.delete("tasks", id);
    }
  },
  post: {
    value: function(newData) {
      return ApiHandler.post("tasks", newData);
    }
  },
  put: {
    value: function(editData) {
      return ApiHandler.put("tasks", editData);
    }
  }
});
