/*Cédula, apellidos, nombres, dirección, semestre, 
paralelo, correo electrónico*/
var ValidarDatosCliente= function(){
    var cedula = document.getElementById("cedula").value;
    var apellidos = document.getElementById("apellidos").value;
    var nombres = document.getElementById("nombres").value;
    var direccion = document.getElementById("direccion").value;
    var semestre = document.getElementById("semestre").value;
    var paralelo = document.getElementById("paralelo").value;
    var correo = document.getElementById("correo").value;

    if (cedula == "") {
    document.getElementById("cedula").focus();
    } else {
    if (apellidos == "") {
    document.getElementById("apellidos").focus();
    } else {
    if (nombres == "") {
    document.getElementById("nombres").focus();
    } else {
    if (direccion == "") {
    document.getElementById("direccion").focus();
    } else {
    if (semestre== "") {
        document.getElementById("semestre").focus();
    } else {
    if (paralelo== "") {
        document.getElementById("paralelo").focus();
    } else {      
    if (correo == "") {
    document.getElementById("correo").focus();
    } else {
    console.log(cedula+" "+apellidos+" "+nombres+" "+direccion+" "+semestre+" "+paralelo+"  "+correo);
    document.getElementById("cedula").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("nombres").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById ( "semestre" ).value = "";
    document.getElementById ( "paralelo" ).value = "";
    document.getElementById ( "correo" ).value = "";
    }
}
}
}
}
} 
}
}

//guardarclientesLocalStorage 
function bdguardar(req, res, next) {
  var pupID = req.body.usuario;
  db.any('select * from cliente.usuarioadmin where cedula= $1', cedulaID)
    .then(function (data) {
      localStorage.Usuariosa=data;
      if(data[0]==null){
       res.status()
        .json({
          status: 'No existe D:'
        }); 

  };