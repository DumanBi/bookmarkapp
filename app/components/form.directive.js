(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .directive('bmForm', bmForm);

  function bmForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/form.directive.html',
      scope: {
        url: '=',
        title: '=',
        tags: '=',
        save: '&'
      },
      link: linkFunc,
      controller: bmFormCtrl,
      controllerAs: 'bm',
      bindToController: true
    };

    return directive;

    function bmFormCtrl(){
      var bm = this;
      bm.clear = clear;

      function clear(){
        bm.url = '';
        bm.title = '';
        bm.tags = [];
      }
    }

    function linkFunc(scope, el, attr, ctrl) {}
  }
})();
