// ====================================
// 				^GLOBALS
// ====================================
// ====================================
// 				^SCREEN CONTROL
// ====================================
//changes to targeted screen
//callback object: {before:<callback before fadein begins>, after: <callback after faded in>}
function changeScreen(e,t){
//manage current and last screen variables
$lastScreen=$currentScreen;var i=$(".screen:not(."+($currentScreen=e)+")"),a=i.length;i.fadeOut($globalFadeTime,function(){0<--a||(t&&t.before&&t.before(),$("."+e).fadeIn($globalFadeTime,function(){t&&t.after&&t.after()}))})}
//generic link type to change between screens
//reset topic nav textbox value and list items
function resetTopicNav(){$("#topicNav-search").val(""),$("#topicNav li").show().removeClass("even"),$("#topicNav li:even").addClass("even"),$("#topicNav .icon-wrapper .icon").hide(),$("#topicNav .mdi-search").show(),$(".topicNav-bookmarks-btn").removeClass("filter-selected"),$("#topicNav-search").removeAttr("disabled")}
// ====================================
// 				^BOOKMARKS
// ====================================
//bookmark filter{
var $globalFadeTime=700,$currentScreen="screen-home",$data;
// ====================================
// 				^UTILITIES
// ====================================
//randomize jquery object children
$.fn.randomize=function(e){return(e?this.find(e):this).parent().each(function(){$(this).children(e).sort(function(){return Math.random()-.5}).detach().appendTo(this)}),this},$("[data-to]").on("click",function(){return changeScreen($(this).attr("data-to")),!1}),
// ====================================
// 				^TOPIC NAV
// ====================================
//topic search/filter
$("#topicNav-search").keyup(function(){""!=$("#topicNav-search").val()?($("#topicNav li").hide(),
//$('#topicNav li a span').css('display','block');
$('#topicNav li a:containsIN("'+$(this).val()+'")').parent().show(),$("#topicNav-search-clear").show().siblings(".icon").hide(),$("#topicNav li:visible:even").addClass("even"),$("#topicNav li:visible:odd").removeClass("even")):($("#topicNav li").show(),
//$('#topicNav li a span').css('display','none');
$("#topicNav-search-clear").hide().siblings(".icon").show(),resetTopicNav())}),
//maintain clicks to search wrapper
$(".topicNav-search-wrapper").click(function(e){var t;
//if click to search clear button, clear search box
$(e.target).is("#topicNav-search-clear")&&(resetTopicNav(),$("#topicNav-search-clear").hide().siblings(".icon").show()),e.stopPropagation()}),$(".topicNav-bookmarks-btn").click(function(){return $(this).toggleClass("filter-selected"),$(this).hasClass("filter-selected")?($("#topicNav-search").attr("disabled","disabled"),$("#topicNav li").hide(),$("#topicNav li a.bookmarked").parent().show()):($("#topicNav-search").removeAttr("disabled"),$("#topicNav li").show()),!1}),
// ====================================
// 				^EVENTS
// ====================================
$(document).ready(function(){
//implement fastclick
FastClick.attach(document.body),resetTopicNav(),
//$('#disclaimerModal').modal({backdrop: 'static'});
//zendesk if online
$(".feedback").click(function(){return alert("An internet connection is required to submit feedback, please connect your device to the internet and restart the application to submit feedback"),!1}),zE&&zE(function(){zE.hide(),$(".feedback").off("click").click(function(){return zE.activate({hideOnClose:!0}),!1})}),
//topicNav button
$(".topicNav-button").click(function(){return $(".topicNav-wrapper, .shroud").toggle(),resetTopicNav(),!1}),
//figure zoom
$("body").on("click","figure:not(.video):not(.equation)",function(){$("#figureModal .modal-title").text($(this).find("figcaption").text()),$("#figureModal .modal-body").empty();var e=$(this);if($(this).attr("data-frames")){var t=$(this).attr("data-frames")?$(this).attr("data-frames").split(","):null;$.each(t,function(){$("#figureModal .modal-body").append($('<img src="media/'+e.attr("data-id")+this+'.jpg">'))})}else $("#figureModal .modal-body").append($(this).find("img").clone());$("#figureModal").modal()}),
//clicks to window clear nav dropdowns
$(window).click(function(){$("#sectionNav, .topicNav-wrapper").hide(),$(".shroud").hide(),resetTopicNav()}),
// ===========================================
//            SEARCH
// ===========================================
//search highlight
$("body").on("keyup","#search",function(){var e=$(this).val(),t=$(this);0<e.length?($(".portal").unhighlight().highlight(e),t.siblings(".icon").hide().siblings("#search-clear").show(),$("#search-count").text("Found "+$(".portal .highlight").length),$(window).scrollTop($(".highlight").first().offset().top-230)):($(".portal").unhighlight(),$("#search-count").text(""),t.siblings("#search-clear").hide().siblings(".icon").show(),$("#search-count").text(""))}),
//clear search
$("#search-clear").click(function(){$("#search").val("").trigger("keyup")}),$("body").on("click",".quiz-answer",function(){return!1})}),$(window).scroll(function(){var e;204<$(window).scrollTop()?$(".utility-menu").addClass("scroll-sticky"):$(".utility-menu").removeClass("scroll-sticky")});