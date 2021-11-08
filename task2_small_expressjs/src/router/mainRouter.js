const express = require('express')
const { mainController } = require('../controller/mainController')
const { log4js } = require('../utility/logger')
const logger = log4js.getLogger(require('path').basename(__filename, '.js'))

class mainRouter {
    static async init(app = express()) {
        logger.info("--> initials mainRouter")

        app.get('/*', function (req = express.request) {
            logger.info("request: " + req.path + " GET")
            switch (req.path) {
                case '/testing':
                    mainController.servertest(req)
                    break;
                default:
                    req.res.send({ rc: 99, rm: "path not found" })
                    break;
            }
        })
    }
} exports.mainRouter = mainRouter