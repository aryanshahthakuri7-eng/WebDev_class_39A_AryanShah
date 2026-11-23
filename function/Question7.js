const validateWithdrawal = (amount, balance) => {
    return amount <= balance && amount % 500 === 0 && amount > 0;
};

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance) && amount + 25 <= balance) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
        console.log("Remaining Balance: Rs.", balance);
    }
    else {
        console.log("Withdrawal Failed!");
        console.log("Invalid amount or insufficient balance.");
        console.log("Remaining Balance: Rs.", balance);
    }
};

withdrawMoney(3000, 10000, validateWithdrawal);