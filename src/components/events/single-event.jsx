import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import styles from "../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";

const SingleEvent = ({data}) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('')
  
    const onSubmit = async (e) => {
      e.preventDefault();
      const emailValue = inputEmail.current.value;
      const eventId = router?.query.id;
  
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
        if(!emailValue.match(validRegex)){
          setMessage('Please introduce a valid email address')
        }
      try {
        const response = await fetch("/api/email-registration", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailValue, eventId }),
        });
  
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setMessage(data.message);
        inputEmail.current.value = '';
      } catch (e) {
        console.log(e, "ERROR");
      }
    };
  
    return (
      <div className={`${styles.main} ${inter.className}`}>
        <nav></nav>
        <div>
          <Image src={data.image} width={1000} height={1000} alt={data.title} />
  
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <form onSubmit={onSubmit}>
            <label>Get Registered for this event</label>
            <input
              ref={inputEmail}
              type="email"
              placeholder="please insert email here"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>{message}</p>
      </div>
    );

}

export default SingleEvent;