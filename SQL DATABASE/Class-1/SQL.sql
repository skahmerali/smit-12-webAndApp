// Tables

Table person {
  id int [pk, increment]
  email varchar
  first_name varchar
  last_name varchar
  phone varchar
  created_at datetime
  updated_at datetime
}

Table user {
  id int [pk, increment]
  username varchar
  password varchar
  status varchar
  created_at datetime
  updated_at datetime
}

Table admin {
  id int [pk, increment]
  role varchar
  permissions text
  created_at datetime
  updated_at datetime
}

Table author {
  id int [pk, increment]
  bio text
  website varchar
  created_at datetime
  updated_at datetime
}

Table company {
  id int [pk, increment]
  name varchar
  description text
  website varchar
  created_at datetime
  updated_at datetime
}

Table role {
  id int [pk, increment]
  name varchar
  description text
  created_at datetime
  updated_at datetime
}

Table person_role {
  person_id int
  role_id int
}

Table person_admin {
  person_id int
  admin_id int
}

Table person_user {
  person_id int
  user_id int
}

Table person_author {
  person_id int
  author_id int
}

Table user_company {
  user_id int
  company_id int
}

// References

Ref: person_role.person_id > person.id
Ref: person_role.role_id > role.id

Ref: person_admin.person_id > person.id
Ref: person_admin.admin_id > admin.id

Ref: person_user.person_id > person.id
Ref: person_user.user_id > user.id

Ref: person_author.person_id > person.id
Ref: person_author.author_id > author.id

Ref: user_company.user_id > user.id
Ref: user_company.company_id > company.id