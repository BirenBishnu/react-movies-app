import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from "../../screens/home/Home";
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



class BookShow extends Component{

    constructor() {
        super();
        this.state ={
            location:"",
            language:"",
            showDate:"",
            showTime:"",
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
                        </FormControl><br/><br/>

                    </CardContent>
                </Card>
            

        
            </div>
        );
            
    }
}

export default BookShow;