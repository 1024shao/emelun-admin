const sidebar = {
  '/articles': [
    { text: '快速开始', link: '/quickstart.md' },
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button/' },
      ]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ]
}
const config = {
  title: "🔨  Emelun-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar,
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/articles/" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
    ],
  },
  socialLinks: [
    { icon: "github", link: "https://gitee.com/geeksdidi" },
    {
      icon: {
        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
      },
      link: "...",
    },
  ],
  markdown: {
    config: (md) => {
    // 添加DemoBlock插槽
    const { demoBlockPlugin } = require('vitepress-theme-demoblock')
    md.use(demoBlockPlugin)
    }
  }
}
export default config