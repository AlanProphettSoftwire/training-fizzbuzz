function mod(n, m) {
    return n % m == 0;
}

function is_bong_case(n) {
    if (mod(n, 11)) {
        return true;
    }
    return false;
}

function fizzbuzz() {
    conditions = [num => mod(num,3), num => mod(num,5), num => mod(num,7)];
    partial_strings = ["Fizz", "Buzz", "Bang"];

    for (let i = 1; i <= 100; i++) {
        if (is_bong_case(i)) {
            console.log("Bong");
            continue;
        }

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

