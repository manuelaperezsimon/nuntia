import loadingSlice, { isLoadingActionCreator } from "./loadingSlice";

describe("Given a loading slice", () => {
  describe("When it's invoked with a false initial state as value", () => {
    test("Then it should return a true as value", () => {
      const loadingInitialState: boolean = false;

      const isLoading = loadingSlice(
        loadingInitialState,
        isLoadingActionCreator()
      );

      expect(isLoading).not.toBe(loadingInitialState);
    });
  });

  describe("When it's invoked with a true initial state as value", () => {
    test("Then it should return a false as value", () => {
      const loadingInitialState: boolean = true;

      const isLoading = loadingSlice(
        loadingInitialState,
        isLoadingActionCreator()
      );

      expect(isLoading).not.toBe(loadingInitialState);
    });
  });
});
