import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const Article = ({ id, title, content, published }) => {
  return (
    <div className='Article'>
      <Card>
        <CardImg alt='Blog Post Image' src={`../../images/blogPost${id}.jpg`} />

        <CardBody style={{ overflow: 'hidden' }}>
          <CardText className='blog-title'>
            <h4>{title}</h4>
          </CardText>
          <CardText
            className='blog-content'
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {content.substring(0, 120)}
            {content.length >= 120 && '...'}{' '}
          </CardText>
          <CardText className='blog-published'>
            <small>{published}</small>
          </CardText>
          <Link to='blogPage'>
            <small>Read More...</small>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Article;
