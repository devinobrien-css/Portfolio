import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

test('EXAMPLE', async () => {
  render(<div>EXAMPLE</div>);

  const object = screen.getByText('EXAMPLE');

  expect(object).toBeInTheDocument();
});
