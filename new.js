
   let x=1;
   let y=2;
   let z=3;

   function changeImage(){
   
   for (var i= document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);

   fetch(`https://api.tvmaze.com/shows?page=${x}`).
   then(response=>{
       if(response.ok)
       return response.json();
   })
   .then(data=>{
    
    if(data.length==0){
        throw new Error("something went wrong");
    }

    let bodys=document.querySelector(".bodys");

    if (bodys) {
        
       for(let dat of data)
       {
        let anchorTag=document.createElement("a");
        anchorTag.href="episode.html";
        let im=document.createElement("IMG");
        im.src=dat.image.medium;

        let requireId=dat.id;

        im.addEventListener("click", () => {
            
        localStorage.setItem('globalId', requireId);
        window.location.href = `episode.html`; 
          });

        anchorTag.appendChild(im);
        
        bodys.appendChild(anchorTag);
       }
    }
   })
   }

   changeImage();


   let prev=document.querySelector("#btnP");
   let btn1=document.querySelector("#btn1");
   let btn2=document.querySelector("#btn2");
   let btn3=document.querySelector("#btn3");
   let next=document.querySelector("#btnN");


  function condition(){
     btn1.innerHTML=`<button id="btn-${x}" class="btn">${x}</button>`
     btn2.innerHTML=`<button id="btn-${y}" class="btn">${y}</button>`
     btn3.innerHTML=`<button id="btn-${z}" class="btn">${z}</button>`
  }

  if(next){
  next.addEventListener("click",(e)=>{
   x++;
   y++;
   z++;
   condition();
   
   e.preventDefault();
   changeImage();

  })

  prev.addEventListener("click",(e)=>{
   if(x>1 || y>2 || x>3){
       x--;
       y--;
       z--;
       condition();

       e.preventDefault();
       changeImage();
   }
  })

  btn2.addEventListener("click",(e)=>{
   x++;
   y++;
   z++;
   condition();
 
   e.preventDefault();
   changeImage();
   
  })

  btn3.addEventListener("click",(e)=>{
   x+=2;
   y+=2;
   z+=2;
   condition();
  
   e.preventDefault();
   changeImage();
   
  })
}

    const form=document.querySelector(".two");

    let Notfound=document.querySelector(".NotFound");
    if(Notfound)
    Notfound.classList.add("Remove-NotFound");

   if(form){

   form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    
    for (var i= document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);

    let imageBox=document.querySelectorAll(".imageBox");

    for (var i= imageBox.length; i-->0;)
    imageBox[i].parentNode.remove();

    /*bodys=document.querySelector(".bodys");
    if(bodys)
    bodys.remove();*/
    
    if(!Notfound.classList.contains("Remove-NotFound"))
    Notfound.classList.add("Remove-NotFound");

    let container=document.querySelector(".containerBox");

    if(container)
    container.remove();

    const item=form.elements.query.value;

    fetch(`https://api.tvmaze.com/search/shows?q=${item}`)
    .then(response=>{

        if(response.ok){
        return response.json();
        }
        
    })
    .then(datas=>{
        
        if(datas.length==0){
            throw new Error("something went wrong");
        }

        let imgBox=document.createElement("div");
        imgBox.classList.add("imgBox");

        for(let datase of datas){

        if(datase.show.image){

        let anchorTag=document.createElement("a");

        let img=document.createElement('IMG');
        
        anchorTag.href="episode.html";
        img.src=datase.show.image.medium;

         let requiredId=datase.show.id;

         img.addEventListener("click", () => {
            
        localStorage.setItem('globalId', requiredId);
        window.location.href = `episode.html`; 
          });
          

        anchorTag.appendChild(img);

        imgBox.append(anchorTag);

        }

        }
        let main=document.querySelector(".main");

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

    })
}


    








    

