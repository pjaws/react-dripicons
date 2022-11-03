import { render } from '@testing-library/react';

import VolumeFull from './volumeFull';

describe('< VolumeFull />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<VolumeFull />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<VolumeFull size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<VolumeFull color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
