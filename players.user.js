// ==UserScript==
// @name         球员信息
// @version          20220503
// @description  中文化球员信息
// @author       Nan Zhu
// @include      http://www.snooker.org*
// @namespace
// ==/UserScript==

document.body.innerHTML = document.body.innerHTML.replaceAll('src="/res/scorekeeper/gfx/flags/icondrawer/16/Taiwan.png"', 'src="https://sports3.gtimg.com/kokyooly/noc/31.png" height=12');
document.body.innerHTML = document.body.innerHTML.replaceAll("Taiwan", "中华台北");

var tb=document.getElementsByTagName("img");
	var n;
	for (n=0;n<tb.length;n++){
		if  (tb[n].alt=="Jamaica"){
			tb[n].title="牙买加";
		}
		if  (tb[n].alt=="England"){
			tb[n].title="英格兰";
		}
		if  (tb[n].alt=="Wales"){
			tb[n].title="威尔士";
		}
		if  (tb[n].alt=="Scotland"){
			tb[n].title="苏格兰";
		}
		if  (tb[n].alt=="China"){
			tb[n].title="中国";
		}
	}

var replaceArry = [
    [/Ronnie O'Sullivan/gi,    '罗尼·奥沙利文'],
	[/Judd Trump/gi,    '贾德·特朗普'],
	[/Mark J Williams/gi,    '马克·威廉姆斯'],
	[/John Higgins/gi,    '约翰·希金斯'],
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

