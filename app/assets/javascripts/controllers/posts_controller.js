App.PostsController = Ember.ArrayController.extend(App.PaginationMixin, {
  modelName: 'post'
});
