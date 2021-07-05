import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these projects !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem style={{width:"250px", height:"250px"}}
              src="https://devopedia.org/images/article/292/9224.1603527296.jpg"
              text='h1 Developer helps you to build projects from scratch'
              label='Full Stack Engineer'
              path='/services'
            />
            <CardItem
              src='https://engineering.eckovation.com/wp-content/uploads/2018/05/12.jpg'
              text='Our team build a project for you as per your specification'
              label='IOT Projects'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="https://sites.google.com/site/pharmacademicsolution/_/rsrc/1347093668697/paper-publication/publication.jpg"
              text='Paper publication increase your placement chances publish your 1st paper with h1 developer in reputed publication'
              label='Paper Publication'
              path='/services'
            />
            <CardItem
              src='https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2019/11/22153344/website-development.jpg'
              text='h1 Developer specially works in web development projects '
              label='Web Development'
              path='/products'
            />
            <CardItem
              src='https://res.cloudinary.com/practicaldev/image/fetch/s--cdy4ia_k--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/x66t5jamhizxrbosybsw.png'
              text='Currently we are not take projects for UX & UI design sorry for inconvinice'
              label='UX and UI'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;