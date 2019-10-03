import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("Form", () => {
  let wrapper;
  const mockAddIdea = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form addIdea={mockAddIdea} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state through handleChange method', () => {
    const titleEvent = { target: { name: 'title', value: 'herp' } }
    const descriptionEvent = { target: { name: 'description', value: 'derp' } }

    wrapper.instance().handleChange(titleEvent)
    wrapper.instance().handleChange(descriptionEvent)

    expect(wrapper.state('title')).toEqual(titleEvent.target.value)
    expect(wrapper.state('description')).toEqual(descriptionEvent.target.value);
  })

  it('should reset the inputs upon submitting a new idea', () => {
    const currentState = { title: 'herp', description: 'derp' };
    const clearedState = { title: '', description: '' };

    wrapper.setState(currentState);
    expect(wrapper.state()).toEqual(currentState);
  
    wrapper.instance().resetInputs();
    expect(wrapper.state()).toEqual(clearedState);
  })
});
