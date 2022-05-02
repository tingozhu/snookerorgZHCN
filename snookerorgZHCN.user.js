// ==UserScript==
// @name          snooker.org中文界面
// @version        0.1
// @description  To Be Filled
// @author       tingozhu
// @include      http://www.snooker.org*
// @namespace
// ==/UserScript==

var replaceArry = [
    [/Ronnie O'Sullivan/gi,    '罗尼·奥沙利文'],
    [/Live scores/gi,          '比分直播'],
    [/Results/gi,            '比赛结果'],、
    [/Upcoming matches/gi,    '即将开始的比赛'],
    [/Order of play/gi,          '多阶段比赛安排'],
    [/Draw/gi,            '签表'],
	  [/Brackets/gi,    '对阵图'],
    [/Competitors/gi,          '参与球员'],
    [/Provisional rankings/gi,            '临时世界排名'],
	  [/Provisional seedings/gi,    '临时种子签位'],
    [/Provisional season points/gi,          '临时单赛季积分排名'],
    [/Provisional end-of-season rankings/gi,            '临时赛季末世界排名'],
    // etc.
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
