import React, { PropTypes } from 'react';

const Result = props => (
  <li className="card">
    <div className="card__image">
      <img src={props.thumbnail} alt="" />
    </div>
    <div className="card__body">
      <h2 className="card__title">
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer noopener"
        >{props.title}</a>
      </h2>
      <a
        className="card__link"
        href={props.url}
        target="_blank"
        rel="noreferrer noopener"
      >{props.url}</a>
      <div
        className="card__snippet"
        dangerouslySetInnerHTML={{ __html: props.extract }}
      />
    </div>
    <div className="card__stats">
      <span>~4min read</span>
      <span title="Pageviews in the last 7 days">Pageviews: {props.pageviews}</span>
    </div>
  </li>
);

Result.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  extract: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  pageviews: PropTypes.string.isRequired,
};

export default Result;
