import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShieldAlert, Activity, Glasses, Stethoscope, SmilePlus, ArrowRight, Calendar, CheckCircle2, AlertCircle, Sparkles, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import LogoIcon from '../components/LogoIcon';

const serviceDetails = {
  'cataract-surgery-lens-guidance': {
    details: 'Comprehensive pre-operative assessment, optical biometry, and intraocular lens (IOL) selection. Guidance on modern micro-incision phacoemulsification techniques for fast visual recovery.',
    symptoms: ['Cloudy or blurry vision', 'Glare or halos around headlights at night', 'Frequent changes in eyeglass prescription', 'Faded color perception'],
    procedure: 'Slit-lamp examination & dilated fundus evaluation with personalized lens guidance.'
  },
  'eye-infection-conjunctivitis-care': {
    details: 'Prompt clinical diagnosis and tailored antibiotic/anti-inflammatory treatments for acute and chronic ocular infections to prevent corneal complications.',
    symptoms: ['Redness and irritation', 'Watery or purulent discharge', 'Itching, burning, or foreign body sensation', 'Crusted eyelashes upon waking'],
    procedure: 'Microscopic anterior segment examination, tear film assessment, and pathogen-targeted therapy.'
  },
  'emergency-eye-injury-care': {
    details: 'Urgent ophthalmic assessment of corneal abrasions, foreign bodies, blunt trauma, or chemical exposure to safeguard your long-term visual acuity.',
    symptoms: ['Sudden ocular pain', 'Persistent feeling of grit or foreign body', 'Traumatic redness or swelling', 'Sensitivity to light (photophobia)'],
    procedure: 'Fluorescein staining, high-magnification foreign body removal, and protective healing regimen.'
  },
  'vision-correction-opticals': {
    details: 'Precise subjective and objective refraction for spectacles, computer glasses, and contact lenses. Expert counseling on myopia, hyperopia, and astigmatism management.',
    symptoms: ['Eyestrain after computer work', 'Difficulty reading small print', 'Distance blur while driving', 'Headaches associated with visual focus'],
    procedure: 'Digital autorefraction, trial frame testing, and customized lifestyle lens recommendation.'
  },
  'general-ophthalmology-glaucoma-check': {
    details: 'Regular preventive eye health screenings, dry eye syndrome management, diabetic retinopathy screening, and glaucoma intraocular pressure checks.',
    symptoms: ['Routine check-up or family history of glaucoma', 'Subtle peripheral vision changes', 'Intermittent ocular pressure sensation', 'Periodic blurry vision'],
    procedure: 'Full ocular baseline evaluation including tonometry and optic nerve head examination.'
  },
  'dry-eye-digital-eyestrain-therapy': {
    details: 'Targeted tear-film stability testing (TBUT), meibomian gland evaluation, and personalized lubricating drops regimen combined with screen hygiene advice.',
    symptoms: ['Burning or gritty sensation', 'Fluctuating vision while using screens', 'Excessive tearing or reflexive watering', 'Eye fatigue after working on monitors'],
    procedure: 'Tear break-up analysis, lid margin hygiene guidance, and targeted ocular lubricant protocol.'
  },
  'pediatric-student-eye-screenings': {
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
  const [detailsModal, setDetailsModal] = React.useState(null);

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
    <div className="pt-4 pb-16 space-y-8 sm:space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <LogoIcon className="w-4 h-4" />
          <span>Clinical Excellence</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-dark-accent tracking-tight">
          Comprehensive Ophthalmology Services
        </h1>
        <p className="mt-3 text-xs sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Led by Dr. Priyanka Murgude, every consultation includes thorough diagnostic testing, honest guidance, and personalized care in Nehru Nagar, Pimpri.
        </p>
      </section>

      {/* Detailed Services Grid - 2 columns on mobile & desktop */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="cards-grid lg:grid-cols-2 items-stretch">
          {detailedServices.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Eye;
            const extra = serviceDetails[service.id] || {};
            const isLastOdd = index === detailedServices.length - 1 && detailedServices.length % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-28 p-3 xs:p-4 sm:p-8 rounded-[14px] sm:rounded-3xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col h-full card-compact ${
                  isLastOdd ? 'col-span-2' : ''
                }`}
              >
                {/* Header row: Icon & Tag */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 sm:mb-6">
                  <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary-light border border-primary/30 flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <span className="hidden sm:inline-block text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-brand-bg text-brand-muted font-medium border border-brand-border shrink-0">
                    Consultation & Guidance
                  </span>
                </div>

                {/* Title & Description */}
                <h2 className="font-display font-bold text-sm xs:text-base sm:text-2xl text-dark-accent mb-1.5 sm:mb-2 line-clamp-2 sm:line-clamp-none">
                  {service.name}
                </h2>
                <p className="text-[11px] xs:text-xs sm:text-base text-brand-muted leading-snug sm:leading-relaxed mb-2.5 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>

                {/* Mobile Details Toggle */}
                {(extra.details || extra.symptoms) && (
                  <button
                    type="button"
                    onClick={() => setDetailsModal({ service, extra })}
                    className="sm:hidden text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mb-2 text-left"
                  >
                    <span>Clinical Details &rarr;</span>
                  </button>
                )}

                {/* Tablet & Desktop: Clinical Approach & Symptoms displayed directly */}
                <div className="hidden sm:block space-y-4 mb-4">
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

                {/* Bottom CTA Button - Pinned to bottom */}
                <div className="mt-auto pt-3 sm:pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <span className="hidden sm:inline text-xs text-brand-muted italic">
                    Consultation with Dr. Priyanka Murgude
                  </span>
                  <Link
                    to={`/appointment?service=${encodeURIComponent(service.name)}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white text-xs sm:text-sm font-semibold shadow-md shadow-secondary/25 hover:shadow-lg hover:shadow-secondary/35 transition-all text-center w-full sm:w-auto min-h-[36px]"
                  >
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="sm:hidden">Book</span>
                    <span className="hidden sm:inline">Book Consultation</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compact Services Section - 2 columns on mobile, 3 columns on desktop */}
      {compactServices.length > 0 && (
        <section className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-dark-accent">
              More Services
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 sm:mt-2">
              Additional specialized procedures and consultations available
            </p>
          </div>

          <div className="cards-grid md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {compactServices.map((service) => {
              const Icon = serviceIcons[service.icon] || Eye;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 p-3 xs:p-4 sm:p-5 rounded-[14px] sm:rounded-2xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col h-full card-compact"
                >
                  <div className="flex-1 flex flex-col">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary-light border border-primary/30 flex items-center justify-center text-primary shadow-sm shrink-0 mb-2 sm:mb-3">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    
                    <h3 className="font-display font-bold text-xs xs:text-sm sm:text-lg text-dark-accent leading-tight min-h-[2rem] sm:min-h-[2.5rem] line-clamp-2">
                      {service.name}
                    </h3>
                    
                    <p className="text-[11px] xs:text-xs sm:text-sm text-brand-muted leading-snug sm:leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to={`/appointment?service=${encodeURIComponent(service.name)}`}
                    className="mt-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white text-xs font-semibold shadow-md shadow-secondary/25 hover:shadow-lg transition-all text-center w-full min-h-[36px]"
                  >
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span className="sm:hidden">Book</span>
                    <span className="hidden sm:inline">Book Consultation</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Clinical Details Modal for Mobile */}
      {detailsModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setDetailsModal(null)}
        >
          <div
            className="bg-white rounded-3xl p-5 sm:p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl border border-brand-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <h3 className="font-display font-bold text-base sm:text-lg text-dark-accent">
                {detailsModal.service.name}
              </h3>
              <button
                onClick={() => setDetailsModal(null)}
                className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-dark-accent hover:bg-primary-light"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-brand-muted leading-relaxed">
              {detailsModal.service.description}
            </p>

            {detailsModal.extra.details && (
              <div className="p-3.5 rounded-2xl bg-brand-bg/80 border border-brand-border/60 text-xs text-brand-text leading-relaxed">
                <p className="font-semibold text-dark-accent mb-1">Clinical Approach:</p>
                <p>{detailsModal.extra.details}</p>
              </div>
            )}

            {detailsModal.extra.symptoms && (
              <div className="space-y-2">
                <p className="text-xs font-bold text-dark-accent uppercase tracking-wider">
                  Common Symptoms / Indications:
                </p>
                <div className="space-y-1.5">
                  {detailsModal.extra.symptoms.map((symptom, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2">
              <Link
                to={`/appointment?service=${encodeURIComponent(detailsModal.service.name)}`}
                onClick={() => setDetailsModal(null)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-white font-semibold text-xs shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation for This Service</span>
              </Link>
            </div>
          </div>
        </div>
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
