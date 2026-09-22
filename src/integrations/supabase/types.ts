export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: { PostgrestVersion: "14.5" };
  public: {
    Tables: {
      lost_items: {
        Row: {
          created_at: string;
          id: string;
          image_url: string | null;
          location_to_collect: string;
          name: string;
          phone: string;
          place_found: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_url?: string | null;
          location_to_collect: string;
          name: string;
          phone: string;
          place_found: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_url?: string | null;
          location_to_collect?: string;
          name?: string;
          phone?: string;
          place_found?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: { avatar_url: string | null; created_at: string; full_name: string | null; id: string; phone: string | null; updated_at: string };
        Insert: { avatar_url?: string | null; created_at?: string; full_name?: string | null; id: string; phone?: string | null; updated_at?: string };
        Update: { avatar_url?: string | null; created_at?: string; full_name?: string | null; id?: string; phone?: string | null; updated_at?: string };
        Relationships: [];
      };
      user_roles: {
        Row: { created_at: string | null; id: string; role: string; user_id: string };
        Insert: { created_at?: string | null; id?: string; role: string; user_id: string };
        Update: { created_at?: string | null; id?: string; role?: string; user_id?: string };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { is_admin: { Args: { p_user_id: string }; Returns: boolean } };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
