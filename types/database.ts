export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      submissions: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          challenge_id: string;
          chat_history_url: string | null;
          artifact_url: string | null;
          video_url: string;
          logic_description: string;
          status: "pending" | "reviewed" | "trial" | "hired" | "rejected";
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          challenge_id: string;
          chat_history_url?: string | null;
          artifact_url?: string | null;
          video_url: string;
          logic_description: string;
          status?: "pending" | "reviewed" | "trial" | "hired" | "rejected";
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          challenge_id?: string;
          chat_history_url?: string | null;
          artifact_url?: string | null;
          video_url?: string;
          logic_description?: string;
          status?: "pending" | "reviewed" | "trial" | "hired" | "rejected";
        };
      };
      challenges: {
        Row: {
          id: string;
          created_at: string;
          business_name: string;
          business_url: string;
          business_description: string;
          challenge_title: string;
          challenge_description: string;
          icon: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          business_name: string;
          business_url: string;
          business_description: string;
          challenge_title: string;
          challenge_description: string;
          icon?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          business_name?: string;
          business_url?: string;
          business_description?: string;
          challenge_title?: string;
          challenge_description?: string;
          icon?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
