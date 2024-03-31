'use server'

import sendEmailService from "@/services/sendEmailService.js";

export async function sendProposalEmail(formData: FormData) {

  try {
    const debugInfo = await sendEmailService(formData, 'proposal');
    // console.log('sent email...');
    return ({ success: true, message: 'Sent email successfully', debugInfo });
  } catch (error: any) {
    // throw error;
    return ({ success: false, message: error.message });
  }

}


export async function sendContactEmail(formData: FormData) {

  try {
    const debugInfo = await sendEmailService(formData, 'contact');
    // console.log('sent email...');
    return ({ success: true, message: 'Sent email successfully', debugInfo });
  } catch (error: any) {
    // throw error;
    return ({ success: false, message: error.message });
  }

}
