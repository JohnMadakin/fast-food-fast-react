import { shallow } from 'enzyme';
import React from 'react';
import HomePage from '../HomePage';

describe('HomePage Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<HomePage />);
  });

  it('should render HomePage', () => {
    shallow(<HomePage />);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(7);
  });
  it('should find h2', () => {
    const h2 = wrapper.find('h2');
    expect(h2.length).toEqual(1);
  });

  it('should find main', () => {
    const main = wrapper.find('main');
    expect(main.length).toEqual(1);
  });

});