/*
Import
*/
//= > Gestion des variables d'environnement
require('dotenv').config()
//= > Gestion server
const express = require('express')
//= > Gestion du dossier client
// const path = require('path')
// //= > Gestion du moteur de rendu
// const ejs = require('ejs')

// const cors = require('cors')
//= > Gestion du corps des requêtes HTTP
const bodyParser = require('body-parser')
//= > Gestion des cookies
const cookieParser = require('cookie-parser')
//= > Connexion BDD
const dbConnect = require('./services/mongodb.serv')
//= > Router
const mainRouter = require('./routes/main.router')
//

/*
Configuration
*/
//= > Définir le server et le port (.env)
const server = express()

const port = process.env.PORT

//= > Configurer le server
class ServerClass {
  init () {
    //= > Body-parser
    server.use(bodyParser.json({ limit: '10mb' }))
    server.use(bodyParser.urlencoded({ extended: true }))

    server.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      res.header('Access-Control-Allow-Credentials', 'true')
      next()
    })

    //= > Cookie-parser
    server.use(cookieParser())

    //= > Router
    server.use('/', mainRouter)

    // //= > Passport
    // server.use(passport.initialize())
    // server.use(passport.session())

    //= > Lancer le server
    this.launch()
  }

  launch () {
    // Connecter la BDD
    dbConnect()
      .then(db => {
        // Start server
        server.listen(port, () => {
          console.log({
            mongo: `DB is connected !`,
            server: `Server listening on port ${port}!`
          })
        })
      })
      .catch(err => console.log(`Error MongoDB ${err}`))
  }
}
//

/*
Start server
*/
new ServerClass().init()
//
module.exports = { server }
