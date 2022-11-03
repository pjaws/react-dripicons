import { render } from '@testing-library/react';

import DeviceDesktop from './deviceDesktop';

describe('< DeviceDesktop />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<DeviceDesktop />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<DeviceDesktop size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<DeviceDesktop color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
