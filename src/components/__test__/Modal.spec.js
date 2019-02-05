import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../Modal';

describe('Modal Component', () => {
  let wrapper;
  let getPassword;
  let getUsername;
  const props = {
    loginPanel: true,
    errorMessage: 'hello',
    signin: jest.fn(),
    closeModal: jest.fn(),
  }
  const e = {
    target: {
      value: 'a'
    }
  }
  beforeEach(() => {
    wrapper = shallow(<Modal {...props}/>);
    getPassword = jest.fn();
    getUsername = jest.fn();

  });

  it('should render Modal when panel is open', () => {
    shallow(<Modal {...props}/>);
  });
  it('should render Modal when panel is close', () => {
    wrapper.setProps({
      loginPanel: false,
      errorMessage: null,
    });
    shallow(<Modal {...props}/>);
  });
  it('should call signin when clicked', () => {
    wrapper.find('.submit').simulate('click', {
      signin: props.signin,
    });
    expect(props.signin).toHaveBeenCalled();
  });
  it('should call getPassword when input is changed', () => {
    wrapper.find('#psw').simulate('change', {
      getPassword: getPassword,
      target: {
        id: 'psw',
      },
    });
    wrapper.instance().getPassword(e);
  });
  it('should call getUsername when input is changed', () => {
    wrapper.find('#uname').simulate('change', {
      getUsername: getUsername,
      target: {
        id: 'uname',
      },

    });
    wrapper.instance().getUsername(e);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(5);
  });
  it('should find form', () => {
    const form = wrapper.find('form');
    expect(form.length).toEqual(1);
  });

  it('should find label', () => {
    const label = wrapper.find('label');
    expect(label.length).toEqual(3);
  });
  it('should find button', () => {
    const button = wrapper.find('button');
    expect(button.length).toEqual(2);
  });
  it('should find input', () => {
    const input = wrapper.find('input');
    expect(input.length).toEqual(2);
  });

});