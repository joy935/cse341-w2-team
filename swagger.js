const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Temple API",
        description: "API for temples",
    },
    host: "localhost:8080"
};

const outputFile = './swagger.json';
const routes = ['./index.js', './routes/temple.js'];

swaggerAutogen(outputFile, routes, doc);