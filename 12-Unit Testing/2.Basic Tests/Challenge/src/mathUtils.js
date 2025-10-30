

export const factorial=(a)=>{
  if(a<0) throw new Error("a negative number is passed.")
  if(a==0){
    return 1
  } else{
    return a*factorial(a-1)
  }
}

export const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
};


export const fibonacci=(n)=>{
  if (n < 0) throw new Error("number must be non-negative");

  if(n===0){
    return []
  } else if(n===1){
    return [0]
  }

  let fib=[0,1]
  for(let i=2; i<n;i++){
    fib.push(fib[i-1]+fib[i-2])
  }
  return fib
}
