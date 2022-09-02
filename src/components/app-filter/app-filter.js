


import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники', clas: "btn btn-info", colored: false}, 
        {name: 'star', label: 'Кандидаты на повышение', clas: "btn btn-success", colored: true},
        {name: 'moreThen1000', label: 'З/П более 1000$', clas: "btn btn-outline-danger", colored: false},
    ];

    const buttons = buttonsData.map(({name, label, clas, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn btn-info' : clas;
        const style = colored ? {color: 'red'}: null;
        return (
            <button  
                type="button" 
                className={`btn ${clazz}`}
                key = {name}
                onClick = {() => props.onFilterSelect(name)}
                style = {style}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button  
                type="button" 
                className="btn btn-info">
                Все сотрудники
            </button>
            <button 
                className="btn btn-success"
                type="button">
                    Кандидаты на повышение
            </button>
            <button 
                className="btn btn-outline-danger"
                type="button">
                    З/П более 1000$
            </button> */}
        </div>
    );
}

export default AppFilter;