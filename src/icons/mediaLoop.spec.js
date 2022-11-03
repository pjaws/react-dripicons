import { render } from '@testing-library/react';

import MediaLoop from './mediaLoop';

describe('< MediaLoop />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<MediaLoop />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<MediaLoop size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<MediaLoop color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
