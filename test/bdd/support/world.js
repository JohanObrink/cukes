function World () {
  // this holds stuff local to scenario
  this.data = {
    users: []
  }
}

module.exports = function () {
  this.World = World
}
