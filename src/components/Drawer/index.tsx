import CloseIcon from '@mui/icons-material/Close';
import { Drawer, List } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleMobileMenu } from 'store';
import { DrawerIconButton } from 'styles/Drawer';
import { Colors } from 'styles/theme';



export const AppDrawer = () => {

    const isDrawerOpen = useAppSelector(state => state.toggleMenu.isDrawerOpen);
    const dispatch = useAppDispatch();

  return (
    <>
      {isDrawerOpen && (
        <>
          <DrawerIconButton
            onClick={() => dispatch(toggleMobileMenu())}
          >
            <CloseIcon />
          </DrawerIconButton>
          <Drawer open={isDrawerOpen}>
            <List
              sx={{
                width: '75vw',
                height: '100%',
                background: Colors.body_bg

              }}
            >
            </List>
          </Drawer>
        </>
      )}
    </>
  );
};
