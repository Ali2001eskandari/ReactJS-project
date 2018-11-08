import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Paper from '@material-ui/core/Paper';
import Dog from './dog.jpg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



class App extends Component {
      state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
          const { anchorEl } = this.state;

    return (
        <div id="app">
        
  <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            myApp
          </Typography>
          <div />
          <div>
            <div className="menu">
           <Button
        className="btn-menu"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >       
Menu      
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>Blog</MenuItem>
          <MenuItem onClick={this.handleClose}>About us</MenuItem>
        </Menu>
            </div>
          </div>
        
        </Toolbar>
      </AppBar>
    
        <div className="land">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
          <a href="card">  <Button className="land-btn" variant="fab" color="primary" >Start reading</Button></a>
        </div>
        
         <Card className="card" id="card">
      <CardActionArea>
        <CardContent className="headtxt">
          <Typography gutterBottom variant="h4" component="h2">
        </Typography>
        <div className="pic-txt">
        <img className="img" src={Dog}/>
        <div className="text">
        <h4>Lorem ipsum</h4>
        </div>
        </div>
          <Typography component="p">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="button" variant="outlined" color="primary">
share
        </Button>
        <Button className="button" variant="outlined" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>

       
     <Card className="card">
      <CardActionArea>
        <CardContent className="headtxt">
          <Typography gutterBottom variant="h4" component="h2">
        </Typography>
        <div className="pic-txt">
        <img className="img" src={Dog}/>
        <div className="text">
        <h4>Lorem ipsum</h4>
        </div>
        </div>
          <Typography component="p">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="button" variant="outlined" color="primary">
share
        </Button>
        <Button className="button" variant="outlined" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
       
     <Card className="card">
      <CardActionArea>
        <CardContent className="headtxt">
          <Typography gutterBottom variant="h4" component="h2">
        </Typography>
        <div className="pic-txt">
        <img className="img" src={Dog}/>
        <div className="text">
        <h4>Lorem ipsum</h4>
        </div>
        </div>
          <Typography component="p">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="button" variant="outlined" color="primary">
share
        </Button>
        <Button className="button" variant="outlined" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
       
     <div className="footer">
         <h4>@CopyRight</h4>
            <p>Designed By <a href="#">[AiE]</a></p>
         </div>
    </div>
    );
  }
}

export default App;
