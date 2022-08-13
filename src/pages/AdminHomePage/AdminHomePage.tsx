import { useState } from 'react';
import './AdminHomePage.scss';

const AdminHomePage = ({ loginStatus }: any) => (
  <div className="admin__home--container">
    <h1 className="admin__home--title">You are logged in to the admin page! Home section!</h1>
  </div>
);

export default AdminHomePage;
