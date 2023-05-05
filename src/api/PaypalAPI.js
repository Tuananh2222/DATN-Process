import fetch from "node-fetch";
const base = "https://api-m.sandbox.paypal.com";
const CLIENT_ID =
  "ASu2CgXspblwQ3wg_4EejqKdpkVmt2BmA2GxIFYOtNA9Xf69O4VsIPb1PXtWw_htFtaWO3kVfyg9CZ9n";
const APP_SECRET =
  "EJ5G59H4u6439rJJ7wSSmesq_CrLqlQyd2aMVerchFYRle-BQCm-LjMw3hnnoN4xCTvQCEwbBhZmWKjE";
class PaypalAPI {
  async createOrder() {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "100.00",
            },
          },
        ],
      }),
    });

    return handleResponse(response);
  }
  async capturePayment(orderId) {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderId}/capture`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return handleResponse(response);
  }
  async generateAccessToken() {
    const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const jsonData = await handleResponse(response);
    return jsonData.access_token;
  }
  async handleResponse(response) {
    if (response.status === 200 || response.status === 201) {
      return response.json();
    }

    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
export default new PaypalAPI();
