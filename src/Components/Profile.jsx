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






















// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateProfile } from "../utils/userSlice";

// const Profile = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const [form, setForm] = useState(user);
//   const [saved, setSaved] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateProfile(form));
//     setSaved(true);

//     setTimeout(() => setSaved(false), 3000);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-base-200 p-6">
//       <div className="card bg-base-100 shadow-xl w-full max-w-lg">
        // <div className="card-body">
        //   <h2 className="card-title text-2xl mb-4">Your Profile</h2>

        //   <div className="flex flex-col items-center">
        //     <img
        //       // src={form.avatar}
        //       src="data:image/png;base64,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"
        //       alt="avatar"
        //       className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-primary"
        //     />
        //   </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="input input-bordered w-full"
//               value={form.name}
//               onChange={handleChange}
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="input input-bordered w-full"
//               value={form.email}
//               onChange={handleChange}
//             />

//             <input
//               type="text"
//               name="skills"
//               placeholder="Skills (comma separated)"
//               className="input input-bordered w-full"
//               value={form.skills}
//               onChange={handleChange}
//             />

//             <textarea
//               name="bio"
//               placeholder="Your Bio"
//               className="textarea textarea-bordered w-full"
//               value={form.bio}
//               onChange={handleChange}
//             />

//             <input
//               type="text"
//               name="avatar"
//               placeholder="Profile Picture URL"
//               className="input input-bordered w-full"
//               value={form.avatar}
//               onChange={handleChange}
//             />

//             <button type="submit" className="btn btn-primary w-full">
//               Save Changes
//             </button>
//           </form>

//           {saved && (
//             <div className="alert alert-success mt-4">
//               ✅ Profile updated successfully!
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
