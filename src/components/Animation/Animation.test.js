import React from 'react';
import ReactDOM from 'react-dom';
import Animation from './Animation';
import { shallow } from 'enzyme';
import { mockRandom } from 'jest-mock-random';

describe('Animation', () => {

  beforeEach(() => {
    mockRandom([0.1, 0.2, 0.3, 0.6]);
 });

  it('should be an instance of Animation', () => {
    const wrapper = shallow(<Animation />);
    expect(wrapper).toMatchSnapshot();
  });

});
