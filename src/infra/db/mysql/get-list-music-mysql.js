const GetListMusicMysqlRepository = (function() {
  const GetListMusicMysqlRepository = function (connection) {
    this.connection = connection
  }

  GetListMusicMysqlRepository.prototype.get = function () {
    return new Promise(resolve => this.connection.query('select * from Proposta', (error, result) => {
      resolve(result)
    }))
  }
  return GetListMusicMysqlRepository
})()

module.exports = GetListMusicMysqlRepository