import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';
import LogoIcon from '../components/LogoIcon';
import { clinicData } from '../data/clinicData';

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const preselectedReason = searchParams.get('service') || '';

  return (
    <div className="pt-4 pb-16 space-y-10">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <LogoIcon className="w-4 h-4" />
          <span>Easy Scheduling</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-dark-accent tracking-tight">
          Book Your Ophthalmology Consultation
        </h1>
        <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Select your preferred date and time for a consultation with Dr. Priyanka Murgude. We will contact you promptly to confirm.
        </p>
      </section>

      {/* Main Appointment Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form on the left / main area */}
          <div className="lg:col-span-8" id="appointment-form">
            <AppointmentForm preselectedReason={preselectedReason} />
          </div>

          {/* Practical Info Card on the right */}
          <div className="lg:col-span-4 space-y-6 lg:mt-16">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-brand-border shadow-warm-sm space-y-6">
              <h3 className="font-display font-bold text-lg text-dark-accent border-b border-brand-border/60 pb-3">
                Appointment Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-brand-text">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-dark-accent">Operating Timings</p>
                    <p className="text-brand-muted mt-0.5">{clinicData.placeholders.openingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-dark-accent">Contact Support</p>
                    <p className="text-brand-muted mt-0.5">{clinicData.placeholders.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-dark-accent">Clinic Location</p>
                    <p className="text-brand-muted mt-0.5 leading-relaxed">
                      Shop No. 1, Aaikrupa Building, Udyamnagar, New Telco Road, Nehru Nagar, Pimpri.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-primary-light/50 border border-primary/20 text-xs text-brand-text space-y-2">
                <p className="font-semibold text-primary flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>What to bring for your visit:</span>
                </p>
                <ul className="space-y-1 text-brand-muted pl-5 list-disc">
                  <li>Current glasses / spectacle prescriptions</li>
                  <li>Recent eye drops or medications used</li>
                  <li>Health insurance card (for cashless procedures)</li>
                </ul>
              </div>

              {/* WhatsApp Booking Option */}
              <a
                href={`https://wa.me/${clinicData.placeholders.whatsapp}?text=${encodeURIComponent(clinicData.placeholders.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-5 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold shadow-md transition-all text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Book via WhatsApp</span>
                </div>
              </a>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
