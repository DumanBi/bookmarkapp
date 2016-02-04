(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .run(run);

    run.$inject = ['MockService', 'AppModel', '$firebaseObject', 'FB'];

    function run(MockService, AppModel, $firebaseObject, FB){
      /*
      * Firebase.
      */
      var ref = new Firebase(FB);
      var _self = new $firebaseObject(ref);

      _self.$loaded().then(function(data){
        AppModel.set('list', data.list, 'RUN');
      });

      /*
      * Just for use local mock/tags.json
      */
      // MockService.get('tags').then(function(val){
      //   AppModel.set('list', val.list, 'RUN')
      // })
    }
})();
