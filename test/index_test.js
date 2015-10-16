var test = require('tap').test
var hngTable = require('../')

test('generate ng snippet', function (t) {
  var ng = hngTable('results', 'columns').outerHTML
  console.log(ng)
  t.equals(ng, '<div data-ng-if="results"><table class="table"><tr><th data-ng-repeat="k in columns">{{k}}</th></tr><tr data-ng-repeat="row in results"><td data-ng-repeat="(k,v) in row">{{v}}</td></tr></table></div>')
  t.end()
})