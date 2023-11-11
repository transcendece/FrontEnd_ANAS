'use client'
import axios from "axios";
import Navbar from "../components/Navbar"
import Image from "next/image"
import { FiEdit2 } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

export default function setting() {


  const [cookies, setCookie] = useCookies(['jwt-token']);
  const [jwtToken, setJwtToken] = useState<string | undefined>(cookies["jwt-token"]);
  console.log('++++++++++');
  console.log({cookies});
  console.log('++++++++++');
  const [imageD, setImageD] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    checked_: false,
  });

  useEffect(() => {
    const jwtValue = cookies["jwt-token"];

    console.log('jwt-token:', jwtValue);
    setJwtToken(jwtValue);
    console.log(jwtToken);
  }, [cookies]);

    const headers = {
      // cookies: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODk0NSIsInVzZXJuYW1lIjoibWVncmlzc2UiLCJpYXQiOjE2OTk2NjMwMzcsImV4cCI6MTY5OTY2NjYzN30.FMtQLXxP3iy0W-h1EwG0uRlg43lo4k6U7Ao_Al3fftw`,
      // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODk0NSIsInVzZXJuYW1lIjoibWVncmlzc2UiLCJpYXQiOjE2OTk2NjM4MTQsImV4cCI6MTY5OTY2NzQxNH0.79HkZgofGS4I9rlSvwInXylYljS4jfbLo0DMqm9oabY`,
      // 'Content-Type': 'multipart/form-data',
  };

  // const jwt = cookieStore.get('jwt');

  // const uploadImage = () => {
  // if (imageD instanceof File){  
  //     console.log(imageD);
  //     const formData = new FormData();
  //     formData.append("file", imageD);
  //     formData.append("upload_preset", "vzhhlhkm");
  //     console.log("__________----");
  //     console.log(formData);
  //     console.log("__________----");
  //     axios.post("https://api.cloudinary.com/v1_1/dlnhacgo2/image/upload", formData
  //         ).then((res) => {console.log(res);
  //         })
  //   }
  // }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file' && files) {
      setImageD(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  }


  const handleImageUpload = async () => {
    if (imageD instanceof File) {
      const formData = new FormData();
      formData.append('file', imageD);
      formData.append('upload_preset', 'vzhhlhkm');

      try {
        console.log(formData);

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlnhacgo2/image/upload',
          formData
        );

        if (response.status === 200) {
          console.log('Image uploaded successfully:', response.data);
        } else {
          console.error('Image upload failed:', response.data);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  }

  const handleFormDataSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/Settings/username', formData, { headers, withCredentials: true });

      if (response.status === 201) {
        console.log('Data submitted successfully:', response.data);
      } else {
        console.error('Data submission failed:', response.data);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await handleImageUpload();

    await handleFormDataSubmit();
  }

  return (
          <div className="flex flex-col text-slate-100 h-full min-h-screen min-w-screen w-full">
            <div className="h-16 xLarge:h-24"><Navbar pageName="Profile" /></div>
            <div className="flex items-center h-full xMedium:h-[1200px] medium:min-w-[1000px] gap-12 m-4">
              <div className="flex flex-col w-[40%] Large:h-[63%] xMedium:h-[57%] min-h-[500px] h-[40%] justify-between">
                <form onSubmit={handleSubmit} className="flex flex-col w-[100%] xMedium:h-[100%]  min-h-[500px] h-[40%] justify-between">
                  <div className="flex xMedium:min-w-[600px] justify-center w-[400px] mx-auto">
                    <Image className='rounded-full border-4 w-48 h-48 xMedium:w-[250px] xMedium:h-[250px] border-[#E58E27]' alt='' src={'/gsus.jpeg'} height={250} width={250}/>
                    <label id="file-input-label" htmlFor="file-input" className="flex xMedium:mt-56 cursor-pointer text-[#E58E27]">
                        <FiEdit2 className="text-3xl"/>
                        <div className="xMedium:text-2xl text-xl">image Edit</div>
                    </label>
                    <input name="image" type="file" id="file-input" onChange={handleChange}
                      className="hidden"/>
                  </div>
                  <div className="flex justify-between xMedium:h-[5rem] xMedium:text-2xl Large:h-24 h-16 w-[400px] mx-auto  xMedium:min-w-[500px] rounded-3xl bg-[#323232]">
                      <div className="text-[#E58E27] text-xl xMedium:text-2xl m-auto">rname</div>
                      <div className="text-slate-400 text-xl xMedium:text-2xl m-auto w-[160px]">iel-sma</div>
                  </div>
                  <div className="flex justify-between xMedium:h-[5rem] xMedium:text-2xl Large:h-24 h-16 w-[400px] mx-auto  xMedium:min-w-[500px] rounded-3xl bg-[#323232]">
                      <div className="text-[#E58E27] text-xl xMedium:text-2xl m-auto">Nick name</div>
                      <div className="m-auto bg-[#323232]">
                        <input onChange={handleChange} name="username" value={formData.username} type="text" placeholder="MyUserName" className="border-none bg-none placeholder-slate-400 bg-[#323232] outline-0 w-[160px] text-xl xMedium:text-2xl" />
                      </div>
                  </div>
                  <div className="flex justify-between xMedium:h-[5rem] xMedium:text-2xl Large:h-24 h-16 w-[400px] mx-auto  xMedium:min-w-[500px] rounded-3xl bg-[#323232]">
                      <div className="text-[#E58E27] text-xl xMedium:text-2xl m-auto">Enable 2FA</div>
                      <div className="m-auto w-[160px] bg-[#323232]">
                        <label htmlFor="toggleCheck" className="w-[180px] h-20">
                          <input onChange={handleChange} type="checkbox" id="toogleCheck" name="checked_" checked={formData.checked_} className="h-8 rounded-full appearance-none w-16 bg-slate-500 opacity-80 checked:bg-slate-200 transition duration-300 relative" />
                          {/* <span className="w-5 h-5 bg-red-400 rounded-full absolute top-1 left-1"></span>
                          <span className="w-20 h-10 bg-slate-400 rounded-full absolute top-1 left-11"></span> */}
                        </label>
                      </div>
                  </div>
                  <button type="submit" className="xMedium:h-[5rem] Large:h-24 h-16 w-[400px] mx-auto  xMedium:min-w-[500px] border-x-2 border-[#E58E27] rounded-3xl bg-[#323232] text-slate-100 text-xl xMedium:text-2xl hover:bg-[#E58E27] hover:opacity-80 transition duration-700">SAVE</button>
                </form>           
              </div>
              <div className=" m-auto xMedium:min-w-[600px] hidden medium:block">
                <Image className='' alt='' src={'/pingPaddles.png'} height={1200} width={1200}/>
              </div>
            </div>
          </div>

  )
}

