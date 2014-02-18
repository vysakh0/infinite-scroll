## Ember infinite scroll in Rails project using will_paginate gem

#### Basic outline
- ember-rails gem.
- will_paginate gem.

#### To understand the project

**Scrollable Mixin**

This mixin sees if the user scrolls down to the bottom of the page. This mixin can be used with any `ember view`, in this project, `App.ScrollableMixin` is used in `App.PostsView`

**Pagination Mixin**

Scrollable mixin, calls the action that is in pagination mixin to load data accordingly from server. This makes use of `ember meta data`. This can be used with any controller, in this code, it is used in `App.PostsController`

#### Cloning this  project

```bash
git clone git@github.com:vysakh0/infinite-scroll.git
cd ininite-scroll
bundle
rake db:migrate
rake seed:data  # to populate random data
```
Visit `localhost:3000` & then visit `posts` page.

### License - MIT License
