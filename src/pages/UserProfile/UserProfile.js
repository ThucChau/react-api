import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetUserById, asyncUpdateProfile } from '../../actions/user';
import { useAuth, useUserId } from '../../helpers';
import defaultImage from '../../assets/images/default-avatar.png';
import UserProfileView from './UserProfile.view';
import './style.css';

function UserProfile(props) {
  useAuth();
  const userId = useUserId();
  const dispatch = useDispatch();
  const [objFileAvatar, setObjFileAvatar] = useState({
    file: null,
    previewAvatar: ''
  });
  const currentUserInfo = useSelector(state => state.User.currentUser);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setUserInfo(currentUserInfo);
  }, [currentUserInfo])

  useEffect(() => {
    dispatch(asyncGetUserById({ userId }))
      .then(res => {
        if (!res.ok) {
          // nếu lấy thông tin profile không thành công => không cho truy cập vào Profile Page
          alert('Có lỗi xảy ra');
        }
      })
  }, [dispatch, userId])

  const finalAvatar = useMemo(() => { 
    if(!objFileAvatar.file) {
      return userInfo?.profilepicture || defaultImage;
    } 
    if(objFileAvatar.file && objFileAvatar.previewAvatar) {
      return objFileAvatar.previewAvatar;
    }
  }, [userInfo, objFileAvatar])

  const onChangeData = (keyField) => (e) => {
    setUserInfo({
      ...userInfo,
      [keyField]: e.target.value
    })
  }

  const handleChangeFile = (e) => {
    const listFiles = e.target.files;
    if(listFiles.length) {
      const file = listFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setObjFileAvatar({
          file,
          previewAvatar: reader.result
        })
      }
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      avatar: objFileAvatar.file,
      fullname: userInfo.fullname,
      gender: userInfo.gender,
      description: userInfo.description
    }
    dispatch(asyncUpdateProfile(data))
      .then(res => {
        console.log('res = ', res);
      })
  }

  const injectedProp = {
    handleChangeFile,
    onChangeData,
    handleSubmit,
    finalAvatar,
    userInfo,
  }

  return (
    <UserProfileView {...injectedProp} />
  );
}

export default UserProfile;