import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let mockUserInfo, wrapper;

  beforeEach(() => {
    mockUserInfo = { email: 'justhangin@aol.com', name: 'Billy', value: 'Business' };
  });

  it('should be an instance of Form component', () => {
    wrapper = shallow(<Form
        saveUserData={mockUserInfo}
      />);
      expect(wrapper).toMatchSnapshot();
  });

  it('should update its state when handleChange is invoked', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().handleChange();
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should update its state when handleChoice is invoked', () => {
    wrapper.instance().handleChoice = jest.fn();
    wrapper.instance().handleChoice();
    expect(wrapper.instance().handleChoice).toHaveBeenCalled();
  });

});
