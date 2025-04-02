const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const people = [];

for (let i = 1; i <= N; i++) {
  const [x, c] = input[i].split(' ');
  people.push([Number(x), c]);
}

people.sort((a,b)=>a[0]-b[0]);

let ans = 0;

for(let i = 0 ; i < people.length ; i++){
  let score = 0;
  const currentPosition = people[i][0];
  const currentAlphabet = people[i][1];

  score += convertCharToScore(currentAlphabet);

  for(let j = i+1 ; j < people.length ; j++){
    const nextPosition = people[j][0];
    const nextAlphabet = people[j][1];

    if(nextPosition - currentPosition > K)break;

    score += convertCharToScore(nextAlphabet);
  }

  ans = ans > score ? ans : score;
}

console.log(ans)

function convertCharToScore(alphabet){
  if(alphabet === 'G')return 1;
  else return 2;
}