/*to change edit to save and make paragraph editable*/
var para=document.querySelector('#blogBody');
var title=document.querySelector('#blogTitleNew');
var edit=document.querySelector('#edit');
var save=document.querySelector('#save');
document.getElementById('edit').addEventListener('click',function(){
	para.setAttribute("contenteditable","true");
	title.setAttribute("contenteditable","true");
	edit.style.display="none";
	save.style.display="flex";
	para.style.border='2px solid #F72F5F';
	title.style.border='2px solid blue';
})
/*to change save to edit and make paragraph non-editable*/
document.getElementById('save').addEventListener('click',function(){
	para.setAttribute("contenteditable","false");
	title.setAttribute("contenteditable","false");
	edit.style.display="flex";
	save.style.display="none";
	para.style.border='0px';
	title.style.border='0px';
})
/*for like button function*/
var like=document.querySelector('#like');
var likecount=document.querySelector("#likecount");
document.getElementById("like").addEventListener('click',function(){
	like.innerText="Liked";
	likecount.innerText=" 1 person likes this!";
})
/*to display comment after user input*/
function savecomment() {
	var newItem = document.createElement("li");
	var textnode = document.createTextNode(document.getElementById('comment').value);
	newItem.appendChild(textnode);
	var list = document.getElementById("mylists");
	list.insertBefore(newItem, list.childNodes[0]);
}

