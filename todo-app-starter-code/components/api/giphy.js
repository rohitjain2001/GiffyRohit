const GIPHY_API_KEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65'; // Replace with your GIPHY API key

export const fetchGIFs = async (searchQuery) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchQuery}&limit=10`);
    if (!response.ok) {
      throw new Error('GIPHY API request failed');
    }

    const data = await response.json();
    return data.data.map((gif) => ({
      id: gif.id,
      url: gif.images.fixed_height.url,
      title: gif.title,
    }));
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error; // You can handle the error in your component
}
};