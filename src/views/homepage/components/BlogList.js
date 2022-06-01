import React from 'react';
import Article from './Article';
import { articles } from '../../../shared/articles';

const BlogList = () => {
  return (
    <div className='BlogList'>
      <div className='row m-4'>
        {[...articles].reverse().map((article) => {
          return (
            <div className='col-md-4 mb-4'>
              <Article
                id={article.id}
                key={article.id}
                title={article.title}
                content={article.content}
                published='today'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
