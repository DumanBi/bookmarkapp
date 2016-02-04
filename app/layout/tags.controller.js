(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .controller('TagsCtrl', TagsCtrl);

  TagsCtrl.$inject = ['$scope', 'AppModel', 'TagService'];

  function TagsCtrl($scope, AppModel, TagService) {
    var bm = this;

    bm.vm = AppModel.get('all');

    $scope.$watch("bm.vm", function(val){
      bm.tags = TagService.getTags(val.list);
    }, true);

  };
})();
