function showPage(pageId) {  
	// hide all pages  
	document.querySelectorAll('main > div[id]').forEach(div => {    
		div.style.display = 'none';  
		});  
		// show selected page  
		const target = document.getElementById(pageId);  
			if (target) target.style.display = 'block';
		}document.addEventListener('DOMContentLoaded', () => {  
		// Hide all except the first page on load (optional, but makes behavior consistent)  
		showPage('page1');  
		// Intercept nav link clicks  
		document.querySelectorAll('.nav__links a[href^="page"]').forEach(link => {    
		link.addEventListener('click', (e) => {      
		e.preventDefault();      
		const pageId = link.getAttribute('href'); 
		// e.g. "page1"      
		showPage(pageId);      
		// Close the mobile menu (checkbox trick)      
		const checkbox = document.getElementById('nav-toggle');     
		if (checkbox) checkbox.checked = false;    
		});  
		});
		});