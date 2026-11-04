# 11
// 1. 기본 함수 선언 및 호출 예시
function printHello() {
    console.log("hello");
}

printHello(); // 함수 호출

// 2. 구구단 출력 예시 (코드 재사용성 비교용)
function gugudan() {
    console.log(3 * 1);
    console.log(3 * 2);
    // ... (중략) ...
    console.log(3 * 9);
}

gugudan(); // 함수 호출


const gugudan = function printGugudan() {
    console.log(3 * 1);
    // ...
};

gugudan(); // 변수명으로 함수 호출

# 12
// 1. 매개변수(name)를 받는 함수 선언
function printFruit(name) {
    console.log(name);
}

// 2. 인수를 전달하여 함수 호출
printFruit("banana"); // [00:04:15] "banana" 출력
printFruit("apple");  // [00:04:43] "apple" 출력

function printFruitPrice(name, price) {
    console.log(name + "는 " + price + "원입니다.");
}

// 호출
printFruitPrice("바나나", 2000); // [00:05:52] "바나나는 2000원입니다." 출력

// 배열을 전달받아 사용하는 예시
function printArray(arr) {
    console.log(arr);
}
printArray([1, 2, 3]);

// 객체를 전달받아 사용하는 예시
function printObject(obj) {
    console.log(obj.name);
}
printObject({ name: "apple", price: 1000 });

# 13
// 두 숫자를 더해 결과값을 반환하는 함수 선언
function sum(num1, num2) {
    return num1 + num2; // 호출한 쪽으로 결과 반환
}

// 반환된 데이터를 변수(sumResult)에 저장
const sumResult = sum(10, 20); 
console.log(sumResult); // [00:04:36] 30 출력

function sum(num1, num2) {
    return num1 + num2;
}

const result1 = sum(10, 20); // 30 반환
const result2 = sum(30, 50); // 80 반환

const total = result1 + result2; // 30 + 50 = 80 (총합 계산)
console.log("총합은 " + total + "입니다."); // [00:05:13] 총합은 80입니다. 출력

function checkReturn() {
    console.log("리턴 실행 전"); // 이 구문은 정상 출력됨
    return; // 여기서 함수 실행 즉시 종료

    console.log("리턴 실행 후"); // 실행되지 않고 무시됨
}

checkReturn();

# 15
// [기존 방식] 일반 함수 선언
function sum(num1, num2) {
    return num1 + num2;
}

// [ES6 방식] 화살표 함수 표현식
const sumArrow = (num1, num2) => {
    return num1 + num2;
};

const result = sumArrow(10, 20);
console.log(result); // [00:03:25] 30 출력

// 중괄호와 return을 생략한 형태 (자동으로 결과가 반환됨)
const sumShort = (num1, num2) => num1 + num2;

console.log(sumShort(20, 20)); // [00:04:34] 40 출력

// 1. 매개변수가 1개인 경우 (소괄호 생략 가능)
const square = num => num * num;
console.log(square(10)); // [00:05:21] 10의 제곱인 100 출력

// 2. 매개변수가 없는 경우 (빈 소괄호 유지)
const getPi = () => 3.14;
console.log(getPi()); // [00:06:02] 3.14 출력

// 객체를 반환하는 화살표 함수 (소괄호로 객체를 감싸야 함)
const getObject = () => ({
    name: "철수",
    age: 20
});

const obj = getObject();
console.log(obj.name); // "철수" 출력

// 일반 중첩 함수 형태
const outerFunc = function() {
    return function() {
        return "nested";
    };
};

// 화살표 함수 축약형을 적용한 형태
const outerFuncArrow = () => () => "nested";

console.log(outerFuncArrow()()); // "nested" 출력

# 16
// 1. 덧셈 연산자 (+)
const addition = 20 + 10;
console.log(addition); // [00:03:34] 30 출력

// 2. 뺄셈 연산자 (-)
const subtraction = 20 - 10;
console.log(subtraction); // [00:03:44] 10 출력

// 3. 곱셈 연산자 (*)
const multiplication = 10 * 10;
console.log(multiplication); // [00:03:59] 100 출력

// 4. 나눗셈 연산자 (/)
const division = 20 / 10;
console.log(division); // [00:04:03] 2프로(2) 출력

// 5. 나머지 연산자 (%) - 10을 3으로 나눈 나머지
const remainder = 10 % 3;
console.log(remainder); // [00:04:14] 1 출력

// 문자열과 문자열을 덧셈 연산자로 연결
const stringJoin = "Hello" + " World";
console.log(stringJoin); // [00:05:08] "Hello World" 출력

// 1. 덧셈: 숫자가 문자열로 변환되어 이어짐 ("10" + "20" 형태처럼 동작)
console.log("20" + 10); // [00:06:07] "2010" 출력 (문자열)

// 2. 뺄셈, 곱셈, 나눗셈 등: 문자열이 숫자로 변환되어 정상 연산 수행
console.log("20" - 10); // [00:06:07] 10 출력 (숫자)
console.log("20" * 2);  // 40 출력 (숫자)
console.log("20" / 2);  // 10 출력 (숫자)

# 17
// [기존 방식] 따옴표와 + 연산자를 이용한 문자열 결합
const name = "홍길동";
const age = 20;
const legacyMessage = "안녕하세요, 제 이름은 " + name + "이고 나이는 " + age + "살입니다.";
console.log(legacyMessage);

// [ES6 템플릿 문자열 방식] 백틱과 ${}를 이용한 직관적인 결합
const templateMessage = `안녕하세요, 제 이름은 ${name}이고 나이는 ${age}살입니다.`;
console.log(templateMessage);

const num1 = 10;
const num2 = 20;

// ${} 안에서 산술 연산 수행
console.log(`10과 20을 더한 값은 ${num1 + num2}입니다.`);

// 백틱을 사용하여 줄바꿈을 포함한 멀티라인 문자열 작성
const multiLineText = `
첫 번째 줄입니다.
두 번째 줄입니다.
세 번째 줄입니다.
`;
console.log(multiLineText);

# 18
// 1. 동등 연산자 (==)
console.log(10 == 10);   // [00:02:07] true (숫자 10과 숫자 10은 같음)
console.log(10 == "10"); // [00:07:48] true (문자열 "10"이 숫자로 자동 변환되어 비교됨)

// 2. 일치 연산자 (===)
console.log(10 === 10);   // [00:02:48] true (값과 자료형 모두 숫자형으로 일치)
console.log(10 === "10"); // [00:09:01] false (값은 같지만, 자료형이 각각 숫자와 문자열로 달라 불일치)

// 3. 부등 연산자 (!=)
console.log(10 != 10);   // [00:03:29] false (같기 때문에 '다르지 않다'가 됨)
console.log(10 != "10"); // false (자동 형 변환으로 인해 같다고 판단됨)

// 4. 불일치 연산자 (!==)
console.log(10 !== 10);   // [00:04:10] false (값과 자료형이 모두 일치하므로 불일치하지 않음)
console.log(10 !== "10"); // [00:10:40] true (값은 같지만 자료형이 다르므로 '불일치'가 참임)

// 5. 초과 / 미만
console.log(10 > 20);  // [00:04:50] false (10은 20보다 크지 않음)
console.log(10 < 20);  // [00:05:48] true (10은 20보다 작음)

// 6. 이상 / 이하
console.log(20 >= 20); // [00:05:23] true (크지는 않지만 같으므로 참)
console.log(10 <= 20); // [00:06:01] true (작으므로 참)

# 19
// 나이가 20 이상인지 확인하는 기본 if문 예시
const age = 20;

if (age >= 20) {
    // 조건식(age >= 20)이 참(true)일 때 실행되는 블록
    console.log("성인입니다."); // 이 코드가 실행됨
}

const age = 15;

if (age >= 20) {
    // 조건이 참일 때 실행
    console.log("성인입니다.");
} else {
    // 조건이 거짓일 때 실행
    console.log("미성년자입니다."); // 이 코드가 실행됨
}

const score = 85;

if (score >= 90) {
    console.log("A 등급입니다.");
} else if (score >= 80) {
    // 앞선 조건이 거짓이고, 이 조건이 참일 때 실행
    console.log("B 등급입니다."); // 이 코드가 실행됨
} else if (score >= 70) {
    console.log("C 등급입니다.");
} else {
    // 모든 조건을 만족하지 않을 때 실행
    console.log("F 등급입니다.");
}

# 20 
let flag = false;
do {
    console.log('do-while');
} while (flag === true);

while (조건식) {
    // 조건식이 참(true)인 동안 반복 실행할 코드
}

