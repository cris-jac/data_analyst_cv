import { Routes, Route} from 'react-router-dom';
import { HomePage, Project01 } from '../pages/index';

const AllRoutes = () => {
  return (
    <div>
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/p01' element={<Project01/>}></Route>
            </Routes>
        </main>
    </div>
  )
}
export default AllRoutes
