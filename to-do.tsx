/* 
gap intre SVG si Corner Book


ADD FILTER FOR DESCRIPTION ---- TO DO 

**/

const arr = [2, 3, 4, 4, 4, 3, 2, 1, 1, 1];
const result = [2, 3, 4, 1];

const arraySet = new Set(arr); // Set (2,3,4,1);
const uniqueArray = [...arraySet];
const oneLinerDedupe = [...new Set(arr)];


function unique(array: Array<string | number>): Array<string | number> {
  let newArray = [];
  let count = 0;
  let start = false;

  for (i = 0, i < array.length, i++) {
    for (j = 0, j < newArray.length, j++) {
      if (array[i] == newArray[j]) {
        start = true;
      }
    }
    count++;
    if (count == 1 && start == false) {
      newArray.push(array[i]);
    }
    start = false;
    count = 0;
  }
}