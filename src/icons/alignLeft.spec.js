import { render } from '@testing-library/react';

import AlignLeft from './alignLeft';

describe('< AlignLeft />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<AlignLeft />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<AlignLeft size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<AlignLeft color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
