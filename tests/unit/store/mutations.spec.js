import { mutations } from "../../../src/store/mutations";

describe("Mutations", () => {
  test("is object", () => {
    expect(typeof mutations).toBe("object");
  });
});
