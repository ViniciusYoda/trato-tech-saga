import { rotaAnuncie, rotaCategoria } from '../../routes';
import Home from '.';
import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import mockCategorias from '../../mocks/categorias';

jest.mock('services/categorias');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('Testando página Home', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })
  describe('Anuncie', () => {
    test('Deve redirecionar para a página anuncie', () => {
      render(<Home />);
      const botaoAnuncie = screen.getByTestId('home-botao-anunciar');

      userEvent.click(botaoAnuncie);

      expect(mockNavigate).toHaveBeenCalledWith(`/${rotaAnuncie}`);
    })
  })

  describe('Categorias', () => {
    test('Deve renderizar com categorias', async () => {
      render(<Home />);
      const categorias = await screen.findAllByTestId('home-categorias');
  
      expect(categorias).toHaveLength(2);
    })
    
    test('Deve redirecionar para o id da categoria', async () => {
      render(<Home />);
      const categorias = await screen.findAllByTestId('home-categorias');

      const primeiraCategoria = categorias[0];

      userEvent.click(primeiraCategoria);

      expect(mockNavigate).toHaveBeenCalledWith(`/${rotaCategoria}/${mockCategorias[0].id}`)
    })
  })

})