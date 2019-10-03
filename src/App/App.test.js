import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("Should update state with a new idea when addIdea is called", () => {
    // Setup
    const wrapper = shallow(<App />);
    const mockIdea = {
      title: "Sweaters for pugs",
      description: "Why not?",
      id: Date.now()
    };
    // vvv optional variable vvv
    const expected = [mockIdea];

    // Execution
    wrapper.instance().addIdea(mockIdea);
    // Expectation
    expect(wrapper.state("ideas")).toEqual(expected);
  });
});
