import React from 'react';
import { render } from 'react-testing-library';
import Navbar from '../Navbar';

describe('<Navbar.Link />', () => {
  it('should render component with default props', () => {
    const { container } = render(<Navbar.Link />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with specific props', () => {
    const { container } = render(<Navbar.Link active open withChevron />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
