import { shallow } from 'enzyme';
import React from 'react';
import {Products} from './Products';

describe('Products Component', () => {
  let wrapper;
  // const props = {
  //   closeCart: jest.fn()
  // }
 const items = [{
    foodId: 8,
    price: 200,
    quantity: 2,
    imageUrl: 'http://cloud.com/saf',
    title: 'Rice',
  }];
  const props = {
    handleClick: jest.fn(),
    menu: [
      {
        id: 1,
      },
      {
        id: 2,
      },

    ]
  }


  beforeEach(() => {
    wrapper = shallow(<Products {...props} />);
  });

  it('should render products', () => {
    const items = JSON.stringify([{
      itemPrice: 200,
      quantity: 2,
    }]);
    window.localStorage.setItem('usercart', items);
    shallow(<Products {...props }/>);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(1);
  });
});