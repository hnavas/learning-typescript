function suma(a: number | string, b: number | string): number | string | void {
    if(typeof a === "number" && typeof b === "number") return a + b;
    if(typeof a === "string" && typeof b === "string") return a + b;
}
// Logra que esta funcion tambien concatene strings

let array = [1, 'a', []];
function elem <type>(arr: type[]): type {
    return arr[0]
}

let elem1 = elem(array)
console.log(typeof elem1)
export {};