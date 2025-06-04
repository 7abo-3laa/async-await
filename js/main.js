let container = document.getElementById('container');

async function getApi(link) {
  let response = await fetch(link);
  let data = await response.json();
  let recipes = data.recipes;

  for (let i = 0; i < recipes.length; i++) {
    let card = document.createElement('div');
    card.className = 'test';

   card.innerHTML = 
   ` <div class="col-md-4 text-center mb-5">
                    <img src="${recipes[i].image_url}" class="w-100" style="height:300px">
                    <h4>${recipes[i].title}</h4>
                    <h5>${recipes[i].publisher}</h5>
                    <h5>${recipes[i].social_rank}</h5>
    </div>`;

    container.appendChild(card);
  }
}

getApi("https://forkify-api.herokuapp.com/api/search?q=pizza");