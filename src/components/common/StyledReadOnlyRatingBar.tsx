import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#0F43F9',
  },
  '& .MuiRating-iconHover': {
    color: '#0F30F9',
  },
});

export default function StyledReadOnlyRatingBar(props: any) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend" sx={{fontSize: '14px'}} className="text-black-300">{props.text}</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        className="mt-[5px]"
        readOnly
        icon={
          <FontAwesomeIcon
            icon={icon({ name: "star" })}
            flip="horizontal"
            className="pl-[2px] text-[24px]"
          />
        }
        emptyIcon={
          <FontAwesomeIcon
            icon={icon({ name: "star" })}
            flip="horizontal"
            className="pl-[2px] text-[24px]"
          />
        }
      />
    </Box>
  );
}