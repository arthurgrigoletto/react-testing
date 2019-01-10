import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the textarea', () => {
  beforeEach(() => {
    // SIMULATE ON CHANGE EVENT
    wrapped.find('textarea').simulate('change', {
      target: {
        name: 'comment',
        value: 'New Comment'
      }
    });

    // FORCE THE COMPONENT TO RE-RENDER
    wrapped.update();
  });
  
  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('New Comment');
  });

  it('when form is submitted, textarea gets emptied', () => {
    // SIMULATE ON SUBMIT EVENT
    wrapped.find('form').simulate('submit');

    // FORCE THE COMPONENT TO RE-RENDER
    wrapped.update();

    // TEST IF TEXTAREA IS EMPTY
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
