'use strict';

angular.module('angular.form.label', [])

.directive('formLabel', function(){
    return{
        template : '<label ng-transclude=""></label>',
        transclude : true,
        restrict: 'E',
        scope: {
            form : '=',
            name : '@',
        },
        link: function($scope, elemnt, iAttrs, controller) {
            if( $scope.form && $scope.name ){
                $scope.$watch("form['" + $scope.name + "']", function ( input ){
                    if( input && input.$validators ){
                        if( input.$validators.required && !input.$validators.required() ){
                            elemnt.find('label').append('<span class="text-danger">*</span>');
                        }
                    }
                }, true);
            }
        }
    };
})