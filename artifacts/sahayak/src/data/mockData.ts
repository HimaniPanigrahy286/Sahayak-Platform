export interface Scheme {
  id: string;
  name: string;
  description: string;
  category: string;
  state: string;
  benefits: string[];
  eligibility: string;
  requiredDocuments: string[];
  deadline?: string;
  ministry: string;
}

export const mockSchemes: Scheme[] = [
  {
    id: "1",
    name: "Pradhan Mantri Divyangjan Swavalamban Yojana",
    description: "Financial assistance for Divyangjan for setting up businesses, purchasing assistive devices, and educational purposes.",
    category: "Financial",
    state: "All India",
    benefits: ["Concessional loans up to ₹50 lakhs", "Low interest rates (4-8%)", "Rebate for timely repayment"],
    eligibility: "Any Indian citizen with 40% or more disability, aged 18-60 years.",
    requiredDocuments: ["UDID Card", "Aadhar Card", "Business Plan (if applicable)", "Income Certificate"],
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "2",
    name: "ADIP Scheme (Assistive Devices)",
    description: "Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances.",
    category: "Assistive Devices",
    state: "All India",
    benefits: ["Free aids for income below ₹22,500/month", "50% cost covered for income between ₹22,500 and ₹30,000/month", "Latest ISI standard devices"],
    eligibility: "Indian citizen of any age with 40% or more disability.",
    requiredDocuments: ["UDID Card/Disability Certificate", "Income Certificate", "Passport Size Photo"],
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "3",
    name: "National Scholarship Portal for Disabled",
    description: "Pre-matric, Post-matric, and Top Class Education scholarships for students with disabilities.",
    category: "Scholarship",
    state: "All India",
    benefits: ["Maintenance allowance", "Book allowance", "Disability allowance", "Reimbursement of tuition fees"],
    eligibility: "Students with 40% or more disability, family income up to ₹2.5 lakhs/annum.",
    requiredDocuments: ["UDID Card", "Previous Year Marksheet", "Income Certificate", "Bank Passbook"],
    deadline: "2024-09-30",
    ministry: "Department of Empowerment of Persons with Disabilities"
  },
  {
    id: "4",
    name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    description: "Skill development and placement scheme with special provisions for PwD candidates in rural areas.",
    category: "Skill Development",
    state: "All India",
    benefits: ["Free skill training", "Free boarding and lodging", "Guaranteed placement assistance"],
    eligibility: "Rural youth between 15 and 35 years of age. Relaxable up to 45 years for PwD.",
    requiredDocuments: ["Aadhar Card", "BPL Card/Income Certificate", "UDID Card"],
    ministry: "Ministry of Rural Development"
  },
  {
    id: "5",
    name: "NHFDC Loan Scheme",
    description: "National Handicapped Finance and Development Corporation provides loans to PwD for self-employment.",
    category: "Employment",
    state: "All India",
    benefits: ["Loan up to ₹50 lakhs for business", "Education loan up to ₹20 lakhs (India) and ₹30 lakhs (Abroad)"],
    eligibility: "Indian citizen with 40% or more disability, age above 18 years.",
    requiredDocuments: ["UDID Card", "Project Report", "Income Certificate", "Identity Proof"],
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "6",
    name: "Indira Gandhi National Disability Pension Scheme",
    description: "Financial assistance provided under National Social Assistance Programme (NSAP).",
    category: "Pension",
    state: "All India",
    benefits: ["Monthly pension of ₹300 (Central contribution) + State contribution", "Direct Bank Transfer"],
    eligibility: "BPL individuals aged 18-79 with 80% or more severe or multiple disabilities.",
    requiredDocuments: ["BPL Card", "UDID Card with 80%+ disability", "Bank Account Details"],
    ministry: "Ministry of Rural Development"
  },
  {
    id: "7",
    name: "Free Bus Pass for PwD",
    description: "Free or highly concessional travel in state transport buses for persons with disabilities and one escort.",
    category: "Transportation",
    state: "Karnataka",
    benefits: ["Free travel in city and ordinary state buses", "Concession for one escort"],
    eligibility: "Resident of the state with 40%+ disability.",
    requiredDocuments: ["State Domicile", "UDID Card", "Aadhar Card"],
    ministry: "State Transport Department"
  },
  {
    id: "8",
    name: "Job Reservation in Govt Services",
    description: "4% reservation in government jobs for persons with benchmark disabilities under the RPwD Act 2016.",
    category: "Employment",
    state: "All India",
    benefits: ["4% reservation in Group A, B, C, D posts", "Age relaxation up to 10 years", "Exemption from application fees"],
    eligibility: "Persons with benchmark disabilities (40% or more) fitting the specific job criteria.",
    requiredDocuments: ["UDID Card", "Educational Certificates"],
    ministry: "Department of Personnel and Training"
  },
  {
    id: "9",
    name: "Niramaya Health Insurance Scheme",
    description: "Health insurance scheme for persons with Autism, Cerebral Palsy, Mental Retardation, and Multiple Disabilities.",
    category: "Healthcare",
    state: "All India",
    benefits: ["Insurance cover up to ₹1.0 Lakh", "No exclusion of pre-existing conditions", "OPD treatment covered"],
    eligibility: "Persons with Autism, Cerebral Palsy, Mental Retardation, and Multiple Disabilities.",
    requiredDocuments: ["Disability Certificate from Medical Board", "Income Certificate (for premium calculation)"],
    ministry: "National Trust"
  },
  {
    id: "10",
    name: "Gharaunda Scheme",
    description: "Group Home for Adults with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities.",
    category: "Healthcare",
    state: "All India",
    benefits: ["Lifelong shelter and care", "Medical care", "Vocational activities"],
    eligibility: "Adults with specified disabilities without adequate family support.",
    requiredDocuments: ["Disability Certificate", "Income details of parents/guardians"],
    ministry: "National Trust"
  },
  {
    id: "11",
    name: "Accessible India Campaign (Sugamya Bharat Abhiyan)",
    description: "Nation-wide campaign for achieving universal accessibility for PwDs.",
    category: "Infrastructure",
    state: "All India",
    benefits: ["Accessible government buildings", "Accessible transport systems", "Accessible websites and public documents"],
    eligibility: "All citizens",
    requiredDocuments: [],
    ministry: "Department of Empowerment of Persons with Disabilities"
  },
  {
    id: "12",
    name: "Bhavishya Nirman Scheme",
    description: "State-specific financial assistance for self-employment of disabled youth.",
    category: "Financial",
    state: "Maharashtra",
    benefits: ["Seed capital up to ₹1 Lakh", "Training support"],
    eligibility: "Resident of Maharashtra, 18-45 years, 40%+ disability.",
    requiredDocuments: ["Domicile Certificate", "UDID Card", "Business Plan"],
    ministry: "State Social Welfare Department"
  },
  {
    id: "13",
    name: "Divyang Vivah Protsahan Yojana",
    description: "Financial incentive for marriage between a person with disability and a non-disabled person or two PwDs.",
    category: "Social Welfare",
    state: "Uttar Pradesh",
    benefits: ["₹15,000 to ₹35,000 one-time incentive"],
    eligibility: "Resident of UP, legal marriage age, one or both partners must have 40%+ disability.",
    requiredDocuments: ["Marriage Certificate", "UDID Card", "Joint Bank Account"],
    ministry: "Divyangjan Sashaktikaran Vibhag"
  },
  {
    id: "14",
    name: "Free Laptop/Tablet Scheme for Disabled Students",
    description: "Providing modern educational tools to students with disabilities for digital learning.",
    category: "Education",
    state: "Tamil Nadu",
    benefits: ["Free laptop or tablet with accessibility software"],
    eligibility: "Students studying in 10th standard and above, 40%+ disability.",
    requiredDocuments: ["School/College ID", "UDID Card", "Aadhar Card"],
    ministry: "Welfare of the Differently Abled Persons Department"
  },
  {
    id: "15",
    name: "Chief Minister's Disability Pension",
    description: "State supplementary pension to provide financial security.",
    category: "Pension",
    state: "Delhi",
    benefits: ["Monthly pension of ₹2,500"],
    eligibility: "Resident of Delhi for at least 5 years, 40%+ disability.",
    requiredDocuments: ["Voter ID/Aadhar (Delhi)", "UDID Card", "Bank Account"],
    ministry: "Department of Social Welfare"
  },
  {
    id: "16",
    name: "Swavalamban Health Insurance Scheme",
    description: "Comprehensive health insurance covering PwDs and their families.",
    category: "Healthcare",
    state: "All India",
    benefits: ["Sum insured of ₹2 Lakhs per family", "OPD cover up to ₹3,000"],
    eligibility: "PwDs aged 18-65 years, family income less than ₹3 Lakhs/annum.",
    requiredDocuments: ["UDID Card", "Income Certificate"],
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "17",
    name: "Assistance to Disabled Persons for Purchase of Motorized Tricycles",
    description: "Subsidized motorized tricycles for persons with severe locomotor disability.",
    category: "Assistive Devices",
    state: "All India",
    benefits: ["Motorized tricycle subsidy up to ₹25,000"],
    eligibility: "Age 16+, 80%+ locomotor disability, income below ₹22,500/month.",
    requiredDocuments: ["UDID Card", "Income Certificate", "Medical Certificate for suitability"],
    ministry: "ALIMCO / MSJE"
  },
  {
    id: "18",
    name: "Pre-Matric Scholarship for Students with Disabilities",
    description: "Financial assistance to support education from class IX and X.",
    category: "Scholarship",
    state: "All India",
    benefits: ["Maintenance allowance", "Book grant", "Disability allowance"],
    eligibility: "Students in class 9th and 10th, 40%+ disability, income up to ₹2.5 Lakhs.",
    requiredDocuments: ["UDID Card", "School Verification", "Income Certificate"],
    deadline: "2024-10-15",
    ministry: "Department of Empowerment of Persons with Disabilities"
  },
  {
    id: "19",
    name: "Top Class Education for Students with Disabilities",
    description: "Funding for pursuing graduate/post-graduate courses in institutes of excellence.",
    category: "Education",
    state: "All India",
    benefits: ["Full tuition fee", "Maintenance allowance", "Special allowance", "Computer/laptop grant"],
    eligibility: "Admission to notified institutions, 40%+ disability, income up to ₹6 Lakhs.",
    requiredDocuments: ["Admission Proof", "UDID Card", "Income Certificate"],
    ministry: "Department of Empowerment of Persons with Disabilities"
  },
  {
    id: "20",
    name: "Special Employment Exchange for PwD",
    description: "Dedicated employment exchanges to facilitate job placements for PwD in public and private sectors.",
    category: "Employment",
    state: "All India",
    benefits: ["Job matching", "Career counseling", "Vocational guidance"],
    eligibility: "Any person with 40%+ disability seeking employment.",
    requiredDocuments: ["UDID Card", "Educational/Skill Certificates", "Resume"],
    ministry: "Ministry of Labour and Employment"
  }
];

export interface Notification {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  isRead: boolean;
}

export const mockNotifications: Notification[] = [
  { id: "1", title: "National Scholarship Deadline Extended", date: "2024-05-15", category: "Scholarship", summary: "The deadline for the National Scholarship Portal for Disabled has been extended to Sept 30, 2024.", isRead: false },
  { id: "2", title: "New UDID Centers Opened in Rural Areas", date: "2024-05-12", category: "Announcement", summary: "50 new permanent UDID registration centers have been inaugurated across 5 states.", isRead: false },
  { id: "3", title: "SBI Announces Special Recruitment Drive", date: "2024-05-10", category: "Employment", summary: "State Bank of India has announced a special recruitment drive filling 500 vacancies for PwD candidates.", isRead: true },
  { id: "4", title: "Free Laptop Scheme Applications Open", date: "2024-05-08", category: "Education", summary: "Tamil Nadu state government has opened applications for the 2024 Free Laptop Scheme.", isRead: false },
  { id: "5", title: "Update Your Profile to Discover New Schemes", date: "2024-05-05", category: "System", summary: "We have added 10 new state-level schemes. Update your profile to see if you are eligible.", isRead: true },
  { id: "6", title: "ADIP Camp Scheduled in Delhi", date: "2024-05-01", category: "Assistive Devices", summary: "A mega camp for free distribution of assistive devices will be held on May 20 at Pragati Maidan.", isRead: true },
  { id: "7", title: "Railway Concession Rules Updated", date: "2024-04-28", category: "Transportation", summary: "Indian Railways has digitized the concession pass application process for PwD.", isRead: true },
  { id: "8", title: "Niramaya Insurance Premium Subsidy", date: "2024-04-25", category: "Healthcare", summary: "Government announces 100% premium subsidy for BPL families under Niramaya scheme.", isRead: true },
  { id: "9", title: "Accessible India Campaign Milestone", date: "2024-04-20", category: "Announcement", summary: "Over 1,000 government websites have achieved WCAG 2.0 compliance this year.", isRead: true },
  { id: "10", title: "DDU-GKY New Batches Starting", date: "2024-04-18", category: "Skill Development", summary: "New skill development batches in IT and Retail sectors starting next month.", isRead: true },
  { id: "11", title: "NHFDC Loan Interest Rate Reduced", date: "2024-04-15", category: "Financial", summary: "Interest rates on self-employment loans reduced by 1% for female PwD entrepreneurs.", isRead: true },
  { id: "12", title: "UPSC Civil Services Prelims Age Relaxation", date: "2024-04-10", category: "Employment", summary: "Reminder: Candidates with benchmark disabilities get a 10-year age relaxation.", isRead: true },
  { id: "13", title: "Divyangjan Swavalamban Yojana Guidelines", date: "2024-04-05", category: "Financial", summary: "Revised guidelines released simplifying the loan application process.", isRead: true },
  { id: "14", title: "Wheelchair Basketball Nationals", date: "2024-04-01", category: "Sports", summary: "The 10th National Wheelchair Basketball Championship will begin next month in Pune.", isRead: true },
  { id: "15", title: "Welcome to Sahayak", date: "2024-03-30", category: "System", summary: "Thank you for registering on Sahayak. Explore your personalized dashboard.", isRead: true }
];

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  tags: string[];
}

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Understanding Your Rights Under RPwD Act 2016",
    category: "Disability Rights",
    date: "2024-04-12",
    author: "Legal Aid India",
    summary: "A comprehensive guide to the Rights of Persons with Disabilities Act, 2016 and how it empowers you.",
    content: "The Rights of Persons with Disabilities (RPwD) Act, 2016 is a landmark legislation in India that replaced the PwD Act of 1995. It expanded the recognized types of disabilities from 7 to 21, including conditions like Acid Attack Victims, Parkinson's disease, and Specific Learning Disabilities.\n\nCrucially, the Act mandates an increase in the quantum of reservation for people suffering from benchmark disabilities from 3% to 4% in government jobs and from 3% to 5% in higher education institutions.\n\nIt also emphasizes accessibility in public buildings, transport, and websites, setting timelines for the government to make existing infrastructure accessible. Understanding these rights is the first step towards advocating for yourself and your community.",
    tags: ["RPwD Act", "Rights", "Law", "Reservation"]
  },
  {
    id: "2",
    title: "How to Apply for a UDID Card Online",
    category: "Guides",
    date: "2024-04-18",
    author: "Sahayak Team",
    summary: "Step-by-step instructions on applying for your Unique Disability ID card through the Swavlamban portal.",
    content: "The UDID card is a single document of identification and verification of the disabled for availing various benefits. Applying online has been made simpler through the Swavlamban Card portal.\n\nFirst, gather your documents: a recent color photograph, signature or thumb impression, address proof (Aadhar/Voter ID), and your existing disability certificate (if you have one). Visit swavlambancard.gov.in and click on 'Apply for Disability Certificate & UDID Card'.\n\nFill in your personal details, disability details, employment details, and identity details carefully. Upload the required documents and submit. You will receive an enrollment number which you can use to track your application status. Once processed by the medical board, your card will be dispatched to your address.",
    tags: ["UDID", "Application", "Guide", "Swavlamban"]
  },
  {
    id: "3",
    title: "Top 5 Scholarships for Disabled Students in India",
    category: "Scholarships",
    date: "2024-05-02",
    author: "Education Dept",
    summary: "Discover the best financial aid programs available to support your educational journey.",
    content: "Education is the key to empowerment, and the government provides several scholarships to ensure financial constraints do not hinder the education of Divyang students.\n\n1. Pre-Matric Scholarship: For students in classes 9 and 10, covering maintenance and book allowances.\n2. Post-Matric Scholarship: For studies from class 11 up to post-graduation.\n3. Top Class Education Scheme: Funds tuition fees and living expenses for students securing admission in notified institutions of excellence (like IITs, IIMs).\n4. National Fellowship: For pursuing M.Phil. and Ph.D. degrees.\n5. AICTE Saksham Scholarship: Specifically for specially-abled students admitted to technical degree or diploma courses.\n\nApplications are usually accepted via the National Scholarship Portal (NSP).",
    tags: ["Education", "Scholarship", "Financial Aid", "Students"]
  },
  {
    id: "4",
    title: "Navigating Employment: The 4% Reservation Rule",
    category: "Employment",
    date: "2024-03-25",
    author: "Career Cell",
    summary: "What you need to know about job reservations in the government sector and how to claim them.",
    content: "Under Section 34 of the RPwD Act 2016, every appropriate Government is mandated to appoint in every Government establishment, not less than four percent of the total number of vacancies in the cadre strength in each group of posts meant to be filled with persons with benchmark disabilities.\n\nThe 4% is distributed among specific categories: 1% for blindness and low vision, 1% for deaf and hard of hearing, 1% for locomotor disability (including cerebral palsy, leprosy cured, dwarfism, acid attack victims and muscular dystrophy), and 1% for autism, intellectual disability, specific learning disability and mental illness, and multiple disabilities.\n\nTo claim this, you must have a valid disability certificate/UDID card showing 40% or more disability (benchmark disability). Ensure you check the specific eligibility criteria in job notifications.",
    tags: ["Employment", "Reservation", "Government Jobs"]
  },
  {
    id: "5",
    title: "Assistive Devices: What's Available Under ADIP",
    category: "Healthcare",
    date: "2024-04-05",
    author: "Health Ministry",
    summary: "Learn about the aids and appliances you can receive through the ADIP scheme.",
    content: "The Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances (ADIP) scheme aims to assist needy disabled persons in procuring durable, sophisticated and scientifically manufactured standard aids and appliances.\n\nThe scheme covers a wide range of devices: motorized tricycles, wheelchairs, artificial limbs, crutches, hearing aids, Braille slates, smartphones with screen reading software for visually impaired students, and learning kits for children with intellectual disabilities.\n\nIf your monthly income is up to ₹22,500, the cost of the device is fully covered. If it's between ₹22,501 and ₹30,000, 50% of the cost is covered. You can apply through ALIMCO camps held across the country or designated implementation agencies.",
    tags: ["ADIP", "Assistive Devices", "Healthcare", "Aids"]
  },
  {
    id: "6",
    title: "Starting Your Own Business: NHFDC Loans Explained",
    category: "Employment",
    date: "2024-05-10",
    author: "Entrepreneurship Desk",
    summary: "How to access concessional financing to start or expand your enterprise.",
    content: "The National Handicapped Finance and Development Corporation (NHFDC) provides financial assistance in the form of concessional loans to persons with disabilities for setting up any income-generating activity.\n\nLoans are available for various purposes: starting a small business, purchasing a commercial vehicle, setting up a manufacturing unit, or even for pursuing higher education. The interest rates are highly subsidized, ranging from 4% to 8% per annum, depending on the loan amount, with a 1% rebate for women.\n\nTo apply, you need a solid business plan, your UDID card, and identity proofs. Applications are processed through State Channelizing Agencies (SCAs) or partner banks like Punjab National Bank.",
    tags: ["Business", "Loan", "NHFDC", "Entrepreneurship"]
  },
  {
    id: "7",
    title: "Mental Illness vs Intellectual Disability in Indian Law",
    category: "Disability Rights",
    date: "2024-04-22",
    author: "Legal Aid India",
    summary: "Clarifying the legal distinctions and specific benefits available for different cognitive conditions.",
    content: "The RPwD Act 2016 clearly distinguishes between Mental Illness and Intellectual Disability, ensuring specific needs are met for both.\n\n'Intellectual Disability' refers to a condition characterized by significant limitation both in intellectual functioning (reasoning, learning, problem-solving) and in adaptive behavior, covering a range of everyday social and practical skills. 'Mental Illness' means a substantial disorder of thinking, mood, perception, orientation, or memory that grossly impairs judgment, behavior, or capacity to recognize reality.\n\nBoth categories are recognized under the 21 disabilities of the Act. Individuals in both categories are eligible for the 4% employment reservation (under the specific 1% quota for these categories combined with multiple disabilities), protective homes like Gharaunda, and the Niramaya Health Insurance scheme.",
    tags: ["Mental Health", "Law", "Definitions", "Rights"]
  },
  {
    id: "8",
    title: "Accessible Travel: Indian Railways Concessions",
    category: "Guides",
    date: "2024-03-30",
    author: "Travel Guide",
    summary: "How to obtain and use your Railway Concession Certificate for discounted travel.",
    content: "Indian Railways offers substantial fare concessions for persons with disabilities. Visually impaired, mentally retarded, and completely orthopedically handicapped persons (who cannot travel without an escort) receive 75% concession in Second, Sleeper, First Class, 3AC, AC Chair Car, and 50% in 1AC and 2AC.\n\nDeaf & Dumb persons (both afflictions together) receive 50% concession in Second, Sleeper and First Class.\n\nTo avail this, you must obtain a Railway Concession Certificate from a Government Hospital doctor. Recently, railways introduced a photo ID card system to avoid carrying the physical certificate every time. You can apply for this e-ticketing photo ID card at your nearest Divisional Railway Manager's office.",
    tags: ["Travel", "Railways", "Concession", "Transport"]
  },
  {
    id: "9",
    title: "Tax Benefits for Persons with Disabilities",
    category: "Financial",
    date: "2024-02-15",
    author: "Finance Expert",
    summary: "Understanding Sections 80U and 80DD of the Income Tax Act.",
    content: "The Income Tax Act of India provides specific deductions to ease the financial burden on persons with disabilities and their families.\n\nSection 80U offers a flat deduction for individuals who are certified as a person with a disability. For a disability of 40% or more, a deduction of ₹75,000 is allowed. For severe disability (80% or more), the deduction is ₹1,25,000.\n\nSection 80DD applies to individuals or HUFs who incur expenses for the medical treatment, training, and rehabilitation of a dependent relative with a disability. The deduction amounts are the same: ₹75,000 for standard disability and ₹1,25,000 for severe disability. Note that you cannot claim both 80U (for yourself) and 80DD (someone claiming for you) simultaneously.",
    tags: ["Tax", "Finance", "80U", "80DD"]
  },
  {
    id: "10",
    title: "Empowering Women with Disabilities",
    category: "Social Welfare",
    date: "2024-03-08",
    author: "Women & Child Dept",
    summary: "Special provisions, schemes, and incentives designed specifically for disabled women.",
    content: "Women with disabilities face double discrimination, and government schemes often include special provisions to support them.\n\nUnder NHFDC loan schemes, female beneficiaries receive a 1% interest rebate. In the skill development scheme DDU-GKY, there are special targets to ensure adequate enrollment of women. Many states offer higher marriage incentive amounts (Divyang Vivah Protsahan Yojana) if the bride is a person with a disability.\n\nFurthermore, maternity benefits for women government employees with disabilities include an additional special allowance for child care for two years. Awareness and utilization of these specific benefits are crucial for the economic and social empowerment of women with disabilities.",
    tags: ["Women", "Empowerment", "Schemes", "Incentives"]
  }
];

export const mockFAQs = [
  {
    section: "UDID (Unique Disability ID)",
    items: [
      { q: "What is a UDID card?", a: "The Unique Disability ID (UDID) card is a national-level single document of identification for persons with disabilities, replacing the need to carry multiple documents to avail government benefits." },
      { q: "How long does it take to get a UDID card?", a: "After online submission and successful medical assessment, it typically takes 15-30 days for the UDID card to be generated and dispatched." },
      { q: "Is UDID card mandatory for government schemes?", a: "Yes, most Central and State government schemes now require a valid UDID card or the UDID enrollment number as primary proof of disability." },
      { q: "Can I apply for UDID if I don't have a disability certificate?", a: "Yes. You can apply for both a new Disability Certificate and a UDID card simultaneously through the Swavlamban portal." }
    ]
  },
  {
    section: "Eligibility & Application",
    items: [
      { q: "What is 'Benchmark Disability'?", a: "As per the RPwD Act 2016, a person with benchmark disability means a person with not less than 40% of a specified disability where specified disability has not been defined in measurable terms, or a person with disability where specified disability has been defined in measurable terms, as certified by the certifying authority." },
      { q: "Can I apply for multiple schemes at once?", a: "Yes, you can apply for multiple schemes provided you meet the specific eligibility criteria for each scheme. However, you generally cannot claim the exact same benefit (like two different maintenance allowances) from two different schemes simultaneously." },
      { q: "What is the general income limit for schemes?", a: "Income limits vary by scheme. For instance, ADIP full subsidy requires income below ₹22,500/month, while Top Class Education allows family income up to ₹6 Lakhs/annum." },
      { q: "How do I track my scheme application status?", a: "Most modern portals (like the National Scholarship Portal or State portals) provide an application tracking feature using your application ID or registered mobile number." }
    ]
  },
  {
    section: "Education & Scholarships",
    items: [
      { q: "Do disabled students get extra time in exams?", a: "Yes. Students with benchmark disabilities are generally entitled to compensatory time of 20 minutes per hour of examination and the facility of a scribe, subject to specific board/university rules." },
      { q: "Are private school fees covered under scholarships?", a: "Scholarships generally cover tuition fees up to a specified ceiling, which may not cover the full fees of expensive private institutions, unless specified in schemes like Top Class Education." },
      { q: "Can I apply for a scholarship if I failed the previous year?", a: "Most scholarships require passing the previous examination. However, some schemes may allow a one-time failure or have specific relaxation criteria. Check the detailed guidelines of the specific scheme." }
    ]
  },
  {
    section: "Employment & Reservation",
    items: [
      { q: "Does the private sector have job reservations for PwD?", a: "The 4% mandatory reservation applies only to government establishments. However, the government provides incentives to private sector employers who have at least 5% of their workforce comprised of persons with benchmark disabilities." },
      { q: "What if my disability makes it hard to perform a standard job test?", a: "Government recruitment rules mandate reasonable accommodation during the selection process, which may include alternative testing methods, accessible venues, or the provision of scribes/interpreters." },
      { q: "Are promotions reserved as well?", a: "Yes, the Supreme Court of India has ruled that the 4% reservation applies to promotions within government jobs as well, subject to existing cadre rules." }
    ]
  },
  {
    section: "Platform Usage",
    items: [
      { q: "Is Sahayak free to use?", a: "Yes, Sahayak is a completely free platform aimed at helping Divyang citizens access information and services easily." },
      { q: "How do I change my registered disability type?", a: "You can update your disability details in the 'Profile' section. If you have a UDID card, we recommend keeping the details exactly as they appear on your card." },
      { q: "Is my personal data safe?", a: "Yes, Sahayak uses secure, encrypted databases to store your information. We only use your data to match you with eligible government schemes." }
    ]
  }
];
