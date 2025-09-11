import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../utils/userSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    age: user?.age || "",
    gender: user?.gender || "",
    photo: user?.photo || "",
    about: user?.about || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateProfile(formData));
  };

  return (
    <div className="flex min-h-screen p-6 gap-6">
      {/* Left Panel - Form */}
      <div className="flex-1 bg-base-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input w-full mb-2" />
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input w-full mb-2" />
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="input w-full mb-2" />
        <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" className="input w-full mb-2" />
        <input name="photo" value={formData.photo} onChange={handleChange} placeholder="Photo URL" className="input w-full mb-2" />
        <textarea name="about" value={formData.about} onChange={handleChange} placeholder="About" className="textarea w-full mb-2" />
        <button onClick={handleSave} className="btn btn-primary w-full">Save Profile</button>
      </div>

      {/* Right Panel - Live Preview */}
      <div className="flex-1 bg-base-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Preview</h2>
        <div className="flex flex-col items-center">
          <img src={formData.photo || "https://via.placeholder.com/150"} alt="avatar" className="w-48 h-48 rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold">{formData.firstName} {formData.lastName}</h3>
          <p className="text-sm opacity-80">{formData.age}, {formData.gender}</p>
          <p className="mt-2 text-center">{formData.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
