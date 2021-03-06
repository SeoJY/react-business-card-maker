import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './assets/scss/style.scss';
import AuthService from './service/auth_service';
import firebaseApp from './service/firebase';
import ImageUploader from './service/image_uploader';
import ImgFileInput from './components/maker/inputs/imgFileInput';
import CardRepository from './service/card_repository';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository(firebaseApp);
const imageUploader = new ImageUploader();

// props => {...props} : props를 그대로 전달(for 확장성)
const FileInput = memo(props => (
  <ImgFileInput {...props} imageUploader={imageUploader} />
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      FileInput={FileInput}
      authService={authService}
      cardRepository={cardRepository}
    />
  </React.StrictMode>
);