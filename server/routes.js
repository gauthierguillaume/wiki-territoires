const {Router} = require('express')

module.exports = app => {
  const router = new Router()
  
  router.get('/regions/:code', (req, res) => {
    app.render(req, res, '/regions/region', {
      ...req.query,
      codeRegion: req.params.code
    })
  })

  router.get('/departements/:code', (req, res) => {
    app.render(req, res, '/departements/departement', {
      ...req.query,
      codeDepartement: req.params.code
    })
  })

  router.get('/communes/:code', (req, res) => {
    app.render(req, res, '/communes/commune', {
      ...req.query,
      codeCommune: req.params.code
    })
  })

  router.get('*', (req, res) => {
    app.render(req, res, req.params[0], req.query)
  })
  return router
}
