import React from 'react';
import ReactDOM from 'react-dom';
import Animation from './Animation';
import { shallow } from 'enzyme';

describe('Animation', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Animation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Animation', () => {
    const wrapper = shallow(<Animation

      />);
      expect(wrapper).toMatchSnapshot();
  });

});
