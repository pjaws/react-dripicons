import { render } from '@testing-library/react';

import ThumbsUp from './thumbsUp';

describe('< ThumbsUp />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ThumbsUp />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ThumbsUp size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ThumbsUp color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
