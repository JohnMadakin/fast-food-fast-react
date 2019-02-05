import { shallow } from 'enzyme';
import React from 'react';
import Button from '../Button';

describe('Button Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Button />);
  });

  it('should render Button', () => {
    shallow(<Button />);
  });

  it('should find button', () => {
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
  });
});