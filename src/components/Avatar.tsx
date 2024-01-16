import React from 'react';
import AvatarProps from '../model/AvatarProps';
import '../style/avatar.css';
const Avatar: React.FC<AvatarProps> = ({ avatarUrl, altText }) => (
    <img src={avatarUrl} alt={altText} className="avatar" />
);

export default Avatar;

