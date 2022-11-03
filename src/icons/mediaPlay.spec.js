import { render } from '@testing-library/react';

import MediaPlay from './mediaPlay';

describe('< MediaPlay />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<MediaPlay />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<MediaPlay size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<MediaPlay color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
