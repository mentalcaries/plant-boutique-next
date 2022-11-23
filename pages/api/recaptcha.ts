import { NextApiRequest, NextApiResponse } from 'next';

const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationUrl =
    'https://www.google.com/recaptcha/api/siteverify?secret=' +
    secretKey +
    '&response=' +
    token;

  return await fetch(verificationUrl, {
    method: 'POST',
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = req.body.token;

    const response = await verifyRecaptcha(token);

    if (response.status === 200) {
      return res
        .status(200)
        .json({ status: 'Success', message: 'Verification successful' });
    } else {
      return res.json({
        status: 'Failed',
        message: 'Are you a bot?',
      });
    }
  } catch (error) {
    console.log('Error: ', error);
    res.json({
      status: 'Failed',
      message: 'You might not be human',
    });
  }
}
