import { render } from '@testing-library/react';

import ArrowThinRight from './arrowThinRight';

describe('< ArrowThinRight />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ArrowThinRight />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ArrowThinRight size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ArrowThinRight color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
