const sut = require("./index");
// sut의 약자는 system under test
// 대상이 되는 코드를 불러와서 변수 sut에 담은 것

// parameterized 테스트코드 작성 -  test.each 사용
test.each([
  ["hello  world", "hello world"],
  ["hello   world", "hello world"],
  ["hello    world", "hello world"],
])('parameterized 테스트코드 작성 -  test.each 사용', (first, expected) => {
  const actual = sut(first);
  expect(actual).toBe(expected);
})
