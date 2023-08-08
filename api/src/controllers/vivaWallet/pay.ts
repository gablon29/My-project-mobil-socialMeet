export default async (req, res) => {

    const OrderCode = req.params.OrderCode;
    const url = 'https://www.vivapayments.com/web/checkout?ref=/' //no estoy segura de si se usa esta o no, por las dudas la dejo en una const

    const paymentPageUrl = url + OrderCode; 
    res.redirect(paymentPageUrl);
}