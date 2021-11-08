const express = require('express')
const { log4js } = require('../utility/logger')
const logger = log4js.getLogger(require('path').basename(__filename, '.js'))

class mainController {
    static async servertest(req = express.request) {
        try {
            logger.info("doing servertest")
            var res = req.res
            res.send({ rc: "00", rm: "working!" })
        } catch (error) {
            res.send(error)
        }
    }
} exports.mainController = mainController