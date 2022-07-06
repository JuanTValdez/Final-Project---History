DROP TABLE IF EXISTS facts CASADEl

CREATE TABLE facts(
  id SERIAL PRIMARY KEY,
  month int NOT NULL,
  day int NOT NULL,
  years int NOT NULL,
  category character varying(255) NOT NULL;
  fact_summary VARCHAR NOT NULL,
  fact_long_1 VARCHAR NOT NULL,
  fact_long_2 VARCHAR NOT NULL,
  image_url_1 character varying(255) NOT NULL,
  image_url_2 character varying(255) NOT NULL

)