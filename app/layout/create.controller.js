(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .controller('CreateCtrl', CreateCtrl);

    CreateCtrl.$inject = ['AppModel'];

  function CreateCtrl(AppModel) {
    var bm = this;
    bm.vm = {};
    bm.vm.tags = [];
    bm.add = add;

    function add(){
      bm.vm.id = 'id_' + new Date().getTime();
      AppModel.put('list', bm.vm, 'CreateCtrl');
      bm.vm = {};
      bm.vm.tags = [];
    };
  };
})();
