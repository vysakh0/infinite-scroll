App.PaginationMixin = Ember.Mixin.create({

  storeMetadata: function(k) {
    var res = this.store.metadataFor(this.get('modelName'));
    if (k) {
      res = res[k];
    }
    return res;
  },
  setStoreMetadata: function(k, v) {
    var res = this.store.metadataFor(this.get('modelName'));
    return res[k] = v;
  },
  hasMorePages: function() {
    var page = this.storeMetadata('page');
    var total = this.storeMetadata('total_pages');
    return page < total;
  },

  actions: {
    showMore: function() {
      var self = this;
      if(this.hasMorePages()){
        this.set('paginationLoading', true);

        var page = this.storeMetadata('page') + 1;
        this.setStoreMetadata('page', page);

        this.store.findQuery(this.get('modelName'), {
          page: page
        }).then(function (res) {
          self.set('paginationLoading', false);
        })

      }
    }
  }
});
