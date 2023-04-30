let pokedex = document.getElementById("semCaos")
let butao = document.getElementById("butao")

//torna possivel a api conectar
function pegaAPI(url){
    let request = new XMLHttpRequest()

    request.open("GET", url, false)

    request.send()

    return request.responseText
}

//conecta a api de fato

    for(i=0; i < 10; i++){
        data = pegaAPI(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        dadaDesc = pegaAPI(`https://pokeapi.co/api/v2/pokemon-species/${i + 1}/`)

        //transforma a api em array(Valeu jeisu)
        pokemons = JSON.parse(data)
        pokeDesc = JSON.parse(dadaDesc)

        if(pokemons.types[1] == null){
            pokedex.innerHTML += `<div id="pokedex">
        <h4>${pokemons.name}</h4>

        <img src="${pokemons.sprites.front_default}" alt="imagem do pokemon" id="spriteP">

        <div id="tipos">
            <p id="tipo1" class ="${pokemons.types[0].type.name}">${pokemons.types[0].type.name}</p>
        </div>

        <p id="desc">${pokeDesc.flavor_text_entries[1].flavor_text}</p>
    </div>`

        }else{
            pokedex.innerHTML += `<div id="pokedex">
            <h4>${pokemons.name}</h4>
    
            <img src="${pokemons.sprites.front_default}" alt="imagem do pokemon" id="spriteP">
    
            <div id="tipos">
                <p id="tipo1" class ="${pokemons.types[0].type.name}">${pokemons.types[0].type.name}</p>
                <p id="tipo2" class ="${pokemons.types[1].type.name}">${pokemons.types[1].type.name}</p>
            
            </div>
    
            <p id="desc">${pokeDesc.flavor_text_entries[1].flavor_text}</p>
        </div>` 

        }
    }
    
    butao.addEventListener("click", function ADD10 (){
        j = i + 10

        for(i=i; i < j; i++){
            data = pegaAPI(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
            dadaDesc = pegaAPI(`https://pokeapi.co/api/v2/pokemon-species/${i + 1}/`)
    
            //transforma a api em array(Valeu jeisu)
            pokemons = JSON.parse(data)
            pokeDesc = JSON.parse(dadaDesc)
    
            if(pokemons.types[1] == null){
                pokedex.innerHTML += `<div id="pokedex">
            <h4>${pokemons.name}</h4>
    
            <img src="${pokemons.sprites.front_default}" alt="imagem do pokemon" id="spriteP">
    
            <div id="tipos">
                <p id="tipo1" class ="${pokemons.types[0].type.name}">${pokemons.types[0].type.name}</p>
            </div>
    
            <p id="desc">${pokeDesc.flavor_text_entries[1].flavor_text}</p>
        </div>`
    
            }else{
                pokedex.innerHTML += `<div id="pokedex">
                <h4>${pokemons.name}</h4>
        
                <img src="${pokemons.sprites.front_default}" alt="imagem do pokemon" id="spriteP">
        
                <div id="tipos">
                    <p id="tipo1" class ="${pokemons.types[0].type.name}">${pokemons.types[0].type.name}</p>
                    <p id="tipo2" class ="${pokemons.types[1].type.name}">${pokemons.types[1].type.name}</p>
                
                </div>
        
                <p id="desc">${pokeDesc.flavor_text_entries[1].flavor_text}</p>
            </div>` 
    
            }
        }
    })