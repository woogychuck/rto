function randomRange(lowerBound, upperBound){
    var randMult = upperBound - lowerBound + 1;
    return lowerBound + Math.floor(Math.random() * randMult);
}