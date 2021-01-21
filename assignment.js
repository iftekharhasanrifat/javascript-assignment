function kilometerToMeter(kilometer) {
    if (typeof kilometer == 'string') {
        return "Please input numerical Value Only";
    }
    else if (kilometer < 0) {
        return "Distance can't be negative";
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Quantity can't be negative";
    }
    else if (Number.isInteger(watch) == true && Number.isInteger(phone) == true && Number.isInteger(laptop) == true) {
        var watchCost = watch * 50;
        var phoneCost = phone * 100;
        var laptopCost = laptop * 500;
        var budgetCost = watchCost + phoneCost + laptopCost;
        return budgetCost;
    }
    else {
        return "Please input integer Values Only";
    }
}

function hotelCost(day) {
    var totalCost = 0;
    if (day < 0) {
        return "Day can't be negative";
    }
    else if (Number.isInteger(day) == true) {
        if (day <= 10) {
            totalCost = day * 100;
        }
        else if (day <= 20) {
            var firstPart = 10 * 100;
            var remaining = day - 10;
            var secondPart = remaining * 80;
            totalCost = firstPart + secondPart;
        }
        else {
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = day - 20;
            var thirdPart = remaining * 50;
            totalCost = firstPart + secondPart + thirdPart;
        }
        return totalCost;
    }
    else {
        return "Please input an integer value";
    }
}

function megaFriend(friends) {
    if (Array.isArray(friends) == true) {
        var namelength = 0;
        var biggestName;
        for (var i = 0; i < friends.length; i++) {
            var elementlength = friends[i].length;
            if (elementlength > namelength) {
                namelength = elementlength;
                biggestName = friends[i];
            }
        }
        return biggestName;
    }
    else {
        return "please input an array of names";
    }
}

var meter = kilometerToMeter(2.5);
console.log(meter);

var budget = budgetCalculator(2, 2, 3);
console.log(budget);

var totalCost = hotelCost(89);
console.log(totalCost);

var friends = ['iftekhar Hasan Rifat', 'Sudipta Nandan Aich', 'Nazmul Uzzal']
var biggestName = megaFriend(friends);
console.log(biggestName);