export interface Formation {
  id: string;
  title: string;
  subtitle: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter' | 'climax';
  description: string;
  militaryMeaning: string;
  culturalMeaning: string;
  image: string;
  keyPoints: string[];
}

export const formations: Formation[] = [
  // Spring
  {
    id: 'spring-1',
    title: '进门阵',
    subtitle: '鱼贯而入，神龙见首',
    season: 'spring',
    description: '众鱼按顺序鱼贯而入，步伐轻盈，模拟春水初生时鱼儿的欢快。',
    militaryMeaning: '行军队列，井然有序。',
    culturalMeaning: '象征万物复苏，生机勃勃。',
    image: '/images/entry_formation_generated.webp',
    keyPoints: ['步伐轻盈', '队形整齐', '神龙见首不见尾']
  },
  {
    id: 'spring-2',
    title: '春鱼戏水',
    subtitle: '泛游碧波，自由自在',
    season: 'spring',
    description: '表现鱼儿在春水中嬉戏玩耍，忽上忽下，忽聚忽散。',
    militaryMeaning: '游击战术，灵活多变。',
    culturalMeaning: '体现道家逍遥自在的生活哲学。',
    image: '/images/spring_fish_generated.webp',
    keyPoints: ['忽上忽下', '灵活多变', '嬉戏玩耍']
  },
  // Summer
  {
    id: 'summer-1',
    title: '夏鱼跳滩',
    subtitle: '激流勇进，力争上游',
    season: 'summer',
    description: '模拟夏日洪水暴涨，鱼儿逆流而上，跳跃险滩的场景。',
    militaryMeaning: '强攻险要，勇往直前。',
    culturalMeaning: '象征不畏艰难，拼搏进取的精神。',
    image: '/images/summer_fish_generated.webp',
    keyPoints: ['逆流而上', '跳跃险滩', '勇往直前']
  },
  {
    id: 'summer-2',
    title: '四面八方阵',
    subtitle: '眼观六路，耳听八方',
    season: 'summer',
    description: '众鱼向四面八方散开，又迅速聚拢，形成严密的防御或攻击态势。',
    militaryMeaning: '全方位防御，无死角监控。',
    culturalMeaning: '寓意行事周全，面面俱到。',
    image: '/images/eight_directions_generated.webp',
    keyPoints: ['四散聚拢', '严密防御', '面面俱到']
  },
  // Autumn
  {
    id: 'autumn-1',
    title: '秋鱼显籽',
    subtitle: '金秋丰收，人丁兴旺',
    season: 'autumn',
    description: '众鱼侧身"泛白"蛰伏，虾豚作侦察兵偷偷摸摸探珠。',
    militaryMeaning: '侦察与反侦察，诱敌深入。',
    culturalMeaning: '祈愿五谷丰登，子孙满堂。',
    image: '/images/autumn_fish_generated.webp',
    keyPoints: ['侧身泛白', '虾豚探珠', '五谷丰登']
  },
  {
    id: 'autumn-2',
    title: '鲤鱼抢珠',
    subtitle: '民族自强，奋力拼搏',
    season: 'autumn',
    description: '四鱼头向中心红珠靠近，做碰珠抢珠动作，气势激烈。',
    militaryMeaning: '争夺战略要点，寸土必争。',
    culturalMeaning: '只有努力拼搏，民族才能强大。',
    image: '/images/snatching_pearl_generated.webp',
    keyPoints: ['四鱼抢珠', '气势激烈', '寸土必争']
  },
  // Winter
  {
    id: 'winter-1',
    title: '冬鱼结龙',
    subtitle: '抱团御寒，众志成城',
    season: 'winter',
    description: '源自"十面埋伏阵"，形似稻桶由外向内盘旋，众鱼紧紧依靠。',
    militaryMeaning: '收缩防线，集中兵力，瓮中捉鳖。',
    culturalMeaning: '象征团结一心，共御外敌。',
    image: '/images/winter_fish_generated.webp',
    keyPoints: ['盘旋向内', '抱团御寒', '团结一心']
  },
  // Climax
  {
    id: 'climax-1',
    title: '跳龙门',
    subtitle: '一跃化龙，光耀门楣',
    season: 'climax',
    description: '全舞高潮，象征鲤鱼逆流而上、挑战极限，最终化身为龙。',
    militaryMeaning: '决战时刻，毕其功于一役。',
    culturalMeaning: '激励族人发奋图强，改变命运。',
    image: '/images/leaping_dragon_gate_generated.webp',
    keyPoints: ['逆流而上', '化身为龙', '发奋图强']
  }
];

export const seasons = [
  {
    id: 'spring',
    name: '春',
    title: '春鱼戏水',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: '万物复苏，鱼儿在春水中自由嬉戏，展现生命的灵动。'
  },
  {
    id: 'summer',
    name: '夏',
    title: '夏鱼跳滩',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: '夏日激流，鱼儿逆流而上，展现拼搏的力量。'
  },
  {
    id: 'autumn',
    name: '秋',
    title: '秋鱼显籽',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    description: '金秋丰收，鱼儿繁衍后代，寓意人丁兴旺。'
  },
  {
    id: 'winter',
    name: '冬',
    title: '冬鱼结龙',
    color: 'text-blue-800',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: '寒冬来临，鱼儿抱团御寒，象征团结与坚韧。'
  },
  {
    id: 'climax',
    name: '跃',
    title: '鲤鱼跳龙门',
    color: 'text-primary',
    bgColor: 'bg-red-50',
    borderColor: 'border-primary/30',
    description: '生命升华，化鱼为龙，寄托发奋图强的愿望。'
  }
];
