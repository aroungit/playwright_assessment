/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/
let stdscore = 70;
let a = calculateGrade(stdscore);
console.log("the student grade is " + a);
function calculateGrade(stdscore) {

   switch (true) {
      case (stdscore>=90):
         //console.log("the student grade is A+");
         return ("A+");
      break;
      case (stdscore<=89 && stdscore >= 70):
         return ("A");
         //console.log("the student grade is A");
      break;
      case (stdscore<=69 && stdscore >= 50):
         return ("B")  
      //console.log("the student grade is B");
      break;
      default:
         return("F");   
      //console.log("the student grade is F");
      break;
   }
}