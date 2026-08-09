export const profile = {
  name: '张千',
  enName: 'ZHANG QIAN',
  school: '北京师范大学 · 金融专硕在读',
  phone: '181-2475-1879',
  email: '18124751879@163.com',
}

export const projects = [
  {
    id: 'netease',
    index: '01',
    company: '网易互娱',
    role: '品牌管理培训生 · 梦幻西游项目组',
    period: '2026.07 — 至今',
    title: '梦幻西游 · 玩家反馈与社群运营体系',
    en: 'NETEASE GAMES',
    summary:
      '负责梦幻西游玩家诉求归档与社群运营，从一线玩家反馈中沉淀可复用的运营方法：30+ 份玩家诉求标准化归档、贴吧/小红书双平台内容排期、2000+ 玩家社群覆盖。',
    accent: '#1e3a5f',
    accent2: '#0d1b2e',
    hero: 'images/work/netease-1.jpg',
    tags: ['玩家反馈体系', '社群运营', '内容排期', '数据台账'],
    metrics: [
      { value: '34', label: '核心玩家诉求' },
      { value: '2000+', label: '社群覆盖玩家' },
      { value: '20+', label: '互动宣传内容' },
      { value: '2 平台', label: '贴吧 + 小红书' }
    ],
    intro: [
      '在网易互娱梦幻西游项目组，我负责把“玩家在说什么”变成“产品能看懂的反馈”。这项工作看起来是收集与归档，实际上考验的是分类能力、优先级判断和持续运营的耐心。',
      '我搭建了标准化玩家反馈台账：把散落在贴吧、小红书、论坛、微博、投诉平台和媒体的声音归类成六大类别，标注讨论热度与优先级，让每一条诉求都有来源、有依据、有建议方向。',
      '与此同时，我独立运营贴吧和小红书两个平台：策划内容选题、确定发帖节奏、跟进活动预热与复盘，把运营动作落到一张可执行的内容排期表里。'
    ],
    story: [
      {
        title: '从 286 条样本到 34 条核心诉求',
        text: '玩家反馈是零散的，情绪化的，甚至互相矛盾的。我的第一件事是建立样本池：把不同渠道的原始声音全部收进来，再逐条清洗、归类、去重。286 条原始样本最终沉淀为 34 条核心诉求，每条都对应真实玩家场景。',
        img: 'images/work/netease-report-method.png',
        caption: '报告方法页：286 条原始样本 → 34 条核心诉求'
      },
      {
        title: '优先级不是拍脑袋，是算出来的',
        text: '诉求再多，产品团队也要先做最重要的事。我给每条诉求打上 P0/P1/P2 优先级，结合讨论热度分层：口碑底线问题（稳定、排队、误判）优先，体验优化次之，锦上添花最后。',
        img: 'images/work/netease-chart-priority.png',
        caption: '优先级与讨论热度分布：P0/P1 占核心诉求 88.2%'
      },
      {
        title: '社群内容不是想发就发，要有排期',
        text: '我把贴吧和小红书的运营拆成 8 周 22 条内容计划：舆情回应、攻略干货、外观种草、活动预热、版本解读、UGC 征集、月度复盘……每条都写清楚发帖原因、帖子结构和关联热点。',
        img: 'images/work/netease-schedule-1.png',
        caption: '双平台内容排期表：第 1–4 周（7/6 – 8/2）'
      },
      {
        title: '把工作做成可交付的成果',
        text: '实习期间我沉淀了两份完整交付物：《玩家诉求分类与优先级建议报告》和《贴吧/小红书内容排期表》。报告覆盖封面、方法、类别分布、优先级热度、汇总表与洞察，可以直接进入执行评估。',
        img: 'images/work/netease-report-cover.png',
        caption: '《玩家诉求分类与优先级建议报告》封面'
      }
    ],
    gallery: [
      { src: 'images/work/netease-report-cover.png', caption: '报告封面 · 玩家诉求分类与优先级建议' },
      { src: 'images/work/netease-report-method.png', caption: '研究方法 · 286 条样本 → 34 条核心诉求' },
      { src: 'images/work/netease-chart-source.png', caption: '样本来源分布 · 六大渠道' },
      { src: 'images/work/netease-chart-category.png', caption: '六大类别诉求分布' },
      { src: 'images/work/netease-chart-priority.png', caption: '优先级与讨论热度分布' },
      { src: 'images/work/netease-chart-insights.png', caption: '核心洞察：先把玩家最痛的问题解决' },
      { src: 'images/work/netease-report-table1.png', caption: '诉求汇总表 01–12 · 卡顿、排队与收费' },
      { src: 'images/work/netease-report-table2.png', caption: '诉求汇总表 13–23 · 奖励与外观' },
      { src: 'images/work/netease-report-table3.png', caption: '诉求汇总表 24–34 · 玩法与体验' },
      { src: 'images/work/netease-report-detail1.png', caption: '诉求明细 01–08' },
      { src: 'images/work/netease-report-detail2.png', caption: '诉求明细 09–17' },
      { src: 'images/work/netease-report-detail3.png', caption: '诉求明细 18–27' },
      { src: 'images/work/netease-report-detail4.png', caption: '诉求明细 28–34' },
      { src: 'images/work/netease-schedule-1.png', caption: '内容排期表 W1–W4' },
      { src: 'images/work/netease-schedule-2.png', caption: '内容排期表 W4–W8' },
      { src: 'images/work/netease-1.jpg', caption: '入职礼包 · 新环境的第一天' },
      { src: 'images/work/netease-3.jpg', caption: '园区活动 · 项目组氛围' },
      { src: 'images/work/netease-4.jpg', caption: '与 mentor 一起用餐' }
    ],
    docs: [
      { name: '玩家诉求分类与优先级建议报告（数据表）', file: 'docs/梦幻西游玩家诉求分类与优先级建议报告.xlsx' },
      { name: '贴吧 / 小红书内容排期表', file: 'docs/梦幻西游贴吧小红书内容排期表.xlsx' },
      { name: '网易面试准备与复盘', file: 'docs/网易面试.docx' },
      { name: '面试补充回答', file: 'docs/面试_补充回答.docx' }
    ],
    learning: [
      '做运营的第一课：先分类，再判断。没有分类的反馈只是一堆情绪，分类之后才是可以行动的方案。',
      '优先级意识很重要：资源永远有限，P0 先做、P1 跟进、P2 排队，是让产品团队愿意信任你的关键。',
      '内容运营要有节奏感。不是写得越多越好，而是让每一条内容都对应一个运营目标。'
    ]
  },
  {
    id: 'yuexiu',
    index: '02',
    company: '越秀集团',
    role: '教育培训部 · 人才发展岗',
    period: '2026.04 — 2026.07',
    title: '国企人才培养项目与高管访谈整理',
    en: 'YUE XIU GROUP',
    summary:
      '参与广州马场 CBD 建设项目与“领秀五期”领导力项目统筹，并以访谈者身份完成 9 位高管的一对一访谈整理：录音转写、逐字校对、多色标注，全程零差错交付。',
    accent: '#143d3b',
    accent2: '#0a1f1e',
    hero: 'images/work/yuexiu-2.jpg',
    tags: ['项目统筹', '高管访谈', '录音转写', '零差错交付'],
    metrics: [
      { value: '9 位', label: '高管一对一访谈' },
      { value: '40+', label: '访谈稿件整理校对' },
      { value: '0', label: '差错交付' },
      { value: '2 类', label: '项目 + 访谈工作线' }
    ],
    intro: [
      '在越秀集团教育培训部人才发展岗，我有两条工作线：一条是人才培养项目的统筹执行，一条是配合马场 CBD 项目团队建设的高管访谈整理。',
      '人才培养项目上，我以 Office + AI 工作流完成培训方案、会议材料与汇报文稿，用 Excel 梳理分工进度；访谈项目上，我担任 9 位高管一对一访谈的提问者与整理者，从前期准备到最终交付全流程负责。'
    ],
    story: [
      {
        title: '访谈不是照本宣科，是带着准备去追问',
        text: '公司提供了采访问题清单，但真正的访谈要能接住对方的回答。前期我吃透项目背景与组织架构，梳理关键议题；现场根据受访者的回答灵活追问、深挖细节，把泛泛的回应聊成具体案例。',
        img: 'images/work/yuexiu-interview-2.png',
        caption: '访谈稿整理 · 问答分色标注示例'
      },
      {
        title: '录音转文字只是开始，逐字校对才是关键',
        text: '访谈稿的工作量远超想象：录音转文字后要去口水话、修正口语表述、提炼问题与回答、按“问题—回答—总结”结构重新组织，再配合多色标注让关键信息一目了然。',
        img: 'images/work/yuexiu-interview-1.png',
        caption: '多页长稿 · 转写后逐字校对'
      },
      {
        title: '机密项目，质量要求是零差错',
        text: '访谈涉及重点项目团队建设，内容具有机密性。从采访到整理、从标注到归档，每一环节都反复核对：我不允许自己交付一份有瑕疵的稿子。',
        img: 'images/work/yuexiu-interview-3.png',
        caption: '长稿分段提炼 · 每段配总结要点'
      },
      {
        title: '项目统筹：把会务与进度管起来',
        text: '在人才培养项目里，我用 Excel 维护分工与进度台账，以 Office + AI 工作流快速产出方案和会议材料，并参与集团周年庆等活动会务支持，锻炼了大型项目统筹与跨部门协同能力。',
        img: 'images/work/yuexiu-4.jpg',
        caption: '41 周年庆与户外活动会务支持'
      }
    ],
    gallery: [
      { src: 'images/work/yuexiu-interview-1.png', caption: '多页长稿 · 转写后逐字校对' },
      { src: 'images/work/yuexiu-interview-2.png', caption: '问答分色 · 快速定位关键信息' },
      { src: 'images/work/yuexiu-interview-3.png', caption: '分段提炼 · 每段配总结要点' },
      { src: 'images/work/yuexiu-1.jpg', caption: '实习日常' },
      { src: 'images/work/yuexiu-2.jpg', caption: '41 周年庆现场' },
      { src: 'images/work/yuexiu-3.jpg', caption: '员工食堂' },
      { src: 'images/work/yuexiu-4.jpg', caption: '户外活动' },
      { src: 'images/work/yuexiu-5.jpg', caption: '工位一角' }
    ],
    docs: [
      { name: '蔡正强总访谈稿', file: 'docs/蔡正强总访谈稿.docx' },
      { name: '陈伟智总访谈稿', file: 'docs/陈伟智总访谈稿.docx' },
      { name: '崔总访谈稿整理', file: 'docs/崔总访谈稿整理.docx' },
      { name: '李帷总访谈稿', file: 'docs/李帷总访谈稿.docx' },
      { name: '力大总访谈稿整理', file: 'docs/力大总访谈稿整理.docx' },
      { name: '丘荪坚总访谈稿整理', file: 'docs/丘荪坚总访谈稿整理.docx' },
      { name: '汪总访谈稿整理', file: 'docs/汪总访谈稿整理.docx' },
      { name: '许炀总访谈稿整理（有总结）', file: 'docs/许炀总访谈稿整理有总结.docx' },
      { name: '朱亮总访谈稿整理', file: 'docs/朱亮总访谈稿整理.docx' },
      { name: '项目周会纪要 · 格式规范', file: 'docs/项目周会纪要_格式规范.xlsx' }
    ],
    learning: [
      '访谈是一门“听”的学问：听懂对方真正想表达的，比问出准备好的问题更重要。',
      '整理工作拼的不是文笔，是细心和标准。一份零差错的稿子背后，是重复核对十遍的耐心。',
      '在国企环境里，项目统筹的秘诀是台账化：让每一项分工、每一个节点都有据可查。'
    ]
  },
  {
    id: 'nanfang',
    index: '03',
    company: '南方报业',
    role: '实习编辑',
    period: '2026.02 — 2026.04',
    title: '图书校审与新媒体宣发',
    en: 'NANFANG DAILY',
    summary:
      '在广东南方日报出版社担任实习编辑：负责图书稿件初审校对，整理 40+ 份校对记录并分类归档；参与新媒体宣发，撰写图书简介与短文案 18 篇。',
    accent: '#3a2a4d',
    accent2: '#1a1226',
    hero: 'images/work/nanfang-5.jpg',
    tags: ['内容编辑', '校对规范', '新媒体文案', '台账管理'],
    metrics: [
      { value: '40+', label: '书稿校对记录' },
      { value: '18 篇', label: '新媒体短文案' },
      { value: '14 类', label: '校对问题分类' },
      { value: '0', label: '原则性差错' }
    ],
    intro: [
      '编辑不是改错别字那么简单。在南方日报出版社，我从图书稿件初审校对做起，逐渐理解：编辑是在“内容质量”和“出版节奏”之间做平衡的人。',
      '我把校对做成台账：文字、标点、格式、逻辑、常识……每一类问题都记录在案、分类归档。用 AI 辅助初查、人工复核，在效率与准确率之间找到自己的节奏。'
    ],
    story: [
      {
        title: '校对的本质，是对文字的敬畏',
        text: '从校歌创作稿件到长论文打印稿，每一处表述都要经得起追问。我养成了逐字审读的习惯：先通读理解语境，再逐句核对细节，最后回头检查标点与格式。',
        img: 'images/work/editor-draft-song.png',
        caption: '校歌创作稿件 · 逐字审读标注'
      },
      {
        title: 'AI 辅助初查，人工负责判断',
        text: '面对大篇幅稿件，我会用 AI 做第一轮初查，但最终判断永远在我手里：AI 能指出“可能有问题的位置”，能不能改、怎么改，需要编辑对内容和语境的完整理解。',
        img: 'images/work/editor-manual.png',
        caption: '《图书编辑校对实用手册》· 实习工具书'
      },
      {
        title: '从使用者到审读者的视角切换',
        text: '翻阅教材和图书时，我的视角变了：不再只是读者，而是会想“这句话读者能看懂吗？这个表述是否严谨？这里会不会产生歧义？”。',
        img: 'images/work/editor-textbooks.png',
        caption: '教材翻阅 · 从使用者到审读者的视角切换'
      },
      {
        title: '把校对做成可追溯的台账',
        text: '实习期间我整理了 40+ 份校对记录，按问题类型分类归档，形成一份可以复用的校对工作记录表——这也是我“台账化”工作习惯的又一次实践。',
        img: 'images/work/editor-draft-thesis.png',
        caption: '长文打印稿 · 校对与格式核对'
      }
    ],
    gallery: [
      { src: 'images/work/editor-manual.png', caption: '《图书编辑校对实用手册》' },
      { src: 'images/work/editor-draft-song.png', caption: '校歌创作稿件 · 逐字审读标注' },
      { src: 'images/work/editor-draft-thesis.png', caption: '长文打印稿 · 校对与格式核对' },
      { src: 'images/work/editor-textbooks.png', caption: '教材翻阅 · 视角切换' },
      { src: 'images/work/editor-reading.png', caption: '通勤阅读 · 保持内容输入' },
      { src: 'images/work/nanfang-1.jpg', caption: '翻阅报刊资料' },
      { src: 'images/work/nanfang-2.jpg', caption: '文创礼包' },
      { src: 'images/work/nanfang-3.jpg', caption: '楼下锦鲤池' },
      { src: 'images/work/nanfang-4.jpg', caption: '园区导视' },
      { src: 'images/work/nanfang-5.jpg', caption: '“南方+”大楼' },
      { src: 'images/work/nanfang-6.jpg', caption: '会议交流' },
      { src: 'images/work/nanfang-7.jpg', caption: '集团入口' },
      { src: 'images/work/nanfang-8.jpg', caption: '创汇大楼' },
      { src: 'images/work/nanfang-9.jpg', caption: '北京新闻中心' }
    ],
    docs: [
      { name: '南方报业实习 · 编辑校对工作记录', file: 'docs/南方报业实习_编辑校对工作记录.xlsx' }
    ],
    learning: [
      '编辑教会我“严谨”：每一处细节都可能影响整本书的质量，校对是最朴素的匠心。',
      'AI 是效率工具，不是判断工具。真正的专业判断，来自对内容和语境的完整理解。',
      '把重复工作台账化，是我在所有实习里反复使用的习惯，也是效率提升最直接的方法。'
    ]
  },
  {
    id: 'gree',
    index: '04',
    company: '格力电器',
    role: '人力资源实习生',
    period: '2025.10 — 2025.12',
    title: '招聘全流程支持与渠道数据分析',
    en: 'GREE ELECTRIC',
    summary:
      '在珠海格力电器担任人力资源实习生：维护简历 → 邀约 → 面试 → 录用 → 入职全流程招聘台账，按渠道对比转化率与成本，用数据支撑招聘策略调整。',
    accent: '#4a5a6a',
    accent2: '#1f2937',
    hero: 'images/work/gree-3.jpg',
    tags: ['招聘台账', '渠道分析', '数据复盘', '流程管理'],
    metrics: [
      { value: '679 份', label: '简历处理' },
      { value: '62 人', label: '入职' },
      { value: '26.6%', label: '内推转化率' },
      { value: '全流程', label: '简历到入职' }
    ],
    intro: [
      '在格力电器人力资源部，我负责招聘全流程的台账维护与数据复盘：从简历筛选、邀约、面试安排到录用入职，每个环节的状态都要清晰可查。',
      '我最有收获的部分是渠道分析：把不同招聘渠道的数据拉出来对比，算清楚每个渠道的邀约率、面试通过率、Offer 接受率与单入职成本，用数据回答“钱应该花在哪个渠道”。'
    ],
    story: [
      {
        title: '台账的意义：让每一步都有据可查',
        text: '招聘流程涉及大量候选人，没有台账就会失控。我维护的台账覆盖简历 → 邀约 → 面试 → 录用 → 入职全流程，679 份简历、62 人入职，每一份状态都清晰可追溯。',
        img: 'images/work/gree-recruit-channels.png',
        caption: '招聘渠道效果对比分析'
      },
      {
        title: '渠道对比：数据告诉你钱花在哪',
        text: '我把各渠道的转化漏斗拉出来：投递量、邀约率、面试通过率、录用率、单入职成本逐项对比。结果显示内推转化率最高（26.6%）、官网成本最低，这就是优化方向。',
        img: 'images/work/gree-recruit-funnel.png',
        caption: '招聘转化漏斗明细 · 逐渠道转化率'
      },
      {
        title: '复盘不是为了写报告，是为了调整策略',
        text: '数据复盘最终要落到行动建议：提高内推占比、优化官网职位描述、用 ATS 预筛减少无效面试。每一条建议都有数据支撑，而不是凭感觉。',
        img: 'images/work/gree-recruit-analysis.png',
        caption: '渠道逐条分析与优化建议'
      },
      {
        title: '在制造企业，流程感无处不在',
        text: '格力教会我的不只是招聘流程，更是“流程感”：从厂区到展厅，从园区到产线，处处体现着标准化与严谨。这种对流程的尊重，也影响了我做任何工作的方式。',
        img: 'images/work/gree-3.jpg',
        caption: '企业展厅 · 荣誉墙'
      }
    ],
    gallery: [
      { src: 'images/work/gree-recruit-channels.png', caption: '渠道效果对比分析' },
      { src: 'images/work/gree-recruit-funnel.png', caption: '转化漏斗明细' },
      { src: 'images/work/gree-recruit-analysis.png', caption: '渠道逐条分析与优化建议' },
      { src: 'images/work/gree-1.jpg', caption: '园区步道' },
      { src: 'images/work/gree-2.jpg', caption: '班车通勤' },
      { src: 'images/work/gree-3.jpg', caption: '企业展厅 · 荣誉墙' },
      { src: 'images/work/gree-4.jpg', caption: '产品剖切展示' },
      { src: 'images/work/gree-5.png', caption: '玫瑰空调展区' },
      { src: 'images/work/gree-6.jpg', caption: '厂区大道' }
    ],
    docs: [
      { name: '招聘渠道效果对比分析', file: 'docs/招聘渠道效果对比分析.xlsx' }
    ],
    learning: [
      '数据不会说谎，但前提是你把台账做对了。招聘的每一步，都值得被记录。',
      '“用数据说话”不是口号：当你能算出每个渠道的真实成本，建议自然有说服力。',
      '大企业的流程规范看起来繁琐，但它保证了组织的稳定运转。'
    ]
  },
  {
    id: 'xhs',
    index: '05',
    company: '小红书独立运营',
    role: '账号主理人 · 内容策划 · 课程交付',
    period: '2024 — 至今',
    title: '考研内容运营与复试辅导',
    en: 'XIAOHONGSHU',
    summary:
      '独立运营小红书账号，从账号定位到内容产出全部一人完成：1300+ 粉丝、5100+ 获赞收藏；策划并交付复试辅导课程，招收 20+ 位学员，服务到考前最后一天。',
    accent: '#7c3aed',
    accent2: '#3b0764',
    hero: 'images/work/xhs-account.png',
    tags: ['内容运营', '账号增长', '课程交付', '用户服务'],
    metrics: [
      { value: '1300+', label: '小红书粉丝' },
      { value: '5100+', label: '获赞与收藏' },
      { value: '20+', label: '复试辅导学员' },
      { value: '100+', label: '干货资料下载' }
    ],
    intro: [
      '这是我自己从零做起来的项目：一个专注北师大金融专硕考研的小红书账号。从账号定位、内容选题到笔记产出，全部由我一个人完成。',
      '考研类内容受众窄、天然不容易爆火，但正因为足够用心，每篇干货笔记都获得了远超同类账号的认可：国际金融必背名解单篇 105 人下载，公司理财简答题整理 184 人下载。'
    ],
    story: [
      {
        title: '账号从零到一：定位决定内容',
        text: '账号定位清晰：北师金融硕士在读，专注备考经验与干货输出。粉丝 1300+、获赞与收藏 5100+，靠的不是运气，而是持续稳定地输出对考生真正有用的内容。',
        img: 'images/work/xhs-account.png',
        caption: '账号主页 · 粉丝 1300+，获赞与收藏 5100+'
      },
      {
        title: '把经验变成服务：复试辅导课程',
        text: '基于备考经验，我策划了复试辅导课程：复试指导、模拟面试、每日专业英语背诵打卡、一对一答疑，全程通过腾讯会议进行线上模拟面试，招生 20+ 人，定价亲民，服务到考前。',
        img: 'images/work/xhs-course.png',
        caption: '复试辅导课程安排 · 手写版'
      },
      {
        title: '内容是理解后的输出',
        text: '我坚持手写整理知识点：资本市场线、证券市场线、MM 定理……把抽象概念画成图、讲清楚答题思路。这些内容不仅帮到考生，也证明了我“把复杂知识讲清楚”的能力。',
        img: 'images/work/xhs-hand-drawn.png',
        caption: '公司理财图像整理 · 手绘图表'
      },
      {
        title: '不止是知识，还有共情',
        text: '考完试收到“感觉考砸了”的私信，我写下数千字长文分享自己的备考经历，不回避失误，只想让焦虑的同学知道：一切还没有结束。耐心与共情，是这个账号最珍贵的东西。',
        img: 'images/work/xhs-comfort.png',
        caption: '写给考砸同学的经验贴 · 数千字长文'
      }
    ],
    gallery: [
      { src: 'images/work/xhs-account.png', caption: '账号主页 · 粉丝 1300+' },
      { src: 'images/work/xhs-course.png', caption: '复试辅导课程安排' },
      { src: 'images/work/xhs-comfort.png', caption: '写给考砸同学的经验贴' },
      { src: 'images/work/xhs-intl-finance.png', caption: '国际金融必背名解 · 105 人下载' },
      { src: 'images/work/xhs-corp-finance.png', caption: '公司理财简答题整理 · 184 人下载' },
      { src: 'images/work/xhs-hand-drawn.png', caption: '公司理财图像整理 · 手绘图表' }
    ],
    docs: [],
    learning: [
      '独立运营让我理解了“内容生产闭环”：定位、选题、制作、发布、复盘，每一步都要自己负责。',
      '把知识讲清楚是一种能力：能教会别人，才是真正理解。',
      '服务用户的核心是共情：用户需要的不仅是答案，还有被认真对待的感觉。'
    ]
  }
]
