import React from 'react';

interface Package {
  name: string;
  price: string;
  features: string[];
}

const packages: Package[] = [
  {
    name: "Sweet Note",
    price: "Free",
    features: ["One message", "Countdown timer", "Web-only delivery"],
  },
  {
    name: "Love Letter",
    price: "$9.99/month",
    features: ["Unlimited messages", "Photo attachments", "1-year scheduling"],
  },
  {
    name: "Eternal Bond",
    price: "$49.99/year",
    features: ["All Love Letter features", "Video messages", "SMS/email delivery", "Message encryption"],
  },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-16 px-6 text-center">
      <h2 className="text-4xl font-semibold text-rose-700 mb-12">Choose Your Package</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-rose-200 rounded-xl shadow-md w-80 p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold text-rose-700">{pkg.name}</h3>
            <p className="text-lg text-rose-600 my-2">{pkg.price}</p>
            <ul className="text-left list-disc list-inside text-sm mb-4">
              {pkg.features.map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
            </ul>
            <button className="w-full bg-rose-600 text-white py-2 rounded hover:bg-rose-700 transition">
              Select
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
