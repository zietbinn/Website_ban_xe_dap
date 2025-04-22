import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser?.displayName || '');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    street: '',
    ward: '',
    district: '',
    city: '',
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSave = () => {
    setIsEditing(false);
    // Thêm logic lưu thông tin vào backend hoặc local nếu cần
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (!currentUser) {
    navigate('/signin');
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-card-grid">
        {/* Form bên trái */}
        <div className="profile-details">
          {currentUser.photoURL && (
            <img src={currentUser.photoURL} alt="Avatar" className="profile-avatar" />
          )}

          <label>Họ tên</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
          />

          <label>Email</label>
          <input type="email" value={currentUser.email} disabled />

          <label>Số điện thoại</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!isEditing}
          />

          <label>Số nhà, Đường</label>
          <input
            type="text"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            disabled={!isEditing}
          />

          <label>Phường / Xã</label>
          <input
            type="text"
            value={address.ward}
            onChange={(e) => setAddress({ ...address, ward: e.target.value })}
            disabled={!isEditing}
          />

          <label>Quận / Huyện</label>
          <input
            type="text"
            value={address.district}
            onChange={(e) => setAddress({ ...address, district: e.target.value })}
            disabled={!isEditing}
          />

          <label>Tỉnh / Thành phố</label>
          <input
            type="text"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            disabled={!isEditing}
          />
        </div>

        {/* Các nút bên phải */}
        <div className="profile-actions">
          {isEditing ? (
            <button className="save-button" onClick={handleSave}>
              Lưu thông tin
            </button>
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              Sửa thông tin
            </button>
          )}
          <button className="logout-button" onClick={handleLogout}>
            Đăng xuất
          </button>
          <button className="back-button" onClick={() => navigate('/')}>
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
