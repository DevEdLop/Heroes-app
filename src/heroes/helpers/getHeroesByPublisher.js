import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics']

    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} no esta permitido`) 
    }

    return heroes.filter(hero => hero.publisher === publisher);
}