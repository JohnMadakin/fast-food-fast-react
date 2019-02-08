import { shallow } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import { Checkout, mapDispatchToProps, mapStateToProps} from '../Checkout';

describe('Checkout Component', () => {
  let wrapper;
  const e = {
    target: {
      value: 2,
    }
  };
  const props = {
    user: {
      token: 'mmddskdsmfdsf',
    },
    orderPostSuccess: null,
    errorMessage: {},
    postOrder: jest.fn(),
    errorOccured: null,
    toastManager: {
      add: jest.fn(),
    }
  }

  beforeEach(() => {
    jest.spyOn(window.location, 'replace').mockImplementation(() => undefined);
    wrapper = shallow(<Checkout  {...props} />);
  });

  it('should render Checkout', () => {
    const items = JSON.stringify([{
      itemPrice: 200,
      quantity: 2,
    }]);
    window.localStorage.setItem('usercart', items);
    shallow(<Checkout />);
  });

  it('should find div', () => {  
    const div = wrapper.find('div');
    expect(div.length).toEqual(8);
  });
  it('should find button', () => {
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
  });

  it('should find main', () => {
    const main = wrapper.find('main');
    expect(main.length).toEqual(1);
  });
  it('should call componentDidMount', () => {
    wrapper.instance().componentDidMount();
  });

  it('should call placeOrder', () => {
    wrapper.instance().placeOrder();
  });
  it('should call shouldComponentUpdate and return false', () => {
    const nextProps = {
      errorOccured: true,
      errorMessage: {
        data: {
          message: 'error',
        }
      },
    }
   expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });
  it('should call shouldComponentUpdate and returm true', () => {
    const nextProps = {
      orderPostSuccess: true,
    }
   expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(true);
  });
  it('should call handleDeliveryAddress', () => {
    wrapper.instance().handleDeliveryAddress(e);
  });
});
