import { shallow } from 'enzyme';
import React from 'react';
import Product from '../Product';

describe('Product Component', () => {
  let wrapper;
  const items = [{
    foodId: 8,
    price: 200,
    quantity: 2,
    imageUrl: 'http://cloud.com/saf',
    title: 'Rice',
  }];
  const props = {
    clickMe: jest.fn()
  };

  beforeAll(() => {
    wrapper = shallow(<Product {...props} />);
  });

  it('should render Product', () => {
    shallow(<Product {...props} />);
  });
  it('should find p', () => {
    const p = wrapper.find('p');
    expect(p.length).toEqual(1);
  });
  it('should find h1', () => {
    const h1 = wrapper.find('h1');
    expect(h1.length).toEqual(2);
  });
  it('should find ul', () => {
    const ul = wrapper.find('ul');
    expect(ul.length).toEqual(1);
  });
  it('should find li', () => {
    const li = wrapper.find('li');
    expect(li.length).toEqual(3);
  });
  it('should find img', () => {
    const img = wrapper.find('img');
    expect(img.length).toEqual(1);
  });
  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(4);
  });
  it('should call checkout when clicked', () => {
    wrapper.find('.order-now').simulate('click', {
      clickMe: props.clickMe,
    });
    expect(props.clickMe).toHaveBeenCalled();
  });

});
