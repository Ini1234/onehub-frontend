/**
 * Business entity representing an Ottawa-based business
 */
export interface Business {
  id: string;
  name: string;
  description: string;
  category: BusinessCategory;
  address: string;
  phone: string;
  email: string;
  website?: string;
  createdAt: Date;
}

/**
 * Categories for business classification
 */
export type BusinessCategory =
  | 'Restaurant'
  | 'Cafe'
  | 'Retail'
  | 'Services'
  | 'Technology'
  | 'Healthcare'
  | 'Education'
  | 'Entertainment'
  | 'Other';

/**
 * All available business categories
 */
export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  'Restaurant',
  'Cafe',
  'Retail',
  'Services',
  'Technology',
  'Healthcare',
  'Education',
  'Entertainment',
  'Other',
];

/**
 * Data transfer object for creating a new business
 */
export interface CreateBusinessDTO {
  name: string;
  description: string;
  category: BusinessCategory;
  address: string;
  phone: string;
  email: string;
  website?: string;
}

/**
 * API response wrapper for business operations
 */
export interface BusinessApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/**
 * Filter options for business listing
 */
export interface BusinessFilters {
  category?: BusinessCategory;
  searchQuery?: string;
}
