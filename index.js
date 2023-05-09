async function getStarshipModelByCharacterId(id) {

    // beginanswer

    //ambil list starship
    const peopleResponse = await fetch('https://swapi.dev/api/people/' + id );
    const peopleData = await peopleResponse.json();

    const starshipURLs = peopleData.starships;

    const result = []

    for(let i = 0; i < starshipURLs.length ; i++){
        const starshipResponse = await fetch(starshipURLs[i]);
        const starshipData = await starshipResponse.json();
        
        result.push(starshipData.model);
    }

    return result

    
    //endanswer
}

getStarshipModelByCharacterId(1)
    .then(result => console.log(result))
    .catch((err) => console.log(err));