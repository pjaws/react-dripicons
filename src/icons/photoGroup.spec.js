import { render } from '@testing-library/react';

import PhotoGroup from './photoGroup';

describe('< PhotoGroup />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<PhotoGroup />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<PhotoGroup size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<PhotoGroup color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
