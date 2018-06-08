const { Router } = require('express')

const router = Router()

const shaders = [
  {
    name: 'hello',
    path: '01'
  }
]

/* GET users listing. */
router.get('/shaders', (req, res, next) => {
  res.json(shaders)
})

/* GET user by ID. */
router.get('/shaders/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < shaders.length) {
    res.json(shaders[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
