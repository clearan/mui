### 安装
- yarn create vite
- cd 项目
- npm install

### package.json
- "private": true, // 设置为false,否则无法发布npm

解决报错，不能将vue打进clear-mui：
rollupOptions: {
external: ["vue"],
output: {
globals: {
vue: "Vue"
}
},
},
