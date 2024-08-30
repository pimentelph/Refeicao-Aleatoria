// https://www.themealdb.com/
// https://www.themealdb.com/api/json/v1/1/random.php
document.getElementById('botaoGerador').addEventListener('click', () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            criarReceita(res.meals[0]);
        });
});

function criarReceita(receita) {
    const ingredientes = [];

    for (let i = 1; 1 < 20; i++){
        if (receita[`strIngredient${i}`]) {
            ingredientes.push(`${receita[`strIngredient${i}`]} - ${receita[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }
    
    const newInnerHTML = `
        <div class="row row-cols-2 g-1">
			<div class="columns">
				<img src="${receita.strMealThumb}" width="500" height="500" alt="imagem da receita">
				${receita.strCategory ? `<p><strong>Categorias:</strong> ${receita.strCategory}</p>` : ''}
				${receita.strArea ? `<p><strong>Região:</strong> ${receita.strArea}</p>` : ''}
				${receita.strTags ? `<p><strong>Tags:</strong> ${receita.strTags.split(',').join(', ')}</p>` : ''}
				<h5>Ingredientes:</h5>
				<ul>
					${ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
				</ul>
			</div>
			<div class="columns five">
				<h4>${receita.strMeal}</h4>
				<p>${receita.strInstructions}</p>
			</div>
		</div>

		${receita.strYoutube ? `
		<div class="row">
			<h5>Video da Receita</h5>
			<div class="videoWrapper">
				<iframe width="480" height="270"
				src="https://www.youtube.com/embed/${receita.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>` : ''}
	`;

    document.getElementById('divReceita').innerHTML = newInnerHTML;

}
