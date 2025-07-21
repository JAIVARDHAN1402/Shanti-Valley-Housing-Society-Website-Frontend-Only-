
// script.js
function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('mobile');
}

// Gallery Image Array
const imagArr = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
];
let index = 0;

function prevImage() {
  index = (index - 1 + imagArr.length) % imagArr.length;
  document.getElementById("galleryImage").src = imagArr[index];
}

function nextImage() {
  index = (index + 1) % imagArr.length;
  document.getElementById("galleryImage").src = imagArr[index];
}

function putDate()
{
    let date_today = new Date;
    let enter_date = document.querySelector("#datepay");
    const yyyy = date_today.getFullYear();
    const mm = String(date_today.getMonth() + 1).padStart(2, '0');
    const dd = String(date_today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    
    enter_date.value = formattedDate;
    selectMonth();
}

function select_block_flatno(){
    let selected_value = document.querySelector("#block");
    let flat = document.querySelector("#flat");

    

    flat.options.length = 1;
    if(selected_value.value === "Prithvi"){
        for(let i=1;i<=5;i++)
        {
            let str = "GF-";
            let option = document.createElement("option");
            option.value = str + i.toString();
            option.textContent = str + i.toString();
            flat.appendChild(option);
        }
        for(let i=1;i<=36;i++)
        {
            let str;
            if(i<10)
            {
                str = "F-0";
            }
            else{
                str = "F-";
            }

            let option = document.createElement("option");
            option.value = str + i.toString();
            option.textContent = str + i.toString();
            flat.appendChild(option);
        }
    }
    else if(selected_value.value === "Pratham"){

        for(let i=1;i<=7;i++)
        {
            for(let j=1;j<=8;j++)
            {
                let str = i.toString()+"0"+j.toString();
                let option = document.createElement("option");
                option.value = str.toString();
                option.textContent = str.toString();
                flat.appendChild(option);
            }
        }
        
    }
    else if(selected_value.value === "Aakash-3BHK"){

        for(let i=1;i<=64;i++)
        {
            if((i>=5 && i<=10) || (i>=15 && i<=20) ||  (i>=25 && i<=30) ||  (i>=35 && i<=40) ||  (i>=45 && i<=50) ||  (i>=55 && i<=60))
            {
                continue;
            }
            let str;
            if(i>=11)
            {
                str = "3"+i.toString();
            }
            if(i<11){
                str = "3"+"0"+i.toString();
            }

            let option = document.createElement("option");
            option.value = str.toString();
            option.textContent = str.toString();
            flat.appendChild(option);
        }
        
    }
    else if(selected_value.value === "Aakash-2BHK"){

        for(let i=1;i<=68;i++)
        {
            if((i>=1 && i<=4) || (i>=9 && i<=14) ||  (i>=19 && i<=24) ||  (i>=29 && i<=34) ||  (i>=39 && i<=44) ||  (i>=49 && i<=54) || (i>=59 && i<=64))
            {
                continue;
            }
            let str;
            if(i>=10)
            {
                str = "3"+i.toString();
            }
            if(i<10){
                str = "3"+"0"+i.toString();
            }

            let option = document.createElement("option");
            option.value = str.toString();
            option.textContent = str.toString();
            flat.appendChild(option);
        }
        
    }
    else if(selected_value.value === "Duplex"){
        for(let i=1;i<=4; i++)
        {
            let option= document.createElement("option");
            option.value = i.toString();
            option.textContent = i.toString();
            flat.appendChild(option);
        }
    }

    
}


function selectMonth(){
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const currentMonth = new Date().getMonth();
  for (let i = currentMonth; i < 12; i++) {
    const inp = document.createElement("input");
    inp.type = "checkbox";
    inp.name = "fill_month";
    inp.value = monthNames[i];
    inp.id = "fill_month";
    
    inp.addEventListener("change", getselectedMonth);
    let opt  = document.querySelector("#select_month");
    let label = document.createElement("label");
    label.className  = "mlbl";
    let month = document.createTextNode(monthNames[i]);
    
    opt.appendChild(label);
    label.appendChild(inp);
    label.appendChild(month)    
  }

  getselectedMonth();
   
}

function getselectedMonth()
  {
    let get_sel_month = document.querySelectorAll('input[name="fill_month"]:checked');
    let monthArr=[];

    get_sel_month.forEach(cb => {
        let label = cb.parentElement;
        let text  = label.textContent.trim();
        monthArr.push(text);
    });

    let amt = document.querySelector(".amt_total");
    amt.textContent = monthArr.length * 1700;
  }





// Success PAY Page


let oname = document.querySelector(".oname");
let bname = document.querySelector(".bname");
let fno = document.querySelector(".fno");
let paidon = document.querySelector(".paidon");
let payof = document.querySelector(".payof");
let amount = document.querySelector(".money");
let billId = document.querySelector(".bill-id");

let getoname =localStorage.getItem("oname");
let getbname = localStorage.getItem("bname");
let getfno = localStorage.getItem("fno");
let getpaidon = localStorage.getItem("paidon");
let getpayof = localStorage.getItem("paymentof");
let amt = localStorage.getItem("tamt");


function see_bill()
{

    document.querySelector(".btn_see").style.display = "none";


    document.querySelector(".details").style.display = "inline";
    document.querySelector(".print").style.display = "inline";
    oname.textContent +=getoname;
    bname.textContent += getbname;
    fno.textContent += getfno;
    payof.textContent += getpayof;
    paidon.textContent += getpaidon;
    amount.textContent +=amt;
    billId.textContent += "SV" + Date.now();

}

function downloadPDF() {
  const element = document.querySelector(".receipt");

  const opt = {
    margin: 0.2,
    filename: `ShantiValley_Receipt_${Date.now()}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}



