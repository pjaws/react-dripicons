import { render } from '@testing-library/react';

import Question from './question';

describe('< Question />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Question />);

    expect(container).toMatchSnapshot();
  });

  it('sets the icon size', () => {
    const { container } = render(<Question size={32} />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('width', '32');
    expect(container.firstChild).toHaveAttribute('height', '32');
  });

  it('sets the icon color', () => {
    const { container } = render(<Question color="#000" />);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('fill', '#000');
  });
});
