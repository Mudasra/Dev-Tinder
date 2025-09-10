import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="card card-border bg-base-100 w-96">
      <figure>
        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-64 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {profile.name } ,  {profile.age}</h2>
        <p>{profile.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
