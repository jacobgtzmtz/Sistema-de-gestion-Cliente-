/**
 * Created by jacob on 19/09/15.
 */

(function(){

    app.controller("clasesController", function($scope) {
        $scope.showHideDown = "show";
        $scope.showHideUp = "hide";
        $scope.showHidepanel="hide";

        $scope.mostrarPanel = function(){
            $scope.showHideUp="show";
            $scope.showHideDown="hide";
            $scope.showHidepanel="show";
        };
        $scope.ocultarPanel = function(){
            $scope.showHideUp="hide";
            $scope.showHideDown="show";
            $scope.showHidepanel="hide";
        };
    })
})();
