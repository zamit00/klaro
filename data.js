// כללי סיווג מסלולים
const maslulRules = {
  "אשראי ואג\"ח עם מניות": { includeAll: ["אשראי","אג\"ח","מניות"], includeAny: [], exclude: [] },
  "אג\"ח סחיר עם מניות": { includeAll: ["אג\"ח","סחיר","מניות"], includeAny: [], exclude: [] },
  "עוקב מדדי אג\"ח עם מניות": { includeAll: ["עוקב","אג\"ח","מניות"], includeAny: [], exclude: [] },
  "מניות סחיר": { includeAll: ["מניות","סחיר"], includeAny: [], exclude: ["אג\"ח"] },
  "עוקב מדד s&p 500": { includeAll: ["500"], includeAny: [], exclude: [] },
  "60 ומעלה": { includeAll: ["60"], includeAny: [], exclude: ["50","20"] },
  "50-60": { includeAll: ["50","60"], includeAny: [], exclude: [] },
  "עד 50": { includeAll: ["50"], includeAny: [], exclude: ["60","20"] },
  "אשראי ואג\"ח": { includeAll: ["אשראי","אג\"ח"], includeAny: [], exclude: ["מניות"] },
  "כספי (שקלי)": { includeAll: [], includeAny: ["שקלי","כספי","שיקלי"], exclude: [] },
  "משולב סחיר": { includeAll: ["משולב","סחיר"], includeAny: [], exclude: [] },
  "עוקב מדדים - גמיש": { includeAll: ["עוקב","גמיש"], includeAny: [], exclude: [] },
  "אג\"ח ממשלות": { includeAll: ["אג\"ח","ממשלות"], includeAny: [], exclude: [] },
  "הלכה יהודית": { includeAll: [], includeAny: ["הלכה","הלכתי"], exclude: [] },
  "עוקב מדדי אג\"ח": { includeAll: ["עוקב","אג\"ח"], includeAny: [], exclude: ["מניות"] },
  "עוקב מדדי מניות": { includeAll: ["עוקב","מניות"], includeAny: [], exclude: ["אג\"ח"] },
  "אג\"ח סחיר": { includeAll: ["אג\"ח","סחיר"], includeAny: [], exclude: ["מניות","ממשלתי"] },
  "מניות": { includeAll: [], includeAny: ["מניות","מנייתי"], exclude: ["אשראי","סחיר","עוקב"] },
  "סיכון מוגבר": { includeAll: [], includeAny: ["מוגבר"], exclude: [] },
  "סיכון בינוני": { includeAll: [], includeAny: ["בינוני"], exclude: [] },
  "סיכון מועט": { includeAll: [], includeAny: ["מועט"], exclude: [] },
  "אג\"ח ממשלתי סחיר": { includeAll: ["אג\"ח","סחיר","ממשלתי"], includeAny: [], exclude: [] },
  "כללי": { includeAll: [], includeAny: ["כללי","קרן י"], exclude: ["פנסיה כללית"] }

 
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
    "מניות",
    "אג\"ח ממשלתי סחיר"
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
    "אג\"ח סחיר",
    "אג\"ח ממשלתי סחיר"
  ],
  layeled: [
    "סיכון מוגבר",
    "סיכון בינוני",
    "סיכון מועט",
    "הלכה יהודית"
  ]
};

function maslulim(kodmas){ 
var filtered;
filtered =datanetunimKlaliXM.filter(item=>Number(item.mh)===Number(parseInt(kodmas.slice(23))))

if(filtered.length>0){}

else { filtered =datanetunimKlaliXP.filter(item=>Number(item.mh)===Number(parseInt(kodmas.slice(23))))
      if(filtered.length>0){}
      else{filtered =datanetunimKlaliXB.filter(item=>Number(item.mh)===Number(parseInt(kodmas.slice(23))))
    }
}
if(filtered.length>0){
 return {   
    shemkupa: filtered[0].shemkupa,
    muz:filtered[0].mozar,
    mas:filtered[0].mas,
    ochlosia:filtered[0].ochlosiyayaad
  }}
  else{
    return "not find"
  }
  };

// פונקציה למציאת מסלול לפי שם מוצר
function detectMaslulByProduct() {
  datanetunimKlaliXP.forEach(item=>{
    for (const maslulList of Object.values(maslulimByProduct)) {
  for (const maslul of maslulList || []) {
    const rule = maslulRules[maslul];
    if (!rule) continue;

    const hasAll = rule.includeAll.every(word => item.shemkupa.includes(word));
    const hasAny = rule.includeAny.length === 0 || rule.includeAny.some(word => item.shemkupa.includes(word));
    const hasExcluded = rule.exclude.some(word => item.shemkupa.includes(word));

    if (hasAll && hasAny && !hasExcluded) {
     //item.pus(
      //  `mas: ${maslul.trim()}`
    // )
    item.mas=maslul.trim();     
    }
  }
  }
  if(!item.mas){
      
      item.mas="כללי"}
  
  
  })
  //if(productName.includes("כללי"))return "כללי";
  datanetunimKlaliXB.forEach(item=>{

    for (const maslulList of Object.values(maslulimByProduct)) {
  for (const maslul of maslulList || []) {
    const rule = maslulRules[maslul];
    if (!rule) continue;
    

    const hasAll = rule.includeAll.every(word => item.shemkupa.includes(word));
    const hasAny = rule.includeAny.length === 0 || rule.includeAny.some(word => item.shemkupa.includes(word));
    const hasExcluded = rule.exclude.some(word => item.shemkupa.includes(word));

    if (hasAll && hasAny && !hasExcluded) {
     //item.pus(
      //  `mas: ${maslul.trim()}`
    // )
    item.mas=maslul.trim();  
    }
  }
  }
  if(!item.mas){
      
      item.mas="כללי"}
  })
  
}
function filterByMaslul(sugmozar, maslulName) {
  const rule = maslulRules[maslulName];
  if (!rule) return [];
  return datanetunimKlaliXM.filter(moz=>moz.mozar===sugmozar).filter(item => {
    const name = item.shemkupa || ""; // או item.mas / item.masmishni לפי מה שמתאים לך

    const hasAll = rule.includeAll.every(word => name.includes(word));
    const hasAny = rule.includeAny.length === 0 || rule.includeAny.some(word => name.includes(word));
    const hasExcluded = rule.exclude.some(word => name.includes(word));
    return hasAll && hasAny && !hasExcluded;
  });
}



