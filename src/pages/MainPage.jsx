import Navbar from '../shared/navbar/Navbar'
import Sidebar from '../shared/sidebar/Sidebar'

const MainPage = () => {
    return (
        <>
          <Navbar />
          <div className="row">
            <div className="col-md-10">asd</div>
            <div className="col-md-2">
                <Sidebar />
            </div>
          </div>
        </>
    )
}

export default MainPage
