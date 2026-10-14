import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, FileText, HelpCircle, Phone, ArrowRight, Calendar, Building2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import LogoIcon from '../components/LogoIcon';

export default function InsurancePage() {
  const steps = [
    {
      step: '01',
      title: 'Initial Evaluation',
      desc: 'Dr. Priyanka Murgude examines your condition and advises whether surgical or procedural intervention is recommended.'
    },
    {
      step: '02',
      title: 'Policy Verification',
      desc: 'Share your health insurance card and government ID with our desk for cashless eligibility and pre-authorization verification.'
    },
    {
      step: '03',
      title: 'Pre-Authorization Request',
      desc: 'The pre-authorization documents are submitted to your insurer/TPA partner for review and cashless approval.'
    },
    {
      step: '04',
      title: 'Smooth Admission & Care',
      desc: 'Once approved, your procedure is scheduled. Smooth admission and care with discharge after final approval.'
    }
  ];

  const faqs = [
    {
      q: 'Which insurance providers and TPAs are supported?',
      a: 'We work with listed major general insurance and TPA partners, including Mediassist, Bajaj Allianz, SBI General, Universal Sompo, ICICI Lombard, and Zurich Kotak General Insurance.'
    },
    {
      q: 'What documents are required for cashless eye surgery claims?',
      a: 'Please carry your active Health Insurance E-card/policy copy, photo ID (Aadhaar/PAN card), and any past ophthalmic prescription or medical records.'
    },
    {
      q: 'Does insurance cover cataract lens upgrades?',
      a: 'Most health policies cover standard cataract surgery and standard monofocal lenses. Advanced premium lenses (toric, multifocal) may involve a co-pay or difference amount depending on your insurer.'
    }
  ];

  return (
    <div className="pt-4 pb-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>Hassle-Free Healthcare</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-dark-accent tracking-tight">
          Cashless Insurance & TPA Support
        </h1>
        <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Divyam Eye Care facilitates transparent insurance coordination with leading health insurers to make quality eye treatment smooth and accessible.
        </p>
        
        {/* Reimbursement Note Badge */}
        {clinicData.insuranceNote && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold shadow-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>{clinicData.insuranceNote}</span>
          </div>
        )}
      </section>

      {/* Partners Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-display font-bold text-2xl text-dark-accent">
            Accepted Insurance & TPA Partners
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Official coordination available for listed partners
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {clinicData.insurancePartners.map((partner, index) => (
            <div
              key={index}
              className="p-4 xs:p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all flex items-start gap-3.5 sm:gap-4"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary shrink-0">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-sm sm:text-base text-dark-accent">
                  {partner.name}
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">{partner.type}</p>
                <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>Cashless Support Available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How the Process Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 xs:p-8 sm:p-12 rounded-3xl bg-white border border-brand-border shadow-warm-sm">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Simple & Transparent</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark-accent mt-1">
              How Cashless Claims Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((item) => (
              <div key={item.step} className="p-4 sm:p-5 rounded-2xl bg-brand-bg border border-brand-border/70 flex flex-col justify-between">
                <div>
                  <span className="font-display font-bold text-2xl text-primary">{item.step}</span>
                  <h3 className="font-bold text-base text-dark-accent mt-2">{item.title}</h3>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Co-payment Note */}
          {clinicData.cashlessCoPaymentNote && (
            <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">Note:</span> {clinicData.cashlessCoPaymentNote}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-2xl text-dark-accent">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-brand-border shadow-warm-sm">
              <h3 className="font-display font-bold text-base text-dark-accent flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact for Insurance Assistance */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-brand-bg border border-brand-border">
          <h3 className="font-display font-bold text-xl text-dark-accent">
            Need Help Verifying Your Policy?
          </h3>
          <p className="text-sm text-brand-muted mt-1 max-w-md mx-auto">
            Book an appointment with Dr. Priyanka Murgude and our clinic staff will assist with insurance pre-authorization.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white text-xs font-semibold shadow-md shadow-secondary/25 hover:shadow-lg transition-all"
            >
              <LogoIcon className="w-5 h-5" />
              <span>Book Appointment & Verify Insurance</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
