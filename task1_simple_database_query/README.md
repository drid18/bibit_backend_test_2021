# bibit_backend_test_2021
# Task 1. Simple Database Query

## Step 1. Create Table "user"

```sql
CREATE TABLE public."user" (
	id bigserial NOT NULL,
	username varchar NOT NULL,
	parent int4 NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);
CREATE UNIQUE INDEX user_id_idx ON public."user" USING btree (id);
```

## Step 2. Insert data table

```sql
INSERT INTO public."user" (id, username, parent) VALUES(1, 'Ali', 2);
INSERT INTO public."user" (id, username, parent) VALUES(2, 'Budi', 0);
INSERT INTO public."user" (id, username, parent) VALUES(3, 'Cecep', 1);
```

## Step 3. Select User with Parent Name

```sql
select
	u.id,
	u.username,
	nullif((select u2.username from "user" u2 where u2.id = u.parent), null) 
	as parentusername
from
	"user" u
```

##Result:

```bash
id|username|parentusername|
--+--------+--------------+
 1|Ali     |Budi          |
 2|Budi    |[NULL]        |
 3|Cecep   |Ali           |
```