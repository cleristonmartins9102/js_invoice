 const MysqlConnection = require('../infra/db/mysql/connection/conn.js')

const ListMusicController = require('../presentation/controller/list-music-controller.js')
const GetListMusicMysqlRepository  = require('../infra/db/mysql/get-list-music-mysql.js')
const conn = MysqlConnection
const repo = new GetListMusicMysqlRepository(conn)
const listMusicController = new ListMusicController(repo)
console.log(listMusicController.handle().then(result => console.log(result)))