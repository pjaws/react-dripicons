import { render } from '@testing-library/react';

import ArrowUpSolid from './arrowUpSolid';

describe('< ArrowUpSolid />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ArrowUpSolid />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ArrowUpSolid size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ArrowUpSolid color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
