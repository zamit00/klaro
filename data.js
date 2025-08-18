// כללי סיווג מסלולים
const maslulRules = {
  "אשראי ואג\"ח עם מניות": { includeAll: ["אשראי","אג\"ח","מניות"], includeAny: [], exclude: [] },
  "אג\"ח סחיר עם מניות": { includeAll: ["אג\"ח","סחיר","מניות"], includeAny: [], exclude: [] },
  "עוקב מדדי אג\"ח עם מניות": { includeAll: ["עוקב","אג\"ח","מניות"], includeAny: [], exclude: [] },
  "מניות סחיר": { includeAll: ["מניות","סחיר"], includeAny: [], exclude: ["אג\"ח"] },
  "עוקב מדד s&p 500": { includeAll: ["500"], includeAny: [], exclude: [] },
  "60 ומעלה": { includeAll: ["60"], includeAny: [], exclude: ["50"] },
  "50-60": { includeAll: ["50","60"], includeAny: [], exclude: [] },
  "עד 50": { includeAll: ["50"], includeAny: [], exclude: ["60"] },
  "אשראי ואג\"ח": { includeAll: ["אשראי","אג\"ח"], includeAny: [], exclude: ["מניות"] },
  "כספי (שקלי)": { includeAll: [], includeAny: ["שקלי","כספי"], exclude: [] },
  "משולב סחיר": { includeAll: ["משולב","סחיר"], includeAny: [], exclude: [] },
  "עוקב מדדים - גמיש": { includeAll: ["עוקב","גמיש"], includeAny: [], exclude: [] },
  "אג\"ח ממשלות": { includeAll: ["אג\"ח","ממשלות"], includeAny: [], exclude: [] },
  "הלכה יהודית": { includeAll: [], includeAny: ["הלכה","הלכתי"], exclude: [] },
  "עוקב מדדי אג\"ח": { includeAll: ["עוקב","אג\"ח"], includeAny: [], exclude: ["מניות"] },
  "עוקב מדדי מניות": { includeAll: ["עוקב","מניות"], includeAny: [], exclude: ["אג\"ח"] },
  "אג\"ח סחיר": { includeAll: ["אג\"ח","סחיר"], includeAny: [], exclude: ["מניות"] },
  "מניות": { includeAll: [], includeAny: ["מניות","מנייתי"], exclude: ["אשראי","סחיר","עוקב"] },
  "כללי": { includeAll: ["כללי"], includeAny: [], exclude: [] },
  "סיכון מוגבר": { includeAll: [], includeAny: ["מוגבר"], exclude: [] },
  "סיכון בינוני": { includeAll: [], includeAny: ["בינוני"], exclude: [] },
  "סיכון מועט": { includeAll: [], includeAny: ["מועט"], exclude: [] }
 
};

// מיפוי מסלולים לפי סוג מוצר
const maslulimByProduct = {
  gemel: [

    "אשראי ואג\"ח עם מניות",
    "אג\"ח סחיר עם מניות",
    "עוקב מדדי אג\"ח עם מניות",
    "מניות סחיר",
    "עוקב מדד s&p 500",
    "60 ומעלה",
    "50-60",
    "עד 50",
    "אשראי ואג\"ח",
    "כספי (שקלי)",
    "משולב סחיר",
    "עוקב מדדים - גמיש",
    "אג\"ח ממשלות",
    "הלכה יהודית",
    "עוקב מדדי אג\"ח",
    "עוקב מדדי מניות",
    "אג\"ח סחיר",
    "מניות"
  ],
  hishtalmot: [
    "אשראי ואג\"ח עם מניות",
    "אג\"ח סחיר עם מניות",
    "עוקב מדדי אג\"ח עם מניות",
    "מניות סחיר",
    "עוקב מדד s&p 500",
    "אשראי ואג\"ח",
    "כללי",
    "מניות",
    "כספי (שקלי)",
    "משולב סחיר",
    "עוקב מדדים - גמיש",
    "אג\"ח ממשלות",
    "הלכה יהודית",
    "עוקב מדדי אג\"ח",
    "עוקב מדדי מניות",
    "אג\"ח סחיר"
  ],
  layeled: [
    "סיכון מוגבר",
    "סיכון בינוני",
    "סיכון מועט",
    "הלכה יהודית"
  ]
};

// פונקציה למציאת מסלול לפי שם מוצר
function detectMaslulByProduct(productType, productName) {
  console.log(productType, productName);
  const input = productName.replace(/\s+/g, " ").replace(/[\u200E\u200F]/g, "").trim();
  if(input.includes("כללי"))return "כללי";
  for (const maslul of maslulimByProduct[productType] || []) {
    const rule = maslulRules[maslul];
    if (!rule) continue;

    const hasAll = rule.includeAll.every(word => input.includes(word));
    const hasAny = rule.includeAny.length === 0 || rule.includeAny.some(word => input.includes(word));
    const hasExcluded = rule.exclude.some(word => input.includes(word));

    if (hasAll && hasAny && !hasExcluded) {
      return maslul;
    }
  }
  return "לא נמצא כלל מתאים";
}


