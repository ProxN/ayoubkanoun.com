import React from 'react';
import { Helmet } from 'react-helmet';

const Fonts = () => {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Fonts;
