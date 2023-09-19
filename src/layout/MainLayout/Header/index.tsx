// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// assets
import { IconMenu2 } from '@tabler/icons-react';
import { TypographyEntity } from '../../../themes/Typography/entities';

import Logo from '../../../assets/react.svg';
import ProfileSection from './ProfileSection';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = (props: { handleLeftDrawerToggle: any; leftDrawerOpened: boolean }) => {
  const { handleLeftDrawerToggle, leftDrawerOpened } = props;
  const theme = useTheme<TypographyEntity>();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <img src={Logo} alt={'logo icon'} />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: leftDrawerOpened ? theme.palette.primary.dark : theme.palette.primary.light,
              color: leftDrawerOpened ? theme.palette.primary.light : theme.palette.primary.dark,
              '&:hover': {
                background: leftDrawerOpened ? theme.palette.primary.light : theme.palette.primary.dark,
                color: leftDrawerOpened ? theme.palette.primary.dark : theme.palette.primary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      <ProfileSection />
    </>
  );
};

export default Header;
