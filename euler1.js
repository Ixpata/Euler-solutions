var sum_multiples = function (number) {
    multiples = 0;
    i=1;
    while (i < number) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples = multiples + i;
            i++;
        } else {
            i++;
        }
    }
    console.log(multiples);
};

sum_multiples(1000);