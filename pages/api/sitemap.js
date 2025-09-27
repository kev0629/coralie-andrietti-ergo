
const EXTERNAL_DATA_URL = 'https://coralie-andrietti-ergo.com';

// Based on the file structure, we list the known pages.
// This list should be updated if new static pages are added outside of the News folder.
const staticPages = [
  '/',
  '/News/autonomie',
  '/News/equilibre_occupationnel',
  '/News/flemme_vs_difficultes',
  '/News/inclusion',
  '/News/le_repere_des_3',
  '/News/Les_troubles_neuro_visuels',
  '/News/pap_pps',
  '/News/placer_sa_feuille',
  '/News/quand_consulter',
  '/News/timer',
  '/News'
];

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
           <url>
               <loc>${`${EXTERNAL_DATA_URL}${page}`}</loc>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export default function SiteMap(req, res) {
  const sitemap = generateSiteMap(staticPages);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
