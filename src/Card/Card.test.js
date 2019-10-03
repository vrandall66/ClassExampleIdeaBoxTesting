import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  it("should match the snapshot with all data passed in correctly", () => {
    const wrapper = shallow(
      <Card
        title="Bananas"
        description="B A N A N A S"
        id={3}
        removeIdea={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
