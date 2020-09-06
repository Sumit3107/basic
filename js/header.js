/*for SignUp modal to appear*/
document.getElementById('signUp').addEventListener('click',function(){
	document.querySelector('.signupmodal').style.display='flex';
})
/*For SignUp modal to disappear*/
document.querySelector('.closeup').addEventListener('click',function(){
	document.querySelector('.signupmodal').style.display='none';
})
/*for SignIn modal to appear*/
document.getElementById('signIn').addEventListener('click',function(){
	document.querySelector('.signinmodal').style.display='flex';
})
/*For SignIn modal to disappear*/
document.querySelector('.closein').addEventListener('click',function(){
	document.querySelector('.signinmodal').style.display='none';
})
/*to move from Sign in modal to sign up modal*/
document.querySelector('#signupmove').addEventListener('click',function(){
	document.querySelector('.signupmodal').style.display='flex';
	document.querySelector('.signinmodal').style.display='none';
})