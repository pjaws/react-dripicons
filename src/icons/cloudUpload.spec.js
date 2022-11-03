import { render } from '@testing-library/react';

import CloudUpload from './cloudUpload';

describe('< CloudUpload />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<CloudUpload />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<CloudUpload size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<CloudUpload color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
