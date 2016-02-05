(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .factory('AppModel', AppModel);

  AppModel.$inject = ['MockService', '$firebaseObject', 'FB'];

  function AppModel(MockService, $firebaseObject, FB) {

    var ref = new Firebase(FB);
    var _self = $firebaseObject(ref);

    // var _self = {};

    return {
      set: set,
      get: get,
      put: put,
      remove: remove,
      rewrite: rewrite
    };
    function set(key, value, who) {
      // console.info(who, 'set in Data Service', key, '=', value);
      _self[key] = value;
      if(who !== 'RUN') _self.$save();
      // if(who !== 'RUN') MockService.post('tags', _self);
    }

    function get(key) {
      if (key && key in _self) return _self[key];
      if (key === 'all' || typeof key == 'undefined') return _self;
    }

    function put(key, value, who) {
      // console.info(who, 'put in Data Service', key, '=', value);
      if (key && key in _self) {
        var array = _self[key];
        array.push(value);
        _self[key] = array;
      } else {
        var array = [];
        array.push(value);
        _self[key] = array;
      }
      _self.$save();
      // MockService.post('tags', _self);
    }

    function remove(key, id) {
      angular.forEach(_self[key], function(value, index){
        if(value.id == id){
          _self[key].splice(index, 1);
        }
      });
      _self.$save();
      // MockService.post('tags', _self);
    }

    function rewrite(values, who) {
      // console.info(who, 'in Data Service rewrite to', values);
      angular.extend(_self, values);
      _self.$save();
      // MockService.post('tags', _self);
    }
  }

})();
