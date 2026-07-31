--liquibase formatted sql

--changeset ethan:1
CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  job_title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'applied',
  location TEXT,
  salary_range TEXT,
  job_url TEXT,
  notes TEXT,
  applied_date DATE,
  interview_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
