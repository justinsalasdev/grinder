export function solution1(distances: number[], fuel: number[], mpg: number) {
  const numberOfCities = distances.length;
  let milesRemaining = 0;

  let startingCityCandidateIdx = 0;
  let milesRemainingAtStartingCityCandidate = 0;

  for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
    const distanceFromPreviousCity = distances[cityIdx - 1];
    const fuelFromPreviousCity = fuel[cityIdx - 1];

    milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;

    if (milesRemaining < milesRemainingAtStartingCityCandidate) {
      milesRemainingAtStartingCityCandidate = milesRemaining;
      startingCityCandidateIdx = cityIdx;
    }
  }

  return startingCityCandidateIdx;
}
