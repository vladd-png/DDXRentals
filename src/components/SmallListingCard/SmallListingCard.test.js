import React from 'react';
import ReactDOM from 'react-dom';
import SmallListingCard from './SmallListingCard';
import { shallow } from 'enzyme';


describe('SmallListingCard', () => {


  it('renders without crashing', () => {
    const div = document.createElement('div');
    const mockaddFavorite = jest.fn();
    ReactDOM.render(<SmallListingCard
      id={3}
      area={590}
      name={'Hip RiNo Party Spot'}
      address={'2250 Lawrence St'}
      addressZip={80205}
      cost={420}
      features={['hot tub', 'espresso machine']}
      beds={3}
      baths={2.5}
      addFavorite={mockaddFavorite}
      key={0.1}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of SmallListingCard component', () => {
    const mockaddFavorite = jest.fn();
    const wrapper = shallow(<SmallListingCard
      id={3}
      area={590}
      name={'Hip RiNo Party Spot'}
      address={'2250 Lawrence St'}
      addressZip={80205}
      cost={420}
      features={['hot tub', 'espresso machine']}
      beds={3}
      baths={2.5}
      addFavorite={mockaddFavorite}
    />);
      expect(wrapper).toMatchSnapshot();
  });

  it('should change state.cardExpand', () => {
    const mockaddFavorite = jest.fn();
    const wrapper = shallow(<SmallListingCard
      id={3}
      area={590}
      name={'Hip RiNo Party Spot'}
      address={'2250 Lawrence St'}
      addressZip={80205}
      cost={420}
      features={['hot tub', 'espresso machine']}
      beds={3}
      baths={2.5}
      addFavorite={mockaddFavorite}
    />);
    expect(wrapper.state('cardExpand')).toEqual(false)
    wrapper.instance().expandCard()
    expect(wrapper.state('cardExpand')).toEqual(true)
  });

});
