
let bottom= document.getElementById("buttom")
let usuario= document.getElementById("exampleNombre");
let password= document.getElementById("exampleInputPassword1");
let parra= document.getElementById("paragraph");
let second= document.getElementById("second");
let alerta= document.getElementById("alerta");
let refrescar= document.getElementById("refrescar");
let retirar= document.getElementById("retirar");
let buttonRetirar= document.getElementById("buttonRetirar");
let retirarDinero= document.getElementById("retirarDinero");
let retirarVis= document.getElementById("retirarVis");
let userSaldo= document.getElementById("userSaldo");
let menRetiro= document.getElementById("menRetiro");
let userNombre= document.getElementById("userNombre");
let estadoCuenta= document.getElementById("estadoCuenta");
let verDinero= document.getElementById("verDinero");
let dineCuenta= document.getElementById("dineCuenta");
let menu= document.getElementById("menu");
let menuPrin= document.getElementById("menuPrin");
let ingresaDiner= document.getElementById("ingresaDiner");
let ingresaDinero= document.getElementById("ingresaDinero");
let buttonIngresar= document.getElementById("buttonIngresar");
let ingresaDinerCuneta = document.getElementById("ingresaDinerCuneta");
let menIngreso = document.getElementById("menIngreso");
let userNombreIngreso = document.getElementById("userNombreIngreso");
let userSaldoIngreso = document.getElementById("userSaldoIngreso");
let menuPrinIng= document.getElementById("menuPrinIng");
let reglogin= document.getElementById("reglogin");
let menumenu= document.getElementById("menumenu")
let alertaretiro= document.getElementById("alertaretiro")
let alertaingreso= document.getElementById("alertaingreso")


var resultado;

bottom.addEventListener("click", validarDatos);
function validarDatos(e){
    e.preventDefault();
  for (let i = 0; i < cuentas.length; i++) {
    if (usuario.value == cuentas[i].nombre && password.value == cuentas[i].pass) {
      
    parra.classList.add("hide");
    second.classList.remove("hide")    
    return;
    }
  }
  alerta.classList.remove("hide")
  alerta.innerHTML;

  refrescar.addEventListener('click', _ => {
    location.reload();
})

}

buttonRetirar.addEventListener("click", retirarDine);

function retirarDine(){
  let element;
  let saldoDeRetiro;
  for (let i = 0; i < cuentas.length; i++) {
     element = cuentas[i].nombre;
  saldoDeRetiro=cuentas[i].saldo;
    if (exampleNombre.value == cuentas[i].nombre) {
    if (cuentas[i].saldo < 10 ) {
      alert("Saldo Insuficiente no puedes retirar")
    }else{
      resultado= cuentas[i].saldo - retirar.value;
      cuentas.splice(cuentas[i],1,{nombre:element,saldo:resultado,pass:123 });
    }
    if(resultado < 10){
      alertaretiro.classList.remove("hide");
      retirarVis.classList.add("hide")
setTimeout(()=>{location.reload()},3000)
    }else{
      menRetiro.classList.remove("hide");
      menuPrin.classList.remove("hide");
      retirarVis.classList.add("hide")
      userSaldo.innerHTML += resultado;
 userNombre.innerHTML += element;
 console.log(cuentas);
    }
   
    }
    
  }

}

//////////////////////////////////////////////////////////////////////////////// INGRESAR 
buttonIngresar.addEventListener("click", buttonIngresarCash);

function buttonIngresarCash(){
  let element;
  let saldoDeRetiro;
  for (let i = 0; i < cuentas.length; i++) {
     element = cuentas[i].nombre;
  saldoDeRetiro=cuentas[i].saldo;
    if (exampleNombre.value == cuentas[i].nombre) {
    if( saldoDeRetiro == 990){
console.log("No se puede hacer el deposito ya que la cuenta tiene el tope de saldo")
setTimeout(()=>{location.reload()},2000)
    }else{
      resultado=parseInt(saldoDeRetiro) + parseInt(ingresaDinerCuneta.value);
     

    }if(resultado >= 991){

      ingresaDinero.classList.add("hide");
      alertaingreso.classList.remove("hide")
      setTimeout(()=>{location.reload()},4000)
          }else{
            cuentas.splice(cuentas[i],1,{nombre:element,saldo:resultado,pass:123 });
            console.log(cuentas)
            menIngreso.classList.remove("hide")
            menuPrinIng.classList.remove("hide");
            ingresaDinero.classList.add("hide");
            userSaldoIngreso.innerHTML += resultado;
            userNombreIngreso.innerHTML += element;
   
          }
  }
  }
}







menu.addEventListener("click", regresarMenu);
function regresarMenu(){
  location.reload();
}

retirarDinero.addEventListener("click", visRetirar);
function visRetirar(){
    retirarVis.classList.remove("hide");
    second.classList.add("hide");
}

ingresaDiner.addEventListener("click", visIngresarDiner );
function visIngresarDiner(){
  ingresaDinero.classList.remove("hide");
  second.classList.add("hide");
}

estadoCuenta.addEventListener("click", visEstadoCuenta);

function visEstadoCuenta(){
  verDinero.classList.remove("hide");
    second.classList.add("hide");
    for (let i = 0; i < cuentas.length; i++) {
      let saldocuenta= cuentas[i].saldo;
      if (exampleNombre.value == cuentas[i].nombre) {
        dineCuenta.innerHTML += saldocuenta ;
      }
      
    }
    dineCuenta.innerHTML += saldocuenta;
    
}

menuPrinIng.addEventListener("click", regresar);
function regresar(){
  location.reload();
}
reglogin.addEventListener("click", regresarLog);

function regresarLog(){
  location.reload();
}



menumenu.addEventListener('click', _ => {
  verDinero.classList.add("hide");
  second.classList.remove("hide");
  
})