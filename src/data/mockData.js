// Mock Database for RM Technosoft Digital Services Platform

export const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", 
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal"
];

export const ELECTRICITY_BOARDS = {
  "Maharashtra": [
    { id: "msedcl", name: "Maharashtra State Electricity Distribution Co. Ltd (MSEDCL)" },
    { id: "adani", name: "Adani Electricity Mumbai Limited" },
    { id: "tata-mumbai", name: "Tata Power - Mumbai" },
    { id: "best", name: "BEST Undertaking" }
  ],
  "Delhi": [
    { id: "bses-rajdhani", name: "BSES Rajdhani Power Limited" },
    { id: "bses-yamuna", name: "BSES Yamuna Power Limited" },
    { id: "tata-delhi", name: "Tata Power Delhi Distribution Limited" }
  ],
  "Karnataka": [
    { id: "bescom", name: "Bangalore Electricity Supply Company (BESCOM)" },
    { id: "gescom", name: "Gulbarga Electricity Supply Company (GESCOM)" },
    { id: "hescom", name: "Hubli Electricity Supply Company (HESCOM)" }
  ],
  "Tamil Nadu": [
    { id: "tneb", name: "Tamil Nadu Generation and Distribution Corporation (TANGEDCO / TNEB)" }
  ],
  "Uttar Pradesh": [
    { id: "uppcl-urban", name: "UP Power Corporation Ltd (UPPCL) - Urban" },
    { id: "uppcl-rural", name: "UP Power Corporation Ltd (UPPCL) - Rural" },
    { id: "kesco", name: "Kanpur Electricity Supply Company (KESCO)" }
  ],
  "West Bengal": [
    { id: "wbsedcl", name: "West Bengal State Electricity Distribution Co. Ltd (WBSEDCL)" },
    { id: "cesc", name: "CESC Limited" }
  ],
  "Gujarat": [
    { id: "ugvcl", name: "Uttar Gujarat Vij Company Ltd (UGVCL)" },
    { id: "mgvcl", name: "Madhya Gujarat Vij Company Ltd (MGVCL)" },
    { id: "torrent", name: "Torrent Power" }
  ]
};

// Generic boards for other states
export const DEFAULT_ELECTRICITY_BOARDS = [
  { id: "state-board-1", name: "State Electricity Board Corp (Urban)" },
  { id: "state-board-2", name: "State Electricity Board Corp (Rural)" },
  { id: "private-power", name: "Private Distribution Energy Grid" }
];

export const WATER_BOARDS = [
  { id: "djb", name: "Delhi Jal Board (DJB)", city: "Delhi" },
  { id: "bwssb", name: "Bangalore Water Supply and Sewerage Board (BWSSB)", city: "Bengaluru" },
  { id: "mcgm", name: "Municipal Corporation of Greater Mumbai (MCGM)", city: "Mumbai" },
  { id: "hmwssb", name: "Hyderabad Metropolitan Water Supply Board", city: "Hyderabad" },
  { id: "phd-odisha", name: "Public Health Engineering Department (PHD) - Odisha", city: "Bhubaneswar" },
  { id: "twnad", name: "Tamil Nadu Water Supply and Drainage Board", city: "Chennai" }
];

export const LPG_PROVIDERS = [
  { id: "indane", name: "Indane Gas (Indian Oil Corporation)", code: "IND", color: "#e65100" },
  { id: "hpgas", name: "HP Gas (Hindustan Petroleum)", code: "HPG", color: "#0d47a1" },
  { id: "bharat", name: "Bharat Gas (Bharat Petroleum)", code: "BPG", color: "#1b5e20" }
];

export const BROADBAND_OPERATORS = [
  { id: "airtel-fiber", name: "Airtel Xstream Fiber" },
  { id: "jio-fiber", name: "JioFiber" },
  { id: "act-fiber", name: "ACT Fibernet" },
  { id: "bsnl-fiber", name: "BSNL Broadband" },
  { id: "hathway", name: "Hathway Broadband" },
  { id: "tata-play-fiber", name: "Tata Play Fiber" }
];

export const DTH_OPERATORS = [
  { id: "tata-play", name: "Tata Play (formerly Tata Sky)", code: "TP" },
  { id: "airtel-dth", name: "Airtel Digital TV", code: "AD" },
  { id: "dish-tv", name: "Dish TV", code: "DT" },
  { id: "videocon-d2h", name: "Videocon d2h", code: "D2H" },
  { id: "sun-direct", name: "Sun Direct", code: "SD" }
];

export const FASTAG_BANKS = [
  { id: "hdfc-fastag", name: "HDFC Bank FASTag" },
  { id: "icici-fastag", name: "ICICI Bank FASTag" },
  { id: "sbi-fastag", name: "State Bank of India FASTag" },
  { id: "paytm-fastag", name: "Paytm Payments Bank FASTag" },
  { id: "idfc-fastag", name: "IDFC First Bank FASTag" },
  { id: "axis-fastag", name: "Axis Bank FASTag" },
  { id: "kotak-fastag", name: "Kotak Mahindra Bank FASTag" }
];

export const BENEFICIARIES = [
  { id: "ben-1", name: "Rajesh Kumar Sharma", bank: "State Bank of India", accountNo: "30458872651", ifsc: "SBIN0004561", phone: "9876543210" },
  { id: "ben-2", name: "Priya Devi Verma", bank: "HDFC Bank", accountNo: "501004826190", ifsc: "HDFC0000104", phone: "9123456789" },
  { id: "ben-3", name: "Amit Singh Solanki", bank: "ICICI Bank", accountNo: "000401569874", ifsc: "ICIC0000004", phone: "8888877777" },
  { id: "ben-4", name: "Meena Shivaram", bank: "Bank of Baroda", accountNo: "12450200004581", ifsc: "BARB0BENGAL", phone: "7777766666" }
];

export const MOBILE_PLANS = {
  "Popular": [
    { price: "299", validity: "28 Days", data: "2 GB/Day", desc: "Truly Unlimited Calls + 100 SMS/Day + JioCinema, JioTV subscriptions", tag: "Best Seller" },
    { price: "666", validity: "84 Days", data: "1.5 GB/Day", desc: "Truly Unlimited Voice calls + 100 SMS/Day + Subscriptions", tag: "Super Value" },
    { price: "749", validity: "90 Days", data: "2 GB/Day", desc: "Unlimited Voice + 100 SMS/Day + Extra data benefits for online users", tag: "Popular" },
    { price: "349", validity: "28 Days", data: "2.5 GB/Day", desc: "High speed data + unlimited 5G data welcome offer", tag: "5G Speed" }
  ],
  "Unlimited": [
    { price: "199", validity: "18 Days", data: "1.5 GB/Day", desc: "Unlimited Local & STD calls + 100 SMS/Day", tag: "" },
    { price: "239", validity: "28 Days", data: "1.5 GB/Day", desc: "Truly Unlimited Local/National calls, 100 SMS/Day", tag: "Recommended" },
    { price: "479", validity: "56 Days", data: "1.5 GB/Day", desc: "Unlimited voice calls + 100 SMS/Day + complimentary app access", tag: "" },
    { price: "839", validity: "84 Days", data: "2 GB/Day", desc: "Unlimited Local/STD/Roaming calls, 100 SMS/Day + Disney+ Hotstar Mobile 3 Months", tag: "Hotstar Offer" },
    { price: "2999", validity: "365 Days", data: "2.5 GB/Day", desc: "Truly Unlimited calling + 100 SMS/day + 365 days high-speed data", tag: "Annual Plan" }
  ],
  "Data": [
    { price: "19", validity: "Active Plan", data: "1 GB", desc: "Data booster plan. Validity co-terminus with your active pack.", tag: "" },
    { price: "29", validity: "Active Plan", data: "2 GB", desc: "Data addon pack. Valid with active validity plan.", tag: "Popular" },
    { price: "61", validity: "Active Plan", data: "6 GB", desc: "High-speed 5G/4G data voucher.", tag: "" },
    { price: "121", validity: "Active Plan", data: "12 GB", desc: "Data pack addon. High speed bulk data.", tag: "Bulk Pack" }
  ],
  "Talktime": [
    { price: "10", validity: "Unlimited", data: "N/A", desc: "Talktime value of ₹7.47. Top-up voucher.", tag: "" },
    { price: "20", validity: "Unlimited", data: "N/A", desc: "Talktime value of ₹14.95. Top-up voucher.", tag: "" },
    { price: "50", validity: "Unlimited", data: "N/A", desc: "Talktime value of ₹39.37. Top-up voucher.", tag: "" },
    { price: "100", validity: "Unlimited", data: "N/A", desc: "Talktime value of ₹81.75. Top-up voucher.", tag: "Most Popular" }
  ],
  "Validity": [
    { price: "155", validity: "24 Days", data: "1 GB Total", desc: "Unlimited calling + 300 SMS total. Perfect for keeping number active.", tag: "" },
    { price: "179", validity: "28 Days", data: "2 GB Total", desc: "Unlimited calls + 300 SMS total. Lite validity pack.", tag: "" }
  ],
  "International Roaming": [
    { price: "649", validity: "1 Day", data: "250 MB", desc: "100 mins outgoing/incoming calls to India & local. Covers 80+ countries.", tag: "" },
    { price: "2999", validity: "10 Days", data: "5 GB Total", desc: "100 mins/day calling. Free incoming. Covers major global hubs.", tag: "Top Pick" },
    { price: "5999", validity: "30 Days", data: "15 GB Total", desc: "Annual international package for regular business travelers.", tag: "" }
  ]
};

// Travel Cities & Airports
export const TRAVEL_CITIES = [
  { name: "New Delhi", code: "DEL", airport: "Indira Gandhi International", station: "New Delhi Railway Stn (NDLS)" },
  { name: "Mumbai", code: "BOM", airport: "Chhatrapati Shivaji Maharaj Intl", station: "Mumbai Central (MMCT)" },
  { name: "Bengaluru", code: "BLR", airport: "Kempegowda International", station: "KSR Bengaluru City (SBC)" },
  { name: "Hyderabad", code: "HYD", airport: "Rajiv Gandhi International", station: "Secunderabad Junction (SC)" },
  { name: "Chennai", code: "MAA", airport: "Chennai International", station: "Chennai Central Railway Stn (MAS)" },
  { name: "Kolkata", code: "CCU", airport: "Netaji Subhash Chandra Bose", station: "Howrah Railway Stn (HWH)" },
  { name: "Pune", code: "PNQ", airport: "Pune International Airport", station: "Pune Junction (PUNE)" },
  { name: "Jaipur", code: "JAI", airport: "Jaipur International Airport", station: "Jaipur Junction (JP)" }
];

export const BUS_OPERATORS = [
  { name: "IntrCity SmartBus", rating: "4.8", timeStart: "20:00", timeEnd: "06:30", price: "750", type: "AC Seater/Sleeper" },
  { name: "Orange Tours & Travels", rating: "4.7", timeStart: "21:30", timeEnd: "08:00", price: "990", type: "Volvo Multi-Axle Sleeper" },
  { name: "VRL Travels", rating: "4.5", timeStart: "19:30", timeEnd: "06:00", price: "800", type: "Non-AC Sleeper" },
  { name: "SRM Travels", rating: "4.2", timeStart: "22:00", timeEnd: "09:00", price: "1200", type: "Scania AC Multi-Axle Sleeper" }
];

export const FLIGHTS = [
  { airline: "IndiGo", number: "6E-2014", departure: "06:00", arrival: "08:15", price: "5200", logoText: "6E" },
  { airline: "Air India", number: "AI-805", departure: "08:30", arrival: "10:45", price: "6400", logoText: "AI" },
  { airline: "Vistara", number: "UK-985", departure: "14:15", arrival: "16:30", price: "7200", logoText: "UK" },
  { airline: "Akasa Air", number: "QP-1102", departure: "19:00", arrival: "21:10", price: "4900", logoText: "QP" }
];

export const HOTELS = [
  { name: "The Grand Royal Plaza", rating: "4.8", price: "4500", reviews: "1,248 reviews", amenities: ["Free WiFi", "Pool", "Spa", "Breakfast"] },
  { name: "Lemon Tree Comforts", rating: "4.3", price: "2800", reviews: "894 reviews", amenities: ["Free WiFi", "Gym", "Restaurant"] },
  { name: "Orchid Premium Suite", rating: "4.5", price: "3900", reviews: "312 reviews", amenities: ["Free WiFi", "Pool", "Room Service"] },
  { name: "Ginger Business Hotel", rating: "4.0", price: "1900", reviews: "2,410 reviews", amenities: ["Free WiFi", "Gym", "Workspace"] }
];

export const MOCK_FALLBACKS = {
  mobile: [
    { name: "PhonePe Recharge", desc: "Instant mobile recharge via UPI, cards, or wallet.", url: "https://www.phonepe.com", logoText: "PP" },
    { name: "Paytm Mobile", desc: "Fast prepaid/postpaid billing with cashback offers.", url: "https://paytm.com", logoText: "PY" },
    { name: "Google Pay", desc: "Secure recharges linked directly to your bank account.", url: "https://pay.google.com", logoText: "GP" },
    { name: "Amazon Pay", desc: "Recharge and pay utility bills with Amazon Pay Balance.", url: "https://www.amazon.in/pay", logoText: "AP" },
    { name: "Airtel Thanks Portal", desc: "Official portal for Airtel prepaid/postpaid services.", url: "https://www.airtel.in", logoText: "AT" },
    { name: "MyJio Self Care", desc: "Official self-service portal for Jio mobile numbers.", url: "https://www.jio.com", logoText: "MJ" }
  ],
  electricity: {
    rajasthan: [
      { name: "Jaipur Vidyut (JVVNL)", desc: "Official portal of Jaipur Vidyut Vitran Nigam Limited.", url: "https://www.energy.rajasthan.gov.in/jvvnl", logoText: "JV" },
      { name: "Jodhpur Vidyut (JDVVNL)", desc: "Official portal of Jodhpur Vidyut Vitran Nigam Limited.", url: "https://www.energy.rajasthan.gov.in/jdvvnl", logoText: "JD" },
      { name: "Ajmer Vidyut (AVVNL)", desc: "Official portal of Ajmer Vidyut Vitran Nigam Limited.", url: "https://www.energy.rajasthan.gov.in/avvnl", logoText: "AV" }
    ],
    generic: [
      { name: "Paytm Electricity Bills", desc: "Pay electricity bills online securely via Paytm.", url: "https://paytm.com/electricity-bill-payment", logoText: "PY" },
      { name: "PhonePe Utilities", desc: "Pay your monthly power bills instantly on PhonePe.", url: "https://www.phonepe.com", logoText: "PP" },
      { name: "Google Pay Utilities", desc: "Direct bank-to-board payments with instant receipts.", url: "https://pay.google.com", logoText: "GP" },
      { name: "Amazon Pay Bill Pay", desc: "Secure BBPS billing on Amazon shopping application.", url: "https://www.amazon.in/pay", logoText: "AP" }
    ]
  },
  water: {
    rajasthan: [
      { name: "PHED Rajasthan Water", desc: "Official Public Health Engineering Dept Rajasthan billing.", url: "https://phedwater.rajasthan.gov.in", logoText: "PH" },
      { name: "Jaipur Development (JDA)", desc: "Water charges and municipal dues payment portal.", url: "https://jda.rajasthan.gov.in", logoText: "JD" }
    ],
    generic: [
      { name: "Paytm Water Billing", desc: "Pay water bills for all major municipal boards.", url: "https://paytm.com/water-bill-payment", logoText: "PY" },
      { name: "PhonePe Water Bills", desc: "Select board, enter connection ID and pay instantly.", url: "https://www.phonepe.com", logoText: "PP" }
    ]
  },
  gas: [
    { name: "Indane Gas (IndianOil)", desc: "Book LPG cylinders or pay pipeline bills at Indane portal.", url: "https://cx.indianoil.in", logoText: "IN" },
    { name: "HP Gas Portal (HPCL)", desc: "Official HP Gas booking and online payment system.", url: "https://myhpgas.in", logoText: "HP" },
    { name: "Bharat Gas Online (BPCL)", desc: "Official portal to book and pay for Bharat Gas refills.", url: "https://www.ebharatgas.com", logoText: "BG" },
    { name: "Paytm LPG Cylinder Booking", desc: "Quick booking and bill tracking via Paytm app.", url: "https://paytm.com", logoText: "PY" }
  ],
  broadband: [
    { name: "Official Operator Portal", desc: "Visit your selected operator's customer self care.", url: "https://www.google.com", logoText: "OP" },
    { name: "Paytm Broadband Pay", desc: "Pay ACT, Jio, Airtel fiber bills online.", url: "https://paytm.com", logoText: "PY" },
    { name: "PhonePe Broadband", desc: "Instant BBPS clearing for broadband accounts.", url: "https://www.phonepe.com", logoText: "PP" }
  ],
  dth: [
    { name: "Tata Play Recharge", desc: "Official self care for Tata Play subscriptions.", url: "https://www.tataplay.com", logoText: "TP" },
    { name: "Airtel Thanks DTH", desc: "Renew Airtel Digital TV plans with special offers.", url: "https://www.airtel.in/dth", logoText: "AD" },
    { name: "Dish TV Portal", desc: "Instant recharge and channel selection on Dish TV.", url: "https://www.dishtv.in", logoText: "DT" },
    { name: "Sun Direct Self Care", desc: "Official Sun Direct DTH recharge gateway.", url: "https://www.sundirect.in", logoText: "SD" }
  ],
  fastag: [
    { name: "PhonePe FASTag", desc: "Recharge toll wallets instantly using vehicle numbers.", url: "https://www.phonepe.com", logoText: "PP" },
    { name: "Paytm FASTag Recharge", desc: "Add funds directly to your active bank FASTag.", url: "https://paytm.com", logoText: "PY" },
    { name: "Amazon FASTag Pay", desc: "Seamless vehicle wallet topups on Amazon Pay.", url: "https://www.amazon.in/pay", logoText: "AP" }
  ],
  money_transfer: [
    { name: "Visit Nearest Bank Branch", desc: "Visit your sender/beneficiary bank for NEFT/RTGS transfers.", url: "https://www.google.com/maps/search/nearest+bank+branch", logoText: "BK" },
    { name: "PhonePe Peer-to-Peer", desc: "Use UPI for standard contact-to-contact bank transfers.", url: "https://www.phonepe.com", logoText: "PP" },
    { name: "Google Pay UPI", desc: "Transfer direct to recipient bank accounts via phone numbers.", url: "https://pay.google.com", logoText: "GP" },
    { name: "Paytm IMPS Wallet", desc: "Send funds instantly to any verified Indian bank account.", url: "https://paytm.com", logoText: "PY" }
  ],
  travel: {
    bus: [
      { name: "RedBus", desc: "India's largest online bus ticketing platform.", url: "https://www.redbus.in", logoText: "RB" },
      { name: "AbhiBus", desc: "Book state road transport and private luxury buses.", url: "https://www.abhibus.com", logoText: "AB" }
    ],
    train: [
      { name: "IRCTC Next Gen", desc: "Official Indian Railways train booking portal.", url: "https://www.irctc.co.in", logoText: "IR" },
      { name: "ConfirmTkt Train App", desc: "Check seat availability and get confirm ticket predictions.", url: "https://www.confirmtkt.com", logoText: "CT" },
      { name: "ixigo Trains", desc: "Authorized IRCTC partner for live train tracking & tickets.", url: "https://www.ixigo.com/trains", logoText: "IX" }
    ],
    flight: [
      { name: "MakeMyTrip Flights", desc: "Compare and book domestic and international flight tickets.", url: "https://www.makemytrip.com/flights", logoText: "MM" },
      { name: "EaseMyTrip", desc: "Zero convenience fee on booking online flight reservations.", url: "https://www.easemytrip.com", logoText: "EM" },
      { name: "Yatra Travel", desc: "Flight compares, seasonal discounts and holiday bookings.", url: "https://www.yatra.com", logoText: "YT" }
    ],
    hotel: [
      { name: "MakeMyTrip Hotels", desc: "Search over 500,000 budget and premium hotel stays.", url: "https://www.makemytrip.com/hotels", logoText: "MM" },
      { name: "Yatra Hotels", desc: "Book homestays, luxury resorts and commercial lodgings.", url: "https://www.yatra.com/hotels", logoText: "YT" }
    ]
  },
  courier: [
    { name: "India Post Speed Post", desc: "Official national speed post parcel network.", url: "https://www.indiapost.gov.in", logoText: "IP" },
    { name: "DTDC Logistics", desc: "India's leading express delivery parcel courier.", url: "https://www.dtdc.in", logoText: "DT" },
    { name: "Delhivery Express", desc: "Fast logistics cargo and package dispatch networks.", url: "https://www.delhivery.com", logoText: "DL" },
    { name: "Blue Dart Aviation", desc: "Premium air express and critical document couriers.", url: "https://www.bluedart.com", logoText: "BD" },
    { name: "Professional Couriers", desc: "Extensive parcel and cargo courier branch networks.", url: "https://www.tpcindia.com", logoText: "PC" }
  ]
};

