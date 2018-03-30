const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {sondId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while fetching the songs' // ex: email already exists
      })
    }
  }
}
