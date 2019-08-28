import ApiHandler from "./ApiHandler";

export default Object.create(ApiHandler, {
  get: {
    value: function(id) {
      return ApiHandler.get("projects", id);
    }
  },
  getAll: {
    value: function() {
      return ApiHandler.all("projects").then(projectData => {
        if (projectData !== null) {
          const projectArray = Object.keys(projectData).map(keys => {
            let newObj = { ...projectData[keys] };
            newObj.id = keys;
            return newObj;
          });
          return projectArray.reverse();
        } else {
          let projects = [];
          return projects;
        }
      });
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
