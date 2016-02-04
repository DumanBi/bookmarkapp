(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .service('TagService', TagService);

  function TagService() {
    var self = {
      getTags: getTags,
      getUnique: getUnique,
      unique: unique,
      countTag: countTag
    };
    return self;

    function getTags(list) {
      var tags = [];
      angular.forEach(list, function(el) {
        angular.forEach(el.tags, function(val) {
          tags.push(val);
        });
      });
      return self.countTag(tags);
    }

    function getUnique(list) {
      var tags = [];
      angular.forEach(list, function(el) {
        angular.forEach(el.tags, function(val) {
          tags.push(val);
        });
      });
      return self.unique(tags);
    }

    function unique(tags) {
      var obj = {};

      for (var i = 0; i < tags.length; i++) {
        var str = tags[i];
        obj[str] = true;
      }

      return Object.keys(obj);
    }

    function countTag(tags) {
      var arr = [];

      var keys = self.unique(tags);

      for (var i in keys) {
        var count = 0
        for (var j in tags) {
          if (keys[i] == tags[j]) count++;
        }
        arr.push({
          'tagName': keys[i],
          'tagLength': count
        });
      }
      return arr;
    }
  }

})();
