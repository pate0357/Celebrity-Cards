angular.module('Booya')

.controller('DetailsCtrl', function ($scope, $routeParams, Items) {
    $scope.itemId = $routeParams.itemID;
    $scope.oneItem = {};


    Items.getOne($scope.itemId)

    .then(function (response) {
        //success
        var allItems = response.data.items;

        allItems.forEach(function (i) {
            if (i.id == $scope.itemId) {
                $scope.oneItem = i;

            }

        });

    }, function (response) {

        //error

    });
});