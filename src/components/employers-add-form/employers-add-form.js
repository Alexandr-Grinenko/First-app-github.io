
import {Component} from 'react';

//import './employees-add-form.css';

import './employers-add-form.scss';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    onAdd = (name, salary)=>{ 
        this.props.onAddItem(name, salary) 
        this.setState ({ 
            name: '', 
            salary: '' 
        }) 
    }

    render () {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange} />
                    <button type="button"
                            className="btn btn-outline-light"
                            onClick = {() => this.onAdd(name, salary)}
                    >Добавить</button>
                </form>
            </div>
        )
    }
} 


export default EmployersAddForm;