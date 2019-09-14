import React from 'react';
import { FormBannerStyles } from './styles';

const FormBanner = ({ label, value, onChange, type }) => {
  return (
    <FormBannerStyles>
      <FormBannerStyles.Title>
        ChuckNorris
      </FormBannerStyles.Title>
      <FormBannerStyles.TagLine>
        Laughter is the best medicine
      </FormBannerStyles.TagLine>
    </FormBannerStyles>
  );
};

export default FormBanner;
