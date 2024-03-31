'use server'

import sendEmailService from "@/services/sendEmailService";

export async function sendProposalEmail(formData: FormData) {

  try {
    await sendEmailService(formData, 'proposal');
    // console.log('sent email...');
    return ({ success: true, message: 'Sent email successfully' });
  } catch (error: any) {
    // throw error;
    return ({ success: false, message: error.message });
  }

}


export async function sendContactEmail(formData: FormData) {

  try {
    await sendEmailService(formData, 'contact');
    // console.log('sent email...');
    return ({ success: true, message: 'Sent email successfully' });
  } catch (error: any) {
    // throw error;
    return ({ success: false, message: error.message });
  }

}
