(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .controller('ListCtrl', ListCtrl);

  ListCtrl.$inject = ['AppModel', '$routeParams', '$location'];

  function ListCtrl(AppModel, $routeParams, $location) {
    var bm = this;
    bm.remove = remove;
    bm.edit = edit;
    bm.currentPage = 1;
    bm.perPageCount = 5;

    bm.vm = AppModel.get('all');

    bm.filter = $routeParams.tag;

    function remove(id){
      AppModel.remove('list', id);
    };

    function edit(id){
      $location.path('/edit/' + id);
    };

  };
})();
