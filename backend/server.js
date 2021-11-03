require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require("fs");
const { createStream } = require('rotating-file-stream');
const response = require('./src/helpers/response');
const Sockets = require('./src/classes/Sockets')
const http     = require('http')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerConfig = require('./src/config/swaggerConfig')

const app = express();


// db
mongoose
  .connect(`${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// Middlewares
const accessLogStream = createStream('access.log', {
  interval: '1d',
  path: path.join(path.resolve(), 'logs')
})
app.use(morgan('combined', { stream: accessLogStream }))

// parse application/json
app.use(express.json());

// cors
app.use(cors());

// Public
app.use(express.static(path.resolve(__dirname, './src/public')));

// app.use(routes);
// routes middlewares
readdirSync(`./src/routes`).map( (file) => {
  if (path.extname(file) === '.js'){
    let name = path.basename(file, '.js');
    return app.use(`${process.env.PREFIX}/${name}`, require(`./src/routes/${name}.js`));
  }
});

//
app.use('/api-docs', 
  swaggerUi.serve, 
  swaggerUi.setup(swaggerJsdoc(swaggerConfig)))

// Error handler

app.use(function (err, req, res, next) {
  //Catch bodyParser error
  if (err.type === "entity.parse.failed"){
      res.status(400).send(response(400, { messages: 'JSON invalid'}))
  }else{
    res.status(500).send(response(500,{ messages: err}))
  }
})

app.use(function (req, res, next) {
    res.status(404).send(response(404, { messages: 'Not Found.'}))
})

// Http server
const server = http.createServer(app);
server.listen( process.env.PORT, () => {
  console.log(`Start Server at http://localhost:${process.env.PORT}`)
});

app.set('socketService', new Sockets(server))


