import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Form component', () => {
    const wrapper = shallow(<Form

      />);
      expect(wrapper).toMatchSnapshot();
  });

});
