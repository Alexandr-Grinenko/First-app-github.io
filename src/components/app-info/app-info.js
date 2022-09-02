
import './app-info.css';

const AppInfo = ({increased, emploees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее количество сотрудников: {emploees} </h2>
            <h2>Премия начислена {increased} сотрудникам</h2>
        </div>
    )
}

export default AppInfo;