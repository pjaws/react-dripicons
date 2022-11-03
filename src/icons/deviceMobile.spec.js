import { render } from '@testing-library/react';

import DeviceMobile from './deviceMobile';

describe('< DeviceMobile />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<DeviceMobile />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<DeviceMobile size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<DeviceMobile color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
