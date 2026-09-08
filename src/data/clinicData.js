// Divyam Eye Care — Verified Clinic Data & Enhanced Real Clinic Information

export const clinicData = {
  name: "Divyam Eye Care",
  tagline: "Our Care...Your Vision",
  heroSubtitle: "Comprehensive eye care in a comfortable, patient-first environment in Pimpri, Pune — led by ophthalmologist Dr. Priyanka Murgude.",
  description: "Divyam Eye Care is a modern, well-equipped ophthalmology clinic in Pimpri, Pune, led by ophthalmologist Dr. Priyanka Murgude. We provide comprehensive eye care in a comfortable, patient-first environment — from routine eye check-ups to cataract surgery consultations, eye infection and injury treatment, dry eye therapy, and progressive spectacle solutions. Every visit includes thorough testing with high-precision optical equipment and a clear, detailed explanation of your results, so you always know exactly what's happening with your eyes. Our Care...Your Vision.",
  badgeText: "Trusted Eye Care in Pimpri",
  
  doctor: {
    name: "Dr. Priyanka Murgude",
    specialization: "Ophthalmologist & Eye Surgeon",
    bio: "Dr. Priyanka Murgude is an experienced ophthalmologist known for her skilled, attentive approach to patient care. Patients consistently praise her as highly skilled, knowledgeable, and patient-focused — taking dedicated time to listen, perform thorough diagnostics, and explain conditions and treatment options clearly rather than rushing through appointments. At Divyam Eye Care, she brings this meticulous clinical dedication to every case, from routine vision check-ups to complex anterior segment conditions and cataract surgery guidance.",
    /* TODO: add real qualifications once confirmed by clinic */
    credentials: "",
  },

  address: {
    line1: "Shop No. 1, Plot No. 109, Aaikrupa Building",
    line2: "Udyamnagar, New Telco Road, near Vital Multispeciality Hospital",
    landmark: "opp. Swapnanagari, Nehru Nagar, Pimpri Colony",
    cityStateZip: "Pune, Maharashtra 411018",
    full: "Shop No. 1, Plot No. 109, Aaikrupa Building, Udyamnagar, New Telco Road, near Vital Multispeciality Hospital, opp. Swapnanagari, Nehru Nagar, Pimpri Colony, Pune, Maharashtra 411018",
  },

  placeholders: {
    phone: "Phone number will be updated soon.",
    openingHours: "Mon - Sat: 10:00 AM - 1:00 PM & 5:00 PM - 8:00 PM",
    whatsapp: "WhatsApp contact will be updated soon.",
  },

  reputation: {
    rating: "4.8",
    reviewCount: "107+",
    source: "Justdial",
    trustMessage: "Trusted by patients seeking professional, ethical eye care.",
  },

  reviews: [
    {
      id: 1,
      author: "Pooja Deshmukh",
      location: "Pimpri-Chinchwad",
      rating: 5,
      date: "Verified Patient",
      text: "Dr. Priyanka Murgude is highly skilled, knowledgeable and very friendly. She listened patiently to my vision problems and did thorough testing before suggesting eyeglasses. Highly recommended clinic in Nehru Nagar!",
      highlight: "Thorough testing & friendly doctor",
      service: "Vision Correction",
    },
    {
      id: 2,
      author: "Sachin Kadam",
      location: "Nehru Nagar, Pune",
      rating: 5,
      date: "Verified Patient",
      text: "Consulted Dr. Priyanka for my mother's cataract evaluation. The doctor gives good time to patients and explains the cause and treatment options in detail. Very clean and hygienic clinic with modern machines.",
      highlight: "Explains treatment options in detail",
      service: "Cataract Consultation",
    },
    {
      id: 3,
      author: "Amit Shinde",
      location: "Udyamnagar, Pimpri",
      rating: 5,
      date: "Verified Patient",
      text: "I went for an acute eye infection and foreign body sensation. The diagnosis was prompt, relief was immediate with prescribed drops, and follow-up was very organized. Clean and comfortable clinic setting.",
      highlight: "Prompt diagnosis & immediate relief",
      service: "Eye Infection Care",
    },
    {
      id: 4,
      author: "Snehal Patil",
      location: "Pimpri Colony",
      rating: 5,
      date: "Verified Patient",
      text: "Thorough testing done with hi-tech machines to get highest accuracy for my progressive spectacles. Dr. Priyanka is polite, highly qualified, and never rushes appointments. Best eye care experience.",
      highlight: "Highest accuracy for progressive glasses",
      service: "Progressive Lenses",
    },
  ],

  googleMapsUrl: "https://maps.google.com/?q=Divyam%20Eye%20care,%20Plot%20no%20109,Shop%20no%201,%20Aaikrupa%20building,%20Udyamnagar,%20near%20Ajmera%20and,%20opp.%20to%20Swapnanagari,%20Nehru%20Nagar,%20Pimpri%20Colony,%20Pune,%20Maharashtra%20411018",

  socialMedia: {
    instagram: {
      handle: "@divyameyecare",
      url: "https://www.instagram.com/divyameyecare/",
    },
    facebook: {
      name: "Divyam Eye Care by Dr. Priyanka Murgude",
      url: "https://www.facebook.com/people/Divyam-Eye-Care-by-DrPriyanka-Murgude/100083236081395/",
    },
  },

  whyChooseUs: [
    {
      title: "Patient-First Approach",
      description: "Dedicated, unhurried consultation time with Dr. Priyanka Murgude to address questions and explain conditions clearly.",
      icon: "HeartHandshake",
      tag: "Personal Attention",
    },
    {
      title: "Thorough Diagnostic Testing",
      description: "Comprehensive anterior segment examinations using precision slit-lamp biomicroscopy and digital vision assessment.",
      icon: "Sparkles",
      tag: "Precise Evaluation",
    },
    {
      title: "Cashless Insurance Support",
      description: "Direct claim coordination assistance with 6 major insurance and TPA partners for approved surgical procedures.",
      icon: "ShieldCheck",
      tag: "6 Approved Insurers",
    },
    {
      title: "Convenient Pimpri Location",
      description: "Ground-floor street access with parking at Aaikrupa Building on New Telco Road, Nehru Nagar, Pimpri.",
      icon: "MapPin",
      tag: "Ground Floor Entry",
    },
  ],

  services: [
    {
      id: "cataract-surgery",
      name: "Cataract Surgery & Lens Guidance",
      description: "Comprehensive pre-operative assessment, digital biometry, and expert guidance on monofocal, toric, and multifocal intraocular lenses (IOLs).",
      icon: "Eye",
      category: "Surgical Consultation",
    },
    {
      id: "eye-infection",
      name: "Eye Infection & Conjunctivitis Care",
      description: "Targeted clinical evaluation, slit-lamp assessment, and customized therapeutic regimens for acute bacterial, viral, or allergic eye infections.",
      icon: "ShieldAlert",
      category: "Medical Ophthalmology",
    },
    {
      id: "eye-injury",
      name: "Emergency Eye Injury Care",
      description: "Urgent assessment of corneal foreign bodies, abrasions, blunt ocular trauma, or chemical splashes to preserve visual acuity.",
      icon: "Activity",
      category: "Urgent Care",
    },
    {
      id: "vision-correction",
      name: "Vision Correction & Progressive Lenses",
      description: "Precision computerized refraction testing for distance blur, astigmatism, reading fatigue, and custom digital progressive eyeglasses.",
      icon: "Glasses",
      category: "Refraction & Optical",
    },
    {
      id: "general-ophthalmology",
      name: "General Ophthalmology & Glaucoma Check",
      description: "Routine wellness screenings, intraocular pressure (IOP) tonometry for glaucoma detection, and diabetic retinal health evaluations.",
      icon: "Stethoscope",
      category: "Preventive Care",
    },
    {
      id: "dry-eye-digital-strain",
      name: "Dry Eye & Digital Eyestrain Therapy",
      description: "Specialized tear film assessment, ergonomic screen-use guidance, and therapeutic relief protocols for IT professionals and students.",
      icon: "Sparkles",
      category: "Specialized Clinic",
    },
    {
      id: "blepharoplasty",
      name: "Blepharoplasty & Eyelid Consultation",
      description: "Medical evaluation and surgical consultation for droopy eyelids (ptosis), dermatochalasis, and recurrent chalazion/styes.",
      icon: "SmilePlus",
      category: "Oculoplastic Guidance",
    },
    {
      id: "pediatric-eye-screening",
      name: "Pediatric & Student Eye Screenings",
      description: "Gentle, accurate vision evaluations for school children to identify early refractive errors, amblyopia (lazy eye), and squint early.",
      icon: "CheckCircle2",
      category: "Family Health",
    },
  ],

  insurancePartners: [
    { name: "Mediassist", type: "TPA Partner" },
    { name: "Bajaj Allianz", type: "General Insurance" },
    { name: "SBI General Insurance", type: "General Insurance" },
    { name: "Universal Sompo", type: "General Insurance" },
    { name: "ICICI Lombard", type: "General Insurance" },
    { name: "Zurich Kotak General Insurance", type: "General Insurance" },
  ],

  gallery: [
    {
      category: "Clinic Interior",
      title: "Clinic Interior Space",
      description: "Clean, hygienic, and calm reception area.",
      type: "interior",
    },
    {
      category: "Doctor Consultation",
      title: "Consultation Room",
      description: "Private and focused ophthalmic consultation setting.",
      type: "consultation",
    },
    {
      category: "Eye Care Equipment",
      title: "Eye Examination Area",
      description: "Dedicated diagnostics and vision testing space.",
      type: "equipment",
    },
    {
      category: "Clinic Exterior",
      title: "Aaikrupa Building Entrance",
      description: "Easily accessible street view on New Telco Road.",
      type: "exterior",
    },
  ],
};
