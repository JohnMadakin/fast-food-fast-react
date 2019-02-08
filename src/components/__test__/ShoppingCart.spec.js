import { shallow } from 'enzyme';
import React from 'react';
import ShoppingCart from '../ShoppingCart';

describe('ShoppingCart Component', () => {
  let wrapper;
  let price = 100;
  let index = 0;
  let checkOut = jest.fn();
  const props = {
    closeCart: jest.fn(),
    history: {
      push: jest.fn(),
    }
  }
  const e = {
    target: {
      value: 2,
    }
  }

  beforeEach(() => {
    wrapper = shallow(<ShoppingCart {...props}/>);
  });

  it('should render Popup', () => {
    const items = JSON.stringify([{
      itemPrice: 200,
      quantity: 2,
    }]);
    window.localStorage.setItem('usercart', items);
    shallow(<ShoppingCart {...props}/>);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(7);
  });
  it('should find p', () => {
    const p = wrapper.find('p');
    expect(p.length).toEqual(6);
  });
  it('should find h2', () => {
    const h1 = wrapper.find('h1');
    expect(h1.length).toEqual(1);
  });
  it('should call checkout when clicked', () => {
    wrapper.find('.item-checkout').simulate('click', {
      checkOut: checkOut,
    });
    wrapper.instance().checkOut();
  });
  it('should call handleQuantityChange', () => {
    wrapper.instance().handleQuantityChange(e, price, index);
  });
  it('should call removeItem', () => {
    wrapper.instance().removeItem(1, 100, 2);
  });
});