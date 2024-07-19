function validationform(){
    var fname=document.validate.fname.value;
    var lname=document.validate.lname.value;
    var city=document.validate.city.value;
    var phone=document.validate.phone.value;
    var address=document.validate.address.value;
    if(fname==null || fname==""){
       alert("first name is not be empty");
       return false;
    }else  if(lname==null || lname==""){
        alert("last name is not be empty");
        return false;
     }else  if(city==null || city==""){
        alert("city is not be empty");
        return false;
     }else  if(phone==null || phone==""){
        alert("phone is not be empty");
        return false;
     }else  if(address==null || address==""){
        alert("address is not be empty");
        return false;
     }
}