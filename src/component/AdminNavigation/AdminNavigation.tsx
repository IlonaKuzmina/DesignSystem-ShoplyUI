import { NavLink } from 'react-router-dom';
import './AdminNavigation.scss';

const AdminNavigation = ({ loginStatus }: any) => {
  const data = true;

  return (
    <div>
      <div className="">
        {/* <NavLink to="/admin/home" className="">Home</NavLink>
        <NavLink to="/admin/products" className="">Products</NavLink> */}
        {/* <NavLink to="/home" className="" onClick={() => { loginStatus(data); }}>Logout</NavLink> */}
        {/* <button onClick={() => { loginStatus(data); }}>Logouttt</button> */}
      </div>
    </div>
  );
};

export default AdminNavigation;
