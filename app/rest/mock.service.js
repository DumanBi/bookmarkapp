(function() {
  'use strict';

  angular
    .module('bookmarkapp')
    .factory('MockService', MockService);

  function MockService($http, $q) {

    return {
      get: get,
      post: post
    };

    function get(url, params) {
      return call({
        method: 'GET',
        url: url,
        params: params || {}
      });
    }

    function post(url, data, config) {
      return call({
        method: 'POST',
        url: url,
        data: data || {},
        config: config || undefined
      });
    }

    function call(config) {
      config.url = 'mock/' + config.url;
      return $http(config).then(syncResponse).catch(syncFail);
    }

    function syncResponse(response) {
      return response.data;
    }

    function syncFail(error) {
      return $q.reject(error);
    }
  }

})();
