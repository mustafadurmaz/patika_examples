const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}','utf-8',(err)=>{
    if(err) console.log(err);
    console.log("employees.json dosyası oluşturuldu")
})


fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log("employees.json dosyası okundu");
})


fs.appendFile('employees.json','\n {"city":"Ankara"}','utf-8',(err)=>{
    if(err) console.log(err);
    console.log("employees.json dosyası güncellendi")
})

fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
    console.log("employees.json dosyası silindi")
})