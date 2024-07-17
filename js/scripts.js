var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
var resultComment = document.getElementById("result-comment");





modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

 


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}



function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  
  
  if(bmi<18.5){
    result = 'Underweight';
    resultComment.innerText = `
    Hasil BMI Anda dibawah 18.5
    
    Penting untuk memperhatikan kesehatan Anda.
    Anda berada pada kategori Kekurangan Berat Badan. Cara terbaik untuk mengatasinya yaitu pastikan Anda mendapatkan nutrisi yang cukup, terutama protein, lemak sehat, dan vitamin. Makanan yang kaya kalori dan gizi dapat membantu meningkatkan berat badan. Lakukan latihan fisik secara teratur untuk membangun massa otot dan meningkatkan nafsu makan. Hindari diet yang sangat ketat atau berlebihan. Fokus pada makanan sehat dan seimbang.`;

     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
    resultComment.innerText = `
    Hasil BMI Anda dalam rentang 18.5 hingga 24.9
    
    Penting untuk memperhatikan kesehatan Anda.
    Anda berada dalam kategori berat badan normal, jadi tetaplah memperhatikan pola makan sehat dan rutin berolahraga. Jaga keseimbangan antara asupan kalori dan aktivitas fisik. Perbanyak konsumsi buah, sayuran, biji-bijian, dan protein. Teruslah bergerak! Lakukan latihan kardiovaskular seperti berjalan, berlari, atau bersepeda, serta latihan kekuatan untuk memperkuat otot. Kesehatan mental juga penting. Kelola stres, tidur cukup, dan jangan lupakan waktu bersantai.`;

     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
    resultComment.innerText = `
    Hasil BMI Anda berada dalam rentang 25,0 hingga 29,9
    
    Penting untuk memperhatikan kesehatan Anda.
    Jika BMI Anda berada di antara 25,0 hingga 29,9, ini menunjukkan bahwa Anda berada dalam kategori pre-obesitas. Fokus pada makanan sehat dan seimbang. Kurangi konsumsi makanan tinggi lemak jenuh dan gula. Rutin berolahraga untuk membantu membakar kalori dan memperkuat otot. Periksakan kesehatan secara berkala dan diskusikan dengan dokter tentang langkah-langkah yang tepat.`;

     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese 1'; 
    resultComment.innerText = `
    Hasil BMI Anda berada pada rentang 30.0 hingga 34.9
    
    Penting untuk memperhatikan kesehatan Anda.
    Jika BMI Anda berada di kisaran 30 hingga 34,9, ini menunjukkan bahwa Anda termasuk dalam obesitas kelas 1. Fokus pada makanan sehat dan mengurangi asupan kalori. Pertimbangkan mengonsultasikan ahli gizi untuk rencana makan yang sesuai. Rutin berolahraga untuk membantu membakar kalori dan memperkuat otot. Periksakan kesehatan secara berkala dan diskusikan dengan dokter tentang risiko kesehatan yang terkait dengan obesitas.`;

     }else if(35<=bmi&&bmi<=39.9){
    result = 'Obese 2'; 
    resultComment.innerText = `
    Hasil BMI Anda berada pada rentang 35.0 hingga 39.9
    
    Penting untuk memperhatikan kesehatan Anda.
    Jika BMI Anda berada di kisaran 35 hingga 39,9, ini menunjukkan bahwa Anda termasuk dalam obesitas kelas 2. Kondisi ini memerlukan perhatian lebih serius terhadap kesehatan Anda. Diskusikan kondisi Anda dengan dokter untuk merencanakan tindakan yang sesuai. Fokus pada pola makan sehat dan olahraga teratur. Pertimbangkan mengurangi asupan kalori dan meningkatkan aktivitas fisik. Lakukan pemeriksaan kesehatan secara berkala dan ikuti saran dari profesional medis.`;

     }else if(40<=bmi){
    result = 'Extremely obese';
    resultComment.innerText = `
    Hasil BMI Anda di atas 40
    
    Penting untuk memperhatikan kesehatan Anda.
    Jika BMI Anda berada di atas 40, ini menunjukkan bahwa Anda termasuk dalam obesitas ekstrim. Ini merupakan kondisi yang sangat serius. Fokus pada pola makan sehat dan olahraga teratur. Dokter dapat memberikan terapi, obat-obatan, atau prosedur pembedahan. Pastikan untuk mengikuti saran medis dengan ketatTingkatkan aktivitas fisik dan pertimbangkan konsultasi dengan dokter.`;
     }

    
resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function reseting(){
    age.value="";
    height.value="";
    weight.value="";
    male.checked="";
    female.checked="";
    result.value="";
    modalText.innerHTML="";
    document.querySelector(".comment").innerHTML="";
    document.querySelector("#result").innerHTML="00.00";
    resultComment.innerText="";
       
}


