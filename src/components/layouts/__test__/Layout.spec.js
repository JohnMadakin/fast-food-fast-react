import { shallow } from 'enzyme';
import React from 'react';
import Layout from '../Layout';

describe('Layout Component', () => {
  const props = {
    children: {}
  }
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Layout {...props}/>);
  });

  it('should render Button', () => {
    shallow(<Layout {...props} />);
  });

  it('should find button', () => {
    const frag = wrapper.find('Fragment');
    expect(frag.length).toEqual(1);
  });
});