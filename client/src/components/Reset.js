import React from 'react'
import { Link } from 'react-router-dom'
import avathar from '../assets/avathar1.png'
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { resetPasswordValidation } from '../Helper/Validate'
export default function Reset(){
    const formik = useFormik({
        initialValues : {
            Password : 'admin@123',
            confirm_password : ''
        },
        validate : resetPasswordValidation,
        validateOnBlur:false ,
        validateOnChange :false,
        onSubmit : async values =>{
            console.log(values)
        }
    })
    return(
        <div className="container mx-auto">
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="flex justify-center items-center h-screen">
                <div className={styles.glass} style={{height:'80%',width:'50%'}}>
                    <div className="title flex flex-col items-center">
                            <h4 className='text-5xl font-bold'>Reset</h4>
                            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                               Enter New Password
                            </span>
                    </div>

                    <form  className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img src={avathar} className={styles.profile_img} alt="avathar" />
                        </div>
                        <div className="textbox flex flex-col items-center gap-6">
                        <input {...formik.getFieldProps('Password')} className={styles.textbox} type="text" placeholder='Password'/>
                        <input {...formik.getFieldProps('confirm_password')} className={styles.textbox} type="text" placeholder='Repeat Password'/>
                            <button className={styles.btn} type="submit">Sign In</button>
                        </div>
                   
                    </form>
                </div>

            </div>
        </div>
        
    )
}