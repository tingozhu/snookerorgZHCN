// ==UserScript==
// @name          snookerorgmenu
// @version          20220503
// @description  中文化snooker.org的部分内容
// @author       Nan Zhu
// @include      http://www.snooker.org*
// @namespace
// ==/UserScript==

var replaceArry = [
//Current
	[/Coverage of the Betfred World Championship/gi,          '世界锦标赛数据直播'],
	[/Updated ranking lists/gi,          '最新官方排名'],
	[/Find out who scored a tournament break of 151, and lots more./gi,          '看看谁打出过单杆151。'],
	[/List of former champions in the major events./gi,          '过往重大比赛的冠军。'],
	[/Hall of Fame/gi,          '斯诺克名人堂'],
	[/Crucible Contest/gi,          '克鲁斯堡预测活动'],
	[/The annual competition where you can guess the winners of every match in the World Championship./gi,          '一年一度，预测每场比赛的赢家。'],
	[/A collection of all the world championship stuff on the site./gi,          '关于世界锦标赛的一切。'],
//MainPage
    [/Results, rankings and stats for the current season./gi,          '本赛季的比赛结果、世界排名及数据。'],
    [/What's New/gi,            '网站更新说明'],
    [/A chronological list of new additions./gi,            '按时间顺序介绍本站更新内容。'],
    [/Two-year rolling rankings./gi,          '两年滚动排名。'],
	[/List of events in the 2021\/2022 season. /gi,    '2021/2022赛季比赛日程。'],
    [/\(Main Tour, Challenge Tour, Women, Seniors\)./gi,    '包括职业赛、挑战赛、女子赛、元老赛。'],
    [/Previous winners/gi,          '往届冠军'],
    [/SCORES & Results/gi,            '比分和结果'],
    [/Live scores/gi,          '比分直播'],
    [/Upcoming matches/gi,    '即将开始的比赛'],
    [/Latest Results/gi,            '最新比赛结果'],
	[/World Grand Prix Rankings/gi,            '世界大奖赛赛前排名'],
	[/Players Ch.ship Rankings/gi,            '球员锦标赛赛前排名'],
	[/Tour Ch.ship Rankings/gi,            '巡回锦标赛赛前排名'],
	[/Crucible Rankings/gi,            '世界锦标赛赛前排名'],
	[/Q Tour Rankings/gi,            'Q Tour排名'],
	[/Score Centre/gi,            '数据中心'],
	[/World Records/gi,            '世界纪录'],
	[/PROVISIONAL RANKING LISTS/gi,            '临时排名'],
	[/RANKING LISTS/gi,         '官方排名'],
	[/Prov Rankings/gi,            '临时世界排名'],
	[/Prov seedings/gi,    '临时种子排序'],
    [/Prov Season Points \(1-yr\)/gi,          '临时单赛季积分排名'],
    [/Prov season-end rankings/gi,            '临时赛季末世界排名'],
	[/Order of Play \(by session\)/gi,          '多阶段比赛安排'],
    [/Order of play/gi,          '多阶段比赛安排'],
    [/Draw/gi,            '签表'],
	[/Season Points \(1-yr\)/gi,            '单赛季积分'],
	[/Brackets/gi,    '对阵图'],
    [/Competitors/gi,          '参赛球员'],
    [/Provisional rankings/gi,            '临时世界排名'],
	[/Provisional seedings/gi,    '临时种子排序'],
    [/Provisional season points/gi,          '临时单赛季积分排名'],
	[/\(one-year\)/gi,         '（一年）'],
    [/Provisional end-of-season rankings/gi,            '临时赛季末世界排名'],
	[/season points/gi,            '单赛季排名'],
    [/Main Tour Players/gi,            '职业球员'],
	[/All Players/gi,            '所有球员'],
	[/Head to Head/gi,            '交手记录'],
	[/Match Stats/gi,            '比赛数据'],
	[/PLAYERS/g,            '球员'],
    [/Rankings/gi,    '排名'],
    [/Calendars/gi,            '日程表'],
    [/Calendar/gi,            '日程表'],
	[/The World Championship Page/gi,            '世界锦标赛专页'],
	[/The World Championship/gi,            '世界锦标赛'],
	[/World Championship/gi,            '世界锦标赛'],
	[/Ranking History/gi,            '世界排名历史记录'],
	[/Historic Seedings/gi,            '种子排序历史记录'],
	[/Archives/gi,            '存档'],
	[/Seedings/gi,            '种子'],
	[/Seedings/gi,            '种子'],
//Livescores
	[/Scores from ongoing and recently finished matches/gi,            '正在进行和刚刚结束的比赛'],
	[/Last updated scores in bold./gi,            '最新的比分以粗体显示。'],
	[/All times in CEST./gi,            '时间为欧洲中部夏令时间（+6小时=北京时间）。'],
	[/All times in CET./gi,            '时间为欧洲中部时间（+7小时=北京时间）。'],
	[/See also/gi, '另见'],
	[/earlier results/g,            '之前的比赛结果'],
//results	
	[/ordered by time registered \(CEST\)./g,            '按完赛时间排序（欧洲中部夏令时间）'],
	[/ordered by time registered \(CET\)./g,            '按完赛时间排序（欧洲中部时间）'],
//upcoming
	[/ordered by scheduled time \(CEST\)./g,            '按开赛时间排序（欧洲中部夏令时间）'],
	[/ordered by scheduled time \(CET\)./g,            '按开赛时间排序（欧洲中部时间）'],
//one word list
    [/Results/gi,            '比赛结果'],
	[/Finals/g,            '已结束的比赛'],
	[/Final/g,            '决赛'],
	[/SF/g,            '半决赛'],
	[/QF/g,            '1/4决赛'],
	[/Today/g,            '今天'],
	[/Live/g,            '比分直播'],
	[/Upcoming/g,            '即将开始'],
	[/Diary/g,            '日程表'],
	[/H2H/g,            '交手'],
	[/Home/g,            '首页'],
	[/Tournaments/g,            '赛事'],
	[/SCHEDULES/gi,            '比赛日程'],
	[/SCHEDULE/gi,            '比赛日程'],
//revertsomething
	[/\) in /gi,            '\) '],    // etc.
	[/\). /gi,            '\) '], 
	[/\)./gi,            '\) '], 
    [/snooker比赛结果/gi,            'snookerresults'],
	[/\(final\)/gi,     '最终结果'],
];

var numTerms    = replaceArry.length;
var txtWalker   = document.createTreeWalker (
    document.body,
    NodeFilter.SHOW_TEXT,
    {   acceptNode: function (node) {
            //-- Skip whitespace-only nodes
            if (node.nodeValue.trim() )
                return NodeFilter.FILTER_ACCEPT;

            return NodeFilter.FILTER_SKIP;
        }
    },
    false
);
var txtNode     = null;

while (txtNode  = txtWalker.nextNode () ) {
    var oldTxt  = txtNode.nodeValue;

    for (var J  = 0;  J < numTerms;  J++) {
        oldTxt  = oldTxt.replace (replaceArry[J][0], replaceArry[J][1]);
    }
    txtNode.nodeValue = oldTxt;
}

document.body.innerHTML = document.body.innerHTML.replaceAll('<a href="/res/index.asp?template=24">upcoming&nbsp;matches</a>', '<a href="/res/index.asp?template=24">即将开始的比赛</a>');
document.body.innerHTML = document.body.innerHTML.replaceAll('Q&nbsp;', '资格赛');
document.body.innerHTML = document.body.innerHTML.replaceAll('Rd&nbsp;1', '第1轮');
document.body.innerHTML = document.body.innerHTML.replaceAll('Rd&nbsp;2', '第2轮');
document.body.innerHTML = document.body.innerHTML.replaceAll('Rd&nbsp;3', '第3轮');
document.body.innerHTML = document.body.innerHTML.replaceAll('Rd&nbsp;4', '第4轮');
document.body.innerHTML = document.body.innerHTML.replaceAll('Rd&nbsp;5', '第5轮');
