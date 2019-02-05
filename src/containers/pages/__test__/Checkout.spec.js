import { shallow } from 'enzyme';
import React from 'react';
import Checkout from '../Checkout';

describe('Checkout Component', () => {
  let wrapper;
  const e = {
    target: {
      value: 2,
    }
  }
  beforeEach(() => {
    wrapper = shallow(<Checkout />);
  });

  it('should render Checkout', () => {
    const items = JSON.stringify([{
      itemPrice: 200,
      quantity: 2,
    }]);
    window.localStorage.setItem('usercart', items);
    shallow(<Checkout history={history}/>);
  });

  it('should find div', () => {  
    const div = wrapper.find('div');
    expect(div.length).toEqual(9);
  });
  it('should find button', () => {
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
  });

  it('should find h3', () => {
    const h3 = wrapper.find('h3');
    expect(h3.length).toEqual(2);
  });

  it('should find main', () => {
    const main = wrapper.find('main');
    expect(main.length).toEqual(1);
  });
  it('should call componentWillMount', () => {
    wrapper.instance().componentWillMount();
  });
  it('should call componentDidMount', () => {
    wrapper.instance().componentDidMount();
  });

  it('should call handleDeliveryAddress', () => {
    wrapper.instance().handleDeliveryAddress(e);
  });
  it('should call closePopUp', () => {
    wrapper.instance().closePopUp();
  });
  // it('should call placeOrder', () => {
  //   wrapper.instance().placeOrder();
  // });
});
