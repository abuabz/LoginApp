import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avathar from '../assets/avathar1.png'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidation } from '../Helper/Validate'
import convertToBase64 from '../Helper/convert'
export default function Register() {
  const [file, setfile] = useState()
  const formik = useFormik({
    initialValues: {
      email: 'abu@abu.com',
      username: 'abuabz123',
      Password: 'abu@12345'
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || '' })
      console.log(values)
    }
  })

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setfile(base64);
  }

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: '55%' }} >
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you!
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor='profile'>
                <img src={file || avathar} className={styles.profile_img} alt="avathar" />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile'></input>
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email' />
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
              <input {...formik.getFieldProps('Password')} className={styles.textbox} type="text" placeholder='Password' />
              <button className={styles.btn} type="submit">Register</button>
            </div>
            <div className="text-center py-4">
              <span className='text-gray-500'>Already Register?<Link className='text-red-500' href="/">Login Now</Link></span>
            </div>
          </form>
        </div>

      </div>
    </div>

  )
}