const BASE_URL = "https://www.anrazzi.fr";

const API_URL = `https://headless.tebex.io/api/accounts/${process.env.NEXT_PUBLIC_TEBEX_PUBLIC}/packages`;

function generateSiteMap(products) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- URL statiques -->
      <url>
        <loc>${BASE_URL}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${BASE_URL}/store</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <!-- URLs dynamiques des produits -->
      ${products
        .map(({ id, date }) => {
          return `
        <url>
          <loc>${`${BASE_URL}/store/${id}`}</loc>
          <lastmod>${new Date(date).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `;
        })
        .join("")}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  try {
    // Récupération des produits depuis l'API Tebex
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    const products = data.data || [];

    // Génération du sitemap
    const sitemap = generateSiteMap(products);

    // Définition des en-têtes et envoi du sitemap
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap:", error);
    res.status(500).end();
  }

  return {
    props: {},
  };
}
