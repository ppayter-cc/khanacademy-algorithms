var factorial = function(n) {
    var result = 1;

    for(var i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
};

print("The value of 5! should be " + 5*4*3*2*1);
print("The value of 5! is " + factorial(5));
print("The value of 0! should be 1");
print("The value of 0! is " + factorial(0));

//Program.assertEqual(factorial(5), 120);
//Program.assertEqual(factorial(0), 1);

print("The value of 8! is " + factorial(8));
print("The value of 12! is " + factorial(12));
//Program.assertEqual(factorial(8), 40320);
//Program.assertEqual(factorial(12), 479001600);
