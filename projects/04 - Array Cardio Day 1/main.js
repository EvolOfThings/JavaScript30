
       // Get your shorts on - this is an array workout!
       // ## Array Cardio Day 1

       // Some data we can work with

       const inventors = [
         { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
         { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
         { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
         { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
         { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
         { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
         { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
         { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
         { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
         { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
         { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
         { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
       ];

       const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

       // Array.prototype.filter()

       // 1. Filter the list of inventors for those who were born in the 1500's
       // const bornInFifteen = inventors.filter(inventor => {
       //     if (inventor.year >= 1500 && inventor.year < 1600) {
       //        return true;
       //        // we want to save it
       //     }
       // });

   // The above function can be just written in this one line

       const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
       console.table(fifteen); // outputs in table format

      //  const bornfif = inventors.filter(inventor => {
      // if(inventor.year >= 1500 && inventor.year < 1600) {
      //   return true;
      // }
      // });
      // console.table(bornfif);



       // Array.prototype.map()
       // 2. Give us an array of the inventors' first and last names
       // const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
       // console.log(inventorsNames);


       // Array.prototype.sort()
       // 3. Sort the inventors by birthdate, oldest to youngest
     // a is like the first person and b is the second person

       // const oldToYoung = inventors.sort(function(a, b){
       //   if(a.year > b.year) {
       //     return 1
       //   } else {
       //     return -1
       //   }
       // });

       const oldToYoung = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

       //one line code with ternary operator

   // const oldToYoung = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

       console.table(oldToYoung);



       // Array.prototype.reduce()
       // 4. How many years did all the inventors live?
       // total is like what you've returned from this function last time
       // 0 is passed cuz twe want toal to be set to 0 initially otherwise to would be undefined
       const totesYears = inventors.reduce((total, inventor) => {
         return total + (inventor.passed - inventor.year);
       }, 0);
       console.log(totesYears);


       // 5. Sort the inventors by years lived
       // const oldest = inventors.sort((a, b) => {
       //   const lastInventor = a.passed - a.year;
       //   const nextInventor = b.passed - b.year;
       //   if(lastInventor > nextInventor) {
       //     return -1;
       //   } else {
       //     return 1;
       //   }
       // // single line code  // return lastInventor > nextInventor ? -1 : 1;
       // });

const oldest = inventors.sort(function(a, b) {
  const last = a.passed - a.year;
  const next = b.passed - b.year;
    return last > next ? -1 : 1;
});




   console.table(oldest);

       // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
       // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

   // this code ahould be run on console against wiki page
       // const category = document.querySelector('.mw-category'); // mw-category is the class from the link that has the DOM
       // const links =[...category.querySelectorAll('a')]; // we fish out only the links and this gives us NodeList, we need to convert that into array to perform map() or other array methods

       // //conversation from NodeListto array can be done in two ways
       // const de = links
       //                 .map(link => link.textContent) /// it will map
       //                 .filter(streetName => streetName.includes('de'));


       // 7. sort Exercise
       // Sort the people alphabetically by last name
       // const alphabetically = people.sort((lastOne, nextOne) => {
       //  // const breakThem = lastOne.split(', '); // we split it at , and space. we get array
       // const [aLast, aFirst] = lastOne.split(', '); // here they are separate variables
       // const [bLast, bFirst] = nextOne.split(', ');
       // return aLast > bLast ? 1 : -1;
       // });

      const alphabetically = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
      });
       console.table(alphabetically);




       // 8. Reduce Exercise
       // Sum up the instances of each of these
       const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
       // const  automobile = data.reduce((obj, item) => {
       //   console.log(obj);
       //   console.log(item);
       //   if(!obj[item]){
       //     obj[item] = 0;
       //   }
       //   obj[item]++;
       //   return obj;
       // }, {});

       const automobile = data.reduce((obj, item) => {
        // console.log(obj);
        if(!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
       }, {});

   console.table(automobile);




                                      ///////////////PRACTICE SESSION \\\\\\\\\\\\\\\\\\\\\
                                      ////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



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

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    // const alphy = people.sort((lastOne, nextOne) => {
    //     const [aLast, aFirst] = lastOne.split(' ');
    //     const [bLast, bFirst] = nextOne.split(' ');
    //     return aLast > bLast ? 1 : -1;
    // })

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    // const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    //     const auto = data.reduce((obj, item) => {
    //         if(!obj[item]) {
    //             obj[item] = 0;
    //         }
    //         obj[item]++;
    //         return obj;
    //     }, {})












