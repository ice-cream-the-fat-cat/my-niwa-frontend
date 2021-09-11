import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import StorefrontIcon from "@material-ui/icons/Storefront";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

// TODO: fix any type when we can work out what it is supposed to be
interface BottomNavProps {
  currentPage: string;
  handlePageChange: any;
}

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
    },
  })
);

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPage,
  handlePageChange,
}) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <BottomNavigation value={currentPage} onChange={handlePageChange}>
        <BottomNavigationAction
          label="Flower Beds"
          showLabel={true}
          value="/user/myniwa"
          icon={<EmojiNatureIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          label="My Niwa"
          showLabel={true}
          value="/user/myCollection"
          icon={<LocalFloristIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          label="Florist"
          showLabel={true}
          value="/user/store"
          icon={<StorefrontIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          label="My Growth"
          showLabel={true}
          value="/user/myGrowth"
          icon={<TrendingUpIcon />}
        ></BottomNavigationAction>
      </BottomNavigation>
    </AppBar>
  );
};
