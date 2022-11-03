import { render } from '@testing-library/react';

import CloudDownload from './cloudDownload';

describe('< CloudDownload />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<CloudDownload />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<CloudDownload size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<CloudDownload color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
