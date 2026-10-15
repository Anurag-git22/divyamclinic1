import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShieldAlert, Activity, Glasses, Stethoscope, SmilePlus, ArrowRight, Calendar, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import LogoIcon from '../components/LogoIcon';

const serviceDetails = {
  'cataract-checkup-surgery': {
    details: 'Comprehensive pre-operative assessment, optical biometry, and intraocular lens (IOL) selection. Guidance on modern micro-incision phacoemulsification techniques for fast visual recovery.',
    symptoms: ['Cloudy or blurry vision', 'Glare or halos around headlights at night', 'Frequent changes in eyeglass prescription', 'Faded color perception'],
    procedure: 'Slit-lamp examination & dilated fundus evaluation with personalized lens guidance.'
  },
  'eye-infection': {
    details: 'Prompt clinical diagnosis and tailored antibiotic/anti-inflammatory treatments for acute and chronic ocular infections to prevent corneal complications.',
    symptoms: ['Redness and irritation', 'Watery or purulent discharge', 'Itching, burning, or foreign body sensation', 'Crusted eyelashes upon waking'],
    procedure: 'Microscopic anterior segment examination, tear film assessment, and pathogen-targeted therapy.'
  },
  'ocular-trauma-care': {
    details: 'Urgent ophthalmic assessment of corneal abrasions, foreign bodies, blunt trauma, or chemical exposure to safeguard your long-term visual acuity.',
    symptoms: ['Sudden ocular pain', 'Persistent feeling of grit or foreign body', 'Traumatic redness or swelling', 'Sensitivity to light (photophobia)'],
    procedure: 'Fluorescein staining, high-magnification foreign body removal, and protective healing regimen.'
  },
  'quality-frames-contact-lenses': {
    details: 'Precise subjective and objective refraction for spectacles, computer glasses, and contact lenses. Expert counseling on myopia, hyperopia, and astigmatism management.',
    symptoms: ['Eyestrain after computer work', 'Difficulty reading small print', 'Distance blur while driving', 'Headaches associated with visual focus'],
    procedure: 'Digital autorefraction, trial frame testing, and customized lifestyle lens recommendation.'
  },
  'exclusive-eye-checkup': {
    details: 'Regular preventive eye health screenings, dry eye syndrome management, diabetic retinopathy screening, and glaucoma intraocular pressure checks.',
    symptoms: ['Dry, gritty, or tired eyes', 'Family history of glaucoma', 'Routine screening for diabetic patients', 'Intermittent vision fluctuations'],
    procedure: 'Full ocular baseline evaluation including tonometry and optic nerve head examination.'
  },
  'dry-eye-digital-strain': {
    details: 'Targeted tear-film stability testing (TBUT), meibomian gland evaluation, and personalized lubricating drops regimen combined with screen hygiene advice.',
    symptoms: ['Burning or gritty sensation', 'Fluctuating vision while using screens', 'Excessive tearing or reflexive watering', 'Eye fatigue after working on monitors'],
    procedure: 'Tear break-up analysis, lid margin hygiene guidance, and targeted ocular lubricant protocol.'
  },
  'eyelid-consultation-surgeries': {
    details: 'Consultation and clinical guidance for functional and aesthetic eyelid concerns, including droopy upper eyelids (ptosis), dermatochalasis, and chalazion management.',
    symptoms: ['Heavy or sagging upper eyelids', 'Reduced peripheral vision from overhanging skin', 'Chronic recurrent eyelid bumps (chalazion)', 'Tired appearance around the eyes'],
    procedure: 'Anatomic lid evaluation, visual field obstruction check, and surgical feasibility consultation.'
  },
  'children-eye-clinic': {
    details: 'Child-friendly visual acuity evaluation, binocular alignment check, and early screening for amblyopia (lazy eye), convergence issues, and student myopia.',
    symptoms: ['Sitting too close to television/books', 'Frequent eye rubbing or blinking', 'Head tilt or squinting when looking at distance', 'Difficulty focusing in school'],
    procedure: 'Cycloplegic pediatric refraction, ocular motility assessment, and parent lifestyle counseling.'
  }
};

const serviceIcons = {
  Eye: Eye,
  ShieldAlert: ShieldAlert,
  Activity: Activity,
  Glasses: Glasses,
  Stethoscope: Stethoscope,
  SmilePlus: SmilePlus,
  Sparkles: Sparkles,
  CheckCircle2: CheckCircle2,
};

export default function ServicesPage() {
  // Split services into detailed (with extra info) and compact (without)
  const detailedServices = clinicData.services.filter(service => {
    const extra = serviceDetails[service.id];
    return extra && (extra.details || extra.symptoms);
  });

  const compactServices = clinicData.services.filter(service => {
    const extra = serviceDetails[service.id];
    return !extra || (!extra.details && !extra.symptoms);
  });

  return (
    <div className="pt-4 pb-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <LogoIcon className="w-4 h-4" />
          <span>Clinical Excellence</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-dark-accent tracking-tight">
          Comprehensive Ophthalmology Services
        </h1>
        <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Led by Dr. Priyanka Murgude, every consultation includes thorough diagnostic testing, honest guidance, and personalized care in Nehru Nagar, Pimpri.
        </p>
      </section>

      {/* Detailed Services Grid - 2 columns on desktop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {detailedServices.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Eye;
            const extra = serviceDetails[service.id] || {};
            const isLastOdd = index === detailedServices.length - 1 && detailedServices.length % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-28 p-5 xs:p-6 sm:p-8 rounded-3xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col h-full ${
                  isLastOdd ? 'lg:col-span-2' : ''
                }`}
              >
                {isLastOdd ? (
                  // Last odd card - two-column layout inside
                  <div className="flex flex-col lg:flex-row gap-6 h-full">
                    {/* Left column: header, title, description */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-light border border-primary/30 flex items-center justify-center text-primary shadow-sm shrink-0">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-brand-bg text-brand-muted font-medium border border-brand-border shrink-0">
                          Consultation & Guidance
                        </span>
                      </div>

                      <h2 className="font-display font-bold text-xl sm:text-2xl text-dark-accent mb-2">
                        {service.name}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-brand-muted leading-relaxed mb-5">
                        {service.description}
                      </p>

                      <div className="mt-auto pt-5 sm:pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                        <span className="text-xs text-brand-muted italic">
                          Consultation with Dr. Priyanka Murgude
                        </span>
                        <Link
                          to={`/appointment?service=${encodeURIComponent(service.name)}`}
                          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white text-xs sm:text-sm font-semibold shadow-md shadow-secondary/25 hover:shadow-lg hover:shadow-secondary/35 transition-all text-center w-full sm:w-auto"
                        >
                          <Calendar className="w-4 h-4 shrink-0" />
                          <span>Book Consultation</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right column: clinical details */}
                    <div className="flex-1 space-y-5">
                      {extra.details && (
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-brand-bg/80 border border-brand-border/60 text-xs sm:text-sm text-brand-text leading-relaxed">
                          <p className="font-semibold text-dark-accent mb-1">Clinical Approach:</p>
                          <p>{extra.details}</p>
                        </div>
                      )}

                      {extra.symptoms && (
                        <div className="space-y-2">
                          <p className="text-xs font-bold text-dark-accent uppercase tracking-wider">
                            Common Symptoms / Indications:
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {extra.symptoms.map((symptom, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-brand-muted">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                <span>{symptom}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // Regular detailed card
                  <>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-light border border-primary/30 flex items-center justify-center text-primary shadow-sm shrink-0">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-brand-bg text-brand-muted font-medium border border-brand-border shrink-0">
                          Consultation & Guidance
                        </span>
                      </div>

                      <h2 className="font-display font-bold text-xl sm:text-2xl text-dark-accent mb-2">
                        {service.name}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-brand-muted leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {extra.details && (
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-brand-bg/80 border border-brand-border/60 text-xs sm:text-sm text-brand-text mb-5 leading-relaxed">
                          <p className="font-semibold text-dark-accent mb-1">Clinical Approach:</p>
                          <p>{extra.details}</p>
                        </div>
                      )}

                      {extra.symptoms && (
                        <div className="space-y-2 mb-6">
                          <p className="text-xs font-bold text-dark-accent uppercase tracking-wider">
                            Common Symptoms / Indications:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {extra.symptoms.map((symptom, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-brand-muted">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                <span>{symptom}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-auto pt-5 sm:pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <span className="text-xs text-brand-muted italic">
                        Consultation with Dr. Priyanka Murgude
                      </span>
                      <Link
                        to={`/appointment?service=${encodeURIComponent(service.name)}`}
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white text-xs sm:text-sm font-semibold shadow-md shadow-secondary/25 hover:shadow-lg hover:shadow-secondary/35 transition-all text-center w-full sm:w-auto"
                      >
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span>Book Consultation</span>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Compact Services Section - 3 columns on desktop (9 cards = 3x3 grid) */}
      {compactServices.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl text-dark-accent">
              More Services
            </h3>
            <p className="text-sm text-brand-muted mt-2">
              Additional specialized procedures and consultations available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {compactServices.map((service) => {
              const Icon = serviceIcons[service.icon] || Eye;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 p-4 sm:p-5 rounded-2xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col h-full"
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-light border border-primary/30 flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-dark-accent leading-tight min-h-[2.5rem]">
                        {service.name}
                      </h3>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to={`/appointment?service=${encodeURIComponent(service.name)}`}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white text-xs font-semibold shadow-md shadow-secondary/25 hover:shadow-lg transition-all text-center w-full"
                  >
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Responsible Healthcare Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed flex items-start gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Note on Medical Care:</strong> All treatments, surgical guidance, and spectacle prescriptions begin with a thorough in-person ophthalmic evaluation with Dr. Priyanka Murgude to determine individual clinical suitability.
          </p>
        </div>
      </section>

    </div>
  );
}
