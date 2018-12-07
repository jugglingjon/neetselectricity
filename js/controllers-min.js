app.controller("chapterController",function(s,e,t){
//reports current % correct	
function r(){console.log(s.chapters[s.chapterID].correctPercent)}
//save data to localstorage
function n(){var e=0;
//see if answer is correct
for(var t in s.chapters[s.chapterID].answered){var a=s.chapters[s.chapterID].answered[t];s.questions[s.chapterID].questions[t].answers[a].correct&&e++}s.chapters[s.chapterID].correctCount=e,s.chapters[s.chapterID].correctPercent=Math.floor(s.chapters[s.chapterID].correctCount/s.questions[s.chapterID].questions.length*100),r(),window.localStorage[i]=JSON.stringify(s.chapters)}
//initialize app with data
function a(e){
//initialize current chapter (bookmark button, figures, alerts)
function t(){$("#search").val("").trigger("keyup"),$("figure:not(.equation)").each(function(){var e=$(this).attr("data-id");if($(this).hasClass("video")){$(this).prepend("<span>Figure "+e+"</span> &mdash; "),$(this).wrapInner("<figcaption></figcaption>");var t,a=$('<video controls src="'+("media/"+e+".mp4")+'">');$(this).prepend(a)}else{$(this).attr("data-frames")&&(e+=$(this).attr("data-frames").split(",")[0]),$(this).prepend("<span>Figure "+e+"</span> &mdash; "),$(this).wrapInner("<figcaption></figcaption>");var r,s=$('<img src="'+("media/"+e+".jpg")+'">');$(this).prepend(s)}}),$("figure.equation").each(function(){var e=$(this).attr("data-id"),t,a=$('<img src="'+("media/equation-"+e+".png")+'">');
// $(this).prepend('<span>Figure '+figure+'</span> &mdash; ');
// $(this).wrapInner('<figcaption></figcaption>');
$(this).prepend(a)}),$(".alert-note").each(function(){$(this).prepend("<h5>NOTE</h5>")}),$(".alert-warning").each(function(){$(this).prepend('<h5><i class="icon mdi mdi-warning"></i>WARNING<i class="icon mdi mdi-warning"></i></h5>')}),$(".alert-caution").each(function(){$(this).prepend('<h5><i class="icon mdi mdi-warning"></i>CAUTION<i class="icon mdi mdi-warning"></i></h5>')})}
//open chapter with argument ID
s.chapters=e,n(),
//toggle bookmark state for chapter in object
s.bookmarkToggle=function(){1==s.chapters[s.chapterID].bookmarked?s.chapters[s.chapterID].bookmarked=!1:s.chapters[s.chapterID].bookmarked=!0,$(".bookmark-toggle-btn").toggleClass("bookmarked"),n()},s.openChapter=function(e){s.chapterID=e,23===s.chapterID?s.translatedChapterID="A1":s.translatedChapterID="A2",s.chapterQuestions=s.questions[e].questions,$(".portal").empty().load(e+".html",function(){for(var e in s.chapters[s.chapterID].answered)$(".quiz").eq(parseInt(e)).find(".quiz-answer").eq(s.chapters[s.chapterID].answered[e]).addClass("selected");t(),r()})},s.selectAnswer=function(e){var t=$(e.target);t.addClass("selected").siblings().removeClass("selected");var a=t.parent().children().index(t),r=t.closest(".quiz").index(".quiz");return s.chapters[s.chapterID].answered||(s.chapters[s.chapterID].answered={}),s.chapters[s.chapterID].answered[r]=a,n(),!1},s.testSelectAnswer=function(e,t,a){var r;
// var answer=el.parent().children().index(el);
// var question=el.closest('.quiz').index('.quiz');
// if(!$scope.chapters[$scope.chapterID].answered){
// 	$scope.chapters[$scope.chapterID].answered={};
// }
// $scope.chapters[$scope.chapterID].answered[question]=answer;
// saveData();
return $(e.target).addClass("selected").siblings().removeClass("selected"),s.currentTestData.questions[t].selected=a,!1},
//open starting chapter
s.openChapter(s.chapterID)}s.version="1.1",s.numbersToLetters={0:"A",1:"B",2:"C",3:"D"},
//initialize chapter at 1
s.startChapter=1,s.chapterID=s.startChapter;var i="NEETSElectricityChaptersC";
//load questions data file
t.get("chapterQuestions.json").then(function(e){s.questions=e.data,
//check local storage, init with that data if available, otherwise JSON file
window.localStorage[i]?a(JSON.parse(window.localStorage[i])):t.get("chapters.json").then(function(e){a(e.data)})}),s.initTest=function(){s.testing=!0,t.get("test.json").then(function(e){for(key in s.allTestData=e.data,s.testMapping=[],s.allTestData)s.testMapping.push(key);console.log(s.testMapping),s.currentTestIndex=0,s.currentTestData=s.allTestData[s.testMapping[s.currentTestIndex]]})},s.modalAlert=function(e,t){$("#alertModal .modal-title").text(e),$("#alertModal .modal-body").text(t),$("#alertModal").modal()},s.loadTest=function(e){$(".test-area .quiz").length===$(".test-area .quiz a.selected").length||e<s.currentTestIndex?(s.currentTestIndex=e,s.currentTestData=s.allTestData[s.testMapping[s.currentTestIndex]]):s.modalAlert("Missing Answers","Answer all questions before proceeding.")},s.answerClass=function(e,t){var a="";return s.currentTestData.questions[e].answers[t].correct?a+="test-correct ":a+="test-incorrect ",0<=s.currentTestData.questions[e].selected&&s.currentTestData.questions[e].selected===t&&(a+="selected "),a},s.gradeTest=function(){var e=[];for(key in s.allTestData)$.each(s.allTestData[key].questions,function(){e.push(this)});var t=0,a=e.length;console.log(e);for(var r=0;r<e.length;r++)e[r].selected&&e[r].answers[e[r].selected].correct&&t++;console.log(t,a,t/a)}
//resets bookmark and progress data
,s.resetData=function(){confirm("This will reset all bookmarks and saved progress, do you want to continue?")&&t.get("chapters.json").then(function(e){$(".quiz-answer").removeClass("selected"),a(e.data)})}});