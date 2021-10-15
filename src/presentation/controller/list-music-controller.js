const ListMusicController = (function () {
  function ListMusicController (repository) {
    this.repository = repository
  }

  ListMusicController.prototype.handle = function () {
    return this.repository.get()
  }
  return ListMusicController
})()

module.exports = ListMusicController
