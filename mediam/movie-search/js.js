const from=document.querySelector('form')
const container=document.querySelector('.movies')
tvmazeapi(`marvel`);
from.addEventListener('keyup',(e)=>{
    e.preventDefault();
    let querry=from.querySelector('input').value;
    if(querry!='')
    tvmazeapi(querry);
    else
    tvmazeapi(`marvel`);
})
async function tvmazeapi(querry){
 let data=await fetch(`https://api.tvmaze.com/search/shows?q=${querry}`)
 let movies= await data.json();
 makeimage(movies);
}
function makeimage(e){
    container.innerHTML=''
    let count=0;
    for(let movie of e)
    {
        count++;
        
         let card = document.createElement("div");
        card.classList.add("movie-card");
        let img = document.createElement("img");
       let link = document.createElement('a');
    link.href = movie.show.url;  // TVMaze gives a direct link to the show
    link.target = "_blank"; // Opens in new tab
    link.style.textDecoration = "none"; // Optional: remove underline

    // Create image element
    if (movie.show.image && movie.show.image.medium) {
        let img = document.createElement('img');
        img.src = movie.show.image.medium;
        img.alt = movie.show.name;
        link.appendChild(img);
    }

    // Add title
    let title = document.createElement('h3');
    title.textContent = movie.show.name;
    link.appendChild(title);
    link.classList.add("link");
    // Append link to card, card to container
    card.appendChild(link);
    container.appendChild(card);

    }
    if(count==0)
    {
         let card = document.createElement("div");
         card.classList.add("movie-card");
          let title = document.createElement("h3");
        title.textContent ='Movie Not Found.....';
           card.appendChild(title);
        container.appendChild(card);
    }
}

