let getstudents=`select * from cars`;

let getstudentbyid=`select * from cars where car_name=$1`;

let addstudent=`insert into cars (car_id,car_name, car_model) values(uuid_generate_v4(),$1,$2)`;

let removecar='delete  from cars where car_name=$1';

module.exports={getstudents,getstudentbyid,addstudent,removecar};