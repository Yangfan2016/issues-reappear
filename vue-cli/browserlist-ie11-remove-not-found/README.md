- 问题

配置了 browserlist （兼容到 ie11）后，ie11 中 仍没有添加 ChildNode#remove 方法


- 原因

Babel 不会处理 DOM API 相关的 polyfill，请自行添加或使用 https://polyfill.io/v3/ 的服务

https://github.com/vuejs/vue-cli/issues/4349
