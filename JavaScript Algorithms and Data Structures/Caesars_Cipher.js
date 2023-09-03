function rot13(str) {
    var decoded = "";
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            decoded += String.fromCharCode((charCode - 65 + 13) % 26 + 65);
        } else {
            decoded += str[i];
        }
    }
    return decoded;
}

