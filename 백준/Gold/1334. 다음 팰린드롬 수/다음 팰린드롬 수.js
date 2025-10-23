const fs = require('fs')
const path = require('path')

const input =
String((BigInt(fs.readFileSync('/dev/stdin').toString().trim()) + 1n));
const isEven = input.length % 2 === 0;

let ans = ''


if(isPalendrome(input)){
  ans = input;
}else{

  const half = Math.ceil(input.length / 2)

  let left = input.slice(0, half);
  let right = input.slice(half);



  if(isEven){
    const reversedLeft = reverse(left);

    if(reversedLeft > right){
      ans += left+reversedLeft;
    }else{
      const newLeft = String(BigInt(left) + 1n);

      ans += newLeft + reverse(newLeft);
    }
  }else{
    left = left.slice(0, left.length-1);
    const reversedLeft = reverse(left);


    if(reversedLeft > right){
      ans += left+ input[half-1] +reversedLeft;
    }else{
      const newLeft = String(BigInt(left+input[half-1]) + 1n);
      const reversedLeft = reverse(newLeft.slice(0,newLeft.length-1));

      ans += newLeft + reversedLeft;
    }
  }

}

console.log(ans)


function reverse(string){
  let reversed = '';

  for(let i = string.length - 1 ; i >= 0 ; i--){
    reversed += string[i]
  }

  return reversed;
}

function isPalendrome(string){
  const isEven = string.length % 2 === 0;

  if(isEven){
    const left = string.slice(0, string.length/2);
    const right = string.slice(string.length/2);

    const reversedLeft = reverse(left);

    if(reversedLeft === right){
      return true;
    }else{
      return false;
    }

  }else{
    const half = Math.ceil(string.length / 2);
    const left = string.slice(0, half - 1);
    const right = string.slice(half);

    const reversedLeft = reverse(left);

    if(reversedLeft === right){
      return true;
    }else{
      return false;
    }
  }
}
