import React from 'react';
import styled from 'styled-components';
import Speaker_ZX9 from './Speaker_ZX9';
import Speaker_ZX7 from './Speaker_ZX7';
import Earphones_YX1 from './Earphones_YX1';

const FeaturedProducts = () => {
  return (
    <Wrapper className='container'>
      <Speaker_ZX9 />
      <Speaker_ZX7 />
      <Earphones_YX1 />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 7.5rem;
`;

export default FeaturedProducts;
