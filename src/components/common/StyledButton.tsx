import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { CheckCircle } from '@mui/icons-material';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

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
  console.log(props.status);
  return (
    <Stack spacing={2} direction="row">
      {
        props.status === "checked" ? (
          <ColorButton variant="contained" endIcon={<CheckCircle />}>{props.text}</ColorButton>
        ) : props.status === "active" ? (
          <ActiveButton variant="contained">{props.text}</ActiveButton>
        ) : props.status === "normal" ? (
          <NormalButton variant="contained">{props.text}</NormalButton>
        ): props.status === "contrast-active" ? (
          <NormalButton variant="contained">{props.text}</NormalButton>
        ): props.status === "contrast-normal" ? (
          <NormalButton variant="contained">{props.text}</NormalButton>
        ) : <></>
      }
    </Stack>
  );
}