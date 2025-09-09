function fizzbuzz() {
    conditions = [num => num % 3 === 0, num => num % 5 === 0];
    partial_strings = ["Fizz", "Buzz"];

    for (let i = 1; i <= 100; i++) {
        let output = "";
        for (let j = 0; j < conditions.length; j++) {
            if (conditions[j](i)) {
                output += partial_strings[j];
            }
        }
        console.log(output || i);
    }

}

fizzbuzz();

