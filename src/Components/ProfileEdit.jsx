import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateProfile } from "../utils/userSlice";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    skills: user?.skills || "",
    avatar: user?.avatar || "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    setSaved(true);
  };

  // Automatically hide the success alert after 3 seconds
  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 3000);
      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [saved]);

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="card bg-base-200 shadow-xl w-full max-w-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Your Profile</h2>

          {/* Avatar */}
          <div className="flex flex-col items-center mb-4">
            {formData.avatar ? (
              <img
                src={formData.avatar}
                alt="avatar"
                className="w-24 h-24 object-cover rounded-full border-2 border-primary mb-4 transition-all duration-300 hover:scale-105"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-gray-600">
                No Avatar
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <textarea
              name="bio"
              placeholder="Enter bio"
              value={formData.bio}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
            />
            <input
              type="text"
              name="skills"
              placeholder="Enter skills"
              value={formData.skills}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="avatar"
              placeholder="Profile Picture URL"
              value={formData.avatar}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-full">
              Save Changes
            </button>
          </form>

          {/* Success Alert */}
          {saved && (
            <div
              className="alert alert-success mt-4 opacity-0 animate-fadeIn"
              style={{ animation: "fadeIn 0.5s forwards" }}
            >
              ✅ Profile updated successfully!
            </div>
          )}
        </div>
      </div>

      {/* Inline CSS for smooth fade in */}
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ProfileEdit;
