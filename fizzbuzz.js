function mod(n, m) {
    return n % m == 0;
}

function is_bong_case(n) {
    return mod(n, 11);
}

function is_reverse_case(n) {
    return mod(n, 17);
}

function fizzbuzz() {
    conditions = [num => mod(num,3), num => mod(num, 13), num => mod(num,5), num => mod(num,7)];
    partial_strings = ["Fizz", "Fezz", "Buzz", "Bang"];

    for (let i = 1; i <= 3315; i++) {
        if (is_bong_case(i)) {
            console.log("Bong");
            continue;
        }

        let output = [];
        for (let j = 0; j < conditions.length; j++) {
            if (conditions[j](i)) {
                output.push(partial_strings[j]);
            }
        }

        if (is_reverse_case(i)) {
            output.reverse();
        }

        output = output.join('');
        console.log(output || i);
    }

}

fizzbuzz();

