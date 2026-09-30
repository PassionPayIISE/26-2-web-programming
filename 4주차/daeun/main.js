// 01
console.log("Hello, World!")
console.log("Hello, World out!") // 드래그한 부분만 출력 가능



// 02
num = 3; // 문법의 마지막엔 세미콜론
console.log(num);

num = 10;
console.log(num);



//03
//var
var num = 10;
console.log(num); // 중복 변수 선언이 가능함. 그래서 var 사용을 권장하지 않음

var num = 20;
console.log(num);

//let
let str = "a";
console.log(str);
//let으로 작성하면 실행결과에 에러코드가 뜸

//const
const constant = 10;
console.log(constant);
/*
* 중복선언 안됨
* 변수에 할당된 데이터가 변경되지 않음.
*/
//variable naming
//1. 변수 이름은 카멜 케이스로 작성 
let user_name = "a"
console.log(user_name)

//2. 문자, _, $로 변수 이름 시작 가능
let $name = "a"
let name = "a"
let _name = "a"

//3. 상수나 축약어는 대문자와 스네이크 케이스 방식으로 작성
const HTML = "Hyper Text Markup Language";
const MAX_LEVEL = "99";

//4. 예약어는 변수로 사용할 수 없음



//04. 자료형 
//원시 타입
let number = 1; //숫자형(bumber)
let str = "abc"; //문자열형(string)
let bool = true; // 또는 false, 논리형(boolean)
let undi = undefined; // undefined 
let nul = null; //null(object)
let symbol = symbol();

//참조 타입
let array = []; //배열(array)
let obj = {};   //객체(object)
let func = function(){};    //함수(function)



//05. 숫자형
//모든 숫자의 형태를 허용하고 있음 
let integer = 10; //정수
let hex = 0xa;  //16진수
let binary = 0b1010;    //2진수
let octal = 0o12;   //8진수

let negative = -10; //음의 정수
let indices = 1.0e1; //지수
let double = 10.12; //소수

console.log(negative, binary, octal)

let IsInfinity = 10/0;
let IsNaN = 10 / "칠";
console.log(IsInfinity, IsNaN)

let sum = 0.1+0.2;
console.log(sum);
//컴퓨터는 숫자를 2진수로 저장함. 소수점을 2진수로 변환할 시 딱 무한수로 변환되기 때문에 종종 근사치로 연산의 결과가 나올 수 있음.  



//06. 문자열형
let str = "I'm fine thank you!";
console.log(str)

let str2 = 'I"m fine thank you';
console.log(str2)

let str3 = "Im fine thank you! \"and you\"?";
console.log(str3)



//07. undefined, null
//undefined : 만들어진 변수 공간에 어떠한 데이터가 할당되기 전까지 자동적으로 할당되는 값
let num;
console.log(num)
// num -> undefined로 출력됨
let null = null;
console.log(num);
//사용자가 의도적으로 메모리공간, 변수 값이 들어가야 하는 데이터 공간을 비워두기 위해 사용하는 값임 



//08. 논리형
//true or false 의 값만을 가짐. 
let bool1 = 5<7;
console.log(bool1);

let bool2 = 7>10;
console.log(bool2);



//09. array 
//하나의 변수에 여러 개의 데이터를 한 번에 저장하고 싶을 때. 
let arr = ["a", "b","c","d"];
console.log(arr);

let arr2 = [10, "abc", true, null, undefined, function(){}, {}]; //배열 안에는 모든 자료형을 담을 수 있음. 
console.log(arr2);

console.log(arr2[0]);
//대괄호 인덱스를 사용하여 속성에 접근할 수 있음. 



//10. object
/*
array에 있는 값들은 직관적이지 않음.
뭐에 대한 값들인지 직관적으로 알기 위해서는 객체가 더 용이함.
*/
let student1={//객체의 key는 문자의 형태로 작성해도 되고, 바로 작성해도 됨. 
    koreanscore:90,
    english : 70,
    math : 80,
    science : 60 
    "music score":50
    }; //세미콜론 꼭 찍어야 함! 

console.log(student1["koreanscore"]); //대괄호 인덱스에서는 문자열로 작성해야 함. 
console.log(student1.english); //점 연산자에는 문자열로 작성하면 안됨. 
console.log(student1["music score"]);



//11. function() {};
let function(a,b){
    out = a + b
}