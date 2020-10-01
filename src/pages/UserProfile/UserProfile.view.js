import React from 'react';

function UserProfileView({
  userInfo,
  finalAvatar,
  onChangeData,
  handleChangeFile,
  handleSubmit
}) {
  return (
    <div className="user-profile">
      <h2 className="profile__title">Thông tin của bạn</h2>
      <div className="avatar">
        <img src={finalAvatar} alt="avatar" />
      </div>
      <form action="#">
        <div className="form-group">
          <input
            type="text"
            value={userInfo?.fullname || ""}
            placeholder="Tên của bạn"
            className="form-control"
            onChange={onChangeData('fullname')}
          />
        </div>
        <div className="form-group">
          <select
            onChange={onChangeData('gender')}
            value={userInfo?.gender || ""}
            className="form-control"
          >
            <option disabled>Giới tính</option>
            <option value="name">Nam</option>
            <option value="nữ">Nữ</option>
          </select>
        </div>
        <div className="form-group">
          <input
            onChange={handleChangeFile}
            name="avatar"
            type="file"
            placeholder="Ảnh đại diện của bạn"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            cols={30}
            rows={5}
            onChange={onChangeData('description')}
            placeholder="Mô tả ngắn..."
            className="form-control"
            value={userInfo?.description || ""}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={handleSubmit}
        >Cập nhật thông tin
        </button>
      </form>
    </div>
  );
}

export default UserProfileView;