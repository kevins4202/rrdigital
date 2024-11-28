import 'bootstrap/dist/css/bootstrap.min.css';
import { MapPin, Globe, Map } from 'lucide-react';

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];


const FormStep2 = ({ formData, updateFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      address: { ...formData.address, [name]: value },
    });
  };

  return (
    <>
      <h2>Step 2: Location Information</h2>
      <div className="mb-3">
        <label htmlFor="street" className="form-label d-flex align-items-center">
          <MapPin className="me-2 text-muted" size={20} />
          Street Address
        </label>
        <input
          type="text"
          className="form-control"
          id="street"
          name="street"
          value={formData.address.street}
          onChange={handleChange}
          placeholder="Enter street address"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label d-flex align-items-center">
          <Map className="me-2 text-muted" size={20} />
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={formData.address.city}
          onChange={handleChange}
          placeholder="Enter city"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="state" className="form-label d-flex align-items-center">
          <Map className="me-2 text-muted" size={20} />
          State/Province
        </label>
        <input
          type="text"
          className="form-control"
          id="state"
          name="state"
          value={formData.address.state}
          onChange={handleChange}
          placeholder="Enter state or province"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="form-label d-flex align-items-center">
          <Map className="me-2 text-muted" size={20} />
          Postal Code
        </label>
        <input
          type="text"
          className="form-control"
          id="postalCode"
          name="postalCode"
          value={formData.address.postalCode}
          onChange={handleChange}
          placeholder="Enter postal code"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="form-label d-flex align-items-center">
          <Globe className="me-2 text-muted" size={20} />
          Country
        </label>
        <select
          className="form-select"
          id="country"
          name="country"
          value={formData.address.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FormStep2;
