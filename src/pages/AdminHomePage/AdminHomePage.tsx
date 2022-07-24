import AdminHeader from '../../component/AdminHeader/AdminHeader';
import AdminNavigation from '../../component/AdminNavigation/AdminNavigation';
import './AdminHomePage.scss';

const AdminHomePage = () => {
  const c = 4;

  return (
    <div className="admin__home--container">
      Here is my admin home page
      <AdminNavigation />
    </div>
  );
};

export default AdminHomePage;
