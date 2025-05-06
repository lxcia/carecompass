// Provider data array
const providersData = [
  {
    "id": "1",
    "name": "Dr. Maria Rodriguez",
    "type": "mobile_dentist",
    "address": "Dorchester, 02125",
    "phone": "(617) 555-1234",
    "website": "https://www.mariarodriguezdental.com",
    "care_needs": "prophylaxis;fluoride;cancer_screening;fillings;extractions;endodontic;periodontal",
    "languages": "english;spanish",
    "insurance": "masshealth;medicare;bcbs;delta",
    "additional_support": "nursing_home;homebound",
    "rating": "4.8",
    "image": "https://via.placeholder.com/500x300?text=Maria+Rodriguez",
    "zip_codes": "02121;02122;02124;02125;02126;02127;02128;02129;02131;02132"
  },
  {
    "id": "2",
    "name": "Sophia Chen",
    "type": "dental_hygienist",
    "address": "Chinatown, 02111",
    "phone": "(617) 555-5678",
    "website": "https://www.bostondentalcare.org/chen",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;chinese",
    "insurance": "masshealth;bcbs;aetna;cigna",
    "additional_support": "homebound;disabled",
    "rating": "4.6",
    "image": "https://via.placeholder.com/500x300?text=Sophia+Chen",
    "zip_codes": "02108;02109;02110;02111;02113;02114;02115;02116"
  },
  {
    "id": "3",
    "name": "Dr. James Williams",
    "type": "mobile_dentist",
    "address": "Back Bay, 02116",
    "phone": "(617) 555-9012",
    "website": "https://www.williamsmobiledental.com",
    "care_needs": "prophylaxis;fluoride;fillings;extractions;periodontal",
    "languages": "english;spanish",
    "insurance": "masshealth;medicare;bcbs;delta;cigna",
    "additional_support": "nursing_home;dementia",
    "rating": "4.9",
    "image": "https://via.placeholder.com/500x300?text=James+Williams",
    "zip_codes": "02108;02109;02110;02111;02113;02114;02115;02116;02117;02118;02119;02120"
  },
  {
    "id": "4",
    "name": "Yoon-Ji Park",
    "type": "dental_hygienist",
    "address": "Cambridge, 02139",
    "phone": "(617) 555-3456",
    "website": "https://www.communitydentalservices.org/park",
    "care_needs": "prophylaxis;fluoride",
    "languages": "english;korean",
    "insurance": "masshealth;bcbs;cigna",
    "additional_support": "disabled",
    "rating": "4.7",
    "image": "https://via.placeholder.com/500x300?text=Yoon-Ji+Park",
    "zip_codes": "02138;02139;02140;02141;02142"
  },
  {
    "id": "5",
    "name": "Dr. Roberto Bianchi",
    "type": "mobile_dentist",
    "address": "North End, 02113",
    "phone": "(617) 555-7890",
    "website": "https://www.bianchidentalcare.com",
    "care_needs": "prophylaxis;fluoride;extractions;fillings;endodontic",
    "languages": "english;french;spanish",
    "insurance": "medicare;bcbs;aetna;delta",
    "additional_support": "nursing_home;homebound;dementia",
    "rating": "4.5",
    "image": "https://via.placeholder.com/500x300?text=Roberto+Bianchi",
    "zip_codes": "02108;02109;02110;02111;02113;02114;02115;02116;02117;02118"
  },
  {
    "id": "6",
    "name": "Lucy Morgan",
    "type": "dental_hygienist",
    "address": "Roxbury, 02119",
    "phone": "(617) 555-2345",
    "website": "https://www.bphc.org/dental/moreau",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;french;haitian",
    "insurance": "masshealth",
    "additional_support": "disabled;homebound",
    "rating": "4.4",
    "image": "https://via.placeholder.com/500x300?text=Lucie+Moreau",
    "zip_codes": "02118;02119;02120;02121;02122;02124;02125;02126;02127;02128;02129;02130;02131;02132"
  },
  {
    "id": "7",
    "name": "Miguel Sanchez",
    "type": "dental_hygienist",
    "address": "East Boston, 02128",
    "phone": "(617) 555-6789",
    "website": "https://www.dorchesterhealth.org/sanchez",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;spanish;portuguese",
    "insurance": "masshealth;medicare;bcbs",
    "additional_support": "disabled",
    "rating": "4.8",
    "image": "https://via.placeholder.com/500x300?text=Miguel+Sanchez",
    "zip_codes": "02128;02129;02130;02131;02132;02134;02135;02136"
  },
  {
    "id": "8",
    "name": "Dr. Sarah Johnson",
    "type": "mobile_dentist",
    "address": "Brookline, 02445",
    "phone": "(617) 555-0123",
    "website": "https://www.johnsonmobiledental.com",
    "care_needs": "prophylaxis;fluoride;fillings;extractions;endodontic;periodontal;cancer_screening",
    "languages": "english",
    "insurance": "private;delta;aetna;cigna;bcbs",
    "additional_support": "nursing_home;disabled",
    "rating": "4.9",
    "image": "https://via.placeholder.com/500x300?text=Sarah+Johnson",
    "zip_codes": "02115;02116;02117;02118;02119;02120;02121;02122;02445;02446;02447"
  },
  {
    "id": "9",
    "name": "Camila Oliveira",
    "type": "dental_hygienist",
    "address": "Roslindale, 02131",
    "phone": "(617) 555-4567",
    "website": "https://www.roslindaledentalcare.com/oliveira",
    "care_needs": "prophylaxis;fluoride",
    "languages": "english;haitian;spanish",
    "insurance": "masshealth;medicare",
    "additional_support": "homebound;disabled",
    "rating": "4.6",
    "image": "https://via.placeholder.com/500x300?text=Isabella+Santos",
    "zip_codes": "02130;02131;02132;02134;02135;02136"
  },
  {
    "id": "10",
    "name": "Natasha Petrov",
    "type": "dental_hygienist",
    "address": "Cambridge, 02140",
    "phone": "(617) 555-8901",
    "website": "https://www.cambridgepublichealth.org/petrov",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;russian",
    "insurance": "masshealth;bcbs",
    "additional_support": "disabled;homebound",
    "rating": "4.6",
    "image": "https://via.placeholder.com/500x300?text=Natasha+Petrov",
    "zip_codes": "02138;02139;02140;02141;02142;02143;02144;02145"
  },
  {
    "id": "11",
    "name": "Amara Okafor",
    "type": "dental_hygienist",
    "address": "Fenway, 02215",
    "phone": "(617) 555-9876",
    "website": "https://www.fenwayhealthcenter.org/okafor",
    "care_needs": "prophylaxis;fluoride",
    "languages": "english;haitian;french",
    "insurance": "masshealth;bcbs;aetna",
    "additional_support": "disabled",
    "rating": "4.5",
    "image": "https://via.placeholder.com/500x300?text=Amara+Okafor",
    "zip_codes": "02115;02116;02117;02118;02119;02120;02121;02122;02215"
  },
  {
    "id": "12",
    "name": "Dr. David Kim",
    "type": "mobile_dentist",
    "address": "Newton, 02458",
    "phone": "(617) 555-5432",
    "website": "https://www.kimmobiledental.com",
    "care_needs": "prophylaxis;fluoride;fillings;extractions;endodontic;periodontal",
    "languages": "english;korean",
    "insurance": "masshealth;medicare;bcbs;aetna",
    "additional_support": "nursing_home;homebound;dementia",
    "rating": "4.7",
    "image": "https://via.placeholder.com/500x300?text=David+Kim",
    "zip_codes": "02115;02116;02117;02118;02119;02120;02121;02122;02458;02459;02460;02461;02462"
  },
  {
    "id": "13",
    "name": "Anh Nguyen",
    "type": "dental_hygienist",
    "address": "South Boston, 02127",
    "phone": "(617) 555-7654",
    "website": "https://www.southbostonhealth.org/nguyen",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;vietnamese",
    "insurance": "masshealth;medicare;bcbs",
    "additional_support": "disabled;homebound",
    "rating": "4.4",
    "image": "https://via.placeholder.com/500x300?text=Anh+Nguyen",
    "zip_codes": "02127;02128;02129;02130;02131;02132;02134;02135;02136"
  },
  {
    "id": "14",
    "name": "Fatima Al-Zahrani",
    "type": "dental_hygienist",
    "address": "Dorchester, 02124",
    "phone": "(617) 555-3210",
    "website": "https://www.dorchestercommunityhealth.org/alzahrani",
    "care_needs": "prophylaxis;fluoride",
    "languages": "english;arabic",
    "insurance": "masshealth;medicare",
    "additional_support": "nursing_home;disabled",
    "rating": "4.6",
    "image": "https://via.placeholder.com/500x300?text=Fatima+Al-Zahrani",
    "zip_codes": "02121;02122;02124;02125;02126;02127;02128;02129;02131;02132"
  },
  {
    "id": "15",
    "name": "Elena Vasquez",
    "type": "dental_hygienist",
    "address": "Brighton, 02135",
    "phone": "(617) 555-2468",
    "website": "https://www.brightonhealth.org/vasquez",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;spanish",
    "insurance": "masshealth;bcbs;aetna",
    "additional_support": "disabled;homebound",
    "rating": "4.7",
    "image": "https://via.placeholder.com/500x300?text=Elena+Vasquez",
    "zip_codes": "02134;02135;02136;02138;02139;02140;02141;02142"
  },
  {
    "id": "16",
    "name": "Dr. Kevin Tanaka",
    "type": "mobile_dentist",
    "address": "Newton, 02459",
    "phone": "(617) 555-1357",
    "website": "https://www.tanakadentalcare.com",
    "care_needs": "prophylaxis;fluoride;fillings;extractions;endodontic;periodontal;cancer_screening",
    "languages": "english",
    "insurance": "bcbs;delta;aetna;cigna;private",
    "additional_support": "nursing_home;dementia",
    "rating": "4.8",
    "image": "https://via.placeholder.com/500x300?text=Hiro+Tanaka",
    "zip_codes": "02115;02116;02117;02118;02119;02120;02121;02122;02458;02459;02460;02461;02462"
  },
  {
    "id": "17",
    "name": "Rachel Goldstein",
    "type": "dental_hygienist",
    "address": "Roxbury, 02120",
    "phone": "(617) 555-9753",
    "website": "https://www.roxburyhealthcenter.org/goldstein",
    "care_needs": "prophylaxis;fluoride",
    "languages": "english",
    "insurance": "masshealth;bcbs;medicare",
    "additional_support": "disabled",
    "rating": "4.5",
    "image": "https://via.placeholder.com/500x300?text=Rachel+Goldstein",
    "zip_codes": "02118;02119;02120;02121;02122;02124;02125;02126;02127;02128;02129;02130;02131;02132"
  },
  {
    "id": "18",
    "name": "Isabella Santos",
    "type": "dental_hygienist",
    "address": "Jamaica Plain, 02130",
    "phone": "(617) 555-8642",
    "website": "https://www.jamaicaplainhealth.org/santos",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;portuguese;spanish",
    "insurance": "masshealth;medicare",
    "additional_support": "homebound;disabled",
    "rating": "4.6",
    "image": "https://via.placeholder.com/500x300?text=Isabella+Santos",
    "zip_codes": "02130;02131;02132;02134;02135;02136"
  },
  {
    "id": "19",
    "name": "Dr. Anthony Durand",
    "type": "mobile_dentist",
    "address": "Chinatown, 02111",
    "phone": "(617) 555-7531",
    "website": "https://www.duboismobiledental.com",
    "care_needs": "prophylaxis;fluoride;fillings;extractions;endodontic;periodontal",
    "languages": "english",
    "insurance": "masshealth;medicare;bcbs;delta",
    "additional_support": "nursing_home;homebound;disabled",
    "rating": "4.9",
    "image": "https://via.placeholder.com/500x300?text=Antoine+Dubois",
    "zip_codes": "02108;02109;02110;02111;02113;02114;02115;02116"
  },
  {
    "id": "20",
    "name": "Yifan Li",
    "type": "dental_hygienist",
    "address": "East Boston, 02128",
    "phone": "(617) 555-1596",
    "website": "https://www.bostonchinatownhealth.org/wei",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;chinese",
    "insurance": "masshealth;bcbs;cigna",
    "additional_support": "homebound",
    "rating": "4.7",
    "image": "https://via.placeholder.com/500x300?text=Li+Wei",
    "zip_codes": "02128;02129;02130;02131;02132;02134;02135;02136"
  },
  {
    "id": "21",
    "name": "Dr. Michael O'Connor",
    "type": "mobile_dentist",
    "address": "East Boston, 02128",
    "phone": "(617) 555-3571",
    "website": "https://www.oconnormobiledental.com",
    "care_needs": "prophylaxis;fluoride;fillings;extractions;endodontic;periodontal;cancer_screening",
    "languages": "english",
    "insurance": "medicare;bcbs;delta;aetna;cigna",
    "additional_support": "nursing_home;homebound;dementia",
    "rating": "4.6",
    "image": "https://via.placeholder.com/500x300?text=Michael+OConnor",
    "zip_codes": "02128;02129;02130;02131;02132;02134;02135;02136"
  },
  {
    "id": "22",
    "name": "Jasmine Singh",
    "type": "dental_hygienist",
    "address": "Somerville, 02145",
    "phone": "(617) 555-8247",
    "website": "https://www.uphamscornerhealth.org/singh",
    "care_needs": "prophylaxis;fluoride",
    "languages": "english;hindi",
    "insurance": "masshealth;bcbs;aetna",
    "additional_support": "disabled;homebound",
    "rating": "4.4",
    "image": "https://via.placeholder.com/500x300?text=Jasmine+Singh",
    "zip_codes": "02143;02144;02145;02148;02149;02150;02151;02152;02153"
  },
  {
    "id": "23",
    "name": "Kwame Mensah",
    "type": "dental_hygienist",
    "address": "Mattapan, 02126",
    "phone": "(617) 555-9426",
    "website": "https://www.mattapanhealthcenter.org/mensah",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english",
    "insurance": "masshealth;medicare",
    "additional_support": "disabled",
    "rating": "4.5",
    "image": "https://via.placeholder.com/500x300?text=Kwame+Mensah",
    "zip_codes": "02121;02122;02124;02125;02126;02127;02128;02129;02131;02132"
  },
  {
    "id": "24",
    "name": "Eun-Ji Lee",
    "type": "dental_hygienist",
    "address": "Cambridge, 02138",
    "phone": "(617) 555-7135",
    "website": "https://www.bostondowntownhealth.org/lee",
    "care_needs": "prophylaxis;fluoride",
    "languages": "english;korean",
    "insurance": "masshealth;bcbs;cigna;delta",
    "additional_support": "homebound",
    "rating": "4.7",
    "image": "https://via.placeholder.com/500x300?text=Eun-Ji+Lee",
    "zip_codes": "02138;02139;02140;02141;02142"
  },
  {
    "id": "25",
    "name": "Sofia Hernandez",
    "type": "dental_hygienist",
    "address": "Mission Hill, 02115",
    "phone": "(617) 555-6421",
    "website": "https://www.missionhillhealth.org/hernandez",
    "care_needs": "prophylaxis;fluoride;cancer_screening",
    "languages": "english;spanish",
    "insurance": "masshealth;medicare;bcbs",
    "additional_support": "disabled;homebound",
    "rating": "4.6",
    "image": "https://via.placeholder.com/500x300?text=Sofia+Hernandez",
    "zip_codes": "02115;02116;02117;02118;02119;02120;02121;02122"
  }
];

// Modified loadProvidersFromCSV function to use the static data
async function loadProvidersFromCSV() {
  try {
    console.log('Loading providers from static data...');
    // Return providers without adding distance
    console.log(`Successfully loaded ${providersData.length} providers`);
    return providersData;
  } catch (error) {
    console.error('Error loading provider data:', error);
    return [];
  }
}

// Function to filter providers based on criteria
function filterProviders(providers, providerType, careNeeds, patientLanguage, patientInsurance, zipcode) {
  console.log('Filtering providers with criteria:', {
    providerType,
    careNeeds,
    patientLanguage,
    patientInsurance,
    zipcode
  });
  
  return providers.filter(provider => {
    // Check if provider type matches (if selected)
    const typeMatches = !providerType || provider.type === providerType;
    console.log(`Provider ${provider.name} type matches: ${typeMatches}`);
    
    // Separate dental care needs from additional patient information
    const dentalCareNeeds = careNeeds.filter(need => 
      !['nursing_home', 'homebound', 'disabled', 'dementia'].includes(need)
    );
    
    const additionalNeeds = careNeeds.filter(need => 
      ['nursing_home', 'homebound', 'disabled', 'dementia'].includes(need)
    );
    
    // Convert string properties to arrays for comparison
    const providerCareNeeds = provider.care_needs ? provider.care_needs.split(';') : [];
    const providerLanguages = provider.languages ? provider.languages.split(';') : [];
    const providerInsurance = provider.insurance ? provider.insurance.split(';') : [];
    const providerAdditionalSupport = provider.additional_support ? provider.additional_support.split(';') : [];
    const providerZipCodes = provider.zip_codes ? provider.zip_codes.split(';') : [];
    
    // Check if provider supports the selected dental care needs
    const hasMatchingCareNeeds = dentalCareNeeds.length === 0 || 
      dentalCareNeeds.every(need => providerCareNeeds.includes(need));
    console.log(`Provider ${provider.name} has matching care needs: ${hasMatchingCareNeeds}`);
    
    // Check if provider supports the selected additional needs
    const supportsAdditionalNeeds = additionalNeeds.length === 0 || 
      additionalNeeds.every(need => providerAdditionalSupport.includes(need));
    console.log(`Provider ${provider.name} supports additional needs: ${supportsAdditionalNeeds}`);
    
    // Check if provider supports the selected language
    const supportsLanguage = !patientLanguage || 
      providerLanguages.includes(patientLanguage);
    console.log(`Provider ${provider.name} supports language: ${supportsLanguage}`);
    
    // Check if provider accepts the selected insurance
    const acceptsInsurance = !patientInsurance || 
      providerInsurance.includes(patientInsurance);
    console.log(`Provider ${provider.name} accepts insurance: ${acceptsInsurance}`);
    
    // Check if provider serves the patient's zip code
    const servesZipCode = !zipcode || 
      providerZipCodes.includes(zipcode);
    console.log(`Provider ${provider.name} serves zip code: ${servesZipCode}`);
    
    const matches = typeMatches && hasMatchingCareNeeds && supportsLanguage && 
           acceptsInsurance && supportsAdditionalNeeds && servesZipCode;
    console.log(`Provider ${provider.name} matches all criteria: ${matches}`);
    
    return matches;
  });
}

// Function to display provider type in a user-friendly format
function getProviderTypeDisplay(type) {
  const typeMap = {
    'mobile_dentist': 'Mobile Dentist',
    'dental_hygienist': 'Public Health Dental Hygienist',
    'health_center': 'Community Health Center',
    'dental_school': 'Dental School'
  };
  
  return typeMap[type] || type;
}

// Format care needs and additional info for user-friendly display
function formatCharacteristicDisplay(charValue) {
  // This maps the internal values to user-friendly display text
  const charDisplayMap = {
    // Care Needs
    'prophylaxis': 'Prophylaxis',
    'fluoride': 'Fluoride Treatment',
    'cancer_screening': 'Oral Cancer Screening',
    'fillings': 'Fillings',
    'extractions': 'Extractions',
    'endodontic': 'Endodontic Treatment',
    'periodontal': 'Periodontal Treatment',
    
    // Additional Patient Information
    'nursing_home': 'Nursing Home',
    'homebound': 'Homebound',
    'disabled': 'Intellectually/Developmentally Disabled',
    'dementia': 'Dementia/Alzheimer\'s',
    
    // Languages
    'english': 'English',
    'spanish': 'Spanish',
    'arabic': 'Arabic',
    'chinese': 'Chinese',
    'french': 'French',
    'haitian': 'Haitian Creole',
    'hindi': 'Hindi',
    'italian': 'Italian',
    'korean': 'Korean',
    'portuguese': 'Portuguese',
    'russian': 'Russian',
    'vietnamese': 'Vietnamese',
    
    // Insurance
    'masshealth': 'MassHealth',
    'private': 'Private Pay',
    'bcbs': 'Blue Cross Blue Shield',
    'medicare': 'Medicare',
    'delta': 'Delta Dental',
    'aetna': 'Aetna',
    'cigna': 'Cigna',
  };
  
  return charDisplayMap[charValue] || charValue;
}

// Format insurance for display
function formatInsurance(insurance) {
  return formatCharacteristicDisplay(insurance);
}

// Format language for display
function formatLanguage(language) {
  return formatCharacteristicDisplay(language);
}