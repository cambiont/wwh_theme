"use strict";
var app;
(function (app) {
    let outputElem = document.getElementById("output");
    // The main application program.
    function main() {

        render(PAGEURL);

    }
    // Creates a single QR Code, then appends it to the document.
    function render(link) {
      
        const text = link; // User-supplied Unicode text
        const errCorLvl = qrcodegen.QrCode.Ecc.LOW; // Error correction level
        const qr = qrcodegen.QrCode.encodeText(text, errCorLvl); // Make the QR Code symbol
        drawCanvas(qr, 10, 4, "#FFFFFF", "#000000", appendCanvas("share this recipe")); // Draw it on screen
    }
   
    function appendCanvas(caption) {
        let p = outputElem.appendChild(document.createElement("p"));
        p.textContent = caption + ":";
        let result = document.createElement("canvas");
        outputElem.appendChild(result);
        return result;
    }
    // Draws the given QR Code, with the given module scale and border modules, onto the given HTML
    // canvas element. The canvas's width and height is resized to (qr.size + border * 2) * scale.
    // The drawn image is purely dark and light, and fully opaque.
    // The scale must be a positive integer and the border must be a non-negative integer.
    function drawCanvas(qr, scale, border, lightColor, darkColor, canvas) {
        if (scale <= 0 || border < 0)
            throw new RangeError("Value out of range");
        const width = (qr.size + border * 2) * scale;
        canvas.width = width;
        canvas.height = width;
        let ctx = canvas.getContext("2d");
        for (let y = -border; y < qr.size + border; y++) {
            for (let x = -border; x < qr.size + border; x++) {
                ctx.fillStyle = qr.getModule(x, y) ? darkColor : lightColor;
                ctx.fillRect((x + border) * scale, (y + border) * scale, scale, scale);
            }
        }
    }
    
    main();
})(app || (app = {}));
