import { render } from '@testing-library/react';

import ShoppingBag from './shoppingBag';

describe('< ShoppingBag />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ShoppingBag />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ShoppingBag size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ShoppingBag color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
