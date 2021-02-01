const arr = [1, 2, 9999, 3, 4, 5]

const masGrande = arr.reduce((acc, curr) => {
    console.log("acc", acc) // 1
    console.log("curr", curr) // 2


    return acc

    // if (acc > curr) {
    //     return acc
    // }
    // else {
    //     return curr
    // }

}, {})

console.log("masGrande", masGrande)







// const arr = [898989, 1, 2, 9999, 3, 4, 5]

// const masGrande = arr.reduce((acc, curr) => {
//   console.log('acc', acc) // 1
//   console.log('curr', curr) // 2


//   if (acc.masGrande > curr) {
//      // 
//   }
//   else {
//     acc.masGrande = curr
//   }

//   if (acc.masChico < curr) {
// //
//   }
//   else {
//     acc.masChico = curr
//   }

//   return acc
// }, {})

// console.log("mas Grande", masGrande)

// const numeros = [1, 2, 3, 4, 5]

// const suma = numeros.reduce((acc, curr) => {
//   console.log("acc", acc)
//   console.log("curr", curr)
//   return acc + curr
// }, 0)



/////////////////



// SORT 
// modifica el array original !! funcion IMPURA

// utilizado sin parametros, sirve solo para arrays de strings

// const nombres = ["Sol", "Flor", "Angie"]
// nombres.sort()
// console.log(nombres)

// sort puede recibir un parametro: una funcion

const numeros = [1, 2, 54, 21, 86, 44, 90]
const alumnas = [
  {
    nombre: "Sol", 
    edad: 17
  }, {
    nombre: "Angie",
    edad: 52
  }, {
    nombre: "Flor", 
    edad: 25
  }
]

alumnas.sort((a, b) => {
  console.log("a", a)
  console.log("b", b)

  if (a.edad > b.edad) {
    console.log("1")
    return 1
  }
  else if (b.edad > a.edad) {
    console.log("- 1")
    return - 1
  }
  else {
    console.log(0)
    return 0
  }
})

console.log(alumnas)


// EJERCICIOS

const artistas = [ // https://github.com/malerey/clase-70-ejercicios/blob/main/index.js

]

const artistasPorEdad = (edad, artistas) => {
    const artistasFiltrados = artistas.filter((artista) => {
        return artista.edad === edad
    })

    return artistasFiltrados

}

console.log(artistasPorEdad(24, artistas))

//////

const artistasConMasEntradasVendidas = (artistas) => {
    const artistaConMasEntradasVendidas = artistas.reduce.((acc, curr) => {
        console.log("acc", acc.ultimoRecital.entradasVendidas)
        console.log("curr", curr.ultimoRecital.entradasVendidas)
        if (acc.ultimoRecital.entradasVendidas > curr.ultimoRecital.entradasVendidas) {
            return acc
        }
        else {
            return curr
        }
    })
    return artistaConMasEntradasVendidas
}

console.log(artistaConMayorRecaudacion(artistas))


/////

const cantidadDeArtistasPorInstrumento = (artistas) => {
    return artistas.reduce((acc, curr) => {
        const instrumento = curr.instrumento
        console.log(acc[instrumento])

        // if (en el objeto no existe artista.instrumento) {
        //     agregar artista.instrumento al objeto
        // }
        // else {
        //     agregarle +1 al valor del artista.instrumento
        // }
    }, {

    })
}

console.log(cantidadDeArtistasPorInstrumento(artistas))