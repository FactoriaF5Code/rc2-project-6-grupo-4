import './Footer.css';

import { Link } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  return (
    <footer>
      <section className='containerFooter'>
        <Link href='https://www.twitter.com' target='_blank'>
          <XIcon sx={{ fontSize: 60 }} style={{ color: 'white' }} />
        </Link>
        <Link href='https://www.instagram.com' target='_blank'>
          <InstagramIcon sx={{ fontSize: 60 }} style={{ color: 'white' }} />
        </Link>
        <Link href='https://www.facebook.com' target='_blank'>
          <FacebookIcon sx={{ fontSize: 60 }} style={{ color: 'white' }} />
        </Link>
      </section>
    </footer>
  );
};
