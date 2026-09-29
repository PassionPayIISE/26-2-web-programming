// 1. person 객체 만들기

let person = {
    name: "Alice",
    age: 25,
    isEmployed: true,
    address: undefined,
    pet: null
};

console.log(person);


// 2. mixed 배열 만들기

let mixed = [1, 2, 3, "four", false];

console.log(mixed);


// 3. 사용할 수 없는 변수 이름 찾기

// let 2cool = true;
// 사용할 수 없음: 변수 이름은 숫자로 시작할 수 없다.

// let private = "secret";
// 사용할 수 없음: private는 JavaScript에서 예약어로 사용될 수 있어 변수명으로 사용하지 않는 것이 안전하다.

let $dollar = 1000;
// 사용 가능: $는 변수 이름에 사용할 수 있다.

// let my-name = "Lee";
// 사용할 수 없음: 변수 이름에 하이픈(-)을 사용할 수 없다.

let camelCaseName = "OK";
// 사용 가능: 문자로 시작하고 특수문자가 없어 올바른 변수 이름이다.