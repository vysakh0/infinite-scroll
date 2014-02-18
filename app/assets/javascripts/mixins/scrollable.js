App.ScrollableMixin = Ember.Mixin.create({
  didInsertElement: function(){
    $(window).on('scroll', $.proxy(this.didScroll, this));
  },
  willDestroyElement: function(){
    $(window).off('scroll', $.proxy(this.didScroll, this));
  },
  // this is called every time we scroll
  didScroll: function(){
    if (this.isScrolledToBottom()) {
      this.get('controller').send('showMore');
    }
  },

  // we check if we are at the bottom of the page
  isScrolledToBottom: function(){
    var distanceToViewportTop = (
      $(document).height() - $(window).height());
      var viewPortTop = $(document).scrollTop();

      if (viewPortTop === 0) {
        // if we are at the top of the page, don't do
        // the infinite scroll thing
        return false;
      }

      return (viewPortTop - distanceToViewportTop === 0);
  }

})
