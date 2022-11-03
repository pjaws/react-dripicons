import { render } from '@testing-library/react';

import ArrowDownSolid from './arrowDownSolid';

describe('< ArrowDownSolid />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ArrowDownSolid />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ArrowDownSolid size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ArrowDownSolid color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
