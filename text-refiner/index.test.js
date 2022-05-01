const sut = require("./index");
// sut의 약자는 system under test
// 대상이 되는 코드를 불러와서 변수 sut에 담은 것

// for loop를 사용하여 반복 줄이기
test('중복된 공백을 하나의 공백으로 줄이는지를 확인하는지 테스트 - for loop 사용', ()=>{
  for (const source of ['hello  world', 'hello    world', 'hello   world']){
    const actual = sut(source);
    expect(actual).toBe("hello world");
  }
})
