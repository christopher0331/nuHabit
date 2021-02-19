import axios from 'axios';
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Form1 from './Form.jsx';
import Selector from './Selector.jsx';
import DateSelector from './DateSelector.jsx'

class Chart1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showHabit: 'exercise',
            allData: [],
            currentDates: 'Last 7 Days',
            starting: 0,
            ending: 100
        }
        // this.getExerciseData = this.getExerciseData.bind(this);
        // this.getDietData = this.getDietData.bind(this);
        this.getAllData = this.getAllData.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateDates = this.updateDates.bind(this);
    }

    componentDidMount(){
     this.getAllData();
    }
   
    getAllData(){
        axios.get('/all')
        .then((response) => {
            this.setState({
                allData: response.data.rows
            })
        })
    }

    updateData(habit){
        this.setState({ showHabit: habit.target.value})
    }

    updateDates(timeline){
        if(timeline.target.value === 'Last 7 Days'){  
            this.setState({
                currentDates: timeline.target.value,
                starting: this.state.allData.length - 8,
                ending: this.state.allData.length
            })
        }
        if(timeline.target.value === 'Last 30 Days') {
            this.setState({
                currentDates: timeline.target.value,
                starting: this.state.allData.length - 30,
                ending: this.state.allData.length
            })
        }
        if(timeline.target.value === 'Last Quarter') {
            this.setState({
                currentDates: timeline.target.value,
                starting: this.state.allData.length - 90,
                ending: this.state.allData.length
            })
        }
        
    }

    render() {
        if(!this.state.allData){
            return(
                <h1>Loading!</h1>
            )
        } else if(this.state.allData && this.state.showHabit === 'diet') {
            {console.log('data length ===> ', this.state.allData.length)}

            return (
                <div className='chart1'>
                    <div className='selectors'>
                        <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
                        <DateSelector currentDate={this.state.currentDates} updateDates={this.updateDates}/>
                    </div>
                    {/* {console.log('from the top ==>', this.state.data)} */}
                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.allData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'diet'} stroke="green" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 updateAll={this.getAllData}/>
                </div>
          );
        } else if(this.state.allData && this.state.showHabit === 'exercise') {
            return (
                <div className='chart1'>
                    <div className='selectors'>
                        <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
                        <DateSelector currentDate={this.state.currentDates} updateDates={this.updateDates}/>
                    </div>
                    {/* {console.log('from the top ==>', this.state.data)} */}
                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.allData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'exercise'} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 updateAll={this.getAllData}/>
                </div>
          );
        } else if(this.state.allData && this.state.showHabit === 'meditation') {
            return (
                <div className='chart1'>
                    <div className='selectors'>
                        <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
                        <DateSelector currentDate={this.state.currentDates} updateDates={this.updateDates}/>
                    </div>
                    {/* {console.log('from the top ==>', this.state.data)} */}
                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.allData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'meditation'} stroke="red" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 updateAll={this.getAllData}/>
                </div>
          );
        } else if(this.state.allData && this.state.showHabit === 'reading') {
            return (
                <div className='chart1'>
                    <div className='selectors'>
                        <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
                        <DateSelector currentDate={this.state.currentDates} updateDates={this.updateDates}/>
                    </div>
                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.allData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'reading'} stroke="black" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 updateAll={this.getAllData}/>
                </div>
          );
        } else if (this.state.allData && this.state.showHabit === 'reflection') {
            return(
                <div className='chart1'>
                    <div className='selectors'>
                        <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
                        <DateSelector currentDate={this.state.currentDates} updateDates={this.updateDates}/>
                    </div>
                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.allData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'reflection'} stroke="blue" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 updateAll={this.getAllData}/>
                </div>
            )
        } else if (this.state.showHabit === 'sleep') {
            return(
                <div className='chart1'>
                    <div className='selectors'>
                        <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
                        <DateSelector currentDate={this.state.currentDates} updateDates={this.updateDates}/>
                    </div>

                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.allData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'sleep'} stroke="purple" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 updateAll={this.getAllData}/>
                </div>
            )
        } else if (this.state.showHabit === 'all') {
            return(
                <div className='chart1'>
                    <div className='selectors'>
                        <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
                        <DateSelector currentDate={this.state.currentDates} updateDates={this.updateDates}/>
                    </div>
                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.allData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'diet'} stroke="green" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={'exercise'} stroke="#8884d8" />
                        <Line type="monotone" dataKey={'meditation'} stroke="red" />
                        <Line type="monotone" dataKey={'reading'} stroke="black" />
                        <Line type="monotone" dataKey={'reflection'} stroke="blue" />
                        <Line type="monotone" dataKey={'sleep'} stroke="purple" />
                    </LineChart>
                    <Form1 updateAll={this.getAllData}/>
                </div>
            )
        }
    }
}

export default Chart1;