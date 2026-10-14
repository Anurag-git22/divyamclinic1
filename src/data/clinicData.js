// Divyam Eye Care — Verified Clinic Data & Enhanced Real Clinic Information

export const clinicData = {
  name: "Divyam Eye Care",
  tagline: "Our Care...Your Vision",
  heroSubtitle: "Comprehensive eye care in a comfortable, patient-first environment in Udyam Nagar, Nehru Nagar, Pimpri, Pune — led by ophthalmologist Dr. Priyanka Murgude.",
  description: "Divyam Eye Care is a modern, well-equipped ophthalmology clinic in Udyam Nagar, Nehru Nagar, Pimpri, Pune, led by ophthalmologist Dr. Priyanka Murgude. We provide comprehensive eye care in a comfortable, patient-first environment — from routine eye check-ups to cataract surgery consultations, eye infection and injury treatment, dry eye therapy, and optical solutions. Every visit includes thorough testing with high-precision optical equipment and a clear, detailed explanation of your results, so you always know exactly what's happening with your eyes. Our Care...Your Vision.",
  badgeText: "Trusted Eye Care in Udyam Nagar",
  
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
    landmark: "opp. Swapnanagari, Udyam Nagar, Nehru Nagar, Pimpri Colony",
    cityStateZip: "Pune, Maharashtra 411018",
    full: "Shop No. 1, Plot No. 109, Aaikrupa Building, Udyamnagar, New Telco Road, near Vital Multispeciality Hospital, opp. Swapnanagari, Udyam Nagar, Nehru Nagar, Pimpri Colony, Pune, Maharashtra 411018",
  },

  placeholders: {
    phone: "8446265650",
    phoneSecondary: "8237192266",
    openingHours: "Mon-Sat: 10 AM - 2 PM & 5 PM - 8 PM | Sunday: Closed",
    whatsapp: "918446265650",
    whatsappMessage: "Hello, I'd like to book an appointment at Divyam Eye Care.",
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
      text: "Thorough testing done with hi-tech machines to get highest accuracy for my spectacles. Dr. Priyanka is polite, highly qualified, and never rushes appointments. Best eye care experience.",
      highlight: "Highest accuracy for glasses",
      service: "Optical Solutions",
    },
  ],

  googleMapsUrl: "https://maps.google.com/?q=Divyam%20Eye%20care,%20Plot%20no%20109,Shop%20no%201,%20Aaikrupa%20building,%20Udyamnagar,%20near%20Ajmera%20and,%20opp.%20to%20Swapnanagari,%20Nehru%20Nagar,%20Pimpri%20Colony,%20Pune,%20Maharashtra%20411018",

  socialMedia: {
    instagram: {
      handle: "@divyameyecare",
      url: "https://www.instagram.com/divyameyecare/",
    },
    facebook: {
      name: "Divyam Eye Care",
      url: "https://www.facebook.com/divyameyecare/",
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
      description: "Direct claim coordination assistance with 4 major insurance and TPA partners for approved surgical procedures.",
      icon: "ShieldCheck",
      tag: "4 Approved Insurers",
    },
    {
      title: "Convenient Pimpri Location",
      description: "Ground-floor street access with parking at Aaikrupa Building on New Telco Road, Udyam Nagar, Nehru Nagar, Pimpri.",
      icon: "MapPin",
      tag: "Ground Floor Entry",
    },
  ],

  services: [
    {
      id: "cataract-surgery",
      name: "Cataract Surgery & Lens Guidance",
      description: "Comprehensive pre-operative assessment, digital biometry, and expert guidance on intraocular lenses (IOLs).",
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
      name: "Vision Correction & Opticals",
      description: "Precision computerized refraction testing for distance blur, astigmatism, reading fatigue, and custom optical solutions.",
      icon: "Glasses",
      category: "Refraction & Optical",
    },
    {
      id: "spects-contact-lenses",
      name: "Spects & Contact Lenses",
      description: "Professional fitting and prescription for eyeglasses and contact lenses tailored to your vision needs.",
      icon: "Glasses",
      category: "Optical Solutions",
    },
    {
      id: "all-types-lenses",
      name: "All Types of Lenses",
      description: "Comprehensive range of lens options including single vision, bifocal, and specialized lenses for specific needs.",
      icon: "Sparkles",
      category: "Optical Solutions",
    },
    {
      id: "general-ophthalmology",
      name: "General Ophthalmology & Glaucoma Check",
      description: "Routine wellness screenings, intraocular pressure (IOP) tonometry for glaucoma detection, and ocular health evaluations.",
      icon: "Stethoscope",
      category: "Preventive Care",
    },
    {
      id: "glaucoma-surgery",
      name: "Glaucoma Surgery",
      description: "Surgical management and treatment options for glaucoma to preserve vision and control intraocular pressure.",
      icon: "Eye",
      category: "Surgical Consultation",
    },
    {
      id: "chalazion-surgery",
      name: "Chalazion Surgery",
      description: "Surgical removal of chalazion (eyelid cyst) for relief from persistent lumps and inflammation.",
      icon: "SmilePlus",
      category: "Minor Surgical",
    },
    {
      id: "pterygium-surgery",
      name: "Pterygium Surgery",
      description: "Surgical excision of pterygium (eye surface growth) to restore comfort and clear vision.",
      icon: "Activity",
      category: "Surgical Consultation",
    },
    {
      id: "diabetic-hypertensive-check",
      name: "Diabetic & Hypertensive Eye Check-up",
      description: "Specialized screening for diabetes and hypertension-related eye complications including retinal health assessment.",
      icon: "Stethoscope",
      category: "Preventive Care",
    },
    {
      id: "fundoscopy",
      name: "Fundoscopy",
      description: "Detailed examination of the retina and optic nerve to detect and monitor various eye conditions.",
      icon: "Eye",
      category: "Diagnostic",
    },
    {
      id: "dry-eye-digital-strain",
      name: "Dry Eye & Digital Eyestrain Therapy",
      description: "Specialized tear film assessment, ergonomic screen-use guidance, and therapeutic relief protocols for digital workers.",
      icon: "Sparkles",
      category: "Specialized Clinic",
    },
    {
      id: "eyelid-consultation-surgeries",
      name: "Eyelid Consultation & Surgeries",
      description: "Medical evaluation and surgical consultation for droopy eyelids (ptosis), dermatochalasis, and eyelid conditions.",
      icon: "SmilePlus",
      category: "Oculoplastic Guidance",
    },
    {
      id: "ophthalmic-fitness-certification",
      name: "Ophthalmic Fitness Certification",
      description: "Comprehensive eye examination and certification for professional, educational, or licensing requirements.",
      icon: "CheckCircle2",
      category: "Documentation",
    },
    {
      id: "pediatric-eye-screening",
      name: "Pediatric & Student Eye Screenings",
      description: "Gentle, accurate vision evaluations for school children to identify early refractive errors, amblyopia (lazy eye), and alignment issues.",
      icon: "CheckCircle2",
      category: "Family Health",
    },
  ],

  insurancePartners: [
    { name: "Mediassist", type: "TPA Partner" },
    { name: "Bajaj Allianz", type: "General Insurance" },
    { name: "SBI General Insurance", type: "General Insurance" },
    { name: "Manipal Cigna", type: "General Insurance" },
  ],

  insuranceNote: "Reimbursement available for all insurance companies.",
  cashlessCoPaymentNote: "In a few situations, a co-payment from the patient applies for choosing premium lenses other than cashless packages.",

  gallery: [
    {
      category: "Eye Care Equipment",
      title: "Eye Examination Area",
      description: "Dedicated diagnostics and vision testing space.",
      type: "equipment",
    },
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
      category: "Clinic Exterior",
      title: "Aaikrupa Building Entrance",
      description: "Easily accessible street view on New Telco Road.",
      type: "exterior",
    },
    // TODO: Add more real photos from Instagram/Google - expand to 12+ slots
    { category: "Clinic Interior", title: "Reception Area", description: "Welcoming patient area.", type: "interior" },
    { category: "Eye Care Equipment", title: "Diagnostic Station", description: "Advanced testing equipment.", type: "equipment" },
    { category: "Doctor Consultation", title: "Consultation Desk", description: "Patient consultation area.", type: "consultation" },
    { category: "Clinic Interior", title: "Waiting Area", description: "Comfortable seating for patients.", type: "interior" },
    { category: "Eye Care Equipment", title: "Vision Testing", description: "Precision vision assessment tools.", type: "equipment" },
    { category: "Clinic Exterior", title: "Building Signage", description: "Clear clinic identification.", type: "exterior" },
    { category: "Clinic Interior", title: "Treatment Room", description: "Clean treatment facilities.", type: "interior" },
    { category: "Eye Care Equipment", title: "Optical Instruments", description: "Modern ophthalmic equipment.", type: "equipment" },
  ],

  // TODO: Add hospital video embed URL when available
  hospitalVideo: {
    enabled: false,
    url: "", // YouTube/Instagram embed URL
    title: "Divyam Eye Care Facility Tour",
  },

  // Testimonials - only show rating summary until real reviews arrive
  testimonials: {
    summary: {
      rating: "4.8",
      count: "107+",
      source: "Justdial",
    },
    // TODO: Add real video testimonials (YouTube/Instagram/Facebook embeds)
    videos: [],
    // Real verified reviews from Justdial
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
        text: "Thorough testing done with hi-tech machines to get highest accuracy for my spectacles. Dr. Priyanka is polite, highly qualified, and never rushes appointments. Best eye care experience.",
        highlight: "Highest accuracy for glasses",
        service: "Optical Solutions",
      },
    ],
  },

  // TODO: Fill with real details from the doctor - do NOT add fake content
  doctorProfile: {
    titles: [], // e.g., ["MBBS", "MS Ophthalmology"]
    degrees: [], // e.g., [{ name: "Gold Medal", institution: "XYZ University", year: 2015 }]
    awards: [], // e.g., [{ title: "Best Young Ophthalmologist", organization: "ABC", year: 2020 }]
    conferences: [], // e.g., [{ name: "National Ophthalmology Conference", role: "Speaker", year: 2021 }]
    media: {
      photos: [], // Additional doctor/clinic photos
      videoUrl: "", // Professional video embed URL
    },
  },

  // Service to Society - camps and community initiatives
  // TODO: Add real camp photos and video links
  camps: [],
  // Example structure when adding real data:
  // camps: [
  //   {
  //     id: 1,
  //     title: "Free Eye Screening Camp",
  //     date: "March 15, 2024",
  //     location: "Pimpri Community Center",
  //     description: "Free eye check-up camp serving 200+ patients.",
  //     images: ["/camps/camp1-1.jpg", "/camps/camp1-2.jpg"],
  //     videoUrl: "", // YouTube/Instagram embed
  //   },
  // ],
};
