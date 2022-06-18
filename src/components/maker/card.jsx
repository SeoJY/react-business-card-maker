import React from 'react';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({ card }) => {
  const {name, company, title, email, message, theme, fileName, fileURL} = card;
  const imgURL = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`card ${getStyles(theme)}`}>
      <div className="card-thumb">
        <img src={imgURL} alt="" />
      </div>
      <div className="card-info">
        <ul>
          <li className="name"><strong className="blind">Name</strong>{name}</li>
          <li><strong className="blind">Company</strong>{company}</li>
          <li><strong className="blind">Title</strong>{title}</li>
          <li><strong className="blind">Email</strong>{email}</li>
          <li className="message"><strong className="blind">Message</strong><q>{message}</q></li>
        </ul>
      </div>
    </li>
  )
};

function getStyles(theme) {
  switch(theme) {
    case 'Dark':
      return 'theme-dark';
    case 'Light':
      return 'theme-light';
    case 'Jordi':
      return 'theme-jordi';
  }
}

export default Card;