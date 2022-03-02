const express = require('express')
const logger = require('morgan');

const app = express()
const port = 8000

/** Middlewares */
app.use(logger('dev'));
app.use(express.json());

/** Routes */
const routes = require('./router/routes.js');
app.use('/api', routes);

/** Error */
app.use((req, res, next) => {
    next(createError(404, 'Route not found'))
})

/** Error Handling */
app.use((error, req, res, next) => {
    if (!error.status) {
        error = createError(500, error);
    }

    if (error.status >= 500) {
        console.error(error);
    }

    const data = {};
    data.message = error.message;

    if (error.errors) {
        data.errors = Object.keys(error.errors)
            .reduce((errors, key) => {
                errors[key] = error.errors[key].message;
                return errors;
            }, {});
    }
    res.status(error.status).json(data);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})