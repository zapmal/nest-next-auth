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

const ColoredHeader = ({
  firstHalf,
  secondHalf,
}: ColoredHeaderProps) => {
  return (
    <h1>
      <Colored color='primary'>{firstHalf}</Colored> {' '}
      <Colored color='secondary'>{secondHalf}</Colored>
    </h1>
  );
};


export default ColoredHeader;