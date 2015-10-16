# Hyperscript AngularJS Table Component

This component consumes a JSON Array and returns an Angular JS Snippet of code that will build a HTML Table

## Usage

``` js
var hngTable = require('hng-table')

exports.url = '/results'
exports.controller = controller
exports.template = template().outerHTML

function controller () {

  $scope.results = [{
    name: 'Foo'
  }, {
    name: 'Bar'
  }]
  $scope.columns = ['name']
}

function template () {
  return h('.container', [
    h('h3', 'Results'),
    hngTable('results', 'columns')
  ])
}
```

## Notes

Uses `Angular-Ui-Router`, and `hyperscript`