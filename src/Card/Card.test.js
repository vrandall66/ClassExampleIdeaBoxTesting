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

  it("should match the favorited snapshot", () => {
    const wrapper = shallow(
      <Card
        title="Bananas"
        description="B A N A N A S"
        id={3}
        removeIdea={jest.fn()}
        isFavorite={true}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the removeIdea prop with the Card id when clicked', () => {
    const removeIdeaMock = jest.fn();
    const wrapper = shallow(
      <Card
        title="Bananas"
        description="B A N A N A S"
        id={3}
        removeIdea={removeIdeaMock}
        isFavorite={true}
      />
    );
    // Execution
    wrapper.find('button').simulate('click');

    // Expectation
    expect(removeIdeaMock).toHaveBeenCalledWith(3);
  })
});
