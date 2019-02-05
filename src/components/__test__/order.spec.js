import { shallow } from 'enzyme';
import React from 'react';
import Order from '../Order';

describe('Order Component', () => {
  let wrapper;
  const props = {
    orders: {
      ordersItem: [
      {
        id: 1,
        imageurl: 'http://cloud.com/dskj',
        price: 400,
        title: 'burger',
        quantity: 4,
      }
    ],
    ordersInfo: [
      {
        deliveryaddress: '10  agric',
        total: 120,
      }
    ],
  }
  }

  beforeEach(() => {
    wrapper = shallow(<Order {...props}/>);
  });

  it('should render Items', () => {
    shallow(<Order {...props}/>);
  });

  it('should find tr', () => {
    const tr = wrapper.find('tr');
    expect(tr.length).toEqual(2);
  });
  it('should find td', () => {
    const td = wrapper.find('td');
    expect(td.length).toEqual(7);
  });
  it('should find table', () => {
    const table = wrapper.find('table');
    expect(table.length).toEqual(1);
  });
  it('should find tbody', () => {
    const tbody = wrapper.find('tbody');
    expect(tbody.length).toEqual(1);
  });
});
