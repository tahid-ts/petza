import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUsContent = () => {
  return (
    <div className="w-full max-full mx-auto p-4">
      {/* Map Section */}
      <div className="mb-8">
        <iframe
          className="w-full h-[358px] rounded-lg shadow-md"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dhaka,%20Bangladesh&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
          allowFullScreen
          title="Google Map - Dhaka"
          loading="lazy"
        />
      </div>

      {/* Contact Information */}
      <div className="space-y-3.5 font-title">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
            <p className="text-gray-600">+1 (310) 000-0000</p>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Email Address
            </h3>
            <p className="text-gray-600">info@demo.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Address
            </h3>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
