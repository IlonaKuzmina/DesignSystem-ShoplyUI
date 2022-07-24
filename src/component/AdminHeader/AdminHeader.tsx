import { useNavigate } from 'react-router-dom';
import AdminBurgerNav from '../AdminBurgerNav/AdminBurgerNav';
import './AdminHeader.scss';

const AdminHeader = () => {
  const c = 4;
  const navigate = useNavigate();

  return (
    <div className="admin__header--container">

      <AdminBurgerNav />

      <div className="logo__wrapper" onClick={() => { navigate('/admin/home'); }}>
        <img src="./assets/logo/Shoply..png" alt="" />
      </div>
    </div>
  );
};

export default AdminHeader;
