### Type ahead feature
---

- Fetch the data

- typing - filter to subset either city name or state name matches.

- Fetch API

it returns a promise, a promise is something will eventually comeback.

Data from fetch deosnt know what kind of data it is. So for understanding sake lets call it blob.
We need to convert that blob of data to what we need by looking at available methods of promise.
Here we call .json() on blob, and that in turn will return another promise. that data will be pushed into the empty array we created

- Filtering the array to subset

We make use of RegEx [Regular expressions are patterns used to match character combinations in strings.]
//wordtoMatch is whatever we search for, flags: 'g' is global, it will look into the entire for that string and 'i' is insensitive, going to match lower and upper case.