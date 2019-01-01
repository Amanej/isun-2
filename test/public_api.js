var assert = require("assert");
var { IsUsingNetlify } = require("../index");

describe("API", function() {
  describe("IsUsingNetlify(url)", function() {
    it("should be true", function() {
      IsUsingNetlify("https://jamstack.xdp.no/", actual => {
        assert.equal(true, actual);
      });
    });
    it("should be false", function() {
      IsUsingNetlify("https://blog.alemayhu.com/", actual => {
        assert.equal(false, actual);
      });
    });
    it("should become an exeception", function() {
      IsUsingNetlify("https://blog.alemayhu.com/", actual => {
        assert.equal(false, actual);
      });
    });
  });
});
