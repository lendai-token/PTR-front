import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CheckCircle } from '@mui/icons-material';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#FFFFFF',
  width: '100%',
  backgroundColor: '#3F69FA',
  borderRadius: '6px',
  height: '48px',
  border: '1px solid var(--dark-variant-5, #C1D6E9)',
  '&:hover': {
    backgroundColor: '#CFDAFF',
  },
}));

const ActiveButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#3F69FA',
  borderRadius: '6px',
  height: '48px',
  width: '100%',
  '&:hover': {
    backgroundColor: '#CFDAFF',
  },
}));

const NormalButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: '1px solid var(--dark-variant-5, #C1D6E9)',
  color: '#84AED3',
  backgroundColor: '#FFFFFF',
  borderRadius: '6px',
  width: '100%',
  height: '48px',
  '&:hover': {
    backgroundColor: '#CFDAFF',
  },
}));

export default function StyledButton(props: any) {
  return (
    <Stack spacing={2} direction="row">
      {
        props.status === "checked" ? (
          <ColorButton variant="contained" endIcon={<CheckCircle />}>{props.text}</ColorButton>
        ) : props.status === "active" ? (
          <ActiveButton variant="contained" sx={{justifyContent: 'start'}}>{props.text}</ActiveButton>
        ) : props.status === "normal" ? (
          <NormalButton variant="contained" sx={{justifyContent: 'start'}}>{props.text}</NormalButton>
        ): props.status === "contrast-active" ? (
          <NormalButton variant="contained" sx={{backgroundColor: "#3F69FA", color: '#FFFFFF'}}>{props.text}</NormalButton>
        ): props.status === "contrast-normal" ? (
          <NormalButton variant="contained">{props.text}</NormalButton>
        ) : <></>
      }
    </Stack>
  );
}