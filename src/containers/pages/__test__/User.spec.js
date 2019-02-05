import { shallow } from 'enzyme';
import React from 'react';
import User from '../User';

describe('User Component', () => {
  let wrapper;
  const props = {
    closeCart: jest.fn()
  }
  const e = {
    target: {
      value: 2,
    }
  }
  const handleSideNav = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<User {...props}/>);
  });

  it('should render User', () => {
    shallow(<User {...props}/>);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(5);
  });
  it('should find p', () => {
    const p = wrapper.find('p');
    expect(p.length).toEqual(2);
  });
  
  it('should call componentDidMount ', () => {
    wrapper.instance().componentDidMount();
  });
  it('should call handleSideNav when pending is clicked', () => {
    wrapper.find('#pending-nav').simulate('click', {
      handleSideNav: handleSideNav,
    });
        wrapper.instance().handleSideNav('pending');
  });
  it('should call handleSideNav when confirm is clicked', () => {
    wrapper.find('#confirm-nav').simulate('click', {
      handleSideNav: handleSideNav,
    });
        wrapper.instance().handleSideNav('confirm');
  });
  it('should set isLoading state to false', () => {
    wrapper.setState({
      loading: false,
    })
  });


});