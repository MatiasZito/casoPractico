class Usuario {
    constructor (monto,nombre,apellidoPaterno,apellidoMaterno,celular,email,institucion,modelos)
    {
        this.monto=monto;
        this.nombre=nombre;
        this.apellidoPaterno=apellidoPaterno;
        this.apellidoMaterno=apellidoMaterno;
        this.celular=celular;
        this.email=email;
        this.institucion=institucion;
        this.entidad=entidad;
    };
    
    registrar(montoIngresado,nombreIngresado,apellidoPaternoIngresado,apellidoMaternoIngresado,celularIngresado,emailIngresado,institucionIngresado,entidadIngresados)
    { 
        const newRegistro = new Usuario(montoIngresado,nombreIngresado,apellidoPaternoIngresado,apellidoMaternoIngresado,celularIngresado,emailIngresado,institucionIngresado,entidadIngresados)

        localStorage.setItem(nombreIngresado,JSON.stringify(newRegistro));
    };
};
