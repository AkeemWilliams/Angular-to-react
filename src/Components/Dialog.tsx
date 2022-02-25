import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs(props:any) {
  const { open, data, setOpen} = props;
//   const [open, setOpen] = React.useState(isOpen);

  const handleClose = () => {
     setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <DialogContent dividers>
        <div className="dia-wrap" style={{background:`url(${data.image})`}}>
            <div className="inner-wrap">
            <h1>{data.name}</h1>
            <div className="mount-image">
                <img src={data.image} />
            </div>
            <div className="enhanced-desc">
                {data.enhanced_description}
            </div>
            <div className="obtained-from">
             {/* <p>Obtained From: <ul>{data.sources?.map((source: { text: string}, index: number) => <li key={index}>{source.text}</li>)}</ul></p> */}
        </div>
            </div>

            </div>

        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}