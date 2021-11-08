const log4js = require('log4js');
log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app: { type: 'file', filename: `logs/app_${new Date().toISOString().substring(0,10)}.log` }
    },
    categories: {
        default: { appenders: ['out', 'app'], level: 'debug' }
    }
});

exports.log4js = log4js