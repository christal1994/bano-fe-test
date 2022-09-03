# vite-react-ts

## Development

### QuickStart
```bash
pnpm install
pnpm run dev
open http://localhost:8080/
```

### Build
```bash
pnpm run build
```

### 搜索只渲染显示部分思路
对于定高 Item 滚动处理相对简单

1、3 级深度的 dom 结构：
- 第一层是 100vh 高度的容器，允许滚动
- 第二层是所有元素组成高度，仅为一个空有高度的空白元素
- 第三层是固定元素渲染层

2、固定元素渲染层渲染：
- 第一个元素位置 = 滚动距离 / Item 高度
- 最后一个元素位置 = 第一个元素位置 + 20 (默认渲染 20 条)
- 每条元素通过 translateY 定位

## Structure

```bash
|-- bano-fe-search                                    
    |-- .eslintignore                                 // eslint ignore
    |-- .eslintrc                                     // eslint 配置
    |-- .gitignore                                    // git ignore
    |-- .lintstagedrc.json                            // lint 配置
    |-- .prettierrc                                   // prettie 配置
    |-- README.md
    |-- index.html                                    // 入口文件
    |-- package.json
    |-- pnpm-lock.yaml
    |-- tsconfig.json
    |-- tsconfig.node.json
    |-- vite.config.ts                                // vite 配置文件
    |-- .husky                                        // husky 配置
    |   |-- pre-commit
    |   |-- _
    |       |-- .gitignore
    |       |-- husky.sh
    |-- public                                        // public static
    |   |-- favicon.ico
    |-- src                                           // 项目源码目录
        |-- .editorconfig
        |-- main.tsx                                  // 源码入口文件
        |-- vite-env.d.ts
        |-- components                                // 组件库
        |   |-- context
        |   |   |-- searchContext.tsx
        |   |-- hooks
        |   |-- packages-biz                          // 组件库 -- 业务组件
        |   |   |-- select-modal
        |   |       |-- SelectModal.tsx
        |   |       |-- index.module.less
        |   |       |-- index.tsx
        |   |       |-- types.ts
        |   |-- packages-ui                           // 组件库 -- UI 组件
        |       |-- input
        |       |   |-- Input.tsx
        |       |   |-- index.module.less
        |       |   |-- index.tsx
        |       |   |-- types.ts
        |       |-- list
        |       |   |-- List.tsx
        |       |   |-- index.module.less
        |       |   |-- index.tsx
        |       |   |-- types.ts
        |       |-- modal
        |           |-- Modal.tsx
        |           |-- index.module.less
        |           |-- index.tsx
        |           |-- types.ts
        |-- icons                                       // 字体库
        |   |-- close.svg
        |   |-- putclose.svg
        |   |-- search.svg
        |-- lib
        |   |-- country.json
        |-- pages                                       // 所有页面入口
        |   |-- index
        |       |-- index.module.less
        |       |-- index.tsx
        |-- styles
            |-- global.css
            |-- reset.css

```

## Online

线上：<http://124.71.237.184/>
