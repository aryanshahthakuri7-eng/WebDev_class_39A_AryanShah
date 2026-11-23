const getFoodPrice = (foodName) => {
    if (foodName === "Burger") {
        return 250;
    }
    else if (foodName === "Pizza") {
        return 500;
    }
    else if (foodName === "Momo") {
        return 150;
    }
    else if (foodName === "Chowmein") {
        return 180;
    }
    else {
        return 0;
    }
};

const calculateServiceCharge = (total) => {
    return total * 5 / 100;
};

const calculateOrder = (foodName, quantity, callback) => {
    const price = getFoodPrice(foodName);

    if (price === 0) {
        return null;
    }

    const foodAmount = price * quantity;
    const serviceCharge = callback(foodAmount);

    return {
        foodAmount: foodAmount,
        serviceCharge: serviceCharge,
        finalAmount: foodAmount + serviceCharge
    };
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    const receipt = callback(foodName, quantity, calculateServiceCharge);

    if (receipt === null) {
        console.log("Invalid food item!");
        return;
    }

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", receipt.foodAmount);
    console.log("Service Charge: Rs.", receipt.serviceCharge);
    console.log("Final Amount: Rs.", receipt.finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);