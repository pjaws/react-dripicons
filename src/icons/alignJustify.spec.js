import { render } from '@testing-library/react';

import AlignJustify from './alignJustify';

describe('< AlignJustify />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<AlignJustify />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<AlignJustify size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<AlignJustify color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
