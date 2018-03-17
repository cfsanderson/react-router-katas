

// function count (potato) {
//   // make an empty object
//   let newObj = {}

//   // check to see if the string is empty, if so return the empty object
//   if (potato.length === 0) {
//     return newObj
//   } else {
//     // 
//     let sort = potato.split("")
//     for (let i = 0; i < sort.length; i++) {
      
//       console.log(sort[i])
//     }
//   }
// }
let string = "aabba"

function count(string) {
  let arr = []
  if (string.length === 0) {
    return {}
  } else {
    let sort = string.split("")
    for (let i = 0; i < sort.length; i++) {
      if (sort[i] === sort[i+1]) {
        arr.push(sort[i])
      }
    }
  }
  console.log(arr)
}

count(string);
// string.length === 0 ? newObj : console.log(string.length)
//
// https://www.codewars.com/kata/count-characters-in-your-string/train/javascript
