# umi project

## 运行项目

Install dependencies,

```bash
$ yarn
```

Start the local server,

```bash
$ yarn start
```

start dev/prod server
在根目录下创建 .umirc.dev.ts or .umirc.prod.ts文件

```
$ yarn start:dev or yarn start:prod
```

## 启用 Sentry

复制 `.sentryclirc.sample` 并重命名为 `.sentryclirc`, 根据说明来配置.

示例如下

```ini
[defaults]
org=dadi
project=project-name
url=https://url-of-sentry.com

[auth]
token=----secret-token-----
```
