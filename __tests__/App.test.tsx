import React from "react";
import renderer from "react-test-renderer";

import App from "../src/App";

describe("React-native unit test", () => {
  describe("<App />", () => {
    it("renders without crashing", () => {
      jest.useFakeTimers();
      const rendered = renderer.create(<App />).toJSON();
      expect(rendered).toBeTruthy();
    });
  });
});
