import React from 'react';
import BlogList from '../homepage/components/BlogList';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const BlogPage = () => {
  return (
    <div className='BlogPage'>
      <Card>
        <CardImg
          alt='Blog Post Image'
          src={`../../images/blogPost1.jpg`}
          width='100%'
        />

        <CardBody>
          <CardTitle tag='lead'>Blog Post 3 Title</CardTitle>
        </CardBody>
        <CardBody>
          <CardText tag='h2'>My third blog</CardText>
          <CardText>
            <p>
              Deciding to enter a full-stack bootcamp has been the best way to
              give a structure to any previous knowledge that I had acquired as
              a self-taught web developer.
            </p>
            <p>
              The journey started about a year ago, when I took the first
              courses on FreeCodeCamp. HTML and CSS left me with the curiosity
              to learn more so I started learning JavaScript. By the time I
              realised that JavaScript was going to require much more dedication
              and practice, some time had passed and I started to feel the
              frustation.
            </p>
            <p>
              It was at that point that my sister introduced me to the idea of
              following the bootcamp that she had recently finished, and after
              some consideration I decided to follow her steps and got enrolled.
            </p>
            <p>
              I can only compare my experience at the bootcamp with the path I
              was following when studying on my own, and I must admit that I did
              find that structure I was after. And not just that, I have also
              been exposed to technologies that I had not considered before.
            </p>
            <p>
              I have now finished the frontend part of the bootcamp and I feel
              that I have reinforced the foundations of HTML and Bootstrap, and
              I have reached a much better level of JavaScript which will allow
              me to keep improving. This has also been helpful now that I have
              started studying data structures and algorithms.
            </p>
            <p>
              Currently I am studying the last module of the bootcamp which is
              related to the backend. I had not studied it before so I am quite
              excited of being exposed to new technologies, and the idea of it
              helping me rounding up my knowledge as a full stack developer.
            </p>
          </CardText>
          <CardText className='blog-published'>
            <small>Published 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <div className='container'>
        <BlogList />
      </div>
    </div>
  );
};

export default BlogPage;
