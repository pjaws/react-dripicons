import { render } from '@testing-library/react';

import BrightnessMedium from './brightnessMedium';

describe('< BrightnessMedium />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<BrightnessMedium />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<BrightnessMedium size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<BrightnessMedium color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
