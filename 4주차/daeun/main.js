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
