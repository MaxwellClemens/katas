import { helloWorld } from "./hello-world";
import chai from "chai";
chai.should();

describe(`when calling helloWorld()`, () => {
  it(`should return the string "Hello world!"`, () => {
    const result = helloWorld();
    result.should.eql("Hello world!");
  });
});
