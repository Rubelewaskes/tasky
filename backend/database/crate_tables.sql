create schema tasky;

create table tasky.profession(
	profession_id int primary key generated always as identity,
	profession_name varchar(60) not null
);

create table tasky.role(
	role_id int primary key generated always as identity,
	name varchar(60) not null,
	sysname varchar(60) not null
);

create table tasky.team (
	team_id int primary key generated always as identity,
	team_name varchar(100) null,
	team_desc varchar (300) null,
	team_image varchar (250) null
);

create table tasky.users (
    user_id int primary key generated always as identity,
    username varchar(30) not null,
	user_sex char(1) null,
	user_birthday date not null,
	firstname varchar(100) not null,
	secondname varchar(100) not null,
	thirdname varchar(100) null,
	mail varchar(100) not null,
	rating int default 0,
	image varchar(1000) null,
	phone varchar(15) null,
	profession_id int null,
	role_id int null,
	password varchar(500)
);

create table tasky.note (
	note_id int primary key generated always as identity,
	note_name varchar(100) not null,
	note_desc varchar (400) null,
	user_id int not null,
	foreign key (user_id) references tasky.user(user_id)
);

create table tasky.task_status(
	task_status_id int primary key,
	task_status_name varchar (30)
);

create table tasky.difficulty(
	difficulty_id int primary key generated always as identity,
	difficulty_name varchar(30)
);

create table tasky.task (
	task_id int primary key generated always as identity,
	task_name varchar(100) not null,
	task_desc varchar (1000) null,
	end_dttm timestamp not null,
	points int null,
	files varchar (300) null,
	dificulty_id int not null,
	foreign key (dificulty_id) references tasky.difficulty(difficulty_id),
	author_user_id int not null,
	foreign key (author_user_id) references tasky.user(user_id),
	task_status_id int not null default 1,
	foreign key (task_status_id) references tasky.task_status(task_status_id)
);

create table tasky.executor(
	executor_id int primary key generated always as identity,
	user_id int not null,
	foreign key (user_id) references tasky.user(user_id),
	task_id int not null,
	foreign key (task_id) references tasky.task(task_id)
);


create table tasky.steps_of_task(
	step_id int primary key generated always as identity,
	step_name varchar (60) not null,
	step_done boolean not null default false,
	step_lvl int not null,
	task_id int not null,
	foreign key (task_id) references tasky.task(task_id)
);

create table tasky.mark(
	mark_id int primary key generated always as identity,
	mark_name varchar (30) not null,
	color char(7) not null
);

create table tasky.mark_to_task(
	mark_to_task_id int primary key generated always as identity,
	mark_id int not null,
	foreign key (mark_id) references tasky.mark(mark_id),
	task_id int not null,
	foreign key (task_id) references tasky.task(task_id)
);

alter table tasky.user add constraint profession_id foreign key (profession_id) references tasky.profession (profession_id);
alter table tasky.user add constraint role_id foreign key (role_id) references tasky.role (role_id);







insert into tasky.team (team_name) values ('Тестовая команда');
insert into tasky.profession (profession_name) values ('Тестировщик');
insert into tasky.role (role_name, sysname) values ('Администартор', 'administrator');
insert into tasky.user (login, user_birthday, firstname, secondname, thirdname, mail, profession_id, role_id, password, team_id) 
values ('test', date '2002-11-25', 'Тестер', 'Тестеров', 'Тестерович', 'mail@mail.ru', 1, 1, 'test', 1);