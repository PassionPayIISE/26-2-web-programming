# 01. 자바스크립트의 실행 
### 1. 내부 스크립트 
- html 문서 안에서 script 라는 태그 안에 작성할 수 있음
```html
<body>
    <script>
        console.log("Hello, World!")
    </script>
</body>
```

### 2. 외부 스크립트 
- 외부 js 파일을 하나 만들고 html 문서 안에 불러오는 방법
```html
<body>
    <script src="main.js"> </script>
</body>
# script 태그는 항상 body 태그 안에 들어오게 하는 것이 좋음.
```
<br>


# 02. 변수
- 변수 = 데이터를 저장하는 공간 
<br><br>


# 03. 변수 선언 : var, let, const
### 암시적 선언
- 자바스크립트에서 제공하고 있는 변수 선언 키워드를 사용하지 않고 변수를 선언하는 것 (e.g. num = 3;)
### 명시적 선언
- var, let, const을 사용하여 변수를 선언하는 것 
- 명시적 선언을 권장함


- 카멜 케이스 : 첫 단어는 소문자로 시작, 두 번째 단어부터 첫 글자를 대문자로 표기
e.g. userName, userAge
- 파스칼 케이스 : 첫 단어의 첫 글자부터 대문자로 시작함.
e.g. UserName, UserAge
- 스네이크 케이스 : 단어와 단어 사이를 _ 로 연결함
e.g. user_name, user_age 

# 04. 자료형
- 데이터 = 값 + 갑의 유형. 으로 구성되어 있음. 
- 원시 타입 : 숫자형, 문자열형, 논리형, null, undefined, symbol
- 참조 타입 : 배열(array), 객체(object), 함수(function)