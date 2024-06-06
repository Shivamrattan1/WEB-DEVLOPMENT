show databases;
create table teacher(id int,name varchar(20),subject varchar(10), salary int);
insert into teacher
(id,name,subject,salary)
values
(23,"ajay","math",50000),
(27,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);
select * from teacher;
where salary >55000;
alter table teacher
change salary ctc int;
update  teacher
set ctc = 1.25*ctc;
alter table teacher
add column city varchar(15) default "haryana";
select * from student;
alter table teacher
drop column ctc;
create table student
( roll_no int,
name varchar(20),
city varchar(20),
marks int);
insert into student
(roll_no,name,city,marks)
values
(110,"adam","delhi",76),
(108,"bob","mumbai",65),
(124,"casey","pune",94),
(112,"duke","pune",80);
select * from student
where marks>=75;
select  avg(marks)
from student;
alter table student
add column grade varchar(2);
update student
set grade ="O"
where marks>=80;
update student
set grade ="A"
where marks>=70 and marks<80;
select * from student;