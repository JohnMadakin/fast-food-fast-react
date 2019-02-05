import { shallow } from 'enzyme';
import React from 'react';
import Items from '../items';

describe('Item Component', () => {
  let wrapper;
  const props = {
    order: [
      {
        id: 1,
        itemurl: 'http://cloud.com/dskj',
        itemPrice: 400,
        itemTitle: 'burger',
        quantity: 4,
      }
    ],
  }

  beforeEach(() => {
    wrapper = shallow(<Items {...props}/>);
  });

  it('should render Items', () => {
    shallow(<Items {...props}/>);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(3);
  });
  it('should find p', () => {
    const p = wrapper.find('p');
    expect(p.length).toEqual(2);
  });
  it('should find img', () => {
    const img = wrapper.find('img');
    expect(img.length).toEqual(1);
  });
});
