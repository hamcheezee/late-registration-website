/*date-now*/
$(document).ready( function() {
    var now = new Date();
 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;


   $('#datePicker').val(today);
});
/*add/drop row*/
function addRow(id, i) {
    s = parseInt(i) + 1;
    var table = document.getElementById(id);
    if (id == "Add"){
      var row = table.insertRow();
      row.insertCell().innerHTML = s;
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "text";
      input.id = "nosubjectAdd" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "text";
      input.id = "subjectAdd" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "number"
      input.id = "sectionAdd" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required"
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "text";
      input.id = "dayAdd" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "time";
      input.id = "time1Add" + s;
      input.className = "form-control";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "time";
      input.id = "time2Add" + s;
      input.className = "form-control";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "number";
      input.id = "valueAdd" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "text";
      input.id = "nameteacherAdd" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "checkbox";
      input.id = "teacherconfirmAdd" + s;
      input.className = "form-control";
      input.required = "required";
      input.oninvalid="this.setCustomValidity('')";
      input.oninput="this.setCustomValidity('')";
    }
      else{
      var row = table.insertRow();
      row.insertCell().innerHTML = s;
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "text";
      input.id = "nosubjectDrop" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "text";
      input.id = "subjectDrop" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "number";
      input.id = "sectionDrop" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
     var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "text";
      input.id = "dayDrop" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "time";
      input.id = "time1Drop" + s;
      input.className = "form-control";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "time";
      input.id = "time2Drop" + s;
      input.className = "form-control";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "number";
      input.id = "valueDrop" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.min = 0;
      input.required = "required";
      input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput="this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "text";
      input.id = "nameteacherDrop" + s;
      input.className = "form-control";
      input.placeholder="โปรดกรอก"
      input.required = "required";
      input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
      input.oninput = "this.setCustomValidity('')";
  
      var input = document.createElement("input");
      row.insertCell().appendChild(input);
      input.type = "checkbox";
      input.id = "teacherconfirmDrop" + s;
      input.className = "form-control";
      input.required = "required";
      input.oninvalid="this.setCustomValidity('')";
      input.oninput="this.setCustomValidity('')";
    }
  }
  
  function delRow(a) {
    s = document.getElementById(a).rows.length;
      document.getElementById(a).deleteRow(s - 1);
  }
  
  function addValue(i) {
    var s = parseInt(document.getElementById(i).textContent);
    if (s < 10) {
      document.getElementById(i).innerHTML = s + 1;
      if (i == "p1") {
        addRow(document.getElementById("Add").id, s);
      } else {
        addRow(document.getElementById("Drop").id, s);
      }
    } else {
      alert("too much");
    }
  }
  
  function delValue(i) {
    var s = parseInt(document.getElementById(i).textContent);
    var c1 = parseInt(document.getElementById("p1").textContent);
    var c2 = parseInt(document.getElementById("p2").textContent);
    var sum = c1+c2;
    if (s > 0) {
      if (i == "p1") {
        if(sum == 1 ){   
        }
          else{
            document.getElementById(i).innerHTML = s - 1;
            delRow(document.getElementById("Add").id);
          }
        } 
      else {
        if(sum == 1 ){
          
        }
        else{
          document.getElementById(i).innerHTML = s - 1;
          delRow(document.getElementById("Drop").id);
        }
      }
    } else {
      
    }
  }
  function validateForm() {
    var obj = new Object();
    obj.date = document.getElementById("date").value;
    obj.fname = document.getElementById("froname").value;
    obj.name  = document.getElementById("fname").value;
    obj.lastname  = document.getElementById("lname").value;
    obj.id = document.getElementById("id").value;
    obj.year = document.getElementById("grade").value;
    obj.major = document.getElementById("field").value;
    obj.address1 = document.getElementById("address").value;
    obj.address2 = document.getElementById("subdistrict").value;
    obj.address3 = document.getElementById("district").value;
    obj.province = document.getElementById("province").value;
    obj.postcode = document.getElementById("postcode").value;
    obj.mobilephone = document.getElementById("phone").value;
    obj.prphone = document.getElementById("telephone").value;
    obj.teachers = document.getElementById("teachers").value;
    var c1 = parseInt(document.getElementById("p1").textContent);
    var c2 = parseInt(document.getElementById("p2").textContent);
    for(let i=1;i<=c1;i++){
      var objadd = new Object();
      objadd.nosubject = document.getElementById("nosubjectAdd"+i).value;
      objadd.subject = document.getElementById("subjectAdd"+i).value;
      objadd.section = document.getElementById("sectionAdd"+i).value;
      objadd.day = document.getElementById("dayAdd"+i).value;
      objadd.time1 = document.getElementById("time1Add"+i).value;
      objadd.time2 = document.getElementById("time2Add"+i).value;
      objadd.value = document.getElementById("valueAdd"+i).value;
      objadd.nameteacher = document.getElementById("nameteacherAdd"+i).value;
      obj.confirmteacher = document.getElementById("confirmteacherAdd").value;
      eval("obj.addSubjectList" + i + " = objadd");
    }
    for(let i=1;i<=c2;i++){
      var objdel = new Object();
      objdel.nosubject = document.getElementById("nosubjectDrop"+i).value;
      objdel.subject = document.getElementById("subjectDrop"+i).value;
      objdel.section = document.getElementById("sectionDrop"+i).value;
      objadd.day = document.getElementById("dayDrop"+i).value;
      objadd.time1 = document.getElementById("time1Drop"+i).value;
      objadd.time2 = document.getElementById("time2Drop"+i).value;
      objdel.value = document.getElementById("valueDrop"+i).value;
      objdel.nameteacher = document.getElementById("nameteacherDrop"+i).value;
      obj.confirmteacher = document.getElementById("confirmteacherDrop").value;
      eval("obj.dropSubjectList" + i + " = objdel");
    }
    alert("ส่งข้อมูลสำเร็จ");
    var jsonString = JSON.stringify(obj);
    console.log(JSON.parse(jsonString));
    return true;
  }
  function fileValidation() {
    var fileInput = document.getElementById('formFile');
      
    var filePath = fileInput.value;
  
    // Allowing file type
    var allowedExtensions = 
            /(.pdf)$/i;
      
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;

    } 
    else 
    {
      
        // Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(
                    'imagePreview').innerHTML = 
                    '<img src="' + e.target.result
                    + '"/>';
            };
              
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}
Filevalidation = () => {
const fi = document.getElementById('formFile');
// Check if any file is selected.
if (fi.files.length > 0) {
    for (const i = 0; i <= fi.files.length - 1; i++) {

        const fsize = fi.files.item(i).size;
        const file = Math.round((fsize / 2500));
        // The size of the file.
        if (file >= 2500) {
            alert(
              "File too Big, please select a file less than 2.5 mb");
        } else if (file < 0) {
            alert(
              "File too small, please select a file greater than 0 mb");
        } else {
            document.getElementById('size').innerHTML = '<b>'
            + file + '</b> KB';
        }
    }
}
}

