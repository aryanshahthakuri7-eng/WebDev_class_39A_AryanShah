const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    }
    else if (age < 18) {
        return 200;
    }
    else if (age < 60) {
        return 300;
    }
    else {
        return 200;
    }
};

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total - (total * 10 / 100);
    }
    else {
        return total;
    }
};

const bookTicket = (name, age, quantity, callback) => {
    const price = getTicketPrice(age);
    const total = calculateTotal(price, quantity);
    const finalAmount = callback(total, quantity);

    console.log("Customer:", name);
    console.log("Age:", age);
    console.log("Tickets:", quantity);
    console.log("Total Before Discount: Rs.", total);
    console.log("Discount: Rs.", total - finalAmount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Hari", 25, 5, applyDiscount);