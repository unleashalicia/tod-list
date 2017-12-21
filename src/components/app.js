import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import axios from 'axios';
import ListContainer from './list_container';
import AddItem from './add_item';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=aliciathegreat';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoData: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);

        this.setState({
            todoData: response.data.todos
        })
    }

    async addItem(item){
        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);

        this.getData();

    }

    // addItem(item){
    //     item.complete = false;
    //
    //     axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp)=>{
    //        console.log('ADD RESP: ', resp);
    //         this.getData();
    //     });
    //
    // }

    async toggleComplete(id){
        await axios.put(`${BASE_URL}/todos/${id+API_KEY}`);

        this.getData();
    }

    async deleteItem(id){
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getData();
    }

    render(){
        const {todoData} = this.state;

        return (
            <div className="container">
                <h1 className="center-align">To-Do List</h1>
                <AddItem add={this.addItem}/>
                <ListContainer delete={this.deleteItem} list={todoData} toggleComplete={this.toggleComplete}/>
            </div>
        );
    }
}

export default App;


