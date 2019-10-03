import React from "react";
import { shallow } from "enzyme";
import Ideas from "./Ideas";

describe("Ideas", () => {
  it("Should match the snapshot with the data passed in correctly", () => {
    let ideas = [
      { title: "Bananas", description: "BANANAS", id: 4 },
      { title: "Orange", description: "ORANGE", id: 5 }
    ];
    const wrapper = shallow(<Ideas ideas={ideas} removeIdea={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
