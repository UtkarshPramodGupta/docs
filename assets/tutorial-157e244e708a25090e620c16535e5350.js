$(document).ready(function(){function e(e){$(".lang-control").each(function(){var t=$(this),n=t.find('a[data-language="'+e+'"]');if(n.length>0){var r=t.parent();t.find("a").removeClass("selected"),n.addClass("selected"),r.find("div.terminal-wrap").each(function(){var t=$(this),n=t.data("action"),r=t.find("div.terminal");r.html(jQuery.trim(APIValues[e][n])),Highlighter.highlight(r)})}})}$(".lang-control a").click(function(){var t=$(this),n=$(window).scrollTop(),r=t.offset().top;e(t.attr("data-language"));var i=t.offset().top-r;return $(window).scrollTop(n+i),!1}),$(".lang-control a").each(function(){var e=$(this);e.attr("data-language")||e.attr("data-language",e.text())}),$(".lang-control a:first-child").each(function(){e($(this).attr("data-language"))})});