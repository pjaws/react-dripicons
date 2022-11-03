import { render } from '@testing-library/react';

import AlignCenter from './alignCenter';

describe('< AlignCenter />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<AlignCenter />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<AlignCenter size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<AlignCenter color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
