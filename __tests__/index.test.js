const { add, subtract, multiply, divide, factorial, palindrome } = require("../index");


it("should add two numbers correctly", ()=>{
   expect(add(1, 1)).toBe(2);})

   
it("should subtract two numbers correctly", ()=>{
    expect(subtract(1, 1)).toBe(0);})

       
it("should multiple two numbers correctly", ()=>{
    expect(multiply(4, 6)).toBe(24);})

it("should divide two numbers correctly", ()=>{
    expect(divide(10, 5)).toBe(2);})

 
describe("Should do factorial", () => {
    it("should factorial one number correctly", ()=>{
        expect(() => factorial(-2)).toThrow("Factorial is not defined for negative number");
    })

    it("should return 1 of the n factproal is zero", ()=>{
        expect(factorial(0)).toBe(1);
    })

    it("should return the factorial of n that is positive", ()=>{
        expect(factorial(4)).toBe(24);
    })
})

it("should palindrome string correctly", ()=>{
expect(palindrome("wow")).toBe(true);})
    


       


    
 


 

