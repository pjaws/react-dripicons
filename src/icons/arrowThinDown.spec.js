import { render } from '@testing-library/react';

import ArrowThinDown from './arrowThinDown';

describe('< ArrowThinDown />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ArrowThinDown />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ArrowThinDown size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ArrowThinDown color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
