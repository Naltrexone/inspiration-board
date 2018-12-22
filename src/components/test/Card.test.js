import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {

    const testCard = {
      id: 99,
      text: 'be happy!'
    }
    const wrapper = shallow(
      <Card card={testCard} deleteCard={ () => {} }/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
