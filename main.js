
//1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

let car = {
    manufacturer: 'Hyundai',
    model: 'B',
    yearOfRelease: 1967,
    averagespeed: 160,

    // a) A method that displays the car info
    displayinfo() {
        console.log('Manufacturer: ' + this.manufacturer);
        console.log('Model: ' + this.model);
        console.log('Year of release: ' + this.yearOfRelease);
        console.log('Average speed: ' + this.averagespeed);
    },
    // b) A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.
    counttime(distance, avaragespeed){
        let time = distance / avaragespeed;
        console.log(time);
        let time1 = time;
        for(let i=0;i<=time1;i++){
        if(i % 4 == 0){
            time1--;
        }
        }
        console.log(time1);
    }
};

car.displayinfo();
car.counttime(500,120);


// 2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:
/*
A function for adding two fraction objects.
A function for subtracting two fraction objects.
A function for multiplying two fraction objects.
A function for dividing two fraction objects.
A function for simplifying a fraction object.
*/

let fraction1 = {
    numerator: 3,
    denumerator: 9
}
let fraction2 = {
    numerator: 2,
    denumerator: 4
};

// a) A function for adding two fraction objects.
function addfractions(fractionobject1, fractionobject2) {
    addDenumerator = fractionobject1.denumerator * fractionobject2.denumerator;
    addNumerator = fractionobject1.numerator*fractionobject2.denumerator + fractionobject2.numerator*fractionobject1.denumerator;
    console.log('AddFractions: ' + addNumerator + ' / ' + addDenumerator);
}

addfractions(fraction1, fraction2);

// b) A function for subtracting two fraction objects.
function substractfractions(fractionobject1, fractionobject2) {
    subDenumerator = fractionobject1.denumerator * fractionobject2.denumerator;
    subNumerator = fractionobject1.numerator*fractionobject2.denumerator - fractionobject2.numerator*fractionobject1.denumerator;
    console.log('SubFractions: ' + subNumerator + ' / ' + subDenumerator);
}

substractfractions(fraction1, fraction2);

// c) A function for multiplying two fraction objects.

function multiplying(fractionobject1, fractionobject2) {
    multDenumerator = fraction1.denumerator * fraction2.denumerator;
    multNumerator = fraction1.numerator * fraction2.numerator;
    console.log('MultiplyFractions: ' + multNumerator + ' / ' + multDenumerator);
}

multiplying(fraction1, fraction2);


// d) A function for dividing two fraction objects.

function divide(fractionobject1, fractionobject2) {
    divDenumerator = fraction1.denumerator * fraction2.numerator;
    divNumerator = fraction1.numerator * fraction2.denumerator;
    console.log('DivideFractions: ' + divNumerator + ' / ' + divDenumerator);
}

divide(fraction1, fraction2);


//3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:
 

let time = {
    hours: 16,
    minutes: 52,
    seconds: 50,
    // A method for displaying the time.
    displayTime(){
        console.log(this.hours + ':' + this.minutes + ':' + this.seconds);
    },
    
// A method for changing the time by a given amount of seconds.
    changebyseconds(seconds){
        if((this.seconds+seconds)>=60){
            this.minutes++;
            this.seconds=(this.seconds+seconds)%60;
        }
        else{
            this.seconds = this.seconds+seconds;
        }
        console.log('Changing the time by a given amount of seconds (30): ' + (this.hours + ':' + this.minutes + ':' + this.seconds));
    },
    
// A method for changing the time by a given amount of minutes.
    changebyminutes(minutes){
        if((this.minutes+minutes)>=60){
            this.hour++;
            this.minutes=(this.minutes+minutes)%60;
        }
        else{
            this.minutes = this.minutes+minutes;
        }
        console.log('Changing the time by a given amount of minutes (30): ' + (this.hours + ':' + this.minutes + ':' + this.seconds));
    },
    
// A method for changing the time by a given amount of hours.
    changebyhour(hours){
        if((this.hours+hours)>=24){
            this.hours=(this.hours+hours)%24;
        }
        else{
            this.hours = this.hours+hours;
        }
        console.log('Changing the time by a given amount of hours (7): ' + (this.hours + ':' + this.minutes + ':' + this.seconds));
    }
}
time.displayTime();
time.changebyseconds(50);
time.changebyminutes(50);
time.changebyhour(7);

