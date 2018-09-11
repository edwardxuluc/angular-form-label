'use strict';

angular.module('angular.form.label', [])

.directive('formLabel', function(){
    return {
        restrict: 'A',
        link: function($scope, element, iAttrs, controller ) {
            var element      = angular.element( element );
            var formName     = element.parents('[ng-form]').length ? element.parents('[ng-form]').attr('ng-form') : element.parents('form').attr('name');
            var inputName    = element.parent().find('.form-control').attr('name');
            var inputElement = element.parent().find('.form-control');

            if( formName && inputElement ){
                
                var required = false;

                if( inputElement.attr('required') ){
                    required = true;
                }else if( inputElement.attr('ng-required') && $scope.$eval(inputElement.attr('ng-required')) ){
                    required = true;
                }

                if( required && element.find('span').length == 0 ){
                    element.append('<span class="text-danger">*</span>');
                }
            }
        }
    };
})