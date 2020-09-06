/*for Createpost modal to appear*/
document.getElementById('create').addEventListener('click',function(){
	document.querySelector('.createpostmodal').style.display='flex';
})
/*For Createpost modal to disappear*/
document.querySelector('.createclose').addEventListener('click',function(){
	document.querySelector('.createpostmodal').style.display='none';
})