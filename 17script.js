//alert("hola")
let Pedido= [ ];//aca uso let y no constante , porqeu en si este objeto no es contsnate cambia todo el tiempo, y cuano ponia con const , me daba un arror.Asiqeu lo cagamos y le ponemos let y listo

 document.addEventListener("DOMContentLoaded", function(){
 
    let linkkancel =document.querySelector("#linkCancel")
    linkkancel .addEventListener( "click",function(e){//evt significa evento podria poner la e solita tambien
        e.preventDefault()//este preventiDerfault solo se agrega por qu es un enlace
        Pedido= [ ];
         //a Perdido lo ponemos en cero para que borre todo lo que tiene en el carrito de compras
        ActualizarCarrito()
    })

const Eleccion = document.querySelectorAll(".meal") //elijo la clase meal que cada comida tirene esa clase , cosa que pueda hacer click ahi
//ahora lo quiero recorrer al arrai meal
/* for( const meal of Eleccion){//Entonces a cada uno de estos objetos le puedo acer un addverli, ose que lo puedo escuchar
    meal.addEventListener ("click", function(){
        console.log("click en la comida")
    }) //Esto es medio enquilombado, por eso para no estar peleando con el DOM osea el html y todos sus elemntod, hay una propiedad que puedo usar que se llama data- y un titulo para distinguir, todo esto adentro de la equitera  asi=  <article class="meal"   data-title="Muzzarella" data-precio="900">   todo esto lo escribimos en el html ojo! en cada una de las comidas, se lo agregamos

}*/
Eleccion.forEach(meal=>{ //metodo de jswpara elfuir de a uno en el arraia
    meal.addEventListener("click", function(){
       /*  let title=this.dataset.title;//el nombre que le puse en el html date=dataset
        let precio= this.dataset.precio;
        console.log(title)
        Pedido.push(title)//push es un metodo d js anade a 1 o + elemetos al final de arrai
    ActualizarCarrito() *///hago una nueva funcion
   //voy aotra vez:
const pedido={ //voy a crear un objeto
title: this.dataset.title,
precio: this.dataset.precio,
}
 Pedido.push(pedido) //aca estoy agregando mi nuevo obajeto  que cree resien  al carrito con el metodo push
 ActualizarCarrito();//este lo pongo aca porqeu luego de lo anteriri quiero que se actualice el carrito

     })
  });

}) 

function ActualizarCarrito(){ //aca lo llamo y depaso la recorro por el html y le agrego cosa con ``
let html="";

for(let meal of Pedido){
    html+=`
    <li>${meal.title}-${meal.precio}</li>
    ` //primero me fije que funcionese y me ponga las cosas con   <li>${meal}</li> y si me agregaba lo que me p arecia en la consola, los nombre de las cosas
}
   let carta=document.querySelector("#carta ul")
   carta.innerHTML=html

}

/* /* Explicacion de lo que hicimos:
en un principio
primero el let Pedido, va a ser mi carrito de compras, yo al principio agregava cadenas de caracteres, despues ya agrege objetos y mejor aun tener un array de objetos es como que me va a rendir mas
Entonces, lo que hago  despues es asegurarme de tener todo cargado en el DOM,/Luego voy al linc-cancel que es para borrar los pedidos que voy haciendo, lo nombro con let y despues lo selecciono con el queryselector]y como era un id va seleccionado con #, teniendo en cuenta el ""click"" Entonces obtenesmo el id de calcel, le asemos un addeventDelistener , le escuchamos un clik y lo que hacemos es recetear order desde cero. El priventDefault ;p hacemos porque es un link y al Pedido lo ponemos en cero [] para que borre todo lo que alla en nuestro carrito de compras y para que dibuje la interface dibujamos el carrito en bacio es el ActualizarCarrito()].
Despues seleccionamos todos los que tengan la clase .meal y los recorremos y acada uno de eso meal le agregamos la posibilidad de hacerle un clik, a cada uno de esos article y que es loq ue hacemos ahi adentro, cuando hacemos clik agregamos adentro de article un objeto qeu tiene titulo y precio que lo sacamos de data-set /titile/precio  y a ese objeto que creamos se lo agregamos al carrito, con push, actualuzamos el carrito llamando a la funcion ActualizarCarrito().

Ya tenia de antes mi funcion creada abajo, de 
ActualizarCarrito, que estaba la variable vacia , let html="";.REcorremos el carrito con un for of, y todo lo que  encontramos en el carrito , se la vamos agregando a esa variable vacia'que stsa entre bactik``., que serai ese <li> que hicicmos en el html,  que estaba vacia porque ahi es donde eibamos a air agregando el pedido con el html

y al final que hacemos, esa variable que ya no esta mas vacia , se la ponemos a ese objeto del carrito qeue era la lista con innertHTML. /* */