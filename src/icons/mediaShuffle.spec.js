import { render } from '@testing-library/react';

import MediaShuffle from './mediaShuffle';

describe('< MediaShuffle />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<MediaShuffle />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<MediaShuffle size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<MediaShuffle color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
