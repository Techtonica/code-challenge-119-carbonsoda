// # Different Robot Map
//
// You are working on the Robot from Chapter 7 of Eloquent JavaScript.
// After you have already written the `buildGraph` function,
// someone gives you an input file for a different town
// and they didn't follow the same format as the `const roads` array
// of strings in the book. So you need to write new code to process this different format.


function addRoad(startName, endingName) {
  console.log(`called addRoad, start: '${startName}' end: '${endingName}'`);
  /* the rest is the same as the book
   you DON'T need to implement this */
}

const otherRoads = [
  "Osito's Treehouse <=> Oscuro's Lair",
  "Zorro's Den <=> Bella's Casa",
  "Bella's Casa <=> Rayo's Mansion",
  "Oscuro's Lair <=> Bella's Casa",
  "Osito's Treehouse <=> Zorro's Den"
];

/*
  Process the "otherRoads" array of strings so you can call addRoad for each pair of locations.
*/
function processOthers(arr){
  let formatOthers = [];
  for(let road of arr){
    // Doing just this would match it to original roadsArr
    // formatOthers.push(road.replace(' <=> ', '-'));
    // This way matches it with addRoad()
    let endpoints = road.split(' <=> ');
    formatOthers.push({startName: endpoints[0], endingName: endpoints[1]});
  }
  return formatOthers;
}

module.exports = addRoad;
