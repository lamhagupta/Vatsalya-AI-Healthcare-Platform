/* ══════════════════════════════════════
   DATA STORE
══════════════════════════════════════ */

const DATA = {

  hospitals: {

    /* ════════════════ UTTAR PRADESH ════════════════ */
    up: {
      default: [
        { name:'SGPGI Lucknow', meta:'Sanjay Gandhi PGI · Govt · Multi-specialty · Lucknow', dist:'4.8 km', badge:'Open 24/7', type:'open' },
        { name:'King George Medical University (KGMU)', meta:'Govt · All Specialties · Trauma Center · Lucknow', dist:'3.5 km', badge:'CGHS Listed', type:'cghs' },
        { name:'Sahara Hospital Lucknow', meta:'Private · Emergency · ICU · 500+ beds · Lucknow', dist:'2.1 km', badge:'Emergency', type:'emg' },
        { name:'Medanta Lucknow', meta:'Private · Multi-specialty · Ayushman · Lucknow', dist:'7.4 km', badge:'Ayushman', type:'ay' },
        { name:'Ram Manohar Lohia Hospital', meta:'Govt · General & Specialist OPD · Lucknow', dist:'6.2 km', badge:'CGHS Listed', type:'cghs' },
        { name:'SRN Hospital Prayagraj', meta:'Govt · Motilal Nehru Medical College · Prayagraj', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Banaras Hindu University Hospital', meta:'BHU IMS · Govt · All Specialties · Varanasi', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'District Hospital Agra', meta:'Govt · Emergency · Agra', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Fortis Hospital Noida', meta:'Private · Multi-specialty · Noida', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Kailash Hospital Greater Noida', meta:'Private · Emergency · ICU · Greater Noida', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'MLB Medical College Jhansi', meta:'Govt · Multi-specialty · Jhansi', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Hospital Gorakhpur', meta:'Govt · BRD Medical College · Gorakhpur', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Regency Hospital Kanpur', meta:'Private · ICU · Emergency · Kanpur', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Harsh Hospital Meerut', meta:'Private · Multi-specialty · Meerut', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Women Hospital Bareilly', meta:'Govt · Maternity · Gynaecology · Bareilly', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      cardiac: [
        { name:'SGPGI — Cardiology', meta:'Govt · Top-ranked Cardiology in UP · Lucknow', dist:'4.8 km', badge:'Open 24/7', type:'open' },
        { name:'Sahara Heart Center Lucknow', meta:'Private · Cath Lab · Bypass Surgery', dist:'2.1 km', badge:'Emergency', type:'emg' },
        { name:'Medanta Heart Institute Lucknow', meta:'Private · Cardiothoracic Surgery · Ayushman', dist:'7.4 km', badge:'Ayushman', type:'ay' },
        { name:'BHU Cardiology Dept. Varanasi', meta:'Govt · Cardiac ICU · Interventional Cardiology', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Regency Heart Care Kanpur', meta:'Private · Angioplasty · Bypass · Kanpur', dist:'—', badge:'Emergency', type:'emg' },
      ],
      ortho: [
        { name:'KGMU — Orthopedics & Trauma', meta:'Govt · Joint Replacement · Fracture Care · Lucknow', dist:'3.5 km', badge:'Open 24/7', type:'open' },
        { name:'Apollo Medics Lucknow', meta:'Private · Orthopedics · Sports Medicine', dist:'5.2 km', badge:'Emergency', type:'emg' },
        { name:'BHU Ortho Dept. Varanasi', meta:'Govt · Trauma Surgery · Spine Care', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Fortis Bone & Joint Noida', meta:'Private · Joint Replacement · Arthroscopy', dist:'—', badge:'Emergency', type:'emg' },
      ],
      neuro: [
        { name:'SGPGI — Neurology', meta:'Govt · Stroke Unit · Epilepsy · Neurosurgery · Lucknow', dist:'4.8 km', badge:'Open 24/7', type:'open' },
        { name:'Sahara Neuro Care Lucknow', meta:'Private · MRI · EEG · Neurology OPD', dist:'2.1 km', badge:'Emergency', type:'emg' },
        { name:'BHU Neurology Varanasi', meta:'Govt · Stroke · Neuro ICU · Spine Surgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Kailash Neuro Noida', meta:'Private · Brain Surgery · Neurology Dept.', dist:'—', badge:'Ayushman', type:'ay' },
      ],
      child: [
        { name:'KGMU — Pediatrics Lucknow', meta:'Govt · NICU · Pediatric ICU · Vaccinations', dist:'3.5 km', badge:'CGHS Listed', type:'cghs' },
        { name:'Chandan Hospital Lucknow', meta:'Private · Child Specialist · 24×7 Pediatrician', dist:'1.8 km', badge:'Open 24/7', type:'open' },
        { name:'BHU Pediatrics Varanasi', meta:'Govt · SNCU · Child Health · Varanasi', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Fortis Child Care Noida', meta:'Private · Pediatric ICU · Neonatology', dist:'—', badge:'Emergency', type:'emg' },
      ],
      gynae: [
        { name:'KGMU — Obstetrics & Gynaecology', meta:'Govt · Maternity · High-risk Pregnancy · Lucknow', dist:'3.5 km', badge:'Open 24/7', type:'open' },
        { name:'Balrampur Hospital Lucknow', meta:'Govt · Gynaecology · Family Planning', dist:'4.0 km', badge:'CGHS Listed', type:'cghs' },
        { name:'BHU Obstetrics Varanasi', meta:'Govt · High-risk Pregnancy · NICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Women Hospital Agra', meta:'Govt · Maternity · Gynaecology · Agra', dist:'—', badge:'Ayushman', type:'ay' },
      ],
    },

    /* ════════════════ UTTARAKHAND ════════════════ */
    uk: {
      default: [
        { name:'AIIMS Rishikesh', meta:'Govt · All India Institute of Medical Sciences · Rishikesh', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Doon Hospital Dehradun', meta:'Govt · Government Medical College · Dehradun', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Max Hospital Dehradun', meta:'Private · Emergency · Multi-specialty · Dehradun', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Synergy Hospital Dehradun', meta:'Private · Trauma · ICU · Dehradun', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'Base Hospital Haldwani', meta:'Govt · Dr. Sushila Tiwari Medical College · Haldwani', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Hospital Haridwar', meta:'Govt · Emergency · Haridwar', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Himalayan Hospital Dehradun', meta:'HIHT · Private · Multi-specialty · Jolly Grant', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'District Hospital Nainital', meta:'Govt · Emergency · Nainital', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Nirmal Ashram Hospital Rishikesh', meta:'Charitable · Multi-specialty · Rishikesh', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Garhwal Mandal Hospital Pauri', meta:'Govt · General Surgery · Pauri Garhwal', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      cardiac: [
        { name:'AIIMS Rishikesh — Cardiology', meta:'Govt · Cardiac ICU · Cath Lab · Rishikesh', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Max Heart Care Dehradun', meta:'Private · Angioplasty · Bypass · Dehradun', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Himalayan Hospital Cardiology', meta:'Private · Interventional Cardiology · Dehradun', dist:'—', badge:'Ayushman', type:'ay' },
      ],
      ortho: [
        { name:'AIIMS Rishikesh — Orthopedics', meta:'Govt · Joint Replacement · Trauma Surgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Synergy Ortho Center Dehradun', meta:'Private · Arthroscopy · Sports Medicine', dist:'—', badge:'Emergency', type:'emg' },
      ],
      neuro: [
        { name:'AIIMS Rishikesh — Neurology', meta:'Govt · Stroke Unit · Neurosurgery · Rishikesh', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Max Neuro Dehradun', meta:'Private · MRI · Brain Surgery · Dehradun', dist:'—', badge:'Emergency', type:'emg' },
      ],
      child: [
        { name:'AIIMS Rishikesh — Pediatrics', meta:'Govt · NICU · Pediatric ICU · Rishikesh', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Base Hospital Haldwani — Pediatrics', meta:'Govt · Child Health · SNCU · Haldwani', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      gynae: [
        { name:'AIIMS Rishikesh — OB/GYN', meta:'Govt · High-risk Pregnancy · Rishikesh', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Doon Hospital — Maternity', meta:'Govt · Maternity Ward · Dehradun', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
    },

    /* ════════════════ HIMACHAL PRADESH ════════════════ */
    hp: {
      default: [
        { name:'IGMC Shimla', meta:'Indira Gandhi Medical College · Govt · All Specialties · Shimla', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'DDU Hospital Shimla', meta:'Govt · District Hospital · Shimla', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'DRPGMC Kangra (Tanda)', meta:'Govt · Medical College · Dharamshala/Kangra', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Zonal Hospital Mandi', meta:'Govt · Emergency · Multi-specialty · Mandi', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'Regional Hospital Kullu', meta:'Govt · Emergency · Kullu', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Fortis Hospital Kangra', meta:'Private · Emergency · Multi-specialty · Kangra', dist:'—', badge:'Emergency', type:'emg' },
        { name:'IGMC — Cardiology Shimla', meta:'Govt · Cardiac ICU · Shimla', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Hospital Solan', meta:'Govt · Emergency · Surgery · Solan', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Regional Hospital Hamirpur', meta:'Govt · Multi-specialty · Hamirpur', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Zonal Hospital Bilaspur', meta:'Govt · Emergency · Bilaspur', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      cardiac: [
        { name:'IGMC — Cardiology Shimla', meta:'Govt · Cardiac Cath Lab · Shimla', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Fortis Heart Care Kangra', meta:'Private · Angioplasty · Kangra', dist:'—', badge:'Emergency', type:'emg' },
      ],
      ortho: [
        { name:'IGMC — Orthopedics Shimla', meta:'Govt · Joint Replacement · Spine · Shimla', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'DRPGMC — Ortho Kangra', meta:'Govt · Fracture Care · Kangra', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      neuro: [
        { name:'IGMC — Neurosurgery Shimla', meta:'Govt · Brain Surgery · Stroke Unit · Shimla', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      child: [
        { name:'IGMC — Pediatrics Shimla', meta:'Govt · NICU · Child Health · Shimla', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'DRPGMC Pediatrics Kangra', meta:'Govt · SNCU · Pediatric OPD · Kangra', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      gynae: [
        { name:'IGMC — Obstetrics Shimla', meta:'Govt · Maternity · High-risk Pregnancy · Shimla', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Zonal Hospital Mandi — Gynae', meta:'Govt · Maternity · Family Planning · Mandi', dist:'—', badge:'Ayushman', type:'ay' },
      ],
    },

    /* ════════════════ HARYANA ════════════════ */
    hr: {
      default: [
        { name:'PGIMS Rohtak', meta:'Post Graduate Institute of Medical Sciences · Govt · Rohtak', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Civil Hospital Gurgaon', meta:'Govt · Emergency · Multi-specialty · Gurgaon', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Medanta Gurgaon', meta:'Private · Multi-specialty · Ayushman · Gurgaon', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'Fortis Memorial Gurgaon', meta:'Private · Emergency · Cath Lab · Gurgaon', dist:'—', badge:'Emergency', type:'emg' },
        { name:'BPS Govt Medical College Sonipat', meta:'Govt · Women & Child Hospital · Khanpur Kalan', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Civil Hospital Faridabad', meta:'Govt · Emergency · Faridabad', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Maharaja Agrasen Hospital Hisar', meta:'Govt · Multi-specialty · Hisar', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Artemis Hospital Gurgaon', meta:'Private · Cardiac · Neuro · Gurgaon', dist:'—', badge:'Emergency', type:'emg' },
        { name:'District Hospital Ambala', meta:'Govt · Emergency · Surgery · Ambala', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Pandit Bhagwat Dayal Hospital Kurukshetra', meta:'Govt · Multi-specialty · Kurukshetra', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      cardiac: [
        { name:'PGIMS — Cardiology Rohtak', meta:'Govt · Cardiac Cath Lab · Cardiac ICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Medanta Heart Institute Gurgaon', meta:'Private · Bypass Surgery · Angioplasty', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'Fortis Cardiac Care Gurgaon', meta:'Private · Interventional Cardiology', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Artemis Cardiology Gurgaon', meta:'Private · Cath Lab · EP Studies', dist:'—', badge:'Emergency', type:'emg' },
      ],
      ortho: [
        { name:'PGIMS — Orthopedics Rohtak', meta:'Govt · Joint Replacement · Trauma', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Fortis Bone & Joint Gurgaon', meta:'Private · Arthroscopy · Sports Injury', dist:'—', badge:'Emergency', type:'emg' },
      ],
      neuro: [
        { name:'PGIMS — Neurology Rohtak', meta:'Govt · Stroke Unit · Neurosurgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Medanta Neuro Institute Gurgaon', meta:'Private · Brain Surgery · Spine Care', dist:'—', badge:'Ayushman', type:'ay' },
      ],
      child: [
        { name:'PGIMS — Pediatrics Rohtak', meta:'Govt · NICU · Pediatric ICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'BPS Medical College — Child Dept.', meta:'Govt · Pediatrics · SNCU · Sonipat', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      gynae: [
        { name:'PGIMS — Obstetrics Rohtak', meta:'Govt · Maternity · High-risk Pregnancy', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'BPS Medical College — Gynaecology', meta:'Govt · Women Health · Maternity', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
    },

    /* ════════════════ RAJASTHAN ════════════════ */
    rj: {
      default: [
        { name:'SMS Hospital Jaipur', meta:'Sawai Man Singh · Govt · Largest Hospital in Rajasthan · Jaipur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'AIIMS Jodhpur', meta:'Govt · All Specialties · Jodhpur', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Mahatma Gandhi Hospital Jodhpur', meta:'Govt · Medical College · Jodhpur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Fortis Hospital Jaipur', meta:'Private · Emergency · Multi-specialty · Jaipur', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Narayana Multispecialty Jaipur', meta:'Private · Cardiac · Ayushman · Jaipur', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'RNT Medical College Udaipur', meta:'Govt · All Specialties · Udaipur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'JLN Medical College Ajmer', meta:'Govt · Emergency · Multi-specialty · Ajmer', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'District Hospital Kota', meta:'Govt · Emergency · Kota', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'SN Medical College Bikaner', meta:'Govt · Multi-specialty · Bikaner', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Eternal Hospital Jaipur', meta:'Private · Cardiac · Neuro · Jaipur', dist:'—', badge:'Emergency', type:'emg' },
      ],
      cardiac: [
        { name:'SMS — Cardiology Jaipur', meta:'Govt · Cardiac Cath Lab · Open Heart Surgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'AIIMS Jodhpur — Cardiology', meta:'Govt · Interventional Cardiology', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Eternal Heart Care Jaipur', meta:'Private · Bypass · Angioplasty · Jaipur', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Narayana Heart Jaipur', meta:'Private · Cardiac Surgery · Ayushman', dist:'—', badge:'Ayushman', type:'ay' },
      ],
      ortho: [
        { name:'SMS — Orthopedics Jaipur', meta:'Govt · Joint Replacement · Spine · Jaipur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'AIIMS Jodhpur — Orthopedics', meta:'Govt · Trauma Surgery · Jodhpur', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Fortis Orthopedics Jaipur', meta:'Private · Arthroscopy · Sports Medicine', dist:'—', badge:'Emergency', type:'emg' },
      ],
      neuro: [
        { name:'SMS — Neurology Jaipur', meta:'Govt · Stroke Unit · Neurosurgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'AIIMS Jodhpur — Neurology', meta:'Govt · Brain Surgery · Epilepsy', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Eternal Neuro Jaipur', meta:'Private · MRI · Spine Surgery', dist:'—', badge:'Emergency', type:'emg' },
      ],
      child: [
        { name:'JK Lon Hospital Jaipur', meta:'Govt · Dedicated Children\'s Hospital · Jaipur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'AIIMS Jodhpur — Pediatrics', meta:'Govt · NICU · Pediatric ICU', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      gynae: [
        { name:'SMS — Obstetrics Jaipur', meta:'Govt · Maternity · High-risk Pregnancy', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Mahila Chikitsalaya Jaipur', meta:'Govt · Women\'s Hospital · Jaipur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'RNT — Gynaecology Udaipur', meta:'Govt · Maternity · Family Planning', dist:'—', badge:'Ayushman', type:'ay' },
      ],
    },

    /* ════════════════ MADHYA PRADESH ════════════════ */
    mp: {
      default: [
        { name:'AIIMS Bhopal', meta:'Govt · All Specialties · Trauma Center · Bhopal', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Hamidia Hospital Bhopal', meta:'Govt · Gandhi Medical College · Bhopal', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'MY Hospital Indore', meta:'Govt · MGM Medical College · Indore', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Choithram Hospital Indore', meta:'Private · Multi-specialty · ICU · Indore', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'Bombay Hospital Indore', meta:'Private · Emergency · Cardiac · Indore', dist:'—', badge:'Emergency', type:'emg' },
        { name:'NSCB Medical College Jabalpur', meta:'Govt · All Specialties · Jabalpur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Hospital Gwalior', meta:'Govt · Gajra Raja Medical College · Gwalior', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Bansal Hospital Bhopal', meta:'Private · Emergency · Multi-specialty · Bhopal', dist:'—', badge:'Emergency', type:'emg' },
        { name:'RD Gardi Medical College Ujjain', meta:'Govt · All Specialties · Ujjain', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Hospital Rewa', meta:'Govt · Emergency · Multi-specialty · Rewa', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      cardiac: [
        { name:'AIIMS Bhopal — Cardiology', meta:'Govt · Cardiac ICU · Cath Lab · Bhopal', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Bombay Hospital Cardiac Indore', meta:'Private · Bypass · Angioplasty · Indore', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Choithram Heart Care Indore', meta:'Private · Interventional Cardiology', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'Hamidia — Cardiology Bhopal', meta:'Govt · Cardiac Cath Lab · Bhopal', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      ortho: [
        { name:'AIIMS Bhopal — Orthopedics', meta:'Govt · Trauma · Joint Replacement', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'MY Hospital — Ortho Indore', meta:'Govt · Fracture Care · Spine Surgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Choithram Orthopedics Indore', meta:'Private · Sports Medicine · Arthroscopy', dist:'—', badge:'Ayushman', type:'ay' },
      ],
      neuro: [
        { name:'AIIMS Bhopal — Neurology', meta:'Govt · Stroke Unit · Neurosurgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Bombay Hospital Neuro Indore', meta:'Private · MRI · Brain Surgery', dist:'—', badge:'Emergency', type:'emg' },
      ],
      child: [
        { name:'AIIMS Bhopal — Pediatrics', meta:'Govt · NICU · Pediatric ICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'MY Hospital — Pediatrics Indore', meta:'Govt · Child Health · SNCU · Indore', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      gynae: [
        { name:'AIIMS Bhopal — OB/GYN', meta:'Govt · High-risk Pregnancy · Maternity', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Sultania Zanana Hospital Bhopal', meta:'Govt · Dedicated Women\'s Hospital', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'MY Hospital — Gynaecology Indore', meta:'Govt · Maternity · Family Planning', dist:'—', badge:'Open 24/7', type:'open' },
      ],
    },

    /* ════════════════ BIHAR ════════════════ */
    br: {
      default: [
        { name:'PMCH Patna', meta:'Patna Medical College & Hospital · Govt · Largest in Bihar · Patna', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'AIIMS Patna', meta:'Govt · All India Institute of Medical Sciences · Patna', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'NMCH Patna', meta:'Nalanda Medical College · Govt · Multi-specialty · Patna', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Ruban Memorial Hospital Patna', meta:'Private · Emergency · ICU · Patna', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Paras HMRI Hospital Patna', meta:'Private · Multi-specialty · Ayushman · Patna', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'JLNMCH Bhagalpur', meta:'Govt · Jawaharlal Nehru Medical College · Bhagalpur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'ANMCH Gaya', meta:'Govt · Anugrah Narayan Medical College · Gaya', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Hospital Muzaffarpur', meta:'Govt · Emergency · Muzaffarpur', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Darbhanga Medical College', meta:'Govt · DMCH · All Specialties · Darbhanga', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Big Apollo Spectra Patna', meta:'Private · Multi-specialty · Patna', dist:'—', badge:'Emergency', type:'emg' },
      ],
      cardiac: [
        { name:'AIIMS Patna — Cardiology', meta:'Govt · Cardiac ICU · Cath Lab', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'PMCH — Cardiology Patna', meta:'Govt · Cardiac Surgery · Patna', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Paras HMRI Heart Patna', meta:'Private · Bypass · Angioplasty', dist:'—', badge:'Ayushman', type:'ay' },
      ],
      ortho: [
        { name:'AIIMS Patna — Orthopedics', meta:'Govt · Joint Replacement · Trauma', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'PMCH — Orthopedics Patna', meta:'Govt · Fracture Care · Spine', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Ruban Ortho Center Patna', meta:'Private · Sports Medicine · Arthroscopy', dist:'—', badge:'Emergency', type:'emg' },
      ],
      neuro: [
        { name:'AIIMS Patna — Neurology', meta:'Govt · Stroke Unit · Neurosurgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'PMCH — Neurology Patna', meta:'Govt · Brain Surgery · EEG · Patna', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      child: [
        { name:'AIIMS Patna — Pediatrics', meta:'Govt · NICU · Pediatric ICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'PMCH — Pediatrics Patna', meta:'Govt · SNCU · Child Health', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'SKMCH Muzaffarpur', meta:'Govt · Child Health · Encephalitis Center', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      gynae: [
        { name:'AIIMS Patna — OB/GYN', meta:'Govt · High-risk Pregnancy · NICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'PMCH — Obstetrics Patna', meta:'Govt · Maternity · Family Planning', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Nalanda Women Hospital Patna', meta:'Private · Maternity · Gynaecology', dist:'—', badge:'Ayushman', type:'ay' },
      ],
    },

    /* ════════════════ JHARKHAND ════════════════ */
    jh: {
      default: [
        { name:'RIMS Ranchi', meta:'Rajendra Institute of Medical Sciences · Govt · Ranchi', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'PMCH Dhanbad', meta:'Govt · Patliputra Medical College · Dhanbad', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'MGMH Jamshedpur', meta:'Govt · MGM Medical College · Jamshedpur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Tata Main Hospital Jamshedpur', meta:'Tata Steel · Multi-specialty · Jamshedpur', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Medica Super Specialty Ranchi', meta:'Private · ICU · Emergency · Ranchi', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'Sadar Hospital Ranchi', meta:'Govt · General & Specialist OPD · Ranchi', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'SNMMCH Dhanbad', meta:'Govt · SNM Medical College · Dhanbad', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Hospital Hazaribagh', meta:'Govt · Emergency · Hazaribagh', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Columbia Asia Hospital Ranchi', meta:'Private · Emergency · Multi-specialty', dist:'—', badge:'Emergency', type:'emg' },
        { name:'District Hospital Giridih', meta:'Govt · Emergency · Giridih', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      cardiac: [
        { name:'RIMS — Cardiology Ranchi', meta:'Govt · Cardiac Cath Lab · Ranchi', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Tata Main Hospital Cardiology', meta:'Industry · Cath Lab · Bypass · Jamshedpur', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Medica Cardiac Ranchi', meta:'Private · Interventional Cardiology', dist:'—', badge:'Ayushman', type:'ay' },
      ],
      ortho: [
        { name:'RIMS — Orthopedics Ranchi', meta:'Govt · Joint Replacement · Trauma', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'MGMH — Ortho Jamshedpur', meta:'Govt · Fracture Care · Spine', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      neuro: [
        { name:'RIMS — Neurology Ranchi', meta:'Govt · Stroke Unit · Neurosurgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Columbia Asia Neuro Ranchi', meta:'Private · Brain Surgery · MRI', dist:'—', badge:'Emergency', type:'emg' },
      ],
      child: [
        { name:'RIMS — Pediatrics Ranchi', meta:'Govt · NICU · Pediatric ICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'MGMH — Pediatrics Jamshedpur', meta:'Govt · SNCU · Child Health', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      gynae: [
        { name:'RIMS — OB/GYN Ranchi', meta:'Govt · Maternity · High-risk Pregnancy', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Sadar Hospital — Maternity Ranchi', meta:'Govt · Maternity Ward · Family Planning', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
    },

    /* ════════════════ CHHATTISGARH ════════════════ */
    cg: {
      default: [
        { name:'AIIMS Raipur', meta:'Govt · All India Institute of Medical Sciences · Raipur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Dr. Bhimrao Ambedkar Hospital Raipur', meta:'Govt · Multi-specialty · Raipur', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Ramkrishna Care Hospital Raipur', meta:'Private · Emergency · ICU · Raipur', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Apollo BSR Hospital Bhilai', meta:'Private · Multi-specialty · Ayushman · Bhilai', dist:'—', badge:'Ayushman', type:'ay' },
        { name:'CIMS Hospital Bilaspur', meta:'Govt · Chhattisgarh Institute of Medical Sciences · Bilaspur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'District Hospital Durg', meta:'Govt · Emergency · Multi-specialty · Durg', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'LB Shastri Hospital Jagdalpur', meta:'Govt · Emergency · Bastar Region · Jagdalpur', dist:'—', badge:'CGHS Listed', type:'cghs' },
        { name:'Shri Balaji Hospital Raipur', meta:'Private · Cardiac · Ortho · Raipur', dist:'—', badge:'Emergency', type:'emg' },
        { name:'District Hospital Ambikapur', meta:'Govt · Emergency · Surguja · Ambikapur', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'GMCH Rajnandgaon', meta:'Govt · Medical College · Rajnandgaon', dist:'—', badge:'Open 24/7', type:'open' },
      ],
      cardiac: [
        { name:'AIIMS Raipur — Cardiology', meta:'Govt · Cardiac Cath Lab · Cardiac ICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Ramkrishna Care Heart Raipur', meta:'Private · Bypass · Angioplasty', dist:'—', badge:'Emergency', type:'emg' },
        { name:'Apollo BSR Cardiology Bhilai', meta:'Private · Interventional Cardiology', dist:'—', badge:'Ayushman', type:'ay' },
      ],
      ortho: [
        { name:'AIIMS Raipur — Orthopedics', meta:'Govt · Joint Replacement · Trauma', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Dr. Ambedkar Hospital Ortho', meta:'Govt · Fracture Care · Spine Surgery', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      neuro: [
        { name:'AIIMS Raipur — Neurology', meta:'Govt · Stroke Unit · Neurosurgery', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Ramkrishna Care Neuro Raipur', meta:'Private · MRI · Brain Surgery', dist:'—', badge:'Emergency', type:'emg' },
      ],
      child: [
        { name:'AIIMS Raipur — Pediatrics', meta:'Govt · NICU · Pediatric ICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'CIMS — Pediatrics Bilaspur', meta:'Govt · Child Health · SNCU · Bilaspur', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
      gynae: [
        { name:'AIIMS Raipur — OB/GYN', meta:'Govt · High-risk Pregnancy · NICU', dist:'—', badge:'Open 24/7', type:'open' },
        { name:'Dr. Ambedkar Hospital — Gynaecology', meta:'Govt · Maternity · Family Planning · Raipur', dist:'—', badge:'CGHS Listed', type:'cghs' },
      ],
    },

  }, // end hospitals

  specialists: [
    { icon:'❤️', name:'Cardiology',  desc:'Heart & BP',       key:'cardiac' },
    { icon:'🦴', name:'Orthopedics', desc:'Bones & Joints',   key:'ortho'   },
    { icon:'🧠', name:'Neurology',   desc:'Brain & Nerves',   key:'neuro'   },
    { icon:'👶', name:'Pediatrics',  desc:'Child Health',     key:'child'   },
    { icon:'🌸', name:'Gynecology',  desc:"Women's Health",   key:'gynae'   },
    { icon:'🩺', name:'General',     desc:'All Conditions',   key:'default' },
  ],

  accidentTypes: [
    { id:'city', icon:'🏙️', label:'City / Urban',  labelH:'शहर / नगर' },
    { id:'nh',   icon:'🛣️', label:'National Hwy',  labelH:'राष्ट्रीय राजमार्ग' },
    { id:'sh',   icon:'🌳', label:'State Hwy',     labelH:'राज्य राजमार्ग' },
  ],

  emergencyNumbers: {
    city: [
      { name:'National Emergency', nameH:'राष्ट्रीय आपातकाल', num:'112' },
      { name:'Ambulance (FREE)',   nameH:'एम्बुलेंस (मुफ़्त)',   num:'108' },
      { name:'UP Police',         nameH:'UP पुलिस',         num:'100' },
      { name:'Fire Brigade',      nameH:'दमकल',             num:'101' },
      { name:'Lucknow Control',   nameH:'लखनऊ कंट्रोल',     num:'1090' },
    ],
    nh: [
      { name:'National Emergency', nameH:'राष्ट्रीय आपातकाल', num:'112' },
      { name:'Ambulance (FREE)',   nameH:'एम्बुलेंस (मुफ़्त)',   num:'108' },
      { name:'NHAI Helpline',     nameH:'NHAI हेल्पलाइन',   num:'1033' },
      { name:'Highway Police',    nameH:'हाईवे पुलिस',      num:'100' },
      { name:'Road Accident',     nameH:'सड़क दुर्घटना',     num:'1073' },
    ],
    sh: [
      { name:'National Emergency', nameH:'राष्ट्रीय आपातकाल',  num:'112' },
      { name:'Ambulance (FREE)',   nameH:'एम्बुलेंस (मुफ़्त)',    num:'108' },
      { name:'UP PWD Helpline',   nameH:'UP PWD हेल्पलाइन',   num:'18001805480' },
      { name:'State Police',      nameH:'राज्य पुलिस',        num:'100' },
      { name:'District Control',  nameH:'जिला नियंत्रण कक्ष',  num:'1070' },
    ],
  },

  accidentSteps: [
    '<strong>Stay calm</strong> — switch on vehicle hazard lights and turn off ignition.',
    '<strong>Call 112 immediately</strong> — give your exact location, landmark, or highway km marker.',
    '<strong>Do not move the victim</strong> unless there is immediate fire or flood risk.',
    '<strong>Check breathing</strong> — if unconscious and not breathing, start CPR (see First Aid tab).',
    '<strong>Control bleeding</strong> — apply firm pressure with a clean cloth. Do not remove it.',
    '<strong>Open Vatsalya Emergency Profile</strong> to show responders blood group & contacts.',
  ],

  bleedingSteps: [
    'Apply direct, firm pressure using a clean cloth or bandage.',
    'Elevate the injured limb above heart level if safely possible.',
    'Do not remove the cloth — layer more material on top if soaked.',
    'Use a tourniquet only as a last resort for life-threatening limb bleeding.',
  ],

  fractureSteps: [
    'Do not attempt to realign or push the bone back into place.',
    'Immobilize with a splint — use a rolled magazine, cardboard, or sticks.',
    'Pad the splint with cloth and tie gently above and below the fracture.',
    'Apply ice wrapped in cloth (never directly on skin) to reduce swelling.',
  ],

  schemes: [
    {
      name: 'Ayushman Bharat – PM-JAY', type:'central', typeLabel:'Central',
      desc: 'Cashless health cover for economically weaker families. Covers hospitalization, surgery, critical illness, day-care procedures at empanelled hospitals across India.',
      benefit: 'Up to ₹5 lakh / family / year',
    },
    {
      name: 'CGHS — Central Govt. Health Scheme', type:'central', typeLabel:'Central',
      desc: 'Comprehensive healthcare for central government employees, pensioners, and their dependents. OPD, hospitalization, specialists, and medicines at CGHS wellness centres.',
      benefit: 'OPD + IPD + Medicines covered',
    },
    {
      name: 'UP Mukhyamantri Jan Arogya Yojana', type:'state', typeLabel:'State — UP',
      desc: 'Extension of Ayushman Bharat for UP residents not covered under PM-JAY. Covers treatments at government and private empanelled hospitals in Uttar Pradesh.',
      benefit: 'Up to ₹5 lakh / year',
    },
    {
      name: 'National Ambulance Service (108)', type:'central', typeLabel:'Central',
      desc: 'Free 24×7 emergency ambulance service covering road accidents, cardiac events, obstetric emergencies, stroke, and more. Available across all Indian states.',
      benefit: 'Free — dial 108 anytime',
    },
    {
      name: 'PM Suraksha Bima Yojana', type:'central', typeLabel:'Central',
      desc: 'Accidental death and disability insurance for bank account holders aged 18–70 at a nominal annual premium auto-debited from your account.',
      benefit: '₹2 lakh cover at just ₹20 / year',
    },
  ],
};

/* ══════════════════════════════════════
   LANGUAGE
══════════════════════════════════════ */

let isHindi = false;

const TRANSLATIONS = {
  'state-label':    ['SELECT STATE',                              'राज्य चुनें'],
  'logo-sub':       ['AI Healthcare & Emergency Platform',         'AI स्वास्थ्य एवं आपातकालीन मंच'],
  'sos-title':      ['Emergency SOS',                              'आपातकालीन SOS'],
  'sos-sub':        ['Tap to call national helpline immediately',  'राष्ट्रीय हेल्पलाइन पर तुरंत कॉल करें'],
  'tl-hosp':        ['Find Hospital',                              'अस्पताल खोजें'],
  'tl-acc':         ['Accident Help',                              'दुर्घटना सहायता'],
  'tl-fa':          ['First Aid',                                  'प्राथमिक उपचार'],
  'tl-sc':          ['Govt. Schemes',                              'सरकारी योजनाएं'],
  'tl-pr':          ['My Profile',                                 'मेरी प्रोफ़ाइल'],
  'h-title':        ['Find Nearest Hospital / Specialist',         'निकटतम अस्पताल / विशेषज्ञ खोजें'],
  'h-sub':          ['Search by symptom, specialty, or city name', 'लक्षण, विशेषज्ञता या शहर से खोजें'],
  'h-spec-title':   ['Browse by Specialist',                       'विशेषज्ञ द्वारा खोजें'],
  'a-title':        ['Accident Assistance Module',                 'दुर्घटना सहायता मॉड्यूल'],
  'a-sub':          ['Select your accident location to get correct emergency contacts', 'सही आपातकालीन संपर्क के लिए दुर्घटना का स्थान चुनें'],
  'a-emg-label':    ['EMERGENCY CONTACTS',                         'आपातकालीन संपर्क'],
  'a-steps-title':  ['Immediate Action Steps',                     'तत्काल कार्रवाई के चरण'],
  'fa-cpr-title':   ['CPR Guide',                                  'CPR गाइड'],
  'fa-cpr-sub':     ['For unconscious victim not breathing — act immediately', 'बेहोश व्यक्ति जो सांस नहीं ले रहा — तुरंत कार्य करें'],
  'fa-bl-title':    ['Bleeding Control',                           'रक्तस्राव नियंत्रण'],
  'fa-fr-title':    ['Fracture Stabilization',                     'हड्डी टूटने पर प्राथमिक उपचार'],
  'sc-title':       ['Government Healthcare Schemes',              'सरकारी स्वास्थ्य योजनाएं'],
  'sc-sub':         ['Central and State welfare programs available to you', 'आपके लिए उपलब्ध केंद्रीय और राज्य कल्याण कार्यक्रम'],
  'pr-title':       ['Emergency Health Profile',                   'आपातकालीन स्वास्थ्य प्रोफ़ाइल'],
  'pr-sub':         ['Fill this once. It could save your life — shown instantly to responders.', 'एक बार भरें। यह आपकी जान बचा सकता है।'],
  'pf-name':        ['Full Name',                                  'पूरा नाम'],
  'pf-age':         ['Age',                                        'आयु'],
  'pf-blood':       ['Blood Group',                                'रक्त समूह'],
  'pf-phone':       ['Emergency Contact',                          'आपातकालीन संपर्क'],
  'pf-allergy':     ['Known Allergies',                            'ज्ञात एलर्जी'],
  'pf-conditions':  ['Existing Medical Conditions',                'मौजूदा चिकित्सा स्थितियां'],
  'pf-insurance':   ['Ayushman / CGHS / Insurance Card No.',       'आयुष्मान / CGHS / बीमा कार्ड नंबर'],
  'save-label':     ['Save Emergency Profile',                     'प्रोफ़ाइल सहेजें'],
};

function toggleLang() {
  isHindi = !isHindi;
  const idx = isHindi ? 1 : 0;
  Object.entries(TRANSLATIONS).forEach(([id, pair]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = pair[idx];
  });
  // Re-render dynamic parts that depend on language
  renderAccidentTypes();
  renderEmergencyNumbers(currentAccType);
}

/* ══════════════════════════════════════
   TABS
══════════════════════════════════════ */

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('sec-' + btn.dataset.tab).classList.add('active');
  });
});

/* ══════════════════════════════════════
   HOSPITALS
══════════════════════════════════════ */



const STATE_OPTIONS = {"up": {"name": "Uttar Pradesh", "cities": ["Kanpur", "Lucknow", "Noida", "Varanasi", "Prayagraj", "Agra", "Meerut", "Gorakhpur", "Bareilly", "Jhansi"]}, "dl": {"name": "Delhi NCR", "cities": ["New Delhi", "South Delhi", "East Delhi", "Gurugram", "Noida", "Ghaziabad"]}, "hr": {"name": "Haryana", "cities": ["Gurugram", "Faridabad", "Rohtak", "Hisar", "Ambala", "Panipat"]}, "pb": {"name": "Punjab", "cities": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali"]}, "uk": {"name": "Uttarakhand", "cities": ["Dehradun", "Rishikesh", "Haridwar", "Haldwani", "Nainital"]}, "rj": {"name": "Rajasthan", "cities": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"]}, "mp": {"name": "Madhya Pradesh", "cities": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Rewa"]}, "br": {"name": "Bihar", "cities": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"]}, "jh": {"name": "Jharkhand", "cities": ["Ranchi", "Jamshedpur", "Dhanbad", "Hazaribagh"]}, "cg": {"name": "Chhattisgarh", "cities": ["Raipur", "Bilaspur", "Durg", "Korba"]}};

const EXTENDED_HOSPITALS = [{"name": "Regency Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Kanpur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Kanpur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "LPS Institute of Cardiology", "stateCode": "up", "state": "Uttar Pradesh", "city": "Kanpur", "type": "emg", "badge": "Emergency", "meta": "Private · Kanpur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "GSVM Medical College", "stateCode": "up", "state": "Uttar Pradesh", "city": "Kanpur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Kanpur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "UHM District Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Kanpur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Kanpur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "SGPGI Lucknow", "stateCode": "up", "state": "Uttar Pradesh", "city": "Lucknow", "type": "open", "badge": "Open 24/7", "meta": "Govt · Lucknow · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "KGMU Trauma Centre", "stateCode": "up", "state": "Uttar Pradesh", "city": "Lucknow", "type": "emg", "badge": "Emergency", "meta": "Private · Lucknow · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Medanta Lucknow", "stateCode": "up", "state": "Uttar Pradesh", "city": "Lucknow", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Lucknow · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Ram Manohar Lohia Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Lucknow", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Lucknow · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Fortis Hospital Noida", "stateCode": "up", "state": "Uttar Pradesh", "city": "Noida", "type": "open", "badge": "Open 24/7", "meta": "Govt · Noida · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Jaypee Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Noida", "type": "emg", "badge": "Emergency", "meta": "Private · Noida · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Yatharth Super Speciality Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Noida", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Noida · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Noida", "stateCode": "up", "state": "Uttar Pradesh", "city": "Noida", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Noida · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "BHU Sir Sunderlal Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Varanasi", "type": "open", "badge": "Open 24/7", "meta": "Govt · Varanasi · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Heritage Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Varanasi", "type": "emg", "badge": "Emergency", "meta": "Private · Varanasi · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Apex Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Varanasi", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Varanasi · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Varanasi", "stateCode": "up", "state": "Uttar Pradesh", "city": "Varanasi", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Varanasi · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "SRN Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Prayagraj", "type": "open", "badge": "Open 24/7", "meta": "Govt · Prayagraj · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Nazareth Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Prayagraj", "type": "emg", "badge": "Emergency", "meta": "Private · Prayagraj · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "United Medicity", "stateCode": "up", "state": "Uttar Pradesh", "city": "Prayagraj", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Prayagraj · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Beli Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Prayagraj", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Prayagraj · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "SN Medical College", "stateCode": "up", "state": "Uttar Pradesh", "city": "Agra", "type": "open", "badge": "Open 24/7", "meta": "Govt · Agra · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Pushpanjali Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Agra", "type": "emg", "badge": "Emergency", "meta": "Private · Agra · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Rainbow Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Agra", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Agra · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Agra", "stateCode": "up", "state": "Uttar Pradesh", "city": "Agra", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Agra · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "LLRM Medical College", "stateCode": "up", "state": "Uttar Pradesh", "city": "Meerut", "type": "open", "badge": "Open 24/7", "meta": "Govt · Meerut · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Anand Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Meerut", "type": "emg", "badge": "Emergency", "meta": "Private · Meerut · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "KMC Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Meerut", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Meerut · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Meerut", "stateCode": "up", "state": "Uttar Pradesh", "city": "Meerut", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Meerut · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "BRD Medical College", "stateCode": "up", "state": "Uttar Pradesh", "city": "Gorakhpur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Gorakhpur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Star Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Gorakhpur", "type": "emg", "badge": "Emergency", "meta": "Private · Gorakhpur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Fatima Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Gorakhpur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Gorakhpur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Gorakhpur", "stateCode": "up", "state": "Uttar Pradesh", "city": "Gorakhpur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Gorakhpur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "SRMS Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Bareilly", "type": "open", "badge": "Open 24/7", "meta": "Govt · Bareilly · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Rohilkhand Medical College", "stateCode": "up", "state": "Uttar Pradesh", "city": "Bareilly", "type": "emg", "badge": "Emergency", "meta": "Private · Bareilly · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Clara Swain Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Bareilly", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Bareilly · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Bareilly", "stateCode": "up", "state": "Uttar Pradesh", "city": "Bareilly", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Bareilly · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "MLB Medical College", "stateCode": "up", "state": "Uttar Pradesh", "city": "Jhansi", "type": "open", "badge": "Open 24/7", "meta": "Govt · Jhansi · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Maharani Laxmi Bai Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Jhansi", "type": "emg", "badge": "Emergency", "meta": "Private · Jhansi · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Life Line Hospital", "stateCode": "up", "state": "Uttar Pradesh", "city": "Jhansi", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Jhansi · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Jhansi", "stateCode": "up", "state": "Uttar Pradesh", "city": "Jhansi", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Jhansi · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "AIIMS Delhi", "stateCode": "dl", "state": "Delhi NCR", "city": "New Delhi", "type": "open", "badge": "Open 24/7", "meta": "Govt · New Delhi · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Safdarjung Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "New Delhi", "type": "emg", "badge": "Emergency", "meta": "Private · New Delhi · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "RML Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "New Delhi", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · New Delhi · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Sir Ganga Ram Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "New Delhi", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · New Delhi · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Max Saket", "stateCode": "dl", "state": "Delhi NCR", "city": "South Delhi", "type": "open", "badge": "Open 24/7", "meta": "Govt · South Delhi · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Apollo Hospital Delhi", "stateCode": "dl", "state": "Delhi NCR", "city": "South Delhi", "type": "emg", "badge": "Emergency", "meta": "Private · South Delhi · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Batra Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "South Delhi", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · South Delhi · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Moolchand Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "South Delhi", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · South Delhi · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Max Patparganj", "stateCode": "dl", "state": "Delhi NCR", "city": "East Delhi", "type": "open", "badge": "Open 24/7", "meta": "Govt · East Delhi · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "LBS Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "East Delhi", "type": "emg", "badge": "Emergency", "meta": "Private · East Delhi · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Hedgewar Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "East Delhi", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · East Delhi · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Metro Hospital Preet Vihar", "stateCode": "dl", "state": "Delhi NCR", "city": "East Delhi", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · East Delhi · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Medanta Gurugram", "stateCode": "dl", "state": "Delhi NCR", "city": "Gurugram", "type": "open", "badge": "Open 24/7", "meta": "Govt · Gurugram · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Artemis Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "Gurugram", "type": "emg", "badge": "Emergency", "meta": "Private · Gurugram · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Civil Hospital Gurugram", "stateCode": "dl", "state": "Delhi NCR", "city": "Gurugram", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Gurugram · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Fortis Memorial Research Institute", "stateCode": "dl", "state": "Delhi NCR", "city": "Gurugram", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Gurugram · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Fortis Hospital Noida", "stateCode": "dl", "state": "Delhi NCR", "city": "Noida", "type": "open", "badge": "Open 24/7", "meta": "Govt · Noida · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Jaypee Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "Noida", "type": "emg", "badge": "Emergency", "meta": "Private · Noida · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Yatharth Super Speciality Hospital", "stateCode": "dl", "state": "Delhi NCR", "city": "Noida", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Noida · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Noida", "stateCode": "dl", "state": "Delhi NCR", "city": "Noida", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Noida · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Yashoda Hospital Kaushambi", "stateCode": "dl", "state": "Delhi NCR", "city": "Ghaziabad", "type": "open", "badge": "Open 24/7", "meta": "Govt · Ghaziabad · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Max Vaishali", "stateCode": "dl", "state": "Delhi NCR", "city": "Ghaziabad", "type": "emg", "badge": "Emergency", "meta": "Private · Ghaziabad · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "District Hospital Ghaziabad", "stateCode": "dl", "state": "Delhi NCR", "city": "Ghaziabad", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Ghaziabad · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Santosh Medical College", "stateCode": "dl", "state": "Delhi NCR", "city": "Ghaziabad", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Ghaziabad · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Medanta Gurugram", "stateCode": "hr", "state": "Haryana", "city": "Gurugram", "type": "open", "badge": "Open 24/7", "meta": "Govt · Gurugram · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Artemis Hospital", "stateCode": "hr", "state": "Haryana", "city": "Gurugram", "type": "emg", "badge": "Emergency", "meta": "Private · Gurugram · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Civil Hospital Gurugram", "stateCode": "hr", "state": "Haryana", "city": "Gurugram", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Gurugram · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Fortis Memorial Research Institute", "stateCode": "hr", "state": "Haryana", "city": "Gurugram", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Gurugram · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Amrita Hospital Faridabad", "stateCode": "hr", "state": "Haryana", "city": "Faridabad", "type": "open", "badge": "Open 24/7", "meta": "Govt · Faridabad · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Fortis Escorts Faridabad", "stateCode": "hr", "state": "Haryana", "city": "Faridabad", "type": "emg", "badge": "Emergency", "meta": "Private · Faridabad · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Civil Hospital Faridabad", "stateCode": "hr", "state": "Haryana", "city": "Faridabad", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Faridabad · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Asian Institute of Medical Sciences", "stateCode": "hr", "state": "Haryana", "city": "Faridabad", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Faridabad · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "PGIMS Rohtak", "stateCode": "hr", "state": "Haryana", "city": "Rohtak", "type": "open", "badge": "Open 24/7", "meta": "Govt · Rohtak · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Civil Hospital Rohtak", "stateCode": "hr", "state": "Haryana", "city": "Rohtak", "type": "emg", "badge": "Emergency", "meta": "Private · Rohtak · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Noble Heart Hospital", "stateCode": "hr", "state": "Haryana", "city": "Rohtak", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Rohtak · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Mann Multispeciality Hospital", "stateCode": "hr", "state": "Haryana", "city": "Rohtak", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Rohtak · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Maharaja Agrasen Medical College", "stateCode": "hr", "state": "Haryana", "city": "Hisar", "type": "open", "badge": "Open 24/7", "meta": "Govt · Hisar · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Civil Hospital Hisar", "stateCode": "hr", "state": "Haryana", "city": "Hisar", "type": "emg", "badge": "Emergency", "meta": "Private · Hisar · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Jindal Hospital", "stateCode": "hr", "state": "Haryana", "city": "Hisar", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Hisar · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Sarvodaya Hospital Hisar", "stateCode": "hr", "state": "Haryana", "city": "Hisar", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Hisar · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Civil Hospital Ambala", "stateCode": "hr", "state": "Haryana", "city": "Ambala", "type": "open", "badge": "Open 24/7", "meta": "Govt · Ambala · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Maharishi Markandeshwar Hospital", "stateCode": "hr", "state": "Haryana", "city": "Ambala", "type": "emg", "badge": "Emergency", "meta": "Private · Ambala · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Healing Touch Hospital", "stateCode": "hr", "state": "Haryana", "city": "Ambala", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Ambala · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Rotary Ambala Cancer Hospital", "stateCode": "hr", "state": "Haryana", "city": "Ambala", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Ambala · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Civil Hospital Panipat", "stateCode": "hr", "state": "Haryana", "city": "Panipat", "type": "open", "badge": "Open 24/7", "meta": "Govt · Panipat · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Ravindra Hospital", "stateCode": "hr", "state": "Haryana", "city": "Panipat", "type": "emg", "badge": "Emergency", "meta": "Private · Panipat · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Prem Hospital", "stateCode": "hr", "state": "Haryana", "city": "Panipat", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Panipat · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Cygnus Maharaja Aggarsain Hospital", "stateCode": "hr", "state": "Haryana", "city": "Panipat", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Panipat · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "PGIMER Chandigarh", "stateCode": "pb", "state": "Punjab", "city": "Chandigarh", "type": "open", "badge": "Open 24/7", "meta": "Govt · Chandigarh · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "GMCH Sector 32", "stateCode": "pb", "state": "Punjab", "city": "Chandigarh", "type": "emg", "badge": "Emergency", "meta": "Private · Chandigarh · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "GMSH Sector 16", "stateCode": "pb", "state": "Punjab", "city": "Chandigarh", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Chandigarh · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Fortis Mohali", "stateCode": "pb", "state": "Punjab", "city": "Chandigarh", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Chandigarh · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "DMC Ludhiana", "stateCode": "pb", "state": "Punjab", "city": "Ludhiana", "type": "open", "badge": "Open 24/7", "meta": "Govt · Ludhiana · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Christian Medical College Ludhiana", "stateCode": "pb", "state": "Punjab", "city": "Ludhiana", "type": "emg", "badge": "Emergency", "meta": "Private · Ludhiana · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "SPS Hospital", "stateCode": "pb", "state": "Punjab", "city": "Ludhiana", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Ludhiana · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Civil Hospital Ludhiana", "stateCode": "pb", "state": "Punjab", "city": "Ludhiana", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Ludhiana · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Government Medical College Amritsar", "stateCode": "pb", "state": "Punjab", "city": "Amritsar", "type": "open", "badge": "Open 24/7", "meta": "Govt · Amritsar · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Amandeep Hospital", "stateCode": "pb", "state": "Punjab", "city": "Amritsar", "type": "emg", "badge": "Emergency", "meta": "Private · Amritsar · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Fortis Escorts Amritsar", "stateCode": "pb", "state": "Punjab", "city": "Amritsar", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Amritsar · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Civil Hospital Amritsar", "stateCode": "pb", "state": "Punjab", "city": "Amritsar", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Amritsar · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Patel Hospital", "stateCode": "pb", "state": "Punjab", "city": "Jalandhar", "type": "open", "badge": "Open 24/7", "meta": "Govt · Jalandhar · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Sacred Heart Hospital", "stateCode": "pb", "state": "Punjab", "city": "Jalandhar", "type": "emg", "badge": "Emergency", "meta": "Private · Jalandhar · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Civil Hospital Jalandhar", "stateCode": "pb", "state": "Punjab", "city": "Jalandhar", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Jalandhar · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "NHS Hospital", "stateCode": "pb", "state": "Punjab", "city": "Jalandhar", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Jalandhar · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Rajindra Hospital Patiala", "stateCode": "pb", "state": "Punjab", "city": "Patiala", "type": "open", "badge": "Open 24/7", "meta": "Govt · Patiala · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Columbia Asia Patiala", "stateCode": "pb", "state": "Punjab", "city": "Patiala", "type": "emg", "badge": "Emergency", "meta": "Private · Patiala · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Amar Hospital", "stateCode": "pb", "state": "Punjab", "city": "Patiala", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Patiala · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Civil Hospital Patiala", "stateCode": "pb", "state": "Punjab", "city": "Patiala", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Patiala · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Fortis Hospital Mohali", "stateCode": "pb", "state": "Punjab", "city": "Mohali", "type": "open", "badge": "Open 24/7", "meta": "Govt · Mohali · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Ivy Hospital Mohali", "stateCode": "pb", "state": "Punjab", "city": "Mohali", "type": "emg", "badge": "Emergency", "meta": "Private · Mohali · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Max Hospital Mohali", "stateCode": "pb", "state": "Punjab", "city": "Mohali", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Mohali · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Civil Hospital Mohali", "stateCode": "pb", "state": "Punjab", "city": "Mohali", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Mohali · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Doon Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Dehradun", "type": "open", "badge": "Open 24/7", "meta": "Govt · Dehradun · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Max Hospital Dehradun", "stateCode": "uk", "state": "Uttarakhand", "city": "Dehradun", "type": "emg", "badge": "Emergency", "meta": "Private · Dehradun · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Synergy Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Dehradun", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Dehradun · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Himalayan Hospital Jolly Grant", "stateCode": "uk", "state": "Uttarakhand", "city": "Dehradun", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Dehradun · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "AIIMS Rishikesh", "stateCode": "uk", "state": "Uttarakhand", "city": "Rishikesh", "type": "open", "badge": "Open 24/7", "meta": "Govt · Rishikesh · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Nirmal Ashram Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Rishikesh", "type": "emg", "badge": "Emergency", "meta": "Private · Rishikesh · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "SPS Government Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Rishikesh", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Rishikesh · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Seema Dental & Medical Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Rishikesh", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Rishikesh · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "District Hospital Haridwar", "stateCode": "uk", "state": "Uttarakhand", "city": "Haridwar", "type": "open", "badge": "Open 24/7", "meta": "Govt · Haridwar · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Metro Hospital Haridwar", "stateCode": "uk", "state": "Uttarakhand", "city": "Haridwar", "type": "emg", "badge": "Emergency", "meta": "Private · Haridwar · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Mela Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Haridwar", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Haridwar · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Ramkrishna Mission Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Haridwar", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Haridwar · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Sushila Tiwari Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Haldwani", "type": "open", "badge": "Open 24/7", "meta": "Govt · Haldwani · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Base Hospital Haldwani", "stateCode": "uk", "state": "Uttarakhand", "city": "Haldwani", "type": "emg", "badge": "Emergency", "meta": "Private · Haldwani · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Krishna Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Haldwani", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Haldwani · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Central Hospital Haldwani", "stateCode": "uk", "state": "Uttarakhand", "city": "Haldwani", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Haldwani · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "BD Pandey Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Nainital", "type": "open", "badge": "Open 24/7", "meta": "Govt · Nainital · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Ramsay Hospital", "stateCode": "uk", "state": "Uttarakhand", "city": "Nainital", "type": "emg", "badge": "Emergency", "meta": "Private · Nainital · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "District Hospital Nainital", "stateCode": "uk", "state": "Uttarakhand", "city": "Nainital", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Nainital · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Nainital Healthcare Centre", "stateCode": "uk", "state": "Uttarakhand", "city": "Nainital", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Nainital · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "SMS Hospital Jaipur", "stateCode": "rj", "state": "Rajasthan", "city": "Jaipur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Jaipur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Fortis Jaipur", "stateCode": "rj", "state": "Rajasthan", "city": "Jaipur", "type": "emg", "badge": "Emergency", "meta": "Private · Jaipur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Narayana Multispeciality Jaipur", "stateCode": "rj", "state": "Rajasthan", "city": "Jaipur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Jaipur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Eternal Hospital Jaipur", "stateCode": "rj", "state": "Rajasthan", "city": "Jaipur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Jaipur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "AIIMS Jodhpur", "stateCode": "rj", "state": "Rajasthan", "city": "Jodhpur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Jodhpur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Mahatma Gandhi Hospital Jodhpur", "stateCode": "rj", "state": "Rajasthan", "city": "Jodhpur", "type": "emg", "badge": "Emergency", "meta": "Private · Jodhpur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Medipulse Hospital", "stateCode": "rj", "state": "Rajasthan", "city": "Jodhpur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Jodhpur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "MDM Hospital", "stateCode": "rj", "state": "Rajasthan", "city": "Jodhpur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Jodhpur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "RNT Medical College", "stateCode": "rj", "state": "Rajasthan", "city": "Udaipur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Udaipur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "GBH American Hospital", "stateCode": "rj", "state": "Rajasthan", "city": "Udaipur", "type": "emg", "badge": "Emergency", "meta": "Private · Udaipur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Pacific Medical College", "stateCode": "rj", "state": "Rajasthan", "city": "Udaipur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Udaipur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "MB Government Hospital", "stateCode": "rj", "state": "Rajasthan", "city": "Udaipur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Udaipur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "New Medical College Hospital Kota", "stateCode": "rj", "state": "Rajasthan", "city": "Kota", "type": "open", "badge": "Open 24/7", "meta": "Govt · Kota · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Sudha Hospital", "stateCode": "rj", "state": "Rajasthan", "city": "Kota", "type": "emg", "badge": "Emergency", "meta": "Private · Kota · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Kota Heart Institute", "stateCode": "rj", "state": "Rajasthan", "city": "Kota", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Kota · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Kota", "stateCode": "rj", "state": "Rajasthan", "city": "Kota", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Kota · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "JLN Medical College Ajmer", "stateCode": "rj", "state": "Rajasthan", "city": "Ajmer", "type": "open", "badge": "Open 24/7", "meta": "Govt · Ajmer · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Mittal Hospital", "stateCode": "rj", "state": "Rajasthan", "city": "Ajmer", "type": "emg", "badge": "Emergency", "meta": "Private · Ajmer · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "St. Francis Hospital", "stateCode": "rj", "state": "Rajasthan", "city": "Ajmer", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Ajmer · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Ajmer", "stateCode": "rj", "state": "Rajasthan", "city": "Ajmer", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Ajmer · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "PBM Hospital Bikaner", "stateCode": "rj", "state": "Rajasthan", "city": "Bikaner", "type": "open", "badge": "Open 24/7", "meta": "Govt · Bikaner · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "SN Medical College Bikaner", "stateCode": "rj", "state": "Rajasthan", "city": "Bikaner", "type": "emg", "badge": "Emergency", "meta": "Private · Bikaner · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Kothari Hospital", "stateCode": "rj", "state": "Rajasthan", "city": "Bikaner", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Bikaner · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Bikaner", "stateCode": "rj", "state": "Rajasthan", "city": "Bikaner", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Bikaner · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "AIIMS Bhopal", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Bhopal", "type": "open", "badge": "Open 24/7", "meta": "Govt · Bhopal · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Hamidia Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Bhopal", "type": "emg", "badge": "Emergency", "meta": "Private · Bhopal · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Bansal Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Bhopal", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Bhopal · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Narmada Trauma Centre", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Bhopal", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Bhopal · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "MY Hospital Indore", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Indore", "type": "open", "badge": "Open 24/7", "meta": "Govt · Indore · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Bombay Hospital Indore", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Indore", "type": "emg", "badge": "Emergency", "meta": "Private · Indore · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Choithram Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Indore", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Indore · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Apollo Hospitals Indore", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Indore", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Indore · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "NSCB Medical College", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Jabalpur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Jabalpur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Jabalpur Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Jabalpur", "type": "emg", "badge": "Emergency", "meta": "Private · Jabalpur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Metro Hospital Jabalpur", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Jabalpur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Jabalpur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "City Hospital Jabalpur", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Jabalpur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Jabalpur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Jaya Arogya Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Gwalior", "type": "open", "badge": "Open 24/7", "meta": "Govt · Gwalior · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Birla Hospital Gwalior", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Gwalior", "type": "emg", "badge": "Emergency", "meta": "Private · Gwalior · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Sahara Hospital Gwalior", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Gwalior", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Gwalior · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Gwalior", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Gwalior", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Gwalior · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "RD Gardi Medical College", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Ujjain", "type": "open", "badge": "Open 24/7", "meta": "Govt · Ujjain · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Civil Hospital Ujjain", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Ujjain", "type": "emg", "badge": "Emergency", "meta": "Private · Ujjain · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Charak Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Ujjain", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Ujjain · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Patidar Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Ujjain", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Ujjain · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Sanjay Gandhi Memorial Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Rewa", "type": "open", "badge": "Open 24/7", "meta": "Govt · Rewa · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "District Hospital Rewa", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Rewa", "type": "emg", "badge": "Emergency", "meta": "Private · Rewa · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Vindhya Hospital", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Rewa", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Rewa · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Shyam Shah Medical College", "stateCode": "mp", "state": "Madhya Pradesh", "city": "Rewa", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Rewa · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "AIIMS Patna", "stateCode": "br", "state": "Bihar", "city": "Patna", "type": "open", "badge": "Open 24/7", "meta": "Govt · Patna · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "PMCH Patna", "stateCode": "br", "state": "Bihar", "city": "Patna", "type": "emg", "badge": "Emergency", "meta": "Private · Patna · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Paras HMRI Hospital", "stateCode": "br", "state": "Bihar", "city": "Patna", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Patna · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Ruban Memorial Hospital", "stateCode": "br", "state": "Bihar", "city": "Patna", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Patna · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "ANMCH Gaya", "stateCode": "br", "state": "Bihar", "city": "Gaya", "type": "open", "badge": "Open 24/7", "meta": "Govt · Gaya · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Magadh Medical Hospital", "stateCode": "br", "state": "Bihar", "city": "Gaya", "type": "emg", "badge": "Emergency", "meta": "Private · Gaya · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Jeevak Heart Hospital", "stateCode": "br", "state": "Bihar", "city": "Gaya", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Gaya · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Gaya", "stateCode": "br", "state": "Bihar", "city": "Gaya", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Gaya · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "JLNMCH Bhagalpur", "stateCode": "br", "state": "Bihar", "city": "Bhagalpur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Bhagalpur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Glokal Hospital Bhagalpur", "stateCode": "br", "state": "Bihar", "city": "Bhagalpur", "type": "emg", "badge": "Emergency", "meta": "Private · Bhagalpur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Mayaganj Hospital", "stateCode": "br", "state": "Bihar", "city": "Bhagalpur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Bhagalpur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "District Hospital Bhagalpur", "stateCode": "br", "state": "Bihar", "city": "Bhagalpur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Bhagalpur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "SKMCH Muzaffarpur", "stateCode": "br", "state": "Bihar", "city": "Muzaffarpur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Muzaffarpur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Prashant Memorial Hospital", "stateCode": "br", "state": "Bihar", "city": "Muzaffarpur", "type": "emg", "badge": "Emergency", "meta": "Private · Muzaffarpur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "District Hospital Muzaffarpur", "stateCode": "br", "state": "Bihar", "city": "Muzaffarpur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Muzaffarpur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Ashoka Hospital", "stateCode": "br", "state": "Bihar", "city": "Muzaffarpur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Muzaffarpur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "DMCH Darbhanga", "stateCode": "br", "state": "Bihar", "city": "Darbhanga", "type": "open", "badge": "Open 24/7", "meta": "Govt · Darbhanga · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Paras Global Hospital", "stateCode": "br", "state": "Bihar", "city": "Darbhanga", "type": "emg", "badge": "Emergency", "meta": "Private · Darbhanga · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "District Hospital Darbhanga", "stateCode": "br", "state": "Bihar", "city": "Darbhanga", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Darbhanga · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Heritage Hospital Darbhanga", "stateCode": "br", "state": "Bihar", "city": "Darbhanga", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Darbhanga · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "RIMS Ranchi", "stateCode": "jh", "state": "Jharkhand", "city": "Ranchi", "type": "open", "badge": "Open 24/7", "meta": "Govt · Ranchi · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Medica Hospital Ranchi", "stateCode": "jh", "state": "Jharkhand", "city": "Ranchi", "type": "emg", "badge": "Emergency", "meta": "Private · Ranchi · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Sadar Hospital Ranchi", "stateCode": "jh", "state": "Jharkhand", "city": "Ranchi", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Ranchi · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Orchid Medical Centre", "stateCode": "jh", "state": "Jharkhand", "city": "Ranchi", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Ranchi · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Tata Main Hospital", "stateCode": "jh", "state": "Jharkhand", "city": "Jamshedpur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Jamshedpur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "MGM Medical College Jamshedpur", "stateCode": "jh", "state": "Jharkhand", "city": "Jamshedpur", "type": "emg", "badge": "Emergency", "meta": "Private · Jamshedpur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Brahmananda Narayana Hospital", "stateCode": "jh", "state": "Jharkhand", "city": "Jamshedpur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Jamshedpur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Tinplate Hospital", "stateCode": "jh", "state": "Jharkhand", "city": "Jamshedpur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Jamshedpur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "SNMMCH Dhanbad", "stateCode": "jh", "state": "Jharkhand", "city": "Dhanbad", "type": "open", "badge": "Open 24/7", "meta": "Govt · Dhanbad · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Asian Dwarkadas Jalan Hospital", "stateCode": "jh", "state": "Jharkhand", "city": "Dhanbad", "type": "emg", "badge": "Emergency", "meta": "Private · Dhanbad · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Patliputra Nursing Home", "stateCode": "jh", "state": "Jharkhand", "city": "Dhanbad", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Dhanbad · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Central Hospital Dhanbad", "stateCode": "jh", "state": "Jharkhand", "city": "Dhanbad", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Dhanbad · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Sheikh Bhikhari Medical College", "stateCode": "jh", "state": "Jharkhand", "city": "Hazaribagh", "type": "open", "badge": "Open 24/7", "meta": "Govt · Hazaribagh · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "District Hospital Hazaribagh", "stateCode": "jh", "state": "Jharkhand", "city": "Hazaribagh", "type": "emg", "badge": "Emergency", "meta": "Private · Hazaribagh · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Arogyam Hospital", "stateCode": "jh", "state": "Jharkhand", "city": "Hazaribagh", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Hazaribagh · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Akshay Nursing Home", "stateCode": "jh", "state": "Jharkhand", "city": "Hazaribagh", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Hazaribagh · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "AIIMS Raipur", "stateCode": "cg", "state": "Chhattisgarh", "city": "Raipur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Raipur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Dr BRAM Hospital Raipur", "stateCode": "cg", "state": "Chhattisgarh", "city": "Raipur", "type": "emg", "badge": "Emergency", "meta": "Private · Raipur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "Ramkrishna Care Hospital", "stateCode": "cg", "state": "Chhattisgarh", "city": "Raipur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Raipur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Balaji Hospital Raipur", "stateCode": "cg", "state": "Chhattisgarh", "city": "Raipur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Raipur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "CIMS Bilaspur", "stateCode": "cg", "state": "Chhattisgarh", "city": "Bilaspur", "type": "open", "badge": "Open 24/7", "meta": "Govt · Bilaspur · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Apollo Hospital Bilaspur", "stateCode": "cg", "state": "Chhattisgarh", "city": "Bilaspur", "type": "emg", "badge": "Emergency", "meta": "Private · Bilaspur · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "District Hospital Bilaspur", "stateCode": "cg", "state": "Chhattisgarh", "city": "Bilaspur", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Bilaspur · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Sims Hospital Bilaspur", "stateCode": "cg", "state": "Chhattisgarh", "city": "Bilaspur", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Bilaspur · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "District Hospital Durg", "stateCode": "cg", "state": "Chhattisgarh", "city": "Durg", "type": "open", "badge": "Open 24/7", "meta": "Govt · Durg · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Chandulal Chandrakar Hospital", "stateCode": "cg", "state": "Chhattisgarh", "city": "Durg", "type": "emg", "badge": "Emergency", "meta": "Private · Durg · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "BM Shah Hospital", "stateCode": "cg", "state": "Chhattisgarh", "city": "Durg", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Durg · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "Sparsh Hospital Bhilai", "stateCode": "cg", "state": "Chhattisgarh", "city": "Durg", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Durg · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}, {"name": "Government Medical College Korba", "stateCode": "cg", "state": "Chhattisgarh", "city": "Korba", "type": "open", "badge": "Open 24/7", "meta": "Govt · Korba · Emergency, Cardiac, Ortho", "dist": "City based", "specialties": ["emergency", "cardiac", "ortho"], "affordability": "Low", "beds": 900, "doctors": 450, "capacity": "High"}, {"name": "Indira Gandhi District Hospital", "stateCode": "cg", "state": "Chhattisgarh", "city": "Korba", "type": "emg", "badge": "Emergency", "meta": "Private · Korba · Emergency, Neuro, Child", "dist": "City based", "specialties": ["emergency", "neuro", "child"], "affordability": "High", "beds": 350, "doctors": 180, "capacity": "High"}, {"name": "KIMS Hospital Korba", "stateCode": "cg", "state": "Chhattisgarh", "city": "Korba", "type": "ay", "badge": "Ayushman", "meta": "Private/Trust · Korba · Gynae, Child, Emergency", "dist": "City based", "specialties": ["gynae", "child", "emergency"], "affordability": "Medium", "beds": 220, "doctors": 120, "capacity": "Medium"}, {"name": "New Korba Hospital", "stateCode": "cg", "state": "Chhattisgarh", "city": "Korba", "type": "cghs", "badge": "CGHS Listed", "meta": "Govt/Panel · Korba · Cardiac, Neuro, Ortho", "dist": "City based", "specialties": ["cardiac", "neuro", "ortho"], "affordability": "Low", "beds": 160, "doctors": 75, "capacity": "Medium"}];
let selectedState = "";
let selectedCity = "";

function renderStateDropdown() {
  const stateSelect = document.getElementById("state-select");
  stateSelect.innerHTML = `<option value="">Select State</option>`;

  Object.entries(STATE_OPTIONS).forEach(([code, state]) => {
    stateSelect.innerHTML += `
      <option value="${code}">${state.name}</option>
    `;
  });
}

function handleStateChange() {
  selectedState = document.getElementById("state-select").value;
  const citySelect = document.getElementById("city-select");

  citySelect.innerHTML = `<option value="">Select City</option>`;
  selectedCity = "";

  if (selectedState && STATE_OPTIONS[selectedState]) {
    STATE_OPTIONS[selectedState].cities.forEach(city => {
      citySelect.innerHTML += `
        <option value="${city}">${city}</option>
      `;
    });
  }

  searchHospitals();
}

function searchHospitals() {
  const keyword = document.getElementById("hospital-input").value.toLowerCase();
  const state = document.getElementById("state-select").value;
  const city = document.getElementById("city-select").value;
  const specialty = document.getElementById("specialty-select")?.value || "";
  const affordability = document.getElementById("affordability-select")?.value || "";

  const results = EXTENDED_HOSPITALS.filter(hospital => {
    return (
      (!state || hospital.stateCode === state) &&
      (!city || hospital.city === city) &&
      (!specialty || hospital.specialties.includes(specialty)) &&
      (!affordability || hospital.affordability === affordability) &&
      (
        !keyword ||
        hospital.name.toLowerCase().includes(keyword) ||
        hospital.city.toLowerCase().includes(keyword) ||
        hospital.state.toLowerCase().includes(keyword) ||
        hospital.meta.toLowerCase().includes(keyword)
      )
    );
  });

  renderHospitals(results);
}

function renderHospitals(list) {
  const container = document.getElementById("hospital-results");

  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="hospital-item">
        <div>
          <div class="h-name">No hospitals found</div>
          <div class="h-meta">Try changing state, city, specialty, or search keyword.</div>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(hospital => `
    <div class="hospital-item">
      <div>
        <div class="h-name">${hospital.name}</div>
        <div class="h-meta">
          ${hospital.meta}<br>
          📍 ${hospital.city}, ${hospital.state}<br>
          🛏️ Beds: ${hospital.beds}+ · 👨‍⚕️ Doctors: ${hospital.doctors}+<br>
          💰 Affordability: ${hospital.affordability} · Capacity: ${hospital.capacity}
        </div>
        <div class="h-dist">${hospital.dist}</div>
      </div>
      <span class="h-badge badge-${hospital.type}">
        ${hospital.badge}
      </span>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderStateDropdown();
  renderHospitals(EXTENDED_HOSPITALS);
});
let currentState = 'up';
let currentCity = '';

const BADGE_CLASS = { open:'badge-open', emg:'badge-emg', cghs:'badge-cghs', ay:'badge-ay' };

function populateStateDropdown() {
  const stateSelect = document.getElementById('state-select');
  stateSelect.innerHTML = Object.entries(STATE_OPTIONS).map(([code, item]) =>
    `<option value="${code}">${item.name}</option>`
  ).join('');
  stateSelect.value = currentState;
  populateCityDropdown();
}

function populateCityDropdown() {
  const citySelect = document.getElementById('city-select');
  const cities = STATE_OPTIONS[currentState]?.cities || [];
  citySelect.innerHTML = '<option value="">All Cities</option>' + cities.map(city =>
    `<option value="${city}">${city}</option>`
  ).join('');
  citySelect.value = currentCity;
}

function selectState(state) {
  currentState = state;
  currentCity = '';
  populateCityDropdown();
  searchHospitals();
}

function renderHospitals(list) {
  const el = document.getElementById('hospital-results');
  const count = document.getElementById('hospital-count');
  if (count) count.textContent = `${list?.length || 0} hospital results found`;
  if (!list || !list.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--c-muted);padding:12px 0;">No results found. Try a different city, specialty, or budget.</p>';
    return;
  }
  el.innerHTML = list.map((h, i) => `
    <div class="hospital-item" style="animation-delay:${i * 0.03}s">
      <div>
        <div class="h-name">${h.name}</div>
        <div class="h-meta">${h.meta}</div>
        <div class="h-dist">📍 ${h.city || 'Nearby'} · ${h.dist || 'City based'}</div>
        <div class="h-details">
          <span class="h-chip">${h.affordability || 'Medium'} cost</span>
          <span class="h-chip">${h.beds || '—'} beds</span>
          <span class="h-chip">${h.doctors || '—'} doctors</span>
          <span class="h-chip">${h.capacity || 'Good'} capacity</span>
        </div>
      </div>
     <div class="right-actions">

  <span class="h-badge ${BADGE_CLASS[h.type] || 'badge-open'}">
    ${h.badge}
  </span>

  <div class="hospital-actions">
    <button
      class="action-btn map-btn"
      onclick="openMap('${h.name} ${h.city}')"
    >
      🗺️ Navigate
    </button>

    <button
      class="action-btn call-btn"
      onclick="callHospital()"
    >
      📞 Call
    </button>
  </div>

</div>
    </div>
  `).join('');
}

function detectSpecialty(query) {
  if (/chest|heart|cardio|cardiac|bp|blood pressure/.test(query)) return 'cardiac';
  if (/ortho|bone|joint|fracture|arthrit/.test(query)) return 'ortho';
  if (/neuro|brain|nerve|stroke|epilepsy/.test(query)) return 'neuro';
  if (/child|pediatric|baby|kid|infant/.test(query)) return 'child';
  if (/gynae|gynaec|gyn|women|maternity|preg/.test(query)) return 'gynae';
  if (/emergency|trauma|accident|icu/.test(query)) return 'emergency';
  return '';
}

function searchHospitals() {
  const q = document.getElementById('hospital-input').value.toLowerCase().trim();
  currentCity = document.getElementById('city-select')?.value || '';
  const selectedSpecialty = document.getElementById('specialty-select')?.value || '';
  const budget = document.getElementById('affordability-select')?.value || '';
  const specialty = selectedSpecialty || detectSpecialty(q);

  let results = EXTENDED_HOSPITALS.filter(h => h.stateCode === currentState);
  if (currentCity) results = results.filter(h => h.city === currentCity);
  if (specialty) results = results.filter(h => h.specialties?.includes(specialty));
  if (budget) results = results.filter(h => h.affordability === budget);
  if (q) {
    results = results.filter(h =>
      h.name.toLowerCase().includes(q) ||
      h.city.toLowerCase().includes(q) ||
      h.meta.toLowerCase().includes(q) ||
      (h.specialties || []).join(' ').toLowerCase().includes(q) ||
      detectSpecialty(q)
    );
  }
  renderHospitals(results.slice(0, 60));
}

function renderSpecialists() {

  document.getElementById('spec-grid').innerHTML = DATA.specialists.map(s => `
    <div class="spec-card" onclick="loadSpecialist('${s.key}')">
      <div class="spec-icon">${s.icon}</div>
      <div class="spec-name">${s.name}</div>
      <div class="spec-desc">${s.desc}</div>
    </div>
  `).join('');
}

function loadSpecialist(key) {
  document.getElementById('specialty-select').value = key;
  searchHospitals();
  // Switch to hospitals tab
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelector('[data-tab="hospitals"]').classList.add('active');
  document.getElementById('sec-hospitals').classList.add('active');
  document.getElementById('sec-hospitals').scrollIntoView({ behavior:'smooth', block:'start' });
}

/* ══════════════════════════════════════
   ACCIDENT MODULE
══════════════════════════════════════ */

let currentAccType = 'city';

function renderAccidentTypes() {
  document.getElementById('acc-types').innerHTML = DATA.accidentTypes.map(t => `
    <div class="acc-type ${t.id === currentAccType ? 'active' : ''}" onclick="selectAcc('${t.id}')">
      <div class="acc-icon">${t.icon}</div>
      <div class="acc-label">${isHindi ? t.labelH : t.label}</div>
    </div>
  `).join('');
}

function selectAcc(type) {
  currentAccType = type;
  renderAccidentTypes();
  renderEmergencyNumbers(type);
}

function renderEmergencyNumbers(type) {
  const nums = DATA.emergencyNumbers[type];
  document.getElementById('emg-list').innerHTML = nums.map(n => `
    <div class="emg-item">
      <span class="emg-name">${isHindi ? n.nameH : n.name}</span>
      <span class="emg-num" onclick="alert('Calling ' + '${n.num}')">${n.num}</span>
    </div>
  `).join('');
}

function renderAccidentSteps() {
  document.getElementById('accident-steps').innerHTML = DATA.accidentSteps.map((s, i) => `
    <div class="step-item" style="animation-delay:${i * 0.05}s">
      <div class="step-num">${i + 1}</div>
      <div class="step-text">${s}</div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════
   FIRST AID
══════════════════════════════════════ */

function renderSteps(containerId, steps, colorClass) {
  document.getElementById(containerId).innerHTML = steps.map((s, i) => `
    <div class="step-item" style="animation-delay:${i * 0.05}s">
      <div class="step-num ${colorClass}">${i + 1}</div>
      <div class="step-text">${s}</div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════
   SCHEMES
══════════════════════════════════════ */

function renderSchemes() {
  document.getElementById('scheme-list').innerHTML = DATA.schemes.map(s => `
    <div class="scheme-item">
      <div class="scheme-header">
        <span class="scheme-name">${s.name}</span>
        <span class="tag tag-${s.type}">${s.typeLabel}</span>
      </div>
      <div class="scheme-desc">${s.desc}</div>
      <span class="scheme-benefit">✦ ${s.benefit}</span>
    </div>
  `).join('');
}

/* ══════════════════════════════════════
   PROFILE
══════════════════════════════════════ */

function saveProfile() {

  const profile = {

    name:
      document.getElementById("f-name").value,

    age:
      document.getElementById("f-age").value,

    blood:
      document.getElementById("f-blood").value,

    phone:
      document.getElementById("f-phone").value,

    allergy:
      document.getElementById("f-allergy").value,

    conditions:
      document.getElementById("f-conditions").value,

    insurance:
      document.getElementById("f-insurance").value

  };

  localStorage.setItem(
    "vatsalyaProfile",
    JSON.stringify(profile)
  );

  const toast =
    document.getElementById("save-toast");

  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);

}

function loadProfile() {
  try {
    const saved = localStorage.getItem('vatsalya_profile');
    if (!saved) return;
    const p = JSON.parse(saved);
    const map = { 'f-name':p.name, 'f-age':p.age, 'f-blood':p.blood, 'f-phone':p.phone, 'f-allergy':p.allergy, 'f-conditions':p.conditions, 'f-insurance':p.insurance };
    Object.entries(map).forEach(([id, val]) => { if (val) document.getElementById(id).value = val; });
  } catch(e) { /* ignore */ }
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */

(function init() {
  populateStateDropdown();
  searchHospitals();
  renderSpecialists();
  renderAccidentTypes();
  renderEmergencyNumbers('city');
  renderAccidentSteps();
  renderSteps('bleeding-steps', DATA.bleedingSteps, '');
  renderSteps('fracture-steps', DATA.fractureSteps, 'green');
  renderSchemes();
  loadProfile();

  // Keyboard shortcut: Enter to search hospitals
  document.getElementById('hospital-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') searchHospitals();
  });
})();
function analyzeSymptoms() {

  const input =
    document.getElementById("symptom-input")
    .value
    .toLowerCase();

  const resultBox =
    document.getElementById("ai-result");

  let category = "General Medicine";

  let specialty = "emergency";

  let urgency = "Normal";
  let colorClass = "green";

  let firstAid =
    "Rest, drink water, monitor symptoms, and consult a doctor if symptoms continue.";

  if (
    input.includes("chest pain") ||
    input.includes("heart") ||
    input.includes("breathlessness") ||
    input.includes("sweating")
  ) {

    category = "Cardiology / Emergency";

    specialty = "cardiac";

    urgency = "High";
    showEmergencyAlert();
    colorClass = "red";

    firstAid =
      "Make the patient sit upright, loosen tight clothing, avoid walking, and call 112 if pain is severe.";

  }

  else if (
    input.includes("fracture") ||
    input.includes("bone") ||
    input.includes("joint") ||
    input.includes("leg pain")
  ) {

    category = "Orthopedic";

    specialty = "ortho";

    urgency = "Medium";
    colorClass = "yellow";
    firstAid =
      "Do not move the injured part. Immobilize it with support and apply ice wrapped in cloth.";

  }

  else if (
    input.includes("bleeding") ||
    input.includes("cut") ||
    input.includes("wound")
  ) {

    category = "Emergency / Trauma";

    specialty = "emergency";

    urgency = "High";
    showEmergencyAlert();
     colorClass = "red";
    firstAid =
      "Apply firm pressure with clean cloth. Keep the injured part raised. Call emergency help if bleeding does not stop.";

  }

  else if (
    input.includes("pregnancy") ||
    input.includes("labor") ||
    input.includes("delivery") ||
    input.includes("women")
  ) {

    category = "Gynaecology / Maternity";

    specialty = "gynae";

    urgency = "Medium";
    colorClass = "yellow";
    firstAid =
      "Keep the patient calm and hydrated. Avoid unnecessary movement and contact a maternity hospital.";

  }

  else if (
    input.includes("child") ||
    input.includes("baby") ||
    input.includes("infant") ||
    input.includes("fever")
  ) {

    category = "Pediatrics";

    specialty = "child";

    urgency = "Medium";
    colorClass = "yellow";

    firstAid =
      "Monitor temperature, keep the child hydrated, and consult a pediatrician if fever is high or persistent.";

  }

  else if (
    input.includes("stroke") ||
    input.includes("seizure") ||
    input.includes("paralysis") ||
    input.includes("unconscious")
  ) {

    category = "Neurology / Emergency";

    specialty = "neuro";

    urgency = "High";
    showEmergencyAlert();
    colorClass = "red";
    firstAid =
      "Do not give food or water. Keep the patient on their side and call emergency services immediately.";

  }

  resultBox.innerHTML = `

   <div class="info-box ${colorClass}">

      <h3>AI Suggestion</h3>

      <p>
        <strong>Category:</strong>
        ${category}
      </p>

      <p>
        <strong>Urgency:</strong>
        ${urgency}
      </p>

      <p>
        <strong>First Aid:</strong>
        ${firstAid}
      </p>

    </div>

  `;

  document.getElementById("specialty-select").value =
    specialty;

  searchHospitals();

}
function startVoiceInput() {

  if (!("webkitSpeechRecognition" in window)) {

    alert(
      "Voice input is not supported in this browser. Please use Chrome."
    );

    return;
  }

  const recognition = new webkitSpeechRecognition();

  recognition.lang = "en-IN";

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.start();

  recognition.onresult = function(event) {

    const speechText =
      event.results[0][0].transcript;

    document.getElementById("symptom-input").value =
      speechText;

    analyzeSymptoms();

  };

  recognition.onerror = function() {

    alert(
      "Voice input failed. Please try again."
    );

  };

}
function getUserLocation() {

  if (!navigator.geolocation) {

    alert(
      "Geolocation is not supported by your browser."
    );

    return;
  }

  navigator.geolocation.getCurrentPosition(

    function(position) {

      const latitude =
        position.coords.latitude;

      const longitude =
        position.coords.longitude;

      alert(
        "Location detected!\n\nLatitude: " +
        latitude +
        "\nLongitude: " +
        longitude
      );

      renderHospitals(
        EXTENDED_HOSPITALS.slice(0, 10)
      );

    },

    function() {

      alert(
        "Unable to fetch location. Please allow location permission."
      );

    }

  );

}
function openMap(location) {
  const mapUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  window.open(mapUrl, "_blank");
}

function callHospital() {
  alert("Hospital phone numbers can be connected later.");
}
function loadProfile() {

  const savedProfile =
    localStorage.getItem("vatsalyaProfile");

  if (!savedProfile) return;

  const profile =
    JSON.parse(savedProfile);

  document.getElementById("f-name").value =
    profile.name || "";

  document.getElementById("f-age").value =
    profile.age || "";

  document.getElementById("f-blood").value =
    profile.blood || "";

  document.getElementById("f-phone").value =
    profile.phone || "";

  document.getElementById("f-allergy").value =
    profile.allergy || "";

  document.getElementById("f-conditions").value =
    profile.conditions || "";

  document.getElementById("f-insurance").value =
    profile.insurance || "";

}

loadProfile();
function showEmergencyAlert() {

  const proceed = confirm(

    "⚠️ HIGH RISK EMERGENCY DETECTED\n\n" +
    "Immediate medical attention is recommended.\n\n" +
    "Do you want to call 112 emergency services?"

  );

  if (proceed) {

    window.location.href = "tel:112";

  }

}
