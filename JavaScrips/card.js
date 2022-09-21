



const NewCard=()=>
{

    let contenedor = document.createElement("div");
    contenedor.className="container";

    let row = document.createElement("div");
    row.className="row";
    let col = document.createElement("div");
    col.className="col col-3 card";
   // let imgcard = document.createElement("img");
   // imgcard.className="card-img-top";
    let Nombre = document.createElement("h5"); 
    Nombre.innerText=localStorage.getItem("Nombre");
   

   // imgcard.setAttribute("src", `${Data.sprites.front_default}`);

   // col.appendChild(imgcard);
    col.appendChild(Nombre);
    row.appendChild(col);
    contenedor.appendChild(row);
    console.log(contenedor);



}

NewCard();