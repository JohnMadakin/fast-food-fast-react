import { shallow } from 'enzyme';
import React from 'react';
import CartContainer from '../CartContainer';

describe('CartContainer Component', () => {
  let wrapper;
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
  }

  beforeEach(() => {
    wrapper = shallow(<CartContainer {...props}/>);
  });

  it('should render CartContainer', () => {
    shallow(<CartContainer {...props}/>);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(1);
  });
});
