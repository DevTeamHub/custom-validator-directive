/**
* Confirm Message Directive
* https://github.com/DevTeamHub/custom-validator-directive
* (c) 2016 Dev Team Inc. http://dev-team.com
* License: MIT
*/

var customValidatorModule = angular.module('dev-team-custom-validator', []);

customValidatorModule.directive('dtCustom', dtCustomValidatorDirective);

function dtCustomValidatorDirective() {
    return {
        scope: {
            validate: "&dtCustom"
        },
        restrict: "A",
        require: "^ngModel",
        link: function (scope, element, attributes, ctrl) {

            var promise = function (value) {
                return scope.validate({ value: value }).then(function (result) {
                    ctrl.$setValidity("custom", result.IsValid);
                    return value;
                });
            };

            var validator = function (value) {
                if (!ctrl.$isEmpty(value)) {
                    ctrl.$promise = promise(value);
                }
                ctrl.$setValidity("custom", true);
                return value;
            };

            ctrl.$formatters.push(validator);
            ctrl.$parsers.unshift(validator);
        }
    };
}