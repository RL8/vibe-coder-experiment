-- Vibe Coder Experiment Database Schema
-- Run this in your Supabase SQL Editor

-- Submissions table
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  challenge_id TEXT NOT NULL,
  chat_history_url TEXT,
  artifact_url TEXT,
  video_url TEXT NOT NULL,
  logic_description TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'trial', 'hired', 'rejected'))
);

-- Challenges table (optional - can use static data instead)
CREATE TABLE IF NOT EXISTS challenges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  business_name TEXT NOT NULL,
  business_url TEXT NOT NULL,
  business_description TEXT NOT NULL,
  challenge_title TEXT NOT NULL,
  challenge_description TEXT NOT NULL,
  icon TEXT DEFAULT 'star'
);

-- Enable Row Level Security
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;

-- Policies for submissions
-- Anyone can insert (candidates submitting)
CREATE POLICY "Anyone can submit" ON submissions
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can read (admin)
CREATE POLICY "Authenticated users can read submissions" ON submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only authenticated users can update (admin changing status)
CREATE POLICY "Authenticated users can update submissions" ON submissions
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Policies for challenges
-- Anyone can read challenges
CREATE POLICY "Anyone can read challenges" ON challenges
  FOR SELECT USING (true);

-- Only authenticated users can modify challenges
CREATE POLICY "Authenticated users can manage challenges" ON challenges
  FOR ALL USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS submissions_status_idx ON submissions(status);
CREATE INDEX IF NOT EXISTS submissions_created_at_idx ON submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS submissions_challenge_id_idx ON submissions(challenge_id);
