import { render } from '@testing-library/react';

import Map from './map';

describe('< Map />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Map />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<Map size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<Map color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
