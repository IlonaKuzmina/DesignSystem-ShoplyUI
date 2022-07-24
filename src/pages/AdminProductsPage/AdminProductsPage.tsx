import AdminHeader from '../../component/AdminHeader/AdminHeader';
import AdminNavigation from '../../component/AdminNavigation/AdminNavigation';
import './AdminProductsPage.scss';

const AdminProductsPage = () => {
  const c = 4;

  return (
    <div className="admin__products--container">
      Here is my admin product page
      <AdminNavigation />
    </div>

  );
};

export default AdminProductsPage;
