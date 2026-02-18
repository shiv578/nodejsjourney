// Level 1 – Single Account Banking
// • Create an account object with accountNumber, name, balance, transactions.
// • Implement functions: deposit, withdraw, checkBalance.
// • Deposit must be greater than 0.
// • Withdrawal must not exceed balance.
// • Record all transactions inside transactions arr
const readline = require("readline");

class Account {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposit Successful");
                        console.log("Balance: ",this.balance);


        } else {
            console.log("Invalid Amount");
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
        } else if (amount > 0) {
            this.balance -= amount;
            console.log("Withdrawal Successful");
                                    console.log("Balance: ",this.balance);

        } else {
            console.log("Invalid Amount");
        }
    }

    checkBalance() {
        console.log("Balance:", this.balance);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const acc = new Account(1000);

function menu() {
    console.log("\n1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Check Balance");
    console.log("5. Exit");

    rl.question("Choose option: ", (choice) => {
        if (choice === "1") {
            rl.question("Enter amount: ", (amt) => {
                acc.deposit(Number(amt));
                menu();
            });
        } else if (choice === "2") {
            rl.question("Enter amount: ", (amt) => {
                acc.withdraw(Number(amt));
                menu();
            });
        } else if (choice === "3") {
            acc.checkBalance();
            menu();
        } else if (choice === "5") {
            rl.close();
        } else {
            console.log("Invalid Option");
            menu();
        }
    });
}

menu();
