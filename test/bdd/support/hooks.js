const r = require('rethinkdbdash')({db: 'cukes'})
const chai = require('chai')

global.expect = chai.expect
global.r = r

module.exports = function () {
  this.BeforeFeatures(function () {
    return r
      .dbCreate('cukes')
      .run()
      .then(() => r
        .tableCreate('users')
        .run())
  })
  this.Before(function () {
    return r.table('users').delete().run()
  })
  this.After(function () {
  })
  this.AfterFeatures(function () {
    return r
      .dbDrop('cukes')
      .run()
  })
}
