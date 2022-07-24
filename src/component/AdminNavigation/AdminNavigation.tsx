import { NavLink } from 'react-router-dom';
import './AdminNavigation.scss';

const AdminNavigation = () => {
  const c = 4;

  return (
    <div>
      <div className="">
        <NavLink to="/admin/home" className="">Home</NavLink>
        <NavLink to="/admin/products" className="">Products</NavLink>
        <NavLink to="/home" className="">Logout</NavLink>
      </div>
    </div>
  );
};

export default AdminNavigation;
