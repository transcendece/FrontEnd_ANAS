"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function TwoFactorValidation() {
  const router = useRouter();
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [body, setBody] = useState({
    code: '',
  })

  const handleInputChange = (index: any, value: any) => {
    const newOtpValues = [...otpValues];
    const newbody = body
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    setBody(newbody)
  };

  const handleValidate = async () => {
  
    body.code = otpValues.join('');
    console.log("otp", body)

    const response = await axios.post('http://localhost:5000/2FA/validation', body, {withCredentials: true})

    if (response.status === 200) {
      console.log('data', response.data)
      router.push('/profile')
    }
  };

  return (
    <div className="h-screen bg-black-500 py-20 px-3">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-[#E58E27] h-64 py-3 rounded text-center">
              <h1 className="text-2xl font-bold text-black">OTP Verification</h1>
              <div className="flex flex-col mt-4 text-black">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">Google Authenticator</span>
              </div>
              <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    className="m-2 border h-10 w-10 text-center form-control rounded text-black"
                    type="text"
                    value={value}
                    onChange={e => handleInputChange(index, e.target.value)}
                    maxLength={1}
                  />
                ))}
              </div>
              <div className="flex justify-center text-center mt-5">
                <a className="flex items-center text-white-700 hover:text-black-900 cursor-pointer" onClick={handleValidate}>
                  <span className="font-bold">Validate</span><i className='bx bx-caret-right ml-1'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}