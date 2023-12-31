function convertToRoman(num) {
    var roman = "";
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i < decimal.length; i++) {
        while (decimal[i] <= num) {
            roman += romanNumeral[i];
            num -= decimal[i];
        }
    }
    return roman;
}
