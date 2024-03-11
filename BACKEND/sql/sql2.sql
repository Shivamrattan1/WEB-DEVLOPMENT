show databases;
use instagram;
-- select age,max(followers)
-- from tobu
-- group by age
-- having max(followers)>=150
-- order by age desc;
update tobu
set followers=190,following=900
where age=16;
set sql_safe_updates=0;
select * from tobu;
delete from tobu
where age>=19;
alter table tobu
add column city  varchar(25) default "delhi";
show tables;
select * from instauser;
alter table tobu
drop column age;
alter table tobu
rename instauser;
alter table instauser
change column followers subs int default 0;
alter table instauser
modify city varchar(15) default "haryana";
insert into instauser
(id,name,email,subs,following)
values
(2,"shaka","iamgoat@gmail.com",234,98);
select * from teshii ;
truncate  table instauser;
