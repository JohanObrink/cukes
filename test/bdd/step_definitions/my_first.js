module.exports = function () {

  this.Given('the following users exist:', function (users) {
    return r
      .table('users')
      .insert(users.hashes())
      .run()
  })
  this.Given(/^The world is sane$/, function () {
  })

  this.When(/^Do something$/, function () {
    
  })

  this.Then(/^I can get a user with the name "([^"]*)" from the database$/, function (name) {
    return r
      .table('users')
      .filter({name})
      .run()
      .then(result => {
        expect(result).to.have.length(1)
        expect(result[0].name).to.equal(name)
      })
  })

  this.Then(/^Another consequence$/, function () {
    
  })

}
