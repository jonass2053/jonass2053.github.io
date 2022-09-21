let url ="https://pokeapi.co/api/v2/pokemon/";

let contador =0;


const NewCard=(Data)=>
{

    let row = document.querySelector(".rowlist");
    let col = document.createElement("div");
    col.className="col col-3 card";
    let imgcard = document.createElement("img");
    imgcard.className="card-img-top";
    let Nombre = document.createElement("h5"); 
    Nombre.innerText=Data.name.toUpperCase();
   
    imgcard.setAttribute("src", `${Data.sprites.front_default}`);

    let boton = document.createElement("a");
   //boton.target="_blanck";
    boton.href="Card.html";
    boton.innerText="Ver mas";
    boton.className="btn btn-primary";

    boton.addEventListener("click", (accion=>
        {

          localStorage.setItem("Nombre", Data.name.toUpperCase());
          localStorage.setItem("Stats",  JSON.stringify(Data.stats));
          

            
        }))

   

    col.appendChild(imgcard);
    col.appendChild(Nombre);
    col.appendChild(boton);
    row.appendChild(col);
 

  

}



const  api = ()=>
{

    for (let index = 0; index <=10; index++) {
       
        
        fetch(`${url}${index}`).then((Response)=>Response.json()).then(datos=>
            {
                
                    NewCard(datos);
            })
    }
        
}








