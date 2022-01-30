describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(solution("abcde", "cde"), true);
    Test.assertEquals(solution("abcde", "abc"), false);
  });
});

function solution(str, ending) {
  // TODO: complete

  console.log(str.slice(str.length - ending.length, str.length) === ending);
}

solution("abcde", "cde");
