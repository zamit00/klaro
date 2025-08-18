// פונקציה שממיינת את המסלולים כך שהארוכים יבדקו קודם
function sortMaslulim(list) {
  return [...list].sort((a, b) => b.length - a.length);
}

const maslulimByProduct = {
  gemel: sortMaslulim([
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
  ]),
  hishtalmot: sortMaslulim([
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
  ]),
  layeled: sortMaslulim([
    "סיכון מוגבר",
    "סיכון בינוני",
    "סיכון מועט",
    "הלכה יהודית"
  ])
};

function detectMaslulFromShemKupa(shemkupa) {
  shemkupa = shemkupa.toLowerCase();
  for (const [product, maslulim] of Object.entries(maslulimByProduct)) {
    for (const maslul of maslulim) {
      if (shemkupa.includes(maslul.toLowerCase())) {
        return { maslul };
      }
    }
  }
  return { product: "לא ידוע", maslul: "לא זוהה" };
}


