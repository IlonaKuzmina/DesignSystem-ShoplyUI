import { useState } from 'react';
import AdminHeader from '../../component/AdminHeader/AdminHeader';
import AdminNavigation from '../../component/AdminNavigation/AdminNavigation';
import './AdminProductsPage.scss';

const AdminProductsPage = ({ loginStatus }: any) => {
  const [adminIsLoged, setAdminIsLoged] = useState(true);

  const loginStatuss = (logInfo: any) => {
    // setAdminIsLoged(logInfo);
  };

  return (
    <div className="admin__products--container">
      Here is my admin product page
      <AdminNavigation loginStatus={loginStatus} />
    </div>

  );
};

export default AdminProductsPage;
