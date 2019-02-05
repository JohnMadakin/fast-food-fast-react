import { shallow } from 'enzyme';
import React from 'react';
import Input from '../Input';

describe('input Component', () => {
  const props = {
    inputtype: "text",
  }
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Input />);
  });

  it('should render Button', () => {
    shallow(<Input {...props}/>);
  });
  it('should render Button', () => {
    wrapper.setProps({
      inputtype: 'textarea',
    })
    shallow(<Input {...props}/>);
  });

  it('should find button', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
});