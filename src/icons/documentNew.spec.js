import { render } from '@testing-library/react';

import DocumentNew from './documentNew';

describe('< DocumentNew />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<DocumentNew />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<DocumentNew size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<DocumentNew color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
