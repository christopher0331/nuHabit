import axios from 'axios';
import React from 'react';

class Form1 extends React.Component {
     constructor(props){
        super(props);

        this.state = {
            diet: 0,
            exercise: 0,
            meditation: 0,
            reading: 0,
            reflection: 0,
            sleep: 0,
            userName: '',
            inputDate: ''
        }

        this.handleDietChange = this.handleDietChange.bind(this);
        this.handleExerciseChange = this.handleExerciseChange.bind(this);
        this.handleMeditationChange = this.handleMeditationChange.bind(this);
        this.handleReadingChange = this.handleReadingChange.bind(this);
        this.handleReflectionChange = this.handleReflectionChange.bind(this);
        this.handleSleepChange = this.handleSleepChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleInputDateChange = this.handleInputDateChange.bind(this);
        this.submitToServer = this.submitToServer.bind(this);
     }
     
     handleDietChange(diet){
        this.setState({diet: diet.target.value})
     }

     handleExerciseChange(exercise){
        this.setState({exercise: exercise.target.value})
     }

     handleMeditationChange(meditation){
        this.setState({meditation: meditation.target.value})
     }

     handleReadingChange(reading){
        this.setState({reading: reading.target.value})
     }

     handleReflectionChange(reflection){
         this.setState({reflection: reflection.target.value})
     }

     handleSleepChange(sleep){
         this.setState({sleep: sleep.target.value})
     }

     handleUserNameChange(name){
         this.setState({userName: name.target.value})
     }

     handleInputDateChange(inputDate){
         this.setState({inputDate: inputDate.target.value})
     }


     submitToServer(event){
         event.preventDefault();
         axios.post('/all', {
             diet: this.state.diet,
             exercise: this.state.exercise,
             meditation: this.state.meditation,
             reading: this.state.reading,
             reflection: this.state.reflection,
             sleep: this.state.sleep,
             userName: this.state.userName,
             inputDate: this.state.inputDate
         })
         .then((response) => {
            this.props.updateAll();
         })
         .catch((error) => {
             console.log(error)
         })
     } 

     render() {
         return(
            <form onSubmit={this.submitToServer} className='form'>
            <label>
                Diet:
                <input type="text" placeholder={'10'} value={this.state.value} onChange={this.handleDietChange} />
            </label>
            <label>
                Exercise:
                <input type="text" placeholder={'10'} value={this.state.value} onChange={this.handleExerciseChange} />
            </label>
            <label>
                Meditation:
                <input type="text" placeholder={'10'} value={this.state.value} onChange={this.handleMeditationChange} />
            </label>
            <label>
                Reading:
                <input type="text" placeholder={'10'} value={this.state.value} onChange={this.handleReadingChange} />
            </label>
            <label>
                Reflection:
                <input type="text" placeholder={'10'} value={this.state.value} onChange={this.handleReflectionChange} />
            </label>
            <label>
                Sleep:
                <input type="text" placeholder={'10'} value={this.state.value} onChange={this.handleSleepChange} />
            </label>
            <label>
                User Name:
                <input type="text" placeholder={'chris'}value={this.state.value} onChange={this.handleUserNameChange} />
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