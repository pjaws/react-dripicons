import { render } from '@testing-library/react';

import Power from './power';

describe('< Power />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Power />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<Power size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<Power color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
