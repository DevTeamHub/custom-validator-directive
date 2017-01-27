# AngularJS custom validator directive

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

## Useful links

- [Confluence doc](http://confluence.dev-team.com/display/DOC/Custom+Validator+Directive)
- [NPM](https://www.npmjs.com/package/custom-validator-directive)

## Requirements
- Validation must happen inside `<form>` tag
- Input must have `ng-model` specified for it


## Supported attributes
- `dt-custom`: Function that returns promise
- `error-field`: Field name that will be in `$error` object, default is `'custom'`

## Installation Methods

### npm
```
$ npm install custom-validator-directive
```
### bower
```
$ bower install custom-validator-directive
```

## Add Dependency

```
// Regular angularjs
// First of all add script `../custom-validator-directive/dist/custom-validator-directive.min.js` to your `index.html` file
// And then add it as module dependency
angular.module('myApp', ['dev-team-custom-validator', ...])

// requirejs
define(['angular', 'dev-team-custom-validator'], function(angular) {...});

// commonjs
var angular = require('angular');
angular.module('app', [require('dev-team-custom-validator'), ....])
```

## How to use
### In HTML:
```
<input type="text" name="field" dt-custom="validationFunction(t)" error-field="customErrorName" ng-model="ctrl.customField"/>

<div>{{form.field.$error.customErrorName}}</div>
```
### validationFunction should be like this:
```
function() {
    var deferred = $q.defer();

    //some async logic, and then:
    deferred.resolve({
        IsValid: false // or true
    });

    return deferred.promise;
}
```

## Feedback

Please [leave your feedback](https://github.com/DevTeamHub/custom-validator-directive/issues) if you have noticed any issues or have a feature request.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).