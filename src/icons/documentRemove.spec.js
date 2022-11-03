import { render } from '@testing-library/react';

import DocumentRemove from './documentRemove';

describe('< DocumentRemove />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<DocumentRemove />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<DocumentRemove size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<DocumentRemove color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
