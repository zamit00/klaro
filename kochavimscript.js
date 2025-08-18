
const excludedOchlosiya = ['עובדי סקטור מסויים', 'עובדי מפעל/גוף מסויים'];
const mozkoch = [
  'קרנות השתלמות', 'תגמולים ואישית לפיצויים', 'קופת גמל להשקעה',
  "קופת גמל להשקעה - חסכון לילד", "פוליסות חסכון"
];


const hishtalmot=[
  "כללי",
  "עוקב מדד s&p 500",
  "מניות",
  "אשראי ואג\"ח",
  "אשראי ואג\"ח עם מניות",
  "כספי (שקלי)",
  "עוקב מדדים - גמיש",
  "אג\"ח ממשלות",
  "הלכה יהודית",
  "משולב סחיר",
  "עוקב מדדי אג\"ח",
  "עוקב מדדי מניות",
  "אג\"ח סחיר",
  "מניות סחיר","עוקב מדדי אג\"ח עם מניות","אג\"ח סחיר עם מניות"];

const gemel=[
  "מניות",
  "עוקב מדד s&p 500",
  "עד 50", 
  "50-60",
  "60 ומעלה",
  "אשראי ואג\"ח",
  "כספי (שקלי)",
  "משולב סחיר",
  "עוקב מדדים - גמיש",
  "אג\"ח ממשלות",
  "הלכה יהודית",
  "מניות סחיר",
  "עוקב מדדי אג\"ח",
  "עוקב מדדי מניות",
  "אג\"ח סחיר",
  "עוקב מדדי אג\"ח עם מניות",
  "אג\"ח סחיר עם מניות"
  ];
const layeled=['סיכון מועט','סיכון בינוני','סיכון מוגבר','הלכה יהודית']

const bituach=['הראל פנסיה וגמל','כלל פנסיה וגמל',
  'מגדל מקפת קרנות פנסיה וקופות גמל','מנורה מבטחים פנסיה וגמל',
  'הפניקס פנסיה וגמל',"מניות סחיר","עוקב מדדי אג\"ח עם מניות","אג\"ח סחיר עם מניות"
]
const bateyhashkaot=['אינפיניטי השתלמות, גמל ופנסיה','אלטשולר שחם גמל ופנסיה',
  'אנליסט קופות גמל','ילין לפידות ניהול קופות גמל','מור גמל ופנסיה'
  ,'מיטב גמל ופנסיה','סלייס גמל'
]

function maslulim(kodmas){ 

var filtered;
filtered =datanetunimKlaliXM.filter(item=>Number(item.mh)===Number(parseInt(kodmas.slice(23))))

if(filtered.length>0){}

else { filtered =datanetunimKlaliXP.filter(item=>Number(item.mh)===Number(parseInt(kodmas.slice(23))))
      if(filtered.length>0){}
      else{filtered =datanetunimKlaliXB.filter(item=>Number(item.mh)===Number(parseInt(kodmas.slice(23))))
    }
}


 return {
    mozar: filtered[0].mozar,
    shemkupa: filtered[0].shemkupa
  };
  /*const allTheTables=document.getElementById(table);
  allTheTables.innerHTML='';
  allTheTables.style.display='flex';
  
  var dataY;*/
  
 /*   
  const sugmuzar=filtered[0].mozar
  
  
  if(sugmuzar==='תגמולים ואישית לפיצויים'){
   mozA='קופות גמל' 
    }
    else if(sugmuzar===
  "קופת גמל להשקעה - חסכון לילד"){
   mozA='קופת חסכון לילד'}
    else{mozA=sugmuzar}  
    if(moz!==0 && sugmuzar!==moz){continue}
    const msll=`<h2 id="h2Hish" name="h2Hish" style="font-size:1rem;font-weight:bold;
    line-height:1.8rem;vertical-align:middle; margin-top:15px;text-align:right;
    padding-right:5px;">${mozA}<a onclick=" maslulim(30,'${sugmuzar}',0);"
    class="txta" id="spanHish" name="spanHish">כל המסלולים</a></h2>`
    allTheTables.innerHTML+=msll;
    const mesanen=document.getElementById('sanenMosdy')
    const sinonHevra=document.getElementById('sinonHevra')
    var hadashim=document.getElementById('hadashim');
    //sinonHevra.selectedIndex = 0
    mesanen.style.display='none'
    if (t===30){
      const h2Elements = document.querySelectorAll('[name="h2Hish"]');
      const aElements = document.querySelectorAll('[name="spanHish"]');
       if(sugmuzar!=="פוליסות חסכון"){mesanen.style.display='flex'}
    // עבור על כל ה-h2
    for (let i = 0; i < h2Elements.length; i++) {
        const a = aElements[i];
        // שנה את ה- onclick ב-a
        a.setAttribute('onclick', 'maslulim(1,0,0);backtop();showMabaatar();hideMabaatarSpecific();');
        // שנה את הטקסט של ה-a
        a.textContent = 'חזור';
        a.className='spanHish back';
        a.style.color="green";
        a.style.fontWeight = "bold";
    }
    } 
    var typamas;
        if(r===0 || r===2 || r===4){typamas=hishtalmot}
        else if(r===1){typamas=gemel} 
        else if(r===3){typamas=layeled}
    for (let i = 0; i < typamas.length; i++) {  
      if (i>t && i>2){continue;}
         dataY = await filterMaslul(typamas[i], sugmuzar,hevra);
         if (hadashim.checked===false){
          dataY.sort((a, b) => b.tesuam - a.tesuam);}
          else{dataY.sort((a, b) => b.tusaAharona - a.tusaAharona);}
        if(dataY.length===0){continue}
         addtble(z,typamas[i])
            const table = document.getElementById(`klalikoch${z}`);
            if (!table){continue;}
            table.innerHTML='';
            table.innerHTML=`<tr style="font-weight: bold;background-color: var(--main-color);color: white;
            border:none;">						
						<td style="text-align:center;" >מה</td>
            <td>שם המסלול</td>
						<td style="text-align:center;" >חודש</td>
						<td style="text-align:center;" onclick='sortTable(this)'>שנה<i class="fa fa-sort"></i></td>
						<td style="text-align:center;" onclick='sortTable(this)'>3 שנים<i class="fa fa-sort"></i></td>
						<td style="text-align:center;" onclick='sortTable(this)'>5 שנים<i class="fa fa-sort"></i></td>
					</tr>`
          if (!dataY || !Array.isArray(dataY)) {
            console.error(`Data is not valid for typamas: ${typamas}, sugmuzar: ${sugmuzar}`);
            return; 
        }
            for (let tb = 0; tb < dataY.length; tb++) {
                //if (dataY[tb].tesuam) {
                    const trm = document.createElement('tr');
                    // יצירת תא ראשון
                    let td = document.createElement('td');
                    td.style.color = '#333';
		    td.style.textAlign='center';
                    td.className="tdmh";
                    td.style.boxSizing="border-box";
                    td.textContent = dataY[tb].mh;
                    trm.appendChild(td);
                    // יצירת תא שני עם קישור
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdbig";
                    td.style.boxSizing="border-box";
                    td.style.textAlign = "right";
                    td.style.boxSizing="border-box";
                    td.style.paddingRight = "5px";
                    let link = document.createElement('a');
                    link.href = '#';
                    link.className="linktdbig";
                  
                    link.textContent = dataY[tb].shemkupa;
              td.appendChild(link);
              trm.appendChild(td);
                
                    td = document.createElement('td');
                    
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="center";
                    td.textContent = dataY[tb].tusaAharona.toFixed(2) + "%";
                    trm.appendChild(td);
                    // יצירת תאים נוספים
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="center"
                    td.textContent = dataY[tb].tesuam.toFixed(2) + "%";
                    trm.appendChild(td);
                    td = document.createElement('td');
                    
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="center"
                    if (dataY[tb].tesuam36) { td.textContent = dataY[tb].tesuam36.toFixed(2) + "%"; }
                    trm.appendChild(td);
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="center"
                    if (dataY[tb].tesuam60) { td.textContent = dataY[tb].tesuam60.toFixed(2) + "%"; }
                    trm.appendChild(td);
                    table.appendChild(trm);
                //}
            }
            z++;           
    }
  

    if(t!==30){await maslulimP(1,0,0)};
    document.querySelectorAll('[class^="klalikoch"] td').forEach(td => {
      let text = td.textContent.trim();
      if (text.startsWith("-")) {
          td.innerHTML = `<span style="direction: ltr; display: inline-block;">${text}</span>`;
          td.style.color="red";
      }
      //window.scrollTo({ top: 0, behavior: "smooth" }); 
      if(t===30){document.getElementById("mabaatarSpecific").scrollIntoView({ behavior: "smooth" });}   
  });*/
};


// פונקציה שמנקה את הערכים וממירה אותם למספרים
function cleanNumber(value) {
    let num = parseFloat(value.replace(/[^0-9.-]/g, ''));
    return isNaN(num) ? 0 : num;
}

// פונקציה שמחזירה מספר בפורמט הנכון
function formatNumberA(value) {
    return value.toFixed(2) + '%';
}





