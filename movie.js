
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=52a8bcf656b1048f4e5acd39238f3c47`)
  .then(response => response.json())
  .then(data => {
    const topRatedMovies = data.results;

    let swiper=document.querySelector(".swiper-wrapper");

    for(let topRatedMovie of topRatedMovies){

    const posterPath = topRatedMovie.backdrop_path;

    let anchorTag=document.createElement("a");
    let imge=document.createElement('IMG');

    let swiperDiv=document.createElement("div");
    swiperDiv.classList.add("swiper-slide");

        
    anchorTag.href="movieDetails.html";

    imge.addEventListener('error', () => {
        imge.parentNode.removeChild(imge);
      });

    imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

        let reqID=topRatedMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });

    anchorTag.appendChild(imge);
    swiperDiv.appendChild(anchorTag);

    swiper.appendChild(swiperDiv);

    }


  })
  .catch(error => {
    console.log('Error!!!');
  });

  


  

// Get a list of top-rated movies
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=52a8bcf656b1048f4e5acd39238f3c47`)
.then(response => response.json())
.then(data => {
    const topRatedMovies = data.results;
    
    let inside_top=document.querySelector(".top_imgBox");

    for(let topRatedMovie of topRatedMovies)
    {
      const posterPath = topRatedMovie.poster_path;

      let anchorTag=document.createElement("a");
      let imge=document.createElement('IMG');
  
      let swiperDiv=document.createElement("div");
      swiperDiv.classList.add("splide__slide");
  
          
      anchorTag.href="movieDetails.html";
  
      imge.addEventListener('error', () => {
          imge.parentNode.removeChild(imge);
        });
  
      imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

        let reqID=topRatedMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
  
      anchorTag.appendChild(imge);
      swiperDiv.appendChild(anchorTag);
  
      inside_top.appendChild(swiperDiv);
    }

})
.catch(error => {
    console.error('Error!!!');
});







// Get a list of upcoming movies

fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=52a8bcf656b1048f4e5acd39238f3c47`)
  .then(response => response.json())
  .then(data => {
    const upcomingMovies = data.results;
    
    let inside_top=document.querySelector(".upcoming_imgBox");

    for(let upcomingMovie of upcomingMovies)
    {
      const posterPath = upcomingMovie.poster_path;

      let anchorTag=document.createElement("a");
      let imge=document.createElement('IMG');
  
      let swiperDiv=document.createElement("div");
      swiperDiv.classList.add("splide__slide");
  
          
      anchorTag.href="movieDetails.html";
  
      imge.addEventListener('error', () => {
          imge.parentNode.removeChild(imge);
        });
  
      imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

      let reqID=upcomingMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
  
      anchorTag.appendChild(imge);
      swiperDiv.appendChild(anchorTag);
  
      inside_top.appendChild(swiperDiv);
    }
  })
  .catch(error => {
    console.error('Error!!!');
  });






const apiKey = '52a8bcf656b1048f4e5acd39238f3c47';
const currentDate = new Date().toISOString().split('T')[0];

// Make the API request to the "Discover" endpoint, sorted by release date in descending order
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&primary_release_date.lte=${currentDate}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const latestMovies = data.results;
    
    let inside_top=document.querySelector(".latest_imgBox");

    for(let latestMovie of latestMovies)
    {
      const posterPath = latestMovie.poster_path;

      let anchorTag=document.createElement("a");
      let imge=document.createElement('IMG');
  
      let swiperDiv=document.createElement("div");
      swiperDiv.classList.add("splide__slide");
  
          
      anchorTag.href="movieDetails.html";
  
      imge.addEventListener('error', () => {
          imge.parentNode.removeChild(imge);
        });
  
      imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

      let reqID=latestMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
  
      anchorTag.appendChild(imge);
      swiperDiv.appendChild(anchorTag);
  
      inside_top.appendChild(swiperDiv);
    }
  })
  .catch(error => {
    console.error('Error fetching most recently released movies:', error);
  });





  // Make the API request to search for movies with the genre "Superhero"
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const superheroMovies = data.results;
    
    let inside_top=document.querySelector(".superhero_imgBox");

    for(let superheroMovie of superheroMovies)
    {
      const posterPath = superheroMovie.poster_path;

      let anchorTag=document.createElement("a");
      let imge=document.createElement('IMG');
  
      let swiperDiv=document.createElement("div");
      swiperDiv.classList.add("splide__slide");
  
          
      anchorTag.href="movieDetails.html";
  
      imge.addEventListener('error', () => {
          imge.parentNode.removeChild(imge);
        });
  
      imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

      let reqID=superheroMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
  
      anchorTag.appendChild(imge);
      swiperDiv.appendChild(anchorTag);
  
      inside_top.appendChild(swiperDiv);
    }
    })
    .catch(error => {
      console.error('Error fetching superhero movies:', error);
    });


    

    // Make the API request to search for movies with the language "Hindi"
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_original_language=hi`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {

        const hindiMovies = data.results;
    
        let inside_top=document.querySelector(".hindi_imgBox");
    
        for(let hindiMovie of hindiMovies)
        {
          const posterPath = hindiMovie.poster_path;
    
          let anchorTag=document.createElement("a");
          let imge=document.createElement('IMG');
      
          let swiperDiv=document.createElement("div");
          swiperDiv.classList.add("splide__slide");
      
              
          anchorTag.href="movieDetails.html";
      
          imge.addEventListener('error', () => {
              imge.parentNode.removeChild(imge);
            });
      
          imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

          let reqID=hindiMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
      
          anchorTag.appendChild(imge);
          swiperDiv.appendChild(anchorTag);
      
          inside_top.appendChild(swiperDiv);
        }
      })
      .catch(error => {
        console.error('Error fetching Hindi movies:', error);
      });



    

      // Make the API request to discover popular movies in the "Action" genre
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&sort_by=popularity.desc`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const actionMovieMovies = data.results;
    
          let inside_top=document.querySelector(".actionMovie_imgBox");
      
          for(let actionMovieMovie of actionMovieMovies)
          {
            const posterPath = actionMovieMovie.poster_path;
      
            let anchorTag=document.createElement("a");
            let imge=document.createElement('IMG');
        
            let swiperDiv=document.createElement("div");
            swiperDiv.classList.add("splide__slide");
        
                
            anchorTag.href="movieDetails.html";
        
            imge.addEventListener('error', () => {
                imge.parentNode.removeChild(imge);
              });
        
            imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

            let reqID=actionMovieMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
        
            anchorTag.appendChild(imge);
            swiperDiv.appendChild(anchorTag);
        
            inside_top.appendChild(swiperDiv);
          }
        })
        .catch(error => {
          console.error('Error fetching popular action movies:', error);
        });
      
     
    



        // Make the API request to discover romantic movies
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            return response.json();
            
          })
          .then(data => {
            
          const romanticMovies = data.results;
    
          let inside_top=document.querySelector(".slider");
      
          for(let romanticMovie of romanticMovies)
          {
            const posterPath = romanticMovie.poster_path;
      
            let anchorTag=document.createElement("a");
            let imge=document.createElement('IMG');
        
            let swiperDiv=document.createElement("li");
            /*swiperDiv.classList.add("splide__slide");*/
        
                
            anchorTag.href="movieDetails.html";
        
            imge.addEventListener('error', () => {
                imge.parentNode.removeChild(imge);
              });
        
            imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

            let reqID=romanticMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
        
            anchorTag.appendChild(imge);
            swiperDiv.appendChild(anchorTag);
        
            inside_top.appendChild(swiperDiv);
          }
          })
          .catch(error => {
            console.error('Error fetching thriller movies:', error);
          });
        
    
        

// Make the API request to discover thriller movies
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=53`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    const thrillerMovies = data.results;
    
          let inside_top=document.querySelector(".thriller_imgBox");
      
          for(let thrillerMovie of thrillerMovies)
          {
            const posterPath = thrillerMovie.poster_path;
      
            let anchorTag=document.createElement("a");
            let imge=document.createElement('IMG');
        
            let swiperDiv=document.createElement("div");
            swiperDiv.classList.add("splide__slide");
        
                
            anchorTag.href="movieDetails.html";
        
            imge.addEventListener('error', () => {
                imge.parentNode.removeChild(imge);
              });
        
            imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

            let reqID=thrillerMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
        
            anchorTag.appendChild(imge);
            swiperDiv.appendChild(anchorTag);
        
            inside_top.appendChild(swiperDiv);
          }
  })
  .catch(error => {
    console.error('Error fetching thriller movies:', error);
  });





// Make the API request to discover family-friendly and animated movies
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&certification_country=US&certification.lte=G&with_genres=16`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    const animatedMovies = data.results;
    
    let inside_top=document.querySelector(".animated_imgBox");

    for(let animatedMovie of animatedMovies)
    {
      const posterPath = animatedMovie.poster_path;

      let anchorTag=document.createElement("a");
      let imge=document.createElement('IMG');
  
      let swiperDiv=document.createElement("div");
      swiperDiv.classList.add("splide__slide");
  
          
      anchorTag.href="movieDetails.html";
  
      imge.addEventListener('error', () => {
          imge.parentNode.removeChild(imge);
        });
  
      imge.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

      let reqID=animatedMovie.id;

        imge.addEventListener("click", () => {
            
        localStorage.setItem('gId', reqID);
        window.location.href = `movieDetails.html`; 
          });
  
      anchorTag.appendChild(imge);
      swiperDiv.appendChild(anchorTag);
  
      inside_top.appendChild(swiperDiv);
    }
  })
  .catch(error => {
    console.error('Error fetching popular kids movies:', error);
  });




const form=document.querySelector(".two");

let Notfound=document.querySelector(".NotFound");
if(Notfound)
Notfound.classList.add("Remove-NotFound");


  form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    
    for (var i= document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);

    let imageBox=document.querySelectorAll(".imageBox");

    for (var i= imageBox.length; i-->0;)
    imageBox[i].parentNode.remove();
    
    if(!Notfound.classList.contains("Remove-NotFound"))
    Notfound.classList.add("Remove-NotFound");

    let container=document.querySelector(".containerBox");

    if(container)
    container.remove();

    let top_rated=document.querySelector(".top_rated");

    if(top_rated)
    top_rated.remove();

    let tops=document.querySelectorAll(".top");

    for(let top of tops)
    top.remove();

  let myswiper=document.querySelector(".mySwiper");

  if(myswiper)
  myswiper.remove();

    const item=form.elements.query.value;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(item)}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.results.length === 0) {
      throw new Error('Movie not found');
    }

    let imgBox=document.createElement("div");
    imgBox.classList.add("imgBox");
    
    for(let datas of data.results){
    const movieId = datas.id;

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(movieData => {
        const posterPath = movieData.poster_path;

        let anchorTag=document.createElement("a");
        let img=document.createElement('IMG');

        let imageResize=document.createElement("div");
        imageResize.classList.add("imageResize");
            
        anchorTag.href="movieDetails.html";

        img.addEventListener('error', () => {
            img.parentNode.removeChild(img);
          });

        img.src=`https://image.tmdb.org/t/p/w500${posterPath}`;

        img.addEventListener("click", () => {
            
        localStorage.setItem('gId', movieId);
        window.location.href = `movieDetails.html`; 
          });

        imageResize.appendChild(img);
        anchorTag.appendChild(imageResize);
        imgBox.append(anchorTag);

      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
    }
    
    let main=document.querySelector(".bodys");
    main.append(imgBox);

    form.elements.query.value="";

  })
  .catch(()=>{
        
    let container=document.querySelector(".containerBox");
    if(container)
    container.remove();

    Notfound.classList.remove("Remove-NotFound");
    form.elements.query.value="";
 })

});
