myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {
//bugs found i=1 & <= removed = changed 1 to 0 to make function work
myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);


function numbers(i){
    if(typeof i !=='number'){
        throw new Error("NAN");
        
    }
    if(i < 0 || i > 100){
        throw new Error("NAN not 1-100");
        
    }
    return i;
}
class CustomException extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomException';
    }
}

function validateNumber(i) {
    if (typeof i !== 'number') {
        throw new CustomException('N');
    }
    if (i < 0 || i > 100) {
        throw new CustomException('out of range (0-100)');
    }
    return i;
}
try {
    let result = validateNumber(0); // Change this value to test different inputs
    console.log('number:', result);
} catch (error) {
    if (error instanceof CustomException) {
        console.error('Exception caught:', error.message);
    } else {
        console.error('error occurred:', error);
    }
}
