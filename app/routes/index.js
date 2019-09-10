module.exports = (application) => {
    application.get('/', (req, res) => {
        application.app.controllers.indexController.home(application, req, res);
    })
}