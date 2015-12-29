console.log("main test");

System.import("./other-test.js").then(function(x){ console.log("fetched other", x); });

describe("First test", function(){
  it("should work", function(){
    expect(1).toBe(2);
  });
});
