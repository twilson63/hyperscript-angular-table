var h = require('hyperscript')

module.exports = function (model, columns) {
  return h('div', {
    'data-ng-if': model}, [
    h('table.table', [
      h('tr', [
        h('th', {
          'data-ng-repeat': 'k in ' + columns
        }, ['{{k}}'])
      ]),
      h('tr', {
        'data-ng-repeat': 'row in ' + model
      }, [
        h('td', {
          'data-ng-repeat': '(k,v) in row'
        }, ['{{v}}'])
      ])
    ])
  ])
}