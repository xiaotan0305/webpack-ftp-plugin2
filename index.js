'use strict'

var Ftp = require('./utils/ftp')
var process = require('process')

function FtpWebpackPlugin(options) {

    if (!options || !options.remoteRoot || !options.localRoot || !options.deployPath) {
        console.info('Some parameters of the problem，please set as the follow:')
        console.info(" new".red + " FtpWebpackPlugin({");
        console.info("   remoteRoot:'your remoteRoot',".yellow);
        console.info("   localRoot: 'your localRoot',".yellow);
        console.info("   .ftppass file must in localRoot".yellow);
        console.info(" })");
        throw new Error('Some parameters of the problem')
    }
    this.options = options;
}

FtpWebpackPlugin.prototype.apply = function (compiler) {
    var self = this;
    compiler.plugin("done", function (compilation) {
        
        if (process.env.NODE_ENV === 'production') {
            Ftp({
                remoteRoot: self.options.remoteRoot,
                localRoot: self.options.localRoot,
                deployPath: self.options.deployPath
            });
        } else {
            console.info('=====生产环境才能进行ftp deploy====='.red);
        }
    });
};


module.exports = FtpWebpackPlugin;