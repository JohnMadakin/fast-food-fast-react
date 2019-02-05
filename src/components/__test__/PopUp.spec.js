import { shallow } from 'enzyme';
import React from 'react';
import PopUp from '../PopUp';

describe('Popup Component', () => {
  let wrapper;
  const props = {
    message: {
      title: 'title sample',
      body: 'body sample',
      footer: 'footer',
    },
  }
  beforeEach(() => {
    wrapper = shallow(<PopUp {...props}/>);
  });

  it('should render Popup', () => {
    shallow(<PopUp {...props}/>);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(3);
  });
  it('should find p', () => {
    const p = wrapper.find('p');
    expect(p.length).toEqual(2);
  });
  it('should find h2', () => {
    const h2 = wrapper.find('h2');
    expect(h2.length).toEqual(1);
  });
});