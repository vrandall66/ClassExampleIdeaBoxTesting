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
    // Setup
    const titleEvent = { target: { name: 'title', value: 'herp' } }
    const descriptionEvent = { target: { name: 'description', value: 'derp' } }
    // Execution
    wrapper.instance().handleChange(titleEvent)
    wrapper.instance().handleChange(descriptionEvent)
    // Expectations
    expect(wrapper.state('title')).toEqual(titleEvent.target.value)
    expect(wrapper.state('description')).toEqual(descriptionEvent.target.value);
  })
});
