function generatePlanetByZone(planet, zone){
    var candidates = [];

    switch(zone){
        case 'inner':
            candidates = [
                {type: 'barren', frequency: 50},
                {type: 'gas', frequency: 30},
                {type: 'desert', frequency: 15},
                {type: 'magma', frequency: 5}
            ];
            break;
        case 'gold':
            candidates = [
                {type: 'barren', frequency: 10},
                {type: 'semibarren', frequency: 10},
                {type: 'gas', frequency: 5},
                {type: 'asteroids', frequency: 5},
                {type: 'cauldron', frequency: 10},
                {type: 'ocean', frequency: 15},
                {type: 'forest', frequency: 10},
                {type: 'arid', frequency: 15},
                {type: 'desert', frequency: 20}
            ];
            break;
        case 'middle':
            candidates = [
                {type: 'barren', frequency: 10},
                {type: 'semibarren', frequency: 5},
                {type: 'gas', frequency: 60},
                {type: 'asteroids', frequency: 10},
                {type: 'arid', frequency: 5},
                {type: 'desert', frequency: 10}
            ];
            break;
        case 'outer':
            candidates = [
                {type: 'barren', frequency: 20},
                {type: 'gas', frequency: 10},
                {type: 'asteroids', frequency: 10},
                {type: 'ice', frequency: 50},
                {type: 'desert', frequency: 10}
            ];
            break;
    }

    var seed = Math.floor(Math.random() * 101);
    var frequency = 0;
    for(var i = 0; i < candidates.length; i++){
        frequency += candidates[i].frequency;
        if(seed <= frequency){
            return generatePlanetByType(planet, candidates[i].type, zone);
        }
    }
}

function generatePlanetByType(planet, type, zone){
    planet.type = type;
    planet.zone = zone;
    var tempModifier = 0;
    if(zone == 'inner'){
        tempModifier = 2;
    }else if(zone == 'middle'){
        tempModifier = -2;
    }else if(zone == 'outer'){
        tempModifier = -4;
    }
    switch(type){
        case 'arid':
            planet.size = randomRange(3,6);
            planet.temp = 5 + tempModifier;
            planet.atmosphereDensity = randomRange(3,7);
            planet.atmosphereType = getHabitableAtmosphere(0,4);
            planet.water = randomRange(2,3);
            planet.ice = randomRange(0,1);
            planet.maxSettlements = Math.floor(planet.size/2);
            break;
        case 'asteroids':
            planet.size = 1;
            planet.temp = 0;
            planet.ice = randomRange(1,4);
            break;
        case 'barren':
            if(zone == 'outer'){
                //No giant terrestrial planets in the boonies
                planet.size = randomRange(1,3);
            }else{
                planet.size = randomRange(1,7);
            }
            planet.temp = 2 + (tempModifier >= -2 ? tempModifier : -2);
            planet.maxSettlements = randomRange(1,2);
            break;
        case 'cauldron':
            planet.size = randomRange(3,6);
            planet.temp = randomRange(7,10);
            planet.atmosphereDensity = randomRange(7,10);
            planet.atmosphereType = 'hostile';
            break;
        case 'desert':
            planet.size = randomRange(3,6);
            planet.temp = 5 + tempModifier;
            planet.atmosphereDensity = randomRange(2,5);
            planet.atmosphereType = 'hostile';
            if(planet.temp <= 5){
                planet.ice = randomRange(0,2);
            }
            planet.maxSettlements = Math.floor(planet.size/2);
            break;
        case 'forest':
            planet.size = randomRange(3,6);
            planet.temp = 4 + randomRange(0,3);
            planet.atmosphereDensity = randomRange(4,6);
            planet.atmosphereType = getHabitableAtmosphere(2,5);
            planet.water = randomRange(3,5);
            planet.ice = randomRange(0,1);
            planet.maxSettlements = planet.size;
            break;
        case 'gas':
            planet.size = randomRange(7,10);
            planet.temp = 5 + tempModifier + (10 - planet.size);
            planet.atmosphereDensity = randomRange(8,10);
            planet.atmosphereType = getGasAtmosphere(planet.temp);
            planet.terrestrial = false;
            break;
        case 'ice':
            planet.size = randomRange(1,3);
            planet.temp = 0;
            planet.ice = randomRange(5,10);
            break;
        case 'magma':
            planet.size = randomRange(1,4);
            planet.temp = 10;
            break;
        case 'ocean':
            planet.size = randomRange(3,6);
            planet.temp = 3 + randomRange(0,4);
            planet.atmosphereDensity = randomRange(4,6);
            planet.atmosphereType = getHabitableAtmosphere(2,4);
            planet.water = randomRange(5,10);
            planet.ice = randomRange(0,2);
            break;
        case 'semibarren':
            planet.size = randomRange(1,7);
            planet.temp = 4 + tempModifier;
            planet.atmosphereDensity = randomRange(1,3);
            planet.atmosphereType = getHabitableAtmosphere(0,2);
            planet.water = randomRange(0,1);
            if(planet.temp <= 5){
                planet.ice = randomRange(0,2);
            }
            break;
    }

    generateMoons(planet);
    generateFactors(planet);
}

function getHabitableAtmosphere(lowRange, highRange){
    var atmoSeed = randomRange(lowRange,highRange);
    var atmoOptions = ['hostile','toxic','marginal'];
    if(atmoSeed > 2){
        return 'breathable';
    }else{
        return atmoOptions[atmoSeed];
    }
}

function getGasAtmosphere(planetTemp){
    if(planetTemp <= 3){
        //Ice Giant
        return 'ammonia';
    }else if(planetTemp <= 6 ){
        //Jovian
        return 'water';
    }else if(planetTemp <= 7){
        //Hot Jupiter
        return 'alkali';
    }else{
        //Glowing Gas Giant
        return 'silica';
    }
}

function generateMoons(planet){
}

function generateFactors(planet){
}