import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from "../../screens/home/Home";
import Confirmation from '../confirmation/Confirmation';
import './BookShow.css';
import Typography from '@material-ui/core/Typography';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';



class BookShow extends Component{

    constructor() {
        super();
        this.state ={
            location:"",
            language:"",
            showDate:"",
            showTime:"",
            tickets:"",
            unitPrice: 500,
            availableTickets: 20,
            locationRequired:"dispNone",
            languageRequired:"dispNone",
            showDateRequired:"dispNone",
            showTimeRequired:"dispNone",
            ticketsRequired:"dispNone",
        }
    }


    backtodetailsHandler =() =>{
        ReactDOM.render(<Home/> , document.getElementById('root'));
    }
    locationChangeHandler = (e) =>{
        this.setState({location: e.target.value});
    }

    languageChangeHandler = (e) => {
        this.setState({language: e.target.value});
    }

    showDateChangeHandler = (e) => {
        this.setState({showDate: e.target.value});
    }

    showTimeChangeHandler = (e) => {
        this.setState({showTime: e.target.value});
    }
    ticketsChangeHandler = (e) => {
        this.setState({tickets: e.target.value});
    }

    bookShowButtonHandler = () => {
        this.state.location === "" ? this.setState({locationRequired: "dispBlock"}) : this.setState({locationRequired: "dispNone"} );
        this.state.language === "" ? this.setState({languageRequired: "dispBlock"}) : this.setState({languageRequired: "dispNone"} );
        this.state.showDate === "" ? this.setState({showDateRequired: "dispBlock"}) : this.setState({showDateRequired: "dispNone"} );
        this.state.showTime === "" ? this.setState({showTimeRequired: "dispBlock"}) : this.setState({showTimeRequired: "dispNone"} );
        this.state.tickets === "" ? this.setState({ticketsRequired: "dispBlock"}) : this.setState({ticketsRequired: "dispNone"} );
        ReactDOM.render(<Confirmation bookingSummary={this.state} />, document.getElementById('root'));
    }



    render(){
        return(
            <div>
                <Header />
                <Typography className="back1" onClick={this.backtodetailsHandler}>
                            &#60; Back to Movie Details
                </Typography>
                <Card className="cardStyle">
                    <CardContent>
                        
                        <Typography variant="headline" component="h2">
                            BOOK SHOW
                        </Typography><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="location">Choose Location: </InputLabel>
                            <Select
                                value={this.state.location}
                                onChange={this.locationChangeHandler}>
                                {location.map(loc => (
                                    <MenuItem key={"loc" + loc.id} value={loc.location}>
                                        {loc.location}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText className={this.state.locationRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="language">Choose Language: </InputLabel>
                            <Select
                                value={this.state.language}
                                onChange={this.languageChangeHandler}>
                                {language.map(lang => (
                                    <MenuItem key={"lang" + lang.id} value={lang.language}>
                                        {lang.language}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText className={this.state.languageRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="showDate">Choose Date: </InputLabel>
                            <Select
                                value={this.state.showDate}
                                onChange={this.showDateChangeHandler}>
                                {showDate.map(sdate => (
                                    <MenuItem key={"sdate" + sdate.id} value={sdate.showDate}>
                                        {sdate.showDate}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText className={this.state.showDateRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="showTime">Choose Time: </InputLabel>
                            <Select
                                value={this.state.showTime}
                                onChange={this.showTimeChangeHandler}>
                                {showTime.map(stime => (
                                    <MenuItem key={"stime" + stime.id} value={stime.showTime}>
                                        {stime.showTime}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText className={this.state.showTimeRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="Tickets" >
                                Tickets:({this.state.availableTickets} available)
                            </InputLabel>
                            <Input id="tickets" value={this.state.tickets !==0 ? this.state.tickets:""} onChange={this.ticketsChangeHandler}/>
                            <FormHelperText className={this.state.ticketsRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Typography>
                            Unit Price: Rs. {this.state.unitPrice}
                        </Typography><br/>
                        <Typography>
                            Total Price: Rs. {this.state.tickets * this.state.unitPrice}
                        </Typography><br/><br/>
                        <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                            BOOK SHOW
                        </Button>

                    </CardContent>
                </Card>
            

        
            </div>
        );
            
    }
}

export default BookShow;