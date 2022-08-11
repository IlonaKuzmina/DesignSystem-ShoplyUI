import { useState } from 'react';
import AdminHeader from '../../component/AdminHeader/AdminHeader';
import AdminNavigation from '../../component/AdminNavigation/AdminNavigation';
import './AdminHomePage.scss';

const AdminHomePage = ({ loginStatus }: any) => {
  const [adminIsLoged, setAdminIsLoged] = useState(true);

  const loginStatuss = (logInfo: any) => {
    setAdminIsLoged(logInfo);
  };

  return (
    <div className="admin__home--container">
      <h1 className="admin__home--title">You are logged in to the admin page! Home section!</h1>
      <AdminNavigation loginStatuss={loginStatuss} />
    </div>
  );
};

export default AdminHomePage;
