import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';

describe('Header Component', () => {
  let wrapper;
  const props = {
    user: {
      token: 'nsnlds0894w',
    },

  }
  const e = {
    preventDefault: jest.fn(),
  }
  beforeEach(() => {
    wrapper = shallow(<Header {...props}/>);
  });
  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(6);
  });
  it('should find header', () => {
    const header = wrapper.find('header');
    expect(header.length).toEqual(1);
  });

  it('should find nav', () => {
    const nav = wrapper.find('nav');
    expect(nav.length).toEqual(1);
  });
  it('should find Link', () => {
    const link = wrapper.find('Link');
    expect(link.length).toEqual(2);
  });
  it('should call handleLoginModal', () => {
    wrapper.instance().handleLoginModal();
  });
  it('should call closeModal', () => {
    wrapper.instance().closeModal(e);
  });
  it('should call handleSignIn', () => {
    wrapper.instance().handleSignIn(e);
  });
  it('should call showCart', () => {
    wrapper.instance().showCart();
  });
  it('should call handleLogoutModal', () => {
    wrapper.instance().handleLogoutModal();
  });
  it('should call openMenu', () => {
    wrapper.instance().openMenu();
  });
  it('should call closeCart', () => {
    wrapper.instance().closeCart();
  });

});
// handleLoginModal
//   closeModal
//    handleSignIn 
//   showCart
//   closeCart(
//   handleLogoutModal
//   openMenu 