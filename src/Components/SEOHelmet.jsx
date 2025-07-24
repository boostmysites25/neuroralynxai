import { useEffect } from 'react';
import { generateMetaTags } from '../util/seo';

const SEOHelmet = ({ page, subPage = null, customTitle = null, customDescription = null }) => {
  const seoData = generateMetaTags(page, subPage);
  
  // Override with custom data if provided
  const title = customTitle || seoData.title;
  const description = customDescription || seoData.meta.find(meta => meta.name === 'description')?.content;

  useEffect(() => {
    // Set document title
    document.title = title;

    // Function to update or create meta tag
    const updateMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        } else if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Function to update or create link tag
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Update meta tags
    seoData.meta.forEach(meta => {
      if (meta.name) {
        updateMetaTag(`meta[name="${meta.name}"]`, 'content', meta.content);
      } else if (meta.property) {
        updateMetaTag(`meta[property="${meta.property}"]`, 'content', meta.content);
      }
    });

    // Update custom description if provided
    if (customDescription) {
      updateMetaTag('meta[name="description"]', 'content', customDescription);
    }

    // Update link tags
    seoData.link.forEach(link => {
      updateLinkTag(link.rel, link.href);
    });

    // Add structured data script
    if (seoData.script.length > 0) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.innerHTML.includes('"@context": "https://schema.org"')) {
          script.remove();
        }
      });

      // Add new structured data
      seoData.script.forEach(script => {
        const scriptElement = document.createElement('script');
        scriptElement.type = script.type;
        scriptElement.innerHTML = script.innerHTML;
        document.head.appendChild(scriptElement);
      });
    }

    // Cleanup function to remove added elements when component unmounts
    return () => {
      // Note: We don't clean up meta tags as they should persist for SEO
      // Only clean up if absolutely necessary
    };
  }, [title, description, page, subPage, customTitle, customDescription]);

  // This component doesn't render anything visible
  return null;
};

export default SEOHelmet; 