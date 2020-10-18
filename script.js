let tabSwitch = function(element,index) {
	let cont = element.parentNode.parentNode;
	let tabs = [];
	//check if tab is already active
	if(!element.classList.contains('active')) {
		// get tabs
		for(var i=0; i < cont.children.length; i++) {
			if(cont.children[i].classList.contains('tab')) {
			tabs.push(cont.children[i]);
			}
			//remove activeTab class
			if(cont.children[i].classList.contains('activeTab')){
			cont.children[i].classList.remove('activeTab');
			}
		}
		//	find current active tab
		for(var i=0; i < element.parentNode.children.length; i++){
			if (element.parentNode.children[i].classList.contains('active')) {
				element.parentNode.children[i].classList.remove('active');
				break;
			}
		}
	element.classList.add('active');
	tabs[index].classList.add('activeTab');
	}
}
