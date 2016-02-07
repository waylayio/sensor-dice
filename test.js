var pkg = require('./package.json')
var test = require('tape')
var util = require('util')

var dice = require('./index')

test('should return a valid state', function (t) {
  t.plan(3)

  var supported = pkg.waylay.supportedStates

  dice({}, function (err, res) {
    t.notOk(err)
    t.ok(util.isNumber(res.rawData.randomValue), 'randomValue is a number')
    t.ok(supported.indexOf(res.observedState) >= 0, 'state is valid')
  })
})
