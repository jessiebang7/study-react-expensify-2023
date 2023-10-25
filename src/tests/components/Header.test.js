////////// Using react-test-renderer
// import React from 'react';
// import ReactShallowRender from 'react-test-renderer/shallow';
// import { Header } from '../../components/Header';

// test('should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
//   console.log(renderer.getRenderOutput());
// });


////////// Using Enzyme
import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

test('should render <Header /> correctly', () => {
  const wrapper = shallow(<Header startLogout={()=>{}}/>);

  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe('Expensify');

    // expect(toJSON(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />)
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
