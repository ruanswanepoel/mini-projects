class ComplexNumber {

    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    
    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }
    
    subtract(other) {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }
    
    multiply(other) {
        return new ComplexNumber(this.real * other.real - this.imaginary * other.imaginary, this.real * other.imaginary + this.imaginary * other.real);
    }
    
    divide(other) {
        return new ComplexNumber((this.real * other.real + this.imaginary * other.imaginary) / (other.real * other.real + other.imaginary * other.imaginary), (this.imaginary * other.real - this.real * other.imaginary) / (other.real * other.real + other.imaginary * other.imaginary));
    }
    
    magnitude() {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }
    
    conjugate() {
        return new ComplexNumber(this.real, -this.imaginary);
    }
    
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }

}