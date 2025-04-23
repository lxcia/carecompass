// Provider data array
const providersData = [
  {
    id: "1",
    name: "Smile Bright Mobile Dentistry",
    type: "mobile_dentist",
    address: "123 Main St, Boston, MA 02108",
    phone: "(617) 555-1234",
    website: "https://www.smilebrightmobile.com",
    care_needs: "prophylaxis;fluoride;cancer_screening",
    languages: "english;spanish",
    insurance: "masshealth;medicare;bcbs",
    additional_support: "nursing_home;homebound",
    rating: "4.8",
    image: "https://via.placeholder.com/500x300?text=Smile+Bright"
  },
  {
    id: "2",
    name: "Community Dental Hygiene Services",
    type: "dental_hygienist",
    address: "456 Washington St, Boston, MA 02109",
    phone: "(617) 555-5678",
    website: "https://www.communitydentalservices.org",
    care_needs: "prophylaxis;fluoride",
    languages: "english;spanish;haitian",
    insurance: "masshealth;uninsured",
    additional_support: "homebound;disabled",
    rating: "4.6",
    image: "https://via.placeholder.com/500x300?text=Community+Dental"
  },
  {
    id: "3",
    name: "Boston Healthcare Center",
    type: "health_center",
    address: "789 Tremont St, Boston, MA 02116",
    phone: "(617) 555-9012",
    website: "https://www.bostonhealthcare.org",
    care_needs: "prophylaxis;fillings;extractions;endodontic;periodontal",
    languages: "english;spanish;chinese;vietnamese",
    insurance: "masshealth;bcbs;aetna;cigna",
    additional_support: "disabled",
    rating: "4.9",
    image: "https://via.placeholder.com/500x300?text=Boston+Healthcare"
  },
  {
    id: "4",
    name: "Tufts Dental School Clinic",
    type: "dental_school",
    address: "1 Kneeland St, Boston, MA 02111",
    phone: "(617) 555-3456",
    website: "https://www.tuftsdentalclinic.edu",
    care_needs: "prophylaxis;fluoride;fillings;extractions;endodontic;periodontal;cancer_screening",
    languages: "english;spanish;portuguese",
    insurance: "masshealth;private;delta",
    additional_support: "",
    rating: "4.7",
    image: "https://via.placeholder.com/500x300?text=Tufts+Dental"
  },
  {
    id: "5",
    name: "North End Dental Mobile Services",
    type: "mobile_dentist",
    address: "210 Hanover St, Boston, MA 02113",
    phone: "(617) 555-7890",
    website: "https://www.nedentalmobile.com",
    care_needs: "prophylaxis;fluoride;extractions",
    languages: "english;italian",
    insurance: "medicare;bcbs;aetna",
    additional_support: "nursing_home;homebound;dementia",
    rating: "4.5",
    image: "https://via.placeholder.com/500x300?text=North+End+Dental"
  },
  {
    id: "6",
    name: "Boston Public Health Commission Hygienist",
    type: "dental_hygienist",
    address: "1010 Massachusetts Ave, Boston, MA 02118",
    phone: "(617) 555-2345",
    website: "https://www.bphc.org/dental",
    care_needs: "prophylaxis;fluoride;cancer_screening",
    languages: "english;spanish;haitian;cape_verdean",
    insurance: "masshealth;uninsured",
    additional_support: "disabled;homebound",
    rating: "4.4",
    image: "https://via.placeholder.com/500x300?text=BPHC+Dental"
  },
  {
    id: "7",
    name: "Dorchester Community Health Center",
    type: "health_center",
    address: "1353 Dorchester Ave, Boston, MA 02122",
    phone: "(617) 555-6789",
    website: "https://www.dorchesterhealth.org",
    care_needs: "prophylaxis;fillings;extractions",
    languages: "english;spanish;vietnamese;haitian",
    insurance: "masshealth;medicare;bcbs",
    additional_support: "disabled",
    rating: "4.8",
    image: "https://via.placeholder.com/500x300?text=Dorchester+Health"
  },
  {
    id: "8",
    name: "Harvard School of Dental Medicine",
    type: "dental_school",
    address: "188 Longwood Ave, Boston, MA 02115",
    phone: "(617) 555-0123",
    website: "https://www.harvarddental.edu",
    care_needs: "prophylaxis;fluoride;fillings;extractions;endodontic;periodontal;cancer_screening",
    languages: "english;spanish;arabic;french",
    insurance: "private;delta;aetna;cigna",
    additional_support: "",
    rating: "4.9",
    image: "https://via.placeholder.com/500x300?text=Harvard+Dental"
  },
  {
    id: "9",
    name: "Roslindale Mobile Dental Care",
    type: "mobile_dentist",
    address: "4321 Washington St, Roslindale, MA 02131",
    phone: "(617) 555-4567",
    website: "https://www.roslindaledentalcare.com",
    care_needs: "prophylaxis;fluoride;fillings",
    languages: "english;spanish;portuguese",
    insurance: "masshealth;medicare",
    additional_support: "nursing_home;homebound;dementia",
    rating: "4.3",
    image: "https://via.placeholder.com/500x300?text=Roslindale+Dental"
  },
  {
    id: "10",
    name: "Cambridge Public Health Hygienist",
    type: "dental_hygienist",
    address: "119 Windsor St, Cambridge, MA 02139",
    phone: "(617) 555-8901",
    website: "https://www.cambridgepublichealth.org",
    care_needs: "prophylaxis;fluoride;cancer_screening",
    languages: "english;spanish;portuguese;russian",
    insurance: "masshealth;uninsured",
    additional_support: "disabled;homebound",
    rating: "4.6",
    image: "https://via.placeholder.com/500x300?text=Cambridge+Health"
  }
];

// Modified loadProvidersFromCSV function to use the static data
async function loadProvidersFromCSV() {
  try {
    console.log('Loading providers from static data...');
    // Add random distance to each provider
    const providers = providersData.map(provider => ({
      ...provider,
      distance: (Math.random() * 5).toFixed(1) + ' miles'
    }));
    console.log(`Successfully loaded ${providers.length} providers`);
    return providers;
  } catch (error) {
    console.error('Error loading provider data:', error);
    return [];
  }
}

// Function to calculate distance between two points (to be used in a real implementation)
function calculateDistance(address1, address2) {
  // In a real implementation, this would use a geocoding service
  // For now, we'll just return a random distance
  return (Math.random() * 10).toFixed(1) + ' miles';
}

// Function to filter providers based on criteria
function filterProviders(providers, providerType, careNeeds, patientLanguage, patientInsurance, address) {
  console.log('Filtering providers with criteria:', {
    providerType,
    careNeeds,
    patientLanguage,
    patientInsurance,
    address
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
    
    const matches = typeMatches && hasMatchingCareNeeds && supportsLanguage && 
           acceptsInsurance && supportsAdditionalNeeds;
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
    'periodontal': 'Periodontal Treatments',
    
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
    'uninsured': 'Uninsured/Self-Pay'
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