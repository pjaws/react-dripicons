import { render } from '@testing-library/react';

import VolumeLow from './volumeLow';

describe('< VolumeLow />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<VolumeLow />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<VolumeLow size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<VolumeLow color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
