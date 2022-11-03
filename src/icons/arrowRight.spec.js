import { render } from '@testing-library/react';

import ArrowRight from './arrowRight';

describe('< ArrowRight />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ArrowRight />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ArrowRight size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ArrowRight color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
