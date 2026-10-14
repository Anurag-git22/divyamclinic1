import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShieldAlert, Activity, Glasses, Stethoscope, SmilePlus, ArrowRight, Calendar, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import LogoIcon from '../components/LogoIcon';

const serviceDetails = {
  'cataract-surgery': {
    details: 'Comprehensive pre-operative assessment, optical biometry, and intraocular lens (IOL) selection. Guidance on modern micro-incision phacoemulsification techniques for fast visual recovery.',
    symptoms: ['Cloudy or blurry vision', 'Glare or halos around headlights at night', 'Frequent changes in eyeglass prescription', 'Faded color perception'],
    procedure: 'Slit-lamp examination & dilated fundus evaluation with personalized lens guidance.'
  },
  'eye-infection': {
    details: 'Prompt clinical diagnosis and tailored antibiotic/anti-inflammatory treatments for acute and chronic ocular infections to prevent corneal complications.',
    symptoms: ['Redness and irritation', 'Watery or purulent discharge', 'Itching, burning, or foreign body sensation', 'Crusted eyelashes upon waking'],
    procedure: 'Microscopic anterior segment examination, tear film assessment, and pathogen-targeted therapy.'
  },
  'eye-injury': {
    details: 'Urgent ophthalmic assessment of corneal abrasions, foreign bodies, blunt trauma, or chemical exposure to safeguard your long-term visual acuity.',
    symptoms: ['Sudden ocular pain', 'Persistent feeling of grit or foreign body', 'Traumatic redness or swelling', 'Sensitivity to light (photophobia)'],
    procedure: 'Fluorescein staining, high-magnification foreign body removal, and protective healing regimen.'
  },
  'vision-correction': {
    details: 'Precise subjective and objective refraction for spectacles, computer glasses, and multifocal lenses. Expert counseling on myopia, hyperopia, and astigmatism management.',
    symptoms: ['Eyestrain after computer work', 'Difficulty reading small print', 'Distance blur while driving', 'Headaches associated with visual focus'],
    procedure: 'Digital autorefraction, trial frame testing, and customized lifestyle lens recommendation.'
  },
  'general-ophthalmology': {
    details: 'Regular preventive eye health screenings, dry eye syndrome management, diabetic retinopathy screening, and glaucoma intraocular pressure checks.',
    symptoms: ['Dry, gritty, or tired eyes', 'Family history of glaucoma', 'Routine screening for diabetic patients', 'Intermittent vision fluctuations'],
    procedure: 'Full ocular baseline evaluation including tonometry and optic nerve head examination.'
  },
  'dry-eye-digital-strain': {
    details: 'Targeted tear-film stability testing (TBUT), meibomian gland evaluation, and personalized lubricating drops regimen combined with screen hygiene advice.',
    symptoms: ['Burning or gritty sensation', 'Fluctuating vision while using screens', 'Excessive tearing or reflexive watering', 'Eye fatigue after working on monitors'],
    procedure: 'Tear break-up analysis, lid margin hygiene guidance, and targeted ocular lubricant protocol.'
  },
  'blepharoplasty': {
    details: 'Consultation and clinical guidance for functional and aesthetic eyelid concerns, including droopy upper eyelids (ptosis), dermatochalasis, and chalazion management.',
    symptoms: ['Heavy or sagging upper eyelids', 'Reduced peripheral vision from overhanging skin', 'Chronic recurrent eyelid bumps (chalazion)', 'Tired appearance around the eyes'],
    procedure: 'Anatomic lid evaluation, visual field obstruction check, and surgical feasibility consultation.'
  },
  'pediatric-eye-screening': {
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

      {/* Services Grid with Rich Clinical Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clinicData.services.map((service) => {
            const Icon = serviceIcons[service.icon] || Eye;
            const extra = serviceDetails[service.id] || {};

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 p-5 xs:p-6 sm:p-8 rounded-3xl bg-white border border-brand-border shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between"
              >
                <div>
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

                <div className="pt-5 sm:pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
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
            );
          })}
        </div>
      </section>

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
