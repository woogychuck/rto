var RACES = ['Human','Formisan','Maton'];

var RACE_DATA = {};

RACE_DATA.Human = {
    idealPressure:5,
    idealTemp:7,
    hardiness: 1,
    atmosphere:'blue',
    requiresWater: true,
    requiresAtmosphere: true,
    researchRate:.8,
    industryRate:.8,
    tradeRate:1.4,
    growthRate:.1
};

RACE_DATA.Formisan = {
    idealPressure:6,
    idealTemp:5,
    hardiness:2,
    atmosphere:'white',
    requiresWater: true,
    requiresAtmosphere: true,
    researchRate:.6,
    industryRate:1.5,
    tradeRate:.8,
    growthRate:.2
};

RACE_DATA.Maton = {
    idealPressure:6,
    idealTemp:6,
    hardiness:2,
    atmosphere:'methane',
    requiresWater: false,
    requiresAtmosphere: false,
    researchRate:1.5,
    industryRate:1.5,
    tradeRate:.5,
    growthRate:.05
};