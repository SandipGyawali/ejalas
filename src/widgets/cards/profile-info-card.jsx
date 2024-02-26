import propTypes from "prop-types";

function ProfileInfo({ profileData }) {
  return (
    <div className="profile-item">
      <div className="image-container">
        <img
          src={profileData.img}
          alt="profile-img"
          className="rounded-lg w-54 h-64"
        />
      </div>
      <div className="info-container flex flex-col gap-0.5 items-center mt-4 text-darkGrey">
        <h2 className="name text-blue font-medium text-lg">
          {profileData.name}
        </h2>
        <p className="position text-sm">{profileData.role}</p>
        <p className="contact text-sm">{profileData.phone}</p>
      </div>
    </div>
  );
}

ProfileInfo.propTypes = {
  profileData: propTypes.object.isRequired,
};

export default ProfileInfo;
