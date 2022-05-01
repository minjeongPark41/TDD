// 중복된 문자를 줄여주는지를 테스트
function refineTest(s) {
  return s.replace("    ", " ")
    .replace("  ", " ")
    .replace("  ", " ")
    .replace("  ", " ")
    .replace("\t", "")
    .replace("mockist", "*******")
    .replace("purist", "******")
}

module.exports = refineTest;
