const fs = require('fs')

let number = +fs.readFileSync('/dev/stdin').toString().trim();


if(number === 1){

}else{
  let ans = ''

  let divider = 2;

  while(true){
    if(number % divider === 0){
      number = number / divider;
      
      ans += divider + '\n'
    }else{
      divider++;
    }

    if(divider > number) break;
  }

  console.log(ans)
}


