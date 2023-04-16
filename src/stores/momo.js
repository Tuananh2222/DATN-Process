import axios from 'axios';
import CryptoJS from 'crypto-js';

const endpoint = 'https://test-payment.momo.vn/v2/gateway';
const partnerCode = 'MOMO_ATM_DEV';
const accessKey = 'w9gEg8bjA2AM2Cvr';
const secretKey = 'mD9QAVi4cm9N844jh5Y2tqjWaaJoGVFM';

const payment = async (orderId, amount) => {
  const endpointUrl = `${endpoint}/pay`;
  const requestId = 1681652950074;
  const requestType = 'captureMoMoWallet';

  const rawSignature = `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${requestId}&amount=${amount}&orderId=${orderId}&orderInfo=Thanh toan&requestType=${requestType}`;
  const signature = CryptoJS.HmacSHA256(rawSignature, secretKey).toString(CryptoJS.enc.Hex);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const data = {
    partnerCode,
    accessKey,
    requestId,
    amount,
    orderId,
    orderInfo: 'Thanh toán qua Ví MoMo',
    returnUrl: 'http://localhost:8080/',
    requestType,
    signature,
  };

  const response = await axios.post(endpointUrl, data, config);
  return response.data;
};

export { payment };
