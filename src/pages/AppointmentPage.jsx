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

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
