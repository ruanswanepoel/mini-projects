const vBaseRange = 1.5;
const boundedThreshold = 2;

let maxIterations = 100;
let aspectRatio;
let zoom = 1;
let vRange = vBaseRange;
let hOffset = -0.5;
let vOffset = 0;
let bounds;

function setup() {

    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);
    loadPixels();

    aspectRatio = width / height;
    bounds = getBounds(vRange);
    drawMandelbrot();

}

function draw() {}

function drawMandelbrot() {

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            let index = (x + y * width) * 4;
            let [a, b] = getCoords(x, y, bounds);

            let c = new ComplexNumber(a, b);
            let z = new ComplexNumber(0, 0); // z0
            
            let [isBounded, iterations] = checkBounded(z, c);
            let brightness = 0;

            if (!isBounded) {
                brightness = map(iterations, 0, maxIterations, 10, 255);
            }

            pixels[index + 0] = brightness - 100;
            pixels[index + 1] = brightness - 20;
            pixels[index + 2] = brightness;
            pixels[index + 3] = 255;

        }
    }

    updatePixels();

}

function mouseWheel(e) {

    zoom = max(zoom - Math.sign(e.delta), 1);
    maxIterations = pow(zoom, zoom/8) + (2 * pow(zoom, 2)) + (20 * zoom) + 100;
    vRange = vBaseRange / pow(zoom, zoom/4);

    let nextBounds = getBounds(vRange);
    let [a0, b0] = getCoords(mouseX, mouseY, bounds);
    let [a1, b1] = getCoords(mouseX, mouseY, nextBounds);
    hOffset += a0 - a1;
    vOffset += b0 - b1;
    bounds = getBounds(vRange);
    
    drawMandelbrot();

}

function getBounds(_vRange) {

    return new Bounds(
        (-_vRange * aspectRatio) + hOffset,
        (vRange * aspectRatio) + hOffset,
        -_vRange + vOffset,
        _vRange + vOffset
    );

}

// Checks if the given complex number is bounded when iterated according to the formula:
//      "Z(n+1) = Z(n)^2 + c"
function checkBounded(z, c) {

    for (let i = 0; i < maxIterations; i++) {

        z = z.multiply(z).add(c);

        if (z.magnitude() > boundedThreshold) {
            return [false, i];
        }

    }

    return [true, maxIterations];

}

function getCoords(x, y, _bounds) {

    let a = map(x, 0, width, _bounds.left, _bounds.right);
    let b = map(y, 0, height, _bounds.upper, _bounds.lower);
    
    return [a, b];

}
