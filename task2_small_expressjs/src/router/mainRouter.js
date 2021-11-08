const express = require('express')
const { mainController } = require('../controller/mainController')
const { dbmodel } = require('../model/db')
const { log4js } = require('../utility/logger')
const logger = log4js.getLogger(require('path').basename(__filename, '.js'))

class mainRouter {
    static async init(app = express()) {
        logger.info("--> initials mainRouter")

        app.get('/*', async function (req = express.request) {
            logger.info("request: " + req.path + " GET")
            var activity = await dbmodel.activity.create({
                path: req.path,
                method: 'GET',
                req_time: new Date(),
                req_param: JSON.stringify(req.query)
            })
            await activity.save()

            var response = { rc: "99", rm: "somethings went wrong :(" }
            switch (req.path) {
                case '/testing':
                    response = await mainController.servertest(req)
                    break;
                default:
                    response = { rc: 99, rm: "path not found" }
                    break;
            }

            activity.res_time = new Date()
            activity.res_body = JSON.stringify(response)
            await activity.save()
            req.res.send(response)
        })
    }
} exports.mainRouter = mainRouter