import { render } from '@testing-library/react';

import ArrowThinUp from './arrowThinUp';

describe('< ArrowThinUp />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ArrowThinUp />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ArrowThinUp size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ArrowThinUp color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
