import React from 'react';

import { styled } from 'stitches';

interface HighlightProps {
  tone?: 'neutral' | 'dark' | 'light';
  children: React.ReactNode;
};

const StyledHighlight = styled('strong', {
  variants: {
    tone: {
      neutral: {
        color: '$secondary',
      },
      dark: {
        color: '$secondaryDark',
      },
      light: {
        color: '$secondaryLight',
      },
    },
  },
});

const Highlight = ({ tone = 'neutral', children }: HighlightProps) => {
  return <StyledHighlight tone={tone}>{children}</StyledHighlight>;
};

export default Highlight;
