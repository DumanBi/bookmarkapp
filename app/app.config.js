(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'app/dashboard/main.html'
        })
        .when('/filter/:tag', {
          templateUrl: 'app/dashboard/main.html'
        })
        .when('/edit/:id', {
          templateUrl: 'app/dashboard/edit.html',
          controller: 'EditCtrl',
          controllerAs: 'bm'
        })
        .otherwise({
          redirectTo: '/'
        })
    }
})();
