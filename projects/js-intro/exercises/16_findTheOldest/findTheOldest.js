const findTheOldest = function (array) {
  let oldest;
  let age1 = 0;
  let age2 = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    // a check for if the person in the next iteration is undefined or not to prevent overflow.
    if (array[i + 1] != undefined) {
      // checks if someone's year of death is undefined and if their year of birth is less than the next person's. which means they SHOULD be the oldest...
      // this might break if for example someone way later has a way lesser year of birth....
      if (
        array[i].yearOfDeath == undefined &&
        array[i].yearOfBirth < array[i + 1].yearOfBirth
      ) {
        oldest = array[i];
        break;
        // otherwise it'll get the person and the next person's ages and compare them to find out the oldest person.
      } else {
        age1 = array[i].yearOfDeath - array[i].yearOfBirth;
        age2 = array[i + 1].yearOfBirth - array[i].yearOfDeath;
        if (age1 > age2) {
          oldest = array[i];
        } else {
          oldest = array[i + 1];
        }
      }
    } else {
      break;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
