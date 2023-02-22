//Intenta tipar una pluck function!

import { IndexType } from "typescript";

//TIP! Buscar la palabra reservada keyof y usar extends!
let arr = [{a: 'lkfsdlkf'}, {b: 'fsdfs'}]
function pluck<U extends any[], V extends string>(arreglo: U, prop: V) {
    return arreglo.map((object) => {
        return object[prop]
    }) 
}

let pluked = pluck(arr, 'b');