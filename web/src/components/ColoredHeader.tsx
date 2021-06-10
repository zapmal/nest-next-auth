import { styled } from 'stitches';

const Colored = styled('span', {
  variants: {
    color: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
    },
  },
});

interface ColoredHeaderProps {
  firstHalf: string;
  secondHalf: string;
}

export const ColoredHeader: React.FC<ColoredHeaderProps> = ({
  firstHalf,
  secondHalf,
}) => {
  return (
    <h1>
      <Colored color='primary'>{firstHalf}</Colored> {' '}
      <Colored color='secondary'>{secondHalf}</Colored>
    </h1>
  );
};
