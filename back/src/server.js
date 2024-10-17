const app = require('./app');
const port = app.get('port');

const swaggerUi = require("swagger-ui-express")
const swaggerJsDocs = require("swagger-jsdoc")

const swaggerOptions = {

    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Tarefas",
            version: "1.0.0",
            description: "API CRUD para gerenciar tarefas",
        },
        servers: [{ url: "http://localhost:3004" }],

    },
    apis: [`${__dirname}/routes/*.js`],

};

const swaggerDocs = swaggerJsDocs(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.listen(port, () => console.log(`Run on port ${port}!`));