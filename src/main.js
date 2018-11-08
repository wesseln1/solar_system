 const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetsEl = document.getElementById("planets")
planets.forEach((planet) => {
    DOMComponent = `
    <div>
        <h1>${planet}</h1>
    </div>`
    console.log(DOMComponent)
    planetsEl.innerHTML += DOMComponent
})

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
/*
Use the map method to create a new array where the
first letter of each planet is capitalized. Use the
`toUpperCase()` method on strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let newArray = planets.map(function(x){
    return x.charAt(0).toUpperCase()+ x.slice(1)
})

console.log(newArray)
planetsEl.innerHTML += newArray
            /*
            Use the filter method to create a new array that
            contains planets with the letter 'e'. Use the `includes()`
            method on strings.
            
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
// })
// letterEArray = []
// nonEArray = []
// planets.forEach((x) => {
// if( x.includes("e")){
// letterEArray.push(x)
// } else (nonEArray.push(x))
// })

const planetArray = planets.filter(planet => planet.includes("e"))
console.log(planetArray)
// planetsEl.innerHTML += planetArray

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let newWord = words.reduce((previousWord, currenWord) => 
    `${previousWord} ${currenWord}`)
    
console.log(newWord)

