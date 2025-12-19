/* 
- เราอยากพัฒนาโปรแกรมบวกลบคูณหารเลข ทุกครั้งจะรับ Parameter 3 ตัวคือ
    - เลขตัวที่ 1
    - เลขตัวที่ 2
    - กระบวนการทางคณิตศาสตร์
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// Start Coding Here
// การเอาเลข2ตัวมาคำนวณทางคณิตศาสตร์ => + - * /
// วิธีการมองโจทย์แนวนี้
//[1] CallBack ? 
// [2] Callback = 4 ตัว
// [3] Higher order function 
// [4] ต้องเรียกใช้ CallBack เเล้ว return ค่าที่ได้จาก callBack ออกไป

function calculate(num1,num2,operation){
    return operation(num1,num2);
};

// Arrow Function 
const add =(num1,num2)=>num1+num2;
const subtract=(num1,num2)=>num1-num2;
const multiply=(num1,num2)=>num1*num2;
const divide=(num1,num2)=> num2===0? 'Cannot divide by zero' : num1/num2;

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 0, divide)); // "Cannot divide by zero"







// const divide=function(num1,num2){
//     if(num2===0)return "Cannot divide by zero";
//     let result=null;
//     result=num1/num2;
//     return result;
// }






