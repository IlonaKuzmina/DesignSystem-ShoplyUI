import AdminBurgerNav from '../AdminBurgerNav/AdminBurgerNav';
import './AdminHeader.scss';

const AdminHeader = ({ logOut }: any) => (
  <div className="admin__header--container">
    <AdminBurgerNav logOut={logOut} />
  </div>
);

export default AdminHeader;
