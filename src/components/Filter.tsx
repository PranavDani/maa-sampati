import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandLess, ExpandMore, FilterList } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';



export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [openColor, setOpenColor] = React.useState(true);
    const [openOrigin, setOpenOrigin] = React.useState(false)
    const [openType, setOpenType] = React.useState(false)

    function handleOpenColor() {
        setOpenColor(!openColor);
    }
    function handleOpenOrigin() {
        setOpenOrigin(!openOrigin);
    }
    function handleOpenType() {
        setOpenType(!openType);
    }

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            <ListItem button onClick={handleOpenColor}>
                <ListItemText primary="Colors" />
                {openColor ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openColor} timeout="auto" unmountOnExit>
                <List>
                    {['Gold', 'Black', 'White', 'Beige'].map((text, index) => (
                        <ListItem button key={text}>
                            <Link key={text} to={`/products/?color=${text}`}>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
            <Divider />
            <ListItem button onClick={handleOpenOrigin}>
                <ListItemText primary="Origin" />
                {openOrigin ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openOrigin} timeout="auto" unmountOnExit>
                <List>
                    {['Indian', 'Imported'].map((text, index) => (
                        <ListItem button key={text}>
                            <Link key={text} to={`/products/?origin=${text}`}>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
            <Divider />

            <ListItem button onClick={handleOpenType}>
                <ListItemText primary="Type" />
                {openType ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openType} timeout="auto" unmountOnExit>
                <List>
                    {['Marble', 'Granite', 'Stone', 'Composite'].map((text, index) => (
                        <ListItem button key={text}>
                            <Link key={text} to={`/products/?type=${text}`}>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
            <Divider />
        </div>
    );

    return (
        <div>
            {(['left'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className="outlined-button" onClick={toggleDrawer(anchor, true)}><FilterList />Filter</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}