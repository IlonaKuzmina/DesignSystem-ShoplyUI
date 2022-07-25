import { useNavigate } from 'react-router-dom';
import AdminBurgerNav from '../AdminBurgerNav/AdminBurgerNav';
import './AdminHeader.scss';

const AdminHeader = ({ loginStatus }: any) => {
  const c = 4;
  const navigate = useNavigate();

  return (
    <div className="admin__header--container">

      <AdminBurgerNav loginStatus={loginStatus} />

      <div className="logo__wrapper">
        <img src="./public/assets/logo/Shoply..png" alt="" />
      </div>
    </div>
  );
};

export default AdminHeader;
