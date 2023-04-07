//导航栏
module.exports = [
  {text: '主页', link: '/index.html', icon: 'reco-home'},
  {
   text: '分类', icon: 'reco-category',
   items : [
     {
      text : '前端',
      items: [
        { text: 'HTML&CSS', link: '/notes/frontend/h5c3/html5'}, 
        { text: 'JavaScript', link: '/other/friends'},
        { text: 'NodeJs', link: '/other/friends'},
        { text: 'Vue', link: '/other/friends'},
      ]
     },
     {
      text : '其它',
      items: [
        { text: 'Git', link: '/other/project'}, 
      ]
     },
   ]
  },
  {
    text: '其它', icon: 'reco-document',
    items: [
      {
        text: 'Projects🎈',
        items: [
          { text: '✔ My Project ✨', link: '/other/project',}, 
          { text: '✔ 友 情 链 接 🎃', link: '/other/friends', }
        ]
      },
      {
        text: 'Common sites🎈',
        items: [
          { text: 'Java SE API Documentation',  link: 'https://docs.oracle.com/javase/8/docs/apiindex.html'}, 
          { text: 'Program Creek', link: 'https://www.programcreek.com/'}, 
          { text: 'Spring', link: 'https://spring.io/' },
          { text: 'Stackoverflow', link: 'https://stackoverflow.com/'}, 
          { text: 'LeetCode', link: 'https://leetcode-cn.com/'}, 
          { text: 'Vue.js', link: 'https://cn.vuejs.org/v2/guide/'},
          { text: 'BootCDN', link: 'https://www.bootcdn.cn/'}, 
          { text: 'Linux命令大全', link: 'https://www.linuxcool.com/'}, 
          { text: '编程语言排行榜', link: 'https://www.tiobe.com/tiobe-index/'}
        ]
      }
    ]
  },
  {text: '时间线', link: '/timeline/', icon: 'reco-date'},
  {text: '关于我', link: '/about/', icon: 'reco-message'},
]
