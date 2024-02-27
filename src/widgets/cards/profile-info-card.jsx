import propTypes from "prop-types";

function ProfileInfo({ profileData }) {
  return (
    <div className="profile-item font-medium">
      <div className="image-container">
        <img
          src={profileData.img}
          alt="profile-img"
          className="rounded-lg w-52 h-60"
        />
      </div>
      <div className="info-container flex flex-col gap-0.5 items-center mt-4 text-darkGrey">
        <h2 className="name text-blue font-medium text-lg">
          {profileData.name}
        </h2>
        <p className="position text-base">{profileData.role}</p>
        <p className="contact text-sm text-black">{profileData.phone}</p>
      </div>
    </div>
  );
}

ProfileInfo.propTypes = {
  profileData: propTypes.object.isRequired,
};

export default ProfileInfo;
