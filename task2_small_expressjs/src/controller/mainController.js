const express = require('express')
const { log4js } = require('../utility/logger')
const logger = log4js.getLogger(require('path').basename(__filename, '.js'))
const axios = require("axios").default;

class mainController {
    static async servertest(req = express.request) {
        try {
            logger.info("doing servertest")
            return ({ rc: "00", rm: "working!" })
        } catch (error) {
            return (error)
        }
    }
    static async searchmovie(req = express.request) {
        try {

            var title = req.query.s
            var year = req.query.y
            var page = req.query.page

            var options = {
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: { apikey: 'a0a2e9f8', s: title, y: year, page: page }
            };

            var result = await new Promise(function (resolve, reject) {
                axios.request(options).then(function (response) {
                    console.log(response.data);
                    resolve(response.data)
                }).catch(function (error) {
                    console.error(error);
                    reject(error)
                });
            })

            if (result.Response !== 'False') {
                return ({ rc: "00", rm: "success", data: result })
            } else {
                return ({ rc: "99", rm: "failed", data: result })
            }
        } catch (error) {
            return (error)
        }
    }
    static async getmoviedetails(req = express.request) {
        try {
            logger.info("doing servertest")
            return ({ rc: "00", rm: "working!" })
        } catch (error) {
            return (error)
        }
    }
} exports.mainController = mainController