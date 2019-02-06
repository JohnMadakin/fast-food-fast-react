import { shallow } from 'enzyme';
import React from 'react';
import Item from '../Item';

describe('Item Component', () => {
  let wrapper;
  const props = {
    orders: [
      {
        id: 1,
        imageurl: 'http://cloud.com/dskj',
        price: 400,
        title: 'burger',
        quantity: 4,
      }
    ],
    index: 0,
    orderInfo: [{deliveryaddress: '10  agric'}],
  }

  beforeEach(() => {
    wrapper = shallow(<Item {...props}/>);
  });

  it('should render Items', () => {
    shallow(<Item {...props}/>);
  });

  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
  it('should find tr', () => {
    const tr = wrapper.find('tr');
    expect(tr.length).toEqual(2);
  });
  it('should find td', () => {
    const td = wrapper.find('td');
    expect(td.length).toEqual(6);
  });
});
