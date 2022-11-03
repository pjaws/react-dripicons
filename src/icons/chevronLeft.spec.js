import { render } from '@testing-library/react';

import ChevronLeft from './chevronLeft';

describe('< ChevronLeft />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ChevronLeft />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ChevronLeft size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ChevronLeft color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
