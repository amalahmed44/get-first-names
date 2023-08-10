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

const namesArray = [["Ahmed","Aisha","Amina"],["Jaamac","Khadijah","Layla"],["Mohamed","Ali"]]
console.log(getFirstNames(namesArray)); 
