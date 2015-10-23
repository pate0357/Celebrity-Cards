angular.module('Booya')
    .factory('Items', function ItemsFactory($http) {

        return {
            getAll: function () {
                return $http({
                    method: "Get",
                    url: 'data/items.json'
                });
            },
            getOne: function (id) {
                return $http({
                    method: "Get",
                    url: 'data/items.json'
                });

            }
        }

    });