(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'todo',
      template: '<h1>TODO APP</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));