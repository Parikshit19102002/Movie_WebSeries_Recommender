

    const id = localStorage.getItem('globalId');
    
     let Notfound=document.querySelector(".Notfoun");
     Notfound.classList.add("Remov-NotFound");

    if (!id) {
      console.error('No show ID found in the URL');
    }

    fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((episodeData)=>{
       
        if (episodeData.ok) {
            return episodeData.json();
          } else {
            throw new Error("Something went wrong");
          }
    })
    .then((episodeOriginalData)=>{

      

        let mainImage= document.querySelector(".mainImage");

        let imag=document.createElement("IMG");
        imag.src=episodeOriginalData.image.original;

        mainImage.append(imag);

        let contentBox=document.querySelector(".contentBox");

        let nameC=document.querySelector(".name");
        nameC.textContent=episodeOriginalData.name;

        let about=document.querySelector(".about");
        /*about.innerHTML=`${episodeOriginalData.summary}`;*/

        let label=document.querySelector(".label");

        let gerenes=episodeOriginalData.genres;

        for(let gerene of gerenes)
        {
           let spaan=document.createElement("div");
           spaan.classList.add("cont");
           let spaaan=document.createElement("div");
           spaaan.classList.add("linecontBox");
           let spaaaan=document.createElement("div");
           spaaaan.classList.add("line");
           
           if(gerene!=gerenes[0])
           spaaan.append(spaaaan);

           spaan.textContent=gerene;
           spaaan.append(spaan);

           label.append(spaaan);
        }

    })
    .catch((error) => {
      
      let container=document.querySelector(".container");
      if(container)
      container.remove();

      let Notfound=document.querySelector(".Notfoun");
      Notfound.classList.remove("Remov-NotFound");
    });




  
   fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((episodes) => {
        if (episodes.length === 0) {
          throw new Error("No episodes found");
        }

        let max=1;

        for(let episode of episodes)
        {
          if(episode.season>max)
          {
            max=episode.season;
          }
        }
        
        
        let season=document.querySelector(".season");
        let episodeBox=document.querySelector(".episodeBox");

        for(let i=0;i<max;i++)
        {
          let seasonNumber = document.createElement("div");
          seasonNumber.classList.add(`seasonNumber${i+1}`);
          seasonNumber.classList.add("saammee");
          seasonNumber.textContent=`season${i+1}`;
          season.appendChild(seasonNumber);
          

          let seasonBox = document.createElement("div");
          seasonBox.classList.add(`season${i+1}`);
          seasonBox.classList.add("same");
          seasonBox.classList.add("same1");

          episodeBox.appendChild(seasonBox);

        }

        

        for(let episode of episodes)
        {
          let k=episode.season;
          let seasonBoox=document.querySelector(`.season${k}`);

          let episodeE = document.createElement("div");
          episodeE.classList.add("episodeB");

          let episodeElement = document.createElement("div");
          episodeElement.classList.add("episodeEE");

          let  episodeSummary = document.createElement("div");
          episodeSummary.classList.add("summary");

          episodeSummary.innerHTML=episode.summary;

          let episodename=document.createElement("div");
          episodename.classList.add("episodename");

          let episodenumberseasonnumber=document.createElement("div");
          episodenumberseasonnumber.classList.add("episodenumberseasonnumber");

          let runTime=document.createElement("li");
          runTime.classList.add("runTime");

          let time=`${episode.runtime}m`;
          let numbers=`S${episode.season}E${episode.number}`;

          runTime.textContent=time;
          episodenumberseasonnumber.textContent=numbers;

          let divv=document.createElement("div");
          divv.classList.add("divv");

          divv.appendChild(episodenumberseasonnumber);
          divv.appendChild(runTime);

          let names=document.createElement("div");
          names.classList.add("names");

          names.textContent=episode.name;

          let divvv=document.createElement("div");
          divv.classList.add("divvv");

          divvv.appendChild(names);
          divvv.appendChild(divv);

          let divvvv=document.createElement("div");
          divvvv.classList.add("divvvv");

          divvvv.appendChild(divvv);
          divvvv.appendChild(episodeSummary);


          let imm=document.createElement("IMG");

          if(episode.image)
          imm.src=episode.image.medium;
          
          episodeElement.appendChild(imm);

          episodeE.appendChild(episodeElement);
          episodeE.appendChild(divvvv);
          
          if(seasonBoox)
          seasonBoox.appendChild(episodeE);
        }


        if(max>11)
        {
           

           let seasonss=document.querySelectorAll(".saammee");

           for(let seasons of seasonss)
           {
            seasons.classList.add("swiper-slide");
           }

         

        }

        if(max<=11){
          let seasons=document.querySelector(".season");
          seasons.classList.remove("swiper-wrapper");

          seasons.classList.add("okk");

        }

        let boxxx=document.querySelector(".season1");
        boxxx.classList.remove("same");
        
        let seasonNumber=document.querySelector(".seasonNumber1");
        seasonNumber.classList.add("colorWhite");

        let episodesNumberBoxs=document.querySelectorAll(".saammee");

        for(let episodesNumberBox of episodesNumberBoxs)
        {
          episodesNumberBox.addEventListener("click",()=>{
            
            for(let episodeNBox of episodesNumberBoxs)
            {
              if(episodeNBox.classList.contains("colorWhite"))
              {
                 episodeNBox.classList.remove("colorWhite");
              }
            }

            episodesNumberBox.classList.add("colorWhite");

            let same1=document.querySelectorAll(".same1");
            

            for(let same1s of same1)
            {
              if(!same1s.classList.contains("same"))
              same1s.classList.add("same");
            }
            
            let boxx=document.querySelector(`.${episodesNumberBox.textContent}`);
            
            boxx.classList.remove("same");
            
          })
        }

      })
      .catch((error) => {

        let container=document.querySelector(".container");
        if(container)
        container.remove();

        let Notfound=document.querySelector(".Notfoun");
        Notfound.classList.remove("Remov-NotFound");
      });


    
  
  
  