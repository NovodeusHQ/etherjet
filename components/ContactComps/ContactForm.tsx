'use client';

import React, { useEffect, useRef, useState } from 'react';
import CustomCheckbox from './CustomeCheckBox/CustomeCheckBox';
import { useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className='main-btn' aria-disabled={pending} disabled={pending}>
      Submit
    </button>
  );
};

const ContactForm = ({ styles }: { styles: any }) => {
  const projectBudget = [
    { id: 'projectBudget', value: '$1-$5000' },
    { id: 'projectBudget', value: '$5,000 - $20,000' },
    { id: 'projectBudget', value: '$20,000-$50,000' },
    { id: 'projectBudget', value: '$50,000+' },
  ];

  const [selectServices, setSelectServices] = useState([
    { id: 'KOL', name: 'KOL', checked: true, label: 'KOL Recruitment and Management' },
    { id: 'communityManagement', name: 'communityManagement', checked: false, label: 'Community Management' },
    { id: 'advisory', name: 'advisory', checked: false, label: 'Advisory' },
    { id: 'marketMaking', name: 'marketMaking', checked: false, label: 'Market Making' },
    { id: 'graphicsDesign', name: 'graphicsDesign', checked: false, label: 'Graphics Design' },
    { id: 'allInclusive', name: 'allInclusive', checked: false, label: 'All Inclusive' },
  ]);

  const [selectBudget, setSelectBudget] = useState<{ [key: number]: boolean }>({});

  const handleSelectBudget = (id: number) => {
    setSelectBudget((prev) => ({ [id]: !prev[id] }));
  };

  const handleCheckboxChange = (changedId: string) => {
    const updatedCheckboxes = selectServices.map((checkbox) => {
      if (checkbox.id === changedId) {
        return { ...checkbox, checked: !checkbox.checked };
      } else if (checkbox.id === 'allInclusive' && changedId !== 'allInclusive') {
        return { ...checkbox, checked: false };
      } else if (checkbox.id !== 'allInclusive' && changedId === 'allInclusive') {
        return { ...checkbox, checked: true };
      } else {
        return checkbox;
      }
    });
    setSelectServices(updatedCheckboxes);
  };

  const [formData, setFormData] = useState({
    userFirstName: '',
    email: '',
    social: '',
    message: '',
    companyUrl: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const budgetIdx = Number(Object.keys(selectBudget)[0]);
    const budget = projectBudget[budgetIdx]?.value || 'Unknown Budget';

    let services = '';
    for (const service of selectServices) {
      if (service.checked) {
        services += services === '' ? service.label : `, ${service.label}`;
      }
    }

    const data = {
      ...formData,
      budget,
      services,
    };

    try {
      const response = await axios.post('/api/mail', data);
      if (response.data.success) {
        toast.success('Thank you for reaching out to EtherEdge! Your message has been received. We will get back to you shortly.');
      } else {
        toast.error('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to submit. Please try again.');
    }
  };

  return (
    <form className={`${styles.contactForm} flex flex-col md:flex-row gap-3 justify-between`} onSubmit={handleSubmit}>
      <article className='w-full md:w-[55%] '>
        <div>
          <h3>
            Select Service <span>(You can choose more than one)</span>{' '}
          </h3>
          <div className='flex flex-wrap gap-6 mt-6'>
            {selectServices.map(({ id, name, checked, label }) => (
              <div key={id} className='flex items-center gap-3 w-full md:w-[45%]'>
                <input id={id} name={name} type='checkbox' checked={checked} onChange={(e) => handleCheckboxChange(e.target.id)} />{' '}
                <label> {label} </label>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-10'>
          <h3>
            Project Budget <span>(in USD) </span>{' '}
          </h3>
          <div className='flex flex-wrap gap-3 mt-5'>
            {projectBudget.map(({ id, value }, idx) => (
              <div
                key={idx}
                className={`${selectBudget[idx] ? styles.activeBudgetBtn : styles.budgetBtn}`}
                onClick={() => handleSelectBudget(idx)}
              >
                <label id={id}> {value} </label>
              </div>
            ))}
          </div>
        </div>
      </article>
      <aside className='w-full md:w-[40%] '>
        <div className='flex gap-3 justify-between my-3'>
          <input
            id='userFirstName'
            name='userFirstName'
            type='text'
            placeholder='Name*'
            className=' w-5/12 pb-3'
            value={formData.userFirstName}
            onChange={handleChange}
          />
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Email*'
            className=' w-5/12 pb-3'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='my-5'>
          <input
            id='Telegram/WhatsApp*'
            name='social'
            type='text'
            placeholder='Telegram/WhatsApp*'
            className='w-full pb-3 '
            value={formData.social}
            onChange={handleChange}
          />
        </div>
        <div className='my-5'>
          <input
            id='companyURL'
            name='companyUrl'
            type='text'
            placeholder='Company URL'
            className='w-full pb-3 '
            value={formData.companyUrl}
            onChange={handleChange}
          />
        </div>
        <div className='my-5'>
          <textarea
            id='message'
            name='message'
            placeholder='Message'
            className='w-full pb-3 '
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className='my-5'>
          <SubmitButton />
        </div>
      </aside>
    </form>
  );
};

export default ContactForm;
