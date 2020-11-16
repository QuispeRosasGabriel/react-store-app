import './Sidebar.css';

const Sidebar = () => {
    const sidebarOptions = ['Banco', 'Liga'];
    return (
        <div className="d-flex align-items-center justify-content-center sidebar">
           <ul className="sidebar__list">
               { sidebarOptions.map((option, idx) => (
               <li key={idx} className="sidebar__list-option">{option}</li>))}
            </ul> 
        </div>
    )
}

export default Sidebar
