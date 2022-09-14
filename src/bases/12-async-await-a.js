const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Tenemos un valor en la promesa')
            reject('REJECT en mi promesa')
        }, 1000);
    })
}

const medirTiempoAsync = async() => {

    try {
        console.log('Inicio');

        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log('Fin');

        return 'fin de medir tiempo async'
    } catch (error) {
        //return 'catch en medirTiempoAsync'
        throw 'Error en medirTiempoAsync'
    }


}

medirTiempoAsync()
    .then(valor => console.log('THEN Exitoso:', valor))
    .catch(err => console.log('Error:', err))

// async convierte una funcion a otra que devuelve una promesa
// throw sirve para lanzar el error que recoge el catch