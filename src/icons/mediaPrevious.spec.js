import { render } from '@testing-library/react';

import MediaPrevious from './mediaPrevious';

describe('< MediaPrevious />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<MediaPrevious />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<MediaPrevious size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<MediaPrevious color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
