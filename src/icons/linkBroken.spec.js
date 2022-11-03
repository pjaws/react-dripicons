import { render } from '@testing-library/react';

import LinkBroken from './linkBroken';

describe('< LinkBroken />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<LinkBroken />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<LinkBroken size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<LinkBroken color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
