{
	document.getElementById('menu-button').addEventListener('click', ()=>{
		document.getElementById('black-screen').classList.toggle('active');
		document.querySelector('nav').classList.toggle('active');
	});
}