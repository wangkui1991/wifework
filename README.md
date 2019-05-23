## SPARKLE-VUE 简介

[sparkle-vue](http://git.iflytek.com/EPD_whedu/sparkle-vue) 是前端基础开发框架，它基于 [vue](https://github.com/vuejs/vue)，可以快速搭建一套前端工程，主要特性:

- 前后端分离，通过 token 进行数据交互，可独立部署
- 数据切换，通过 mock 配置对接口数据／mock 模拟数据进行切换
- 封装常用模块，比如数据请求 axios、vuex 状态管理、路由拦截等
- 演示地址：[sparkle-vue](http://172.16.16.53:5001)

希望本项目都能你带来一定帮助。

如果你需要开发后台管理系统，基于该框架也提供了一套后台管理系统快速开发框架[sparkle-vue-admin](http://git.iflytek.com/EPD_whedu/sparkle-vue-admin)

## 整体工程结构

```
sparkle-vue
│  .babelrc                  //babel配置
│  .eslintignore             //eslint忽略配置
│  .eslintrc.js              //eslint配置
│  .gitignore                //git忽略配置
│  index.html                //主页
│  package-lock.json         //package锁定文件
│  package.json              //package配置
│  pathmap.json              //webpack alias配置
│  README.md                 //readme
│
├─build                      //构建配置目录
│      build.js
│      proxy.js
│      utils.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.dev.server.js
│      webpack.prod.conf.js
│      webpack.test.conf.js
│
├─config                    //构建全局配置目录
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│
└─src
    │  App.vue             //页面根组件
    │  index.js            //入口文件
    │
    ├─api                  //api定义目录
    │      index.js
    │      user.js
    │
    ├─assets               //静态资源目录
    │  ├─fonts             //字体
    │  ├─images            //图片
    │  │      logo.png
    │  │      study.png
    │  │
    │  ├─js                //脚本
    │  │      common.js
    │  │
    │  └─styles            //样式
    ├─components           //组件目录
    │  ├─pages             //页面组件目录
    │  │  │  HelloWorld.vue
    │  │  │  Table.vue
    │  │  │
    │  │  └─router
    │  │          FlyProfile.vue
    │  │          ThirdProfile.vue
    │  │          VueProfile.vue
    │  │          VueRouter.vue
    │  │
    │  └─ui                //公共UI组件目录
    │          Timer.vue
    │
    ├─config              //全局配置目录
    │  │  index.js        //项目整体配置文件
    │  │
    │  └─interceptor      //拦截器配置
    │          axios.js   //请求拦截器配置
    │          router.js  //路由跳转拦截器
    │
    ├─plugins             //插件相关，数据请求等实例
    │      api.js
    │      axios.js
    │      eventbus.js
    │      index.js
    │
    ├─router              //路由配置
    │      index.js
    │      routers.js
    │
    ├─store               //vuex目录
    │  │  index.js
    │  │
    │  └─modules
    │          app.js
    │
    └─utils               //工具类
            index.js
```

## 安装

安装过程中，可能会出现安装过慢、报错等情况，请尝试以下 2 种方式：

```bash
# 克隆项目
git clone http://192.168.65.10/EPD_whedu/sparkle-vue.git

# 安装依赖
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install

# 启动服务
npm run dev
```

```bash
# 克隆项目
git clone http://192.168.65.10/EPD_whedu/sparkle-vue.git

# 安装依赖
npm install

# 启动服务
npm run dev
```

启动完成后打开浏览器访问 [http://localhost:8080](http://localhost:8080)，如果正常看到页面说明顺利运行起来了。


## 常见问题

### 开发时，如何连接后台项目 api 接口？

设置`/config/dev.env.js`目录文件中`BASE_URL` 配置项为开发服务器地址

### 开发时，如何管理工程中 api 接口？

目前所有接口需定义在`src/api`目录文件中，如果你需要新增接口，请务按照规范进行创建

### 开发时，前端如何使用 mock？

1. 修改 `/config/dev.env.js` 目录文件中 `IS_MOCK` 配置项为 `true`，并对应设置`mock` 服务器地址 `MOCK_URL`

2. 目前前后端分离使用接口平台，该平台提供 `mock` 服务，推荐使用 [YAPI](http://yapi.demo.qunar.com/)，具体使用可参考该文档，因为安全性问题，目前自己部署了一套[YAPI 内网](http://172.16.16.206:3000/)

### 开发时，如何解决跨域？

1. 修改`/config/dev.env.js`目录文件中`USER_PROXY: true`开启代理

2. 修改`/config/index.js`目录文件中`proxyTable`对象`target: '代理api接口请求地址'`

3. 重启本地服务

### 构建生成后，发布需要上传哪些文件？

构建生成文件放在`/dist`目录，最终我们需要上传该目录下`assets目录以及index.html文件`

## 打包 & 发布

我们可以通过一下命令进行打包构建。

```bash
# 构建生产环境(默认)
npm run build
```

### 如何打包不同环境？

在工程 `/config` 添加自定义环境配置文件，如 `xx.env.js`，并指定相关配置信息：

如 `BASE_URL`, 在 `package.json` 中 `script` 添加配置 `"build:xx": "node build/build.js --env xx"`

```bash
# 构建p1环境工程
npm run build:xx
```

构建生成的资源文件保存在/dist 目录下，接下来我们可以将构建后的前端工程部署到服务下了，目前推荐使用 `ngnix` 以及 `nodejs`。

> 如果你的项目集成了自动集成及部署，那就更好了.
