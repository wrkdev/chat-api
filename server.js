const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

// Route Definition
const routes = require('./src/routes/routes');
const router = express.Router();

app.use(express.json());

// Middleware Definition
app.use(helmet());
app.use(cors());
app.use(morgan('common'));
app.use(compression());

// Setup Routes
router.use("/chat", routes.chat);

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});