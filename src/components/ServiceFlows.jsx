import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle2, Printer, Download, Search, User, 
  Plus, Plane, Train, Bus, Hotel, Smartphone, Calendar, 
  MapPin, UserPlus, ChevronRight, Info, AlertCircle, Eye,
  Navigation, UserCheck, Shield, HelpCircle, FileText, ExternalLink
} from 'lucide-react';
import { 
  STATES, ELECTRICITY_BOARDS, DEFAULT_ELECTRICITY_BOARDS, 
  WATER_BOARDS, LPG_PROVIDERS, BROADBAND_OPERATORS, 
  DTH_OPERATORS, FASTAG_BANKS, BENEFICIARIES, 
  MOBILE_PLANS, TRAVEL_CITIES, BUS_OPERATORS, FLIGHTS, HOTELS,
  MOCK_FALLBACKS
} from '../data/mockData';

const OperatorLogo = ({ nameOrId }) => {
  const [hasError, setHasError] = useState(false);
  const normalized = (nameOrId || '').toLowerCase();
  let logoUrl = '';
  let bg = '#ffffff';

  if (normalized.includes('jio')) {
    logoUrl = 'https://cdn.simpleicons.org/jio';
    bg = '#0f223a';
  } else if (normalized.includes('airtel digital') || normalized.includes('airtel-dth')) {
    logoUrl = 'https://upload.wikimedia.org/wikipedia/ta/4/40/Airtel_Digital_TV_logo.svg.png';
    bg = '#ffffff';
  } else if (normalized.includes('airtel')) {
    logoUrl = 'https://cdn.simpleicons.org/airtel';
    bg = '#e11900';
  } else if (normalized === 'vi') {
    logoUrl = 'https://yt3.googleusercontent.com/tfK-7C3dHvTnRaiC_DmNMz8DscjUFd8vTpXCTyS4MWgoBz_Qwr7a29BUqa5BpdtU8pgQR_ULHQ=s900-c-k-c0x00ffffff-no-rj';
    bg = '#ffffff';
  } else if (normalized.includes('bsnl')) {
    logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/BSNL_logo_with_slogan.svg/960px-BSNL_logo_with_slogan.svg.png';
    bg = '#ffffff';
  } else if (normalized.includes('tata-play') || normalized.includes('tata play')) {
    logoUrl = 'https://b-ablefoundation.org/wp-content/uploads/2023/02/TATA-play-logo-e1693465128627.jpg';
    bg = '#1b0f3a';
  } else if (normalized.includes('sun-direct') || normalized.includes('sun direct')) {
    logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9VJQyWStwvJpqJMrmk_27ONQ8au_AXO6Qw&s';
    bg = '#ffffff';
  } else if (normalized.includes('dish') || normalized === 'dt') {
    logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXrAWL-p4i6Mppw1AnAWvqbrsAzjlpcwanw&s';
    bg = '#ffffff';
  } else if (normalized.includes('d2h') || normalized.includes('videocon')) {
    logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0y9GkNCsNWHQIRn_c_IySmPfBPGy-XqFdA&s';
    bg = '#ffffff';
  } else if (normalized.includes('phonepe')) {
    logoUrl = 'https://cdn.simpleicons.org/phonepe';
    bg = '#5f259f';
  } else if (normalized.includes('paytm')) {
    logoUrl = 'https://cdn.simpleicons.org/paytm';
    bg = '#ffffff';
  } else if (normalized.includes('google pay') || normalized.includes('googlepay')) {
    logoUrl = 'https://cdn.simpleicons.org/googlepay';
    bg = '#ffffff';
  } else if (normalized.includes('jvvnl') || normalized.includes('jaipur')) {
    logoUrl = 'https://media.licdn.com/dms/image/v2/C510BAQES59kuv0AqCw/company-logo_200_200/company-logo_200_200/0/1630628496498?e=2147483647&v=beta&t=rF-lgLUcv8M8HhATd6tFz24ZxEBy1SMKzp_6gbIqhQo';
    bg = '#ffffff';
  } else if (normalized.includes('jdvvnl') || normalized.includes('jodhpur') || normalized.includes('jodhpur discom')) {
    logoUrl = 'https://cdn.payrup.com/images/operators/electricity-bill-payment/jdvvnl_logo.png';
    bg = '#ffffff';
  } else if (normalized.includes('blue dart') || normalized.includes('bluedart')) {
    logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3O3oWArvY5nWCdjst0P3f6u2XwdgXLoWkA&s';
    bg = '#ffffff';
  } else if (normalized.includes('make my trip') || normalized.includes('makemytrip')) {
    logoUrl = 'https://cdn.grabon.in/gograbon/images/merchant/1779712765813/makemytrip-train-logo.jpg';
    bg = '#ffffff';
  } else if (normalized.includes('irctc')) {
    logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QeoUPi7-N0-1i8liLPRq-TQHBtCDlasXqA&s';
    bg = '#ffffff';
  } else if (normalized.includes('yatra')) {
    logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TyDdJ7_oszoeeJIiRVB7E9LWImIycYaTJg&s';
    bg = '#ffffff';
  } else if (normalized.includes('india post') || normalized.includes('indiapost')) {
    logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/be/India-post-logo.jpg';
    bg = '#ffffff';
  } else if (normalized.includes('redbus')) {
    logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_redbus.png';
    bg = '#ffffff';
  } else if (normalized.includes('amazon')) {
    logoUrl = 'https://cdn.simpleicons.org/amazonpay';
    bg = '#ffffff';
  }

  useEffect(() => {
    setHasError(false);
  }, [nameOrId]);

  if (logoUrl && !hasError) {
    const isDarkBg = bg === '#0a2885' || bg === '#1b0f3a' || bg === '#5f259f' || bg === '#e11900' || bg === '#0f223a';
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bg,
        borderRadius: '8px',
        overflow: 'hidden',
        padding: '2px',
        border: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <img 
          src={logoUrl} 
          alt={nameOrId} 
          style={{ 
            width: '90%', 
            height: '90%', 
            objectFit: 'contain',
            filter: isDarkBg && logoUrl.includes('simpleicons.org') ? 'invert(1)' : 'none'
          }} 
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: '#0f223a', color: '#fff', fontSize: '11px', fontWeight: 'bold', borderRadius: '8px'
    }}>
      {nameOrId.slice(0, 3).toUpperCase()}
    </div>
  );
};

export default function ServiceFlows({ serviceId, prefillData, onBack, addCompletedTransaction }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [txId, setTxId] = useState('');
  
  // Leave site warning dialog states
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [pendingUrl, setPendingUrl] = useState('');
  const [pendingPartnerName, setPendingPartnerName] = useState('');
  
  // Mobile Recharge States
  const [mobileNum, setMobileNum] = useState('');
  const [rechargeType, setRechargeType] = useState('prepaid');
  const [operator, setOperator] = useState('');
  const [circle, setCircle] = useState('Maharashtra');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planCategory, setPlanCategory] = useState('Popular');

  // Electricity States
  const [selectedState, setSelectedState] = useState('');
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [electricityStateSearch, setElectricityStateSearch] = useState('');
  const [electricityBoardSearch, setElectricityBoardSearch] = useState('');
  const [consumerNo, setConsumerNo] = useState('');
  const [fetchedBill, setFetchedBill] = useState(null);
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  // Water States
  const [selectedWaterBoard, setSelectedWaterBoard] = useState(null);
  const [waterConsumerNo, setWaterConsumerNo] = useState('');
  const [waterBoardSearch, setWaterBoardSearch] = useState('');
  
  // Gas Booking States
  const [selectedGasProvider, setSelectedGasProvider] = useState(null);
  const [gasConnectionType, setGasConnectionType] = useState('refill');
  const [gasConsumerNo, setGasConsumerNo] = useState('');

  // Broadband States
  const [selectedBroadband, setSelectedBroadband] = useState(null);
  const [broadbandAccountNo, setBroadbandAccountNo] = useState('');

  // DTH States
  const [selectedDthOperator, setSelectedDthOperator] = useState(null);
  const [dthSubId, setDthSubId] = useState('');
  const [selectedDthPlan, setSelectedDthPlan] = useState(null);

  // FASTag States
  const [selectedFastagBank, setSelectedFastagBank] = useState(null);
  const [fastagVehicleNo, setFastagVehicleNo] = useState('');
  const [fastagAmount, setFastagAmount] = useState('');
  const [fastagBalance, setFastagBalance] = useState(null);

  // Money Transfer States
  const [senderPhone, setSenderPhone] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderRegistered, setSenderRegistered] = useState(false);
  const [benList, setBenList] = useState(BENEFICIARIES);
  const [selectedBen, setSelectedBen] = useState(null);
  const [transferAmount, setTransferAmount] = useState('');
  const [transferMode, setTransferMode] = useState('IMPS');
  const [showAddBen, setShowAddBen] = useState(false);
  const [newBenName, setNewBenName] = useState('');
  const [newBenBank, setNewBenBank] = useState('');
  const [newBenAccount, setNewBenAccount] = useState('');
  const [newBenIfsc, setNewBenIfsc] = useState('');

  // Travel Booking States
  const [travelType, setTravelType] = useState('bus');
  const [travelSource, setTravelSource] = useState('');
  const [travelDest, setTravelDest] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengerCount, setPassengerCount] = useState('1');
  const [travelResults, setTravelResults] = useState([]);
  const [selectedTravelOption, setSelectedTravelOption] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerName, setPassengerName] = useState('');
  const [passengerAge, setPassengerAge] = useState('');

  // Courier States
  const [pickupName, setPickupName] = useState('');
  const [pickupPhone, setPickupPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [pickupPincode, setPickupPincode] = useState('');
  const [deliveryName, setDeliveryName] = useState('');
  const [deliveryPhone, setDeliveryPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [packageWeight, setPackageWeight] = useState('1');
  const [packageDimensions, setPackageDimensions] = useState('Medium');
  const [courierService, setCourierService] = useState('standard');
  const [courierPrice, setCourierPrice] = useState(80);

  // Errors state
  const [formError, setFormError] = useState('');

  // Fallback options mapping based on context
  const getFallbackOptions = () => {
    if (serviceId === 'electricity') {
      if (selectedState && selectedState.toLowerCase() === 'rajasthan') {
        return [...MOCK_FALLBACKS.electricity.rajasthan, ...MOCK_FALLBACKS.electricity.generic];
      }
      return MOCK_FALLBACKS.electricity.generic;
    }
    if (serviceId === 'water') {
      if (selectedState && selectedState.toLowerCase() === 'rajasthan') {
        return [...MOCK_FALLBACKS.water.rajasthan, ...MOCK_FALLBACKS.water.generic];
      }
      return MOCK_FALLBACKS.water.generic;
    }
    if (serviceId === 'travel') {
      return MOCK_FALLBACKS.travel[travelType] || MOCK_FALLBACKS.travel.bus;
    }
    return MOCK_FALLBACKS[serviceId] || [];
  };

  const handleFallbackClick = (partnerName, url) => {
    setPendingPartnerName(partnerName);
    setPendingUrl(url);
    setShowWarningModal(true);
  };

  const handleConfirmLeave = () => {
    setShowWarningModal(false);
    window.open(pendingUrl, '_blank');
  };

  const renderFailureScreen = () => {
    return (
      <div className="animate-scale-in" style={{ textAlign: 'center', padding: '32px 16px' }}>
        <div style={{
          width: '72px',
          height: '72px',
          backgroundColor: 'rgba(239, 68, 68, 0.08)',
          color: '#ef4444',
          border: '2px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px'
        }}>
          <AlertCircle size={36} />
        </div>

        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px', color: '#081426' }}>
          Payment Failed
        </h3>
        <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '600', marginBottom: '8px', lineHeight: '1.6', maxWidth: '340px', margin: '0 auto 8px' }}>
          payment failed , backend not connected for now
        </p>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '28px', lineHeight: '1.5' }}>
          You can retry later or use the official alternative options from the panel on the right →
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn btn-light" onClick={() => setStep(3)} style={{ minWidth: '140px' }}>
            ← Back to Summary
          </button>
          <button className="btn btn-primary" onClick={onBack} style={{ minWidth: '140px' }}>
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  };

  // Handle Prefill (from Dashboard Quick Pay)
  useEffect(() => {
    if (prefillData) {
      if (serviceId === 'mobile' && prefillData.service === 'mobile') {
        setMobileNum(prefillData.detail.replace('+91 ', '').replace(/ /g, ''));
        setOperator(prefillData.operator);
        setCircle(prefillData.circle);
        // auto select a plan
        const plans = MOBILE_PLANS['Popular'];
        const plan = plans.find(p => p.price === prefillData.amount) || plans[0];
        setSelectedPlan(plan);
        setStep(3); // skip directly to summary
      } else if (serviceId === 'electricity' && prefillData.service === 'electricity') {
        setSelectedState(prefillData.state);
        const boards = ELECTRICITY_BOARDS[prefillData.state] || DEFAULT_ELECTRICITY_BOARDS;
        const board = boards.find(b => b.id === prefillData.provider) || boards[0];
        setSelectedBoard(board);
        setConsumerNo(prefillData.detail.replace('Cons: ', ''));
        setFetchedBill({
          customerName: "Rameshwar Prasad Patil (Prefilled)",
          amount: prefillData.amount,
          dueDate: "15-July-2026",
          billDate: "20-June-2026",
          billNo: "TXN108250082"
        });
        setStep(3); // skip to summary
      } else if (serviceId === 'money_transfer' && prefillData.service === 'money_transfer') {
        setSenderPhone('9876543210');
        setSenderName('CSC Operator Demo');
        setSenderRegistered(true);
        const ben = benList.find(b => b.accountNo === prefillData.accountNo) || benList[0];
        setSelectedBen(ben);
        setTransferAmount(prefillData.amount.replace(/,/g, ''));
        setStep(3);
      } else if (serviceId === 'dth' && prefillData.service === 'dth') {
        const op = DTH_OPERATORS.find(o => o.id === prefillData.provider) || DTH_OPERATORS[0];
        setSelectedDthOperator(op);
        setDthSubId(prefillData.detail.replace('Sub ID: ', ''));
        setSelectedDthPlan({ price: prefillData.amount, validity: '30 Days', desc: 'Pre-configured DTH pack renew' });
        setStep(3);
      }
    }
  }, [prefillData, serviceId]);

  // Autodetect Mobile Operator
  useEffect(() => {
    if (mobileNum.length === 10) {
      const prefix = mobileNum.substring(0, 4);
      // Mock operator detection
      if (prefix.match(/^[98][0-9]/)) {
        setOperator('Jio');
      } else if (prefix.match(/^[7][0-9]/)) {
        setOperator('Airtel');
      } else if (prefix.match(/^[6][0-9]/)) {
        setOperator('Vi');
      } else {
        setOperator('BSNL');
      }
    }
  }, [mobileNum]);

  // Reset Component State on Service Change
  useEffect(() => {
    if (!prefillData) {
      setStep(1);
      setSuccess(false);
      setSelectedPlan(null);
      setSelectedBoard(null);
      setSelectedWaterBoard(null);
      setSelectedGasProvider(null);
      setSelectedBroadband(null);
      setSelectedDthOperator(null);
      setSelectedFastagBank(null);
      setSelectedBen(null);
      setSelectedTravelOption(null);
      setSelectedSeats([]);
      setFormError('');
    }
  }, [serviceId]);

  const generateTxId = (prefix) => {
    return prefix + Math.floor(10000000 + Math.random() * 90000000);
  };

  const handlePrint = () => {
    window.print();
  };

  // 1. Mobile Recharge Action
  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (mobileNum.length !== 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!operator) {
      setFormError('Please select a mobile operator.');
      return;
    }
    setFormError('');
    setStep(2);
  };

  const handleMobilePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setStep(3);
  };

  const processMockPayment = (simulateSuccess, prefix, serviceName, providerName, accountVal, amountVal) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Backend is not connected, so all payments fail
      addCompletedTransaction({
        id: generateTxId(prefix),
        service: serviceName,
        provider: providerName,
        account: accountVal,
        amount: amountVal,
        date: new Date().toLocaleString(),
        status: 'FAILED'
      });
      setSuccess(false);
      setStep(4);
    }, 1500);
  };

  const handleMobilePay = (simulateSuccess = true) => {
    processMockPayment(simulateSuccess, 'RMTM', 'Mobile Recharge', `${operator} ${rechargeType === 'prepaid' ? 'Prepaid' : 'Postpaid'}`, mobileNum, selectedPlan.price);
  };

  // 2. Electricity Bill Action
  const handleElectricitySubmit = (e) => {
    e.preventDefault();
    if (!selectedBoard) {
      setFormError('Please select your electricity board.');
      return;
    }
    if (!consumerNo || consumerNo.length < 5) {
      setFormError('Please enter a valid Consumer Number.');
      return;
    }
    setFormError('');
    setLoading(true);
    
    // Simulate API fetch bill
    setTimeout(() => {
      setLoading(false);
      setFetchedBill({
        customerName: "Balbir Singh Rathore",
        amount: (Math.floor(Math.random() * 2500) + 350).toString(),
        dueDate: "14-July-2026",
        billDate: "18-June-2026",
        billNo: "ELB" + Math.floor(10000000 + Math.random() * 90000000)
      });
      setStep(3);
    }, 1200);
  };

  const handleElectricityPay = (simulateSuccess = true) => {
    processMockPayment(simulateSuccess, 'RMTE', 'Electricity Bill', selectedBoard.name, `Cons ID: ${consumerNo}`, fetchedBill.amount);
  };

  // 3. Water Bill Action
  const handleWaterSubmit = (e) => {
    e.preventDefault();
    if (!selectedWaterBoard) {
      setFormError('Please select your water board.');
      return;
    }
    if (!waterConsumerNo) {
      setFormError('Please enter your consumer account number.');
      return;
    }
    setFormError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFetchedBill({
        customerName: "Kailash Chand Jain",
        amount: (Math.floor(Math.random() * 600) + 120).toString(),
        dueDate: "18-July-2026",
        billDate: "21-June-2026",
        billNo: "WTR" + Math.floor(10000000 + Math.random() * 90000000)
      });
      setStep(3);
    }, 1000);
  };

  const handleWaterPay = (simulateSuccess = true) => {
    processMockPayment(simulateSuccess, 'RMTW', 'Water Bill', selectedWaterBoard.name, `Acc: ${waterConsumerNo}`, fetchedBill.amount);
  };

  // 4. Gas Booking Action
  const handleGasSubmit = (e) => {
    e.preventDefault();
    if (!selectedGasProvider) {
      setFormError('Please select an LPG provider.');
      return;
    }
    if (!gasConsumerNo || gasConsumerNo.length < 8) {
      setFormError('Please enter a valid 17-digit LPG Client ID or Registered Phone.');
      return;
    }
    setFormError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFetchedBill({
        customerName: "Arundhati Roy Chaudhary",
        amount: "803.50",
        dueDate: "Upon Delivery",
        billDate: new Date().toLocaleDateString(),
        billNo: "GAS" + Math.floor(10000000 + Math.random() * 90000000)
      });
      setStep(3);
    }, 1200);
  };

  const handleGasPay = (simulateSuccess = true) => {
    processMockPayment(simulateSuccess, 'RMTG', `Gas Refill (${selectedGasProvider.name})`, gasConnectionType === 'refill' ? 'Refill LPG Booking' : 'Gas Pipeline Bill', `ID: ${gasConsumerNo}`, fetchedBill.amount);
  };

  // 5. Broadband Action
  const handleBroadbandSubmit = (e) => {
    e.preventDefault();
    if (!selectedBroadband) {
      setFormError('Please select broadband operator.');
      return;
    }
    if (!broadbandAccountNo) {
      setFormError('Please enter your broadband billing account ID.');
      return;
    }
    setFormError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFetchedBill({
        customerName: "Devendra Nath Sen",
        amount: (Math.floor(Math.random() * 1200) + 599).toString(),
        dueDate: "10-July-2026",
        billDate: "25-June-2026",
        billNo: "BB" + Math.floor(10000000 + Math.random() * 90000000)
      });
      setStep(3);
    }, 1000);
  };

  const handleBroadbandPay = (simulateSuccess = true) => {
    processMockPayment(simulateSuccess, 'RMTB', 'Broadband Bill', selectedBroadband.name, `Acc: ${broadbandAccountNo}`, fetchedBill.amount);
  };

  // 6. DTH Action
  const handleDthSubmit = (e) => {
    e.preventDefault();
    if (!selectedDthOperator) {
      setFormError('Please select DTH service provider.');
      return;
    }
    if (!dthSubId || dthSubId.length < 8) {
      setFormError('Please enter a valid Subscriber ID.');
      return;
    }
    setFormError('');
    setStep(2);
  };

  const handleDthPlanSelect = (price, name) => {
    setSelectedDthPlan({ price, validity: '30 Days', desc: name });
    setStep(3);
  };

  const handleDthPay = (simulateSuccess = true) => {
    processMockPayment(simulateSuccess, 'RMTD', 'DTH Recharge', selectedDthOperator.name, `Subscriber ID: ${dthSubId}`, selectedDthPlan.price);
  };

  // 7. FASTag Action
  const handleFastagSubmit = (e) => {
    e.preventDefault();
    if (!selectedFastagBank) {
      setFormError('Please select FASTag issuing bank.');
      return;
    }
    if (!fastagVehicleNo || fastagVehicleNo.length < 6) {
      setFormError('Please enter your vehicle registration number (e.g. MH12PQ9988).');
      return;
    }
    setFormError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFastagBalance('180.00');
      setStep(3);
    }, 1000);
  };

  const handleFastagPay = (simulateSuccess = true) => {
    if (!fastagAmount || isNaN(fastagAmount) || parseFloat(fastagAmount) <= 0) {
      setFormError('Please enter a valid recharge amount.');
      return;
    }
    setFormError('');
    processMockPayment(simulateSuccess, 'RMTF', 'FASTag Recharge', selectedFastagBank.name, fastagVehicleNo.toUpperCase(), fastagAmount);
  };

  // 8. Money Transfer Action
  const handleSenderSubmit = (e) => {
    e.preventDefault();
    if (senderPhone.length !== 10) {
      setFormError('Please enter a valid 10-digit sender mobile number.');
      return;
    }
    setFormError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (senderPhone === '9876543210' || senderPhone === '9123456789') {
        setSenderName(senderPhone === '9876543210' ? 'CSC Operator Demo' : 'Vikramaditya Rao');
        setSenderRegistered(true);
        setStep(2);
      } else {
        // Show register sender input
        setSenderRegistered(false);
        setStep(1.5); // state for registering
      }
    }, 800);
  };

  const handleRegisterSender = (e) => {
    e.preventDefault();
    if (!senderName) {
      setFormError('Please enter sender name.');
      return;
    }
    setFormError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSenderRegistered(true);
      setStep(2);
    }, 800);
  };

  const handleAddBeneficiary = (e) => {
    e.preventDefault();
    if (!newBenName || !newBenBank || !newBenAccount || !newBenIfsc) {
      setFormError('Please fill in all beneficiary fields.');
      return;
    }
    const newBen = {
      id: 'ben-' + (benList.length + 1),
      name: newBenName,
      bank: newBenBank,
      accountNo: newBenAccount,
      ifsc: newBenIfsc.toUpperCase(),
      phone: senderPhone
    };
    setBenList([newBen, ...benList]);
    setSelectedBen(newBen);
    setShowAddBen(false);
    setFormError('');
  };

  const handleMoneyTransferSubmit = () => {
    if (!transferAmount || isNaN(transferAmount) || parseFloat(transferAmount) <= 0) {
      setFormError('Please enter a valid transfer amount.');
      return;
    }
    const amountVal = parseFloat(transferAmount);
    if (amountVal > 25000) {
      setFormError('DMT limit is ₹25,000 per transaction.');
      return;
    }
    setFormError('');
    setStep(3);
  };

  const handleMoneyTransferPay = (simulateSuccess = true) => {
    processMockPayment(simulateSuccess, 'RMTDMT', 'Domestic Money Transfer', `${selectedBen.bank} (A/C ...${selectedBen.accountNo.slice(-4)})`, selectedBen.name, transferAmount);
  };

  // 9. Travel Booking Action
  const handleTravelSearch = (e) => {
    e.preventDefault();
    if (!travelSource || !travelDest) {
      setFormError('Please select both Source and Destination.');
      return;
    }
    if (travelSource === travelDest) {
      setFormError('Source and Destination cannot be the same.');
      return;
    }
    if (!travelDate) {
      setFormError('Please select your date of travel.');
      return;
    }
    setFormError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (travelType === 'bus') {
        setTravelResults(BUS_OPERATORS);
      } else if (travelType === 'flight') {
        setTravelResults(FLIGHTS);
      } else if (travelType === 'hotel') {
        setTravelResults(HOTELS);
      } else {
        // Train
        setTravelResults([
          { name: "Shatabdi Express (12002)", departure: "06:15", arrival: "11:40", price: "850", duration: "5h 25m", classes: ["CC", "EC"] },
          { name: "Rajdhani Express (12424)", departure: "16:10", arrival: "21:55", price: "1680", duration: "5h 45m", classes: ["3A", "2A", "1A"] },
          { name: "Duronto Express (12260)", departure: "12:20", arrival: "18:30", price: "780", duration: "6h 10m", classes: ["SL", "3A", "2A"] }
        ]);
      }
      setStep(2);
    }, 1200);
  };

  const handleSelectSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      if (selectedSeats.length >= 6) {
        alert("Maximum 6 seats can be booked at once.");
        return;
      }
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleTravelOptionSelect = (option) => {
    setSelectedTravelOption(option);
    if (travelType === 'bus') {
      // open seat selection step inside step 2
      setSelectedSeats([]);
    } else {
      setStep(2.5); // go to passenger details
    }
  };

  const handleTravelBookingConfirm = () => {
    if (travelType === 'bus' && selectedSeats.length === 0) {
      alert("Please select at least one seat to proceed.");
      return;
    }
    setStep(2.5); // go to passenger details
  };

  const handlePassengerSubmit = (e) => {
    e.preventDefault();
    if (!passengerName || !passengerAge) {
      setFormError('Please enter passenger name and age.');
      return;
    }
    setFormError('');
    setStep(3);
  };

  const handleTravelPay = (simulateSuccess = true) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (simulateSuccess) {
        const newTxId = generateTxId('RMTTRV');
        setTxId(newTxId);
        setSuccess(true);
        setStep(4);
        
        let priceSum = 0;
        let targetProd = "";
        
        if (travelType === 'bus') {
          priceSum = parseFloat(selectedTravelOption.price) * selectedSeats.length;
          targetProd = `${selectedTravelOption.name} (Seats: ${selectedSeats.join(', ')})`;
        } else if (travelType === 'flight') {
          priceSum = parseFloat(selectedTravelOption.price) * parseInt(passengerCount);
          targetProd = `${selectedTravelOption.airline} (${selectedTravelOption.number})`;
        } else if (travelType === 'hotel') {
          priceSum = parseFloat(selectedTravelOption.price);
          targetProd = selectedTravelOption.name;
        } else {
          priceSum = parseFloat(selectedTravelOption.price) * parseInt(passengerCount);
          targetProd = selectedTravelOption.name;
        }

        addCompletedTransaction({
          id: newTxId,
          service: `${travelType.toUpperCase()} Ticket Booking`,
          provider: targetProd,
          account: passengerName,
          amount: priceSum.toString(),
          date: new Date().toLocaleString(),
          status: 'SUCCESS'
        });
      } else {
        setSuccess(false);
        setStep(4);
      }
    }, 1500);
  };

  // 10. Courier Booking Action
  const handleCourierSubmit = (e) => {
    e.preventDefault();
    if (!pickupName || !pickupPhone || !pickupAddress || !pickupPincode ||
        !deliveryName || !deliveryPhone || !deliveryAddress || !deliveryPincode) {
      setFormError('Please fill in complete pickup and delivery addresses.');
      return;
    }
    if (pickupPhone.length !== 10 || deliveryPhone.length !== 10) {
      setFormError('Please enter valid 10-digit phone numbers.');
      return;
    }
    setFormError('');
    setStep(2);
  };

  const handleCourierDetailsSubmit = (e) => {
    e.preventDefault();
    // Calculate pricing based on dimensions and service
    const weightVal = parseFloat(packageWeight) || 1;
    let basePrice = 50;
    
    if (packageDimensions === 'Medium') basePrice = 80;
    if (packageDimensions === 'Large') basePrice = 150;
    
    const serviceMultiplier = courierService === 'express' ? 3 : 1;
    setCourierPrice(basePrice * weightVal * serviceMultiplier);
    
    setStep(3);
  };

  const handleCourierPay = (simulateSuccess = true) => {
    processMockPayment(simulateSuccess, 'RMTCUR', 'Courier Dispatch', `${courierService.toUpperCase()} Delivery Services`, `From: ${pickupPincode} To: ${deliveryPincode}`, courierPrice.toString());
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 0 60px' }}>
      
      {/* Back button */}
      <button className="btn btn-light" onClick={onBack} style={{ marginBottom: '20px' }}>
        <ArrowLeft size={16} /> Back to Dashboard
      </button>

      <div className="service-view-layout">
        
        {/* Left Area: Step Form Panel */}
        <div className="flow-card">
          <div className="flow-header">
            <div className="flow-title-area">
              <span style={{
                backgroundColor: 'rgba(0, 245, 212, 0.1)',
                color: '#00f5d4',
                padding: '8px',
                borderRadius: '50%',
                display: 'inline-flex'
              }}>
                <Smartphone size={20} />
              </span>
              <div>
                <h2 className="flow-title" style={{ textTransform: 'capitalize' }}>
                  {serviceId.replace('_', ' ')} Portal
                </h2>
                <p className="flow-subtitle">BBPS Assisted Digital Transaction Hub</p>
              </div>
            </div>
            
            {step < 4 && (
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#00f5d4', backgroundColor: 'rgba(0, 180, 216, 0.15)', padding: '4px 10px', borderRadius: '4px' }}>
                Step {Math.floor(step)} of 3
              </span>
            )}
          </div>

          <div className="flow-body">
            
            {/* Step node indicator for general flows */}
            {step < 4 && (
              <div className="step-bar">
                <div className="step-bar-progress" style={{ 
                  width: step === 1 ? '0%' : step === 2 || step === 2.5 ? '50%' : '100%' 
                }}></div>
                <div className={`step-node ${step >= 1 ? 'active' : ''}`}>
                  1
                  <span className="step-node-label">Inputs</span>
                </div>
                <div className={`step-node ${step >= 2 ? 'active' : ''}`}>
                  2
                  <span className="step-node-label">Plans & Details</span>
                </div>
                <div className={`step-node ${step >= 3 ? 'active' : ''}`}>
                  3
                  <span className="step-node-label">Pay Summary</span>
                </div>
              </div>
            )}

            {/* Error banner */}
            {formError && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                color: '#ef4444',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <AlertCircle size={16} />
                <span>{formError}</span>
              </div>
            )}

            {/* Loading Spinner Screen */}
            {loading && (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}>
                <div className="loading-spinner"></div>
                <p style={{ fontWeight: '500', color: '#0f223a' }}>Simulating secure network query...</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Connected to Bharat BillPay central node gateway.</p>
              </div>
            )}

            {/* Form Steps Rendering logic */}
            {!loading && (
              <>
                {step === 4 && !success ? (
                  renderFailureScreen()
                ) : (
                  <>
                {/* 1. MOBILE RECHARGE FLOW */}
                {serviceId === 'mobile' && (
                  <>
                    {step === 1 && (
                      <form onSubmit={handleMobileSubmit}>
                        <div className="form-group">
                          <label className="form-label">Select Connection Type</label>
                          <div className="radio-group">
                            <label className="radio-label">
                              <input 
                                type="radio" 
                                className="radio-input"
                                name="mobileType" 
                                checked={rechargeType === 'prepaid'}
                                onChange={() => setRechargeType('prepaid')} 
                              /> Prepaid
                            </label>
                            <label className="radio-label">
                              <input 
                                type="radio" 
                                className="radio-input"
                                name="mobileType" 
                                checked={rechargeType === 'postpaid'}
                                onChange={() => setRechargeType('postpaid')} 
                              /> Postpaid
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Mobile Number</label>
                          <div className="form-input-icon-wrapper">
                            <span className="form-input-icon">+91</span>
                            <input 
                              type="tel" 
                              className="form-input form-input-with-icon" 
                              placeholder="Enter 10 digit number"
                              value={mobileNum}
                              onChange={(e) => setMobileNum(e.target.value.replace(/\D/g, '').substring(0, 10))}
                              required
                            />
                          </div>
                        </div>

                        {operator && (
                          <div style={{
                            backgroundColor: '#f8fafc',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '20px',
                            border: '1px solid #e2e8f0'
                          }}>
                            <span>Operator detected: <strong>{operator}</strong></span>
                            <span>Telecom Circle: <strong>{circle}</strong></span>
                          </div>
                        )}

                        <div className="form-group">
                          <label className="form-label">Choose Operator Manually</label>
                          <div className="provider-grid">
                            {['Jio', 'Airtel', 'Vi', 'BSNL'].map(opName => (
                              <div 
                                key={opName}
                                className={`provider-select-card ${operator === opName ? 'selected' : ''}`}
                                onClick={() => setOperator(opName)}
                              >
                                <div className="provider-select-logo" style={{ background: 'transparent', padding: 0 }}>
                                  <OperatorLogo nameOrId={opName} />
                                </div>
                                <span className="provider-select-name">{opName}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Telecom Circle</label>
                          <select 
                            className="form-input"
                            value={circle}
                            onChange={(e) => setCircle(e.target.value)}
                          >
                            <option value="Maharashtra">Maharashtra & Goa</option>
                            <option value="Delhi">Delhi NCR</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                          </select>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Browse Recharge Plans <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {step === 2 && (
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                          <h3 style={{ fontSize: '16px' }}>Select Recharge Plan for <strong>{mobileNum}</strong></h3>
                          <button className="btn btn-light" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => setStep(1)}>Edit Info</button>
                        </div>
                        
                        {/* Plan category tabs */}
                        <div className="plan-tabs">
                          {Object.keys(MOBILE_PLANS).map(catName => (
                            <div 
                              key={catName} 
                              className={`plan-tab ${planCategory === catName ? 'active' : ''}`}
                              onClick={() => setPlanCategory(catName)}
                            >
                              {catName}
                            </div>
                          ))}
                        </div>

                        {/* Plan items */}
                        <div className="plan-list">
                          {MOBILE_PLANS[planCategory].map((plan, index) => (
                            <div 
                              key={index}
                              className="plan-item animate-fade-in"
                              onClick={() => handleMobilePlanSelect(plan)}
                            >
                              <div className="plan-details">
                                <div className="plan-header">
                                  <span className="plan-price">₹{plan.price}</span>
                                  {plan.tag && <span className="plan-badge">{plan.tag}</span>}
                                </div>
                                <div className="plan-info-row">
                                  <span>Validity: <strong>{plan.validity}</strong></span>
                                  <span>Data: <strong>{plan.data}</strong></span>
                                </div>
                                <p className="plan-desc">{plan.desc}</p>
                              </div>
                              <ChevronRight size={20} style={{ color: '#00b4d8' }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h3 className="summary-title">Verify Recharge Details</h3>
                        <div className="sidebar-panel" style={{ position: 'static', boxShadow: 'none', padding: 0 }}>
                          <div className="summary-row">
                            <span className="summary-label">Mobile Number</span>
                            <span className="summary-value">+91 {mobileNum}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Operator / Circle</span>
                            <span className="summary-value">{operator} ({circle})</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Recharge Pack</span>
                            <span className="summary-value">₹{selectedPlan.price}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Validity / Data</span>
                            <span className="summary-value">{selectedPlan.validity} - {selectedPlan.data}</span>
                          </div>
                          <div className="summary-row" style={{ color: '#64748b', fontSize: '13px' }}>
                            <span className="summary-label">Description</span>
                            <span className="summary-value" style={{ fontWeight: 'normal', textAlign: 'right' }}>{selectedPlan.desc}</span>
                          </div>
                          
                          <div className="summary-row summary-total">
                            <span>Amount Payable</span>
                            <span>₹{selectedPlan.price}</span>
                          </div>

                          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                            <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</button>
                            <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleMobilePay()}>Confirm &amp; Pay</button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{selectedPlan.price}</div>
                        <div className="receipt-status-text">Recharge Successful</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Transaction ID</span>
                            <span className="receipt-value">{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Mobile Number</span>
                            <span className="receipt-value">+91 {mobileNum}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Operator</span>
                            <span className="receipt-value">{operator}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Circle</span>
                            <span className="receipt-value">{circle}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Recharge Details</span>
                            <span className="receipt-value">{selectedPlan.data} ({selectedPlan.validity})</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Date & Time</span>
                            <span className="receipt-value">{new Date().toLocaleString()}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Agent ID / CSC Code</span>
                            <span className="receipt-value">CSC_WEST_7002</span>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print Ticket</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 2. ELECTRICITY BILL FLOW */}
                {serviceId === 'electricity' && (
                  <>
                    {step === 1 && (
                      <form onSubmit={handleElectricitySubmit}>
                        <div className="form-group" style={{ zIndex: 10 }}>
                          <label className="form-label">Select State</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Type state (e.g. Maharashtra)"
                            value={selectedState || electricityStateSearch}
                            onChange={(e) => {
                              setSelectedState('');
                              setElectricityStateSearch(e.target.value);
                              setShowStateDropdown(true);
                            }}
                            onFocus={() => setShowStateDropdown(true)}
                            required
                          />
                          {showStateDropdown && (
                            <div className="searchable-select-menu">
                              {STATES.filter(s => s.toLowerCase().includes(electricityStateSearch.toLowerCase())).map(st => (
                                <div 
                                  key={st} 
                                  className="searchable-select-option"
                                  onClick={() => {
                                    setSelectedState(st);
                                    setElectricityStateSearch(st);
                                    setShowStateDropdown(false);
                                    setSelectedBoard(null); // reset board selection
                                  }}
                                >
                                  {st}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {selectedState && (
                          <div className="form-group">
                            <label className="form-label">Select Electricity Provider Board</label>
                            <input 
                              type="text" 
                              className="form-input"
                              placeholder="Search board/provider"
                              value={selectedBoard ? selectedBoard.name : electricityBoardSearch}
                              onChange={(e) => {
                                setSelectedBoard(null);
                                setElectricityBoardSearch(e.target.value);
                              }}
                            />
                            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '160px', overflowY: 'auto' }}>
                              {((ELECTRICITY_BOARDS[selectedState] || DEFAULT_ELECTRICITY_BOARDS))
                                .filter(b => b.name.toLowerCase().includes(electricityBoardSearch.toLowerCase()))
                                .map(board => (
                                  <div 
                                    key={board.id}
                                    style={{
                                      padding: '12px',
                                      borderRadius: '8px',
                                      border: '1px solid',
                                      borderColor: selectedBoard?.id === board.id ? '#00b4d8' : '#e2e8f0',
                                      backgroundColor: selectedBoard?.id === board.id ? 'rgba(0,180,216,0.05)' : '#ffffff',
                                      cursor: 'pointer',
                                      fontSize: '13px'
                                    }}
                                    onClick={() => {
                                      setSelectedBoard(board);
                                      setElectricityBoardSearch(board.name);
                                    }}
                                  >
                                    {board.name}
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                        <div className="form-group">
                          <label className="form-label">Consumer Account Number</label>
                          <input 
                            type="text" 
                            className="form-input"
                            placeholder="Enter consumer ID (e.g. 198425109)"
                            value={consumerNo}
                            onChange={(e) => setConsumerNo(e.target.value.replace(/\D/g, ''))}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Fetch Customer Bill details <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {step === 3 && fetchedBill && (
                      <div>
                        <h3 className="summary-title">Pending Utility Bill Details</h3>
                        <div style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          backgroundColor: '#f8fafc',
                          marginBottom: '20px'
                        }}>
                          <div className="summary-row">
                            <span className="summary-label">Customer Name</span>
                            <span className="summary-value" style={{ color: '#081426' }}>{fetchedBill.customerName}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Bill Reference No</span>
                            <span className="summary-value">{fetchedBill.billNo}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Bill Issue Date</span>
                            <span className="summary-value">{fetchedBill.billDate}</span>
                          </div>
                          <div className="summary-row" style={{ color: '#f59e0b' }}>
                            <span className="summary-label">Due Date</span>
                            <span className="summary-value" style={{ fontWeight: '700' }}>{fetchedBill.dueDate}</span>
                          </div>
                          
                          <div className="summary-row summary-total" style={{ borderTopStyle: 'dashed' }}>
                            <span>Bill Amount Due</span>
                            <span style={{ fontSize: '20px', color: '#d32f2f' }}>₹{fetchedBill.amount}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                          <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleElectricityPay()}>Confirm &amp; Pay</button>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{fetchedBill.amount}</div>
                        <div className="receipt-status-text">Bill Paid Successfully</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">BBPS Reference ID</span>
                            <span className="receipt-value">{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Consumer Number</span>
                            <span className="receipt-value">{consumerNo}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Customer Name</span>
                            <span className="receipt-value">{fetchedBill.customerName}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Utility Provider</span>
                            <span className="receipt-value" style={{ fontSize: '11px', textAlign: 'right' }}>{selectedBoard.name}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Payment Date</span>
                            <span className="receipt-value">{new Date().toLocaleString()}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Bill Number</span>
                            <span className="receipt-value">{fetchedBill.billNo}</span>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print Receipt</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 3. WATER BILL FLOW */}
                {serviceId === 'water' && (
                  <>
                    {step === 1 && (
                      <form onSubmit={handleWaterSubmit}>
                        <div className="form-group">
                          <label className="form-label">Select Water Board / Authority</label>
                          <input 
                            type="text" 
                            className="form-input"
                            placeholder="Type or click board below"
                            value={selectedWaterBoard ? selectedWaterBoard.name : waterBoardSearch}
                            onChange={(e) => {
                              setSelectedWaterBoard(null);
                              setWaterBoardSearch(e.target.value);
                            }}
                          />
                          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto' }}>
                            {WATER_BOARDS.filter(w => w.name.toLowerCase().includes(waterBoardSearch.toLowerCase())).map(wb => (
                              <div 
                                key={wb.id}
                                style={{
                                  padding: '12px',
                                  borderRadius: '8px',
                                  border: '1px solid',
                                  borderColor: selectedWaterBoard?.id === wb.id ? '#00b4d8' : '#e2e8f0',
                                  backgroundColor: selectedWaterBoard?.id === wb.id ? 'rgba(0,180,216,0.05)' : '#ffffff',
                                  cursor: 'pointer',
                                  fontSize: '13px'
                                }}
                                onClick={() => {
                                  setSelectedWaterBoard(wb);
                                  setWaterBoardSearch(wb.name);
                                }}
                              >
                                {wb.name} ({wb.city})
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Consumer Number / Connection ID</label>
                          <input 
                            type="text" 
                            className="form-input"
                            placeholder="Enter consumer connection ID"
                            value={waterConsumerNo}
                            onChange={(e) => setWaterConsumerNo(e.target.value)}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Fetch Pending Water Bill <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {step === 3 && fetchedBill && (
                      <div>
                        <h3 className="summary-title">Pending Water Bill Details</h3>
                        <div style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          backgroundColor: '#f8fafc',
                          marginBottom: '20px'
                        }}>
                          <div className="summary-row">
                            <span className="summary-label">Consumer Name</span>
                            <span className="summary-value">{fetchedBill.customerName}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Connection Number</span>
                            <span className="summary-value">{waterConsumerNo}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Due Date</span>
                            <span className="summary-value" style={{ color: '#ef4444', fontWeight: 'bold' }}>{fetchedBill.dueDate}</span>
                          </div>
                          <div className="summary-row summary-total">
                            <span>Amount Due</span>
                            <span style={{ color: '#ef4444' }}>₹{fetchedBill.amount}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                          <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleWaterPay()}>Confirm &amp; Pay</button>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{fetchedBill.amount}</div>
                        <div className="receipt-status-text">Water Bill Paid</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">BBPS Transaction Ref</span>
                            <span className="receipt-value">{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Consumer Number</span>
                            <span className="receipt-value">{waterConsumerNo}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Water Board Authority</span>
                            <span className="receipt-value">{selectedWaterBoard.name}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Date Transacted</span>
                            <span className="receipt-value">{new Date().toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 4. GAS BOOKING FLOW */}
                {serviceId === 'gas' && (
                  <>
                    {step === 1 && (
                      <form onSubmit={handleGasSubmit}>
                        <div className="form-group">
                          <label className="form-label">Select LPG Refill Gas Provider</label>
                          <div className="provider-grid">
                            {LPG_PROVIDERS.map(p => (
                              <div 
                                key={p.id}
                                className={`provider-select-card ${selectedGasProvider?.id === p.id ? 'selected' : ''}`}
                                onClick={() => setSelectedGasProvider(p)}
                              >
                                <div className="provider-select-logo" style={{ backgroundColor: p.color }}>
                                  {p.code}
                                </div>
                                <span className="provider-select-name">{p.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Booking Type</label>
                          <div className="radio-group">
                            <label className="radio-label">
                              <input 
                                type="radio" 
                                className="radio-input"
                                name="gasType" 
                                checked={gasConnectionType === 'refill'}
                                onChange={() => setGasConnectionType('refill')}
                              /> LPG Refill Booking
                            </label>
                            <label className="radio-label">
                              <input 
                                type="radio" 
                                className="radio-input"
                                name="gasType" 
                                checked={gasConnectionType === 'pipeline'}
                                onChange={() => setGasConnectionType('pipeline')}
                              /> Gas Pipeline Bill
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Registered Mobile Number / LPG Connection ID</label>
                          <input 
                            type="text" 
                            className="form-input"
                            placeholder="Enter 17-digit LPG ID or 10-digit mobile"
                            value={gasConsumerNo}
                            onChange={(e) => setGasConsumerNo(e.target.value.replace(/\D/g, ''))}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Fetch Refill Price <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {step === 3 && fetchedBill && (
                      <div>
                        <h3 className="summary-title">Refill Cylinder Invoice Booking</h3>
                        <div style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          backgroundColor: '#f8fafc',
                          marginBottom: '20px'
                        }}>
                          <div className="summary-row">
                            <span className="summary-label">Gas Agency Registered Name</span>
                            <span className="summary-value">{fetchedBill.customerName}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Connection Identification</span>
                            <span className="summary-value">{gasConsumerNo}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Provider Name</span>
                            <span className="summary-value">{selectedGasProvider.name}</span>
                          </div>
                          <div className="summary-row summary-total">
                            <span>Booking Cylinder Charge</span>
                            <span>₹{fetchedBill.amount}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                          <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleGasPay()}>Book Cylinder</button>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{fetchedBill.amount}</div>
                        <div className="receipt-status-text">Cylinder Booked successfully</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Booking Reference No</span>
                            <span className="receipt-value">{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Customer Name</span>
                            <span className="receipt-value">{fetchedBill.customerName}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Gas Agency Provider</span>
                            <span className="receipt-value">{selectedGasProvider.name}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Delivery Timeline</span>
                            <span className="receipt-value" style={{ color: '#10b981' }}>2-3 working days</span>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 5. BROADBAND & LANDLINE FLOW */}
                {serviceId === 'broadband' && (
                  <>
                    {step === 1 && (
                      <form onSubmit={handleBroadbandSubmit}>
                        <div className="form-group">
                          <label className="form-label">Select Broadband Operator</label>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto' }}>
                            {BROADBAND_OPERATORS.map(op => (
                              <div 
                                key={op.id}
                                style={{
                                  padding: '12px',
                                  borderRadius: '8px',
                                  border: '1px solid',
                                  borderColor: selectedBroadband?.id === op.id ? '#00b4d8' : '#e2e8f0',
                                  backgroundColor: selectedBroadband?.id === op.id ? 'rgba(0,180,216,0.05)' : '#ffffff',
                                  cursor: 'pointer',
                                  fontSize: '13px'
                                }}
                                onClick={() => setSelectedBroadband(op)}
                              >
                                {op.name}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Account Number / Landline Phone</label>
                          <input 
                            type="text" 
                            className="form-input"
                            placeholder="Enter broadband account ID"
                            value={broadbandAccountNo}
                            onChange={(e) => setBroadbandAccountNo(e.target.value)}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Fetch Broadband Bill <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {step === 3 && fetchedBill && (
                      <div>
                        <h3 className="summary-title">Pending Broadband Bill Invoice</h3>
                        <div style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          backgroundColor: '#f8fafc',
                          marginBottom: '20px'
                        }}>
                          <div className="summary-row">
                            <span className="summary-label">Account User Name</span>
                            <span className="summary-value">{fetchedBill.customerName}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Broadband Operator</span>
                            <span className="summary-value">{selectedBroadband.name}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Due Date</span>
                            <span className="summary-value">{fetchedBill.dueDate}</span>
                          </div>
                          <div className="summary-row summary-total">
                            <span>Invoice Bill Amount</span>
                            <span>₹{fetchedBill.amount}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                          <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleBroadbandPay()}>Confirm &amp; Pay</button>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{fetchedBill.amount}</div>
                        <div className="receipt-status-text">Payment Successful</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">BBPS Reference ID</span>
                            <span className="receipt-value">{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Account ID</span>
                            <span className="receipt-value">{broadbandAccountNo}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Broadband Operator</span>
                            <span className="receipt-value">{selectedBroadband.name}</span>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 6. DTH RECHARGE FLOW */}
                {serviceId === 'dth' && (
                  <>
                    {step === 1 && (
                      <form onSubmit={handleDthSubmit}>
                        <div className="form-group">
                          <label className="form-label">Select DTH Provider</label>
                          <div className="provider-grid">
                            {DTH_OPERATORS.map(op => (
                              <div 
                                key={op.id}
                                className={`provider-select-card ${selectedDthOperator?.id === op.id ? 'selected' : ''}`}
                                onClick={() => setSelectedDthOperator(op)}
                              >
                                <div className="provider-select-logo" style={{ background: 'transparent', padding: 0 }}>
                                  <OperatorLogo nameOrId={op.id} />
                                </div>
                                <span className="provider-select-name">{op.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Subscriber ID / Customer SmartCard ID</label>
                          <input 
                            type="text" 
                            className="form-input"
                            placeholder="Enter Subscriber ID (e.g. 104598126)"
                            value={dthSubId}
                            onChange={(e) => setDthSubId(e.target.value.replace(/\D/g, ''))}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Query Smartcard plans <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {step === 2 && (
                      <div>
                        <h3>Browse Popular DTH Plans</h3>
                        <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>Showing suggested packages for Subscriber ID: <strong>{dthSubId}</strong></p>
                        
                        <div className="plan-list">
                          {[
                            { name: "Super South Value pack", price: "250", desc: "45 SD channels. Perfect mix of sports, movies and regional channels." },
                            { name: "Dhamaka Sports & Entertainment pack", price: "350", desc: "72 HD/SD channels. Includes all popular sports networks + movies." },
                            { name: "Mega Platinum HD Pack", price: "480", desc: "115 HD channels. Ultimate sports, movies, infotainment & kids pack." },
                            { name: "Kids Mini addon Pack", price: "120", desc: "15 SD channels. Add-on for kids cartoon channels (Cartoon Network, Pogo, Disney)." }
                          ].map((plan, index) => (
                            <div 
                              key={index}
                              className="plan-item"
                              onClick={() => handleDthPlanSelect(plan.price, plan.name)}
                            >
                              <div className="plan-details">
                                <div className="plan-header">
                                  <span className="plan-price">₹{plan.price}</span>
                                </div>
                                <div className="plan-info-row">
                                  <span>Name: <strong>{plan.name}</strong></span>
                                  <span>Validity: <strong>30 Days</strong></span>
                                </div>
                                <p className="plan-desc">{plan.desc}</p>
                              </div>
                              <ChevronRight size={20} style={{ color: '#00b4d8' }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && selectedDthPlan && (
                      <div>
                        <h3 className="summary-title">Verify DTH Recharge Invoice</h3>
                        <div className="sidebar-panel" style={{ position: 'static', boxShadow: 'none', padding: 0 }}>
                          <div className="summary-row">
                            <span className="summary-label">Subscriber ID</span>
                            <span className="summary-value">{dthSubId}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">DTH Operator</span>
                            <span className="summary-value">{selectedDthOperator.name}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Plan Recharge value</span>
                            <span className="summary-value">₹{selectedDthPlan.price}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Details</span>
                            <span className="summary-value" style={{ fontWeight: 'normal', textAlign: 'right' }}>{selectedDthPlan.desc}</span>
                          </div>
                          <div className="summary-row summary-total">
                            <span>Amount Payable</span>
                            <span>₹{selectedDthPlan.price}</span>
                          </div>

                          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                            <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</button>
                            <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleDthPay()}>Confirm &amp; Pay</button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{selectedDthPlan.price}</div>
                        <div className="receipt-status-text">DTH Recharge Completed</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">BBPS Transaction Ref</span>
                            <span className="receipt-value">{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Subscriber ID</span>
                            <span className="receipt-value">{dthSubId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">DTH Operator</span>
                            <span className="receipt-value">{selectedDthOperator.name}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Status</span>
                            <span className="receipt-value" style={{ color: '#10b981' }}>Box Activated Instantly</span>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 7. FASTAG RECHARGE FLOW */}
                {serviceId === 'fastag' && (
                  <>
                    {step === 1 && (
                      <form onSubmit={handleFastagSubmit}>
                        <div className="form-group">
                          <label className="form-label">Select FASTag Issuing Bank</label>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto' }}>
                            {FASTAG_BANKS.map(bank => (
                              <div 
                                key={bank.id}
                                style={{
                                  padding: '12px',
                                  borderRadius: '8px',
                                  border: '1px solid',
                                  borderColor: selectedFastagBank?.id === bank.id ? '#00b4d8' : '#e2e8f0',
                                  backgroundColor: selectedFastagBank?.id === bank.id ? 'rgba(0,180,216,0.05)' : '#ffffff',
                                  cursor: 'pointer',
                                  fontSize: '13px'
                                }}
                                onClick={() => setSelectedFastagBank(bank)}
                              >
                                {bank.name}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Vehicle Registration Number (e.g. MH12PQ9988)</label>
                          <input 
                            type="text" 
                            className="form-input"
                            style={{ textTransform: 'uppercase' }}
                            placeholder="Enter vehicle number"
                            value={fastagVehicleNo}
                            onChange={(e) => setFastagVehicleNo(e.target.value)}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Query Wallet Balance <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {step === 3 && (
                      <div>
                        <h3 className="summary-title">Recharge FASTag Wallet</h3>
                        
                        <div style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '16px',
                          backgroundColor: '#f8fafc',
                          marginBottom: '20px',
                          fontSize: '13px'
                        }}>
                          <div className="summary-row">
                            <span className="summary-label">Vehicle Number</span>
                            <span className="summary-value">{fastagVehicleNo.toUpperCase()}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">FASTag Issuer</span>
                            <span className="summary-value">{selectedFastagBank.name}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Existing Tag Balance</span>
                            <span className="summary-value" style={{ color: '#f59e0b', fontWeight: 'bold' }}>₹{fastagBalance}</span>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Enter Recharge Amount (₹)</label>
                          <input 
                            type="number" 
                            className="form-input"
                            placeholder="Min ₹100 - Max ₹10,000"
                            value={fastagAmount}
                            onChange={(e) => setFastagAmount(e.target.value.replace(/\D/g, ''))}
                            required
                          />
                          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                            {['200', '500', '1000', '2000'].map(amt => (
                              <button 
                                key={amt}
                                type="button"
                                className="btn btn-light"
                                style={{ padding: '6px 12px', fontSize: '12px', flex: 1 }}
                                onClick={() => setFastagAmount(amt)}
                              >
                                + ₹{amt}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                          <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                          <button 
                            className="btn btn-primary" 
                            style={{ flex: 2 }} 
                            onClick={() => handleFastagPay()}
                            disabled={!fastagAmount || parseFloat(fastagAmount) < 100}
                          >
                            Confirm &amp; Pay
                          </button>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{fastagAmount}</div>
                        <div className="receipt-status-text">FASTag Recharge Successful</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">BBPS Reference ID</span>
                            <span className="receipt-value">{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Vehicle Registration</span>
                            <span className="receipt-value">{fastagVehicleNo.toUpperCase()}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">FASTag Issuer</span>
                            <span className="receipt-value">{selectedFastagBank.name}</span>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 8. MONEY TRANSFER FLOW (DMT) */}
                {serviceId === 'money_transfer' && (
                  <>
                    {/* Step 1: Sender Mobile Verification */}
                    {step === 1 && (
                      <form onSubmit={handleSenderSubmit}>
                        <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Domestic Money Transfer (DMT)</h3>
                        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '20px' }}>Enter sender mobile number to fetch registered sender limits.</p>
                        
                        <div className="form-group">
                          <label className="form-label">Sender Mobile Number</label>
                          <div className="form-input-icon-wrapper">
                            <span className="form-input-icon">+91</span>
                            <input 
                              type="tel" 
                              className="form-input form-input-with-icon" 
                              placeholder="Enter 10-digit sender phone"
                              value={senderPhone}
                              onChange={(e) => setSenderPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                              required
                            />
                          </div>
                          <span style={{ fontSize: '11px', color: '#64748b' }}>For demo, try <strong>9876543210</strong> (pre-registered) or any other to register.</span>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Query Sender Status <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {/* Step 1.5: Register Sender */}
                    {step === 1.5 && (
                      <form onSubmit={handleRegisterSender}>
                        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Register New Sender</h3>
                        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '20px' }}>New sender mobile <strong>{senderPhone}</strong> is not registered. Please register sender to perform transfer.</p>
                        
                        <div className="form-group">
                          <label className="form-label">Sender Full Name</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Enter Sender First & Last Name"
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            required 
                          />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                          Register & Proceed <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {/* Step 2: Beneficiary selection & Transfer details */}
                    {step === 2 && (
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                          <div>
                            <h3 style={{ fontSize: '15px', color: '#0f223a' }}>Sender: <strong>{senderName}</strong></h3>
                            <p style={{ fontSize: '12px', color: '#64748b' }}>Monthly Remittance Limit Available: <strong>₹25,000</strong></p>
                          </div>
                          <button className="btn btn-light" style={{ padding: '6px 12px', fontSize: '11px' }} onClick={() => setStep(1)}>Change Sender</button>
                        </div>

                        {!showAddBen ? (
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center' }}>
                              <label className="form-label" style={{ marginBottom: 0 }}>Select Beneficiary Account</label>
                              <button 
                                type="button" 
                                className="btn btn-secondary" 
                                style={{ padding: '6px 12px', fontSize: '11px' }}
                                onClick={() => setShowAddBen(true)}
                              >
                                <Plus size={12} /> Add Beneficiary
                              </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto', marginBottom: '20px' }}>
                              {benList.map(ben => (
                                <div 
                                  key={ben.id}
                                  style={{
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid',
                                    borderColor: selectedBen?.id === ben.id ? '#00b4d8' : '#e2e8f0',
                                    backgroundColor: selectedBen?.id === ben.id ? 'rgba(0,180,216,0.05)' : '#ffffff',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                  }}
                                  onClick={() => setSelectedBen(ben)}
                                >
                                  <div>
                                    <h4 style={{ fontSize: '13px', color: '#081426' }}>{ben.name}</h4>
                                    <p style={{ fontSize: '11px', color: '#64748b' }}>{ben.bank} (A/C: {ben.accountNo})</p>
                                  </div>
                                  <span style={{ fontSize: '11px', backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', color: '#334155' }}>IFSC: {ben.ifsc}</span>
                                </div>
                              ))}
                            </div>

                            {selectedBen && (
                              <div className="animate-fade-in" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                                <div className="form-group">
                                  <label className="form-label">Transfer Amount (₹)</label>
                                  <input 
                                    type="number" 
                                    className="form-input" 
                                    placeholder="Enter amount to transfer"
                                    value={transferAmount}
                                    onChange={(e) => setTransferAmount(e.target.value.replace(/\D/g, ''))}
                                    required
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="form-label">Transfer Channel Mode</label>
                                  <div className="radio-group">
                                    <label className="radio-label">
                                      <input 
                                        type="radio" 
                                        className="radio-input"
                                        name="transferMode"
                                        checked={transferMode === 'IMPS'} 
                                        onChange={() => setTransferMode('IMPS')} 
                                      /> IMPS (Instant Settlement)
                                    </label>
                                    <label className="radio-label">
                                      <input 
                                        type="radio" 
                                        className="radio-input"
                                        name="transferMode" 
                                        checked={transferMode === 'NEFT'} 
                                        onChange={() => setTransferMode('NEFT')} 
                                      /> NEFT (Standard)
                                    </label>
                                  </div>
                                </div>

                                <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={handleMoneyTransferSubmit}>
                                  Verify Transfer Details <ChevronRight size={16} />
                                </button>
                              </div>
                            )}
                          </div>
                        ) : (
                          <form onSubmit={handleAddBeneficiary} style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', backgroundColor: '#f8fafc' }}>
                            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Add Beneficiary details</h4>
                            
                            <div className="form-group">
                              <label className="form-label">Beneficiary Full Name</label>
                              <input 
                                type="text" 
                                className="form-input" 
                                placeholder="Enter Name matching bank record" 
                                value={newBenName}
                                onChange={(e) => setNewBenName(e.target.value)}
                                required 
                              />
                            </div>

                            <div className="form-group">
                              <label className="form-label">Select Bank Name</label>
                              <select 
                                className="form-input" 
                                value={newBenBank}
                                onChange={(e) => setNewBenBank(e.target.value)}
                                required
                              >
                                <option value="">Select Bank</option>
                                <option value="State Bank of India">State Bank of India</option>
                                <option value="HDFC Bank">HDFC Bank</option>
                                <option value="ICICI Bank">ICICI Bank</option>
                                <option value="Punjab National Bank">Punjab National Bank</option>
                                <option value="Bank of Baroda">Bank of Baroda</option>
                              </select>
                            </div>

                            <div className="form-group">
                              <label className="form-label">Bank Account Number</label>
                              <input 
                                type="text" 
                                className="form-input" 
                                placeholder="Enter account number" 
                                value={newBenAccount}
                                onChange={(e) => setNewBenAccount(e.target.value.replace(/\D/g, ''))}
                                required 
                              />
                            </div>

                            <div className="form-group">
                              <label className="form-label">Bank IFSC Code</label>
                              <input 
                                type="text" 
                                className="form-input" 
                                placeholder="Enter 11-digit IFSC (e.g. SBIN0001234)" 
                                style={{ textTransform: 'uppercase' }}
                                value={newBenIfsc}
                                onChange={(e) => setNewBenIfsc(e.target.value)}
                                required 
                              />
                            </div>

                            <div style={{ display: 'flex', gap: '8px' }}>
                              <button type="button" className="btn btn-light" style={{ flex: 1 }} onClick={() => setShowAddBen(false)}>Cancel</button>
                              <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Beneficiary</button>
                            </div>
                          </form>
                        )}
                      </div>
                    )}

                    {/* Step 3: Verify Transfer */}
                    {step === 3 && selectedBen && (
                      <div>
                        <h3 className="summary-title">Verify Remittance Transaction</h3>
                        
                        <div style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          backgroundColor: '#f8fafc',
                          marginBottom: '20px',
                          fontSize: '13px'
                        }}>
                          <div className="summary-row">
                            <span className="summary-label">Sender Phone</span>
                            <span className="summary-value">{senderPhone}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Beneficiary Name</span>
                            <span className="summary-value" style={{ color: '#081426' }}>{selectedBen.name}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Recipient Bank</span>
                            <span className="summary-value">{selectedBen.bank}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Account & IFSC</span>
                            <span className="summary-value">A/C: {selectedBen.accountNo} (IFSC: {selectedBen.ifsc})</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Transfer Channel</span>
                            <span className="summary-value" style={{ color: '#00b4d8', fontWeight: 'bold' }}>{transferMode}</span>
                          </div>
                          
                          <div className="summary-row" style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '10px', marginTop: '10px' }}>
                            <span className="summary-label">Transfer Amount</span>
                            <span className="summary-value">₹{parseFloat(transferAmount).toFixed(2)}</span>
                          </div>
                          <div className="summary-row" style={{ color: '#64748b' }}>
                            <span className="summary-label">DMT Portal Commission Fee (1%)</span>
                            <span className="summary-value">₹{(parseFloat(transferAmount) * 0.01).toFixed(2)}</span>
                          </div>
                          
                          <div className="summary-row summary-total" style={{ borderTopStyle: 'dashed' }}>
                            <span>Total Settlement Value</span>
                            <span>₹{(parseFloat(transferAmount) * 1.01).toFixed(2)}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</button>
                          <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleMoneyTransferPay()}>Confirm &amp; Pay</button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Success Receipt */}
                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{transferAmount}</div>
                        <div className="receipt-status-text">Fund Remitted Successfully</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">DMT Reference IMPS RRN</span>
                            <span className="receipt-value">{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Beneficiary Name</span>
                            <span className="receipt-value">{selectedBen.name}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Recipient Bank</span>
                            <span className="receipt-value">{selectedBen.bank}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Account Number</span>
                            <span className="receipt-value">...{selectedBen.accountNo.slice(-4)}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Sender Phone</span>
                            <span className="receipt-value">{senderPhone}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Transacted Date</span>
                            <span className="receipt-value">{new Date().toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print Receipt</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 9. TRAVEL BOOKING FLOW (Multi-Service) */}
                {serviceId === 'travel' && (
                  <>
                    {/* Step 1: Search Form */}
                    {step === 1 && (
                      <form onSubmit={handleTravelSearch}>
                        <div style={{
                          display: 'flex',
                          backgroundColor: '#0f223a',
                          borderRadius: '8px',
                          padding: '6px',
                          marginBottom: '20px',
                          color: '#fff',
                          justifyContent: 'center',
                          gap: '10px'
                        }}>
                          {['bus', 'flight', 'train', 'hotel'].map(type => (
                            <button
                              key={type}
                              type="button"
                              className={`btn ${travelType === type ? 'btn-primary' : 'btn-secondary'}`}
                              style={{ 
                                padding: '8px 16px', 
                                border: 'none', 
                                backgroundColor: travelType === type ? '#00b4d8' : 'transparent',
                                color: travelType === type ? '#081426' : '#94a3b8'
                              }}
                              onClick={() => {
                                setTravelType(type);
                                setSelectedTravelOption(null);
                                setTravelSource('');
                                setTravelDest('');
                              }}
                            >
                              {type === 'bus' && <Bus size={14} />}
                              {type === 'flight' && <Plane size={14} />}
                              {type === 'train' && <Train size={14} />}
                              {type === 'hotel' && <Hotel size={14} />}
                              <span style={{ marginLeft: '6px', textTransform: 'capitalize' }}>{type}</span>
                            </button>
                          ))}
                        </div>

                        {travelType !== 'hotel' ? (
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div className="form-group">
                              <label className="form-label">From Source City</label>
                              <select 
                                className="form-input"
                                value={travelSource}
                                onChange={(e) => setTravelSource(e.target.value)}
                                required
                              >
                                <option value="">Select Origin</option>
                                {TRAVEL_CITIES.map(c => (
                                  <option key={c.code} value={c.name}>{c.name} ({c.code})</option>
                                ))}
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="form-label">To Destination City</label>
                              <select 
                                className="form-input"
                                value={travelDest}
                                onChange={(e) => setTravelDest(e.target.value)}
                                required
                              >
                                <option value="">Select Destination</option>
                                {TRAVEL_CITIES.map(c => (
                                  <option key={c.code} value={c.name}>{c.name} ({c.code})</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ) : (
                          <div className="form-group">
                            <label className="form-label">Destination City / Hotel Location</label>
                            <select 
                              className="form-input"
                              value={travelSource}
                              onChange={(e) => {
                                setTravelSource(e.target.value);
                                setTravelDest('Hotel Reservation');
                              }}
                              required
                            >
                              <option value="">Select Location</option>
                              {TRAVEL_CITIES.map(c => (
                                <option key={c.code} value={c.name}>{c.name} ({c.code})</option>
                              ))}
                            </select>
                          </div>
                        )}

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                          <div className="form-group">
                            <label className="form-label">Date of Journey / Check-in</label>
                            <input 
                              type="date" 
                              className="form-input"
                              value={travelDate}
                              onChange={(e) => setTravelDate(e.target.value)}
                              required 
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Passengers / Rooms</label>
                            <select 
                              className="form-input"
                              value={passengerCount}
                              onChange={(e) => setPassengerCount(e.target.value)}
                            >
                              {['1', '2', '3', '4', '5', '6'].map(num => (
                                <option key={num} value={num}>{num} {travelType === 'hotel' ? 'Rooms' : 'Adults'}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                          Search Available Tickets <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {/* Step 2: Display Results */}
                    {step === 2 && (
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                          <h3 style={{ fontSize: '15px' }}>Available {travelType.toUpperCase()} Options</h3>
                          <button className="btn btn-light" style={{ padding: '6px 12px', fontSize: '11px' }} onClick={() => setStep(1)}>Modify Search</button>
                        </div>

                        {!selectedTravelOption ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {travelResults.map((opt, index) => (
                              <div 
                                key={index} 
                                className="flight-card"
                                onClick={() => handleTravelOptionSelect(opt)}
                              >
                                <div>
                                  <h4 style={{ fontSize: '14px', color: '#081426' }}>{opt.name || opt.airline || opt.name}</h4>
                                  {travelType === 'bus' && <p style={{ fontSize: '11px', color: '#64748b' }}>{opt.type} | Rating: ★{opt.rating}</p>}
                                  {travelType === 'flight' && <p style={{ fontSize: '11px', color: '#64748b' }}>Flight: {opt.number} | Depart: {opt.departure}</p>}
                                  {travelType === 'hotel' && <p style={{ fontSize: '11px', color: '#64748b' }}>Rating: ★{opt.rating} | {opt.amenities.slice(0,2).join(', ')}</p>}
                                  {travelType === 'train' && <p style={{ fontSize: '11px', color: '#64748b' }}>Depart: {opt.departure} | Classes: {opt.classes.join(', ')}</p>}
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#0f223a' }}>₹{opt.price}</span>
                                  <p style={{ fontSize: '10px', color: '#64748b' }}>per ticket</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Bus Seat Selector inside Step 2 */
                          <div className="animate-fade-in">
                            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Choose Seats for {selectedTravelOption.name}</h4>
                            
                            <div className="seat-legend">
                              <div className="legend-item"><div className="legend-color available"></div>Available</div>
                              <div className="legend-item"><div className="legend-color selected"></div>Selected</div>
                              <div className="legend-item"><div className="legend-color booked"></div>Booked</div>
                            </div>

                            <div className="bus-layout">
                              <div className="bus-steering"><Navigation size={18} style={{ transform: 'rotate(90deg)' }} /> Driver</div>
                              <div className="seat-grid">
                                {Array.from({ length: 12 }, (_, i) => {
                                  const seatName = 'S' + (i + 1);
                                  const isBooked = [3, 7, 8].includes(i);
                                  return (
                                    <React.Fragment key={seatName}>
                                      <button
                                        type="button"
                                        className={`seat ${isBooked ? 'booked' : selectedSeats.includes(seatName) ? 'selected' : 'available'}`}
                                        onClick={() => !isBooked && handleSelectSeat(seatName)}
                                        disabled={isBooked}
                                      >
                                        {seatName}
                                      </button>
                                      {/* create corridor walkway */}
                                      {i % 4 === 1 && <div className="seat-spacer"></div>}
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                              <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setSelectedTravelOption(null)}>Back</button>
                              <button className="btn btn-primary" style={{ flex: 2 }} onClick={handleTravelBookingConfirm}>Confirm Seats ({selectedSeats.length})</button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Step 2.5: Passenger details */}
                    {step === 2.5 && (
                      <form onSubmit={handlePassengerSubmit}>
                        <h3 style={{ fontSize: '15px', marginBottom: '16px' }}>Passenger Ticketing Information</h3>
                        
                        <div className="form-group">
                          <label className="form-label">Passenger Name (matching Govt ID)</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Enter First & Last Name"
                            value={passengerName}
                            onChange={(e) => setPassengerName(e.target.value)}
                            required 
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Passenger Age</label>
                          <input 
                            type="number" 
                            className="form-input" 
                            placeholder="Age (e.g. 35)"
                            value={passengerAge}
                            onChange={(e) => setPassengerAge(e.target.value)}
                            required 
                          />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                          Proceed to Payment Summary <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {/* Step 3: Summary */}
                    {step === 3 && selectedTravelOption && (
                      <div>
                        <h3 className="summary-title">Verify Booking Invoice</h3>
                        
                        <div style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          backgroundColor: '#f8fafc',
                          marginBottom: '20px',
                          fontSize: '13px'
                        }}>
                          <div className="summary-row">
                            <span className="summary-label">Route Origin & Dest</span>
                            <span className="summary-value" style={{ color: '#081426' }}>{travelSource} ➔ {travelDest}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Travel Date</span>
                            <span className="summary-value">{travelDate}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Passenger Name</span>
                            <span className="summary-value">{passengerName} (Age: {passengerAge})</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Ticket Booking</span>
                            <span className="summary-value">{selectedTravelOption.name || selectedTravelOption.airline}</span>
                          </div>
                          {travelType === 'bus' && (
                            <div className="summary-row">
                              <span className="summary-label">Seats Selected</span>
                              <span className="summary-value">{selectedSeats.join(', ')}</span>
                            </div>
                          )}
                          
                          <div className="summary-row summary-total" style={{ borderTopStyle: 'dashed' }}>
                            <span>Total Ticket Price</span>
                            <span>
                              ₹{travelType === 'bus' ? (parseFloat(selectedTravelOption.price) * selectedSeats.length) : (parseFloat(selectedTravelOption.price) * parseInt(passengerCount))}
                            </span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(2.5)}>Back</button>
                          <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleTravelPay()}>Book Ticket</button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Success Screen */}
                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in" style={{ borderTop: '4px solid #10b981' }}>
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-status-text">Travel Booking Confirmed!</div>
                        
                        <div className="receipt-details">
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Travel PNR Number</span>
                            <span className="receipt-value" style={{ letterSpacing: '1px', color: '#00b4d8' }}>{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Passenger Name</span>
                            <span className="receipt-value">{passengerName}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Boarding Route</span>
                            <span className="receipt-value" style={{ fontSize: '11px', textAlign: 'right' }}>{travelSource} ➔ {travelDest}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Service Details</span>
                            <span className="receipt-value">{selectedTravelOption.name || selectedTravelOption.airline}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Travel Date</span>
                            <span className="receipt-value">{travelDate}</span>
                          </div>
                          {travelType === 'bus' && (
                            <div className="receipt-detail-row">
                              <span className="receipt-label">Seats</span>
                              <span className="receipt-value">{selectedSeats.join(', ')}</span>
                            </div>
                          )}
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print E-Ticket</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 10. COURIER BOOKING FLOW */}
                {serviceId === 'courier' && (
                  <>
                    {/* Step 1: Address Details */}
                    {step === 1 && (
                      <form onSubmit={handleCourierSubmit}>
                        <h3 style={{ fontSize: '15px', marginBottom: '16px' }}>Courier Pickup & Delivery Location</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                          {/* Sender Address */}
                          <div>
                            <h4 style={{ fontSize: '13px', marginBottom: '8px', color: '#ff7043' }}>1. Pickup Address</h4>
                            <div className="form-group">
                              <label className="form-label">Sender Name</label>
                              <input 
                                type="text" 
                                className="form-input" 
                                placeholder="Sender Name"
                                value={pickupName}
                                onChange={(e) => setPickupName(e.target.value)}
                                required 
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Sender Phone</label>
                              <input 
                                type="tel" 
                                className="form-input" 
                                placeholder="10-digit Mobile"
                                value={pickupPhone}
                                onChange={(e) => setPickupPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                                required 
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Pickup Address Line</label>
                              <textarea 
                                className="form-input" 
                                placeholder="Full pickup address"
                                value={pickupAddress}
                                onChange={(e) => setPickupAddress(e.target.value)}
                                style={{ height: '70px', resize: 'none' }}
                                required 
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Pickup Pincode</label>
                              <input 
                                type="text" 
                                className="form-input" 
                                placeholder="6-digit Pincode"
                                value={pickupPincode}
                                onChange={(e) => setPickupPincode(e.target.value.replace(/\D/g, '').substring(0, 6))}
                                required 
                              />
                            </div>
                          </div>

                          {/* Receiver Address */}
                          <div>
                            <h4 style={{ fontSize: '13px', marginBottom: '8px', color: '#00b4d8' }}>2. Delivery Address</h4>
                            <div className="form-group">
                              <label className="form-label">Receiver Name</label>
                              <input 
                                type="text" 
                                className="form-input" 
                                placeholder="Receiver Name"
                                value={deliveryName}
                                onChange={(e) => setDeliveryName(e.target.value)}
                                required 
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Receiver Phone</label>
                              <input 
                                type="tel" 
                                className="form-input" 
                                placeholder="10-digit Mobile"
                                value={deliveryPhone}
                                onChange={(e) => setDeliveryPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                                required 
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Delivery Address Line</label>
                              <textarea 
                                className="form-input" 
                                placeholder="Full delivery address"
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
                                style={{ height: '70px', resize: 'none' }}
                                required 
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Delivery Pincode</label>
                              <input 
                                type="text" 
                                className="form-input" 
                                placeholder="6-digit Pincode"
                                value={deliveryPincode}
                                onChange={(e) => setDeliveryPincode(e.target.value.replace(/\D/g, '').substring(0, 6))}
                                required 
                              />
                            </div>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                          Add Package Details <ChevronRight size={16} />
                        </button>
                      </form>
                    )}

                    {/* Step 2: Package details & Pricing */}
                    {step === 2 && (
                      <form onSubmit={handleCourierDetailsSubmit}>
                        <h3 style={{ fontSize: '15px', marginBottom: '16px' }}>Package Weight & Dimension Details</h3>
                        
                        <div className="form-group">
                          <label className="form-label">Package Type</label>
                          <select className="form-input">
                            <option>Documents / Papers</option>
                            <option>Parcel / Box Package</option>
                            <option>Medicines</option>
                            <option>Clothing / Apparel</option>
                          </select>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                          <div className="form-group">
                            <label className="form-label">Package Weight (kg)</label>
                            <input 
                              type="number" 
                              className="form-input" 
                              placeholder="Weight in KG" 
                              value={packageWeight}
                              onChange={(e) => setPackageWeight(e.target.value)}
                              step="0.1"
                              required 
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Package Volume Size</label>
                            <select 
                              className="form-input"
                              value={packageDimensions}
                              onChange={(e) => setPackageDimensions(e.target.value)}
                            >
                              <option value="Small">Small Envelope</option>
                              <option value="Medium">Medium Box (Up to 30x30x30 cm)</option>
                              <option value="Large">Large Parcel Box</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Choose Courier Service Type</label>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div 
                              className={`provider-select-card ${courierService === 'standard' ? 'selected' : ''}`}
                              style={{ padding: '16px', flexDirection: 'column' }}
                              onClick={() => setCourierService('standard')}
                            >
                              <strong>Standard Courier</strong>
                              <span style={{ fontSize: '11px', color: '#64748b' }}>Estimated: 4-6 working days</span>
                              <span style={{ fontSize: '14px', color: '#00b4d8', fontWeight: 'bold', marginTop: '6px' }}>₹ Economy Price</span>
                            </div>
                            <div 
                              className={`provider-select-card ${courierService === 'express' ? 'selected' : ''}`}
                              style={{ padding: '16px', flexDirection: 'column' }}
                              onClick={() => setCourierService('express')}
                            >
                              <strong>Express Courier</strong>
                              <span style={{ fontSize: '11px', color: '#64748b' }}>Estimated: 24-48 hours</span>
                              <span style={{ fontSize: '14px', color: '#ff7043', fontWeight: 'bold', marginTop: '6px' }}>₹ Premium Speed</span>
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button type="button" className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                          <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Calculate Booking Cost</button>
                        </div>
                      </form>
                    )}

                    {/* Step 3: Summary */}
                    {step === 3 && (
                      <div>
                        <h3 className="summary-title">Verify Courier Dispatch</h3>
                        
                        <div style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          backgroundColor: '#f8fafc',
                          marginBottom: '20px',
                          fontSize: '13px'
                        }}>
                          <div className="summary-row">
                            <span className="summary-label">Sender</span>
                            <span className="summary-value">{pickupName} ({pickupPincode})</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Receiver</span>
                            <span className="summary-value">{deliveryName} ({deliveryPincode})</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Weight / Size</span>
                            <span className="summary-value">{packageWeight} kg / {packageDimensions}</span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">Service Type</span>
                            <span className="summary-value" style={{ textTransform: 'capitalize', color: '#00b4d8', fontWeight: 'bold' }}>{courierService}</span>
                          </div>
                          <div className="summary-row summary-total">
                            <span>Estimated Booking Cost</span>
                            <span>₹{courierPrice}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button className="btn btn-light" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</button>
                          <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => handleCourierPay()}>Confirm &amp; Pay</button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Success Screen */}
                    {step === 4 && (
                      <div className="receipt-wrapper animate-scale-in">
                        <div className="receipt-success-icon">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="receipt-amount">₹{courierPrice}</div>
                        <div className="receipt-status-text">Courier Booked & Scheduled</div>
                        
                        <div className="receipt-details" style={{ textAlign: 'left' }}>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">AWB Tracking Number</span>
                            <span className="receipt-value" style={{ color: '#00b4d8', letterSpacing: '0.5px' }}>{txId}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Estimated Delivery</span>
                            <span className="receipt-value">{courierService === 'express' ? 'Tomorrow by 8 PM' : '3-July-2026'}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Sender Name</span>
                            <span className="receipt-value">{pickupName}</span>
                          </div>
                          <div className="receipt-detail-row">
                            <span className="receipt-label">Receiver Name</span>
                            <span className="receipt-value">{deliveryName}</span>
                          </div>
                        </div>

                        {/* Live mock status tracker timeline */}
                        <div style={{ textAlign: 'left', marginBottom: '24px' }}>
                          <h4 style={{ fontSize: '13px', marginBottom: '10px' }}>Simulated Parcel Tracking Timeline:</h4>
                          <div className="timeline">
                            <div className="timeline-item active">
                              <div className="timeline-dot"><FileText size={14} /></div>
                              <div className="timeline-content">
                                <h5 className="timeline-title">Parcel Booked</h5>
                                <p className="timeline-desc">Scheduled for pickup at {pickupPincode}</p>
                              </div>
                            </div>
                            <div className="timeline-item">
                              <div className="timeline-dot"><Plus size={14} /></div>
                              <div className="timeline-content">
                                <h5 className="timeline-title">In Transit</h5>
                                <p className="timeline-desc">Pending dispatch to destination hub</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="receipt-actions">
                          <button className="btn btn-light" onClick={handlePrint}><Printer size={16} /> Print Label</button>
                          <button className="btn btn-primary" onClick={onBack}>Done</button>
                        </div>
                      </div>
                    )}
                  </>
                )}
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right Area: Alternative Partner Options Sidebar */}
        <div className="sidebar-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <h3 className="summary-title" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <ExternalLink size={16} style={{ color: '#00b4d8' }} /> Official & Alternative Options
          </h3>
          <p style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '16px', lineHeight: '1.4' }}>
            Continue with a trusted partner if our service is unavailable.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {getFallbackOptions().map((item, idx) => (
              <div
                key={item.name}
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '12px',
                  backgroundColor: 'var(--bg-white)',
                  transition: 'var(--transition)',
                  cursor: 'default'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-teal)'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <div style={{
                    width: '28px', height: '28px', flexShrink: 0
                  }}>
                    <OperatorLogo nameOrId={item.name} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--primary-navy)' }}>{item.name}</span>
                </div>
                <p style={{ fontSize: '11px', color: '#64748b', marginBottom: '10px', lineHeight: '1.4' }}>{item.desc}</p>
                <button
                  type="button"
                  onClick={() => handleFallbackClick(item.name, item.url)}
                  style={{
                    width: '100%',
                    padding: '6px 0',
                    fontSize: '11px',
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, var(--primary-slate), var(--primary-navy))',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Open Website <ExternalLink size={10} />
                </button>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '14px', textAlign: 'center', fontStyle: 'italic', lineHeight: '1.4' }}>
            RM Technosoft is not responsible for transactions on third-party websites.
          </p>
        </div>

      </div>

      {/* WARNING MODAL OVERLAY */}
      {showWarningModal && (
        <div className="warning-overlay">
          <div className="warning-card">
            <div className="warning-header">
              <AlertCircle size={24} />
              <h3 className="warning-title">Leaving RM Technosoft</h3>
            </div>
            <div className="warning-body">
              You are leaving the RM Technosoft platform to visit the official portal of <strong>{pendingPartnerName}</strong>. 
              Please note that you will complete your transaction on their secure network. 
              <br /><br />
              RM Technosoft is not responsible for transactions completed on third-party websites.
            </div>
            <div className="warning-actions">
              <button className="btn btn-light" onClick={() => setShowWarningModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleConfirmLeave}>Proceed to Site</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
