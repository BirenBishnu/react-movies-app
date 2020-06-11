import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import BookShow from '../../screens/bookshow/BookShow';


const customStyles={
    content:{
        top:'50%',
        left:'50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)'
    }
}

const TabContainer= function(props){
    return(
        <Typography component="div" style={{padding: 0, textAlign: "center"}}>
            {props.children}

        </Typography>

    )
}

TabContainer.propTypes={
    children: PropTypes.node.isRequired
}

class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            username:"",
            loginpasswordRequired: "dispNone",
            loginpassword:"",
            firstnameRequired: "dispNone",
            firstname:"",
            lastnameRequired: "dispNone",
            lastname:"",
            emailRequired: "dispNone",
            email: "",
            registerpasswordRequired: "dispNone",
            registerpassword:"",
            contactRequired:"dispNone",
            contact:"",


        };
    }

    openModalHandler =() => {
        this.setState({
            modalIsOpen:true,
            value: 0,
            usernameRequired: "dispNone",
            username:"",
            loginpasswordRequired: "dispNone",
            loginpassword:"",
            firstnameRequired: "dispNone",
            firstname:"",
            lastnameRequired: "dispNone",
            lastname:"",
            emailRequired: "dispNone",
            email: "",
            registerpasswordRequired: "dispNone",
            registerpassword:"",
            contactRequired:"dispNone",
            contact:"",
            
        });
    }

    closeModal=() => {
        this.setState({modalIsOpen:false})
    }
    tabChangeHandler=(event, value)=>{
        this.setState({value});

    }



    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"} );
        this.state.loginpassword === "" ? this.setState({loginpasswordRequired: "dispBlock"}) : this.setState({loginpasswordRequired: "dispNone"});
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({username: e.target.value});
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({loginpassword: e.target.value});
    }






    registerClickHandler=()=>{
        this.state.firstname === "" ? this.setState({firstnameRequired: "dispBlock"}) : this.setState({firstnameRequired: "dispNone"} );
        this.state.lastname === "" ? this.setState({lastnameRequired: "dispBlock"}) : this.setState({lastnameRequired: "dispNone"} );
        this.state.email === "" ? this.setState({emailRequired: "dispBlock"}) : this.setState({emailRequired: "dispNone"} );
        this.state.registerpassword === "" ? this.setState({registerpasswordRequired: "dispBlock"}) : this.setState({registerpasswordRequired: "dispNone"} );
        this.state.contact === "" ? this.setState({contactRequired: "dispBlock"}) : this.setState({contactRequired: "dispNone"} );
    }

    inputFirstNameChangeHandler = (e) => {
        this.setState({firstname: e.target.value});
    }
    inputLastNameChangeHandler =(e)=>{
        this.setState({lastname: e.target.value});
    }
    inputEmailChangeHandler=(e)=>{
        this.setState({email: e.target.value});
    }
    inputRegisterPasswordChangeHandler=(e)=>{
        this.setState({registerpassword: e.target.value});
    }
    inputContactChangeHandler=(e)=>{
        this.setState({contact: e.target.value});
    }


    bookshowHandler=()=>{
        ReactDOM.render(<BookShow /> , document.getElementById('root'));

    }







    render(){
        return(
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
            <div className="login-button">
                <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
            </div>
            {this.props.showBookShowButton === "true"?
            <div className="bookshow-button">
                <Button variant="contained" color="primary" onClick={this.bookshowHandler}>
                    BOOK SHOW
                </Button>
            </div>: ""}
            </header>

            <Modal arialHideApp="false" isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModal} style={customStyles}>
                <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login"/>
                    <Tab label="Register"/>
                </Tabs>
                {this.state.value === 0 &&
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="username">UserName</InputLabel>
                        <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>
                        <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <FormControl required>
                    <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="loginpassword" type="password" loginpassword={this.state.loginpassword} onChange={this.inputLoginPasswordChangeHandler}></Input>
                        <FormHelperText className={this.state.loginpasswordRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
                </TabContainer>}

                {this.state.value === 1 &&
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="firstname">First Name</InputLabel>
                        <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstNameChangeHandler}></Input>
                        <FormHelperText className={this.state.firstnameRequired}>
                            <span className="red">Required</span>
                        </FormHelperText>
                    </FormControl>
                    <br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="lastname">Last Name</InputLabel>
                        <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastNameChangeHandler}></Input>
                        <FormHelperText className={this.state.lastnameRequired}>
                            <span className="red">Required</span>
                        </FormHelperText>
                    </FormControl>
                    <br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler}></Input>
                        <FormHelperText className={this.state.emailRequired}>
                            <span className="red">Required</span>
                        </FormHelperText>
                    </FormControl>
                    <br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="registerpassword">Password</InputLabel>
                        <Input id="registerpassword" type="password" registerpassword={this.state.registerpassword} onChange={this.inputRegisterPasswordChangeHandler}></Input>
                        <FormHelperText className={this.state.registerpasswordRequired}>
                            <span className="red">Required</span>
                        </FormHelperText>
                    </FormControl>
                    <br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="contact">Contact No.</InputLabel>
                        <Input id="contact" type="text" contact={this.state.contact} onChange={this.inputContactChangeHandler}></Input>
                        <FormHelperText className={this.state.contactRequired}>
                            <span className="red">Required</span>
                        </FormHelperText>
                    </FormControl>
                    <br/><br/>

                    <Button variant="contained" color="primary" onClick={this.registerClickHandler}>Register</Button>
                </TabContainer>
                
                
                
                }




            </Modal>

            </div>
        )
    }


}
export default Header;