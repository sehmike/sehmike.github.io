$(window).scroll((function(){var o=$(window),t=$("body"),n=$(".panel"),i=o.scrollTop()+o.height()/1.2;n.each((function(){var o=$(this);o.position().top<=i&&o.position().top+o.height()>i&&(t.removeClass((function(o,t){return(t.match(/(^|\s)color-\S+/g)||[]).join(" ")})),t.addClass("color-"+$(this).data("color")))}))})).scroll(),$(".content__article__link").each((function(){$(this).html();$(this).contents().wrap('<a href="https://yeezy.com/"></a>')}));