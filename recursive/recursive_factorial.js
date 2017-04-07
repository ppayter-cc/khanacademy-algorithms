var factorial = function(n) {
	// base case:
	if(n === 0) {
	    return 1;
	}

	// recursive case:
	return factorial(n-1) * n;
};

print("The value of 0! is " + factorial(0) + ".");
print("The value of 5! is " + factorial(5) + ".");
print("The value of 8! is " + factorial(8) + ".");
print("The value of 12! is " + factorial(12) + ".");

//Program.assertEqual(factorial(0), 1);
//Program.assertEqual(factorial(5), 120);
//Program.assertEqual(factorial(8), 40320);
//Program.assertEqual(factorial(12), 479001600);
