import React from "react";

function ViewBlogContent({ content }) {
  if (!content) {
    return null;
  }

  // If content is a string (HTML from API), render it directly
  if (typeof content === "string") {
    return (
      <div
        className="blog-content prose prose-lg dark:prose-invert max-w-none"
        data-aos="fade-up"
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          color: "inherit",
        }}
      />
    );
  }

  // If content is an object (legacy format), render structured content
  return (
    <div className="">
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white my-4"
          data-aos="fade-up"
        >
          {content.introduction?.title}
        </h2>
        <p className="text-black dark:text-gray-400 " data-aos="fade-up">
          {content.introduction?.text}
        </p>
      </section>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white mb-4"
          data-aos="fade-up"
        >
          {content.trends?.title}
        </h2>
        <ul
          data-aos="fade-up"
          className="list-disc list-inside text-black dark:text-gray-400 space-y-2"
        >
          {content.trends?.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white mb-4"
          data-aos="fade-up"
        >
          {content.benefits?.title}
        </h2>
        <ul
          data-aos="fade-up"
          className="list-disc list-inside text-black dark:text-gray-400 space-y-2"
        >
          {content.benefits?.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white mb-4"
          data-aos="fade-up"
        >
          {content.impact?.title}
        </h2>
        <ul
          data-aos="fade-up"
          className="list-disc list-inside text-black dark:text-gray-400 space-y-2"
        >
          {content.impact?.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white mb-4"
          data-aos="fade-up"
        >
          {content.future?.title}
        </h2>
        <p data-aos="fade-up" className="text-black dark:text-gray-400">
          {content.future?.text}
        </p>
      </section>

      <section>
        <h2
          data-aos="fade-up"
          className="text-2xl font-semibold mb-4 dark:text-white"
        >
          {content.about?.title}
        </h2>
        <p data-aos="fade-up" className="text-black dark:text-gray-400">
          {content.about?.text}
        </p>
      </section>
    </div>
  );
}

export default ViewBlogContent;
