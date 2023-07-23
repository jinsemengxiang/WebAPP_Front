import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppRouter from '../renderer/AppRouter';

describe('App', () => {
  it('should render', () => {
    expect(render(<AppRouter />)).toBeTruthy();
  });
});
