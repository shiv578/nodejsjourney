class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.accounts = [];
        this.nextAccountNumber = 1;
    }

    createAccount(name, initialBalance = 0) {
        const account = {
            accountNumber: this.nextAccountNumber++,
            name: name,
            balance: initialBalance
        };

        this.accounts.push(account);
        console.log("Account created:", account);
        return account.accountNumber;
    }

    findAccount(accountNumber) {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    deposit(accountNumber, amount) {
        const acc = this.findAccount(accountNumber);
        if (!acc) {
            console.log("Account not found");
            return;
        }

        if (amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        acc.balance += amount;
        console.log("Deposit successful");
    }

    withdraw(accountNumber, amount) {
        const acc = this.findAccount(accountNumber);
        if (!acc) {
            console.log("Account not found");
            return;
        }

        if (amount > acc.balance) {
            console.log("Insufficient balance");
            return;
        }

        acc.balance -= amount;
        console.log("Withdrawal successful");
    }

    transfer(fromAccNo, toAccNo, amount) {
        const fromAcc = this.findAccount(fromAccNo);
        const toAcc = this.findAccount(toAccNo);

        if (!fromAcc || !toAcc) {
            console.log("One or both accounts not found");
            return;
        }

        if (amount > fromAcc.balance) {
            console.log("Insufficient balance for transfer");
            return;
        }

        fromAcc.balance -= amount;
        toAcc.balance += amount;

        console.log("Transfer successful");
    }

    showAllAccounts() {
        console.log("All Accounts:");
        this.accounts.forEach(acc => {
            console.log(acc);
        });
    }
}

const bank = new Bank("Shivam Bank");

const acc1 = bank.createAccount("Shivam", 1000);
const acc2 = bank.createAccount("Rahul", 500);

bank.deposit(acc1, 200);
bank.withdraw(acc2, 100);
bank.transfer(acc1, acc2, 300);

bank.showAllAccounts();
