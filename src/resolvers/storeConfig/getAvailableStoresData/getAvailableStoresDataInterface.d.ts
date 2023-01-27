import { StoreConfig } from '../../../schema';

export interface AvailableStoresDataInterface {
  availableStores: CustomStoreConfig;
}

interface CustomStoreConfig extends StoreConfig {
  default_display_currency_code: string;
  locale: string;
  secure_base_media_url: string;
  store_code: string;
  store_group_code: string;
  store_group_name: string;
  store_name: string;
  store_sort_order: number;
}
