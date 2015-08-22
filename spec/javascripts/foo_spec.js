// include spec/javascripts/helpers/some_helper_file.js and app/assets/javascripts/foo.js
//= require helpers/some_helper_file
//= require foo
describe('Foo', function() {
  it("does something", function() {
    expect(1 + 1).toBe(2);
  });
});

describe("Hello", function() {
	it("says hello", function() {
		expect(hello()).toEqual("Hello!");
	});

	it("says hello to someone", function() {
		expect(hello("Fred")).toEqual("Hello, Fred!");
	});
});

});
