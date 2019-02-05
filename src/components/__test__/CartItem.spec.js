import { shallow } from 'enzyme';
import React from 'react';
import Cartitem from '../Cartitem';


describe('Cartitem Component', () => {
  let wrapper;
  let changeQuantity = jest.fn();

  const items = [{
    itemid: 8,
    itemPrice: 200,
    quantity: 2,
    itemCost: 200,
    itemurl: 'http://cloud.com/saf',
    itemTitle: 'Rice',
  }];
  const props = {
    currentOrder: jest.fn(),
    closeCart: jest.fn(),
    removeItem: jest.fn(),
    changeQuantity: jest.fn(),
    order: items,
    removeItem: jest.fn(),
    index: 0,
    itemQuantity: 1,
    itemPrice: 80,
  }

  beforeEach(() => {
    wrapper = shallow(<Cartitem {...props}/>);
  });

  it('should render CartContainer', () => {
    shallow(<Cartitem {...props}/>);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(4);
  });
  it('should find p', () => {
    const p = wrapper.find('p');
    expect(p.length).toEqual(2);
  });
  it('should find img', () => {
    const img = wrapper.find('img');
    expect(img.length).toEqual(1);
  });
  it('should call delete item when clicked', () => {
    wrapper.find('.delete').simulate('click', {
      removeItem: props.removeItem,
    });
    expect(props.removeItem).toHaveBeenCalled();
  });
  it('should call change quantity when changed', () => {
    wrapper.find('.quantity').simulate('change', {
      changeQuantity: props.changeQuantity,
    });
    expect(props.changeQuantity).toHaveBeenCalled();

    // wrapper.instance().changeQuantity(e, props.itemPrice, props.index);
  });
  // onChange={(e)=> props.changeQuantity(e,props.itemPrice,props.index)
});
