import Get_Qoute from '@/components/home/get-qoute';
import Instagram from '@/components/instagram/instagram';
import TestimonialAndFaq from '@/components/testimonial/testimonial-and-faq';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    SendMail()
    function SendMail() {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
          reset();
          setLoading(false);
        }
      });
    }
  }
  return (
    <>
    <Get_Qoute />
    <TestimonialAndFaq />
    <Instagram />
    </>
  )
}

export default ContactUs