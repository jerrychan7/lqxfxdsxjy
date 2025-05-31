import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

const base = '/lqxfxdsxjy/';

export default defineUserConfig({
  bundler: viteBundler(),
  base,
  dest: './dist',
  title: '《西方现代思想讲义》刘擎',
  description: '刘擎西方现代思想讲义，刘擎，现代思想',
  head: [
    ['link', { rel: 'icon', href: `${base}images/icon.png` }]
  ],
  theme: defaultTheme({
    // displayAllHeaders: true,
    // logo: '/images/icon.png',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    sidebarDepth: 2,
    sidebar: [
      { text: '前言', link: '/chapters/01.md' },
      { text: '导论', link: '/chapters/02.md' },
      // 侧边栏分组
      {
        text: '第一章 现代思想的成年',   // 必要的
        collapsible: false, // 可选的, 默认值是 true,
        children: [
          { link: '/chapters/03.md', text: '04 路标：韦伯与现代思想的成年'},
          { link: '/chapters/04.md', text: '05 韦伯 I: 为什么说“祛魅”是人类的梦醒时分'},
          { link: '/chapters/05.md', text: '06 韦伯 II: 现代的“诸神之争”是怎么发生的'},
          { link: '/chapters/06.md', text: '07 韦伯 III: 工具理性会带来什么问题'},
          { link: '/chapters/07.md', text: '08 韦伯 IV:“现代的铁笼”是怎么铸就的'},
        ]
      },
      {
        text: '第二章 现代人的精神危机',
        collapsible: false,
        children: [
          { link: '/chapters/08.md', text: '09 路标：现代人的“精神危机”'},
          { link: '/chapters/09.md', text: '10 尼采 I: “上帝死了”究竟是什么意思'},
          { link: '/chapters/10.md', text: '11 尼采 II: “超人”究竟是什么人'},
          { link: '/chapters/11.md', text: '12 尼采 III: 我们还有共同的真相吗'},
          { link: '/chapters/12.md', text: '13 弗洛伊德 I: 为什么说他宣告了“理性人”的死亡'},
          { link: '/chapters/13.md', text: '14 弗洛伊德 II: 精神分析学说真的是科学吗'},
          { link: '/chapters/14.md', text: '15 萨特 I: 为什么如此特立独行'},
          { link: '/chapters/15.md', text: '16 萨特 II: 为什么可以从“虚无”推出“自由”'},
          { link: '/chapters/16.md', text: '17 萨特 III: 为什么自由是一种沉重的负担'},
        ]
      },
      {
        text: '第三章 20 世纪的教训',
        collapsible: false,
        children: [
          { link: '/chapters/17.md', text: '18 路标：20 世纪的灾难为什么不可思议'},
          { link: '/chapters/18.md', text: '19 鲍曼：大屠杀是因为疯狂吗'},
          { link: '/chapters/19.md', text: '20 阿伦特 I: 大屠杀真的是“平庸之恶”吗'},
          { link: '/chapters/20.md', text: '21 阿伦特 II: 怎么才能不变成坏人'},
          { link: '/chapters/21.md', text: '22 波普尔 I: 科学是怎么被重新定义的'},
          { link: '/chapters/22.md', text: '23 波普尔 II: 为什么人类不能创造出完美社会'},
          { link: '/chapters/23.md', text: '24 哈耶克 I: 没有设计规划，能够形成秩序吗'},
          { link: '/chapters/24.md', text: '25 哈耶克 II:“理性的自负”为什么很危险'},
          { link: '/chapters/25.md', text: '26 伯林 I: 是“狐狸”还是“刺猬”'},
          { link: '/chapters/26.md', text: '27 伯林 II: 价值一元论错在了哪里'},
          { link: '/chapters/27.md', text: '28 伯林 III: 你想要的是哪种“自由”'},
          { link: '/chapters/28.md', text: '29 马尔库塞 I:“舒适的”不自由是怎么一回事'},
          { link: '/chapters/29.md', text: '30 马尔库塞 II: 我们是“单面人”吗'},
          { link: '/chapters/30.md', text: '31 马尔库塞 III:“实质性的变革”是有可能的吗'},
        ]
      },
      {
        text: '第四章 自由主义及其批判者',
        collapsible: false,
        children: [
          { link: '/chapters/31.md', text: '32 路标：自由主义为什么会不断遭到挑战'},
          { link: '/chapters/32.md', text: '33 罗尔斯：怎么才能实现社会正义'},
          { link: '/chapters/33.md', text: '34 诺齐克：最自由的国家是什么样子'},
          { link: '/chapters/34.md', text: '35 德沃金：什么样的平等才合理'},
          { link: '/chapters/35.md', text: '36 桑德尔：当代人需要为历史事件负责吗'},
          { link: '/chapters/36.md', text: '37 沃尔泽：“原子化的个人”是怎么诞生的'},
          { link: '/chapters/37.md', text: '38 泰勒：如何“成为你自己”'},
          { link: '/chapters/38.md', text: '39 哈贝马斯：为什么“交谈”是一件非比寻常的事'},
        ]
      },
      {
        text: '尾声后冷战时代的争论',
        collapsible: false,
        children: [
          { link: '/chapters/39.md', text: '40 路标：后冷战时代的世界秩序'},
          { link: '/chapters/40.md', text: '41 福山：“历史终结论”究竟在说什么'},
          { link: '/chapters/41.md', text: '42 亨廷顿：“文明的冲突”是不可避免的吗'},
          { link: '/chapters/42.md', text: '43 结语：现在是新的历史转折点吗'},
        ]
      },
      { text: '答学友问', link: '/chapters/43.md' },
      { text: '推荐阅读书单', link: '/chapters/44.md' },
      { text: '后记：感想与致谢', link: '/chapters/45.md' },
      { text: '参考文献', link: '/chapters/46.md' },
    ]
  }),
});
