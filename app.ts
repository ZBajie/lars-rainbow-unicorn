const animals: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"]

console.log("animals: ", animals)

interface cars {
  color: string
  year: number
  Rust: boolean
}

const volvo: cars = {
  color: "black",
  year: 2000,
  Rust: true,
}

console.log("volvo: ", volvo)

function hejAnimal(array: string[]): void {
  array.forEach((item: string) => console.log(`Hej ${item}`))
}

hejAnimal(animals)
