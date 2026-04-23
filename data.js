export const siteMeta = {
  name: '杭州政委通',
  subtitle: '上城区政协履职与协商实践平台',
  city: '杭州市',
  district: '上城区',
};

export const platformDataPath = '../data/5. 委员履职平台/5履职平台.json';
export const streetDocumentPath = '../data/2. 街道委员小组/14个街道.pdf';

export const metrics = [
  { value: '50', label: '委员工作室', note: '实现履职平台街道委员小组全覆盖' },
  { value: '14', label: '街道委员小组', note: '形成街道入口和阵地分布' },
  { value: '16', label: '界别单元', note: '界别活动与图片资料同步呈现' },
  { value: '25 / 17 / 4', label: '2025 星级认定', note: '五星、四星、三星工作室' },
];

export const quickModules = [
  {
    index: '01',
    title: '委员之家',
    summary: '委员资料包和日常服务资料入口，适合扩展为首页常用工具区。',
    meta: 'ZIP 资料包',
    href: '../data/1. 委员之家/1. 委员之家.zip',
    action: '打开资料',
  },
  {
    index: '02',
    title: '街道委员小组',
    summary: '14 个街道委员小组统一入口，适合接街道分组页、详情页或地图页。',
    meta: '14 个街道',
    href: './streets.html',
    action: '查看街道',
  },
  {
    index: '03',
    title: '界别基本情况',
    summary: '界别简介和活动照片合并展示，形成按界别浏览的矩阵视图。',
    meta: '16 个界别',
    href: '../data/3. 界别基本情况/1.各界别情况介绍.docx',
    action: '打开简介',
  },
  {
    index: '04',
    title: '协商民主实践',
    summary: '彭埠、紫阳两大分中心案例汇总，适合展示专题协商成果。',
    meta: '双分中心',
    href: './index.html#practice',
    action: '查看案例',
  },
  {
    index: '05',
    title: '委员履职平台',
    summary: '以委员工作室为核心模块，支持名录检索、详情查看和街道联动。',
    meta: '50 家工作室',
    href: './studios.html',
    action: '进入名录',
  },
  {
    index: '06',
    title: '星级委员工作室风采',
    summary: '把荣誉展示放在平台中后段，增强标杆导向和品牌辨识度。',
    meta: '荣誉展示',
    href: '../data/6. 星级委员工作室风采/工作室.pdf',
    action: '查看风采',
  },
  {
    index: '07',
    title: '2026 年履职计划',
    summary: '把界别履职计划和民生议事堂计划直接挂在资料中心底部。',
    meta: '年度计划',
    href: '../data/7. 2026年履职计划/2026年各界别履职计划.xlsx',
    action: '打开计划',
  },
];

export const quickActions = [
  {
    title: '工作室名录',
    meta: '50 家工作室',
    href: './studios.html',
  },
  {
    title: '街道分组',
    meta: '14 个街道',
    href: './streets.html',
  },
  {
    title: '民生议事堂计划',
    meta: 'XLS',
    href: '../data/7. 2026年履职计划/2026年各街道“民生议事堂”议事计划.xls',
  },
  {
    title: '界别简介',
    meta: 'DOCX',
    href: '../data/3. 界别基本情况/1.各界别情况介绍.docx',
  },
];

const streetSeeds = [
  {
    name: '湖滨街道',
    leader: '查靖',
    address: '上城区羊血弄10号',
    summary: '依托湖滨商圈和城市中心资源，突出商圈社区建设、文旅协商和新质生产力议题。',
    tags: ['商圈协商', '履职平台'],
    keywords: ['湖滨', '羊血弄', '湖滨小组'],
  },
  {
    name: '清波街道',
    leader: '徐洁',
    address: '上城区清波街道蔡官巷35号三楼',
    summary: '围绕历史街区治理、传统文化活动和社区协商展开常态化履职。',
    tags: ['历史街区', '民生协商'],
    keywords: ['清波', '蔡官巷', '府学巷', '四宜路', '南山路'],
  },
  {
    name: '小营街道',
    leader: '冷晓辉',
    address: '杭州市上城区建国南路98号小营街道办事处',
    summary: '聚焦街区文化、交流阅读和小营辖区公共服务议题，承担联动型履职任务。',
    tags: ['阵地协同', '文化交流'],
    keywords: ['小营', '建国南路', '解放路189号-2'],
  },
  {
    name: '望江街道',
    leader: '毛静波',
    address: '上城区翡翠海岸1幢6号',
    summary: '以基层协商和社区服务为主，承接金融知识宣传、民生议题沟通等工作。',
    tags: ['基层协商', '社区服务'],
    keywords: ['望江', '翡翠海岸'],
  },
  {
    name: '南星街道',
    leader: '游广敏',
    address: '上城区目术塘创意园2号楼7楼',
    summary: '结合文化阅读、非遗活动和南星片区服务场景，形成具有文化辨识度的履职阵地。',
    tags: ['文化阅读', '非遗活动'],
    keywords: ['南星', '目术塘', '复兴南街', '虎玉路', '江城路'],
  },
  {
    name: '紫阳街道',
    leader: '王盈',
    address: '上城区金钗袋巷79号',
    summary: '依托宋韵文化资源和紫阳分中心建设，突出协商民主向基层延伸的文化表达。',
    tags: ['宋韵文化', '分中心联动'],
    keywords: ['紫阳', '金钗袋巷', '闻潮路', '大井巷'],
  },
  {
    name: '闸弄口街道',
    leader: '祝文雅',
    address: '上城区闸弄口街道党群服务中心',
    summary: '聚焦基层治理、邻里协同和社区服务，适合承接社区议事和群众联系内容。',
    tags: ['基层治理', '社区议事'],
    keywords: ['闸弄口', '红梅社区'],
  },
  {
    name: '凯旋街道',
    leader: '金志伟',
    address: '上城区凤起东路127号',
    summary: '以界别履职、健康服务和社区阵地建设为特色，形成多点位协同布局。',
    tags: ['界别履职', '健康服务'],
    keywords: ['凯旋', '凤起东路', '凯益荟', '南肖埠', '凯西社区', '凯旋路'],
  },
  {
    name: '采荷街道',
    leader: '赵丹晨',
    address: '上城区采荷街道洁莲社区',
    summary: '突出社区服务、社会组织联动和幸福主题活动，适合打造民生服务型页面。',
    tags: ['幸福19', '社会组织'],
    keywords: ['采荷', '洁莲社区', '采荷路', '景芳'],
  },
  {
    name: '四季青街道',
    leader: '李岗',
    address: '上城区民心路280号平安金融中心B座3楼',
    summary: '依托楼宇商圈和产业资源，形成面向企业、投资和商业服务议题的协商阵地。',
    tags: ['楼宇商圈', '产业协商'],
    keywords: ['四季青', '民心路', 'UDC时代大厦', '钱江路', '城星路'],
  },
  {
    name: '笕桥街道',
    leader: '阮骏',
    address: '上城区笕桥街道政协会议室',
    summary: '聚焦基层活动组织和社区点位覆盖，兼顾医疗服务、社区工作室等一线资源。',
    tags: ['活动组织', '社区点位'],
    keywords: ['笕桥', '东港社区', '同协路'],
  },
  {
    name: '彭埠街道',
    leader: '任渊',
    address: '上城区S2杭甬高速附近罗家老宅',
    summary: '依托新时代协商民主实践中心，承接矩阵建设、专题协商和联动活动，是重点展示街道。',
    tags: ['实践中心', '协商矩阵'],
    keywords: ['彭埠', '罗家老宅', '建和社区'],
  },
  {
    name: '九堡街道',
    leader: '胡建清',
    address: '上城区九乔街与杭乔路交叉口',
    summary: '围绕社区治理、健康服务和居民联系开展履职活动，适合呈现民生服务侧内容。',
    tags: ['社区治理', '健康服务'],
    keywords: ['九堡', '九乔街', '杭乔路', '蓝桥卫生服务站', '九和路'],
  },
  {
    name: '丁兰街道',
    leader: '倪勇卿',
    address: '上城区临丁路699号丁丁兰街道办事处5号楼4楼',
    summary: '聚焦乡村共富、社区服务和丁兰片区履职平台，是共富实践的重要承接街道。',
    tags: ['乡村共富', '履职平台'],
    keywords: ['丁兰', '临丁路', '长睦苑', '皋城村'],
  },
];

export const streetGroups = streetSeeds.map((street) => ({
  ...street,
  href: `./street.html?name=${encodeURIComponent(street.name)}`,
}));

export const sectors = [
  { name: '中共', count: 2, focus: '委员学习交流与会议讨论', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '无党派', count: 5, focus: '涉外法律、物业提质、为老服务', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '共青团、青联', count: 4, focus: '青年参与、走访活动、联动实践', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '工会', count: 3, focus: '职工活动、讲堂与群众联系', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '妇联', count: 4, focus: '宋韵文化、巾帼共富与节日活动', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '工商联', count: 3, focus: '企业考察、培训与民企服务', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '科技、科协', count: 2, focus: '科创交流与专题讲座', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '侨、台', count: 3, focus: '团结联谊与交流活动', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '新闻文体', count: 2, focus: '文化参访与文体活动', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '经济', count: 2, focus: '经济议题调研与企业服务', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '环境资源和农业', count: 4, focus: '生态、资源与乡村议题', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '教育', count: 2, focus: '学校联动与青少年实践活动', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '医卫', count: 4, focus: '健康议题和医疗服务活动', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '社会福利和保障', count: 3, focus: '义卖、画展和群众关爱行动', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '民宗', count: 2, focus: '民族宗教交流与走访活动', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
  { name: '特邀', count: 5, focus: '停车、营商、读书会等专题协商', href: '../data/3. 界别基本情况/1.各界别情况介绍.docx' },
];

export const practiceCases = [
  {
    area: '彭埠分中心',
    title: '市区两级实践中心矩阵建设座谈会',
    summary: '以分中心为枢纽组织矩阵交流，强化区街融合、功能集成和协商履职示范效应。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/彭埠1-市政协新时代协商民主实践中心矩阵建设座谈会在实践中心上城区分中心召开，市政协毛溪浩副主席参加.webp',
    streets: ['彭埠街道'],
  },
  {
    area: '彭埠分中心',
    title: '圆梦安居，助力街道回迁安置',
    summary: '围绕回迁安置民生议题展开专题协商，适合作为“民生议事堂”代表案例。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/彭埠3-彭埠街道委员小组开展“圆梦安居，助力街道回迁安置”民生议事堂专题协商.webp',
    streets: ['彭埠街道'],
  },
  {
    area: '彭埠分中心',
    title: '彭埠街道非遗体验活动',
    summary: '通过非遗体验活动把文化参与、委员履职和群众互动连接起来。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/彭埠4-彭埠街道委员小组开展非遗体验活动.webp',
    streets: ['彭埠街道'],
  },
  {
    area: '彭埠分中心',
    title: '助推商圈社区建设民生议事堂',
    summary: '围绕商圈和社区双场景开展专题协商，体现楼宇商圈特色优势。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/彭埠8-湖滨街道委员小组开展“助推商圈社区建设”民生议事堂活动.webp',
    streets: ['湖滨街道'],
  },
  {
    area: '彭埠分中心',
    title: '清波街道老旧小区物业服务“质价双提”协商',
    summary: '聚焦老旧小区物业服务议题，把街道委员小组和界别力量一并拉入协商流程。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/彭埠9-清波街道委员小组、无党派界别开展清波街道老旧小区物业服务“质价双提”议事协商活动.webp',
    streets: ['清波街道'],
  },
  {
    area: '彭埠分中心',
    title: '小营街道“遇见东坡”交流会',
    summary: '把文化交流内容嵌入街道履职场景，形成更容易传播的街道活动入口。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/彭埠10-小营街道委员小组举办“遇见东坡”交流会.webp',
    streets: ['小营街道'],
  },
  {
    area: '彭埠分中心',
    title: '望江街道金融防诈专题协商',
    summary: '围绕金融知识普及和防诈意识提升组织专题协商，贴近社区实际需求。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/彭埠11-望江街道委员小组开展“普及全民金融知识增强百姓防诈意识”专题协商活动.webp',
    streets: ['望江街道'],
  },
  {
    area: '彭埠分中心',
    title: '冬季读书会及专题协商会',
    summary: '将读书交流、文化传承和协商议事结合，适合作为首页内容流中的高识别案例。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/彭埠12-南星街道委员小组携手特邀界别举办“赓续历史之文脉，建言服务为民生”冬季读书会及专题协商会.webp',
    streets: ['南星街道'],
  },
  {
    area: '紫阳分中心',
    title: '区级分中心建设调研',
    summary: '以区街联动、共建共享为主线，凸显紫阳分中心的文化浸润和协商服务功能。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/紫阳1-区政协孙国方主席赴紫阳分中心调研.webp',
    streets: ['紫阳街道'],
  },
  {
    area: '紫阳分中心',
    title: '推动邻里食堂智能化专题协商会',
    summary: '用贴近民生的议题切入，体现协商民主直达社区治理末梢的能力。',
    image: '../data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/紫阳3-紫阳上羊实践点开展“推动邻里食堂智能化”专题协商会.webp',
    streets: ['紫阳街道'],
  },
];

export const docs = [
  {
    type: 'DOCX',
    title: '履职平台简介',
    summary: '介绍上城区政协委员工作室“三位一体”建设与星级认定情况。',
    href: '../data/5. 委员履职平台/0.履职平台简介202603.docx',
    tags: ['委员工作室', '平台简介'],
  },
  {
    type: 'XLSX',
    title: '2026 上城区政协委员工作室名单',
    summary: '按成立顺序整理的委员工作室名单，适合接入详情页数据源。',
    href: '../data/5. 委员履职平台/1.2026上城区政协委员工作室名单(按成立顺序).xlsx',
    tags: ['名单', '工作室'],
  },
  {
    type: 'PDF',
    title: '14 个街道资料',
    summary: '街道委员小组资料汇总，适合继续拆分成街道详情页的附件区。',
    href: streetDocumentPath,
    tags: ['街道', '委员小组'],
  },
  {
    type: 'PDF',
    title: '星级委员工作室风采',
    summary: '荣誉展示入口，适合平台增加风采专题或榜样专区。',
    href: '../data/6. 星级委员工作室风采/工作室.pdf',
    tags: ['星级', '风采'],
  },
  {
    type: 'DOCX',
    title: '分中心基本情况',
    summary: '彭埠、紫阳两大分中心的建设背景、机制和功能布局。',
    href: '../data/4. 市政协新时代协商民主实践 - 上城分中心/2026杭州市政协新时代协商民主实践中心上城区分中心基本情况.docx',
    tags: ['分中心', '协商实践'],
  },
  {
    type: 'XLSX',
    title: '2026 年各界别履职计划',
    summary: '适合挂在平台资料中心，作为年度履职路线图入口。',
    href: '../data/7. 2026年履职计划/2026年各界别履职计划.xlsx',
    tags: ['年度计划', '界别'],
  },
  {
    type: 'XLS',
    title: '2026 年各街道民生议事堂议事计划',
    summary: '可与街道委员小组模块联动，形成计划到案例的闭环。',
    href: '../data/7. 2026年履职计划/2026年各街道“民生议事堂”议事计划.xls',
    tags: ['民生议事堂', '街道'],
  },
];

const studioMediaMap = [
  {
    match: ['政协湖滨小组委员工作室'],
    category: '产业协商',
    summary: '学习考察新质生产力，走进万事利科创中心。',
    image: '../data/5. 委员履职平台/1-政协湖滨小组委员工作室-学习考察新质生产力一-万事利科创中心.webp',
  },
  {
    match: ['政协清波小组委员工作室'],
    category: '文化润民',
    summary: '以文化送福和群众联系活动为抓手，形成清波街道特色履职场景。',
    image: '../data/5. 委员履职平台/2-政协清波小组委员工作室-幸福清波，文化送福，联动中国美院为清波派出所、禁毒所、清波居民送新年祝福.webp',
  },
  {
    match: ['三一', '紫阳'],
    category: '基层治理',
    summary: '践行“委员说·委员做”，锚定基层治理与协商落地。',
    image: '../data/5. 委员履职平台/3-政协紫阳“三一”委员工作室-践行“委员说·委员做”，锚定“两个先行”目标，领跑“基层白治”之路.webp',
  },
  {
    match: ['幸福19'],
    category: '公共服务',
    summary: '以疗愈经济分享体验会串联社区公共服务场景。',
    image: '../data/5. 委员履职平台/4-采荷街道“幸福19”委员工作室-“疗愈经济分享体验会”活动.webp',
  },
  {
    match: ['政协四季青小组委员工作室'],
    category: '产业协商',
    summary: '围绕“投早投小投科技”组织市区县三级联动协商。',
    image: '../data/5. 委员履职平台/5-政协四季青小组委员工作室-市区县三级联动，召开“投早投小投科技”专题协商会.webp',
  },
  {
    match: ['政协彭埠小组委员工作室'],
    category: '文化润民',
    summary: '通过非遗体验活动把文化参与和群众互动嵌入街道履职阵地。',
    image: '../data/5. 委员履职平台/6-政协彭埠小组委员工作室-邀请非遗传承人开展非遗制作体验活动.webp',
  },
  {
    match: ['工会界别'],
    category: '界别履职',
    summary: '围绕职工服务和界别群众联系，形成常态化主题活动。',
    image: '../data/5. 委员履职平台/7-工会界别委员工作室-开展“美丽大讲堂”活动.webp',
  },
  {
    match: ['社会福利和保障'],
    category: '公益服务',
    summary: '以义卖和公益活动连接福利保障议题与群众服务。',
    image: '../data/5. 委员履职平台/8-社会福利和保障界别委员工作室-残疾人之家的义卖活动.webp',
  },
  {
    match: ['文润童心'],
    category: '文化润民',
    summary: '聚焦传统文化启蒙教育，形成面向儿童的文化品牌活动。',
    image: '../data/5. 委员履职平台/9-“文润童心”委员工作室-传承和弘扬中华优秀传统文化，探索乡村优秀传统文化启蒙教育新路径.webp',
  },
  {
    match: ['全民阅读'],
    category: '文化润民',
    summary: '围绕宋韵美学和阅读推广，适合作为公共阅读类典型案例。',
    image: '../data/5. 委员履职平台/10-全民阅读委员工作室-举办宋韵美学体验活动.webp',
  },
  {
    match: ['爱馨文化公益'],
    category: '公益服务',
    summary: '把文化公益活动和阅读空间联动起来，强化便民服务感受。',
    image: '../data/5. 委员履职平台/11-爱馨文化公益委员工作室-爱馨文化公益委员工作室.webp',
  },
  {
    match: ['老爸好商量'],
    category: '公共服务',
    summary: '围绕家庭教育和儿童成长组织亲子运动会等活动。',
    image: '../data/5. 委员履职平台/12-“老爸好商量”委员工作室-发扬重视家庭教育优良传统，助力孩子健康快乐成长，举办亲子运动会.webp',
  },
  {
    match: ['有意思委员工作室'],
    category: '基层治理',
    summary: '聚焦民生座谈和小区治理问题收集，是典型的群众联系型工作室。',
    image: '../data/5. 委员履职平台/13-有意思委员工作室-工作室委员与社区居民代表召开民生座谈会，听取居民对小区提升、菜场改造、停车难等问题的意见建议.webp',
  },
  {
    match: ['侨见未来'],
    category: '基层治理',
    summary: '围绕社区纠纷和群众诉求开展专项协商，突出协商解纷能力。',
    image: '../data/5. 委员履职平台/14-侨见未来委员工作室-关于社区居民空调安装纠纷的专项协商会.webp',
  },
  {
    match: ['张瑞旭委员工作室'],
    category: '公益服务',
    summary: '通过跨代共融日等活动形成社区联结与群众参与场景。',
    image: '../data/5. 委员履职平台/15-张瑞旭委员工作室-举办委员工作室跨代共融日活动.webp',
  },
  {
    match: ['大健康委员工作室'],
    category: '健康服务',
    summary: '把健康宣教和公益义诊拉到社区一线，强化便民服务触达。',
    image: '../data/5. 委员履职平台/16-大健康委员工作室-传承国粹，践行公益，走进社区开展健康宣教义诊活动.webp',
  },
  {
    match: ['俞富康宋韵文化'],
    category: '文化润民',
    summary: '以国际艺术交流和送福活动放大宋韵文化主题辨识度。',
    image: '../data/5. 委员履职平台/17-俞富康宋韵文化委员工作室-国际艺术交流送中国“福”.webp',
  },
  {
    match: ['春泥委员工作室'],
    category: '公益服务',
    summary: '围绕节庆慰问和社会组织联动开展公益服务活动。',
    image: '../data/5. 委员履职平台/18-春泥委员工作室-两会期间迎新送福、送春联.webp',
  },
  {
    match: ['邻聚力'],
    category: '公益服务',
    summary: '围绕公益慈善与儿童成长举办主题论坛，放大社区联动效应。',
    image: '../data/5. 委员履职平台/19-“邻聚力”委员工作室-凝聚社会公益慈善之心，开展“让每个孩子像花儿一样绽放”主题论坛.webp',
  },
  {
    match: ['建和社区委员工作室'],
    category: '社区治理',
    summary: '通过走访慰问和民生服务，把党建引领与社区治理结合起来。',
    image: '../data/5. 委员履职平台/20-建和社区委员工作室-党建引领，做好点滴惠民小事，走访慰问九和人家独居老人.webp',
  },
  {
    match: ['健康九久委员工作室'],
    category: '健康服务',
    summary: '围绕健康普及座谈和社区卫生服务形成长期便民触点。',
    image: '../data/5. 委员履职平台/21-健康九久委员工作室-召开健康普及专题座谈会.webp',
  },
  {
    match: ['同心·共富'],
    category: '共富实践',
    summary: '以乡村音乐节为抓手，探索更具传播力的乡村振兴表达方式。',
    image: '../data/5. 委员履职平台/22-同心·共富委员工作室-举行“乡村音乐节”，用实用管用的好点子，助力乡村振兴.webp',
  },
  {
    match: ['茗荟聚智'],
    category: '文化润民',
    summary: '把茶韵议事与传统文化体验结合，形成轻量化协商场景。',
    image: '../data/5. 委员履职平台/23-茗荟聚智委员工作室-开展“茶韵议事”交流活动.webp',
  },
  {
    match: ['育共体', '阳光行'],
    category: '公共服务',
    summary: '通过“小小政协委员”活动连接教育实践与青少年参与。',
    image: '../data/5. 委员履职平台/24-“育共体 阳光行”委员工作室-“小小政协委员”青少年模拟政协活动.webp',
  },
  {
    match: ['乐动新声委员工作室'],
    category: '文化润民',
    summary: '以音乐与公共文化活动为切口，形成轻传播型工作室阵地。',
    image: '../data/5. 委员履职平台/25-乐动新声委员工作室-委员工作室.webp',
  },
];

const categoryRules = [
  { category: '文化润民', keywords: ['宋韵', '阅读', '文化', '非遗', '视觉', '文润', '漱玉', '乐动', '茗荟'] },
  { category: '健康服务', keywords: ['健康', '医', '卫生'] },
  { category: '公益服务', keywords: ['公益', '邻', '春泥', '老爸', '育共体', '幸福', '福利'] },
  { category: '共富实践', keywords: ['共富', '农业', '环境资源'] },
  { category: '界别履职', keywords: ['界别', '工会', '无党派'] },
  { category: '产业协商', keywords: ['科技', '智库', '商', '经济', '楼宇'] },
  { category: '社区治理', keywords: ['社区', '治理'] },
];

const defaultCategoryProfile = {
  position: '委员联系群众、基层协商和常态化履职服务',
  serviceObjects: ['辖区群众', '街道委员小组', '相关界别委员'],
  focusAreas: ['议题征集', '协商议事', '联系服务', '活动组织'],
  mechanisms: ['议题收集', '委员参与', '街道协同', '成果转化'],
  annualAgenda: ['围绕年度重点工作组织履职活动', '建立常态化联系群众机制', '沉淀典型案例与工作资料'],
};

const categoryProfiles = {
  产业协商: {
    position: '产业发展议题协商、楼宇商圈联系和创新资源对接',
    serviceObjects: ['企业主体', '商圈单位', '产业平台', '街道治理力量'],
    focusAreas: ['招商与投资议题', '科技创新调研', '楼宇商圈协商', '营商环境优化'],
    mechanisms: ['委员企业走访', '专题协商会', '产业资源链接', '跨层级联动'],
    annualAgenda: ['围绕产业发展热点形成专题议题', '联动企业和平台开展调研活动', '沉淀产业协商典型案例'],
  },
  基层治理: {
    position: '基层治理协商、群众诉求回应和社区问题协调',
    serviceObjects: ['社区居民', '业委会和物业', '街道社区干部', '辖区共建单位'],
    focusAreas: ['小区治理', '邻里关系协调', '诉求协商', '民生问题收集'],
    mechanisms: ['座谈协商', '问题清单梳理', '社区联席议事', '跟踪落实反馈'],
    annualAgenda: ['围绕高频民生问题建立协商议程', '提升群众参与和议事反馈机制', '形成可复制的基层治理案例'],
  },
  公共服务: {
    position: '公共服务供给、家庭教育支持和青少年参与实践',
    serviceObjects: ['家庭与青少年', '社区居民', '社会组织', '公共文化空间'],
    focusAreas: ['亲子活动', '教育实践', '社区服务', '公共活动策划'],
    mechanisms: ['活动组织', '校社联动', '公益协作', '委员带动参与'],
    annualAgenda: ['持续开展主题公共服务活动', '拓展青少年和家庭参与场景', '优化街道公共服务联动能力'],
  },
  公益服务: {
    position: '公益慈善、社区关爱和社会组织协同服务',
    serviceObjects: ['老年群体', '儿童家庭', '特殊群体', '公益组织'],
    focusAreas: ['公益活动', '慈善议题', '困难群体关爱', '社区陪伴服务'],
    mechanisms: ['公益共建', '社会组织联动', '走访慰问', '主题论坛'],
    annualAgenda: ['打造常态化公益品牌活动', '增强社会组织协同能力', '持续提升群众可感知度'],
  },
  健康服务: {
    position: '健康科普、社区义诊和卫生服务协同',
    serviceObjects: ['社区居民', '重点人群', '医疗服务机构', '健康志愿队伍'],
    focusAreas: ['健康宣教', '义诊服务', '疾病预防', '社区卫生共建'],
    mechanisms: ['专题座谈', '社区义诊', '健康咨询', '医社协同'],
    annualAgenda: ['围绕重点健康议题开展服务', '形成社区卫生服务协同机制', '沉淀健康服务案例资料'],
  },
  文化润民: {
    position: '宋韵文化传播、阅读推广和公共文化浸润',
    serviceObjects: ['社区居民', '学校与青少年', '文化场馆', '阅读空间'],
    focusAreas: ['宋韵文化', '阅读推广', '非遗体验', '美学活动'],
    mechanisms: ['文化活动组织', '场馆共建', '委员讲堂', '文化品牌联动'],
    annualAgenda: ['持续打造文化品牌活动', '推动阅读空间与街道资源联动', '形成可传播的文化履职成果'],
  },
  界别履职: {
    position: '界别群众联系、行业议题协商和专题活动组织',
    serviceObjects: ['界别群众', '行业机构', '相关委员群体', '街道协同单位'],
    focusAreas: ['界别走访', '行业议题', '专题讲堂', '群众联系'],
    mechanisms: ['界别活动组织', '行业资源链接', '协商座谈', '委员联合履职'],
    annualAgenda: ['建立界别联系群众常态机制', '围绕行业议题形成协商清单', '沉淀界别特色履职案例'],
  },
  社区治理: {
    position: '社区治理协同、居民服务和基层问题发现处置',
    serviceObjects: ['社区居民', '社区工作者', '物业和共建单位'],
    focusAreas: ['社区议事', '走访慰问', '党建引领', '群众服务'],
    mechanisms: ['社区协商', '民情走访', '志愿服务', '共建联动'],
    annualAgenda: ['聚焦社区高频问题形成议题清单', '提升居民参与和反馈效率', '强化基层治理阵地辨识度'],
  },
  共富实践: {
    position: '共同富裕实践、乡村振兴和资源共建共享',
    serviceObjects: ['乡村社区', '基层群众', '共富项目参与方', '文化活动组织者'],
    focusAreas: ['乡村振兴', '共富活动', '文化带动', '资源整合'],
    mechanisms: ['项目联动', '活动共建', '品牌传播', '政协建言'],
    annualAgenda: ['围绕共富主题形成年度活动计划', '联动乡村与社区资源开展实践', '沉淀具有传播度的典型案例'],
  },
  基层履职: {
    position: '街道委员小组协同履职、群众联系和民生议题跟进',
    serviceObjects: ['街道群众', '委员工作室', '辖区单位'],
    focusAreas: ['议题收集', '民生协商', '走访调研', '联系服务'],
    mechanisms: ['小组协作', '委员联动', '活动组织', '街道共建'],
    annualAgenda: ['形成街道履职活动清单', '持续收集群众需求', '沉淀街道履职工作案例'],
  },
  协同履职: {
    position: '跨街道、多点位和多主体协同履职服务',
    serviceObjects: ['群众代表', '协同单位', '委员队伍'],
    focusAreas: ['资源联动', '主题活动', '阵地共建', '履职统筹'],
    mechanisms: ['跨点位协作', '活动统筹', '资料整合', '成果展示'],
    annualAgenda: ['增强多点位协同履职能力', '建立主题活动排期机制', '形成跨区域经验总结'],
  },
};

let platformCache;

export function normalizePath(value) {
  if (value.startsWith('#') || /^[a-z]+:/i.test(value)) {
    return value;
  }

  try {
    return encodeURI(decodeURI(value));
  } catch {
    return encodeURI(value);
  }
}

export function toStudioHref(id) {
  return `./studio.html?id=${encodeURIComponent(id)}`;
}

export function toStreetHref(name) {
  return `./street.html?name=${encodeURIComponent(name)}`;
}

function includesAll(value, keywords) {
  return keywords.every((keyword) => value.includes(keyword));
}

function inferStreet(studio) {
  const source = `${studio.name} ${studio.address}`;

  for (const street of streetGroups) {
    if (street.keywords.some((keyword) => source.includes(keyword))) {
      return street.name;
    }
  }

  return '跨街道协同';
}

function inferCategory(studio) {
  const source = `${studio.name} ${studio.address}`;

  for (const rule of categoryRules) {
    if (rule.keywords.some((keyword) => source.includes(keyword))) {
      return rule.category;
    }
  }

  if (studio.name.startsWith('政协')) {
    return '基层履职';
  }

  return '协同履职';
}

function getStudioMedia(studio) {
  const source = `${studio.name} ${studio.address}`;
  return studioMediaMap.find((item) => includesAll(source, item.match)) || null;
}

function buildGenericSummary(studio, street, category) {
  if (street === '跨街道协同') {
    return `${studio.name}面向平台协同和多点位联系群众场景运行，当前归入${category}类履职单元。`;
  }

  return `${studio.name}位于${street}，当前归入${category}类履职单元，适合继续补充活动案例、服务对象和年度计划信息。`;
}

function enrichStudio(studio) {
  const media = getStudioMedia(studio);
  const street = inferStreet(studio);
  const category = media?.category || inferCategory(studio);
  const summary = media?.summary || buildGenericSummary(studio, street, category);

  return {
    ...studio,
    street,
    category,
    summary,
    image: media?.image || null,
    href: toStudioHref(studio.id),
  };
}

export async function loadPlatformData() {
  if (platformCache) {
    return platformCache;
  }

  const response = await fetch(normalizePath(platformDataPath));

  if (!response.ok) {
    throw new Error(`Failed to load platform data: ${response.status}`);
  }

  const data = await response.json();
  platformCache = {
    ...data,
    studios: data.studios.map(enrichStudio),
  };

  return platformCache;
}

export function getFeaturedStudios(studios) {
  const featuredIds = [1, 6, 9, 10, 21, 26, 28, 33];
  const studioMap = new Map(studios.map((studio) => [studio.id, studio]));
  return featuredIds.map((id) => studioMap.get(id)).filter(Boolean);
}

export function getFeaturedPractices(limit = 6) {
  return practiceCases.slice(0, limit);
}

export function getStreetByName(name) {
  return streetGroups.find((street) => street.name === name) || null;
}

export function getStreetByStudio(studio) {
  return getStreetByName(studio.street);
}

export function getStudiosByStreet(studios, streetName) {
  return studios.filter((studio) => studio.street === streetName);
}

export function getStudioById(studios, id) {
  return studios.find((studio) => String(studio.id) === String(id)) || null;
}

export function getPracticeByStreet(streetName) {
  return practiceCases.filter((item) => item.streets.includes(streetName));
}

export function getRelatedStudios(studios, currentStudio, limit = 3) {
  return studios
    .filter(
      (studio) =>
        studio.id !== currentStudio.id &&
        (studio.street === currentStudio.street || studio.category === currentStudio.category),
    )
    .slice(0, limit);
}

export function getStreetStats(studios, streetName) {
  return {
    studioCount: getStudiosByStreet(studios, streetName).length,
    practiceCount: getPracticeByStreet(streetName).length,
  };
}

export function getStudioResources(studio) {
  const resources = [
    docs[0],
    docs[1],
    docs[2],
  ];

  if (studio.category === '界别履职') {
    resources.push({
      type: 'DOCX',
      title: '界别基本情况',
      summary: '补充界别工作背景、活动照片和界别介绍信息。',
      href: '../data/3. 界别基本情况/1.各界别情况介绍.docx',
      tags: ['界别', '资料'],
    });
  }

  return resources;
}

export function getStreetResources() {
  return [
    docs[2],
    docs[4],
    docs[6],
  ];
}

export function getHomeSearchCount(studios) {
  return (
    streetGroups.length +
    getFeaturedStudios(studios).length +
    sectors.length +
    getFeaturedPractices().length +
    docs.length
  );
}

function uniqueBy(items, pickKey) {
  const seen = new Set();
  const output = [];

  for (const item of items) {
    const key = pickKey(item);

    if (!key || seen.has(key)) {
      continue;
    }

    seen.add(key);
    output.push(item);
  }

  return output;
}

function toGalleryItem(image, eyebrow, title, summary) {
  return {
    image,
    eyebrow,
    title,
    summary,
  };
}

export function getCategoryProfile(category) {
  return categoryProfiles[category] || defaultCategoryProfile;
}

function getTopStreetThemes(streetStudios) {
  const counts = new Map();

  for (const studio of streetStudios) {
    counts.set(studio.category, (counts.get(studio.category) || 0) + 1);
  }

  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, 3)
    .map(([category]) => category);
}

export function getStudioGallery(studios, studio, limit = 4) {
  const practiceItems = getPracticeByStreet(studio.street);
  const relatedStudios = getRelatedStudios(studios, studio, 6).filter((item) => Boolean(item.image));
  const galleryItems = [];

  if (studio.image) {
    galleryItems.push(
      toGalleryItem(studio.image, studio.category, studio.name, studio.summary),
    );
  }

  for (const item of practiceItems) {
    galleryItems.push(
      toGalleryItem(
        item.image,
        item.area,
        item.title,
        `${studio.street}相关协商实践场景，体现工作室所在街道的履职氛围与议题承接能力。`,
      ),
    );
  }

  for (const item of relatedStudios) {
    galleryItems.push(
      toGalleryItem(
        item.image,
        item.category,
        item.name,
        `同主题或同街道阵地联动场景，可作为${studio.name}的协同展示补充。`,
      ),
    );
  }

  return uniqueBy(galleryItems, (item) => item.image).slice(0, limit);
}

export function getStreetGallery(studios, streetName, limit = 5) {
  const practiceItems = getPracticeByStreet(streetName);
  const allStreetStudios = getStudiosByStreet(studios, streetName);
  const streetStudios = allStreetStudios.filter((studio) => Boolean(studio.image));
  const topThemes = getTopStreetThemes(allStreetStudios);
  const galleryItems = [];

  for (const item of practiceItems) {
    galleryItems.push(
      toGalleryItem(
        item.image,
        item.area,
        item.title,
        item.summary,
      ),
    );
  }

  for (const studio of streetStudios) {
    galleryItems.push(
      toGalleryItem(
        studio.image,
        studio.category,
        studio.name,
        `街道关联工作室活动场景，展示${streetName}阵地覆盖和履职触点。`,
      ),
    );
  }

  if (galleryItems.length < limit) {
    const fallbackStudios = studios.filter(
      (studio) =>
        studio.image &&
        studio.street !== streetName &&
        topThemes.includes(studio.category),
    );

    for (const studio of fallbackStudios) {
      galleryItems.push(
        toGalleryItem(
          studio.image,
          `${studio.category}联动`,
          studio.name,
          `用于补充${streetName}在${studio.category}主题上的参考场景，体现街道与同主题阵地之间的协同关系。`,
        ),
      );
    }
  }

  return uniqueBy(galleryItems, (item) => item.image).slice(0, limit);
}

export function getStudioNarrative(studios, studio) {
  const profile = getCategoryProfile(studio.category);
  const street = getStreetByStudio(studio);
  const practiceItems = street ? getPracticeByStreet(street.name) : [];
  const gallery = getStudioGallery(studios, studio);
  const focusTitle = practiceItems[0]?.title || `${studio.category}主题履职`;

  return {
    headline: `${studio.name}立足${studio.street === '跨街道协同' ? '平台协同' : studio.street}，持续推进${profile.position}。`,
    lead:
      `${studio.name}是${siteMeta.district}政协向基层延伸覆盖的重要履职阵地，依托委员专业优势和辖区资源，围绕${profile.position}开展常态化联系群众、议题协商和主题活动。`,
    overview: [
      `${studio.name}坚持党建引领和协商为民导向，注重把委员履职同街道治理、界别联系和群众服务结合起来，形成“阵地承接、活动带动、协商赋能”的工作模式。`,
      street
        ? `依托${street.name}的街区资源、公共空间和协商场景，工作室围绕${profile.focusAreas.slice(0, 3).join('、')}等方向组织履职活动，在服务群众、凝聚共识和推动议题落地方面形成稳定节奏。`
        : `工作室当前以多点位协同方式开展履职服务，适合承接跨街道、跨界别和跨阵地的联动活动，在资源统筹和主题协作方面具有延展空间。`,
    ],
    focusCards: [
      {
        title: '履职定位',
        body: `围绕${profile.position}，把委员专业优势转化为履职项目、协商议题和群众服务内容。`,
      },
      {
        title: '服务对象',
        body: profile.serviceObjects.join('、'),
      },
      {
        title: '重点方向',
        body: `${profile.focusAreas.slice(0, 4).join('、')}。`,
      },
      {
        title: '协同机制',
        body: `${profile.mechanisms.slice(0, 4).join('、')}，联动街道、界别和辖区单位共同推进。`,
      },
    ],
    serviceObjects: profile.serviceObjects,
    focusAreas: profile.focusAreas,
    annualAgenda: profile.annualAgenda,
    gallery,
    galleryTitle: focusTitle,
  };
}

export function getStreetNarrative(studios, street) {
  const streetStudios = getStudiosByStreet(studios, street.name);
  const practiceItems = getPracticeByStreet(street.name);
  const topThemes = getTopStreetThemes(streetStudios);
  const gallery = getStreetGallery(studios, street.name);
  const serviceObjects = uniqueBy(
    streetStudios.flatMap((studio) => getCategoryProfile(studio.category).serviceObjects),
    (item) => item,
  ).slice(0, 5);

  return {
    headline: `${street.name}委员小组围绕${topThemes.length ? topThemes.join('、') : street.tags.join('、')}形成街道履职矩阵。`,
    lead:
      `${street.name}委员小组是${siteMeta.district}政协联系基层、延伸协商履职的重要街道入口，依托街道阵地和辖区资源，统筹工作室布局、协商议题和群众联系工作。`,
    overview: [
      `${street.summary} 街道页面以“街道统筹、工作室承接、案例展示、资料归集”为主线，体现街道委员小组的组织牵引和协同整合作用。`,
      streetStudios.length
        ? `当前${street.name}已关联${streetStudios.length}家委员工作室，覆盖${topThemes.length ? topThemes.join('、') : street.tags.join('、')}等主题方向；结合${practiceItems.length}个相关协商案例，能够较完整展现街道履职矩阵的基本面貌。`
        : `${street.name}当前以街道委员小组为主要承接单元，后续可继续补充工作室布局、年度重点议题和协商活动纪要。`,
    ],
    focusCards: [
      {
        title: '阵地定位',
        body: street.summary,
      },
      {
        title: '履职主题',
        body: topThemes.length ? topThemes.join('、') : street.tags.join('、'),
      },
      {
        title: '协同机制',
        body: '街道委员小组统筹议题征集、活动组织和阵地联动，协同工作室、界别委员和辖区单位形成履职闭环。',
      },
      {
        title: '服务对象',
        body: serviceObjects.length ? serviceObjects.join('、') : '辖区群众、社区单位、街道协同力量',
      },
    ],
    annualAgenda: [
      `围绕${topThemes[0] || street.tags[0]}组织年度重点履职活动。`,
      '联动委员工作室和民生议事堂计划，形成议题排期和案例沉淀。',
      '推动群众联系、协商议事和资料归档协同推进。',
    ],
    gallery,
    topThemes,
    serviceObjects,
  };
}
