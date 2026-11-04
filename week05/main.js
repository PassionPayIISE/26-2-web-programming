// 1. function (){}
const gugudan = function gugudan(){
    console.log("3 * 1  = 3");
    console.log("3 * 2  = 6");
    console.log("3 * 3  = 9");
    console.log("3 * 4  = 12");
    console.log("3 * 5  = 15");
    console.log("3 * 6  = 18");
    console.log("3 * 7  = 21");
    console.log("3 * 8  = 24");
    console.log("3 * 9  = 27");
}
gugudan(); // 함수 표현식에서 함수를 호출할 때 변수의 이름으로 호출해야 함. (함수의 이름으로 호출하는 것이 아님.)

// 함수의 이름이 없는 경우도 있음 -> 익명 함수 


// 2. arguments & parameters
function printFruit(name){
    console.log(name);
}
printFruit("banana");

function printFruit2(name, price){
    console.log(name+"의 가격은 " + price + "원 입니다.");
}
printFruit2("banana", 2000);


// 3. return
function sum(num1, num2){
    return num1 + num2;
}
const sum_result1 = sum(10, 20);
const sum_result2 = sum(20, 30); 

const sum_result = sum_result1 + sum_result2;
console.log('총 합은 ' + sum_result + '입니다.');

function printReturn(){
    console.log('return 실행 전');
    return;
    console.log('return 실행 후');
}
printReturn(); // return 실행 후 콘솔은 실행되지 않음. 


// 4. arrow function 화살표 함수 
const sum = (num1,num2) => {
    return num1 + num2
}

const result1 = sum(10, 20);
console.log(result);

const sum = (num1, num2) => num1 + num2; // 매개변수가 하나일 때 중괄호를 생략할 수 있음. 이럴 때 보편적으로 중괄호 생략하는 편임 

const result2 = sum(20, 30)

const printPie = () => 3.14;

const result = printPie();
console.log(result);

const getobject = () => ({
    name : '철수',
    age : 20
}) // 중괄호가 바로 들어갈 때는 소괄호로 한 번 감싸줘야 함 


// 5. 표현식과 연산자 
// 연산자로 작성된 식을 표현식이라고 함 
let addition = 20 + 10;
console.log(addition);

let subtraction = 20 - 10;
console.log(subtraction);

let multiplication = 10 * 10;
console.log(multiplication);

let divisino = 10 / 5;
console.log(division);
//문자열이 포함된 연산과 표현식
let changeType1 = 20 + '10';
console.log(changeType1);

let changeType2 = 20 - '10';
console.log(changeType2);

let changeType3 = 20 * '10';
console.log(changeType3);

let changeType4 = 20 / '10';
console.log(changeType4);


// 6. template literal 
let str1 = "I'm fine Thank You!";
console.log(str1);

let str2 = '"시작이 반이다"';
console.log(str2);

let str3 = `여러분, '시작이 반이다' 라는 말 들어보셨죠?`;
console.log(str3);

let name1 = '철수';
let name2 = '영희';
let string = `${name1}는 ${name2}를 좋아합니다.`;
console.log(string);


// 7. comparision pperator 비교 연산자
let comparision1 = 10 == 10;
console.log(comparision1);

let comparision2 = 10 != 10;
console.log(comparision2);

let comparision3 = 10 === 10;
console.log(comparision3);

let comparision4 = 10 !== 10;
console.log(comparision4);

let comparision5 = 10 > 10;
console.log(comparision5);

let comparision6 = 10 >= 10;
console.log(comparision6);

let compairsion7 = 10 < 10;
console.log(comparision7);

let comparision8 = 10 <= 10;
console.log(comparision8);


//8. if 조건문
if(30 < 10){
  console.log('30은 10보다 작습니다.');
}else if(30 < 20){
  console.log('30은 20보다 작습니다.');
}else if(30 < 30){
  console.log('30은 30보다 작습니다.');
}else{
  console.log("모든 if문의 조건이 거짓입니다.");
}


// 9. switch 반복문
let animal = 'Dog';

switch (animal) {
  case 'Cat':
    console.log('야옹');
    break;
  case 'Dog':
    console.log('멍멍');
    break;
  case 'Cow':
    console.log('음메');
    break;
  default:
    console.log('일치하는 동물 소리가 없습니다.');
    break;
}


//10. do-while 반복문 
let i=1;
while(i<10){
  console.log(i);
  i = i+1;
}
