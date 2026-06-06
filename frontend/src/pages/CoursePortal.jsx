import React, { useState, useMemo, useRef } from 'react';
import './CoursePortal.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const initialCourses = [

  {
    id: 'GER001',
    title: 'Bachelor in Business & Social Sciences',
    university: 'Freie Universität Berlin',
    intake: 'April, October',
    tuitionFee: 500,
    faculty: 'Business',
    campuses: ['Berlin'],
    level: 'Bachelor',
    duration: '36 Months',
    ielts: '6.5',
    country: 'Germany'
  },
  {
    id: 'GER002',
    title: 'Bachelor in Engineering',
    university: 'RWTH Aachen University',
    intake: 'April, October',
    tuitionFee: 700,
    faculty: 'Engineering',
    campuses: ['Aachen'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '6.5',
    country: 'Germany'
  },
  {
    id: 'UK001',
    title: 'Bachelor in Business & Computing',
    university: 'University of Sunderland',
    intake: 'January, September',
    tuitionFee: 16000,
    faculty: 'Business',
    campuses: ['Sunderland'],
    level: 'Bachelor',
    duration: '36 Months',
    ielts: '6.0',
    country: 'United Kingdom'
  },
  {
    id: 'UK002',
    title: 'Diploma in Business & Engineering',
    university: 'University of Bolton',
    intake: 'January, September',
    tuitionFee: 16500,
    faculty: 'Engineering',
    campuses: ['Bolton'],
    level: 'Diploma',
    duration: '24 Months',
    ielts: '6.0',
    country: 'United Kingdom'
  },
  {
    id: 'CAN001',
    title: 'Bachelor in Business & IT',
    university: 'Cape Breton University',
    intake: 'January, May, September',
    tuitionFee: 22000,
    faculty: 'IT',
    campuses: ['Nova Scotia'],
    level: 'Bachelor',
    duration: '48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'CAN002',
    title: 'Associate Degree in Business',
    university: 'University Canada West',
    intake: 'Multiple',
    tuitionFee: 25000,
    faculty: 'Business',
    campuses: ['British Columbia'],
    level: 'Associate Degree',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'AUS001',
    title: 'Bachelor in IT & Business',
    university: 'Federation University Australia',
    intake: 'February, July',
    tuitionFee: 30000,
    faculty: 'IT',
    campuses: ['Victoria'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '6.0',
    country: 'Australia'
  },
  {
    id: 'AUS002',
    title: 'Certificate IV in IT',
    university: 'Central Queensland University',
    intake: 'February, July, November',
    tuitionFee: 32000,
    faculty: 'IT',
    campuses: ['Queensland'],
    level: 'Certificate IV',
    duration: '12 Months',
    ielts: '6.0',
    country: 'Australia'
  },
  {
    id: 'NZ001',
    title: 'Diploma in IT & Business',
    university: 'Southern Institute of Technology',
    intake: 'February, July',
    tuitionFee: 24000,
    faculty: 'IT',
    campuses: ['Invercargill'],
    level: 'Diploma',
    duration: '24 Months',
    ielts: '6.0',
    country: 'New Zealand'
  },
  {
    id: 'RUS001',
    title: 'Bachelor in Medicine',
    university: 'Peoples Friendship University of Russia',
    intake: 'September',
    tuitionFee: 6000,
    faculty: 'Medical',
    campuses: ['Moscow'],
    level: 'Bachelor',
    duration: '60 Months',
    ielts: 'Not Required',
    country: 'Russia'
  } ,
  {
    id: '078172B',
    title: 'Bachelor of Occupational Therapy',
    university: 'Australian Catholic University',
    intake: 'February',
    tuitionFee: 52544,
    faculty: 'Allied Health',
    campuses: ['Bel', 'Bris', 'Can', 'Mel', 'North Syd'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '7',
    country: 'Australia'
  },
  {
    id: '071515G',
    title: 'Bachelor of Physiotherapy',
    university: 'Australian Catholic University',
    intake: 'February',
    tuitionFee: 52544,
    faculty: 'Allied Health',
    campuses: ['Bal', 'Bris', 'North Syd'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '7',
    country: 'Australia'
  },
  {
    id: '084790C',
    title: 'Bachelor of Social Work',
    university: 'Australian Catholic University',
    intake: 'February',
    tuitionFee: 32392,
    faculty: 'Allied Health',
    campuses: ['Can', 'str'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '7',
    country: 'Australia'
  },
  {
    id: '078174M',
    title: 'Bachelor of Speech Pathology',
    university: 'Australian Catholic University',
    intake: 'February',
    tuitionFee: 43785,
    faculty: 'Allied Health',
    campuses: ['Bris', 'Mel', 'North Syd'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: '097207E',
    title: 'Master of Leadership and Management in Health Care',
    university: 'Australian Catholic University',
    intake: 'January',
    tuitionFee: 32688,
    faculty: 'Allied Health',
    campuses: ['North Syd'],
    level: 'Master (coursework)',
    duration: '12 - 24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'B001',
    title: 'Bachelor of Nursing',
    university: 'Deakin University',
    intake: 'February, July',
    tuitionFee: 36000,
    faculty: 'Health',
    campuses: ['Melbourne', 'Geelong'],
    level: 'Bachelor',
    duration: '36 Months',
    ielts: '7',
    country: 'Australia'
  },
  {
    id: 'B002',
    title: 'Bachelor of Information Technology',
    university: 'University of Technology Sydney',
    intake: 'February, July',
    tuitionFee: 42000,
    faculty: 'IT',
    campuses: ['Sydney'],
    level: 'Bachelor',
    duration: '36 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'B003',
    title: 'Bachelor of Business',
    university: 'Griffith University',
    intake: 'February, July, November',
    tuitionFee: 33000,
    faculty: 'Business',
    campuses: ['Gold Coast', 'Brisbane'],
    level: 'Bachelor',
    duration: '36 Months',
    ielts: '6',
    country: 'Australia'
  },
  {
    id: 'B004',
    title: 'Bachelor of Engineering (Civil)',
    university: 'University of Adelaide',
    intake: 'February, July',
    tuitionFee: 45000,
    faculty: 'Engineering',
    campuses: ['Adelaide'],
    level: 'Bachelor',
    duration: '48 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'D001',
    title: 'Diploma of Business',
    university: 'La Trobe College Australia',
    intake: 'February, June, October',
    tuitionFee: 22000,
    faculty: 'Business',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '12 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'D002',
    title: 'Diploma of Engineering',
    university: 'Monash College',
    intake: 'February, July',
    tuitionFee: 30000,
    faculty: 'Engineering',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '1 - 12 Months',
    ielts: '6',
    country: 'Australia'
  },
  {
    id: 'D003',
    title: 'Diploma of Hospitality Management',
    university: 'William Angliss Institute',
    intake: 'February, July',
    tuitionFee: 18000,
    faculty: 'Hospitality',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '12 - 18 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'M001',
    title: 'Master of Business Administration (MBA)',
    university: 'University of Sydney',
    intake: 'February, August',
    tuitionFee: 60000,
    faculty: 'Business',
    campuses: ['Sydney'],
    level: 'Master (coursework)',
    duration: '18 Months',
    ielts: '7',
    country: 'Australia'
  },
  {
    id: 'M002',
    title: 'Master of Cyber Security',
    university: 'RMIT University',
    intake: 'February, July',
    tuitionFee: 47000,
    faculty: 'IT',
    campuses: ['Melbourne'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'M003',
    title: 'Master of Public Health',
    university: 'University of Queensland',
    intake: 'February, July',
    tuitionFee: 42000,
    faculty: 'Health',
    campuses: ['Brisbane'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'AD001',
    title: 'Associate Degree in IT',
    university: 'University of Canberra',
    intake: 'February, July',
    tuitionFee: 26000,
    faculty: 'IT',
    campuses: ['Canberra'],
    level: 'Associate Degree',
    duration: '12 - 24 Months',
    ielts: '6',
    country: 'Australia'
  },
  {
    id: 'AD002',
    title: 'Associate Degree in Business',
    university: 'Swinburne University',
    intake: 'February, July',
    tuitionFee: 27000,
    faculty: 'Business',
    campuses: ['Melbourne'],
    level: 'Associate Degree',
    duration: '1 - 12 Months',
    ielts: '6',
    country: 'Australia'
  },
  {
    id: 'CIV001',
    title: 'Certificate IV in Kitchen Management',
    university: 'TAFE Queensland',
    intake: 'January, April, July',
    tuitionFee: 15000,
    faculty: 'Hospitality',
    campuses: ['Brisbane'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'CIV002',
    title: 'Certificate IV in Automotive Technology',
    university: 'TAFE NSW',
    intake: 'February, July',
    tuitionFee: 14000,
    faculty: 'Automotive',
    campuses: ['Sydney'],
    level: 'Certificate IV',
    duration: '12 - 24 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'B005',
    title: 'Bachelor of Psychology',
    university: 'Macquarie University',
    intake: 'February, July',
    tuitionFee: 37000,
    faculty: 'Arts',
    campuses: ['Sydney'],
    level: 'Bachelor',
    duration: '36 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'B006',
    title: 'Bachelor of Accounting',
    university: 'Curtin University',
    intake: 'February, July',
    tuitionFee: 34000,
    faculty: 'Business',
    campuses: ['Perth'],
    level: 'Bachelor',
    duration: '36 Months',
    ielts: '6',
    country: 'Australia'
  },
  {
    id: 'M004',
    title: 'Master of Engineering Management',
    university: 'University of Melbourne',
    intake: 'February, July',
    tuitionFee: 50000,
    faculty: 'Engineering',
    campuses: ['Melbourne'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'M005',
    title: 'Master of Finance',
    university: 'University of New South Wales',
    intake: 'February, September',
    tuitionFee: 55000,
    faculty: 'Finance',
    campuses: ['Sydney'],
    level: 'Master (coursework)',
    duration: '18 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'D004',
    title: 'Diploma of Early Childhood Education',
    university: 'Victoria University',
    intake: 'February, July',
    tuitionFee: 19000,
    faculty: 'Education',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '12 - 18 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'CIV003',
    title: 'Certificate IV in Building and Construction',
    university: 'Holmesglen Institute',
    intake: 'February, July',
    tuitionFee: 16000,
    faculty: 'Construction',
    campuses: ['Melbourne'],
    level: 'Certificate IV',
    duration: '24 - 36 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'D101',
    title: 'Diploma of Information Technology',
    university: 'TAFE NSW',
    intake: 'February, July',
    tuitionFee: 16000,
    faculty: 'IT',
    campuses: ['Sydney', 'Newcastle'],
    level: 'Diploma',
    duration: '12 - 24 Months',
    ielts: '6',
    country: 'Australia'
  },
  {
    id: 'D102',
    title: 'Diploma of Business',
    university: 'La Trobe College Australia',
    intake: 'February, June, October',
    tuitionFee: 22000,
    faculty: 'Business',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '12 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'D103',
    title: 'Diploma of Engineering',
    university: 'Monash College',
    intake: 'February, July',
    tuitionFee: 30000,
    faculty: 'Engineering',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '12 Months',
    ielts: '6',
    country: 'Australia'
  },
  {
    id: 'D104',
    title: 'Diploma of Hospitality Management',
    university: 'William Angliss Institute',
    intake: 'February, July',
    tuitionFee: 18000,
    faculty: 'Hospitality',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '12 - 18 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'D105',
    title: 'Diploma of Early Childhood Education',
    university: 'Victoria University',
    intake: 'February, July',
    tuitionFee: 19000,
    faculty: 'Education',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '12 - 18 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'D106',
    title: 'Diploma of Marketing and Communication',
    university: 'RMIT University',
    intake: 'February, July',
    tuitionFee: 21000,
    faculty: 'Marketing',
    campuses: ['Melbourne'],
    level: 'Diploma',
    duration: '12 Months',
    ielts: '6',
    country: 'Australia'
  },
  {
    id: 'M201',
    title: 'Master of Information Technology',
    university: 'University of Melbourne',
    intake: 'February, July',
    tuitionFee: 48000,
    faculty: 'IT',
    campuses: ['Melbourne'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'M202',
    title: 'Master of Business Administration (MBA)',
    university: 'Monash University',
    intake: 'February, July',
    tuitionFee: 50000,
    faculty: 'Business',
    campuses: ['Melbourne'],
    level: 'Master (coursework)',
    duration: '18 - 24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'M203',
    title: 'Master of Engineering',
    university: 'University of Sydney',
    intake: 'February, August',
    tuitionFee: 53000,
    faculty: 'Engineering',
    campuses: ['Sydney'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'M204',
    title: 'Master of Public Health',
    university: 'Deakin University',
    intake: 'March, July, November',
    tuitionFee: 42000,
    faculty: 'Health',
    campuses: ['Melbourne'],
    level: 'Master (coursework)',
    duration: '18 - 24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'M205',
    title: 'Master of Data Science',
    university: 'RMIT University',
    intake: 'February, July',
    tuitionFee: 47000,
    faculty: 'Data Science',
    campuses: ['Melbourne'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Australia'
  },
  {
    id: 'C401',
    title: 'Certificate IV in Information Technology',
    university: 'TAFE Queensland',
    intake: 'January, July',
    tuitionFee: 14000,
    faculty: 'IT',
    campuses: ['Brisbane'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'C402',
    title: 'Certificate IV in Business',
    university: 'TAFE NSW',
    intake: 'February, July',
    tuitionFee: 13000,
    faculty: 'Business',
    campuses: ['Sydney'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'C403',
    title: 'Certificate IV in Marketing and Communication',
    university: 'RMIT University',
    intake: 'February, July',
    tuitionFee: 15000,
    faculty: 'Marketing',
    campuses: ['Melbourne'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'C404',
    title: 'Certificate IV in Hospitality',
    university: 'William Angliss Institute',
    intake: 'February, July',
    tuitionFee: 13500,
    faculty: 'Hospitality',
    campuses: ['Melbourne'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'C405',
    title: 'Certificate IV in Accounting and Bookkeeping',
    university: 'Victoria University',
    intake: 'February, July',
    tuitionFee: 14500,
    faculty: 'Accounting',
    campuses: ['Melbourne'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Australia'
  },
  {
    id: 'CB101',
    title: 'Bachelor of Computer Science',
    university: 'University of Toronto',
    intake: 'September, January',
    tuitionFee: 60000,
    faculty: 'IT',
    campuses: ['Toronto'],
    level: 'Bachelor',
    duration: 'Above 48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'CB102',
    title: 'Bachelor of Business Administration',
    university: 'York University',
    intake: 'September, January',
    tuitionFee: 55000,
    faculty: 'Business',
    campuses: ['Toronto'],
    level: 'Bachelor',
    duration: '48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'CB103',
    title: 'Bachelor of Engineering',
    university: 'University of British Columbia',
    intake: 'September',
    tuitionFee: 58000,
    faculty: 'Engineering',
    campuses: ['Vancouver'],
    level: 'Bachelor',
    duration: '48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'CB104',
    title: 'Bachelor of Nursing',
    university: 'McMaster University',
    intake: 'September',
    tuitionFee: 52000,
    faculty: 'Health',
    campuses: ['Hamilton'],
    level: 'Bachelor',
    duration: '48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'CB105',
    title: 'Bachelor of Data Science',
    university: 'University of Waterloo',
    intake: 'September, January',
    tuitionFee: 61000,
    faculty: 'Data Science',
    campuses: ['Waterloo'],
    level: 'Bachelor',
    duration: '48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'CD101',
    title: 'Diploma in Business Administration',
    university: 'Seneca College',
    intake: 'January, May, September',
    tuitionFee: 17000,
    faculty: 'Business',
    campuses: ['Toronto'],
    level: 'Diploma',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'CD102',
    title: 'Diploma in Computer Programming',
    university: 'George Brown College',
    intake: 'January, May, September',
    tuitionFee: 18000,
    faculty: 'IT',
    campuses: ['Toronto'],
    level: 'Diploma',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'CD103',
    title: 'Diploma in Engineering Technology',
    university: 'Centennial College',
    intake: 'January, September',
    tuitionFee: 17500,
    faculty: 'Engineering',
    campuses: ['Toronto'],
    level: 'Diploma',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'CD104',
    title: 'Diploma in Hospitality Management',
    university: 'Fanshawe College',
    intake: 'January, May, September',
    tuitionFee: 16500,
    faculty: 'Hospitality',
    campuses: ['London'],
    level: 'Diploma',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'CD105',
    title: 'Diploma in Accounting',
    university: 'Humber College',
    intake: 'January, May, September',
    tuitionFee: 18000,
    faculty: 'Accounting',
    campuses: ['Toronto'],
    level: 'Diploma',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'M301',
    title: 'Master of Business Administration',
    university: 'University of Toronto',
    intake: 'January, September',
    tuitionFee: 45000,
    faculty: 'Business',
    campuses: ['Toronto'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'M302',
    title: 'Master of Data Science',
    university: 'University of British Columbia',
    intake: 'September',
    tuitionFee: 42000,
    faculty: 'IT',
    campuses: ['Vancouver'],
    level: 'Master (coursework)',
    duration: '18 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'M303',
    title: 'Master of Engineering',
    university: 'University of Alberta',
    intake: 'January, September',
    tuitionFee: 40000,
    faculty: 'Engineering',
    campuses: ['Edmonton'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'M304',
    title: 'Master of Public Health',
    university: 'University of Ottawa',
    intake: 'September',
    tuitionFee: 38000,
    faculty: 'Health',
    campuses: ['Ottawa'],
    level: 'Master (coursework)',
    duration: '24 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'M305',
    title: 'Master of Finance',
    university: 'York University',
    intake: 'January, September',
    tuitionFee: 47000,
    faculty: 'Finance',
    campuses: ['Toronto'],
    level: 'Master (coursework)',
    duration: '18 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'A401',
    title: 'Associate of Arts',
    university: 'Douglas College',
    intake: 'January, May, September',
    tuitionFee: 18000,
    faculty: 'Arts',
    campuses: ['New Westminster'],
    level: 'Associate Degree',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'A402',
    title: 'Associate of Science',
    university: 'Langara College',
    intake: 'January, September',
    tuitionFee: 17500,
    faculty: 'Science',
    campuses: ['Vancouver'],
    level: 'Associate Degree',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'A403',
    title: 'Associate of Business',
    university: 'Capilano University',
    intake: 'January, September',
    tuitionFee: 17000,
    faculty: 'Business',
    campuses: ['North Vancouver'],
    level: 'Associate Degree',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'A404',
    title: 'Associate of Computer Science',
    university: 'Columbia College',
    intake: 'January, May, September',
    tuitionFee: 18500,
    faculty: 'IT',
    campuses: ['Vancouver'],
    level: 'Associate Degree',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'A405',
    title: 'Associate of Environmental Studies',
    university: 'Camosun College',
    intake: 'September',
    tuitionFee: 16000,
    faculty: 'Environment',
    campuses: ['Victoria'],
    level: 'Associate Degree',
    duration: '24 Months',
    ielts: '6',
    country: 'Canada'
  },
  {
    id: 'C501',
    title: 'Certificate IV in Business Administration',
    university: 'Seneca College',
    intake: 'January, May, September',
    tuitionFee: 14000,
    faculty: 'Business',
    campuses: ['Toronto'],
    level: 'Certificate IV',
    duration: '12 Months',
    ielts: '5.5',
    country: 'Canada'
  },
  {
    id: 'C502',
    title: 'Certificate IV in Information Technology',
    university: 'George Brown College',
    intake: 'January, September',
    tuitionFee: 15000,
    faculty: 'IT',
    campuses: ['Toronto'],
    level: 'Certificate IV',
    duration: '12 Months',
    ielts: '5.5',
    country: 'Canada'
  },
  {
    id: 'C503',
    title: 'Certificate IV in Accounting',
    university: 'Humber College',
    intake: 'January, May, September',
    tuitionFee: 14500,
    faculty: 'Accounting',
    campuses: ['Toronto'],
    level: 'Certificate IV',
    duration: '12 Months',
    ielts: '5.5',
    country: 'Canada'
  },
  {
    id: 'C504',
    title: 'Certificate IV in Hospitality',
    university: 'Fanshawe College',
    intake: 'January, September',
    tuitionFee: 13500,
    faculty: 'Hospitality',
    campuses: ['London'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Canada'
  },
  {
    id: 'C505',
    title: 'Diploma in Business Management',
    university: 'Humber College',
    intake: 'January, May, September',
    tuitionFee: 16000,
    faculty: 'Business',
    campuses: ['Toronto'],
    level: 'Diploma',
    duration: '12 - 24 Months',
    ielts: '6.0',
    country: 'Canada'
  },
  {
    id: 'C506',
    title: 'Bachelor of Computer Science',
    university: 'University of Windsor',
    intake: 'September',
    tuitionFee: 22000,
    faculty: 'IT',
    campuses: ['Windsor'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'C507',
    title: 'Master of Data Analytics',
    university: 'Ryerson University',
    intake: 'January, September',
    tuitionFee: 25000,
    faculty: 'Data Science',
    campuses: ['Toronto'],
    level: 'Master (coursework)',
    duration: '12 - 24 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'C508',
    title: 'PhD in Engineering',
    university: 'University of Toronto',
    intake: 'September',
    tuitionFee: 30000,
    faculty: 'Engineering',
    campuses: ['Toronto'],
    level: 'Doctorate',
    duration: 'Above 48 Months',
    ielts: '7.0',
    country: 'Canada'
  },
  {
    id: 'C701',
    title: 'Bachelor of Business Administration',
    university: 'University of Windsor',
    intake: 'January',
    tuitionFee: 21000,
    faculty: 'Business',
    campuses: ['Windsor'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'C702',
    title: 'Diploma in Business Management',
    university: 'Humber College',
    intake: 'February',
    tuitionFee: 16000,
    faculty: 'Business',
    campuses: ['Toronto'],
    level: 'Diploma',
    duration: '12 - 24 Months',
    ielts: '6.0',
    country: 'Canada'
  },
  {
    id: 'C703',
    title: 'Master of Information Technology',
    university: 'Ryerson University',
    intake: 'March',
    tuitionFee: 25000,
    faculty: 'IT',
    campuses: ['Toronto'],
    level: 'Master (coursework)',
    duration: '12 - 24 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'C704',
    title: 'Associate Degree in Arts',
    university: 'George Brown College',
    intake: 'April',
    tuitionFee: 18000,
    faculty: 'Arts',
    campuses: ['Toronto'],
    level: 'Associate Degree',
    duration: '24 - 36 Months',
    ielts: '6.0',
    country: 'Canada'
  },
  {
    id: 'C705',
    title: 'Certificate IV in Hospitality',
    university: 'Fanshawe College',
    intake: 'January',
    tuitionFee: 13500,
    faculty: 'Hospitality',
    campuses: ['London'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Canada'
  },
  {
    id: 'C706',
    title: 'Bachelor of Computer Science',
    university: 'University of Manitoba',
    intake: 'February',
    tuitionFee: 22000,
    faculty: 'IT',
    campuses: ['Winnipeg'],
    level: 'Bachelor',
    duration: '36 - 48 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'C707',
    title: 'Diploma in Hospitality Management',
    university: 'Seneca College',
    intake: 'March',
    tuitionFee: 15500,
    faculty: 'Hospitality',
    campuses: ['Toronto'],
    level: 'Diploma',
    duration: '12 - 24 Months',
    ielts: '6.0',
    country: 'Canada'
  },
  {
    id: 'C708',
    title: 'Master of Data Science',
    university: 'University of Toronto',
    intake: 'April',
    tuitionFee: 27000,
    faculty: 'Data Science',
    campuses: ['Toronto'],
    level: 'Master (coursework)',
    duration: '12 - 24 Months',
    ielts: '6.5',
    country: 'Canada'
  },
  {
    id: 'C709',
    title: 'Associate Degree in Computer Science',
    university: 'Douglas College',
    intake: 'January',
    tuitionFee: 17000,
    faculty: 'IT',
    campuses: ['Vancouver'],
    level: 'Associate Degree',
    duration: '24 - 36 Months',
    ielts: '6.0',
    country: 'Canada'
  },
  {
    id: 'C710',
    title: 'Certificate IV in Business',
    university: 'Centennial College',
    intake: 'February',
    tuitionFee: 14000,
    faculty: 'Business',
    campuses: ['Toronto'],
    level: 'Certificate IV',
    duration: '1 - 12 Months',
    ielts: '5.5',
    country: 'Canada'
  },

  {
    "id": "DE01",
    "title": "Business, Social Sciences Program",
    "university": "Freie Universität Berlin",
    "intake": "April, October",
    "tuitionFee": "~500 Semester",
    "faculty": "Business, Social Sciences",
    "campuses": ["Berlin"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Germany"
  },
  {
    "id": "DE02",
    "title": "Science, Business Program",
    "university": "University of Bonn",
    "intake": "April, October",
    "tuitionFee": "300–700",
    "faculty": "Science, Business",
    "campuses": ["Bonn"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Germany"
  },
  {
    "id": "DE03",
    "title": "Engineering Program",
    "university": "RWTH Aachen University",
    "intake": "April, October",
    "tuitionFee": "300–700",
    "faculty": "Engineering",
    "campuses": ["Aachen"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Germany"
  },
  {
    "id": "DE04",
    "title": "Engineering, IT Program",
    "university": "Technical University of Chemnitz",
    "intake": "April, October",
    "tuitionFee": "300–600",
    "faculty": "Engineering, IT",
    "campuses": ["Chemnitz"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "Germany"
  },
  {
    "id": "DE05",
    "title": "Engineering, Management Program",
    "university": "FAU Erlangen-Nürnberg",
    "intake": "April, October",
    "tuitionFee": "150–300",
    "faculty": "Engineering, Management",
    "campuses": ["Erlangen"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Germany"
  },
  {
    "id": "UK01",
    "title": "Business, Computing Program",
    "university": "University of Sunderland",
    "intake": "January, September",
    "tuitionFee": "13000–16000",
    "faculty": "Business, Computing",
    "campuses": ["Sunderland"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "United Kingdom"
  },
  {
    "id": "UK02",
    "title": "Business, Engineering Program",
    "university": "University of Bolton",
    "intake": "January, September",
    "tuitionFee": "13000–16500",
    "faculty": "Business, Engineering",
    "campuses": ["Bolton"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "United Kingdom"
  },
  {
    "id": "UK03",
    "title": "Health, Business Program",
    "university": "University of Cumbria",
    "intake": "January, September",
    "tuitionFee": "14000–17000",
    "faculty": "Health, Business",
    "campuses": ["Carlisle"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "United Kingdom"
  },
  {
    "id": "UK04",
    "title": "Business, Media Program",
    "university": "Leeds Trinity University",
    "intake": "January, September",
    "tuitionFee": "13500–16500",
    "faculty": "Business, Media",
    "campuses": ["Leeds"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "United Kingdom"
  },
  {
    "id": "UK05",
    "title": "Business, Computing Program",
    "university": "University of Suffolk",
    "intake": "January, September",
    "tuitionFee": "15000–18000",
    "faculty": "Business, Computing",
    "campuses": ["Ipswich"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "United Kingdom"
  },
  {
    "id": "CA01",
    "title": "Business, IT Program",
    "university": "Cape Breton University",
    "intake": "January, May, September",
    "tuitionFee": "18000–22000",
    "faculty": "Business, IT",
    "campuses": ["Nova Scotia"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Canada"
  },
  {
    "id": "CA02",
    "title": "MBA, Commerce Program",
    "university": "University Canada West",
    "intake": "Multiple",
    "tuitionFee": "20000–25000",
    "faculty": "MBA, Commerce",
    "campuses": ["British Columbia"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Canada"
  },
  {
    "id": "CA03",
    "title": "Engineering Program",
    "university": "Memorial University of Newfoundland",
    "intake": "January, September",
    "tuitionFee": "12000–20000",
    "faculty": "Engineering",
    "campuses": ["Newfoundland"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Canada"
  },
  {
    "id": "CA04",
    "title": "Business Program",
    "university": "University of Prince Edward Island",
    "intake": "January, September",
    "tuitionFee": "15000–22000",
    "faculty": "Business",
    "campuses": ["PEI"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Canada"
  },
  {
    "id": "CA05",
    "title": "Engineering, Business Program",
    "university": "University of Regina",
    "intake": "January, September",
    "tuitionFee": "18000–24000",
    "faculty": "Engineering, Business",
    "campuses": ["Saskatchewan"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.5",
    "country": "Canada"
  },
  {
    "id": "AU01",
    "title": "IT, Business Program",
    "university": "Federation University Australia",
    "intake": "February, July",
    "tuitionFee": "24000–30000",
    "faculty": "IT, Business",
    "campuses": ["Victoria"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "Australia"
  },
  {
    "id": "AU02",
    "title": "Nursing, Business Program",
    "university": "Central Queensland University",
    "intake": "February, July, November",
    "tuitionFee": "25000–32000",
    "faculty": "Nursing, Business",
    "campuses": ["Queensland"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "Australia"
  },
  {
    "id": "AU03",
    "title": "Hospitality, Business Program",
    "university": "Southern Cross University",
    "intake": "February, July",
    "tuitionFee": "25000–31000",
    "faculty": "Hospitality, Business",
    "campuses": ["NSW"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "Australia"
  },
  {
    "id": "AU04",
    "title": "Engineering, IT Program",
    "university": "University of Southern Queensland",
    "intake": "February, July",
    "tuitionFee": "26000–32000",
    "faculty": "Engineering, IT",
    "campuses": ["Queensland"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "Australia"
  },
  {
    "id": "AU05",
    "title": "Computing, Business Program",
    "university": "Edith Cowan University",
    "intake": "February, July",
    "tuitionFee": "28000–35000",
    "faculty": "Computing, Business",
    "campuses": ["Perth"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "Australia"
  },
  {
    "id": "NZ01",
    "title": "IT, Business Program",
    "university": "Southern Institute of Technology",
    "intake": "February, July",
    "tuitionFee": "18000–24000",
    "faculty": "IT, Business",
    "campuses": ["Invercargill"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "New Zealand"
  },
  {
    "id": "NZ02",
    "title": "Engineering, IT Program",
    "university": "Unitec Institute of Technology",
    "intake": "February, July",
    "tuitionFee": "22000–28000",
    "faculty": "Engineering, IT",
    "campuses": ["Auckland"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "New Zealand"
  },
  {
    "id": "NZ03",
    "title": "Nursing, Hospitality Program",
    "university": "Ara Institute of Canterbury",
    "intake": "February, July",
    "tuitionFee": "21000–28000",
    "faculty": "Nursing, Hospitality",
    "campuses": ["Christchurch"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "New Zealand"
  },
  {
    "id": "NZ04",
    "title": "Applied Management Program",
    "university": "Otago Polytechnic",
    "intake": "February, July",
    "tuitionFee": "20000–27000",
    "faculty": "Applied Management",
    "campuses": ["Dunedin"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "New Zealand"
  },
  {
    "id": "NZ05",
    "title": "Engineering, Business Program",
    "university": "Manukau Institute of Technology",
    "intake": "February, July",
    "tuitionFee": "22000–29000",
    "faculty": "Engineering, Business",
    "campuses": ["Auckland"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "6.0",
    "country": "New Zealand"
  },
  {
    "id": "RU01",
    "title": "Medicine, Engineering Program",
    "university": "Peoples' Friendship University of Russia",
    "intake": "September",
    "tuitionFee": "3500–6000",
    "faculty": "Medicine, Engineering",
    "campuses": ["Moscow"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "Not Mandatory",
    "country": "Russia"
  },
  {
    "id": "RU02",
    "title": "Medicine, Business Program",
    "university": "Kazan Federal University",
    "intake": "September",
    "tuitionFee": "3000–5500",
    "faculty": "Medicine, Business",
    "campuses": ["Kazan"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "Not Mandatory",
    "country": "Russia"
  },
  {
    "id": "RU03",
    "title": "Medicine Program",
    "university": "Belgodrot State University",
    "intake": "September",
    "tuitionFee": "3000–5500",
    "faculty": "Medicine",
    "campuses": ["Belgorod"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "Not Mandatory",
    "country": "Russia"
  },
  {
    "id": "RU04",
    "title": "Engineering, IT Program",
    "university": "South Ural State University",
    "intake": "September",
    "tuitionFee": "2500–4500",
    "faculty": "Engineering, IT",
    "campuses": ["Chelyabinsk"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "Not Mandatory",
    "country": "Russia"
  },
  {
    "id": "RU05",
    "title": "Technology, Business Program",
    "university": "Far Eastern Federal University",
    "intake": "September",
    "tuitionFee": "3500–5500",
    "faculty": "Technology, Business",
    "campuses": ["Vladivostok"],
    "level": "Degree/Program",
    "duration": "N/A",
    "ielts": "Not Mandatory",
    "country": "Russia"
  },
];

// Currency map by country
const CURRENCY_MAP = {
  'Australia':      'A$',
  'Canada':         'CA$',
  'United Kingdom': '£',
  'Germany':        '€',
  'New Zealand':    'NZ$',
  'Russia':         '₽',
};

const getCurrencySymbol = (country) => CURRENCY_MAP[country] || '$';

const FEE_RANGES = [
  { label: 'All',              value: 'all' },
  { label: 'Under 20,000',     value: '0-20000' },
  { label: '20,001 - 30,000',  value: '20001-30000' },
  { label: '30,001 - 40,000',  value: '30001-40000' },
  { label: '40,001 - 50,000',  value: '40001-50000' },
  { label: 'Above 50,000',     value: '50001+' },
];

const feeInRange = (fee, range) => {
  let numFee;

  if (typeof fee === 'number') {
    numFee = fee;
  } else if (typeof fee === 'string') {
    // Extract all numbers from string like "20000–30000" or "18000–24000"
    const nums = fee.match(/\d+/g);
    if (!nums) return false;
    if (nums.length >= 2) {
      // Take average of range e.g. (20000 + 30000) / 2 = 25000
      numFee = (parseInt(nums[0], 10) + parseInt(nums[1], 10)) / 2;
    } else {
      numFee = parseInt(nums[0], 10);
    }
  } else {
    return false;
  }

  if (range === '0-20000')     return numFee >= 0     && numFee <= 20000;
  if (range === '20001-30000') return numFee >= 20001 && numFee <= 30000;
  if (range === '30001-40000') return numFee >= 30001 && numFee <= 40000;
  if (range === '40001-50000') return numFee >= 40001 && numFee <= 50000;
  if (range === '50001+')      return numFee > 50000;
  return false;
};

const CoursePortal = () => {
  const WHATSAPP_NUMBER = "7982295530";

  // --- STATE ---
  const [searchInput, setSearchInput]         = useState('');
  const [searchLevel, setSearchLevel]         = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Australia');
  const [openFilter, setOpenFilter]           = useState(null);

  const [searchQuery, setSearchQuery]               = useState('');
  const [activeSearchLevel, setActiveSearchLevel]   = useState('');
  const [activeCountry, setActiveCountry]           = useState('Australia');

  const [selectedFaculty, setSelectedFaculty]     = useState('Allied Health');
  const [selectedLevels, setSelectedLevels]       = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedIntakes, setSelectedIntakes]     = useState([]);
  const [selectedFees, setSelectedFees]           = useState([]);

  const sliderRef = useRef(null);

  // --- HANDLERS ---
  const toggleFilter = (name) => setOpenFilter(openFilter === name ? null : name);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const firstChild = sliderRef.current.firstElementChild;
      const scrollAmount = firstChild ? firstChild.offsetWidth * 2 : 200;
      sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const handleLevelChange    = (v) => setSelectedLevels(prev    => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  const handleDurationChange = (v) => setSelectedDurations(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  const handleIntakeChange   = (v) => setSelectedIntakes(prev   => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  const handleFeeChange      = (v) => setSelectedFees(prev      => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  const handleSearchSubmit = () => {
    setSearchQuery(searchInput);
    setActiveSearchLevel(searchLevel);       // '' means All Levels
    setActiveCountry(selectedCountry);       // '' means All Countries
  };

  const handleResetFilters = () => {
    setSearchInput('');
    setSearchLevel('');
    setSelectedCountry('');
    setSearchQuery('');
    setActiveSearchLevel('');
    setActiveCountry('');
    setSelectedFaculty('');
    setSelectedLevels([]);
    setSelectedDurations([]);
    setSelectedIntakes([]);
    setSelectedFees([]);
  };

  // --- FILTERED COURSES ---
  const filteredCourses = useMemo(() => {
    return initialCourses.filter(course => {
      const matchesSearch       = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  course.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFaculty      = selectedFaculty ? course.faculty === selectedFaculty : true;
      const matchesSidebarLevel = selectedLevels.length > 0
        ? selectedLevels.includes('All') || selectedLevels.includes(course.level)
        : true;
      const matchesHeaderLevel  = activeSearchLevel ? course.level === activeSearchLevel : true;
      const matchesCountry      = activeCountry ? course.country.toLowerCase() === activeCountry.toLowerCase() : true;
      const matchesDuration     = selectedDurations.length > 0 ? selectedDurations.includes(course.duration) : true;
      const matchesIntake       = selectedIntakes.length > 0 ? selectedIntakes.includes(course.intake) : true;

      const matchesFee = selectedFees.length > 0
        ? selectedFees.includes('all') || selectedFees.some(range => feeInRange(course.tuitionFee, range))
        : true;

      return matchesSearch && matchesFaculty && matchesSidebarLevel &&
             matchesHeaderLevel && matchesCountry && matchesDuration &&
             matchesIntake && matchesFee;
    });
  }, [searchQuery, selectedFaculty, selectedLevels, activeSearchLevel,
      activeCountry, selectedDurations, selectedIntakes, selectedFees]);

  const handleWhatsAppContact = (courseTitle, courseId) => {
    const message = encodeURIComponent(`Hi! I am interested in learning more about the course: ${courseTitle} (${courseId}).`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <>
     
      <Navbar />
      <div className="portal-container">
        {/* Hero Section */}
        <header className="Hero-section">
          <h1>4,000+ Best Courses Available Here!</h1>
          <div className="search-bar-container">
            <select
              className="search-select"
              value={searchLevel}
              onChange={(e) => setSearchLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Diploma">Diploma</option>
              <option value="Master (coursework)">Master (coursework)</option>
              <option value="Associate Degree">Associate Degree</option>
              <option value="Certificate IV">Certificate IV</option>
            </select>

            <select
              className="search-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">All Countries</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Russia">Russia</option>
              <option value="New Zealand">New Zealand</option>
            </select>

            <input
              type="text"
              placeholder="Search Courses....."
              className="search-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearchSubmit}>Search Here</button>
          </div>

          {/* Category Slider */}
          <div className="category-slider-wrapper">
            <button className="slider-arrow left" onClick={() => scrollSlider('left')}>‹</button>
            <div className="category-slider" ref={sliderRef}>
              {['Business', 'Allied Health', 'Global Studies And', 'Law And Criminology',
                'Public Health and', 'Psychology', 'Science and Enviroment', 'Low and Criminology',
                'Sports and Excercise', 'Teaching', 'youth work and ', 'Nursing, Midwifery And'
              ].map((fac) => (
                <label key={fac} className={`cat-chip ${selectedFaculty === fac ? 'active-chip' : ''}`}>
                  <input
                    type="checkbox"
                    style={{ display: 'none' }}
                    checked={selectedFaculty === fac}
                    onChange={() => setSelectedFaculty(selectedFaculty === fac ? '' : fac)}
                  />
                  {fac}
                </label>
              ))}
            </div>
            <button className="slider-arrow right" onClick={() => scrollSlider('right')}>›</button>
          </div>
        </header>

        {/* Main Layout */}
        <div className="main-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <button className="reset-btn" onClick={handleResetFilters}>⟲ Reset Filters</button>

            {/* Course Level */}
            <div className={`filter-group ${openFilter === 'level' ? 'active' : ''}`}>
              <h3 onClick={() => toggleFilter('level')}>Course level</h3>
              <div className="filter-content">
                {['All', 'Bachelor', 'Diploma', 'Master (coursework)', 'Associate Degree', 'Certificate IV'].map(lvl => (
                  <label key={lvl}>
                    <input
                      type="checkbox"
                      checked={lvl === 'All' ? selectedLevels.includes('All') : selectedLevels.includes(lvl)}
                      onChange={() => handleLevelChange(lvl)}
                    />
                    {lvl}
                  </label>
                ))}
              </div>
            </div>

            {/* Tuition Fee Filter */}
            <div className={`filter-group ${openFilter === 'fee' ? 'active' : ''}`}>
              <h3 onClick={() => toggleFilter('fee')}>Tuition Fee</h3>
              <div className="filter-content">
                {FEE_RANGES.map(({ label, value }) => (
                  <label key={value}>
                    <input
                      type="checkbox"
                      checked={selectedFees.includes(value)}
                      onChange={() => handleFeeChange(value)}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Course Listings */}
          <main className="results-container">
            <div className="results-header">
              <span>Total No. of Record {filteredCourses.length}</span>
              <span>Page No. 1</span>
            </div>

            <div className="course-list">
              {filteredCourses.length === 0 ? (
                <div className="no-records">No courses match your selected filter options.</div>
              ) : (
                filteredCourses.map((course) => (
                  <div key={course.id} className="course-card">
                    <div className="country-ribbon">{course.country}</div>

                    <div className="card-body">
                      <div className="card-main-info">
                        <h2 className="course-title">{course.title} - {course.id}</h2>
                        <p className="univ-name">🏛️ <strong>University :</strong> {course.university}</p>

                        <div className="meta-row">
                          <span>📅 <strong>Intake :</strong> {course.intake}</span>
                          {/* ✅ Country-specific currency symbol */}
                          <span>💵 <strong>Tuition Fee :</strong> {getCurrencySymbol(course.country)}{typeof course.tuitionFee === 'number' ? course.tuitionFee.toLocaleString() : course.tuitionFee}</span>
                        </div>

                        <p className="faculty-info">👤 <strong>Faculty :</strong> {course.faculty}</p>

                        <div className="badge-row">
                          <span className="badge-pill">📍 Campus : {course.campuses.join(', ')}</span>
                          <span className="badge-pill">🎓 Course level : {course.level}</span>
                          <span className="badge-pill">⏱️ Duration : {course.duration}</span>
                        </div>
                      </div>

                      <div className="card-right-info">
                        <span className="ielts-tag">📋 IELTS Band : {course.ielts}</span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <span className="website-status">🌐 Website : Not Available</span>
                      <div className="footer-actions">
                        <button
                          className="whatsapp-btn"
                          onClick={() => handleWhatsAppContact(course.title, course.id)}
                        >
                          💬 Contact WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePortal;