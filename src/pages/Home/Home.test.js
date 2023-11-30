import Home from '.';
import { render, screen } from '../../test-utils';

jest.mock('services/categorias');

describe('Testando página Home', () => {
  test('deve renderizar com categorias', async () => {
    render(<Home />);
    const categorias = await screen.findAllByTestId('home-categorias');

    expect(categorias).toHaveLength(2);
  })
})