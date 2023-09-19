import { useState, useRef, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Chip,
    ClickAwayListener,
    Divider,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
    Stack,
    Typography
} from '@mui/material';

// project imports
import MainCard from '../../../../components/cards/MainCard';
import Transitions from '../../../../components/extended/Transitions';

// assets
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import config from '../../../../config';
import { TypographyEntity } from '../../../../themes/Typography/entities';
import { Person } from '@mui/icons-material';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
    const theme = useTheme<TypographyEntity>();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = useRef<HTMLDivElement | null>(null);

    const handleClose = (event?: any) => {
        if (anchorRef.current && anchorRef.current.contains(event!.target as Node)) {
            return;
        }
        setOpen(false);
        setSelectedIndex(-1);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current && anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Chip
                sx={{
                    height: '48px',
                    alignItems: 'center',
                    borderRadius: '27px',
                    transition: 'all .2s ease-in-out',
                    borderColor: theme.palette.primary.light,
                    backgroundColor: theme.palette.primary.light,
                    '&[aria-controls="menu-list-grow"], &:hover': {
                        borderColor: theme.palette.primary.main,
                        background: `${theme.palette.primary.main}!important`,
                        color: theme.palette.primary.light,
                        '& svg': {
                            stroke: theme.palette.primary.light
                        }
                    },
                    '& .MuiChip-label': {
                        lineHeight: 0
                    }
                }}
                icon={
                    <Avatar
                        sx={{
                            ...theme.typography.mediumAvatar,
                            margin: '8px 0 8px 8px !important',
                            cursor: 'pointer'
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Person />
                    </Avatar>
                }
                label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions position={'top-left'} type={'grow'} direction={'up'} in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={(e) => handleClose(e)}>
                                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <Box sx={{ p: 2 }}>
                                        <Stack>
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <Typography variant="h4">Good Morning,</Typography>
                                                <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                                                    Johne Doe
                                                </Typography>
                                            </Stack>
                                            <Typography variant='subtitle2'>Role</Typography>
                                        </Stack>
                                    </Box>
                                    <Divider />
                                    <Box sx={{ p: 2 }}>
                                        <List
                                            component="nav"
                                            sx={{
                                                width: '100%',
                                                maxWidth: 350,
                                                minWidth: 300,
                                                backgroundColor: theme.palette.background.paper,
                                                borderRadius: '10px',
                                                [theme.breakpoints.down('md')]: {
                                                    minWidth: '100%'
                                                },
                                                '& .MuiListItemButton-root': {
                                                    mt: 0.5
                                                }
                                            }}
                                        >
                                            <ListItemButton
                                                sx={{ borderRadius: `${config.borderRadius}px` }}
                                                selected={selectedIndex === 0}
                                                onClick={() => setSelectedIndex(0)}
                                            >
                                                <ListItemIcon>
                                                    <IconSettings stroke={1.5} size="1.3rem" />
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                                            </ListItemButton>
                                            <ListItemButton
                                                sx={{ borderRadius: `${config.borderRadius}px` }}
                                                selected={selectedIndex === 1}
                                                onClick={() => setSelectedIndex(1)}
                                            >
                                                <ListItemIcon>
                                                    <IconUser stroke={1.5} size="1.3rem" />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Grid container spacing={1} justifyContent="space-between">
                                                            <Grid item>
                                                                <Typography variant="body2">Social Profile</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Chip
                                                                    label="02"
                                                                    size="small"
                                                                    sx={{
                                                                        bgcolor: theme.palette.warning.dark,
                                                                        color: theme.palette.background.default
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    }
                                                />
                                            </ListItemButton>
                                            <ListItemButton
                                                sx={{ borderRadius: `${config.borderRadius}px` }}
                                                selected={selectedIndex === 2}
                                                onClick={() => setSelectedIndex(2)}
                                            >
                                                <ListItemIcon>
                                                    <IconLogout stroke={1.5} size="1.3rem" />
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                                            </ListItemButton>
                                        </List>
                                    </Box>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default ProfileSection;
