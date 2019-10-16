/*$("button").click(function()
{
	var text=$(this).text();
	console.log(text);
/*$(this).css("background","yellow");
*/
/*
});
$("h1").click(function()
{
$(this).css("color","red");


});
$("input").keypress(function()
{
console.log("key pressed");

});
$("input").keypress(function(event)
{
console.log("key pressed");

});
*/
$("h1").on("click",function()
{
$(this).css("color","red");
});

$("input").on("keypress",function()
{
console.log("key pressed");
});

$("button").on("mouseenter",function()
{

$(this).css("font-weight","bold");

});

$("button").on("mouseleave",function()
{

$(this).css("font-weight","normal");

});
