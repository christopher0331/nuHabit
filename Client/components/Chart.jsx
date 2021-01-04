import axios from 'axios';
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Form1 from './Form.jsx';
import Selector from './Selector.jsx';

class Chart1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showHabit: 'exercise',
            allData: [],
            starting: 22,
            ending: 200
        }
        // this.getExerciseData = this.getExerciseData.bind(this);
        // this.getDietData = this.getDietData.bind(this);
        this.getAllData = this.getAllData.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount(){
     this.getAllData();
    }

    getAllData(){
        console.log('made it here')
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

    render() {
        if(!this.state.allData){
            return(
                <h1>Loading!</h1>
            )
        } else if(this.state.allData && this.state.showHabit === 'diet') {
            return (
                <div className='chart1'>
                    {console.log(this.state)}
                    <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                    <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                    <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                    <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                        <Line type="monotone" dataKey={'reading'} stroke="black" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 updateAll={this.getAllData}/>
                </div>
          );
        } else if (this.state.allData && this.state.showHabit === 'reflection') {
            return(
                <div className='chart1'>
                    <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                    <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                    <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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