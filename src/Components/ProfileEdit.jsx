import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {updateProfile} from "../utils/userSlice"

const ProfileEdit = () => {
  const user = useSelector((state) => state.user.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData ] = useState({
    firstName: user ?.firstName || "",
    lastName: user?.lastName || "",
    age: user?.age || "",
    gender: user?.gender || "",
    photo: user?.photo || "",
    about: user?.about || "",
  })

  const handleChange = (e) => {
    setFormData({...formData , [e.target.name]: e.target.value})
  }

  const handleSave = () => {
    dispatch(updateProfile(formData));
  }

  return (
    <div className='flex items-center min-h-screen p-6 gap-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left panel - form */}
        <div className='flex-1 bg-base-200 p-6 shadow-lg rounded-lg'>
          <h2 className='text-2xl font-bold mb-4'>Your Profile</h2>
          <input name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' className='input w-full mb-4'/>
          <input name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' className='input w-full mb-4'/>
          <input name='age' value={formData.age} onChange={handleChange} placeholder='Age' className='input w-full mb-4'/>
          <input name='gender' value={formData.gender} onChange={handleChange} placeholder='Gender' className='input w-full mb-4'/>
          <input name='photo' value={formData.photo} onChange={handleChange} placeholder='Photo' className='input w-full mb-4'/>
          <textarea name='about' value={formData.about} onChange={handleChange} placeholder='About' className='textarea w-full mb-4'></textarea>
          <button className='btn btn-primary w-full' onChange={handleSave}>Save Profile</button>
        </div>

        {/* right panel- live preview */}
        <div className='bg-base-200 p-6 rounded-lg flex-1 shadow-lg'>
          <h2 className='text-2xl font-bold mb-4'>Preview</h2>
          <div className='flex flex-col space-y-5'>
            <img src={formData.photo || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAZlBMVEX///8AAAD8/Pzo6Ojt7e0tLS3d3d29vb1FRUWnp6f5+fnj4+MqKirw8PC0tLQ1NTUICAh0dHRSUlIRERGUlJTDw8MbGxvJyckiIiJjY2OKiop8fHxLS0uCgoI9PT2cnJzS0tJra2vuwsyhAAADeklEQVR4nO2b23KCMBBAG5AgIPe7oOL//2RFi8VyS3Sz6cOel844TjmTDZvNJn59EQRBEARBEARBEARhlrbjOHZp6hYZsSubsIhYT1SETbnTLXSHZyF7Jcw83VJf5jFlU9Kj5njahxmrHsvWaOXGC1Y9satLy0xWtBhLNM0ybymGA5UWMf73NZwScnwtd2u0eg7oc8ytBbQYu2KLHYW0GMtwtTpBLcZQp5gvFsWeGjOSgbAWY5iJf25NXCLE08oltBjr0LzWlsUpDZaWeZby2mPVPOJJ4kGH5OVIejlIXqK5fgBrgokn1QdnJK9W0qv6p14Fktd6+azPSy6t4q1EmaRXi+QlU030HJG8SkkvrLzqya2PKVbJKrjnGEh8JC/JiY+39fCkvBB33XsJrRpPS6qQ7hC9DPGUf0LUkplhyM1W0ZoVu21oXP9hFO+IVGGY7+KAt50sEi2dfH9rxBJNnd+Nvu8VbV2ccFq2Si86hLjx+LuY+IeWr4HZl+vPE5yHmTE5Heppgx8rB/N8wb/2z45/po/n/C0TE/vnPfRjzHnGh+fnwyeufYyTfXiwzm19Cp4azyCjxLKsngMz3lD4pse5tzN+P/ltY1Slei17HLHKXpo8rl2Nv6h8mQyi17l0nR+K8vr6tShQrDV99w4Ofx00lzszZzRKxfJo+sBbNOvMHnqVpp3V1dyXonz1P3/EagMzskJrVnugU6Ul2e/9y1lR/9eQ2QXNsTe2H/IGsm2cKUqWcrlDjnlUzP3tY+NtFHToPo9iD3ivwrNAvCzoZsVKZSoF8MbNB9JiDLYYgxou4AH7MNOPAc36sh3oNSC7wLInHGskcFpyfcst4FLFBdQLbJU0IMN4CyRUWcFhcv2ABbVtg3wbe6BKfbik+gAotQrdQJMB6LYabJbogckUMJXXGJgqDKKAfgWonC5hJ9gBrIvSydz32iLtoLRuYoB1DqDWLeVDhfIA3KPjspdM5mnBW4fmp12AHhVX1EzZa0xTaiWdE6P5UCtW0zf5tLBQeL2jfH+SnZX2pN13Y6n81KN8p69jITTw/YvsqhRlOOejntyFzCPekRpvRMcsjTs0q7vZRWTFrDL8X57s8qRYlSqe533YmE6zVACdT47On6gZOx40bVX8Tre0qNpTwPWduY8xuzxweoK8+0+/zCQIgiAIgiAIgiAIPXwD4sUtUHDV0LUAAAAASUVORK5CYII="} className='w-full h-48 object-cover mb-4 rounded-sm'/>
            <h3 className='text-xl font-semibold'>{formData.firstName} {formData.lastName}</h3>
            <p className='opacity-80'>Age: {formData.age}, {formData.gender}</p>
            <p className='opacity-80'>{formData.about}</p>
          </div>
            <button onClick={() => Navigate("/feed")} className="btn btn-outline mt-7">Back to Feed</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit