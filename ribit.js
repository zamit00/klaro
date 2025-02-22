function onch(){
    const tablediv= document.getElementById("tozaot");
       tablediv.innerHTML=""; 
       document.getElementById("alltoz").style.display="none";
       document.getElementById('dropdown-sug').style.display='flex' ;
       document.getElementById('dropdown-tkofa').style.display='flex' ;
       document.getElementById('dropdown-schom').style.display='flex' ;
}

function opn(x){
    var element=document.getElementById(x)
    if(element.style.display==='none' || element.style.display==='' ){
        element.style.display='flex'
        if(x==='dropdown-schom'){rdchange()}
    
    }
    else{element.style.display='none'}

}
function rdchange(){
   
        var rd1=document.getElementById('rdbutton1');
        var rd2=document.getElementById('rdbutton2');
        var rd3=document.getElementById('rdbutton3');
        if(rd1.checked){
            document.getElementById('schomdiv1').style.display='block';
            document.getElementById('schomdiv2').style.display='none';
            document.getElementById('hodshi').innerText=100;
        }
        else if(rd2.checked){
            document.getElementById('schomdiv1').style.display='none';
            document.getElementById('schomdiv2').style.display='block';
            document.getElementById('hadpeami').innerText=100;
        }
        else if (rd3.checked){
            document.getElementById('schomdiv1').style.display='block';
            document.getElementById('schomdiv2').style.display='block';
        }
    
}

    const select=document.getElementById('txttkofa1');
    const dmnz1=document.getElementById('dmnz1');
    const dmnz2=document.getElementById('dmnz2');
    const dmnh1=document.getElementById('dmnh1');
    const dmnh2=document.getElementById('dmnh2');
    const otherribit=document.getElementById('selecttoz');
    for (let i = 1; i <= 30; i++) {
        let option = document.createElement('option');
        option.value = i;  
        option.textContent = i;  
        if(i===10){option.selected = true;}
        select.appendChild(option);  
    }   
   
      
    for (let i = 0; i <= 1.1; i += 0.05) {
        let option = document.createElement('option');
        
        // Check if i is approximately 1, with a tolerance
        if (Math.abs(i - 1) < 0.0001) {
            option.selected = true;
        }
        
        let value = Math.round(i * 100) / 100;  
        option.value = value;  
        option.textContent = value+"%"; 
        dmnz1.appendChild(option); 

        option = document.createElement('option');
        if (Math.abs(i - 1) < 0.0001) {
            option.selected = true;
        }
        value = Math.round(i * 100) / 100;
        option.value = value;  
        option.textContent = value+"%"; 
        dmnz2.appendChild(option); 
        
    }
    for (let i = 0; i <= 3; i += 0.05) {
        let option = document.createElement('option');
        
        // Check if i is approximately 1, with a tolerance
        if (i===0.2) {
            option.selected = true;
        }
        
        let value = Math.round(i * 100) / 100;  
        option.value = value;  
        option.textContent = value+"%"; 
        dmnh1.appendChild(option); 

        option = document.createElement('option');
        if (i===0.2) {
            option.selected = true;
        }
        value = Math.round(i * 100) / 100;
        option.value = value;  
        option.textContent = value+"%"; 
        dmnh2.appendChild(option); 
        
    }
    for (let i = 0.01; i <= 0.21; i += 0.01) {
        let option = document.createElement('option');
        
        // Check if i is approximately 1, with a tolerance
        if (Math.abs(i - 0.04) < 0.0001) {
            option.selected = true;
        }
        
        let value = Math.round(i * 100) / 100;  
        option.value = value;  
        option.textContent = Math.round(value*100)+"%"; 
        otherribit.appendChild(option);  
    }
    function othribit(){
        var rb=document.getElementById('selecttoz').value;

// עדכון הטקסט בתוך האלמנט עם ID kottoz
document.getElementById("kottoz").textContent = `לפי ריבית ${Math.round(rb*100)}% שנתי:`;       
        hashev(rb);
    }

function hashev(x) {
    
    const rb=parseFloat(x);        
    // Retrieve values from input fields
    const hp=document.getElementById("hadpeami");
    const tash=document.getElementById("hodshi");
    const dmnz1=parseFloat(document.getElementById('dmnz1').value);
    const dmnz2=parseFloat(document.getElementById('dmnz2').value);
    const dmnh1=parseFloat(document.getElementById('dmnh1').value);
    const dmnh2=parseFloat(document.getElementById('dmnh2').value);
    
    let x1 = parseInt(hp.value);
    if(!x1){x1=0};
    let x2 = parseInt(tash.value);
    if(!x2){x2=0};
    if(x1===0 && x2===0){alert('הוסף סכומי השקעה')
        var element=document.getElementById('dropdown-schom')
        element.style.display='flex' ;               
        
        var rd1=document.getElementById('rdbutton1');
        var rd2=document.getElementById('rdbutton2');
        var rd3=document.getElementById('rdbutton3');
        if(rd1.checked){
            document.getElementById('schomdiv1').style.display='block';
            document.getElementById('schomdiv2').style.display='none';
            document.getElementById('hodshi').innerText=100;
        }
        else if(rd2.checked){
            document.getElementById('schomdiv1').style.display='none';
            document.getElementById('schomdiv2').style.display='block';
            document.getElementById('hadpeami').innerText=100;
        }
        else if (rd3.checked){
            document.getElementById('schomdiv1').style.display='block';
            document.getElementById('schomdiv2').style.display='block';
        }        
               
        return;}
    
    /*let simul=document.getElementById('selectRibit');*/
    
    //let ribitchoose=document.getElementById("selectribit");
    //let ribit=ribitchoose.value;
    
    

    if(x1<0||x2<0){alert('סכומים לא תקינים');return;}
    let selectElement = document.getElementById("txttkofa1");
    if(!selectElement.value || selectElement.value===0){addelement(); }
    let x3 = selectElement.value; 
    
    
   const textopen="סכום השקעה עתידי לתקופה של - ";
   const textshanim=" שנים:       ";
   const shach = " ש\"ח"; 
   
   let hishuv1;let hishuv2;let hishuv10;let hishuv12;let hishuv20;let hishuv22;let hishuv30;let hishuv32;
   hishuv1=hishuv(x1,x2,dmnz1,dmnh1,rb,x3);
   hishuv2=hishuv(x1,x2,dmnz2,dmnh2,rb,x3);
   hishuv10=hishuv(x1,x2,dmnz1,dmnh1,rb,10);
   hishuv12=hishuv(x1,x2,dmnz2,dmnh2,rb,10);
   hishuv20=hishuv(x1,x2,dmnz1,dmnh1,rb,20);
   hishuv22=hishuv(x1,x2,dmnz2,dmnh2,rb,20);
   hishuv30=hishuv(x1,x2,dmnz1,dmnh1,rb,30);
   hishuv32=hishuv(x1,x2,dmnz2,dmnh2,rb,30);
   
   console.log(hishuv1,hishuv2)
   console.log(hishuv10,hishuv12)
   console.log(hishuv20,hishuv22)
   console.log(hishuv30,hishuv32)
 
    if (isNaN(hishuv1) || isNaN(hishuv2) ||  isNaN(hishuv10) ||  isNaN(hishuv12) ||
     isNaN(hishuv20) || isNaN(hishuv22) ||  isNaN(hishuv30) || isNaN(hishuv32) ) 
     {alert('סכומים לא תקינים');return;}
        
      
    var table; var td; var tr;
    const tablediv= document.getElementById("tozaot");
    tablediv.innerHTML=""; 
    document.getElementById("alltoz").style.display="flex";
    
    table= document.createElement("table");
    table.id="tbltoz";table.className="tbltoz";
    tablediv.appendChild(table);
    tr=document.createElement("tr");
    td=document.createElement("td");
    td.textContent="נושא";
    td.className="tdth";
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent="מקרה 1";
    td.className="tdth";
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent="מקרה 2";
    td.className="tdth";
    tr.appendChild(td);
    table.appendChild(tr);
        
        
        if(x1>0){
                tr=document.createElement("tr");
                td=document.createElement("td");
                td.innerText="סכום חד פעמי";
                td.className="numtd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText= x1.toLocaleString()+shach;
                td.className="numtd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText= x1.toLocaleString()+shach;
                td.className="numtd";
                tr.appendChild(td);
                table.appendChild(tr);
            }
        if(x2>0){
                tr=document.createElement("tr");
                td=document.createElement("td");
                td.innerText="סך הפקדות בתשלומים";
                td.className="numtd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText=(x2*x3*12).toLocaleString() + shach;
                td.className="numtd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText=(x2*x3*12).toLocaleString() + shach;
                td.className="numtd";
                tr.appendChild(td);
                table.appendChild(tr);
            }
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.innerText="סך השקעה";
                td.className="numtd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText=Number(x1+(x2*x3*12)).toLocaleString()+shach;
                 td.className="numtd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText=Number(x1+(x2*x3*12)).toLocaleString()+shach;
                 td.className="numtd";
                tr.appendChild(td);
                
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.innerHTML="שווי השקעה עתידי ב - "+x3+textshanim;
                td.className="numtd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.className="numtd";
                td.innerText=parseInt(hishuv1).toLocaleString() + shach;
                td.className="numtd";
                tr.appendChild(td);
                td=document.createElement("td");
                 td.className="numtd";
                td.innerText=parseInt(hishuv2).toLocaleString() + shach;
                td.className="numtd";
                tr.appendChild(td);


            if(x3<10){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
             td.innerHTML="שווי השקעה ל - 10 שנים";
             td.className="numtd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(hishuv10).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(hishuv12).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            }
   
            if(x3<20){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
            td.innerHTML="שווי השקעה ל - 20 שנים";
            td.className="numtd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(hishuv20).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(hishuv22).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            }
    
            if(x3<30){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
            td.innerHTML="שווי השקעה ל - 30 שנים";
            td.className="numtd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(hishuv30).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(hishuv32).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            }
            var element=document.getElementById('dropdown-tkofa');
            element.style.display='flex';
             var elementa=document.getElementById('dropdown-schom');
            elementa.style.display='none';
            var elementb=document.getElementById('dropdown-sug');
            elementb.style.display='none';
        
       
    }
    function hishuv(x1,x2,dmnz1,dmnh1,rb,x3){
        let hishuv1 = (x1 + x2*(1-dmnh1/100))*(1+rb/12)*(1-dmnz1/1200);
        
        
        for (let i = 1; i < x3*12; i++) {
            hishuv1 = (hishuv1 + x2*(1-dmnh1/100))*(1+rb/12)*(1-dmnz1/1200);
        }
        //hishuv= part(hishuv)
        return hishuv1;
    }
