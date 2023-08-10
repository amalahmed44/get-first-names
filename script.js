function getFirstNames(names) {
  const firstNames = [];

  for (let i = 0; i < names.length; i++) {
    const innerArray = names[i];
    if (Array.isArray(innerArray) && innerArray.length > 0) {
      const firstName = innerArray[0];
      firstNames.push(firstName);
    }
  }

  return firstNames;
}

const namesArray = [["John", "Doe"], ["Jane", "Smith"], ["Michael", "Johnson"]];
console.log(getFirstNames(namesArray)); 
