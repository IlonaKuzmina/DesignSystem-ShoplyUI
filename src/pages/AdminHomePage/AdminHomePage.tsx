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
      Here is my admin home page
      <AdminNavigation loginStatuss={loginStatuss} />
    </div>
  );
};

export default AdminHomePage;
