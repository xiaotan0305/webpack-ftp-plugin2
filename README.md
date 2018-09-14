

# webpack-ftp-plugin2

## 说明

该插件基于原创修改以满足开发需求,[https://github.com/CharlieLau/webpack-ftp-plugin](https://github.com/CharlieLau/webpack-ftp-plugin)

<p align="center"><img width="600px" src="http://owzieh3tb.bkt.clouddn.com/ftp-plugin.png" alt="实例"></p>

### Usage


Basic Usage
-----------
1. 安装

```
     $  npm i webpack-ftp-plugin2
```
或是
```
    $  yarn  add --dev  webpack-ftp-plugin2
```

1. add the plugin to your webpack config as follows:

```javascript
var WebpackFtpPlugin = require('webpack-ftp-plugin')
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new WebpackFtpPlugin({
      ftp: {
        "authKey": {
            "username": "xx", // 用户名
            "password": "xxx" // 密码
        },
        "host": "x.x.x.x", // ip
        "port": "21" // 端口
    }
    remoteRoot: '/', // 远程ftp路径
    localRoot: __dirname, // 本地路径根目录
    deployPath: './build' // 基于本地路径根目录的相对路径
})]
}
```

### 注意事项

 env支持，production生产环境才能deploy
-----------
process.env.NODE_ENV === 'production':


```javascript
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
})
```

### License

[MIT](http://opensource.org/licenses/MIT)