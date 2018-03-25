const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const song = await Song.findAll({
        limit: 10                   // index method which is going to find all songs in db and limit it to 10 and return that back in the pave load
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while fetching the songs' // ex: email already exists
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while fetching the song' // ex: email already exists
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create the song' // ex: email already exists
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to update the song' // ex: email already exists
      })
    }
  }
}
