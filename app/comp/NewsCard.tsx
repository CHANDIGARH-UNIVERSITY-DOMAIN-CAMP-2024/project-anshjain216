/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const NewsCard = ({ article } : {
    article: any
}) => {
  const {
    title,
    link,
    description,
    image_url,
    pubDate,
    source_name,
  } = article;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        src={image_url}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-500">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          {description}
        </p>
        <div className="flex items-center justify-between text-gray-500 text-xs">
          <span>Source: {source_name}</span>
          <span>{new Date(pubDate).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;