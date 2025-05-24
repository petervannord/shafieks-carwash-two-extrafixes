/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nexgenautodetail.com", // Replace with your domain
  generateRobotsTxt: true, // Generates robots.txt file
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.8,
  exclude: ["/admin", "/dashboard"], // Exclude sensitive pages
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/dashboard"] },
    ],
  },
};
