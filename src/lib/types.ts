export interface Product {
  id: string
  name: string
  slug: string
  category: string
  type: 'rental' | 'purchase' | 'both'
  price_display: string | null
  speed: string | null
  print_volume: string | null
  tag: string | null
  description: string | null
  features: string[]
  specs: Record<string, string>
  image_url: string | null
  is_popular: boolean
  is_active: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Inquiry {
  id: string
  company_name: string
  contact_name: string
  phone: string
  email: string | null
  inquiry_type: string
  message: string
  product_id: string | null
  product?: Product | null
  status: 'new' | 'in_progress' | 'completed'
  admin_note: string | null
  created_at: string
  updated_at: string
}

export interface AdminSettings {
  id: number
  admin_password_hash: string
  site_notice: string | null
  updated_at: string
}
