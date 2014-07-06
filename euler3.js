function isPrime(n) {
  if (n < 2) {
    return false;}
 if (n != Math.round(n)) {
    return false;}

 for (var x = 2; x <= Math.sqrt(n); x++) {
    if (n % x === 0) {return false;}
  }
  return true;
 
}


t=0;

largestPrime = function(number) {
    for (i = 1; i < number + 1; i++) {
        if (isPrime(i) !== true || number % i !== 0 || i<t) {
           t = t;
           }
           else {
              t = i;
            }
           
        }
        console.log(t);
    };
          
largestPrime(600851475143);