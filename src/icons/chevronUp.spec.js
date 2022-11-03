import { render } from '@testing-library/react';

import ChevronUp from './chevronUp';

describe('< ChevronUp />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ChevronUp />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<ChevronUp size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<ChevronUp color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
