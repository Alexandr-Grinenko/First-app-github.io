
import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Alex C.', salary:700, increase: false, star: true, id: 1},
                {name:'Tim M.', salary:400, increase: true, star: false, id: 2},
                {name:'Julia O.', salary:1500, increase: false, star: false, id: 3},
                {name:'Peter N.', salary:1250, increase: false, star: false, id: 4},
                {name:'Olga K.', salary:800, increase: false, star: false, id: 5},
                {name:'Elena H.', salary:560, increase: false, star: false, id: 6}
            ],
            term: '',
            filter: ''
        }
        this.maxId = 7
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            
            
            /* удаление элементов способ 1 */

/*          const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after]
            
            return {
                data: newArr
            }  */

            /* удаление элементов способ 2 */

            return {
                data: data.filter(item => item.id !== id)
            } 
        })
    }

    //добавление новых сотрудников


    addItem = (name, salary) => {
        if (name ===''||salary==='') {
            alert("Введите правильные данные")
        }else {
            const newItem = {
                name,
                salary,
                increase: false,
                star: false,
                id: this.maxId++
            }
            this.setState((state) => {
                let newArr = [...state.data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }

    onToggleIncrease = (id) => {

            //cпособ 1

/*         this.setState(({data}) => {
             const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, increase: !old.increase};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]

            return {
                data: newArr
            } 
        }) */

            //способ 2

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, star: !item.star}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term ==='') {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })

    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'star':
                return items.filter(item => item.star);
            case 'moreThen1000':
                return items.filter(item => item.salary>1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render () {
        const {data, term, filter} = this.state
        const emploees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className = "app">
                <AppInfo emploees={emploees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch} />
                    <AppFilter filter = {filter} onFilterSelect = {this.onFilterSelect}/>
                </div>
                <EmployersList 
                    data = {visibleData}
                    onDelete = {this.deleteItem} 
                    onToggleIncrease = {this.onToggleIncrease}
                    onToggleRise = {this.onToggleRise}/>
                <EmployersAddForm 
                    onAddItem = {this.addItem} />
            </div>
        );
    }
}

export default App;