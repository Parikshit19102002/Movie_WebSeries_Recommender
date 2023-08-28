const id = localStorage.getItem('gId');

console.log(id);

if (!id) {
    console.error('No show ID found in the URL');
  }



fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=52a8bcf656b1048f4e5acd39238f3c47`)
  .then(response => response.json())
  .then(data => {
     
    console.log(data);

    let background_img=document.querySelector(".background_img");

    let img=document.createElement("IMG");
    
    img.src=`https://image.tmdb.org/t/p/w500${data.backdrop_path}`;

    background_img.appendChild(img);


    let inside_image=document.querySelector(".inside_image");
    let imge=document.createElement("IMG");
    
    imge.src=`https://image.tmdb.org/t/p/w500${data.poster_path}`;

    inside_image.appendChild(imge);

    let title=document.querySelector(".original_title");
    title.textContent=data.title;

    let date=document.querySelector(".date");
    let dat=data.release_date;
    let datt=dat.slice(0,4);

    date.textContent=`(${datt})`;

    let also_like_content=document.querySelector(".also_like_content");
    also_like_content.textContent=`PEOPLE WHO LIKE  ${data.title}  ALSO LIKE`

    let overviews=document.querySelector(".overview_content");
    overviews.textContent=data.overview;

    let genes=data.genres;

    let genre=document.querySelector(".gene_val");

    for(let gene of genes)
    {
      let divi=document.createElement("div");
      divi.classList.add("forSpace");
      divi.textContent=gene.name;
      genre.appendChild(divi);
    }


   let runtime_value=document.querySelector(".runtime_value");
   runtime_value.textContent=`${data.runtime}m`

   let isRelease=data.status;
   let stream=document.querySelector(".stream");

   if(isRelease=="Released")
   {
       stream.textContent=` ${data.title} is available for streaming.`;
   }
   else{
    stream.textContent=` ${data.title} is not available for streaming.`
   }
   

  })
  .catch(error => {
    console.error('Error fetching movie details:', error);
  });




      const recommendationsUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=52a8bcf656b1048f4e5acd39238f3c47`;

      fetch(recommendationsUrl)
        .then(response => response.json())
        .then(data => {
          const recommendationsContainer = document.querySelector('.also_like');

          if (data.results && data.results.length > 0) {
            const recommendedMovies = data.results;
            recommendedMovies.forEach(movie => {
              const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

              let diviii=document.createElement("div");
              diviii.classList.add("swiper-slide");

              const imageElement = document.createElement('img');
              imageElement.src = imageUrl;

              diviii.appendChild(imageElement);
              recommendationsContainer.appendChild(diviii);

              imageElement.addEventListener('error', () => {
                imageElement.parentNode.removeChild(imageElement);
              });

              let reqID=movie.id;

              imageElement.addEventListener("click", () => {
            
                localStorage.setItem('gId', reqID);
                window.location.href = `movieDetails.html`; 
                  });


            });
          } 
          else {
               let dic=document.querySelector(".also_like_content");
               dic.remove();
          }
        })
        .catch(error => {
          console.error('Error fetching movie recommendations:', error);
        });




            
        
              fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=52a8bcf656b1048f4e5acd39238f3c47&append_to_response=credits,languages`)
                .then(response => response.json())
                .then(data => {
                    
                   let director_name=document.querySelector(".director_name");

                    if (data.credits && data.credits.crew) {
                      const director = data.credits.crew.find(person => person.job === 'Director');
                      if (director) {
                        const directorElement = document.createElement('div');
                        directorElement.classList.add("director_name_content");
                        directorElement.textContent = `${director.name}`;
                        director_name.appendChild(directorElement);
                      }
                    }
        
                    if (data.languages && data.languages.length > 0) {
                      const languagesElement = document.createElement('p');
                      languagesElement.textContent = `Languages: ${data.languages.join(', ')}`;
                      console.log(data.languages);
                    }
        
                    
                  })
                .catch(error => {
                  console.error('Error!!!!');
                });
           
        




     