const DOC_TYPES = [
  "Passport",
  "10th Marksheet",
  "12th Marksheet",
  "Graduation Certificate",
  "IELTS/TOEFL Score",
  "SOP",
  "LOR",
  "Resume",
  "Bank Statement",
  "Other",
];

const REQUIRED_DOC_TYPES = [
  "Passport",
  "10th Marksheet",
  "12th Marksheet",
  "Graduation Certificate",
  "IELTS/TOEFL Score",
  "SOP",
  "LOR",
  "Bank Statement",
];

const VISA_FEE_DATA = {
  Canada: { fee: 150, currency: "CAD", extra: "Biometrics: CAD 85" },
  Australia: { fee: 710, currency: "AUD", extra: "Subclass 500 student visa" },
  UK: { fee: 490, currency: "GBP", extra: "+ Immigration Health Surcharge" },
  Germany: { fee: 75, currency: "EUR", extra: "National (Type D) visa" },
  "New Zealand": { fee: 375, currency: "NZD", extra: "Fee Payer visa" },
  Dubai: { fee: 1000, currency: "AED", extra: "Student residence visa" },
  Italy: { fee: 116, currency: "EUR", extra: "National (Type D) visa" },
  Japan: { fee: 3000, currency: "JPY", extra: "Single-entry student visa" },
};

const INR_RATES = {
  CAD: 61,
  AUD: 56,
  GBP: 107,
  EUR: 91,
  NZD: 51,
  AED: 23,
  JPY: 0.56,
};

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

module.exports = {
  DOC_TYPES,
  REQUIRED_DOC_TYPES,
  VISA_FEE_DATA,
  INR_RATES,
  ALLOWED_MIME_TYPES,
  MAX_FILE_SIZE,
};