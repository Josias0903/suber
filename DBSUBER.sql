create database suber;
use suber;

drop database suber;

create table formulario(
	id int auto_increment primary key,
    email varchar(255) not null
);

select * from formulario;