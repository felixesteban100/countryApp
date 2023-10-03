import { CountryInfo } from "../types"

/* export function organizeData(data: CountryInfo[]) {
    return data.map((current) => {

        current.population = current.population.toLocaleString()

        current.startOfWeek = current.startOfWeek[0].toUpperCase() + current.startOfWeek.slice(1)

        current.continents = current.continents.reduce((accumulator, current) => `${accumulator}, ${current}`)

        current.currencies = current.currencies ?? ["None"]
        current.currencies = Object.values(current.currencies).map((current) => current.name)
        current.currencies = current.currencies.reduce((accumulator, current) => `${accumulator}, ${current}`)

        current.languages = current.languages ?? ["None"]
        current.languages = Object.values(current.languages).reduce((accumulator, current) => `${accumulator}, ${current}`)

        current.borders = current.borders ?? ["None"]
        current.borders = Object.values(current.borders).reduce((accumulator, current) => `${accumulator}, ${current}`)

        current.borders = current.borders ?? ["None"]
        current.timezones = Object.values(current.timezones).reduce((accumulator, current) => `${accumulator}, ${current}`)
        return current
    })
    // return shuffle(newArr)
} */

export function shuffle(array: CountryInfo[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function getContinentColor(continent: string) {
    switch (continent) {
        case "Asia": return "text-primary"

        case "Oceania": return "text-secondary"

        case "Europe": return "text-base-content"

        case "North America": return "text-error"

        case "Antarctica": return "text-info"

        case "South America": return "text-success"

        case "Africa": return "text-warning"

        default : return 'text-base-content'
    }
}