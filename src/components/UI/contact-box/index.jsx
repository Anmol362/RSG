// 'use client';
// import React, { useRef, useState } from 'react';
// import styled from 'styled-components';
// import emailjs from 'emailjs-com';
// import { toast } from 'react-toastify';

// import styles from './styles.module.css';
// // import validation from '@/services/validation';
// import axios from 'axios';

// const Contact = () => {
//   const [userDetails, setUserDetails] = useState({
//     email: '',
//     name: '',
//     mobile: '',
//     message: '',
//   });
// //   const toastId = useRef<Id>();
// //   const [countryCode, setCountryCode] = useState('+91');
//   const form = useRef<HTMLFormElement>(null);
// //   const { isLoading, startLoading, stopLoading } = useLoading();

// //   const validateName = () => {
// //     if (!userDetails?.name) {
// //       toast.error('Name is required');
// //       return false;
// //     }
// //     return true;
// //   };

//   const validateMessage = () => {
//     if (!userDetails?.message) {
//       toast.error('Message is required');
//       return false;
//     }
//     return true;
//   };

// //   const validateMobile = () => {
// //     if (!userDetails?.mobile) {
// //       toast.error('Mobile is required');
// //       return false;
// //     }
// //     if (!validation.mobile(countryCode + userDetails?.mobile)) {
// //       toast.error('Invalid phone format');
// //       return false;
// //     }
// //     return true;
// //   };

// //   const validateEmail = () => {
// //     if (!userDetails?.email) {
// //       toast.error('Email is required');
// //       return false;
// //     }
// //     if (!validation.email(userDetails?.email)) {
// //       toast.error('Invalid email format');
// //       return false;
// //     }
// //     return true;
// //   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     // const isNameValid = validateName();
//     // const isEmailValid = validateEmail();
//     // const isMobileValid = validateMobile();
//     // const isMessageValid = validateMessage();

//     // try {
//     //   const data = {
//     //     name: userDetails.name,
//     //     email: userDetails.email,
//     //     phoneNumber: countryCode + userDetails.mobile,
//     //     message: userDetails?.message,
//     //   };
//     //   if (isNameValid && isEmailValid && isMobileValid && isMessageValid) {
//     //     // startLoading();
//     //     const response = await axios.post(
//     //       'https://prowfit-gym-backend.onrender.com/api/v1/glowel/contact-us',
//     //       data
//     //     );
//     //     if (response.data.success && response.status === 200) {
//     //       toast.success(response.data.message);
//     //     } else {
//     //       toast.error(response.data.message);
//     //     }
//     //   }
//     // } catch (error) {
//     //   toast.error(error.message);
//     // } finally {
//     // //   stopLoading();
//     // }
//   };

// //   const sendEmail = (e) => {
// //     e.preventDefault();
// //     // startLoading();

// //     if (form.current) {
// //       emailjs.sendForm('service_m6fwgyc', 'template_idipmwc', form.current, 'gwB3tYFqFfDdAQvOE').then(
// //         (result) => {
// //           toast.success(`${result.text} you have successfully submit your request`);
// //         //   stopLoading();
// //         },
// //         (error) => {
// //           toast.error('something went wrong');
// //         //   stopLoading();
// //         }
// //       );
// //     }
// //   };

// //   const handleFormDataChange = (e) => {
// //     const value = e.target.value;
// //     const rule = /\s{1,}/g;
// //     const valueData = value.replace(rule, ' ');

//     // if (value.startsWith(' ')) {
//     //   if (!toast.isActive(toastId.current)) {
//     //     toastId.current = toast.error('Space not allowed');
//     //   }
//     // } else {
//     //   setUserDetails((prev) => ({ ...prev, [e.target.name]: valueData }));
//     // }
// //   };

//   return (
//     <div className={`${styles['main_contact_enquiry']} All_content_center`}>
//       <div className={`${styles['inner_main_contact_enquiry']}`}>
//         <div className={`${styles['enquiry']}`}>
//           <StyledContactForm>
//             <form ref={form} onSubmit={handleLogin}>
//               <div className={`${styles['input-field']} input-field`}>
//                 <label>Name</label>
//                 <input
//                   type='text'
//                   name='name'
//                   placeholder='Your name'
//                   value={userDetails?.name}
//                 //   onChange={handleFormDataChange}
//                 />
//               </div>
//               <div className={`${styles['input-field']} input-field`}>
//                 <label>Email</label>
//                 <input
//                   type='email'
//                   name='email'
//                   placeholder='Email'
//                   value={userDetails?.email}
//                 //   onChange={handleFormDataChange}
//                 />
//               </div>
//               <div className={`${styles['input-field']} input-field`}>
//                 <label>Phone Number</label>
//                 <input
//                   type='number'
//                   name='mobile'
//                   placeholder='Number'
//                   value={userDetails?.mobile}
//                   onChange={handleFormDataChange}
//                 />
//               </div>
//               <div className={`${styles['input-field']} input-field`}>
//                 <label>Message</label>
//                 <textarea
//                   name='message'
//                   placeholder='Enter your message here'
//                   value={userDetails?.message}
//                 //   onChange={handleFormDataChange}
//                 />
//               </div>
//               {/* {isLoading ? (
//                 <button className={`send-again-loader  All_content_center`}>
//                   <div className='custom-loader'></div>
//                 </button>
//               ) : ( */}
//                 <button className={`send-again-loader  All_content_center bg-transparent m-0 mt-2`}>
//                   <button type='submit' className='Dark_button'>
//                     Send
//                   </button>
//                 </button>
//               {/* )} */}
//             </form>
//           </StyledContactForm>
//           <div className={`${styles['map_location']}`}>
//             <iframe
//               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.459797508709!2d81.6142096756871!3d21.332351580393937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e7510088322f%3A0x356bec8bdbfda551!2sGlowel%20Steelium!5e0!3m2!1sen!2sin!4v1699782871089!5m2!1sen!2sin'
//               allowFullScreen={true}
//               loading='lazy'
//               referrerPolicy='no-referrer-when-downgrade'
//               className={`${styles['location']}`}
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StyledContactForm = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     .input-field {
//       border: 0px;
//       box-sizing: content-box;
//       background: none;
//       -webkit-tap-highlight-color: transparent;
//       display: block;
//       min-width: 0px;
//       width: 100%;
//       padding: 5px 0px;
//       position: relative;
//       background-color: transparent;
//       input {
//         width: 100%;
//         border: 1px solid #ccc;
//         border-radius: 8px;
//         color: #0f0f0f;
//         font-size: 14px;
//         margin-top: 5px;
//         background-color: transparent;
//         padding: 10px 16px;
//         &:focus {
//           border: 1px solid purple;
//         }
//         &::-webkit-outer-spin-button,
//         &::-webkit-inner-spin-button {
//           -webkit-appearance: none;
//           margin: 0;
//         }
//       }
//       input::placeholder {
//         font-size: 13px;
//       }

//       textarea {
//         &::placeholder {
//           font-size: 13px;
//           color: #ccd0db;
//           padding-left: '5px';
//         }
//         max-width: 100%;
//         min-width: 100%;
//         width: 100%;
//         max-height: 100px;
//         min-height: 100px;
//         padding: 7px;
//         outline: none;
//         border-radius: 5px;
//         background: transparent;
//         border: 1px solid rgb(220, 220, 220);

//         &:focus {
//           border: 1px solid purple;
//         }
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }
//   }
// `;

// export default Contact;
