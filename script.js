/* =====================================================
   LAMIAZONE
   DAILY MCQ
===================================================== */

/* =====================================================
   QUESTIONS

   শুধু এই জায়গায় তোমার MCQ লিখবে।

   Format:

   প্রশ্ন 1. প্রশ্ন...? (ক) ... (খ) ... (গ) ... (ঘ) ...

   প্রশ্ন 2. প্রশ্ন...? (ক) ... (খ) ... (গ) ... (ঘ) ...

   এভাবে 100+ প্রশ্নও দেওয়া যাবে।
===================================================== */

const questionsText = `

প্রশ্ন 1. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 2. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 3. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 4. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 5. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 6. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 7. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 8. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 9. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 10. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 11. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 12. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 13. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 14. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 15. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 16. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 17. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 18. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 19. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 20. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 21. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 22. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 23. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 24. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 25. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 26. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 27. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 28. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 29. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 30. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 31. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 32. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 33. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 34. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 35. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 36. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 37. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 38. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 39. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 40. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 41. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 42. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 43. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 44. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 45. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 46. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 47. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 48. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 49. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 50. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 51. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 52. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 53. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 54. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 55. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 56. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 57. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 58. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 59. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 60. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 61. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 62. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 63. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 64. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 65. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 66. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 67. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 68. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 69. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 70. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 71. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 72. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 73. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 74. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 75. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 76. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 77. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 78. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 79. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 80. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 81. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 82. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 83. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 84. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 85. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 86. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 87. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 88. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 89. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 90. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

প্রশ্ন 91. পয়সনের অনুপাতের সীমা কোনটি? (ক) -1 থেকে 0.5 (খ) 0 থেকে 1 (গ) -0.5 থেকে 1 (ঘ) 0.5 থেকে 1.5

প্রশ্ন 92. ইয়ং-এর গুণাঙ্কের একক কোনটি? (ক) N m⁻² (খ) N m (গ) J m⁻² (ঘ) এককহীন

প্রশ্ন 93. অসংনম্য তরলের আয়তন গুণাঙ্ক কত? (ক) অসীম (খ) শূন্য (গ) 1 (ঘ) -1

প্রশ্ন 94. স্পর্শ-কোণ সূক্ষ্মকোণ হলে তরল কাচকে (ক) ভিজায় (খ) ভিজায় না (গ) আংশিক ভেজায় (ঘ) বিকর্ষিত করে

প্রশ্ন 95. কৈশিক-নল তরলে ডুবালে তরল উপরে ওঠার কারণ (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) ঘনত্ব (ঘ) প্লবতা

প্রশ্ন 96. পৃষ্ঠটানের মাত্রা কোনটি? (ক) MT⁻² (খ) MLT⁻² (গ) ML⁻¹T⁻² (ঘ) M L² T⁻²

প্রশ্ন 97. সান্দ্রতা গুণাঙ্কের S.I একক কোনটি? (ক) Pa s (বা N s m⁻²) (খ) Poise (গ) N m (ঘ) J s

প্রশ্ন 98. স্টোকসের সূত্র কোনটি? (ক) F = 6 π η r v (খ) F = 6 π r v (গ) F = η A dv/dx (ঘ) F = m g

প্রশ্ন 99. বৃষ্টির ফোঁটা গোলাকার হওয়ার কারণ কোনটি? (ক) পৃষ্ঠটান (খ) সান্দ্রতা (গ) মহাকর্ষ (ঘ) প্লাবতা

প্রশ্ন 100. ধারারেখ প্রবাহের ক্ষেত্রে রেনল্ডস সংখ্যার মান কেমন হয়? (ক) ২০০০ এর কম (খ) ২০০০ এর বেশি (গ) ৩০০০ এর বেশি (ঘ) অসীম

`;

/* =====================================================
   PARSE QUESTIONS
===================================================== */

function parseQuestions(text) {
  const parts = text
    .split(/(?=প্রশ্ন\s*\d+\s*[.:])/g)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  return parts.map((item) => {
    let content = item.replace(/^প্রশ্ন\s*\d+\s*[.:]\s*/i, '');

    const optionPattern =
      /\s*\(ক\)\s*([\s\S]*?)\s*\(খ\)\s*([\s\S]*?)\s*\(গ\)\s*([\s\S]*?)\s*\(ঘ\)\s*([\s\S]*)$/;

    const match = content.match(optionPattern);

    if (!match) {
      return {
        question: content,
        options: [],
      };
    }

    const question = content.substring(0, content.search(/\s*\(ক\)/)).trim();

    return {
      question: question,

      options: [
        `ক) ${match[1].trim()}`,
        `খ) ${match[2].trim()}`,
        `গ) ${match[3].trim()}`,
        `ঘ) ${match[4].trim()}`,
      ],
    };
  });
}

/* =====================================================
   DISPLAY QUESTIONS
===================================================== */

const questions = parseQuestions(questionsText);

const container = document.getElementById('questionsContainer');

const questionCount = document.getElementById('questionCount');

questionCount.textContent = questions.length;

/* =====================================================
   STORE SELECTED ANSWERS
===================================================== */

const selectedAnswers = new Array(questions.length).fill(null);

/* =====================================================
   CREATE QUESTIONS
===================================================== */

questions.forEach((item, index) => {
  const card = document.createElement('div');

  card.className = 'question-card';

  /* Question number */

  const number = document.createElement('div');

  number.className = 'question-number';

  number.textContent = `প্রশ্ন ${index + 1}`;

  /* Question */

  const question = document.createElement('div');

  question.className = 'question-text';

  question.textContent = item.question;

  /* Options */

  const options = document.createElement('div');

  options.className = 'options';

  item.options.forEach((optionText, optionIndex) => {
    const option = document.createElement('div');

    option.className = 'option';

    option.textContent = optionText;

    option.setAttribute('role', 'button');

    option.setAttribute('tabindex', '0');

    const selectOption = () => {
      selectedAnswers[index] = optionIndex;

      options.querySelectorAll('.option').forEach((el) => {
        el.classList.remove('selected');
      });

      option.classList.add('selected');
    };

    option.addEventListener('click', selectOption);

    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();

        selectOption();
      }
    });

    options.appendChild(option);
  });

  /* Add everything */

  card.appendChild(number);

  card.appendChild(question);

  card.appendChild(options);

  container.appendChild(card);
});

/* =====================================================
   EXAM ANSWER SUBMIT
===================================================== */

const submitExamBtn = document.getElementById('submitExamBtn');

const answerResult = document.getElementById('answerResult');

const answerList = document.getElementById('answerList');

const answeredCount = document.getElementById('answeredCount');

function renderAnswerSheet() {
  answerList.innerHTML = '';

  let answered = 0;

  questions.forEach((item, index) => {
    const answerItem = document.createElement('div');

    answerItem.className = 'answer-item';

    const number = document.createElement('span');

    number.className = 'answer-number';

    number.textContent = `${index + 1}.`;

    const value = document.createElement('span');

    value.className = 'answer-value';

    if (
      selectedAnswers[index] !== null &&
      item.options[selectedAnswers[index]]
    ) {
      const optionText = item.options[selectedAnswers[index]];

      const optionLetter = optionText.substring(0, 1);

      value.textContent = optionLetter;

      answered++;
    } else {
      answerItem.classList.add('unanswered');

      value.textContent = '—';
    }

    answerItem.appendChild(number);

    answerItem.appendChild(value);

    answerList.appendChild(answerItem);
  });

  answeredCount.textContent = `${answered} / ${questions.length}`;

  answerResult.classList.add('show');

  answerResult.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

submitExamBtn.addEventListener('click', () => {
  renderAnswerSheet();
});

/* =====================================================
   COUNTDOWN TIMER
===================================================== */

const EXAM_DURATION = 60 * 60; // 60 minutes

const TIMER_STORAGE_KEY = 'lamiaExamEndTime';

let totalSeconds = EXAM_DURATION;

const minutesElement = document.getElementById('minutes');

const secondsElement = document.getElementById('seconds');

const countdown = document.querySelector('.countdown');

const timeUpOverlay = document.getElementById('timeUpOverlay');

const closeTimeUp = document.getElementById('closeTimeUp');

let timer = null;

/* 15 second repeat alert */

let timeUpRepeatTimer = null;

let timeUpAlertStarted = false;

/* =====================================================
   GET REMAINING TIME
===================================================== */

function getRemainingSeconds() {
  const savedEndTime = Number(localStorage.getItem(TIMER_STORAGE_KEY));

  if (!Number.isFinite(savedEndTime) || savedEndTime <= 0) {
    return EXAM_DURATION;
  }

  return Math.max(0, Math.ceil((savedEndTime - Date.now()) / 1000));
}

/* =====================================================
   START EXAM TIMER

   Refresh করলে নতুন করে
   60 মিনিট শুরু হবে না।
===================================================== */

function startExamTimer() {
  const savedEndTime = Number(localStorage.getItem(TIMER_STORAGE_KEY));

  if (!Number.isFinite(savedEndTime) || savedEndTime <= Date.now()) {
    localStorage.setItem(
      TIMER_STORAGE_KEY,
      String(Date.now() + EXAM_DURATION * 1000),
    );
  }

  totalSeconds = getRemainingSeconds();

  updateCountdown();

  clearInterval(timer);

  timer = setInterval(updateCountdown, 1000);
}

/* =====================================================
   TIMER UPDATE
===================================================== */

function updateCountdown() {
  totalSeconds = getRemainingSeconds();

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  minutesElement.textContent = String(minutes).padStart(2, '0');

  secondsElement.textContent = String(seconds).padStart(2, '0');

  countdown.classList.remove('warning', 'danger');

  /* 5 মিনিটের নিচে */

  if (totalSeconds <= 5 * 60 && totalSeconds > 60) {
    countdown.classList.add('warning');
  }

  /* 1 মিনিটের নিচে */

  if (totalSeconds <= 60 && totalSeconds > 0) {
    countdown.classList.add('danger');
  }

  /* ===================================================
     TIME OVER
  =================================================== */

  if (totalSeconds <= 0) {
    clearInterval(timer);

    minutesElement.textContent = '00';

    secondsElement.textContent = '00';

    countdown.classList.add('time-ended');

    localStorage.removeItem(TIMER_STORAGE_KEY);

    /*
      Time শেষ হলেও Submit button
      থাকবে এবং কাজ করবে।
    */

    renderAnswerSheet();

    /*
      সাথে সাথে Time Over alert
    */

    timeUpOverlay.classList.add('show');

    /*
      প্রতি 15 সেকেন্ড পর
      আবার alert
    */

    if (!timeUpAlertStarted) {
      timeUpAlertStarted = true;

      clearInterval(timeUpRepeatTimer);

      timeUpRepeatTimer = setInterval(() => {
        timeUpOverlay.classList.add('show');
      }, 15000);
    }
  }
}

/* =====================================================
   GOOD LUCK POPUP
===================================================== */

const welcomeOverlay = document.getElementById('welcomeOverlay');

const readyBtn = document.getElementById('readyBtn');

if (readyBtn && welcomeOverlay) {
  readyBtn.addEventListener('click', (event) => {
    event.preventDefault();

    event.stopPropagation();

    /*
        Popup completely hide
      */

    welcomeOverlay.classList.add('hide');

    /*
        CSS কাজ না করলেও
        popup অবশ্যই hide হবে।
      */

    welcomeOverlay.style.display = 'none';

    /*
        Countdown শুরু
      */

    startExamTimer();
  });
}

/* =====================================================
   TIME UP POPUP CLOSE
===================================================== */

if (closeTimeUp) {
  closeTimeUp.addEventListener('click', () => {
    timeUpOverlay.classList.remove('show');
  });
}

/* =====================================================
   LAMIA PROGRESS LOGIN
===================================================== */

const USERNAME = 'lamia';

const PASSWORD = 'lamia123';

/* Google Sheets Web App URL */

const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzP_nd2X-KH9Ccwo8MZWTYWhWza3NFpgh8vC4DYIV2I714nBjjmo_Tz7HH4F2eTav_F/exec';

/* =====================================================
   ELEMENTS
===================================================== */

const userIconBtn = document.getElementById('userIconBtn');

const loginOverlay = document.getElementById('loginOverlay');

const closeLogin =
  document.getElementById('closeLogin') ||
  document.querySelector('.login-close') ||
  document.querySelector('.close-login');

const loginBtn = document.getElementById('loginBtn');

const loginUsername = document.getElementById('loginUsername');

const loginPassword = document.getElementById('loginPassword');

const loginError = document.getElementById('loginError');

const progressOverlay = document.getElementById('progressOverlay');

const closeProgress = document.getElementById('closeProgress');

const logoutBtn = document.getElementById('logoutBtn');

const totalExams = document.getElementById('totalExams');

const totalMarks = document.getElementById('totalMarks');

const averageMarks = document.getElementById('averageMarks');

const progressTableBody = document.getElementById('progressTableBody');

const resultExam = document.getElementById('resultExam');

const resultDate = document.getElementById('resultDate');

const resultScore = document.getElementById('resultScore');

const resultTotal = document.getElementById('resultTotal');

const addResultBtn = document.getElementById('addResultBtn');

/* =====================================================
   GET RESULTS FROM GOOGLE SHEETS
===================================================== */

async function getResults() {
  try {
    const response = await fetch(GOOGLE_SHEET_URL);

    if (!response.ok) {
      throw new Error('Failed to load results');
    }

    const results = await response.json();

    return Array.isArray(results) ? results : [];
  } catch (error) {
    console.error('Google Sheets error:', error);

    return [];
  }
}

/* =====================================================
   SHOW RESULTS
===================================================== */

async function renderProgress() {
  progressTableBody.innerHTML = '<tr><td colspan="3">Loading...</td></tr>';

  const results = await getResults();

  progressTableBody.innerHTML = '';

  let obtained = 0;

  let possible = 0;

  results.forEach((result) => {
    obtained += Number(result.score) || 0;

    possible += Number(result.total) || 0;

    const row = document.createElement('tr');

    const exam = document.createElement('td');

    exam.textContent = result.exam || '';

    const date = document.createElement('td');

    date.textContent = result.date || '';

    const score = document.createElement('td');

    score.textContent = `${result.score}/${result.total}`;

    row.appendChild(exam);

    row.appendChild(date);

    row.appendChild(score);

    progressTableBody.appendChild(row);
  });

  totalExams.textContent = results.length;

  totalMarks.textContent = possible;

  const average = possible > 0 ? Math.round((obtained / possible) * 100) : 0;

  averageMarks.textContent = `${average}%`;
}

/* =====================================================
   OPEN LOGIN / PROGRESS
===================================================== */

userIconBtn.addEventListener('click', () => {
  const loggedIn = sessionStorage.getItem('lamiaLoggedIn') === 'true';

  if (loggedIn) {
    renderProgress();

    progressOverlay.classList.add('show');
  } else {
    loginOverlay.classList.add('show');

    loginUsername.focus();
  }
});

/* =====================================================
   CLOSE LOGIN
===================================================== */

if (closeLogin) {
  closeLogin.addEventListener('click', (event) => {
    event.preventDefault();

    event.stopPropagation();

    loginOverlay.classList.remove('show');
  });
}

/* =====================================================
   LOGIN
===================================================== */

loginBtn.addEventListener('click', () => {
  const username = loginUsername.value.trim();

  const password = loginPassword.value;

  if (username === USERNAME && password === PASSWORD) {
    sessionStorage.setItem('lamiaLoggedIn', 'true');

    loginError.textContent = '';

    loginOverlay.classList.remove('show');

    renderProgress();

    progressOverlay.classList.add('show');
  } else {
    loginError.textContent = 'Username or password is incorrect.';
  }
});

/* =====================================================
   ENTER KEY LOGIN
===================================================== */

loginPassword.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    loginBtn.click();
  }
});

/* =====================================================
   CLOSE PROGRESS
===================================================== */

closeProgress.addEventListener('click', () => {
  progressOverlay.classList.remove('show');
});

/* =====================================================
   LOGOUT
===================================================== */

logoutBtn.addEventListener('click', () => {
  sessionStorage.removeItem('lamiaLoggedIn');

  progressOverlay.classList.remove('show');
});

/* =====================================================
   ADD RESULT TO GOOGLE SHEETS
===================================================== */

addResultBtn.addEventListener('click', async () => {
  const exam = resultExam.value.trim();

  const date = resultDate.value.trim();

  const score = Number(resultScore.value);

  const total = Number(resultTotal.value);

  /* Validation */

  if (
    !exam ||
    !date ||
    !Number.isFinite(score) ||
    !Number.isFinite(total) ||
    total <= 0 ||
    score < 0 ||
    score > total
  ) {
    return;
  }

  /* Button temporarily disable */

  addResultBtn.disabled = true;

  try {
    const response = await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',

      body: JSON.stringify({
        exam: exam,
        date: date,
        score: score,
        total: total,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to save result');
    }

    /* Clear inputs */

    resultExam.value = '';

    resultDate.value = '';

    resultScore.value = '';

    resultTotal.value = '';

    /* Reload results */

    await renderProgress();
  } catch (error) {
    console.error('Save result error:', error);

    alert('Result save হয়নি। আবার চেষ্টা করো।');
  } finally {
    addResultBtn.disabled = false;
  }
});

/* =====================================================
   DEVTOOLS REDIRECT
===================================================== */

(function () {
  const REDIRECT_URL = 'https://media.tenor.com/oHJdcKei2o0AAAAi/no-no-no.gif';

  let devtoolsOpen = false;

  function checkDevTools() {
    const threshold = 160;

    const widthDiff = window.outerWidth - window.innerWidth;

    const heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > threshold || heightDiff > threshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;

        window.location.replace(REDIRECT_URL);
      }
    }
  }

  setInterval(checkDevTools, 1000);
})();

/* =====================================================
   DISABLE DEVTOOLS SHORTCUTS
===================================================== */

document.addEventListener('keydown', function (e) {
  /* F12 */

  if (e.key === 'F12') {
    e.preventDefault();

    return;
  }

  /* Ctrl + Shift + I */

  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();

    return;
  }

  /* Ctrl + Shift + J */

  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
    e.preventDefault();

    return;
  }

  /* Ctrl + U */

  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();

    return;
  }
});

/* =====================================================
   DISABLE RIGHT CLICK
===================================================== */

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

/* =====================================================
   DISABLE DEVTOOLS / VIEW SOURCE SHORTCUTS
===================================================== */

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey &&
      e.shiftKey &&
      ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === 'U')
  ) {
    e.preventDefault();

    e.stopPropagation();

    return false;
  }
});
