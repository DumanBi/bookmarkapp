(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .controller('EditCtrl', EditCtrl);

    EditCtrl.$inject = ['AppModel', '$routeParams', '$location'];

  function EditCtrl(AppModel, $routeParams, $location) {
    var bm = this;
    bm.save = save;
    bm.list = AppModel.get('list');

    angular.forEach(bm.list, function(el){
      if(el.id == $routeParams.id) bm.vm = el;
    });

    function save(){
      angular.forEach(bm.list, function(value, key){
        if(value.id == $routeParams.id){
          bm.list = bm.list.splice(key, 1, bm.vm);
        }
      });
      AppModel.rewrite('list', bm.list, 'EditCtrl');
      $location.path('/');
    };

  };
})();
