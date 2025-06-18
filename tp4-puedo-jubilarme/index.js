function Genero(genero, edad){
    genero = genero.toUpperCase();
    const edadF = 60
    const edadM = 65
    switch(genero){
        case 'MASCULINO':
            let mensajeM = edad >= edadM ? 'Se puede jubilar' : 'No se puede jubilar';
            return mensajeM;
        case 'FEMENINO':
            let mensajeF = edad >= edadF ? 'Se puede jubilar' : 'No se puede jubilar';
            return mensajeF;
        default:
            let mensajeD = 'Ingresar un genero válido (MASCULINO o FEMENINO)';
            return mensajeD;
    }
}


let genero = prompt('Género de la persona: ');
let edad = parseInt(prompt('Edad de la persona: '));

if(genero === null || genero.trim() === ''){
    alert('No se ingresó el género. Ingresar un género válido (MASCULINO o FEMENINO).');
}else {
    if(isNaN(edad) || edad < 0){
        alert('Edad no válida. Ingresar un número.');
    }else {
        let resultado = Genero(genero, edad);
        console.log(`El genero es: ${genero} y la edad es: ${edad}. \n ¿Se puede jubilar? ${resultado}`);
    }
}

