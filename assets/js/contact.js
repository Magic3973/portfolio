form = document.querySelector('form');

form.addEventListener('submit', function (e) {
	elements = form.elements; //sélectionne tous les éléments de formulaire y compris le button

    // attention for(of) [ou for(in)] fonctionne avec des collections d'objets mais pas avec des array de base
	for (let item of elements) { //Pour chaque élèment j'ajoute l'évènement :
	console.log(item.validity.valid);
		if (!item.validity.valid) { //Si l'élèment (le champ) n'est pas valide
            item.classList.add('error'); //on ajoute la classe .error
            // on chope le spanError contenu dans le label correspondant à l'input dont on parle
			spanMsg = document.querySelector('label[for="' + item.getAttribute('id') + '"] span.msg-error');
			console.log(spanMsg);
			spanMsg.classList.add('msg-error--show');
			e.preventDefault();
		}
	}


});
