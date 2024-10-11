let string = "";
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        string += i; 
    } else {
        string += (i+" - ") 
    }
}
console.log(string);