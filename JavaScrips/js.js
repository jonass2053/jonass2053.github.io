let url ="https://pokeapi.co/api/v2/pokemon/";
let contador=0;
// funcion que llama a la api
const pokeapi =(nombre)=>
{
   
    fetch(`${url}${nombre}`).then(Response=>Response.json()).then((Datos)=>
    {
        
      
       // console.log(Datos);
        CrearCard(Datos);

    })
}
// duncion de consultar
const consultar=(accion=1, valor=1)=>
{
   if(accion===1)
   {
      let name  = document.getElementById("name");
      pokeapi(name.value.toLowerCase());
   }
   else if(accion===2)
   {
      pokeapi(valor);

   }
   
}


//funcion que crea la card
const CrearCard=(d)=>
{

   let colcard = document.createElement("div");
   colcard.className="col card col-3";

    let divcard = document.createElement("div");
    divcard.className="";
    let imgcard=document.createElement("img");
    imgcard.className="img-card-top imgpokemon";
 
    // let direccionimegane=d.sprites.front_female; 
  
    let direccionimegane=d.sprites.front_default;
   
    imgcard.setAttribute("src", direccionimegane);
    let cardbody =document.createElement("div");
    cardbody.className="card-body";
    cardbody.id="jonas";
    let NombrePoke = document.createElement("h2");
    NombrePoke.innerText=d.name.toUpperCase();
    let p =document.createElement("p");
   


    const arrhabilidades=d.abilities;
    console.log(arrhabilidades);
    let listahabilidades = document.createElement("ol");
    
       let cont=0;
       arrhabilidades.forEach(element => {
       let li = document.createElement("li");
       li.innerText=d.abilities[cont].ability.name;
       cont++;
       listahabilidades.appendChild(li);
       
       });



// titulos

    let habilidades = document.createElement("h5");
    habilidades.innerText="Habilidades";
    habilidades.className="text-title"
    let movimietnos = document.createElement("h5");
    movimietnos.innerText=`Movimientos: [${d.moves[0].move.name}]`;
    habilidades.className="text-title"
    p.innerHTML=`<hr>Hola soy un pokemon de tipo: <b> ${d.types[0].type.name} </b> <hr>`;
    
    
   
      divcard.appendChild(imgcard);
      cardbody.appendChild(NombrePoke);
    

      // estadisticas
      let titustast = document.createElement("h5");
      titustast.innerHTML="<hr>ESTADISTICAS <hr>";
      cardbody.appendChild(titustast);
        let contador=0;
       let valor;  


      
      d.stats.forEach(element => {
      
      let pstasttitulo = document.createElement("p");
      let pstastresultado=document.createElement("p");
      
      let 
      valor=d.stats[contador].base_stat;
      pstasttitulo.innerText=`${d.stats[contador].stat.name.toUpperCase()}`
      pstastresultado.innerText=`${valor}%`;
      cardbody.appendChild(pstasttitulo);
      cardbody.appendChild(pstastresultado);
      
      contador++;
      pstastresultado.className="psHabilidad";
      pstastresultado.style.backgroundColor="green";
      pstastresultado.display="block";
      pstastresultado.style.width=`${valor}%`;
    

      
     }); 

    cardbody.appendChild(p);
    cardbody.appendChild(habilidades);
    cardbody.appendChild(listahabilidades);
    cardbody.appendChild(movimietnos);

    let listadomovimientos = document.createElement("ol");
    
    let btnvermovimietnos = document.createElement("input");
    btnvermovimietnos.type="button"
    btnvermovimietnos.value="Ver mas";
    btnvermovimietnos.className="btn btn-success"
    cardbody.appendChild(btnvermovimietnos);
       btnvermovimietnos.addEventListener("click", (accion)=>
       {
         if(btnvermovimietnos.value==="Ver mas")
         {
            listadomovimientos.style.display="block";
            btnvermovimietnos.value="Ver menos";

         }
         else
         {
            
            listadomovimientos.style.display="none";
            btnvermovimietnos.value="Ver mas";            

         }
         
       })
       

    listadomovimientos.style.display="none";
    let arrmovimientos = d.moves;
    cont=0;
  
    console.log("estos son los movimitnos");
        for(let i in arrmovimientos)
        {
           let limovimietno = document.createElement("li");
             limovimietno.innerText=`[${arrmovimientos[i].move.name}]`;
             listadomovimientos.appendChild(limovimietno);
           
             
        }

        cardbody.appendChild(listadomovimientos);
        console.log(listadomovimientos);

      

   // creamos un boton para eliminar el la tarjeta card
   let btnremover = document.createElement("input");
   btnremover.type="button";
   btnremover.className="btn"
   btnremover.value="X";
   btnremover.className="btnremover";
   
   btnremover.addEventListener("click", ((accion=>{
      
      
      let padrebtn=btnremover.parentNode; 
       console.log(padrebtn);
       padrebtn.remove();
   
   })))

    divcard.appendChild(cardbody);
    colcard.appendChild(divcard);
    colcard.appendChild(btnremover);   
   
    document.querySelector(".rowcard").appendChild(colcard);

}



const pokeapiListado=()=>
{
 
 
   for (let index = 1; index <11; index++) {
     
      consultar(2, index);
     let div = document.getElementsByClassName(".card");
     console.log(div);
   
     
    
      
       
   }

  

   //

   

   






}





