var data = {
    "abilities": [
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      },
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ],
    "base_experience": 64,
    "forms": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
      }
    ],
    "height": 7,
    "id": 1,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "moves": [
      {
        "move": {
          "name": "razor-wind",
          "url": "https://pokeapi.co/api/v2/move/13/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          }
        ]
      }
      ],
  
    "name": "bulbasaur",
    "order": 1,
    "species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "stats": [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      }
    ],
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "weight": 69
  }

//1
let weightStr = data.weight.toString();
console.log(weightStr);

let heightStr = data.height.toString();
console.log(heightStr);

//2
let weightInt = parseInt(weightStr);
console.log(weightInt);

let heightInt = parseInt(heightStr);
console.log(heightInt);

//3
let nameNew = data.name;
console.log(nameNew);

let nameN = name.length;
console.log(nameN);

let nameUpper = data.name.toUpperCase();
console.log(nameUpper);

//4
let nameInclud = data.name.includes('bulba');
console.log(nameInclud);

//5
let nameCut = data.name.slice(0,2);
console.log(nameCut)

let nameCut2 = data.name.slice(-2);
console.log(nameCut2);

console.log(nameCut.concat('',nameCut2));

//6 

let adding = name1.concat(name2);
console.log(adding)

//7

let types = data.types
console.log(types[0].type.name);
console.log(types[1].type.name);

for(let i=0; i<types.lenght; i++){
  console.log(types[i].type.name)
}

for (let el of types){
  console.log(el.type.name)
}

//8
let abilities = data.abilities;
console.log(Array.isArray(abilities));

//9
let lastElement =  data.abilities[abilities.length-1].ability.name;
console.log(lastElement);

//10
abilities.push(lastElement);
console.log(abilities);

//11

for(let i = 0; i< data.stats.length; i++){
  console.log(data.stats[i].base_stat)
}

for (let el of data.stats){
  console.log(el.base_stat, "for of loop")
}

//12
let newArr = [];

for(let el of data.stats){
  if(el.base_stat > 47){
   newArr.push(el.base_stat);
 }
}
console.log(newArr);
//13
let arrReverse = stats.reverse().join("");
console.log(arrReverse);

//14

let addNew = newArr.slice(1,3);
console.log(addNew);