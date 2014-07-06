fibonacci = function(a,b) {
    sum = 2;
    next = a + b;
    while (next <= 4000000) {
        if (next % 2 === 0) {
            sum = sum + next;
        }
        else {
            sum = sum;
        }
        ghost_b = next;
        next = next + b;
        b = ghost_b;
    }
    console.log(sum);
};

fibonacci(1,2);