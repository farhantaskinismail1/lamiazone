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

প্রশ্ন 1. কোনো বিন্দুতে ক্রিয়াশীল P এবং Q বলের লব্ধি R। P = Q = R হলে P, Q বলের অন্তর্গত কোণ কত? (ক) 120° (খ) 90° (গ) 60° (ঘ) 45°
প্রশ্ন 2. 3N এবং 4N মানের বল দুইটি পরস্পর লম্বভাবে ক্রিয়াশীল হলে লব্ধির মান কত? (ক) 3 N (খ) 4 N (গ) 5 N (ঘ) 6 N
প্রশ্ন 3. একটি বুলেট কোনো দেয়ালের ভিতর 2 ইঞ্চি ঢুকবার পর বেগ অর্ধেক হারায়। বুলেটটি দেয়ালের ভিতর আরো কত ইঞ্চি ঢুকবে? (ক) 2 (খ) 2/3 (গ) 1 (ঘ) 1/2
প্রশ্ন 4. 64 ft/sec বেগে ভূমি থেকে খাড়া উপরের দিকে নিক্ষিপ্ত কণার বিচরণ কাল— (ক) 0.065 sec (খ) 0.13 sec (গ) 2.00 sec (ঘ) 4.00 sec
প্রশ্ন 5. একজন সাঁতারু স্রোতের বেগের দ্বিগুণ বেগে সাঁতার দিয়ে একটি নদীর যাত্রা বিন্দুর বিপরীত বিন্দুতে পৌঁছল। স্রোতের সাথে তার দিক কত ছিল? (ক) 120° (খ) 90° (গ) 45° (ঘ) 30°
প্রশ্ন 6. 32ft/sec আদিবেগে এবং ভূমির সাথে 30° কোণে একটি বস্তু নিক্ষেপ করা হলো। ইহার ভ্রমণকাল কত? (ক) 0.5 sec (খ) 1 sec (গ) 1.5 sec (ঘ) 2 sec
প্রশ্ন 7. z = 1 / (2 + i) হলে x এর মান হবে— (ক) 3/2 (খ) 1/2 (গ) 1/3 (ঘ) 2/3
প্রশ্ন 8. i^(4n + 4) এর মান কত? (ক) 1 (খ) - 1 (গ) i (ঘ) - i
প্রশ্ন 9. 4x² + 5x + k = 0 এর মূলদ্বয়ের একটি অপরটির বিপরীত হলে k-এর মান হবে— (ক) - 4 (খ) 4 (গ) 5/4 (ঘ) - 5/4
প্রশ্ন 10. 3x² - 4y² = 12 অধিবৃত্তের (4, 3) বিন্দুতে স্পর্শকের ঢালের মান— (ক) - 1 (খ) 3/4 (গ) 1 (ঘ) 4/3
প্রশ্ন 11. sin 2θ - cos 2θ = 0 সমীকরণের সাধারণ সমাধান— (ক) nπ/2 + π/4 (খ) nπ/2 - π/4 (গ) nπ/2 - π/8 (ঘ) nπ/2 + π/8
প্রশ্ন 12. z = 2x + i3y হলে |z| = 1 কী নির্দেশ করে? (ক) বৃত্ত (খ) পরাবৃত্ত (গ) উপবৃত্ত (ঘ) অধিবৃত্ত
প্রশ্ন 13. z = -i + 1 এর ক্ষেত্রে i. z এর মডুলাস √2, ii. z এর আর্গুমেন্ট -π/4, iii. z + z̅ = z + z̅ । নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 14. দ্বিঘাত সমীকরণের একটি মূল 1 / (-i + 1) হলে অপর মূলটি— (ক) i + 1 (খ) -i + 1 (গ) 1/2(-i + 1) (ঘ) 1/2(i + 1)
প্রশ্ন 15. 2x² - x - 1 = 0 এর মূলদুটি a, b (a>b) হলে b এর মান কত? (ক) - 1 (খ) 1 (গ) - 1/2 (ঘ) 1/2
প্রশ্ন 16. 3x² + 2x + 1 = 0 এর ক্ষেত্রে— i. মূলদ্বয় বাস্তব ও সমান, ii. মূলদ্বয়ের যোগফল -2/3, iii. মূলদ্বয়ের গুণফল 1/3 । নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 17. 2x² + y² = 4 কণিকটির বৃহৎ অক্ষের দৈর্ঘ্য— (ক) 4 (খ) 2 (গ) 2√2 (ঘ) √2
প্রশ্ন 18. cos⁻¹(2/3) এর মান হলো— (ক) tan⁻¹(√5/2) (খ) sin⁻¹(3/2) (গ) sec⁻¹(2/3) (ঘ) cot⁻¹(√5/3)
প্রশ্ন 19. P ও Q বলের লব্ধি ক্ষুদ্রতম হলে, বলদ্বয়ের অন্তর্ভুক্ত কোণ— (ক) 0° (খ) 30° (গ) 120° (ঘ) 180°
প্রশ্ন 20. x² = -3y পরাবৃত্তের— i. উপকেন্দ্রিক লম্বের দৈর্ঘ্য 3/4, ii. উপকেন্দ্রের স্থানাঙ্ক (0, -3/4), iii. উপকেন্দ্রিক লম্বের সমীকরণ 4y - 3 = 0। নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 21. (x²/5²) - (y²/4²) = 1 এর পরামিতিক সমীকরণ হলো— (ক) x = 5 sec θ, y = 4 tan θ (খ) x = 4 sec θ, y = 5 tan θ (গ) x = 4 tan θ, y = 5 sec θ (ঘ) x = 5 tan θ, y = 4 sec θ
প্রশ্ন 22. tan⁻¹(3/4) এর মান কোনটি? (ক) (1/2)tan⁻¹(24/25) (খ) (1/2)sin⁻¹(24/25) (গ) (1/2)sin⁻¹(24/7) (ঘ) (1/2)tan⁻¹(7/24)
প্রশ্ন 23. sin(x - 3π/2) = 0, n ∈ ℤ এর সমাধান কোনটি? (ক) 2nπ + 3π/2 (খ) 2nπ - 3π/2 (গ) nπ - 3π/2 (ঘ) nπ + 3π/2
প্রশ্ন 24. z = 3 - 4i এবং √z = x + iy হলে নিচের কোনটি সঠিক? (ক) x² - y² = 5 (খ) x² + y² = 5 (গ) x² + y² = 3 (ঘ) x² - y² = 4
প্রশ্ন 25. যদি z = x + iy, z₁ = x₁ + iy₁, z₂ = x₂ + iy₂ তিনটি জটিল সংখ্যা হয়, তবে— i. Re(z) ≤ |z|, ii. arg(z₁z₂) ≤ arg z₁ + arg z₂, iii. |z₁ - z₂| ≥ |z₁| - |z₂| । নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 26. p = (1/2)(-1 + √-3) একটি জটিল সংখ্যা। (p + p̅)² = কত? (ক) 1 (খ) p (গ) - 1 (ঘ) p̅
প্রশ্ন 27. √(p² + p̅²) = কত? (ক) i (খ) - i (গ) - 1 (ঘ) 1
প্রশ্ন 28. x² + ax + b = 0 এবং x² + bx + a = 0 সমীকরণের একটি সাধারণ মূল থাকলে a + b = কত? (ক) 0 (খ) - 1 (গ) 1 (ঘ) ∞
প্রশ্ন 29. একটি দ্বিঘাত সমীকরণের একটি মূল √-3 + 5i² । অপর মূলটি কত? (ক) √3 - 5i² (খ) √3 + 5i² (গ) - 5 - √3i (ঘ) 5 - √3i
প্রশ্ন 30. দ্বিঘাত সমীকরণ কোনটি? (ক) x² - 9x + 20 = 0 (খ) x² + 9x - 28 = 0 (গ) x² - 10x - 28 = 0 (ঘ) x² + 10x + 28 = 0
প্রশ্ন 31. x² + 1 = 0 এর একটি মূল α হলে |α| এর মান কত? (ক) 2 (খ) √-1 (গ) √2 (ঘ) 1
প্রশ্ন 32. k এর মান কত হলে x² - 5x + k = 0 এর মূল দুটি ক্রমিক সংখ্যা হবে? (ক) 2 (খ) 6 (গ) 30 (ঘ) 0
প্রশ্ন 33. x² - y² = 18 অধিবৃত্তের ফোকাছদ্বয়ের মধ্যবর্তী দূরত্ব কত? (ক) 2√2 (খ) 12 (গ) 3 (ঘ) √2
প্রশ্ন 34. কোনো বিন্দুর পরামিতিক স্থানাঙ্ক (2 cos θ, √3 sin θ) দ্বারা নির্দেশিত কণিকটি কী? (ক) পরাবৃত্ত (খ) উপবৃত্ত (গ) বৃত্ত (ঘ) অধিবৃত্ত
প্রশ্ন 35. উপরোক্ত উপবৃত্তের কেন্দ্রের স্থানাঙ্ক কত? (ক) (2, √3) (খ) (0, 0) (গ) (2, 0) (ঘ) (0, √3)
প্রশ্ন 36. x² - 4x + 12y - 32 = 0 পরাবৃত্তের— i. উপকেন্দ্র (2, -6), ii. নিয়ামকের সমীকরণ y = 6, iii. শীর্ষবিন্দু (2, 3)। নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 37. cos⁻¹{cos(-π/3)} = কত? (ক) -π/3 (খ) π/3 (গ) 2π/3 (ঘ) -2π/3
প্রশ্ন 38. বিপরীত বৃত্তীয় ফাংশনের ক্ষেত্রে— i. sin⁻¹(-x) = -sin⁻¹x (-1 ≤ x ≤ 1), ii. sin⁻¹(sin 3π/4) = 3π/4, iii. sec⁻¹(-x) = π - sec⁻¹x (|x| ≥ 1)। নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 39. sin θ = sin α হলে θ এর মান কত? (যেখানে α একটি ধ্রুবক কোণ) (ক) nπ + (-1)ⁿ α, n ∈ ℤ (খ) nπ ± (-1)ⁿ α, n ∈ ℤ (গ) nπ ± α, n ∈ ℤ (ঘ) nπ - (-1)ⁿ α, n ∈ ℤ
প্রশ্ন 40. sin θ + cos θ এর বৃহত্তম মান কত? (ক) +√2 + 1 (খ) √2 (গ) 1 (ঘ) 2
প্রশ্ন 41. একটি প্রক্ষেপকের বৃহত্তম পাল্লা অনুভূমিক পাল্লার দ্বিগুণ হলে প্রক্ষেপ কোণ কত? (ক) 30° অথবা 150° (খ) 15° অথবা 75° (গ) 15° অথবা 60° (ঘ) 30° অথবা 75°
প্রশ্ন 42. একজন খেলোয়াড় পেনাল্টি শট করার জন্য 14ms⁻¹ বেগে একটি বল শট করলেন এবং তা 10 মিটার দূরে কোনো রকমে বারের উপর দিয়ে অনুভূমিকভাবে অতিক্রম করল। বল শট করার সময় প্রক্ষেপ কোণ কত ছিল? (ক) 30° (খ) 40° (গ) 45° (ঘ) 60°
প্রশ্ন 43. tan⁻¹x + tan⁻¹y = কত? যখন (xy > 1) (ক) tan⁻¹((x + y)/(1 - xy)) (খ) tan⁻¹((x + y)/(1 - xy)) - π (গ) tan⁻¹((x + y)/(1 - xy)) + π (ঘ) tan⁻¹((x + y)/(1 - xy)) + π/2
প্রশ্ন 44. ভূমির 150 মিটার উঁচু একটি স্থান হতে একটি ভারী বস্তুকে ছেড়ে দেওয়া হলো। ভূমিতে পতনের সময় বেগ কত হবে? (ক) 29.4 মি./সে. (খ) 54.2 মি./সে. (গ) 5.53 মি./সে. (ঘ) 14.2 মি./সে.
প্রশ্ন 45. কোনো বিন্দুতে ক্রিয়াশীল P ও Q বল দুটি তাদের লব্ধি R বলের উভয় দিকে যথাক্রমে 30° ও 60° কোণে আনত। বলদ্বয়ের অনুপাত কত? (ক) 1 : √3 (খ) √3 : 1 (গ) (√3/2) : 1 (ঘ) (1/2) : √3
প্রশ্ন 46. 2N ও 2√3N মানের বলদ্বয় 30° কোণে ক্রিয়া রত। 2N মানের বল বরাবর বলদ্বয়ের লব্ধির অংশক কত? (ক) 4√3 N (খ) 5 N (গ) 7 N (ঘ) √3 + 2N
প্রশ্ন 47. (x²/a²) + (y²/b²) = 1 উপবৃত্তের উপকেন্দ্রের স্থানাঙ্ক কত? (a > b) (ক) (±√(a² + b²), 0) (খ) (±√(a² - b²), 0) (গ) (± a/e, 0) (ঘ) (0, ± ae)
প্রশ্ন 48. P ও Q (P > Q) বলদ্বয়ের মধ্যবর্তী কোণ α এবং তাদের লব্ধি R হলে— i. P = Q হলে R = 2P cos(α/2), ii. α = 90° হলে tan θ = Q/P, iii. লব্ধি R, Q বলের সাথে সমকোণ উৎপন্ন করলে cos α = - Q/P। নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 49. এককের জটিল ঘনমূলদ্বয় p ও q হলে p⁵ + q⁵ = কত? (ক) - 1 (খ) 1 (গ) ω (ঘ) ω²
প্রশ্ন 50. x² - kx + 9 = 0 সমীকরণের মূলদ্বয় জটিল হলে k এর মান কত? (ক) ± 6 (খ) {-6, 6} (গ) (-6, 6) (ঘ) (-∞, -6) ∪ (6, ∞)
প্রশ্ন 51. cos⁻¹(8/11) এর ক্ষেত্রে নিচের কোনটি সঠিক? (ক) sin⁻¹(11/57) (খ) tan⁻¹(8/57) (গ) sin⁻¹(√57/11) (ঘ) tan⁻¹(√57/11)
প্রশ্ন 52. P = 5√2 N এবং Q = 10N দুইটি অসমান্তরাল বল। লব্ধি বল P বলের উপর লম্ব হলে বলদ্বয়ের অন্তর্গত কোণ কত? (ক) 45° (খ) 60° (গ) 120° (ঘ) 135°
প্রশ্ন 53. R বল P ও Q বলের সাথে সাম্যাবস্থা সৃষ্টি করলে এবং P ও Q বলদ্বয়ের মধ্যবর্তী কোণ 45° হলে R এর মান কত? (ক) 5√10 N (খ) 250 N (গ) 5√2 N (ঘ) 50 N
প্রশ্ন 54. একটি বস্তু মুক্তভাবে 4 সেকেন্ডে পড়ল। এটি শেষ 1 সেকেন্ডে কত ফুট পড়েছিল? (ক) 16 (খ) 112 (গ) 144 (ঘ) 256
প্রশ্ন 55. 2(3 cos θ - 4 cos³θ) = -1 এর সমাধান নিচের কোনটি? (ক) 2nπ ± π/3 (খ) (2nπ)/3 ± π/9 (গ) 2nπ ± π/6 (ঘ) (2nπ)/3 ± π/18
প্রশ্ন 56. ∛2 এর মূলত্রয়ের যোগফল কত? (ক) 0 (খ) 2 (গ) 2ω (ঘ) 2ω²
প্রশ্ন 57. z = x + iy হলে |z + 1| = |z - 2| দ্বারা নির্দেশিত সঞ্চারপথ কোনটি? (ক) সরলরেখা (খ) বৃত্ত (গ) পরাবৃত্ত (ঘ) উপবৃত্ত
প্রশ্ন 58. x³ - 5x² + 11x - 7 = 0 একটি ত্রিঘাত সমীকরণ। সমীকরণটির একটি মূল 2 + i√3 হলে উহার বাস্তব মূলটি কত? (ক) - 15 (খ) - 9 (গ) - 1 (ঘ) 1
প্রশ্ন 59. সমীকরণের মূল a, b, c এবং ∑ab = k/7 হলে k এর মান কত? (ক) - 5/7 (খ) - 11/7 (গ) 5/7 (ঘ) 11/7
প্রশ্ন 60. 7N ও 11N বল দুইটির লব্ধি বল নিচের কোনটি হতে পারে না? (ক) 4N (খ) 7N (গ) 18N (ঘ) 20N
প্রশ্ন 61. x² + 4x + 5 = 0 সমীকরণের মূলদ্বয় α, β হলে α + 2 এবং β + 2 মূলবিশিষ্ট সমীকরণ নিচের কোনটি? (ক) x² - 1 = 0 (খ) x² - 8x + 1 = 0 (গ) x² + 1 = 0 (ঘ) x² + 8x + 1 = 0
প্রশ্ন 62. 4x² - y² + 16 = 0 অধিবৃত্তের পরামিতিক স্থানাঙ্ক কোনটি? (ক) (4 sec θ, 2 tan θ) (খ) (2 sec θ, 4 tan θ) (গ) (4 tan θ, 2 sec θ) (ঘ) (2 tan θ, 4 sec θ)
প্রশ্ন 63. z = i - 1 হলে— i. মডুলাস = √2, ii. আর্গুমেন্ট = π/4, iii. z z̅ একটি বাস্তব সংখ্যা। নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 64. sin x + cosec x = -2 এবং n ∈ ℤ হলে x এর মান কত? (ক) 2nπ + π/2 (খ) 2nπ - π/2 (গ) 2nπ (ঘ) 2nπ - π
প্রশ্ন 65. (x²/2) + (y²/3) = 1 একটি কণিকের সমীকরণ। বৃহৎ অক্ষের দৈর্ঘ্য কত? (ক) 2√2 (খ) 2√3 (গ) 4 (ঘ) 6
প্রশ্ন 66. উক্ত কণিকের উপকেন্দ্রের স্থানাঙ্ক কত? (ক) (± 1/√3, 0) (খ) (0, ± 1/√3) (গ) (± 1, 0) (ঘ) (0, ± 1)
প্রশ্ন 67. cos⁻¹{-sin(tan⁻¹ 2 + cot⁻¹ 2)} এর মান কত? (ক) -π/2 (খ) 0 (গ) π/2 (ঘ) π
প্রশ্ন 68. (x - 1)² = -y এর— i. শীর্ষ (1, 0), ii. উপকেন্দ্র (-1/4, 0), iii. উপকেন্দ্র থেকে নিকটতম নিয়ামকের দূরত্ব = 1/2। নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 69. z = x + iy হলে √(z - z̅) এর মান কত? (ক) √y (1 + i) (খ) √y (1 - i) (গ) √x (1 + i) (ঘ) √x (1 - i)
প্রশ্ন 70. 2x² - x + k = 0 সমীকরণের মূলদ্বয় সমান হলে, k-এর মান কত? (ক) - 1/4 (খ) - 1/8 (গ) 1/8 (ঘ) 1/4
প্রশ্ন 71. cos²(tan⁻¹(1/√2)) এর মান কত? (ক) 2/3 (খ) 3/4 (গ) 4/3 (ঘ) 3/2
প্রশ্ন 72. স্থিরাবস্থা হতে একটি বস্তু 3ms⁻² সমত্বরণে যাত্রা করলে 10 s এ কত মিটার দূরত্ব অতিক্রম করবে? (ক) 30 (খ) 105 (গ) 150 (ঘ) 300
প্রশ্ন 73. 3x² + 4y² = 12 উপবৃত্তের— i. উৎকেন্দ্রিকতা 1/2, ii. উপকেন্দ্র (± 1, 0), iii. নিয়ামক রেখার সমীকরণ y = ± √3। নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 74. x² = 16y পরাবৃত্তের উপরিস্থিত P বিন্দুর ভুজ 16 হলে, P বিন্দুর উপকেন্দ্রিক দূরত্ব কত? (ক) 12 (খ) 20 (গ) 24 (ঘ) 36
প্রশ্ন 75. 4y² - 5x² = 20 একটি অধিবৃত্তের সমীকরণ। অধিবৃত্তটির অসীমতট রেখার সমীকরণ কোনটি? (ক) y = ± (√5 / 2) x (খ) y = ± (2 / √5) x (গ) x = ± (√5 / 2) y (ঘ) x = ± (2 / √5) y
প্রশ্ন 76. অধিবৃত্তটির নিয়ামক রেখাদ্বয়ের মধ্যবর্তী দূরত্ব কত একক? (ক) 4√5 / 3 (খ) 10 / 3 (গ) 12 / √5 (ঘ) 6
প্রশ্ন 77. (-1 - √-3)/2 এর মুখ্য আর্গুমেন্ট কত? (ক) - 2π/3 (খ) - π/3 (গ) π/3 (ঘ) 2π/3
প্রশ্ন 78. পরস্পর 60° কোণে ক্রিয়াশীল দুটি বলের বৃহত্তম লব্ধি 10N এবং ক্ষুদ্রতম লব্ধি 4N হলে, তাদের লব্ধির মান কত? (ক) √37 N (খ) 2√19 N (গ) √79 N (ঘ) 2√39 N
প্রশ্ন 79. f(x) = cos⁻¹x ফাংশনের রেঞ্জ কত? (ক) (-π/2, π/2) (খ) [-π/2, π/2] (গ) (0, π) (ঘ) [0, π]
প্রশ্ন 80. cosec θ + cot θ = √3 (0 < θ < π) হলে, θ এর মান কত? (ক) π/6 (খ) π/4 (গ) π/3 (ঘ) 2π/3
প্রশ্ন 81. 2x² - 5x + 4 = 0 সমীকরণের মূলদ্বয় হবে— (ক) বাস্তব ও সমান (খ) বাস্তব ও অসমান (গ) জটিল ও সমান (ঘ) জটিল ও অসমান
প্রশ্ন 82. 1 / i এর বর্গমূল কত? (ক) ± (1/√2) (1 + i) (খ) ± (1/√2) (1 - i) (গ) ± (1 + i) (ঘ) ± (1 - i)
প্রশ্ন 83. স্রোতের বেগ 2m/s এবং নৌকার বেগ 8m/s। নৌকাটি স্রোতের বিপরীত দিকে চালালে স্রোতের সাপেক্ষে নৌকার আপেক্ষিক বেগ কত? (ক) 4 m/s (খ) 6 m/s (গ) 10 m/s (ঘ) 16 m/s
প্রশ্ন 84. একটি জড়দণ্ডের উপর পরস্পর 40 সে.মি. ব্যবধানে 12 কেজি ও 8 কেজি ওজনের দুইটি বল সদৃশ সমান্তরালে ক্রিয়া করে। বলদ্বয়ের লব্ধির মান কত কেজি? (ক) 4 (খ) 8 (গ) 12 (ঘ) 20
প্রশ্ন 85. লব্ধির ক্রিয়া বিন্দু 12 কেজি ওজনের বলের ক্রিয়া বিন্দু হতে কত সে.মি. দূরে অবস্থিত? (ক) 16 (খ) 24 (গ) 32 (ঘ) 80
প্রশ্ন 86. n একটি পূর্ণ সংখ্যা হলে sin 2θ = 1 সমীকরণের সাধারণ সমাধান কোনটি? (ক) (4n + 1) π/4 (খ) (4n - 1) π/4 (গ) (2n + 1) π/2 (ঘ) (2n - 1) π/2
প্রশ্ন 87. কোনো বিন্দুতে 1, 2, √3 একক বলত্রয় ক্রিয়া করে সাম্যাবস্থার সৃষ্টি করলে, শেষ বল দুটির মধ্যবর্তী কোণ কত? (ক) 60° (খ) 90° (গ) 120° (ঘ) 150°
প্রশ্ন 88. i⁵ + i⁶ + i⁷ + i⁸ + i⁹ এর মান কত? (ক) - 1 (খ) - i (গ) 1 (ঘ) i
প্রশ্ন 89. x + y + c = 0 সরলরেখাটি y² = x পরাবৃত্তকে স্পর্শ করলে c এর মান কত? (ক) - 4 (খ) - 1/4 (গ) 1/4 (ঘ) 4
প্রশ্ন 90. z = 2 - 2i হলে— i. Re(z) + Im(z) = 0, ii. z z̅ = 8, iii. z এর পোলার আকার 2√2 (cos π/4 - i sin π/4)। নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 91. ax² + bx + c = 0 দ্বিঘাত সমীকরণের মূল দুটি অনুবন্ধী হওয়ার শর্ত কোনটি? (ক) b ≠ 0 (খ) c ≠ 0 (গ) c = 0 (ঘ) b = c = 0
প্রশ্ন 92. 2x² - 5x + 3 = 0 সমীকরণের মূলদ্বয় α, β হলে, ∑α³ এর মান কত? (ক) 8/35 (খ) 35/8 (গ) 20 (ঘ) 215/8
প্রশ্ন 93. √-3 + 1 মূল বিশিষ্ট দ্বিঘাত সমীকরণ নিচের কোনটি? (ক) x² + 2x + 4 = 0 (খ) x² - 2x + 4 = 0 (গ) x² + 2x - 4 = 0 (ঘ) x² - 2x - 4 = 0
প্রশ্ন 94. x³ - 3x + 10 = 0 সমীকরণের মূলগুলো α, β, γ হলে ∑α = কত? (ক) 7 (খ) 3 (গ) 0 (ঘ) - 3
প্রশ্ন 95. k এর মান কত হলে (k + 2)x² - (k + 2) x + 1 = 0 সমীকরণের মূলগুলো জটিল হবে? (ক) -2 ≤ k < 2 (খ) -2 < k ≤ 2 (গ) -2 ≤ k ≤ 2 (ঘ) -2 < k < 2
প্রশ্ন 96. x² - 2x - 3 = 0 সমীকরণের মূলদ্বয় α ও β হলে |α - β| = কত? (ক) ± 4 (খ) ± 8 (গ) ± √-4 (ঘ) ± √-8
প্রশ্ন 97. c এর মান কত হলে x² - 7x + c = 0 সমীকরণের মূল দুটি ক্রমিক পূর্ণসংখ্যা হবে? (ক) 3 (খ) 4 (গ) 7 (ঘ) 12
প্রশ্ন 98. y² = 8x পরাবৃত্তের নিয়ামকরেখার সমীকরণ কোনটি? (ক) x - 2 = 0 (খ) x + 2 = 0 (গ) y - 2 = 0 (ঘ) y + 2 = 0
প্রশ্ন 99. b এর মান কত হলে y = 4x + 1 সরলরেখাটি y² = 8bx পরাবৃত্তকে স্পর্শ করবে? (ক) 1/4 (খ) 1/2 (গ) 2 (ঘ) 4
প্রশ্ন 100. cos(sin⁻¹x) এর মান কোনটি? (ক) √(x² - 1) (খ) √(1 - x²) (গ) x² + 1 (ঘ) 1 - x²





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
      // একই option আবার click করলে deselect হবে
      if (selectedAnswers[index] === optionIndex) {
        selectedAnswers[index] = null;
        option.classList.remove('selected');
        return;
      }

      // অন্য option select করলে আগেরটা unselect হবে
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

/* =====================================================
   VISITOR LOG
===================================================== */

const VISITOR_LOG_URL =
  'https://script.google.com/macros/s/AKfycbwLTabN__CWkVDBhjDc9-WH4paBsyITqiilFhymtcnk_PBR5Z6141gLJDl_tU1V9ryR2Q/exec';

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

    /*
        Visitor Log
    */

    const ownerMode =
      new URLSearchParams(window.location.search).get('owner') === '1';

    if (ownerMode) {
      localStorage.setItem('lamiaVisitorRole', 'OWNER');
    }

    const visitorRole = localStorage.getItem('lamiaVisitorRole') || 'USER';

    const visitorLog = new Image();

    visitorLog.src =
      VISITOR_LOG_URL +
      '?role=' +
      encodeURIComponent(visitorRole) +
      '&t=' +
      Date.now();

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

/* =====================================================
   DISABLE QUESTION COPY
===================================================== */

document.addEventListener('copy', function (e) {
  e.preventDefault();
});

document.addEventListener('cut', function (e) {
  e.preventDefault();
});

document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});
