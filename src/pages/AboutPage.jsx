import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, ShieldCheck, Award, HeartHandshake, Sparkles, Calendar, CheckCircle2, Star } from 'lucide-react';
import AboutDoctor from '../components/AboutDoctor';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import LogoIcon from '../components/LogoIcon';
import { clinicData } from '../data/clinicData';

export default function AboutPage() {
  return (
    <div className="pt-4 pb-16 space-y-6">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary mb-3">
          <LogoIcon className="w-4 h-4" />
          <span>About Divyam Eye Care</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-dark-accent tracking-tight">
          Experienced Eye Care, Patient-First Approach
        </h1>
        <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Learn more about Dr. Priyanka Murgude and our commitment to clear, compassionate ophthalmology in Pimpri, Pune.
        </p>
      </section>

      {/* Main Doctor & Clinic Overview Component */}
      <AboutDoctor />

      {/* Doctor Profile Sections - Only render if data exists */}
      {clinicData.doctorProfile && (
        <>
          {/* Titles Section */}
          {clinicData.doctorProfile.titles && clinicData.doctorProfile.titles.length > 0 && (
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-white border border-brand-border p-6 sm:p-8 shadow-warm-sm">
                <h3 className="font-display font-bold text-2xl text-dark-accent mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Professional Titles
                </h3>
                <div className="flex flex-wrap gap-3">
                  {clinicData.doctorProfile.titles.map((title, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary-light text-primary font-semibold text-sm border border-primary/20"
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Degrees & Gold Medal Section */}
          {clinicData.doctorProfile.degrees && clinicData.doctorProfile.degrees.length > 0 && (
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-white border border-brand-border p-6 sm:p-8 shadow-warm-sm">
                <h3 className="font-display font-bold text-2xl text-dark-accent mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-secondary fill-secondary" />
                  Degrees & Academic Honors
                </h3>
                <div className="space-y-4">
                  {clinicData.doctorProfile.degrees.map((degree, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-brand-bg border border-brand-border"
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-dark-accent">{degree.name}</p>
                        <p className="text-sm text-brand-muted">{degree.institution}</p>
                        {degree.year && <p className="text-xs text-brand-subtle mt-1">{degree.year}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Awards Section */}
          {clinicData.doctorProfile.awards && clinicData.doctorProfile.awards.length > 0 && (
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-white border border-brand-border p-6 sm:p-8 shadow-warm-sm">
                <h3 className="font-display font-bold text-2xl text-dark-accent mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-secondary fill-secondary" />
                  Awards & Recognition
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clinicData.doctorProfile.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-brand-bg border border-brand-border"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-dark-accent text-sm">{award.title}</p>
                        <p className="text-xs text-brand-muted">{award.organization}</p>
                        {award.year && <p className="text-xs text-brand-subtle mt-1">{award.year}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Conference Recognitions Section */}
          {clinicData.doctorProfile.conferences && clinicData.doctorProfile.conferences.length > 0 && (
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-white border border-brand-border p-6 sm:p-8 shadow-warm-sm">
                <h3 className="font-display font-bold text-2xl text-dark-accent mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Conference Recognitions
                </h3>
                <div className="space-y-3">
                  {clinicData.doctorProfile.conferences.map((conference, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-2xl bg-brand-bg border border-brand-border"
                    >
                      <div>
                        <p className="font-bold text-dark-accent">{conference.name}</p>
                        <p className="text-sm text-brand-muted">{conference.role}</p>
                      </div>
                      {conference.year && (
                        <span className="px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold">
                          {conference.year}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Media Strip - Photos & Video */}
          {clinicData.doctorProfile.media && (
            <>
              {(clinicData.doctorProfile.media.photos && clinicData.doctorProfile.media.photos.length > 0) || clinicData.doctorProfile.media.videoUrl ? (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="rounded-3xl bg-white border border-brand-border p-6 sm:p-8 shadow-warm-sm">
                    <h3 className="font-display font-bold text-2xl text-dark-accent mb-6 text-center">
                      Gallery & Media
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Photo Slots */}
                      {clinicData.doctorProfile.media.photos && clinicData.doctorProfile.media.photos.length > 0 ? (
                        clinicData.doctorProfile.media.photos.map((photo, index) => (
                          <div
                            key={index}
                            className="aspect-square rounded-2xl overflow-hidden border border-brand-border shadow-warm-sm"
                          >
                            <img
                              src={photo}
                              alt={`Doctor photo ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))
                      ) : (
                        <>
                          {[1, 2, 3].map((slot) => (
                            <div
                              key={slot}
                              className="aspect-square rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center"
                            >
                              <p className="text-xs text-brand-muted">Photo slot {slot}</p>
                            </div>
                          ))}
                        </>
                      )}
                      
                      {/* Video Slot */}
                      <div className="aspect-square rounded-2xl overflow-hidden border border-brand-border shadow-warm-sm">
                        {clinicData.doctorProfile.media.videoUrl ? (
                          <iframe
                            src={clinicData.doctorProfile.media.videoUrl}
                            title="Doctor profile video"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-bg flex items-center justify-center">
                            <p className="text-xs text-brand-muted">Video slot</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}
            </>
          )}
        </>
      )}

      {/* Why Choose Us Principles */}
      <WhyChooseUs />

      {/* Patient Reviews / Testimonials */}
      <Reviews />

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-accent text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-lg border border-dark-deep relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Schedule Your Consultation with Dr. Murgude
            </h2>
            <p className="text-slate-300 text-sm max-w-lg">
              Accurate diagnostics, clear explanations, and thoughtful ophthalmic treatment tailored to you.
            </p>
          </div>
          <Link
            to="/appointment"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white font-bold text-sm shadow-lg shadow-secondary/30 hover:shadow-xl transition-all shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
