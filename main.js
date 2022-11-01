let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [4, 5, 5, 5, 4, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10, 5];
let quiz1 = 38;
function get_sum(lab) {
    final_sum = 0
    for (let i = 0; i < lab.length; i++) {
        final_sum += lab[i];
    }
    return final_sum
}
function main (lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1) {
    sum1 = get_sum(lab1)
    sum2 = get_sum(lab2)
    sum3 = get_sum(lab3)
    sum4_5 = get_sum(lab4_5)
    sum6 = get_sum(lab6)
    sum8 = get_sum(lab8)
    sums = [sum1, sum2, sum3, sum4_5, sum6, sum8]
    all_sums = 0
    for (let i = 0; i < sums.length; i++) {
        all_sums += sums[i]
        total_score = all_sums * 60/280 + quiz1;
    }
    const results = {
        lab1: lab1, 
        lab2: lab2, 
        lab3: lab3, 
        lab4_5: lab4_5, 
        lab6: lab6,
        lab8: lab8,
        quiz1: quiz1, 
        sums: sums, 
        total_score: total_score, 
        };
    return results
}
let obj = main (lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1)
console.log(obj)