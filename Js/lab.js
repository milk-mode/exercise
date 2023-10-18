let firstName="Davis"
let lastName="Tuc"
let dateBirth=new Date("January 01,1987");

function caught_speeding(speed, is_birthday) {
  if (speed <= 60 && is_birthday === false) {
    return 0;
  } else if (speed <= 65 && is_birthday === true) {
    return 0;
  } else if (speed >= 61 && speed <= 80 && is_birthday === false) {
    return 1;
  } else if (speed >= 66 && speed <= 85 && is_birthday === true) {
    return 1;
  } else if (speed >= 81 && is_birthday === false) {
    return 2;
  } else if (speed >= 86 && is_birthday === true) {
    return 2;
  }
}
//the comment
/*roup comment*/ 
console.log(caught_speeding(60, false))
console.log(caught_speeding(65, false))
console.log(caught_speeding(65, true))

let formatter1=new Intl.NumberFormat('se-SE',{style:'currency',currency:'SEK'});
//console.log(`Swedish:${formatter1.format(5833.33)}`);

let matrix= [[1,2,3],[4,5,6]]
console.log(matrix)
