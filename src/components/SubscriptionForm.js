import React, { useState } from 'react';


const SubscriptionForm = () => {
  const [selectedService, setSelectedService] = useState('DSTV');
  const [formData, setFormData] = useState({
    name: '',
    package: '',
    price: '',
    phoneNumber: '',
    iucNumber: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = ['DSTV', 'GOTV', 'Startimes'];

  const packages = {
    DSTV: [
      { name: 'Premium', price: 37000 },
      { name: 'Compact Plus', price: 25000 },
      { name: 'Compact', price: 15700 },
      { name: 'Confam', price: 9300 },
      { name: 'Yanga', price: 5100 },
    ],
    GOTV: [
      { name: 'Supa +', price: 15700 },
      { name: 'Supa', price: 9600 },
      { name: 'Max', price: 7200 },
      { name: 'Jolli', price: 4850 },
      { name: 'Jinja', price: 3300 },
     
    ],
    Startimes: [
      { name: 'Classic', price: 3800 },
      { name: 'Basic', price: 2600 },
      { name: 'Nova', price: 900 },
      { name: 'Unique', price: 5700 },
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePackageChange = (e) => {
    const selectedPackage = packages[selectedService].find(
      (pkg) => pkg.name === e.target.value
    );
    if (selectedPackage) {
      setFormData({
        ...formData,
        package: selectedPackage.name,
        price: selectedPackage.price,
      });
    } else {
      setFormData({
        ...formData,
        package: '',
        price: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${formData.name}
Service: ${selectedService}
Package: ${formData.package}
Price: ${formData.price} NGN
Phone Number: ${formData.phoneNumber}
IUC Number: ${formData.iucNumber}`


    const whatsappUrl = `https://api.whatsapp.com/send?phone=2348039540800&text=${encodeURIComponent(whatsappMessage)}`;

    // Open the WhatsApp URL to send the message
    window.open(whatsappUrl, '_blank');

    // Show the submitted message
    setIsSubmitted(true);

    // Reset form data after submission
    setFormData({
      name: '',
      package: '',
      price: '',
      phoneNumber: '',
      iucNumber: '',
    });
  };

  return (
    <div className="subscription-container">
      <h2>Subscribe to a Service</h2>

      {/* Service Tabs */}
      <div className="service-tabs">
        {services.map((service) => (
          <button
            key={service}
            className={`service-tab ${selectedService === service ? `active-${service.toLowerCase()}` : ''}`}
            onClick={() => setSelectedService(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Subscription Form */}
      <form onSubmit={handleSubmit} className={`form-background ${selectedService.toLowerCase()}`}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="package">Package:</label>
          <select
            name="package"
            id="package"
            value={formData.package}
            onChange={handlePackageChange}
            required
          >
            <option value="">Select a Package</option>
            {packages[selectedService].map((pkg) => (
              <option key={pkg.name} value={pkg.name}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>

        {formData.price && (
          <div className="price-display">
            <strong>Price: {formData.price} NGN</strong>
          </div>
        )}

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="iucNumber">IUC Number:</label>
          <input
            type="text"
            name="iucNumber"
            id="iucNumber"
            value={formData.iucNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div className="success-message">
          <p>Your information has been submitted successfully!</p>
          <p>Remember to send your receipt image via WhatsApp.</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
