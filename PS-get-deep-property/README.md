# PS-get-deep-property exercise

## Instructions

- Using vanilla javascript, create a function that gets the value of a property at a given path
- Example:
  - If given the object: {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}}
  - And given the path: 'person.name.lastName'
  - The output would be: 'LastName'
- After you complete the exercise, provide any notes on your code below such as how to run your example

## Candidate Notes:
- You can check the code in below way.
- There is many use case, I can attach to this like array, array inside object etc which can be improved to be better get method.
- Below code is exist in `get.js`
```
const sampleObject = {
  person: {
    name: {
      first: 'FirstName',
      middleInitial: 'I', 
      lastName: 'LastName'
    }
  }
};

console.log('Person Name: ', get(sampleObject, 'person.name', 'not exist'));
// Outputs: Person Name:  { first: 'FirstName', middleInitial: 'I', lastName: 'LastName' }

console.log('ABC: ', get(sampleObject, 'person.abc', 'not exist'));
// Outputs: ABC:  not exist

console.log('LastName: ', get(sampleObject, 'person.name.lastName', 'not exist'));
// Outputs: LastName:  LastName

console.log('XYZ: ', get(sampleObject, 'person.name.xyz', 'not exist'));
// Outputs: XYZ:  not exist
```
