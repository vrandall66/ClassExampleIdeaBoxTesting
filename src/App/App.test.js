import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("Should update state with a new idea when addIdea is called", () => {
    const wrapper = shallow(<App />);
    const mockIdea = {
      title: "Sweaters for pugs",
      description: "Why not?",
      id: Date.now()
    };

    const expected = [mockIdea];
    wrapper.instance().addIdea(mockIdea);
    expect(wrapper.state("ideas")).toEqual(expected);
  });
});
