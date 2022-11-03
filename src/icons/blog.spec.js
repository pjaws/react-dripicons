import { render } from '@testing-library/react';

import Blog from './blog';

describe('< Blog />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Blog />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<Blog size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<Blog color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
