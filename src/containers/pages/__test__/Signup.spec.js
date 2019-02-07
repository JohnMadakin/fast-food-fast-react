import { shallow } from 'enzyme';
import React from 'react';
import { SignUp } from '../SignUp';

describe('SignUp Component', () => {
  let wrapper;
  const event = {
    target: {
      name: 'a',
    },
    preventDefault: jest.fn(),
  }; 
const props = {
    loginPanel: true,
    errorMessage: 'hello',
    signin: jest.fn(),
    closeSignUp: jest.fn(),
  }
  beforeEach(() => {
    wrapper = shallow(<SignUp {...props}/>);
  });

  it('should render SignUp when panel is open', () => {
    shallow(<SignUp {...props}/>);
  });
  it('should render SignUp when panel is close', () => {
    wrapper.setProps({
      loginPanel: false,
      errorMessage: null,
    });
    shallow(<SignUp {...props}/>);
  });
  // it('should call signin when clicked', () => {
  //   wrapper.find('.submit').simulate('click', {
  //     signin: props.signin,
  //   });
  //   expect(props.signin).toHaveBeenCalled();
  // });
  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(8);
  });
  it('should find h1', () => {
    const h1 = wrapper.find('h1');
    expect(h1.length).toEqual(1);
  });

  it('should find main', () => {
    const main = wrapper.find('main');
    expect(main.length).toEqual(1);
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
    expect(button.length).toEqual(1);
  });
  it('should call handleInputChange when triggered', () => {
    wrapper.instance().handleInputChange(event);
  });
  it('should call checkPasswords when triggered', () => {
    wrapper.instance().checkPasswords(event);
  });
  it('should call checkPasswords when triggered - password mismatch', () => {
    wrapper.setState({
      passwordMismatchError: false,
    })
    wrapper.instance().checkPasswords(event);
  });

  it('should call registerUser when triggered', () => {
    wrapper.instance().registerUser(event);
  });
  it('should set firstname', () => {
    wrapper.setState({
      inputs: {
        firstname: 'omare',
      },
    });
    wrapper.instance().validateInputs();

  });
  it('should set lastname', () => {
    wrapper.setState({
      inputs: {
        lastname: 'omare',
      },
    })
    wrapper.instance().validateInputs();

  });
  it('should set username', () => {
    wrapper.setState({
      inputs: {
        lastname: 'omare25',
      },
    })
    wrapper.instance().validateInputs();
  });
  it('should set email', () => {
    wrapper.setState({
      inputs: {
        email: 'omare@yahoo.com',
      },
    });
    wrapper.instance().validateInputs();

  });
  it('should set password', () => {
    wrapper.setState({
      inputs: {
        password: 'omare1234!',
      },
    })
    wrapper.instance().validateInputs();

  });
  it('should set confirm password', () => {
    wrapper.setState({
      inputs: {
        confirmPassword: 'omare1234!',
      },
    })
    wrapper.instance().validateInputs();
  });
  it('should set phoneNo', () => {
    wrapper.setState({
      inputs: {
        phoneNo: '08023219130',
      },
    });
    wrapper.instance().validateInputs();

  });
  it('should set deliveryAddress', () => {
    wrapper.setState({
      inputs: {
        deliveryAddress: '10 ikorodu road',
      },
    })
    wrapper.instance().validateInputs();

  });
  it('should set imageUrl', () => {
    wrapper.setState({
      inputs: {
        imageUrl: 'http://cloud.com/dajl3',
      },
    })
    wrapper.instance().validateInputs();
  });

  it('should set invalid firstname', () => {
    wrapper.setState({
      inputs: {
        firstname: '',
      },
    });
    wrapper.instance().validateInputs();

  });
  it('should set invalid lastname', () => {
    wrapper.setState({
      inputs: {
        lastname: '',
      },
    })
    wrapper.instance().validateInputs();

  });
  it('should set invalid username', () => {
    wrapper.setState({
      inputs: {
        lastname: 'o',
      },
    })
    wrapper.instance().validateInputs();
  });
  it('should set invalid email', () => {
    wrapper.setState({
      inputs: {
        email: 'omare@yahoo',
      },
    });
    wrapper.instance().validateInputs();

  });
  it('should set invalid password', () => {
    wrapper.setState({
      inputs: {
        password: 'o',
      },
    })
    wrapper.instance().validateInputs();

  });
  it('should set invalid confirm password', () => {
    wrapper.setState({
      inputs: {
        confirmPassword: '',
      },
    })
    wrapper.instance().validateInputs();
  });
  it('should set invalid phoneNo', () => {
    wrapper.setState({
      inputs: {
        phoneNo: '0802321',
      },
    });
    wrapper.instance().validateInputs();

  });
  it('should set invalid deliveryAddress', () => {
    wrapper.setState({
      inputs: {
        deliveryAddress: '',
      },
    })
    wrapper.instance().validateInputs();

  });
  it('should set invalid imageUrl', () => {
    wrapper.setState({
      inputs: {
        imageUrl: 'htt',
      },
    })
    wrapper.instance().validateInputs();
  });
  it('should set isLoggedIn state to true', () => {
    wrapper.setState({
      isLoggedIn: true,
    })
  });
  it('should set isLoggedIn state to false', () => {
    wrapper.setState({
      isLoggedIn: false,
    })
  });



});
