import Avatar from "../atom/Avatar";
import tamayaAsset from "../../assets/tamaya.png";

const Profile = () => {
  return (
    <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
      <Avatar src={tamayaAsset} alt={"anggito"} />

      <div>
        <p className="text-sm font-semibold">Shaula Dara</p>
        <p className="text-xs font-extralight"> Manager </p>
      </div>
    </div>
  );
};

export default Profile
