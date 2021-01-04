import axios from 'axios';
import React from 'react';

class Form1 extends React.Component {
     constructor(props){
        super(props);

        this.state = {
            habitName: '',
            userName: '',
            score: 0,
            inputDate: '',
            weekday: ''
        }

        this.handleHabitNameChange = this.handleHabitNameChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleInputDateChange = this.handleInputDateChange.bind(this);
        this.submitToServer = this.submitToServer.bind(this);
     }

     handleHabitNameChange(name){
        this.setState({habitName: name.target.value})
     }

     handleUserNameChange(name){
         this.setState({userName: name.target.value})
     }

     handleScoreChange(score){
         this.setState({score: score.target.value})
     }

     handleInputDateChange(inputDate){
         this.setState({inputDate: inputDate.target.value})
     }


     submitToServer(event){
         event.preventDefault();
         axios.post('/exercise', {
             habitName: this.state.habitName,
             userName: this.state.userName,
             score: this.state.score,
             inputDate: this.state.inputDate
         })
         .then((response) => {
            console.log(this.props)
            this.props.update()
            console.log('from submit to server', response)
         })
         .catch((error) => {
             console.log(error)
         })
     } 

     render() {
         return(
            <form onSubmit={this.submitToServer} className='form'>
            <label>
                Habit Name:
                <input type="text" placeholder={'exercise'} value={this.state.value} onChange={this.handleHabitNameChange} />
            </label>
            <label>
                User Name:
                <input type="text" placeholder={'chris'}value={this.state.value} onChange={this.handleUserNameChange} />
            </label>
            <label>
                Score:  
                <input type="text" placeholder={'10'} value={this.state.value} onChange={this.handleScoreChange} />
            </label>
            <label>
                Date:   
                <input type="text" placeholder={'2021-02-03'} value={this.state.value} onChange={this.handleInputDateChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
         )
     }
}

export default Form1;