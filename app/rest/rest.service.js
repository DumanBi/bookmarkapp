(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .factory('RestService', RestService);

  RestService.$inject = ['$firebaseObject', 'FB']

  function RestService($firebaseObject, FB) {

    var ref = new Firebase(FB);
    var _self = $firebaseObject(ref);

    return {
      update: function(data){
        _self.list = data.list;
        _self.$save();
      }
    }

  }

})();
