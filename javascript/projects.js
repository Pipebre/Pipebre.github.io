{
	{

		const menu= document.getElementById('projects-menu');
		const allButton= menu.firstElementChild;
		allButton.addEventListener('click', ()=>{
			showAllSections();
			selectMenuItem(allButton);
		});
		for(let section of Array.from(document.getElementById('projects-container').getElementsByTagName('div'))){
			section.classList.add('section-active');
			const menuItem= document.createElement('li');
			menuItem.textContent= section.querySelector('h2').textContent;
			menuItem.setAttribute('data-project-section', section.id);
			menuItem.addEventListener('click', ()=>{
				showOnlySection(menuItem.getAttribute('data-project-section'));
				selectMenuItem(menuItem);
			});
			const forwardSlash= document.createTextNode('/');
			menu.appendChild(forwardSlash);
			menu.appendChild(menuItem);
		}

	}


	function selectMenuItem(menuItem){
		for(let item of Array.from(document.querySelectorAll('#projects-menu li'))){
			item.classList.remove('active');
		}
		menuItem.classList.add('active');
	}


	function showOnlySection(sectionId){
		for(let section of Array.from(document.querySelectorAll('.section-active'))){
			section.classList.remove('section-active')
		}
		document.getElementById(sectionId).classList.add('section-active');
	}

	function showAllSections(){
		for(let section of Array.from(document.querySelectorAll('.project-section'))){
			section.classList.add('section-active')
		}
	}

	
}