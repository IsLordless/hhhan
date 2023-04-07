const nav = require('./config/nav')
const sidebar = require('./config/sidebar')
const plugins = require('./config/plugins')

module.exports = {
  theme: 'reco',
  title: '咿呀咿呀哟',
  description: '学习使用',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpg' }]
  ],
  markdown: {
    // 代码块行号
    lineNumbers: true,
  },
  plugins, 
  themeConfig: {
    type : 'blog',
    nav,
    // sidebar: 'auto',// 自动形成侧边导航
    sidebar,
    logo: '/img/logo.jpg',
    authorAvatar: '/img/logo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    sidebarDepth: 2,
    repo: 'isLordless/hhhan',
    repoLabel: 'GitHub',
    blogConfig: {
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      }
    },
    // 最后更新时间
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
    // 作者
    author: 'hhhan',
    // 项目开始时间
    startYear: '2023',
  },
}