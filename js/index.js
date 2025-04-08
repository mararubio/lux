'use strict'


    const container = document.querySelector(".Container");
    const items = document.querySelectorAll(".Container-li");
    const containerH2 = document.querySelectorAll('.Container-h2');
    let imagen = document.querySelectorAll('.Imagen');
    const wrapper = document.querySelector('.Wrapper');
    
   

    containerH2.forEach((each , i) =>{
        containerH2[i].addEventListener('mouseover' , () =>{

           imagen.forEach((eachI , k)=>{
                imagen[k].style.opacity = 0;
           })
                imagen[i].style.opacity = 1;
              
           items.forEach((each , j)=> {
                items[j].style.opacity = 0.1;
            })
                items[i].style.opacity = 1;

        });
        
    })

    document.body.addEventListener("mouseout", () => {
        imagen.forEach((eachI , k)=>{
            
            imagen[k].style.opacity = 0;
           })
        
            items.forEach((each , j)=>{
                items[j].style.opacity = 1;
            })
            
    });