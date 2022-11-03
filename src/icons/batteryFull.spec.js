import { render } from '@testing-library/react';

import BatteryFull from './batteryFull';

describe('< BatteryFull />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<BatteryFull />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<BatteryFull size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<BatteryFull color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
