use  delta;
create table user (
    id VARCHAR(50) PRIMARY KEY,
    username varchar(50) unique,
    email varchar(50) unique not  null,
    password varchar(50) not  null
);