import React from "react";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../src/App";

Enzyme.configure({ adapter: new Adapter() });

describe("React-native unit test", () => {
  describe("<App />", () => {
    it("renders without crashing", () => {
      jest.useFakeTimers();
      const rendered = renderer.create(<App />).toJSON();
      expect(rendered).toBeTruthy();
    });
  });
});
