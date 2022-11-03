import { render } from '@testing-library/react';

import BrightnessMax from './brightnessMax';

describe('< BrightnessMax />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<BrightnessMax />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<BrightnessMax size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<BrightnessMax color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
