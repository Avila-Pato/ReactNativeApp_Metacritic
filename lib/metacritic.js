/* eslint-disable prettier/prettier */
// lib/metacritic.js en el frontend

export async function getLatestGames() {
  const response = await fetch("http://localhost:3000/");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  const {
    data: { items },
  } = data;

  return items.map((item) => {
    const { description, slug, releaseDate, image, criticScoreSummary, title } =
      item;
    const { score } = criticScoreSummary;

    // crea la imagen
    const { bucketType, bucketPath } = image;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image: img,
    };
  });
}
