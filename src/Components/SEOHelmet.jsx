import { Helmet } from 'react-helmet-async';
import { generateMetaTags } from '../util/seo';

const SEOHelmet = ({ page, subPage = null, customTitle = null, customDescription = null }) => {
  const seoData = generateMetaTags(page, subPage);
  
  // Override with custom data if provided
  const title = customTitle || seoData.title;
  const description = customDescription || seoData.meta.find(meta => meta.name === 'description')?.content;
  
  return (
    <Helmet>
      <title>{title}</title>
      
      {/* Meta tags */}
      {seoData.meta.map((meta, index) => (
        meta.name ? (
          <meta key={index} name={meta.name} content={meta.content} />
        ) : (
          <meta key={index} property={meta.property} content={meta.content} />
        )
      ))}
      
      {/* Custom description if provided */}
      {customDescription && (
        <meta name="description" content={customDescription} />
      )}
      
      {/* Link tags */}
      {seoData.link.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Structured data */}
      {seoData.script.map((script, index) => (
        <script key={index} type={script.type}>
          {script.innerHTML}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHelmet; 