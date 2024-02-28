import axios from "axios";
import propTypes from "prop-types";
import { useEffect, useState } from "react";

function MelmilapProfile({ profileData }) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    let currentImageObjectUrl = "";
    (async function () {
      const baseUrl = `https://ijalas.kathmandu.gov.np/download/public/melmilapkarta`;

      const imageBlob = await axios.get(
        `${baseUrl}/${profileData.melmilapKartaPhotoUrl}`,
        { responseType: "blob" },
      );

      const imageObject = URL.createObjectURL(imageBlob.data);
      setImageUrls(imageObject);
    })();

    return () => {
      if (currentImageObjectUrl) {
        URL.revokeObjectURL(currentImageObjectUrl);
      }
    };
  }, []);

  return (
    <div className="profile-item font-medium w-80 h-94">
      <div className="image-container flex justify-center">
        <img
          src={imageUrls}
          alt="profile-img"
          className="rounded-md object-cover"
          style={{
            width: "200px",
            height: "250px",
          }}
        />
      </div>
      <div className="info-container flex flex-col gap-1.5 items-center mt-4 text-darkGrey">
        <h2 className="name text-blue font-medium text-lg">
          {profileData.fullName}
        </h2>
        <p className="contact text-sm text-blue">{profileData.mobileNo}</p>
      </div>
    </div>
  );
}

MelmilapProfile.propTypes = {
  profileData: propTypes.object.isRequired,
};

export default MelmilapProfile;
