/* 
1. Callback & Higher-Order Function มีข้อดีอย่างไร
Answer: ทำให้โค้ดยืดหยุ่น ใช้ซ้ำได้ เเละแยกความรับผิดชอบชัดเจน


2. จากการลองใช้ Callback Function ในระบบเกมและระบบแจ้งเตือน คุณคิดว่าโค้ดอ่านง่ายขึ้นหรือไม่ เพราะอะไร 
Answer:ง่ายขึ้นเพราะเราเรียกใช้ Function ที่ execute ตัวเดิมเลย เปลี่ยนเเค่ Agument ด้านใน ขยายความเพิ่มคือเรียกใช้ HOF ตัวเดิมมา execute 
เเล้วเปลี่ยน Agument ที่ต้องการจะให้โปรเเกรมตอบสนองแบบต่างๆ โดยเลือกใช้ผ่าน CB Function


3. หากต้องสอนเพื่อนให้เข้าใจ Callback & Higher-Order Function ใน 5 นาที จะอธิบายอย่างไร 
Answer:  Callback คือฟังก์ชันที่ฝากให้คนอื่นเรียก , Higher-Order Function คือฟังก์ชันที่จัดการฟังก์ชันอื่น Concept คือเขียนโค้ดครั้งเดียว
เปลี่ยนพฤติกรรมได้ไม่จำกัด ตัวอย่างเช่น
```
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
```
โค้ดจะดูสะอาด อ่านง่าย เเละเวลาเรียกใช้ก็ง่ายเช่นกัน

*/
