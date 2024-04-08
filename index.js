// importing inquirer
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userinput = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "enter first number"
        },
        {
            type: "number",
            name: "num2",
            message: "enter second number"
        },
        {
            type: "list",
            name: "operator",
            choices: ["addition", "subtraction", "multiplication", "division"],
            message: "select the operator"
        }
    ]);
    const num1 = userinput.num1;
    const num2 = userinput.num2;
    const operator = userinput.operator;
    console.log(num1, num2, operator);
    // now we use some conditions here
    if (num1 && num2)
        if (operator === "addition") {
            console.log(`\n the answer of ${num1} + ${num2} = ${num1 + num2}`);
        }
        else if (operator === "subtraction") {
            console.log(`\n the answer of ${num1} - ${num2} = ${num1 - num2}`);
        }
        else if (operator === "multiplication") {
            console.log(`\n the answer of ${num1} * ${num2} = ${num1 * num2}`);
        }
        else if (operator === "division") {
            console.log(`\n the answer of ${num1} / ${num2} = ${num1 / num2}`);
        }
        else {
            console.log(`please enter a valid number`);
        }
    const calculate = await inquirer.prompt({
        type: "confirm",
        name: "more",
        message: "do you want more calculation?",
        default: false
    });
    if (!calculate.more) {
        loop = false;
        console.log("\n Thanks for using CLI calculator");
    }
}
