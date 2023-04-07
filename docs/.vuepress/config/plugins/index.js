module.exports = [
  'ribbon',
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ["z16"],
    }
  ],
  [
    '@vuepress-reco/vuepress-plugin-loading-page',
  ],
  [
    '@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [
        {
          name: 'speak fly',
          artist: ' Taylor Swift',
          url: 'https://other-web-nf01-sycdn.kuwo.cn/ce159a530ba89b0215c6dc6ddde257cf/642fc2dd/resource/n3/96/95/3103322283.mp3',
          cover: 'https://img4.kuwo.cn/star/albumcover/120/65/29/1528807953.jpg'
        },
      ]
    }
  ],

]