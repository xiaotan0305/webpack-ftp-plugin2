var Ftp = require('./utils/ftp');
var process = require('process');

function FtpWebpackPlugin(options) {
    if (!options || !options.remoteRoot || !options.localRoot || !options.deployPath || !options.ftp) {
        console.info('Some parameters of the problem，please set as the follow:');
        console.info(' new'.red + ' FtpWebpackPlugin({');
        console.info('   remoteRoot:\'your remoteRoot\','.yellow);
        console.info('   localRoot: \'your localRoot\','.yellow);
        console.info('   ftp: \'your ftp\','.yellow);
        console.info('   .ftppass file must in localRoot'.yellow);
        console.info(' })');
        throw new Error('Some parameters of the problem');
    }
    this.options = options;
}

FtpWebpackPlugin.prototype.apply = function(compiler) {
    var that = this;
    compiler.plugin('done', function(compilation) {
        if (process.env.NODE_ENV === 'production') {
            Ftp({
                remoteRoot: that.options.remoteRoot,
                localRoot: that.options.localRoot,
                deployPath: that.options.deployPath,
                ftp: that.options.ftp,
                cb: that.options.cb
            });
        } else {
            console.info('=====生产环境才能进行ftp deploy====='.red);
        }
    });
};


module.exports = FtpWebpackPlugin;