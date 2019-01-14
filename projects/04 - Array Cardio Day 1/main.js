    // Array.prototype.filter()

    // 1. Filter the list of inventors for those who were born in the 1500's
    // const fiftees = inventors.filter(inventor => {
    //     if(inventor.year >= 1500 && inventor.year < 1600) {
    //         return true;
    //     }
    // });
    // console.log(fiftees);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    // const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    // console.log(names);

        // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
  // a is like the first person and b is the second person
  // const oldToYoung = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

      // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    // const totes = inventors.reduce((total, inventor) => {
    //     return total + (inventor.passed - inventor.year);
    // }, 0);

   // 5. Sort the inventors by years lived
// const oldest = inventors.sort((a, b) => {
//     const lastInventor = a.passed - a.year ;
//     const nextInventor = b.passed - b.year ;
//     return lastInventor > nextInventor ? -1 : 1;
// })



