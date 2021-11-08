CREATE TABLE public."user" (
	id bigserial NOT NULL,
	username varchar NOT NULL,
	parent int4 NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);
CREATE UNIQUE INDEX user_id_idx ON public."user" USING btree (id);