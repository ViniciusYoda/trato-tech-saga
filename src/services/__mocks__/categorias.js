import mockCategorias from '../../mocks/categorias';

const categoriasService = {
  buscar: () => mockCategorias,
  buscarUmaCategoria: () => mockCategorias[0],
}

export default categoriasService;