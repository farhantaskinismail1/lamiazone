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

প্রশ্ন 1. নিচের কোনটি দণ্ডাকার ভাইরাস? (ক) T₂ (খ) TMV (গ) HIV (ঘ) Vaccinia
প্রশ্ন 2. নিচের কোনটি ম্যালেরিয়া জীবাণুর হ্যাপ্লয়েড দশা? (ক) জাইগোট (খ) উকিনেট (গ) উসিস্ট (ঘ) স্পোরোজয়েট
প্রশ্ন 3. কোনটি Malvaceae গোত্রের শনাক্তকারী বৈশিষ্ট্য? (ক) পরাগধানী সর্বমুখ (খ) অমরাবিন্যাস অক্ষীয় (গ) পাতা লিগিউলেট (ঘ) গর্ভমুণ্ড পালকের ন্যায়
প্রশ্ন 4. কোনটি পরিণত জাইলেম টিস্যুর সজীব উপাদান? (ক) ট্রাকিড (খ) ভেসেল (গ) জাইলেম প্যারেনকাইমা (ঘ) জাইলেম ফাইবার
প্রশ্ন 5. নিচের কোনটি উদ্ভিদ বাতাস হতে গ্রহণ করে? (ক) নাইট্রোজেন (খ) কার্বন (গ) ক্লোরিন (ঘ) সোডিয়াম
প্রশ্ন 6. গ্লাইকোলাইসিস প্রক্রিয়ায় এক অণু গ্লুকোজ হতে নীট কয়টি ATP উৎপন্ন হয়? (ক) ২ (খ) ৩ (গ) ৪ (ঘ) ৬
প্রশ্ন 7. নিচের কোনটি ম্যাক্রো মৌল? (ক) সোডিয়াম (খ) নাইট্রোজেন (গ) ম্যাঙ্গানিজ (ঘ) ক্লোরিন
প্রশ্ন 8. টিস্যু কালচারের উদ্দেশ্যে মাতৃ উদ্ভিদ হতে পৃথকীকৃত অংশের নাম কী? (ক) মেরিস্টেম (খ) অনুচারা (গ) এক্সপ্লান্ট (ঘ) ক্যালাস
প্রশ্ন 9. কোন অঙ্গাণুতে গ্রানাম বিদ্যমান? (ক) নিউক্লিয়াস (খ) মাইটোকন্ড্রিয়া (গ) ক্লোরোপ্লাস্ট (ঘ) রাইবোসোম
প্রশ্ন 10. 80s রাইবোসোমের উপ-এককগুলো হলো— (ক) 60s ও 40s (খ) 50s ও 30s (গ) 60s ও 20s (ঘ) 50s ও 40s
প্রশ্ন 11. কোন জেনেটিক কোডটি ট্রান্সলেশন বন্ধের সংকেত প্রদান করে? (ক) AUG (খ) UAA (গ) UUC (ঘ) CUU
প্রশ্ন 12. নিচের কোনটিতে বৃত্তাকার DNA দেখা যায়? (ক) নিউক্লিয়াস (খ) রাইবোসোম (গ) লাইসোসোম (ঘ) মাইটোকন্ড্রিয়া
প্রশ্ন 13. একটি অ্যান্টিকোডনে কয়টি নাইট্রোজেন বেস থাকে? (ক) ২ (খ) ৩ (গ) ৪ (ঘ) ৬
প্রশ্ন 14. কোন উপ-পর্যায়ে DNA অনুলিপন ঘটে? (ক) ইন্টারফেজ (খ) প্রফেজ (গ) মেটাফেজ (ঘ) টেলোফেজ
প্রশ্ন 15. 2n = 8 হলে মাইটোসিস মেটাফেজ দশায় মোট কয়টি ক্রোমাটিড দেখা যাবে? (ক) ৪ (খ) ৮ (গ) ১৬ (ঘ) ২৪
প্রশ্ন 16. কোন ধাপে জীবের বৈচিত্র্য সৃষ্টির প্রক্রিয়া সূচনা হয়? (ক) লেপ্টোটিন (খ) জাইগোটিন (গ) প্যাকাইটিন (ঘ) ডিপ্লোটিন
প্রশ্ন 17. কোনটি ব্যাকটেরিয়াজনিত রোগ? (ক) জন্ডিস (খ) কলেরা (গ) ডেঙ্গু (ঘ) পোলিও
প্রশ্ন 18. মাইটোসিস কোষ বিভাজনের কোন দশায় ক্রোমোজোম বিষুবীয় অঞ্চলে বিন্যস্ত হয়? (ক) প্রফেজ (খ) মেটাফেজ (গ) অ্যানাফেজ (ঘ) টেলোফেজ
প্রশ্ন 19. সেকেন্ডারি ভাজক টিস্যু কোনটি? (ক) প্রোটোডার্ম (খ) প্রোক্যাম্বিয়াম (গ) কর্ক ক্যাম্বিয়াম (ঘ) ক্যাম্বিয়াম
প্রশ্ন 20. গ্লাইকোক্যালিক্স গঠিত হয় কোন কোন উপাদান দিয়ে? (ক) গ্লাইকোলিপিড ও গ্লাইকোপ্রোটিন (খ) গ্লাইকোলিপিড ও এনজাইম (গ) লিপিড ও কার্বক্সিলিক এসিড (ঘ) লিপিড ও কোলেস্টেরল
প্রশ্ন 21. কোন ক্ষেত্রে প্রস্বেদন হার বেশি হয়? যদি— (ক) আর্দ্রতা বেশি হয় (খ) বায়ুচাপ কম হয় (গ) তাপমাত্রা কম হয় (ঘ) বায়ুপ্রবাহ কম হয়
প্রশ্ন 22. কোনটি RNA ভাইরাস? (ক) Variola (খ) Vaccinia (গ) TMV (ঘ) T₂ phage
প্রশ্ন 23. Endosymbiont বলা হয় কোনটিকে? (ক) রাইবোসোম (খ) মাইটোকন্ড্রিয়া (গ) লাইসোসোম (ঘ) গলগি বডি
প্রশ্ন 24. পেঁপের রিং স্পট রোগের জীবাণু— (ক) DNA বহন করে (খ) মশা দ্বারা বাহিত হয় (গ) দণ্ডাকৃতির (ঘ) Flaviviridae গোত্রের অন্তর্গত
প্রশ্ন 25. কোন নাইট্রোজেন বেস শুধু রাইবোজের সাথে যুক্ত হয়? (ক) অ্যাডেনিন (খ) গুয়ানিন (গ) থাইমিন (ঘ) ইউরাসিল
প্রশ্ন 26. জেনোম সিকোয়েন্স প্রয়োগ করা হয়— i. অপরাধী শনাক্তকরণে ii. ক্যানসার গবেষণায় iii. উদ্ভিদের মান উন্নয়নে ; নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 27. স্পোরোফাইটিক উদ্ভিদের কোথায় মায়োসিস ঘটে? (ক) দেহকোষে (খ) জননকোষে (গ) জনন মাতৃকোষে (ঘ) জাইগোটে
প্রশ্ন 28. ম্যালেরিয়া জীবাণুর বহু নিউক্লিয়াসযুক্ত দশা কোনটি? (ক) স্পোরোজয়েট (খ) ট্রফোজয়েট (গ) সাইজন্ট (ঘ) মেরোজয়েট
প্রশ্ন 29. কোরালয়েড মূলে কোনটি পাওয়া যায়? (ক) Nostoc (খ) Clostridium (গ) Rhizobium (ঘ) E.coli
প্রশ্ন 30. জবা ফুলের দলমণ্ডলে পুষ্পপত্র বিন্যাস কোন ধরণের? (ক) ওপেন (খ) ভালভেট (গ) ইমব্রিকেট (ঘ) টুইস্টেড
প্রশ্ন 31. DNA এর টেমপ্লেট সূত্রের অনুক্রম GCAT হতে উৎপন্ন m-RNA এর বেস অনুক্রম হবে কোনটি? (ক) CGUA (খ) GGUA (গ) CUGA (ঘ) CGUU
প্রশ্ন 32. Stop কোডন হলো— i. UAA ii. UAG iii. AUG ; নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 33. ক্লোরোপ্লাস্টের কোথায় ক্লোরোফিল অবস্থান করে? (ক) থাইলাকয়েড (খ) স্ট্রোমায় (গ) স্ট্রোমা ল্যামেলি তে (ঘ) ঝিল্লিতে
প্রশ্ন 34. কোষ প্রাচীরের ক্ষুদ্রতম গাঠনিক একক কোনটি? (ক) সেলুলোজ (খ) মাইসেলি (গ) মাইক্রোফাইব্রিল (ঘ) লিগনিন
প্রশ্ন 35. DNA প্রতিলিপনের সময় হাইড্রোজেন বন্ধনী ভাঙে কোন এনজাইম? (ক) প্রাইমেজ (খ) পলিমারেজ (গ) লাইগেজ (ঘ) হেলিকোজ
প্রশ্ন 36. মাইটোসিস এর কোন পর্যায়ে ক্রোমোজোম হতে পানি বিয়োজন ঘটে? (ক) প্রফেজ (খ) মেটাফেজ (গ) এনাফেজ (ঘ) টেলোফেজ
প্রশ্ন 37. এরিথ্রোসাইটিক সাইজোগোনিতে কোন ধাপটি ক্ষণস্থায়ী? (ক) সাইজন্ট (খ) সিগনেট রিং (গ) ট্রফোজয়েট (ঘ) মেরোজয়েট
প্রশ্ন 38. কোনটি সাইকাসের আদি বৈশিষ্ট্য? (ক) হ্যাপ্লয়েড শস্য (খ) গর্ভাশয়হীন (গ) আর্কিগোনিয়াম (ঘ) ভেসেল অনুপস্থিত
প্রশ্ন 39. Malvaceae গোত্রের দলের পুষ্পপত্র বিন্যাস কোন ধরনের? (ক) ওপেন (খ) ভালভেট (গ) ইমব্রিকেট (ঘ) টুইস্টেড
প্রশ্ন 40. ধানগাছের ১টি পুষ্পে কয়টি পুংকেশর থাকে? (ক) ৩ (খ) ৪ (গ) ৫ (ঘ) ৬
প্রশ্ন 41. কোন ভাজক টিস্যুর কারণে উদ্ভিদের পাতার আয়তন বৃদ্ধি পায়? (ক) মাস ভাজক টিস্যু (খ) প্লেট ভাজক টিস্যু (গ) সেকেন্ডারি ভাজক টিস্যু (ঘ) প্রাইমারি ভাজক টিস্যু
প্রশ্ন 42. অধস্ত্বকের নিচে থেকে অন্তঃত্বক পর্যন্ত বিস্তৃত অংশটির নাম কী? (ক) পরিচক্র (খ) মজ্জা (গ) কর্টেক্স (ঘ) মজ্জারশ্মি
প্রশ্ন 43. পত্ররন্ধ্র খোলা ও বন্ধ হওয়ার জন্য দায়ী আয়োন কোনটি? (ক) ক্যালসিয়াম (খ) সোডিয়াম (গ) পটাশিয়াম (ঘ) ম্যাগনেসিয়াম
প্রশ্ন 44. প্রথম গতিপথে CO₂ গ্রহণে কোন এনজাইমটি সাহায্য করে? (ক) কাইনেজ (খ) রুবিস্কো (গ) ডিহাইড্রোজিনেজ (ঘ) আইসোমারেজ
প্রশ্ন 45. উদ্ভিদের দ্বিতীয় গতিপথ অনুসরণকারী উদ্ভিদের উৎপাদনশীলতা বেশি কারণ— i. অধিক তাপসহনশীল ii. দুই ধরণের ক্লোরোপ্লাস্ট বিদ্যমান iii. আদর্শ তাপমাত্রা ১০° সে. থেকে ২৫° সে. ; নিচের কোনটি সঠিক? (ক) i ও ii (খ) i ও iii (গ) ii ও iii (ঘ) i, ii ও iii
প্রশ্ন 46. নিচের কোনটি আয়ন বাহক মতবাদ? (ক) ব্যাপন মতবাদ (খ) ডোনান সাম্যাবস্থা (গ) লুণ্ডেগড় মতবাদ (ঘ) ব্যাপক প্রবাহ
প্রশ্ন 47. সবাত ও অবাত শ্বসনের অভিন্ন ধাপ কোনটি? (ক) গ্লাইকোলাইসিস (খ) অ্যাসিটাইল কো-এ সৃষ্টি (গ) ক্রেবস চক্র (ঘ) ইলেকট্রন প্রবাহতন্ত্র
প্রশ্ন 48. জিনোম সিকোয়েন্সিং এর প্রয়োগ করা হয় কোথায়? (ক) মলিকুলার ফার্মিং এ (খ) ট্রান্সজেনিক প্রাণী সৃষ্টিতে (গ) ইন্টারফেরন উৎপাদনে (ঘ) স্বজন নির্ধারণগে
প্রশ্ন 49. কোনটি Anti-Codon বহন করে? (ক) m-RNA (খ) t-RNA (গ) r-RNA (ঘ) g-RNA
প্রশ্ন 50. নিচের কোনটি প্রোক্যাম্বিয়াম থেকে সৃষ্টি হয়? (ক) কর্টেক্স (খ) জাইলেম (গ) মজ্জা (ঘ) মজ্জারশ্মি
প্রশ্ন 51. নিচের কোনটিতে ক্যাসপেরিয়ান স্ট্রিপ বিদ্যমান? (ক) এপিডার্মিসে (খ) হাইপোডার্মিসে (গ) পেরিসাইকেলে (ঘ) এন্ডোডার্মিসে
প্রশ্ন 52. কোন আয়নটি পত্ররন্ধ্র খুলতে সহায়তা করে? (ক) Ca²⁺ (খ) Mg²⁺ (গ) Mn²⁺ (ঘ) K⁺
প্রশ্ন 53. নিচের কোন স্টোম্যাটা তিনটি সহকারী কোষ দ্বারা পরিবেষ্টিত? (ক) Paracytic (খ) Anisocytic (গ) Actinocytic (ঘ) Anomocytic
প্রশ্ন 54. নিচের কোনটি সক্রিয় পরিশোধনের ক্ষেত্রে প্রযোজ্য? (ক) ডোনান সাম্যাবস্থা মতবাদ (খ) ব্যাপন মতবাদ (গ) লুণ্ডেগড় মতবাদ (ঘ) ব্যাপক প্রবাহ মতবাদ
প্রশ্ন 55. নিচের কোনটি আবাদ মাধ্যমকে জমাট বাঁধতে সহায়তা করে? (ক) ভিটামিন (খ) হরমোন (গ) অ্যাগার (ঘ) সুক্রোজ
প্রশ্ন 56. উদ্দীপকের প্রযুক্তিটি নিচের কোন উদ্ভিদ তৈরিতে ব্যবহৃত হয়? (ক) সংকর (খ) ট্রান্সজেনিক (গ) হ্যাপ্লয়েড (ঘ) সমগুণসম্পন্ন
প্রশ্ন 57. নিচের কোন প্রক্রিয়ায় প্রাইমার তৈরি হয়? (ক) ট্রান্সক্রিপশন (খ) ট্রান্সলেশন (গ) রিভার্স ট্রান্সক্রিপশন (ঘ) রেপ্লিকেশন
প্রশ্ন 58. কোনটি C₃ চক্রের জন্য সঠিক? (ক) আদর্শ তাপমাত্রা ৩০° সে.—৪৫° সে. (খ) ক্লোরোপ্লাস্টের স্ট্রোমাতে হয় (গ) প্রথম উৎপন্ন দ্রব্য অক্সালো এসিটিক এসিড (ঘ) CO₂ এর ঘনত্ব ০.১০—১০ ppm দরকার
প্রশ্ন 59. শক্তি উৎপাদনের সাথে জড়িত অঙ্গাণু কোনটি? (ক) ক্লোরোপ্লাস্ট (খ) রাইবোসোম (গ) মাইটোকন্ড্রিয়া (ঘ) নিউক্লিয়াস
প্রশ্ন 60. কোনটি ক্যারিওলিফ নামে পরিচিত? (ক) নিউক্লিওপ্লাজম (খ) এক্টোপ্লাজম (গ) প্রোটোপ্লাজম (ঘ) এন্ডোপ্লাজম
প্রশ্ন 61. কোনটিকে গতি পর্যায় বলা হয়? (ক) প্রফেজ (খ) মেটাফেজ (গ) অ্যানাফেজ (ঘ) টেলোফেজ
প্রশ্ন 62. নিচের কোনটিতে মিওসিস ভূমিকা রাখে? (ক) দেহ গঠন (খ) জনুক্রম (গ) ক্ষয়পূরণে (ঘ) অঙ্গজ জননে
প্রশ্ন 63. কোন অঙ্গাণুটি অটোফ্যাজি এর সাথে জড়িত? (ক) মাইটোকন্ড্রিয়া (খ) এন্ডোপ্লাজমিক রেটিকুলাম (গ) গলগি বস্তু (ঘ) লাইসোসোম
প্রশ্ন 64. নিচের কোনটিকে সংক্রমণক্ষম পূর্ণাঙ্গ ভাইরাস বলা বলে? (ক) ভিরিয়ন (খ) ভি রয়েড (গ) প্রিয়ন (ঘ) নিউক্লিওক্যাপসিড
প্রশ্ন 65. ব্যাকটেরিয়াতে পিলির প্রধান কাজ কোনটি? (ক) কোষ বিভাজনে সাহায্য করা (খ) চলনে অংশগ্রহণ করা (গ) পোষকের সাথে যুক্ত হওয়া (ঘ) প্রতিকূল অবস্থা রক্ষা করা
প্রশ্ন 66. হোমোলোগাস ক্রোমোজোমের জোড় বাঁধার প্রক্রিয়াকে কী বলে? (ক) বাইভেলেন্ট (খ) সিন্যাপসিস (গ) টেট্রাড (ঘ) কায়াজমা
প্রশ্ন 67. কোষঝিল্লির ক্ষেত্রে নিচের কোনটি প্রযোজ্য? (ক) ভেদ্য (খ) ত্রিস্তরী (গ) প্লাজমোডেসমাটাযুক্ত (ঘ) স্থিতিস্থাপক
প্রশ্ন 68. গ্লাইকোলাইসিসের বিক্রিয়াসমূহ কোথায় সংঘটিত হয়? (ক) সাইটোপ্লাজমে (খ) মাইটোকন্ড্রিয়ায় (গ) নিউক্লিওপ্লাজমে (ঘ) ক্লোরোপ্লাস্টে
প্রশ্ন 69. মাইটোসিসের কোন পর্যায়ে স্পিন্ডল ফাইবার অদৃশ্য হয়? (ক) প্রো-মেটাফেজ (খ) মেটাফেজ (গ) অ্যানাফেজ (ঘ) টেলোফেজ
প্রশ্ন 70. নিচের কোন অঙ্গাণুটি অটোলাইসিস ঘটায়? (ক) লাইসোসোম (খ) সেন্ট্রিওল (গ) গলজিবডি (ঘ) রাইবোসোম
প্রশ্ন 71. নিচের কোনটি ম্যালেরিয়া পরজীবীর এরিথ্রোসাইটিক সাইজোগোনি সংশ্লিষ্ট? (ক) স্পোরোজয়েট (খ) ক্রিপ্টোমেরোজয়েট (গ) ক্রিপ্টোজয়েট (ঘ) ট্রফোজয়েট
প্রশ্ন 72. Cycas উদ্ভিদের স্ত্রী জননাঙ্গ কী নামে পরিচিত? (ক) মাইক্রোস্পোরোফিল (খ) মেগাস্পোরোফিল (গ) স্ট্রবিলাস (ঘ) সোরাস
প্রশ্ন 73. মূলের পরিবহন কলাগুচ্ছ কী প্রকৃতির? (ক) সমপার্শ্বীয় (খ) কেন্দ্রিক (গ) সমদ্বিপার্শ্বীয় (ঘ) অরীয়
প্রশ্ন 74. নিচের কোন উদ্ভিদে ক্রাঞ্জ এনাটমি দেখা যায়? (ক) ধান (খ) ভুট্টা (গ) গম (ঘ) বার্লি
প্রশ্ন 75. রক্তকোষের উপস্থিতি নিচের কোথায় লক্ষ্য করা যায়? (ক) পানি পত্ররন্ধ্রে (খ) কাণ্ডরোমে (গ) গ্রন্থিরোমে (ঘ) মূলরোমে
প্রশ্ন 76. নিচের কোন প্রযুক্তি প্রয়োগ করে জীবের জিনোটাইপের পরিবর্তন ঘটানো যায়? (ক) টিস্যু কালচার (খ) জিনোম সিকোয়েন্সিং (গ) জিন ক্লোনিং (ঘ) রিকম্বিনেন্ট DNA
প্রশ্ন 77. নিচের কোনটির মাধ্যমে হ্যাপ্লয়েড উদ্ভিদ উৎপাদন করা যায়? (ক) মেরিস্টেম কালচার (খ) ক্যালাস কালচার (গ) পরাগধানী কালচার (ঘ) কক্ষ মুকুল কালচার
প্রশ্ন 78. নিচের কোন টিস্যুর কোষগুলো আকারে ছোট এবং দৈর্ঘ্য ও প্রস্থে প্রায় সমান? (ক) ভাজক টিস্যু (খ) সরল টিস্যু (গ) জটিল টিস্যু (ঘ) খরণকারী টিস্যু
প্রশ্ন 79. টিস্যু কালচার প্রযুক্তির উদ্ভাবক কে? (ক) G. Haberlandt (খ) T. Morgan (গ) J. Williamson (ঘ) F. Sanger
প্রশ্ন 80. রিকম্বিনেন্ট DNA তৈরিতে ব্যবহৃত এনজাইমটি হচ্ছে— (ক) প্রাইমেজ (খ) হেলিকেজ (গ) রেস্ট্রিকশন এন্ডোনিউক্লিয়েজ (ঘ) পলিমারেজ
প্রশ্ন 81. নিচের কোনটি আদি কোষের বৈশিষ্ট্য? (ক) আবরণীবেষ্টিত অঙ্গাণু থাকে (খ) 70S রাইবোসোম থাকে (গ) সাইটোপ্লাজমীয় কঙ্কাল থাকে (ঘ) একাধিক ক্রোমোজোম থাকে
প্রশ্ন 82. কোষ প্রাচীরের প্রধান রাসায়নিক উপাদান কোনটি? (ক) প্রোটিন (খ) পেকটিন (গ) সেলুলোজ (ঘ) লিগনিন
প্রশ্ন 83. কোন অঙ্গাণুকে কোষের 'পাওয়ার হাউস' বলা হয়? (ক) গলগি বডি (খ) সাইটোপ্লাজম (গ) মাইটোকন্ড্রিয়া (ঘ) প্লাস্টিড
প্রশ্ন 84. প্লাস্টিড সাধারণত কয় প্রকার? (ক) ২ (খ) ৩ (গ) ৪ (ঘ) ৫
প্রশ্ন 85. বংশগতির ভৌত ভিত্তি কোনটি? (ক) জিন (খ) DNA (গ) RNA (ঘ) ক্রোমোজোম
প্রশ্ন 86. সালোকসংশ্লেষণের জন্য অপটিমাম তাপমাত্রা কত? (ক) ১০°-১৫° সে. (খ) ২০°-২৫° সে. (গ) ২২°-৩৫° সে. (ঘ) ৪০°-৪৫° সে.
প্রশ্ন 87. অবাত শ্বসনে এক অণু গ্লুকোজ থেকে কয়টি ATP পাওয়া যায়? (ক) ২ (খ) ৪ (গ) ৮ (ঘ) ৩৬
প্রশ্ন 88. মানুষের কায়িক কোষে ক্রোমোজোম সংখ্যা কতটি? (ক) ২৩ (খ) ২৪ (গ) ৪৬ (ঘ) ৪৮
প্রশ্ন 89. নিচের কোনটি C₄ উদ্ভিদ? (ক) আম (খ) ধান (গ) আখ (ঘ) গম
প্রশ্ন 90. টিস্যু কালচার পদ্ধতির প্রধান উপাদান কোনটি? (ক) এক্সপ্লান্ট (খ) ক্যালাস (গ) হরমোন (ঘ) অনুচারা
প্রশ্ন 91. ভাইরাস অর্থ কী? (ক) জীবাণু (খ) বিষ (গ) কোষ (ঘ) প্রোটিন
প্রশ্ন 92. ব্যাকটেরিয়ার কোষপ্রাচীর কী দিয়ে গঠিত? (ক) সেলুলোজ (খ) পেপটিডোগ্লাইকান (গ) কাইটিন (ঘ) লিগনিন
প্রশ্ন 93. লাইকেন কিসের সমন্বয়ে গঠিত? (ক) ছত্রাক ও শৈবাল (খ) ভাইরাস ও ব্যাকটেরিয়া (গ) শৈবাল ও প্রোটোজোয়া (ঘ) ছত্রাক ও ব্যাক্টেরিয়া
প্রশ্ন 94. নগ্নবীজী উদ্ভিদের ফল তৈরি হয় না কেন? (ক) গর্ভাশয় নেই (খ) গর্ভদণ্ড নেই (গ) গর্ভমুণ্ড নেই (ঘ) ডিম্বক নেই
প্রশ্ন 95. ফার্ন উদ্ভিদের পাতাকে কী বলা হয়? (ক) স্কেল (খ) ফ্রন্ড (গ) সোরাস (ঘ) রমেন্টা
প্রশ্ন 96. পাতার মাধ্যমে অঙ্গজ প্রজনন ঘটে কোন উদ্ভিদে? (ক) আলু (খ) পেঁয়াজ (গ) পাথরকুচি (ঘ) আদা
প্রশ্ন 97. উদ্ভিদের সেকেন্ডারি বৃদ্ধি ঘটায় কোনটি? (ক) শীর্ষস্থ ভাজক টিস্যু (খ) পার্শ্বীয় ভাজক টিস্যু (গ) নিবেশিত ভাজক টিস্যু (ঘ) স্থায়ী টিস্যু
প্রশ্ন 98. জীববিজ্ঞানের কোন শাখায় টিস্যু নিয়ে আলোচনা করা হয়? (ক) Histology (খ) Cytology (g) Ecology (ঘ) Morphology
প্রশ্ন 99. কোষের প্রোটিন ফ্যাক্টরি বলা হয় কাকে? (ক) মাইটোকন্ড্রিয়া (খ) গলগি বস্তু (গ) রাইবোসোম (ঘ) নিউক্লিয়াস
প্রশ্ন 100. জেনেটিক কোডের প্রবর্তক কে? (ক) ওয়াটসন ও ক্রিক (খ) মার্শাল নিরেনবার্গ (গ) মেন্ডেল (ঘ) রবার্ট হুক




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
