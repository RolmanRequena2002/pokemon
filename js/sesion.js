function mostrar(event) {
		if (event === 'login'){
			document.getElementById('boxLeft').setAttribute('style','display: flex');
			document.getElementById('boxLeftAlt').setAttribute('style','display: none');
		}
		if (event === 'newCount'){
			document.getElementById('boxLeftAlt').setAttribute('style','display: flex');
			document.getElementById('boxLeft').setAttribute('style','display: none');
		}
	}