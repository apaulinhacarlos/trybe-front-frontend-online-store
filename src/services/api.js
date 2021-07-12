export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(URL);
    const results = await response.json();
    return results;
  } else if (query) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(URL);
    const results = await response.json();
    return results;
  } else {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await fetch(URL);
    const results = await response.json();
    return results;
  }
}
