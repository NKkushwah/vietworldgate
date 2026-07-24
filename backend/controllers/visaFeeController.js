const { VISA_FEE_DATA, INR_RATES } = require("../utils/constants");

// GET /api/visa-fee?country=Canada&applicants=2
exports.calculateVisaFee = (req, res) => {
  const country = req.query.country || "Canada";
  const applicants = Math.max(1, Math.min(10, Number(req.query.applicants) || 1));

  const data = VISA_FEE_DATA[country];
  if (!data) {
    return res.status(400).json({
      message: "Unknown country.",
      availableCountries: Object.keys(VISA_FEE_DATA),
    });
  }

  const totalForeign = data.fee * applicants;
  const inrRate = INR_RATES[data.currency] || 1;
  const totalINR = Math.round(totalForeign * inrRate);

  res.json({ country, applicants, ...data, totalForeign, totalINR });
};

// GET /api/visa-fee/countries
exports.getCountries = (req, res) => {
  res.json({ countries: Object.keys(VISA_FEE_DATA) });
};