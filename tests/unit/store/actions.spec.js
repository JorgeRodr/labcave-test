import { actions } from "../../../src/store/actions";

describe("Actions", () => {

  test("is object", () => {
    expect(typeof actions).toBe("object");
  });
});
