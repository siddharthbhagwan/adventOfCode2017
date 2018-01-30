// doesn't work

// let ip = `0 2 7 0`;
// let source = ip.trim().split(" ").map(no => parseInt(no, 10));

// let sequences = [];
// let iterations = 0;

// do {
//   sequences.push(source.toString().replace(/,/g,""));
//   source = redistribute(source);
//   iterations++;
// } while(!checkResults());

// console.log(iterations);

// function checkResults() {
//   let check = false;
//   for(let i=0; i<sequences.length; i++){
//     if (sequences[i] === source.toString().replace(/,/g,"")){
//       check = true;
//       break;
//     }
//   };
//   return check;
// }

// function redistribute(sequence) {
//   let max = Math.max(...sequence);
//   let index = sequence.indexOf(max);
//   let counter = 0;
//   sequence[index++] = 0;

//   while(max>0) {
//     if (index === sequence.length-1) { index = 0;}
//     sequence[index++]++;
//     --max;

//   }

//   return sequence;
// }
