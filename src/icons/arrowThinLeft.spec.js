import { render } from '@testing-library/react';

import ArrowThinLeft from './arrowThinLeft';

describe('< ArrowThinLeft />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ArrowThinLeft />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ArrowThinLeft size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ArrowThinLeft color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
