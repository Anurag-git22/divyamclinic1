import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, FileText, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { submitAppointment, isSupabaseConfigured } from '../lib/supabase';
import { clinicData } from '../data/clinicData';

export default function AppointmentForm({ preselectedReason = '', onClearPreselected }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    appointment_type: 'Consultation',
    reason: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [responseInfo, setResponseInfo] = useState(null);

  // Sync preselected reason if user clicked "Book Consultation" on a service card
  useEffect(() => {
    if (preselectedReason) {
      setFormData((prev) => ({
        ...prev,
        reason: preselectedReason,
      }));
    }
  }, [preselectedReason]);

  // Set min date to today's date (YYYY-MM-DD)
  const todayString = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
  ];

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please enter a valid name';
    }

    // Phone validation: Indian mobile format (10 digits, optionally prefixed with +91)
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.preferred_date) {
      errs.preferred_date = 'Preferred date is required';
    } else if (formData.preferred_date < todayString) {
      errs.preferred_date = 'Date cannot be in the past';
    }

    if (!formData.preferred_time) {
      errs.preferred_time = 'Please select a preferred time slot';
    }

    if (!formData.consent) {
      errs.consent = 'Please agree to share contact info for appointment coordination';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear specific error on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === 'loading') return;
    if (!validate()) return;

    setStatus('loading');
    setResponseInfo(null);

    try {
      const result = await submitAppointment({
        name: formData.name,
        phone: formData.phone,
        preferred_date: formData.preferred_date,
        preferred_time: formData.preferred_time,
        appointment_type: formData.appointment_type,
        reason: formData.reason,
      });

      setStatus('success');
      setResponseInfo(result);
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setResponseInfo({ error: err.message || 'An unexpected error occurred. Please try again.' });
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      preferred_date: '',
      preferred_time: '',
      appointment_type: 'Consultation',
      reason: '',
      consent: false,
    });
    setErrors({});
    setStatus('idle');
    setResponseInfo(null);
    if (onClearPreselected) onClearPreselected();
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white border-y border-brand-border/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation Request</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-accent tracking-tight">
            Book Your Appointment
          </h2>
          <p className="mt-3 text-base text-brand-muted leading-relaxed">
            Submit your preferred date and time. The clinic will contact you to confirm your appointment.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="rounded-3xl bg-brand-bg/60 border border-brand-border shadow-warm-md p-6 sm:p-10 relative overflow-hidden">
          
          {/* Supabase Status Indicator (Informative & Transparent) */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-white border border-brand-border text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isSupabaseConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
              <span className="font-medium text-dark-accent">
                {isSupabaseConfigured ? 'Supabase Database Connected' : 'Demo Mode Active'}
              </span>
            </div>
            <span className="text-brand-muted text-[11px]">
              {isSupabaseConfigured
                ? 'Requests stored directly to Postgres appointments table'
                : 'Submissions are safely simulated & preserved for demo review'}
            </span>
          </div>

          {/* Success State Screen */}
          {status === 'success' ? (
            <div className="text-center py-8 sm:py-12 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-warm-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-dark-accent">
                  Thank you! Your appointment request has been received.
                </h3>
                <p className="text-sm sm:text-base text-brand-muted max-w-lg mx-auto">
                  The clinic will contact you at <span className="font-semibold text-dark-accent">{formData.phone}</span> to confirm your appointment time with Dr. Priyanka Murgude.
                </p>
              </div>

              {/* Request Details Summary Pill */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-brand-border/80 text-left text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-brand-border/40">
                  <span className="text-brand-muted">Patient Name:</span>
                  <span className="font-semibold text-dark-accent">{formData.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/40">
                  <span className="text-brand-muted">Preferred Date:</span>
                  <span className="font-semibold text-dark-accent">{formData.preferred_date}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-border/40">
                  <span className="text-brand-muted">Time Slot:</span>
                  <span className="font-semibold text-dark-accent">{formData.preferred_time}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-brand-muted">Type:</span>
                  <span className="font-semibold text-primary">{formData.appointment_type}</span>
                </div>
              </div>

              {responseInfo?.notice && (
                <div className="max-w-md mx-auto text-[11px] text-brand-muted p-2 rounded-lg bg-amber-50 border border-amber-200">
                  {responseInfo.notice}
                </div>
              )}

              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-warm-sm transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Book Another Appointment</span>
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-dark-accent mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-brand-text placeholder-brand-subtle focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-brand-border focus:border-primary focus:ring-primary/20'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-dark-accent mb-2">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-brand-text placeholder-brand-subtle focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-brand-border focus:border-primary focus:ring-primary/20'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="preferred_date" className="block text-xs font-bold text-dark-accent mb-2">
                    Preferred Date <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="preferred_date"
                      name="preferred_date"
                      type="date"
                      min={todayString}
                      value={formData.preferred_date}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-brand-text focus:outline-none focus:ring-2 transition-all ${
                        errors.preferred_date
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-brand-border focus:border-primary focus:ring-primary/20'
                      }`}
                    />
                  </div>
                  {errors.preferred_date && (
                    <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.preferred_date}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferred_time" className="block text-xs font-bold text-dark-accent mb-2">
                    Preferred Time <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferred_time"
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-brand-text focus:outline-none focus:ring-2 transition-all appearance-none ${
                        errors.preferred_time
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-brand-border focus:border-primary focus:ring-primary/20'
                      }`}
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <Clock className="w-4 h-4 text-brand-muted absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.preferred_time && (
                    <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.preferred_time}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Appointment Type (Consultation / Follow-up) */}
              <div>
                <label className="block text-xs font-bold text-dark-accent mb-2">
                  Appointment Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, appointment_type: 'Consultation' }))}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold text-center transition-all ${
                      formData.appointment_type === 'Consultation'
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-white text-brand-text border-brand-border hover:bg-secondary-light/30'
                    }`}
                  >
                    Consultation
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, appointment_type: 'Follow-up' }))}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold text-center transition-all ${
                      formData.appointment_type === 'Follow-up'
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-white text-brand-text border-brand-border hover:bg-secondary-light/30'
                    }`}
                  >
                    Follow-up
                  </button>
                </div>
              </div>

              {/* Row 4: Reason for Visit (optional) */}
              <div>
                <label htmlFor="reason" className="block text-xs font-bold text-dark-accent mb-2">
                  Reason for Visit <span className="text-brand-muted font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    id="reason"
                    name="reason"
                    type="text"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="e.g. Cataract consultation, blurry vision, eye checkup"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-sm text-brand-text placeholder-brand-subtle focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Row 5: Privacy Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-brand-border"
                  />
                  <span className="text-xs text-brand-muted leading-relaxed">
                    I agree to share the above information for appointment coordination. We respect your privacy and do not collect unnecessary medical records or share your information.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Error Banner */}
              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{responseInfo?.error || 'Unable to submit request. Please try again.'}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-xl bg-secondary hover:bg-secondary-hover active:bg-secondary-hover text-white text-base font-semibold shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/35 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
