import { shallow } from 'enzyme';
import React from 'react';
import Products from './Products';

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


  beforeEach(() => {
    wrapper = shallow(<Products/>);
  });

  it('should render Popup', () => {
    const items = JSON.stringify([{
      itemPrice: 200,
      quantity: 2,
    }]);
    window.localStorage.setItem('usercart', items);
    shallow(<Products/>);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(1);
  });
  it('should call handleClick', () => {
    wrapper.instance().handleClick(items);
  });
  it('should call closePopUp', () => {
    wrapper.instance().closePopUp();
  });
});