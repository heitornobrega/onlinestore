/*
  Função getCategories, faz a requisiçao na API e retorna um array de objetos contendo as
  categorias e ID's nas chaves name e id.
 */

export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await response.json();
  return responseJson;
}

/*
  Função getProductsFromCategoryAndQuery recebe o id da categoria e o texto pesquisado e retorna
  um objeto contendo os dados do produto pesquisado.
 */
export async function getProductsFromCategoryAndQuery(
  categoryId, query,
) {
  console.log(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query} `);
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query} `);
  const responseJson = await response.json();
  return responseJson;
}
