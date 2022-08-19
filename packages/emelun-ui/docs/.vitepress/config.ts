// const sidebar = {
//   '/': [
//     { text: '快速开始', link: '/' },
//     {
//       text: '通用',
//       children: [
//         { text: 'Button 按钮', link: '/components/button/' },
//       ]
//     },
//     { text: '导航' },
//     { text: '反馈' },
//     { text: '数据录入' },
//     { text: '数据展示' },
//     { text: '布局' },
//   ]
// }
// const config = {
//   title: "🔨  Emelun-UI",
//   description: "组件库搭建的教学模型",
//   themeConfig: {
//     sidebar,
//     nav: [
//       { text: "Guide", link: "/" },
//       { text: "GuideTest", link: "//" },
//       { text: "gitee", link: "https://gitee.com/geeksdidi" },
//     ],
//   },
//   socialLinks: [
//     { icon: "github", link: "https://gitee.com/geeksdidi" },
//     {
//       icon: {
//         svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
//       },
//       link: "...",
//     },
//   ],
//   markdown: {
//     config: (md) => {
//     // 添加DemoBlock插槽
//     const { demoBlockPlugin } = require('vitepress-theme-demoblock')
//     md.use(demoBlockPlugin)
//     }
//   }
// }
// export default config


import { defineConfig } from "vitepress";
const sidebar = [
  {
    text: "Introduction",
    description: "一站式Mini组件库",
    items: [
      { text: "Emelun-UI是什么 ?", link: "/guide/intro/" },
    ],
  },
  {
    text: "通用",
    items: [
      { text: "Button 按钮", link: "/components/button/" },
    ],
  },
  {
    text: "导航",
    items: [],
  },
  {
    text: "反馈",
    items: [],
  },
  {
    text: "数据录入",
    items: [],
  },
  {
    text: "数据展示",
    items: [],
  },
  {
    text: "布局",
    items: [],
  },
];

export default defineConfig({
  title: "Emelun-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    logo:'/favicon.png',
    sidebar,
    //     nav: [
//       { text: "Guide", link: "/" },
//       { text: "GuideTest", link: "//" },
//       { text: "gitee", link: "https://gitee.com/geeksdidi" },
//     ],
    nav: [
      { text: "Guide", link: "/guide/intro/" },
      { text: "找到邵小白", link: "https://juejin.cn/user/210745713517950/posts" },
          ],
    socialLinks: [{ icon: "github", link: "https://github.com/1024shao/emelun-admin" },]
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
});
