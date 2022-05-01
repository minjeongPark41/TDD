const sut = require("./index");
// sut의 약자는 system under test
// 대상이 되는 코드를 불러와서 변수 sut에 담은 것

test("연속된 2개의 공백이 중복을 없애서 -> 하나의 공백으로 나오는지를 테스트", () => {
  const actual = sut("hello  world");
  expect(actual).toBe("hello world");
});
test('4개의 공백이 -> 하나의 공백으로 나오는지를 테스트', () => {
  const actual = sut("hello    world");
  expect(actual).toBe("hello world");
})
test('3개의 공백이 -> 하나의 공백으로 나오는지를 테스트', () => {
  const actual = sut("hello   world");
  expect(actual).toBe("hello world");
})

