module.exports = function () {

  this.Given(/^There is a user called "([^"]*)"$/, function (name) {
    return r
      .table('users')
      .insert({name})
      .run()
      .then(result => {
        this.userId = result.generated_keys[0]
      })
  })
  this.Given(/^The world is sane$/, function () {
  })

  this.When(/^Do something$/, function () {
    
  })

  this.Then(/^I should see "([^"]*)"$/, function (text) {
    return r
      .table('users')
      .get(this.userId)
      .run()
      .then(user => {
        expect(user).to.exist
      })
  })

  this.Then(/^Another consequence$/, function () {
    
  })

}
