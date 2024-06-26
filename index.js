// Code your solution in this file!
let driverNames = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (driverNames) => {
    return driverNames.slice(0, 2);
}
console.log(returnFirstTwoDrivers(driverNames));

const returnLastTwoDrivers =(driverNames) => {
    return driverNames.slice(2);
}
console.log(returnLastTwoDrivers(driverNames));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  function selectDifferentDrivers(driverNames, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(driverNames);
  }
 
console.log(selectDifferentDrivers());