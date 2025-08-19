var datanetunimKlaliXM;var datanetunimKlaliXB;var datanetunimKlaliXP;
const gufmosdixA = [
    'הראל פנסיה וגמל', 'כלל פנסיה וגמל',
    'מגדל מקפת קרנות פנסיה וקופות גמל', 'מנורה מבטחים פנסיה וגמל',
    'הפניקס פנסיה וגמל', 'אלטשולר שחם גמל ופנסיה',
    'אנליסט קופות גמל', 'ילין לפידות ניהול קופות גמל', 'מור גמל ופנסיה',
    'מיטב גמל ופנסיה', 'אינפיניטי השתלמות, גמל ופנסיה '
];
const mozAll = [
  'קרנות השתלמות', 'תגמולים ואישית לפיצויים', 'קופת גמל להשקעה',
  "קופת גמל להשקעה - חסכון לילד", "פוליסות חסכון","קרנות חדשות","מרכזית לפיצויים"
];
merkazit=['כללי'];
const fieldsToAverage = [
  "tesuam", "tesuam36", "tesuam60",
    "stiya36", "stiya60", "yitratNechasim",
    "sharp", "tusaAharona", "tesuaMitchilatshana",
    "kvutzaAhuz4751", "kvutzaAhuz4761"     
];
const gufmosdiA = gufmosdixA.sort((a, b) => a.localeCompare(b, 'he'));
window.onload = async function() {
  try {
        await Promise.all([
            fetchdataJasonB(),
            fetchdataJasonP(),
             fetchdataJasonM(),
               
        ]);
        
       
  } catch (error) {
        console.error("שגיאה בטעינת הנתונים:", error);
  }
  detectMaslulByProduct();
   
}


async function fetchdataJasonM() {
    try {
        const response = await fetch('dataJasonM.json'); 
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        }
        const data = await response.json(); 
        datanetunimKlaliXM = data;
	    datanetunimKlaliXM= datanetunimKlaliXM.filter(item=>!item.menahelet.includes('סלייס'));    
        return data;  // חובה להחזיר נתונים כדי שהפונקציה תחכה באמת
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
        throw error;  // נזרוק את השגיאה כדי ש-Promise.all יוכל לטפל בה
    }
    
}
async function fetchdataJasonB() {
    try {
        const response = await fetch('dataJasonB.json'); 
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        }
        const data = await response.json(); 
        datanetunimKlaliXB = data; 
        return data;  // החזרת הנתונים כדי ש-`await` יעבוד נכון
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
        throw error;  // זורק את השגיאה כדי ש-Promise.all יוכל לטפל בה
    }
}
async function fetchdataJasonP() {
    try {
        const response = await fetch('dataJasonP.json'); 
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        }
        const data = await response.json(); 
        datanetunimKlaliXP = data; 
        return data;  // מחזיר את הנתונים כדי שהפונקציה תהיה באמת אסינכרונית
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
        throw error;  // זורק את השגיאה כדי ש-Promise.all יוכל לטפל בה
    }
}






