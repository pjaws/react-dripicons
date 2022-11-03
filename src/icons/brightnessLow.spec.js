import { render } from '@testing-library/react';

import BrightnessLow from './brightnessLow';

describe('< BrightnessLow />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<BrightnessLow />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<BrightnessLow size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<BrightnessLow color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
