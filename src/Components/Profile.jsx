import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <p>Please login to see your profile.</p>;
  }

  return (
    <div className="card bg-base-200 p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {user.name || "No name set"}</p>
      <p><strong>Email:</strong> {user.email || "No email set"}</p>
      <p><strong>Bio:</strong> {user.bio || "No bio yet"}</p>
      <p><strong>Skills:</strong> {user.skills || "No skills added"}</p>
    </div>
  );
};

export default Profile;
