import { render } from '@testing-library/react';

import Card from './card';

describe('< Card />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<Card size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<Card color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
