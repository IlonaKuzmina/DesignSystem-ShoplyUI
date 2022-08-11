import { useState } from 'react';
import AdminNavigation from '../../component/AdminNavigation/AdminNavigation';
import './AdminProductsPage.scss';

const AdminProductsPage = ({ loginStatus }: any) => {
  const [adminIsLoged, setAdminIsLoged] = useState(true);

  const loginStatuss = (logInfo: any) => {
    // setAdminIsLoged(logInfo);
  };

  return (
    <div className="admin__products--container">
      <h1 className="admin__home--title">You are logged in to the admin page! Products section!</h1>
      <AdminNavigation loginStatus={loginStatus} />
    </div>

  );
};

export default AdminProductsPage;
