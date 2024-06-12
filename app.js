// punto 4 
import fs from "node:fs"
import process from "process";
import util from "util"

// Punto 1 hecho
// punto 2 hecho
// punto 3 hecho

// punto 5
const readText = fs.readFileSync("./text.txt")
const data = readText.toString()
// punto 6
const contentProcess = util.inspect(process)
console.log(contentProcess)

// punto 7
const lineas = data.split("\n")
const matrix = lineas.map(linea => linea.length)
// punto 8 12
console.log(`El numero de líneas es de ${matrix.length}`)

// punto 9
const palabras = data.split(/\s+/)
const matrixPalabras = palabras.map(palabra => palabra.length)
// punto 10 12
console.log(`El numero de palabras es de ${matrixPalabras.length}`)

// punto 11
const letras = data.length
// punto 12
console.log(`El numero de letras es de ${letras}`)

console.log("----FIN----")


