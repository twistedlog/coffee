(function() {
  var config;

  config = {
    set: function(data, sorted_by) {
      this.data = data;
      this.sorted_by = sorted_by;
      return {
        data: this.data,
        sorted_by: this.sorted_by
      };
    },
    get: function() {
      return this.data;
    },
    sortedby: function() {
      return this.sorted_by;
    },
    getById: function(id) {
      var wf_obj;
      wf_obj = '';
      id = parseInt(id);
      $.each(this.get(), function(index, record) {
        if (record.id === id) wf_obj = record;
        return false;
      });
      return wf_obj;
    }
  };

}).call(this);
