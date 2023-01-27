/* eslint-disable no-unused-vars */

export type Maybe<T> = T | null

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  WebkulPaymentCreditsystemConfig?: Maybe<WebkulPaymentCreditsystemConfig>
  attributesMetadata?: Maybe<AttributesMetadata>
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>
  cart?: Maybe<Cart>
  categories?: Maybe<CategoryResult>
  /** @deprecated Use `categoryList` instead. */
  category?: Maybe<CategoryTree>
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>
  cmsBlocks?: Maybe<CmsBlocks>
  cmsPage?: Maybe<CmsPage>
  compareList?: Maybe<CompareList>
  countries?: Maybe<Array<Maybe<Country>>>
  country?: Maybe<Country>
  currency?: Maybe<Currency>
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>
  customer?: Maybe<Customer>
  customerCart: Cart
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>
  /** @deprecated Use the `customer` query instead. */
  customerOrders?: Maybe<CustomerOrders>
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>
  deliveryTime?: Maybe<DeliveryInformation>
  getHostedProUrl?: Maybe<HostedProUrl>
  getPayflowLinkToken?: Maybe<PayflowLinkToken>
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>
  mpQuote?: Maybe<GetMpQuoteOutput>
  mpQuoteConfig?: Maybe<MpQuoteConfigOutput>
  mpQuoteConversation?: Maybe<MpQuoteConversationOutput>
  mpQuoteList?: Maybe<MpQuoteListOutput>
  mpSaveCartConfigs?: Maybe<MpSaveCartConfigsOutput>
  mpSaveCartGetCarts?: Maybe<MpGetCartsOutput>
  mpSaveCartGetProducts?: Maybe<MpGetProductsOutput>
  mpSaveCartViewCarts?: Maybe<MpCartsOutput>
  mpSmtpBestsellers?: Maybe<SmtpBestsellersOutput>
  pickupLocations?: Maybe<PickupLocations>
  productReviewRatingsMetadata: ProductReviewRatingsMetadata
  products?: Maybe<Products>
  recaptchaV3Config?: Maybe<ReCaptchaConfigurationV3>
  route?: Maybe<RoutableInterface>
  storeConfig?: Maybe<StoreConfig>
  /** @deprecated Use the `route` query instead. */
  urlResolver?: Maybe<EntityUrl>
  /** @deprecated Moved under `Customer.wishlist`. */
  wishlist?: Maybe<WishlistOutput>
}

export type QueryAttributesMetadataArgs = {
  entityType: AttributeEntityTypeEnum
  attributeUids?: Maybe<Array<Scalars['ID']>>
  showSystemAttributes?: Maybe<Scalars['Boolean']>
}

export type QueryAvailableStoresArgs = {
  useCurrentGroup?: Maybe<Scalars['Boolean']>
}

export type QueryCartArgs = {
  cart_id: Scalars['String']
}

export type QueryCategoriesArgs = {
  filters?: Maybe<CategoryFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type QueryCategoryArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryCategoryListArgs = {
  filters?: Maybe<CategoryFilterInput>
}

export type QueryCmsBlocksArgs = {
  identifiers?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type QueryCmsPageArgs = {
  id?: Maybe<Scalars['Int']>
  identifier?: Maybe<Scalars['String']>
}

export type QueryCompareListArgs = {
  uid: Scalars['ID']
}

export type QueryCountryArgs = {
  id?: Maybe<Scalars['String']>
}

export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>
}

export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput
}

export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput
}

export type QueryIsEmailAvailableArgs = {
  email: Scalars['String']
}

export type QueryMpQuoteArgs = {
  quote_id?: Maybe<Scalars['Int']>
}

export type QueryMpQuoteConversationArgs = {
  quote_id: Scalars['Int']
  filter?: Maybe<MpQuoteConversationFilterInput>
  sort?: Maybe<MpQuoteConversationSortInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type QueryMpQuoteListArgs = {
  filter?: Maybe<MpQuoteFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type QueryMpSaveCartGetCartsArgs = {
  filter?: Maybe<MpCartsFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type QueryMpSaveCartGetProductsArgs = {
  filter?: Maybe<MpProductsFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type QueryMpSaveCartViewCartsArgs = {
  token: Scalars['String']
}

export type QueryMpSmtpBestsellersArgs = {
  app_id: Scalars['String']
  secret_key: Scalars['String']
  filters?: Maybe<MpFilters>
}

export type QueryPickupLocationsArgs = {
  area?: Maybe<AreaInput>
  filters?: Maybe<PickupLocationFilterInput>
  sort?: Maybe<PickupLocationSortInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  productsInfo?: Maybe<Array<Maybe<ProductInfoInput>>>
}

export type QueryProductsArgs = {
  search?: Maybe<Scalars['String']>
  filter?: Maybe<ProductAttributeFilterInput>
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<ProductAttributeSortInput>
}

export type QueryRouteArgs = {
  url: Scalars['String']
}

export type QueryUrlResolverArgs = {
  url: Scalars['String']
}

export type WebkulPaymentCreditsystemConfig = {
  __typename?: 'WebkulPaymentCreditsystemConfig'
  currencysymbol?: Maybe<Scalars['String']>
  getcurrentcode?: Maybe<Scalars['String']>
  grand_total?: Maybe<Scalars['String']>
  grand_total_formatted?: Maybe<Scalars['String']>
  leftincredit?: Maybe<Scalars['String']>
  remainingcredit?: Maybe<Scalars['String']>
  remainingcreditcurrentcurrency?: Maybe<Scalars['String']>
  remainingcreditformatted?: Maybe<Scalars['String']>
}

export enum AttributeEntityTypeEnum {
  Product = 'PRODUCT',
}

export type AttributesMetadata = {
  __typename?: 'AttributesMetadata'
  items?: Maybe<Array<Maybe<AttributeMetadataInterface>>>
}

export type AttributeMetadataInterface = {
  attribute_labels?: Maybe<Array<Maybe<StoreLabels>>>
  code?: Maybe<Scalars['String']>
  data_type?: Maybe<ObjectDataTypeEnum>
  entity_type?: Maybe<AttributeEntityTypeEnum>
  is_system?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  sort_order?: Maybe<Scalars['Int']>
  ui_input?: Maybe<UiInputTypeInterface>
  uid?: Maybe<Scalars['ID']>
}

export type StoreLabels = {
  __typename?: 'StoreLabels'
  label?: Maybe<Scalars['String']>
  store_code?: Maybe<Scalars['String']>
}

export enum ObjectDataTypeEnum {
  String = 'STRING',
  Float = 'FLOAT',
  Int = 'INT',
  Boolean = 'BOOLEAN',
  Complex = 'COMPLEX',
}

export type UiInputTypeInterface = {
  is_html_allowed?: Maybe<Scalars['Boolean']>
  ui_input_type?: Maybe<UiInputTypeEnum>
}

export enum UiInputTypeEnum {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Gallery = 'GALLERY',
  Image = 'IMAGE',
  MediaImage = 'MEDIA_IMAGE',
  Multiselect = 'MULTISELECT',
  Price = 'PRICE',
  Select = 'SELECT',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  Texteditor = 'TEXTEDITOR',
  Weight = 'WEIGHT',
  Pagebuilder = 'PAGEBUILDER',
  FixedProductTax = 'FIXED_PRODUCT_TAX',
}

export type StoreConfig = {
  __typename?: 'StoreConfig'
  absolute_footer?: Maybe<Scalars['String']>
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']>
  allow_items?: Maybe<Scalars['String']>
  allow_order?: Maybe<Scalars['String']>
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']>
  bank_transfer?: Maybe<ExtraInfoBankTransferPayment>
  base_currency_code?: Maybe<Scalars['String']>
  base_link_url?: Maybe<Scalars['String']>
  base_media_url?: Maybe<Scalars['String']>
  base_static_url?: Maybe<Scalars['String']>
  base_url?: Maybe<Scalars['String']>
  braintree_cc_vault_active?: Maybe<Scalars['String']>
  catalog_default_sort_by?: Maybe<Scalars['String']>
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>
  category_url_suffix?: Maybe<Scalars['String']>
  check_money_order_enable_for_specific_countries?: Maybe<Scalars['Boolean']>
  check_money_order_enabled?: Maybe<Scalars['Boolean']>
  check_money_order_make_check_payable_to?: Maybe<Scalars['String']>
  check_money_order_max_order_total?: Maybe<Scalars['String']>
  check_money_order_min_order_total?: Maybe<Scalars['String']>
  check_money_order_new_order_status?: Maybe<Scalars['String']>
  check_money_order_payment_from_specific_countries?: Maybe<Scalars['String']>
  check_money_order_send_check_to?: Maybe<Scalars['String']>
  check_money_order_sort_order?: Maybe<Scalars['Int']>
  check_money_order_title?: Maybe<Scalars['String']>
  cms_home_page?: Maybe<Scalars['String']>
  cms_no_cookies?: Maybe<Scalars['String']>
  cms_no_route?: Maybe<Scalars['String']>
  /** @deprecated Use `store_code` instead. */
  code?: Maybe<Scalars['String']>
  configurable_thumbnail_source?: Maybe<Scalars['String']>
  contact_enabled?: Scalars['Boolean']
  copyright?: Maybe<Scalars['String']>
  default_description?: Maybe<Scalars['String']>
  default_display_currency_code?: Maybe<Scalars['String']>
  default_keywords?: Maybe<Scalars['String']>
  default_title?: Maybe<Scalars['String']>
  demonotice?: Maybe<Scalars['Int']>
  front?: Maybe<Scalars['String']>
  grid_per_page?: Maybe<Scalars['Int']>
  grid_per_page_values?: Maybe<Scalars['String']>
  head_includes?: Maybe<Scalars['String']>
  head_shortcut_icon?: Maybe<Scalars['String']>
  header_logo_src?: Maybe<Scalars['String']>
  /** @deprecated Use `store_code` instead. */
  id?: Maybe<Scalars['Int']>
  is_allow_guests_to_see_price?: Maybe<Scalars['String']>
  is_default_store?: Maybe<Scalars['Boolean']>
  is_default_store_group?: Maybe<Scalars['Boolean']>
  is_required_login?: Maybe<Scalars['String']>
  list_mode?: Maybe<Scalars['String']>
  list_per_page?: Maybe<Scalars['Int']>
  list_per_page_values?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  logo_alt?: Maybe<Scalars['String']>
  logo_height?: Maybe<Scalars['Int']>
  logo_width?: Maybe<Scalars['Int']>
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']>
  minimum_password_length?: Maybe<Scalars['String']>
  newsletter_enabled?: Scalars['Boolean']
  no_route?: Maybe<Scalars['String']>
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']>
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>
  product_reviews_enabled?: Maybe<Scalars['String']>
  product_url_suffix?: Maybe<Scalars['String']>
  required_character_classes_number?: Maybe<Scalars['String']>
  /** @deprecated Use `root_category_uid` instead. */
  root_category_id?: Maybe<Scalars['Int']>
  root_category_uid?: Maybe<Scalars['ID']>
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>
  secure_base_link_url?: Maybe<Scalars['String']>
  secure_base_media_url?: Maybe<Scalars['String']>
  secure_base_static_url?: Maybe<Scalars['String']>
  secure_base_url?: Maybe<Scalars['String']>
  send_friend?: Maybe<SendFriendConfiguration>
  show_cms_breadcrumbs?: Maybe<Scalars['Int']>
  store_code?: Maybe<Scalars['ID']>
  store_group_code?: Maybe<Scalars['ID']>
  store_group_name?: Maybe<Scalars['String']>
  store_name?: Maybe<Scalars['String']>
  store_sort_order?: Maybe<Scalars['Int']>
  timezone?: Maybe<Scalars['String']>
  title_prefix?: Maybe<Scalars['String']>
  title_separator?: Maybe<Scalars['String']>
  title_suffix?: Maybe<Scalars['String']>
  use_store_in_url?: Maybe<Scalars['Boolean']>
  website_code?: Maybe<Scalars['ID']>
  /** @deprecated The field should not be used on the storefront. */
  website_id?: Maybe<Scalars['Int']>
  website_name?: Maybe<Scalars['String']>
  weight_unit?: Maybe<Scalars['String']>
  welcome?: Maybe<Scalars['String']>
  zero_subtotal_enable_for_specific_countries?: Maybe<Scalars['Boolean']>
  zero_subtotal_enabled?: Maybe<Scalars['Boolean']>
  zero_subtotal_new_order_status?: Maybe<Scalars['String']>
  zero_subtotal_payment_action?: Maybe<Scalars['String']>
  zero_subtotal_payment_from_specific_countries?: Maybe<Scalars['String']>
  zero_subtotal_sort_order?: Maybe<Scalars['Int']>
  zero_subtotal_title?: Maybe<Scalars['String']>
}

export type ExtraInfoBankTransferPayment = {
  __typename?: 'ExtraInfoBankTransferPayment'
  instructions?: Maybe<Scalars['String']>
}

export enum FixedProductTaxDisplaySettings {
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS',
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  FptDisabled = 'FPT_DISABLED',
}

export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration'
  enabled_for_customers: Scalars['Boolean']
  enabled_for_guests: Scalars['Boolean']
}

export type Cart = {
  __typename?: 'Cart'
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon?: Maybe<AppliedCoupon>
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>
  billing_address?: Maybe<BillingCartAddress>
  comment?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  external_order_number?: Maybe<Scalars['String']>
  gift_message?: Maybe<GiftMessage>
  id: Scalars['ID']
  is_virtual: Scalars['Boolean']
  items?: Maybe<Array<Maybe<CartItemInterface>>>
  prices?: Maybe<CartPrices>
  selected_payment_method?: Maybe<SelectedPaymentMethod>
  shipping_addresses: Array<Maybe<ShippingCartAddress>>
  total_quantity: Scalars['Float']
}

export type AppliedCoupon = {
  __typename?: 'AppliedCoupon'
  code: Scalars['String']
}

export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod'
  code: Scalars['String']
  title: Scalars['String']
}

export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress'
  city: Scalars['String']
  company?: Maybe<Scalars['String']>
  country: CartAddressCountry
  /** @deprecated The field is used only in shipping address. */
  customer_notes?: Maybe<Scalars['String']>
  firstname: Scalars['String']
  lastname: Scalars['String']
  postcode?: Maybe<Scalars['String']>
  region?: Maybe<CartAddressRegion>
  street: Array<Maybe<Scalars['String']>>
  telephone?: Maybe<Scalars['String']>
}

export type CartAddressInterface = {
  city: Scalars['String']
  company?: Maybe<Scalars['String']>
  country: CartAddressCountry
  firstname: Scalars['String']
  lastname: Scalars['String']
  postcode?: Maybe<Scalars['String']>
  region?: Maybe<CartAddressRegion>
  street: Array<Maybe<Scalars['String']>>
  telephone?: Maybe<Scalars['String']>
}

export type CartAddressCountry = {
  __typename?: 'CartAddressCountry'
  code: Scalars['String']
  label: Scalars['String']
}

export type CartAddressRegion = {
  __typename?: 'CartAddressRegion'
  code?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  region_id?: Maybe<Scalars['Int']>
}

export type GiftMessage = {
  __typename?: 'GiftMessage'
  from: Scalars['String']
  message: Scalars['String']
  to: Scalars['String']
}

export type CartItemInterface = {
  errors?: Maybe<Array<Maybe<CartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  quantity: Scalars['Float']
  uid: Scalars['ID']
}

export type CartItemError = {
  __typename?: 'CartItemError'
  code: CartItemErrorType
  message: Scalars['String']
}

export enum CartItemErrorType {
  Undefined = 'UNDEFINED',
  ItemQty = 'ITEM_QTY',
  ItemIncrements = 'ITEM_INCREMENTS',
}

export type CartItemPrices = {
  __typename?: 'CartItemPrices'
  discounts?: Maybe<Array<Maybe<Discount>>>
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>
  price: Money
  row_total: Money
  row_total_including_tax: Money
  total_item_discount?: Maybe<Money>
}

export type Discount = {
  __typename?: 'Discount'
  amount: Money
  label: Scalars['String']
}

export type Money = {
  __typename?: 'Money'
  currency?: Maybe<CurrencyEnum>
  value?: Maybe<Scalars['Float']>
}

export enum CurrencyEnum {
  Afn = 'AFN',
  All = 'ALL',
  Azn = 'AZN',
  Dzd = 'DZD',
  Aoa = 'AOA',
  Ars = 'ARS',
  Amd = 'AMD',
  Awg = 'AWG',
  Aud = 'AUD',
  Bsd = 'BSD',
  Bhd = 'BHD',
  Bdt = 'BDT',
  Bbd = 'BBD',
  Byn = 'BYN',
  Bzd = 'BZD',
  Bmd = 'BMD',
  Btn = 'BTN',
  Bob = 'BOB',
  Bam = 'BAM',
  Bwp = 'BWP',
  Brl = 'BRL',
  Gbp = 'GBP',
  Bnd = 'BND',
  Bgn = 'BGN',
  Buk = 'BUK',
  Bif = 'BIF',
  Khr = 'KHR',
  Cad = 'CAD',
  Cve = 'CVE',
  Czk = 'CZK',
  Kyd = 'KYD',
  Gqe = 'GQE',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Kmf = 'KMF',
  Cdf = 'CDF',
  Crc = 'CRC',
  Hrk = 'HRK',
  Cup = 'CUP',
  Dkk = 'DKK',
  Djf = 'DJF',
  Dop = 'DOP',
  Xcd = 'XCD',
  Egp = 'EGP',
  Svc = 'SVC',
  Ern = 'ERN',
  Eek = 'EEK',
  Etb = 'ETB',
  Eur = 'EUR',
  Fkp = 'FKP',
  Fjd = 'FJD',
  Gmd = 'GMD',
  Gek = 'GEK',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gtq = 'GTQ',
  Gnf = 'GNF',
  Gyd = 'GYD',
  Htg = 'HTG',
  Hnl = 'HNL',
  Hkd = 'HKD',
  Huf = 'HUF',
  Isk = 'ISK',
  Inr = 'INR',
  Idr = 'IDR',
  Irr = 'IRR',
  Iqd = 'IQD',
  Ils = 'ILS',
  Jmd = 'JMD',
  Jpy = 'JPY',
  Jod = 'JOD',
  Kzt = 'KZT',
  Kes = 'KES',
  Kwd = 'KWD',
  Kgs = 'KGS',
  Lak = 'LAK',
  Lvl = 'LVL',
  Lbp = 'LBP',
  Lsl = 'LSL',
  Lrd = 'LRD',
  Lyd = 'LYD',
  Ltl = 'LTL',
  Mop = 'MOP',
  Mkd = 'MKD',
  Mga = 'MGA',
  Mwk = 'MWK',
  Myr = 'MYR',
  Mvr = 'MVR',
  Lsm = 'LSM',
  Mro = 'MRO',
  Mur = 'MUR',
  Mxn = 'MXN',
  Mdl = 'MDL',
  Mnt = 'MNT',
  Mad = 'MAD',
  Mzn = 'MZN',
  Mmk = 'MMK',
  Nad = 'NAD',
  Npr = 'NPR',
  Ang = 'ANG',
  Ytl = 'YTL',
  Nzd = 'NZD',
  Nic = 'NIC',
  Ngn = 'NGN',
  Kpw = 'KPW',
  Nok = 'NOK',
  Omr = 'OMR',
  Pkr = 'PKR',
  Pab = 'PAB',
  Pgk = 'PGK',
  Pyg = 'PYG',
  Pen = 'PEN',
  Php = 'PHP',
  Pln = 'PLN',
  Qar = 'QAR',
  Rhd = 'RHD',
  Ron = 'RON',
  Rub = 'RUB',
  Rwf = 'RWF',
  Shp = 'SHP',
  Std = 'STD',
  Sar = 'SAR',
  Rsd = 'RSD',
  Scr = 'SCR',
  Sll = 'SLL',
  Sgd = 'SGD',
  Skk = 'SKK',
  Sbd = 'SBD',
  Sos = 'SOS',
  Zar = 'ZAR',
  Krw = 'KRW',
  Lkr = 'LKR',
  Sdg = 'SDG',
  Srd = 'SRD',
  Szl = 'SZL',
  Sek = 'SEK',
  Chf = 'CHF',
  Syp = 'SYP',
  Twd = 'TWD',
  Tjs = 'TJS',
  Tzs = 'TZS',
  Thb = 'THB',
  Top = 'TOP',
  Ttd = 'TTD',
  Tnd = 'TND',
  Tmm = 'TMM',
  Usd = 'USD',
  Ugx = 'UGX',
  Uah = 'UAH',
  Aed = 'AED',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vuv = 'VUV',
  Veb = 'VEB',
  Vef = 'VEF',
  Vnd = 'VND',
  Che = 'CHE',
  Chw = 'CHW',
  Xof = 'XOF',
  Wst = 'WST',
  Yer = 'YER',
  Zmk = 'ZMK',
  Zwd = 'ZWD',
  Try = 'TRY',
  Azm = 'AZM',
  Rol = 'ROL',
  Trl = 'TRL',
  Xpf = 'XPF',
}

export type FixedProductTax = {
  __typename?: 'FixedProductTax'
  amount?: Maybe<Money>
  label?: Maybe<Scalars['String']>
}

export type ProductInterface = {
  /** @deprecated The field should not be used on the storefront. */
  attribute_set_id?: Maybe<Scalars['Int']>
  canonical_url?: Maybe<Scalars['String']>
  categories?: Maybe<Array<Maybe<CategoryInterface>>>
  color?: Maybe<Scalars['Int']>
  color_asiento?: Maybe<Scalars['Int']>
  color_carcasa_tejido?: Maybe<Scalars['Int']>
  color_estructura?: Maybe<Scalars['Int']>
  color_tablero?: Maybe<Scalars['Int']>
  color_tejido?: Maybe<Scalars['Int']>
  country_of_manufacture?: Maybe<Scalars['String']>
  /** @deprecated The field should not be used on the storefront. */
  created_at?: Maybe<Scalars['String']>
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>
  custom_attributes: Array<Maybe<CustomAttribute>>
  description?: Maybe<ComplexTextValue>
  fashion_color?: Maybe<Scalars['Int']>
  fashion_material?: Maybe<Scalars['String']>
  fashion_size?: Maybe<Scalars['Int']>
  fashion_style?: Maybe<Scalars['String']>
  forma?: Maybe<Scalars['Int']>
  format?: Maybe<Scalars['Int']>
  gift_message_available?: Maybe<Scalars['String']>
  has_video?: Maybe<Scalars['Int']>
  /** @deprecated Use the `uid` field instead. */
  id?: Maybe<Scalars['Int']>
  image?: Maybe<ProductImage>
  manufacturer?: Maybe<Scalars['Int']>
  material_estructura?: Maybe<Scalars['Int']>
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /** @deprecated Use `media_gallery` instead. */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>
  medida_comercial?: Maybe<Scalars['Int']>
  meta_description?: Maybe<Scalars['String']>
  meta_keyword?: Maybe<Scalars['String']>
  meta_title?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** @deprecated The field should not be used on the storefront. */
  new_from_date?: Maybe<Scalars['String']>
  /** @deprecated The field should not be used on the storefront. */
  new_to_date?: Maybe<Scalars['String']>
  only_x_left_in_stock?: Maybe<Scalars['Float']>
  options_container?: Maybe<Scalars['String']>
  orParentSku?: Maybe<Scalars['String']>
  orParentUrlKey?: Maybe<Scalars['String']>
  /** @deprecated Use `price_range` for product price information. */
  price?: Maybe<ProductPrices>
  price_range: PriceRange
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>
  rating_summary: Scalars['Float']
  related_products?: Maybe<Array<Maybe<ProductInterface>>>
  review_count: Scalars['Int']
  reviews: ProductReviews
  short_description?: Maybe<ComplexTextValue>
  sku?: Maybe<Scalars['String']>
  small_image?: Maybe<ProductImage>
  /** @deprecated The field should not be used on the storefront. */
  special_from_date?: Maybe<Scalars['String']>
  special_price?: Maybe<Scalars['Float']>
  special_to_date?: Maybe<Scalars['String']>
  stock_status?: Maybe<ProductStockStatus>
  swatch_image?: Maybe<Scalars['String']>
  thumbnail?: Maybe<ProductImage>
  /** @deprecated Use `price_tiers` for product tier price information. */
  tier_price?: Maybe<Scalars['Float']>
  /** @deprecated Use `price_tiers` for product tier price information. */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>
  /** @deprecated Use `__typename` instead. */
  type_id?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  /** @deprecated The field should not be used on the storefront. */
  updated_at?: Maybe<Scalars['String']>
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>
  url_key?: Maybe<Scalars['String']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>
  url_suffix?: Maybe<Scalars['String']>
  video_file?: Maybe<Scalars['String']>
  /** @deprecated The field should not be used on the storefront. */
  websites?: Maybe<Array<Maybe<Website>>>
}

export type ProductInterfaceReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type CategoryInterface = {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>
  canonical_url?: Maybe<Scalars['String']>
  category_icon?: Maybe<Scalars['String']>
  children_count?: Maybe<Scalars['String']>
  cms_block?: Maybe<CmsBlock>
  /** @deprecated The field should not be used on the storefront. */
  created_at?: Maybe<Scalars['String']>
  custom_layout_update_file?: Maybe<Scalars['String']>
  default_sort_by?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  display_mode?: Maybe<Scalars['String']>
  filter_price_range?: Maybe<Scalars['Float']>
  /** @deprecated Use `uid` instead. */
  id?: Maybe<Scalars['Int']>
  image?: Maybe<Scalars['String']>
  include_in_menu?: Maybe<Scalars['Int']>
  is_anchor?: Maybe<Scalars['Int']>
  landing_page?: Maybe<Scalars['Int']>
  level?: Maybe<Scalars['Int']>
  meta_description?: Maybe<Scalars['String']>
  meta_keywords?: Maybe<Scalars['String']>
  meta_title?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  path_in_store?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  product_count?: Maybe<Scalars['Int']>
  products?: Maybe<CategoryProducts>
  uid: Scalars['ID']
  /** @deprecated The field should not be used on the storefront. */
  updated_at?: Maybe<Scalars['String']>
  url_key?: Maybe<Scalars['String']>
  url_path?: Maybe<Scalars['String']>
  url_suffix?: Maybe<Scalars['String']>
}

export type CategoryInterfaceProductsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<ProductAttributeSortInput>
}

export type Breadcrumb = {
  __typename?: 'Breadcrumb'
  /** @deprecated Use `category_uid` instead. */
  category_id?: Maybe<Scalars['Int']>
  category_level?: Maybe<Scalars['Int']>
  category_name?: Maybe<Scalars['String']>
  category_uid: Scalars['ID']
  category_url_key?: Maybe<Scalars['String']>
  category_url_path?: Maybe<Scalars['String']>
}

export type CmsBlock = {
  __typename?: 'CmsBlock'
  content?: Maybe<Scalars['String']>
  identifier?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ProductAttributeSortInput = {
  name?: Maybe<SortEnum>
  position?: Maybe<SortEnum>
  price?: Maybe<SortEnum>
  relevance?: Maybe<SortEnum>
}

export enum SortEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type CategoryProducts = {
  __typename?: 'CategoryProducts'
  items?: Maybe<Array<Maybe<ProductInterface>>>
  page_info?: Maybe<SearchResultPageInfo>
  total_count?: Maybe<Scalars['Int']>
}

export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo'
  current_page?: Maybe<Scalars['Int']>
  page_size?: Maybe<Scalars['Int']>
  total_pages?: Maybe<Scalars['Int']>
}

export type CustomAttribute = {
  __typename?: 'CustomAttribute'
  attribute_metadata?: Maybe<AttributeMetadataInterface>
  entered_attribute_value?: Maybe<EnteredAttributeValue>
  selected_attribute_options?: Maybe<SelectedAttributeOption>
}

export type EnteredAttributeValue = {
  __typename?: 'EnteredAttributeValue'
  value?: Maybe<Scalars['String']>
}

export type SelectedAttributeOption = {
  __typename?: 'SelectedAttributeOption'
  attribute_option?: Maybe<Array<Maybe<AttributeOptionInterface>>>
}

export type AttributeOptionInterface = {
  is_default?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue'
  html: Scalars['String']
}

export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage'
  disabled?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
}

export type MediaGalleryInterface = {
  disabled?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
}

export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry'
  content?: Maybe<ProductMediaGalleryEntriesContent>
  disabled?: Maybe<Scalars['Boolean']>
  file?: Maybe<Scalars['String']>
  /** @deprecated Use `uid` instead. */
  id?: Maybe<Scalars['Int']>
  label?: Maybe<Scalars['String']>
  media_type?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  types?: Maybe<Array<Maybe<Scalars['String']>>>
  uid: Scalars['ID']
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>
}

export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent'
  base64_encoded_data?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent'
  media_type?: Maybe<Scalars['String']>
  video_description?: Maybe<Scalars['String']>
  video_metadata?: Maybe<Scalars['String']>
  video_provider?: Maybe<Scalars['String']>
  video_title?: Maybe<Scalars['String']>
  video_url?: Maybe<Scalars['String']>
}

export type ProductPrices = {
  __typename?: 'ProductPrices'
  /** @deprecated Use `PriceRange.maximum_price` instead. */
  maximalPrice?: Maybe<Price>
  /** @deprecated Use `PriceRange.minimum_price` instead. */
  minimalPrice?: Maybe<Price>
  /** @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead. */
  regularPrice?: Maybe<Price>
}

export type Price = {
  __typename?: 'Price'
  /** @deprecated Use `ProductPrice` instead. */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>
  /** @deprecated Use `ProductPrice` instead. */
  amount?: Maybe<Money>
}

export type PriceAdjustment = {
  __typename?: 'PriceAdjustment'
  amount?: Maybe<Money>
  /** @deprecated `PriceAdjustment` is deprecated. */
  code?: Maybe<PriceAdjustmentCodesEnum>
  /** @deprecated `PriceAdjustment` is deprecated. */
  description?: Maybe<PriceAdjustmentDescriptionEnum>
}

export enum PriceAdjustmentCodesEnum {
  Tax = 'TAX',
  Weee = 'WEEE',
  WeeeTax = 'WEEE_TAX',
}

export enum PriceAdjustmentDescriptionEnum {
  Included = 'INCLUDED',
  Excluded = 'EXCLUDED',
}

export type PriceRange = {
  __typename?: 'PriceRange'
  maximum_price?: Maybe<ProductPrice>
  minimum_price: ProductPrice
}

export type ProductPrice = {
  __typename?: 'ProductPrice'
  discount?: Maybe<ProductDiscount>
  final_price: Money
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>
  regular_price: Money
}

export type ProductDiscount = {
  __typename?: 'ProductDiscount'
  amount_off?: Maybe<Scalars['Float']>
  percent_off?: Maybe<Scalars['Float']>
}

export type TierPrice = {
  __typename?: 'TierPrice'
  discount?: Maybe<ProductDiscount>
  final_price?: Maybe<Money>
  quantity?: Maybe<Scalars['Float']>
}

export type ProductLinksInterface = {
  link_type?: Maybe<Scalars['String']>
  linked_product_sku?: Maybe<Scalars['String']>
  linked_product_type?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  sku?: Maybe<Scalars['String']>
}

export type ProductReviews = {
  __typename?: 'ProductReviews'
  items: Array<Maybe<ProductReview>>
  page_info: SearchResultPageInfo
}

export type ProductReview = {
  __typename?: 'ProductReview'
  average_rating: Scalars['Float']
  created_at: Scalars['String']
  nickname: Scalars['String']
  product: ProductInterface
  ratings_breakdown: Array<Maybe<ProductReviewRating>>
  summary: Scalars['String']
  text: Scalars['String']
}

export type ProductReviewRating = {
  __typename?: 'ProductReviewRating'
  name: Scalars['String']
  value: Scalars['String']
}

export enum ProductStockStatus {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK',
}

export type ProductTierPrices = {
  __typename?: 'ProductTierPrices'
  /** @deprecated Not relevant for the storefront. */
  customer_group_id?: Maybe<Scalars['String']>
  /** @deprecated Use `TierPrice.discount` instead. */
  percentage_value?: Maybe<Scalars['Float']>
  /** @deprecated Use `TierPrice.quantity` instead. */
  qty?: Maybe<Scalars['Float']>
  /** @deprecated Use `TierPrice.final_price` instead. */
  value?: Maybe<Scalars['Float']>
  /** @deprecated Not relevant for the storefront. */
  website_id?: Maybe<Scalars['Float']>
}

export type UrlRewrite = {
  __typename?: 'UrlRewrite'
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>
  url?: Maybe<Scalars['String']>
}

export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter'
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Website = {
  __typename?: 'Website'
  /** @deprecated The field should not be used on the storefront. */
  code?: Maybe<Scalars['String']>
  /** @deprecated The field should not be used on the storefront. */
  default_group_id?: Maybe<Scalars['String']>
  /** @deprecated The field should not be used on the storefront. */
  id?: Maybe<Scalars['Int']>
  /** @deprecated The field should not be used on the storefront. */
  is_default?: Maybe<Scalars['Boolean']>
  /** @deprecated The field should not be used on the storefront. */
  name?: Maybe<Scalars['String']>
  /** @deprecated The field should not be used on the storefront. */
  sort_order?: Maybe<Scalars['Int']>
}

export type CartPrices = {
  __typename?: 'CartPrices'
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>
  /** @deprecated Use discounts instead. */
  discount?: Maybe<CartDiscount>
  discounts?: Maybe<Array<Maybe<Discount>>>
  grand_total?: Maybe<Money>
  subtotal_excluding_tax?: Maybe<Money>
  subtotal_including_tax?: Maybe<Money>
  subtotal_with_discount_excluding_tax?: Maybe<Money>
}

export type CartTaxItem = {
  __typename?: 'CartTaxItem'
  amount: Money
  label: Scalars['String']
}

export type CartDiscount = {
  __typename?: 'CartDiscount'
  amount: Money
  label: Array<Maybe<Scalars['String']>>
}

export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod'
  code: Scalars['String']
  purchase_order_number?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress'
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>
  city: Scalars['String']
  company?: Maybe<Scalars['String']>
  country: CartAddressCountry
  customer_notes?: Maybe<Scalars['String']>
  firstname: Scalars['String']
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight?: Maybe<Scalars['Float']>
  lastname: Scalars['String']
  pickup_location_code?: Maybe<Scalars['String']>
  postcode?: Maybe<Scalars['String']>
  region?: Maybe<CartAddressRegion>
  selected_shipping_method?: Maybe<SelectedShippingMethod>
  street: Array<Maybe<Scalars['String']>>
  telephone?: Maybe<Scalars['String']>
}

export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod'
  amount: Money
  available: Scalars['Boolean']
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>
  carrier_code: Scalars['String']
  carrier_title: Scalars['String']
  error_message?: Maybe<Scalars['String']>
  method_code?: Maybe<Scalars['String']>
  method_title?: Maybe<Scalars['String']>
  price_excl_tax: Money
  price_incl_tax: Money
}

export type CartItemQuantity = {
  __typename?: 'CartItemQuantity'
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int']
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float']
}

export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod'
  amount: Money
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>
  carrier_code: Scalars['String']
  carrier_title: Scalars['String']
  method_code: Scalars['String']
  method_title: Scalars['String']
}

export type CategoryFilterInput = {
  category_uid?: Maybe<FilterEqualTypeInput>
  ids?: Maybe<FilterEqualTypeInput>
  name?: Maybe<FilterMatchTypeInput>
  parent_category_uid?: Maybe<FilterEqualTypeInput>
  parent_id?: Maybe<FilterEqualTypeInput>
  url_key?: Maybe<FilterEqualTypeInput>
  url_path?: Maybe<FilterEqualTypeInput>
}

export type FilterEqualTypeInput = {
  eq?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type FilterMatchTypeInput = {
  match?: Maybe<Scalars['String']>
}

export type CategoryResult = {
  __typename?: 'CategoryResult'
  items?: Maybe<Array<Maybe<CategoryTree>>>
  page_info?: Maybe<SearchResultPageInfo>
  total_count?: Maybe<Scalars['Int']>
}

export type CategoryTree = CategoryInterface &
  RoutableInterface & {
    __typename?: 'CategoryTree'
    available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>
    breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>
    canonical_url?: Maybe<Scalars['String']>
    category_icon?: Maybe<Scalars['String']>
    children?: Maybe<Array<Maybe<CategoryTree>>>
    children_count?: Maybe<Scalars['String']>
    cms_block?: Maybe<CmsBlock>
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>
    custom_layout_update_file?: Maybe<Scalars['String']>
    default_sort_by?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    display_mode?: Maybe<Scalars['String']>
    filter_price_range?: Maybe<Scalars['Float']>
    /** @deprecated Use `uid` instead. */
    id?: Maybe<Scalars['Int']>
    image?: Maybe<Scalars['String']>
    include_in_menu?: Maybe<Scalars['Int']>
    is_anchor?: Maybe<Scalars['Int']>
    landing_page?: Maybe<Scalars['Int']>
    level?: Maybe<Scalars['Int']>
    meta_description?: Maybe<Scalars['String']>
    meta_keywords?: Maybe<Scalars['String']>
    meta_title?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    path?: Maybe<Scalars['String']>
    path_in_store?: Maybe<Scalars['String']>
    position?: Maybe<Scalars['Int']>
    product_count?: Maybe<Scalars['Int']>
    products?: Maybe<CategoryProducts>
    redirect_code: Scalars['Int']
    relative_url?: Maybe<Scalars['String']>
    type?: Maybe<UrlRewriteEntityTypeEnum>
    uid: Scalars['ID']
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>
    url_key?: Maybe<Scalars['String']>
    url_path?: Maybe<Scalars['String']>
    url_suffix?: Maybe<Scalars['String']>
  }

export type CategoryTreeProductsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  sort?: Maybe<ProductAttributeSortInput>
}

export type RoutableInterface = {
  redirect_code: Scalars['Int']
  relative_url?: Maybe<Scalars['String']>
  type?: Maybe<UrlRewriteEntityTypeEnum>
}

export enum UrlRewriteEntityTypeEnum {
  CmsPage = 'CMS_PAGE',
  Product = 'PRODUCT',
  Category = 'CATEGORY',
}

export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement'
  agreement_id: Scalars['Int']
  checkbox_text: Scalars['String']
  content: Scalars['String']
  content_height?: Maybe<Scalars['String']>
  is_html: Scalars['Boolean']
  mode: CheckoutAgreementMode
  name: Scalars['String']
}

export enum CheckoutAgreementMode {
  Auto = 'AUTO',
  Manual = 'MANUAL',
}

export type CmsBlocks = {
  __typename?: 'CmsBlocks'
  items?: Maybe<Array<Maybe<CmsBlock>>>
}

export type CmsPage = RoutableInterface & {
  __typename?: 'CmsPage'
  content?: Maybe<Scalars['String']>
  content_heading?: Maybe<Scalars['String']>
  identifier?: Maybe<Scalars['String']>
  meta_description?: Maybe<Scalars['String']>
  meta_keywords?: Maybe<Scalars['String']>
  meta_title?: Maybe<Scalars['String']>
  page_layout?: Maybe<Scalars['String']>
  redirect_code: Scalars['Int']
  relative_url?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  type?: Maybe<UrlRewriteEntityTypeEnum>
  url_key?: Maybe<Scalars['String']>
}

export type CompareList = {
  __typename?: 'CompareList'
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>
  item_count: Scalars['Int']
  items?: Maybe<Array<Maybe<ComparableItem>>>
  uid: Scalars['ID']
}

export type ComparableAttribute = {
  __typename?: 'ComparableAttribute'
  code: Scalars['String']
  label: Scalars['String']
}

export type ComparableItem = {
  __typename?: 'ComparableItem'
  attributes: Array<Maybe<ProductAttribute>>
  product: ProductInterface
  uid: Scalars['ID']
}

export type ProductAttribute = {
  __typename?: 'ProductAttribute'
  code: Scalars['String']
  value: Scalars['String']
}

export type Country = {
  __typename?: 'Country'
  available_regions?: Maybe<Array<Maybe<Region>>>
  full_name_english?: Maybe<Scalars['String']>
  full_name_locale?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  three_letter_abbreviation?: Maybe<Scalars['String']>
  two_letter_abbreviation?: Maybe<Scalars['String']>
}

export type Region = {
  __typename?: 'Region'
  code?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

export type Currency = {
  __typename?: 'Currency'
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>
  base_currency_code?: Maybe<Scalars['String']>
  base_currency_symbol?: Maybe<Scalars['String']>
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']>
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']>
  default_display_currency_code?: Maybe<Scalars['String']>
  default_display_currency_symbol?: Maybe<Scalars['String']>
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>
}

export type ExchangeRate = {
  __typename?: 'ExchangeRate'
  currency_to?: Maybe<Scalars['String']>
  rate?: Maybe<Scalars['Float']>
}

export type AttributeInput = {
  attribute_code?: Maybe<Scalars['String']>
  entity_type?: Maybe<Scalars['String']>
}

export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata'
  items?: Maybe<Array<Maybe<Attribute>>>
}

export type Attribute = {
  __typename?: 'Attribute'
  attribute_code?: Maybe<Scalars['String']>
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>
  attribute_type?: Maybe<Scalars['String']>
  entity_type?: Maybe<Scalars['String']>
  input_type?: Maybe<Scalars['String']>
  storefront_properties?: Maybe<StorefrontProperties>
}

export type AttributeOption = AttributeOptionInterface & {
  __typename?: 'AttributeOption'
  is_default?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<Scalars['String']>
}

export type StorefrontProperties = {
  __typename?: 'StorefrontProperties'
  position?: Maybe<Scalars['Int']>
  use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>
  use_in_product_listing?: Maybe<Scalars['Boolean']>
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']>
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']>
}

export enum UseInLayeredNavigationOptions {
  No = 'NO',
  FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
  FilterableNoResult = 'FILTERABLE_NO_RESULT',
}

export type Customer = {
  __typename?: 'Customer'
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>
  allow_remote_shopping_assistance: Scalars['Boolean']
  compare_list?: Maybe<CompareList>
  created_at?: Maybe<Scalars['String']>
  date_of_birth?: Maybe<Scalars['String']>
  default_billing?: Maybe<Scalars['String']>
  default_shipping?: Maybe<Scalars['String']>
  /** @deprecated Use `date_of_birth` instead. */
  dob?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['Int']>
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id?: Maybe<Scalars['Int']>
  /** @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token **/
  /** used for authentication. There is no need to know customer ID on the client side. **/
  id?: Maybe<Scalars['Int']>
  is_subscribed?: Maybe<Scalars['Boolean']>
  lastname?: Maybe<Scalars['String']>
  middlename?: Maybe<Scalars['String']>
  moodle_id?: Maybe<Scalars['String']>
  moodle_token?: Maybe<Scalars['String']>
  mp_quote_id?: Maybe<Scalars['Int']>
  orders?: Maybe<CustomerOrders>
  prefix?: Maybe<Scalars['String']>
  reviews: ProductReviews
  suffix?: Maybe<Scalars['String']>
  taxvat?: Maybe<Scalars['String']>
  /** @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead. */
  wishlist: Wishlist
  wishlist_v2?: Maybe<Wishlist>
  wishlists: Array<Maybe<Wishlist>>
}

export type CustomerOrdersArgs = {
  filter?: Maybe<CustomerOrdersFilterInput>
  currentPage?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

export type CustomerReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type CustomerWishlist_V2Args = {
  id: Scalars['ID']
}

export type CustomerWishlistsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type CustomerAddress = {
  __typename?: 'CustomerAddress'
  city?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  country_code?: Maybe<CountryCodeEnum>
  /** @deprecated Use `country_code` instead. */
  country_id?: Maybe<Scalars['String']>
  /** @deprecated Custom attributes should not be put into a container. */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>
  /** @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses. */
  customer_id?: Maybe<Scalars['Int']>
  default_billing?: Maybe<Scalars['Boolean']>
  default_shipping?: Maybe<Scalars['Boolean']>
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>
  fax?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  lastname?: Maybe<Scalars['String']>
  middlename?: Maybe<Scalars['String']>
  postcode?: Maybe<Scalars['String']>
  prefix?: Maybe<Scalars['String']>
  region?: Maybe<CustomerAddressRegion>
  region_id?: Maybe<Scalars['Int']>
  street?: Maybe<Array<Maybe<Scalars['String']>>>
  suffix?: Maybe<Scalars['String']>
  telephone?: Maybe<Scalars['String']>
  vat_id?: Maybe<Scalars['String']>
}

export enum CountryCodeEnum {
  Af = 'AF',
  Ax = 'AX',
  Al = 'AL',
  Dz = 'DZ',
  As = 'AS',
  Ad = 'AD',
  Ao = 'AO',
  Ai = 'AI',
  Aq = 'AQ',
  Ag = 'AG',
  Ar = 'AR',
  Am = 'AM',
  Aw = 'AW',
  Au = 'AU',
  At = 'AT',
  Az = 'AZ',
  Bs = 'BS',
  Bh = 'BH',
  Bd = 'BD',
  Bb = 'BB',
  By = 'BY',
  Be = 'BE',
  Bz = 'BZ',
  Bj = 'BJ',
  Bm = 'BM',
  Bt = 'BT',
  Bo = 'BO',
  Ba = 'BA',
  Bw = 'BW',
  Bv = 'BV',
  Br = 'BR',
  Io = 'IO',
  Vg = 'VG',
  Bn = 'BN',
  Bg = 'BG',
  Bf = 'BF',
  Bi = 'BI',
  Kh = 'KH',
  Cm = 'CM',
  Ca = 'CA',
  Cv = 'CV',
  Ky = 'KY',
  Cf = 'CF',
  Td = 'TD',
  Cl = 'CL',
  Cn = 'CN',
  Cx = 'CX',
  Cc = 'CC',
  Co = 'CO',
  Km = 'KM',
  Cg = 'CG',
  Cd = 'CD',
  Ck = 'CK',
  Cr = 'CR',
  Ci = 'CI',
  Hr = 'HR',
  Cu = 'CU',
  Cy = 'CY',
  Cz = 'CZ',
  Dk = 'DK',
  Dj = 'DJ',
  Dm = 'DM',
  Do = 'DO',
  Ec = 'EC',
  Eg = 'EG',
  Sv = 'SV',
  Gq = 'GQ',
  Er = 'ER',
  Ee = 'EE',
  Et = 'ET',
  Fk = 'FK',
  Fo = 'FO',
  Fj = 'FJ',
  Fi = 'FI',
  Fr = 'FR',
  Gf = 'GF',
  Pf = 'PF',
  Tf = 'TF',
  Ga = 'GA',
  Gm = 'GM',
  Ge = 'GE',
  De = 'DE',
  Gh = 'GH',
  Gi = 'GI',
  Gr = 'GR',
  Gl = 'GL',
  Gd = 'GD',
  Gp = 'GP',
  Gu = 'GU',
  Gt = 'GT',
  Gg = 'GG',
  Gn = 'GN',
  Gw = 'GW',
  Gy = 'GY',
  Ht = 'HT',
  Hm = 'HM',
  Hn = 'HN',
  Hk = 'HK',
  Hu = 'HU',
  Is = 'IS',
  In = 'IN',
  Id = 'ID',
  Ir = 'IR',
  Iq = 'IQ',
  Ie = 'IE',
  Im = 'IM',
  Il = 'IL',
  It = 'IT',
  Jm = 'JM',
  Jp = 'JP',
  Je = 'JE',
  Jo = 'JO',
  Kz = 'KZ',
  Ke = 'KE',
  Ki = 'KI',
  Kw = 'KW',
  Kg = 'KG',
  La = 'LA',
  Lv = 'LV',
  Lb = 'LB',
  Ls = 'LS',
  Lr = 'LR',
  Ly = 'LY',
  Li = 'LI',
  Lt = 'LT',
  Lu = 'LU',
  Mo = 'MO',
  Mk = 'MK',
  Mg = 'MG',
  Mw = 'MW',
  My = 'MY',
  Mv = 'MV',
  Ml = 'ML',
  Mt = 'MT',
  Mh = 'MH',
  Mq = 'MQ',
  Mr = 'MR',
  Mu = 'MU',
  Yt = 'YT',
  Mx = 'MX',
  Fm = 'FM',
  Md = 'MD',
  Mc = 'MC',
  Mn = 'MN',
  Me = 'ME',
  Ms = 'MS',
  Ma = 'MA',
  Mz = 'MZ',
  Mm = 'MM',
  Na = 'NA',
  Nr = 'NR',
  Np = 'NP',
  Nl = 'NL',
  An = 'AN',
  Nc = 'NC',
  Nz = 'NZ',
  Ni = 'NI',
  Ne = 'NE',
  Ng = 'NG',
  Nu = 'NU',
  Nf = 'NF',
  Mp = 'MP',
  Kp = 'KP',
  No = 'NO',
  Om = 'OM',
  Pk = 'PK',
  Pw = 'PW',
  Ps = 'PS',
  Pa = 'PA',
  Pg = 'PG',
  Py = 'PY',
  Pe = 'PE',
  Ph = 'PH',
  Pn = 'PN',
  Pl = 'PL',
  Pt = 'PT',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Ru = 'RU',
  Rw = 'RW',
  Ws = 'WS',
  Sm = 'SM',
  St = 'ST',
  Sa = 'SA',
  Sn = 'SN',
  Rs = 'RS',
  Sc = 'SC',
  Sl = 'SL',
  Sg = 'SG',
  Sk = 'SK',
  Si = 'SI',
  Sb = 'SB',
  So = 'SO',
  Za = 'ZA',
  Gs = 'GS',
  Kr = 'KR',
  Es = 'ES',
  Lk = 'LK',
  Bl = 'BL',
  Sh = 'SH',
  Kn = 'KN',
  Lc = 'LC',
  Mf = 'MF',
  Pm = 'PM',
  Vc = 'VC',
  Sd = 'SD',
  Sr = 'SR',
  Sj = 'SJ',
  Sz = 'SZ',
  Se = 'SE',
  Ch = 'CH',
  Sy = 'SY',
  Tw = 'TW',
  Tj = 'TJ',
  Tz = 'TZ',
  Th = 'TH',
  Tl = 'TL',
  Tg = 'TG',
  Tk = 'TK',
  To = 'TO',
  Tt = 'TT',
  Tn = 'TN',
  Tr = 'TR',
  Tm = 'TM',
  Tc = 'TC',
  Tv = 'TV',
  Ug = 'UG',
  Ua = 'UA',
  Ae = 'AE',
  Gb = 'GB',
  Us = 'US',
  Uy = 'UY',
  Um = 'UM',
  Vi = 'VI',
  Uz = 'UZ',
  Vu = 'VU',
  Va = 'VA',
  Ve = 'VE',
  Vn = 'VN',
  Wf = 'WF',
  Eh = 'EH',
  Ye = 'YE',
  Zm = 'ZM',
  Zw = 'ZW',
}

export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute'
  attribute_code?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion'
  region?: Maybe<Scalars['String']>
  region_code?: Maybe<Scalars['String']>
  region_id?: Maybe<Scalars['Int']>
}

export type CustomerOrdersFilterInput = {
  number?: Maybe<FilterStringTypeInput>
}

export type FilterStringTypeInput = {
  eq?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  match?: Maybe<Scalars['String']>
}

export type CustomerOrders = {
  __typename?: 'CustomerOrders'
  items: Array<Maybe<CustomerOrder>>
  page_info?: Maybe<SearchResultPageInfo>
  total_count?: Maybe<Scalars['Int']>
}

export type CustomerOrder = {
  __typename?: 'CustomerOrder'
  billing_address?: Maybe<OrderAddress>
  carrier?: Maybe<Scalars['String']>
  comment?: Maybe<Scalars['String']>
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>
  /** @deprecated Use the `order_date` field instead. */
  created_at?: Maybe<Scalars['String']>
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>
  external_order_number?: Maybe<Scalars['String']>
  gift_message?: Maybe<GiftMessage>
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  /** @deprecated Use the `id` field instead. */
  increment_id?: Maybe<Scalars['String']>
  invoices: Array<Maybe<Invoice>>
  items?: Maybe<Array<Maybe<OrderItemInterface>>>
  mp_delivery_information?: Maybe<MpDeliveryInformationOutput>
  number: Scalars['String']
  order_date: Scalars['String']
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String']
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>
  shipments?: Maybe<Array<Maybe<OrderShipment>>>
  shipping_address?: Maybe<OrderAddress>
  shipping_method?: Maybe<Scalars['String']>
  state: Scalars['String']
  status: Scalars['String']
  store_id?: Maybe<Scalars['String']>
  total?: Maybe<OrderTotal>
}

export type OrderAddress = {
  __typename?: 'OrderAddress'
  city: Scalars['String']
  company?: Maybe<Scalars['String']>
  country_code?: Maybe<CountryCodeEnum>
  fax?: Maybe<Scalars['String']>
  firstname: Scalars['String']
  lastname: Scalars['String']
  middlename?: Maybe<Scalars['String']>
  postcode?: Maybe<Scalars['String']>
  prefix?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  region_id?: Maybe<Scalars['ID']>
  street: Array<Maybe<Scalars['String']>>
  suffix?: Maybe<Scalars['String']>
  telephone?: Maybe<Scalars['String']>
  vat_id?: Maybe<Scalars['String']>
}

export type SalesCommentItem = {
  __typename?: 'SalesCommentItem'
  message: Scalars['String']
  timestamp: Scalars['String']
}

export type CreditMemo = {
  __typename?: 'CreditMemo'
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>
  number: Scalars['String']
  total?: Maybe<CreditMemoTotal>
}

export type CreditMemoItemInterface = {
  discounts?: Maybe<Array<Maybe<Discount>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_refunded?: Maybe<Scalars['Float']>
}

export type OrderItemInterface = {
  discounts?: Maybe<Array<Maybe<Discount>>>
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>
  id: Scalars['ID']
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  product_type?: Maybe<Scalars['String']>
  product_url_key?: Maybe<Scalars['String']>
  quantity_canceled?: Maybe<Scalars['Float']>
  quantity_invoiced?: Maybe<Scalars['Float']>
  quantity_ordered?: Maybe<Scalars['Float']>
  quantity_refunded?: Maybe<Scalars['Float']>
  quantity_returned?: Maybe<Scalars['Float']>
  quantity_shipped?: Maybe<Scalars['Float']>
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>
  status?: Maybe<Scalars['String']>
}

export type OrderItemOption = {
  __typename?: 'OrderItemOption'
  label: Scalars['String']
  value: Scalars['String']
}

export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal'
  adjustment: Money
  base_grand_total: Money
  discounts?: Maybe<Array<Maybe<Discount>>>
  grand_total: Money
  shipping_handling?: Maybe<ShippingHandling>
  subtotal: Money
  taxes?: Maybe<Array<Maybe<TaxItem>>>
  total_shipping: Money
  total_tax: Money
}

export type ShippingHandling = {
  __typename?: 'ShippingHandling'
  amount_excluding_tax?: Maybe<Money>
  amount_including_tax?: Maybe<Money>
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>
  taxes?: Maybe<Array<Maybe<TaxItem>>>
  total_amount: Money
}

export type ShippingDiscount = {
  __typename?: 'ShippingDiscount'
  amount: Money
}

export type TaxItem = {
  __typename?: 'TaxItem'
  amount: Money
  rate: Scalars['Float']
  title: Scalars['String']
}

export type Invoice = {
  __typename?: 'Invoice'
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>
  number: Scalars['String']
  total?: Maybe<InvoiceTotal>
}

export type InvoiceItemInterface = {
  discounts?: Maybe<Array<Maybe<Discount>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_invoiced?: Maybe<Scalars['Float']>
}

export type InvoiceTotal = {
  __typename?: 'InvoiceTotal'
  base_grand_total: Money
  discounts?: Maybe<Array<Maybe<Discount>>>
  grand_total: Money
  shipping_handling?: Maybe<ShippingHandling>
  subtotal: Money
  taxes?: Maybe<Array<Maybe<TaxItem>>>
  total_shipping: Money
  total_tax: Money
}

export type MpDeliveryInformationOutput = {
  __typename?: 'MpDeliveryInformationOutput'
  mp_delivery_comment?: Maybe<Scalars['String']>
  mp_delivery_date?: Maybe<Scalars['String']>
  mp_delivery_time?: Maybe<Scalars['String']>
  mp_house_security_code?: Maybe<Scalars['String']>
}

export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod'
  additional_data?: Maybe<Array<Maybe<KeyValue>>>
  name: Scalars['String']
  type: Scalars['String']
}

export type KeyValue = {
  __typename?: 'KeyValue'
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type OrderShipment = {
  __typename?: 'OrderShipment'
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>
  number: Scalars['String']
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>
}

export type ShipmentItemInterface = {
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_shipped: Scalars['Float']
}

export type ShipmentTracking = {
  __typename?: 'ShipmentTracking'
  carrier: Scalars['String']
  number?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type OrderTotal = {
  __typename?: 'OrderTotal'
  base_grand_total: Money
  discounts?: Maybe<Array<Maybe<Discount>>>
  grand_total: Money
  shipping_handling?: Maybe<ShippingHandling>
  subtotal: Money
  taxes?: Maybe<Array<Maybe<TaxItem>>>
  total_shipping: Money
  total_tax: Money
}

export type Wishlist = {
  __typename?: 'Wishlist'
  id?: Maybe<Scalars['ID']>
  /** @deprecated Use the `items_v2` field instead. */
  items?: Maybe<Array<Maybe<WishlistItem>>>
  items_count?: Maybe<Scalars['Int']>
  items_v2?: Maybe<WishlistItems>
  sharing_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['String']>
}

export type WishlistItems_V2Args = {
  currentPage?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

export type WishlistItem = {
  __typename?: 'WishlistItem'
  added_at?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  product?: Maybe<ProductInterface>
  qty?: Maybe<Scalars['Float']>
}

export type WishlistItems = {
  __typename?: 'WishlistItems'
  items: Array<Maybe<WishlistItemInterface>>
  page_info?: Maybe<SearchResultPageInfo>
}

export type WishlistItemInterface = {
  added_at: Scalars['String']
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  product?: Maybe<ProductInterface>
  quantity: Scalars['Float']
}

export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption'
  customizable_option_uid: Scalars['ID']
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int']
  is_required: Scalars['Boolean']
  label: Scalars['String']
  sort_order: Scalars['Int']
  type: Scalars['String']
  values: Array<Maybe<SelectedCustomizableOptionValue>>
}

export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue'
  customizable_option_value_uid: Scalars['ID']
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int']
  label: Scalars['String']
  price: CartItemSelectedOptionValuePrice
  value: Scalars['String']
}

export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice'
  type: PriceTypeEnum
  units: Scalars['String']
  value: Scalars['Float']
}

export enum PriceTypeEnum {
  Fixed = 'FIXED',
  Percent = 'PERCENT',
  Dynamic = 'DYNAMIC',
}

export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts'
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>
}

export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct'
  date?: Maybe<Scalars['String']>
  download_url?: Maybe<Scalars['String']>
  order_increment_id?: Maybe<Scalars['String']>
  remaining_downloads?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens'
  items: Array<Maybe<PaymentToken>>
}

export type PaymentToken = {
  __typename?: 'PaymentToken'
  details?: Maybe<Scalars['String']>
  payment_method_code: Scalars['String']
  public_hash: Scalars['String']
  type: PaymentTokenTypeEnum
}

export enum PaymentTokenTypeEnum {
  Card = 'card',
  Account = 'account',
}

export type DeliveryInformation = {
  __typename?: 'DeliveryInformation'
  deliveryDateFormat?: Maybe<Scalars['String']>
  deliveryDateOff?: Maybe<Array<Maybe<Scalars['String']>>>
  deliveryDaysOff?: Maybe<Array<Maybe<Scalars['String']>>>
  deliveryTime?: Maybe<Array<Maybe<Scalars['String']>>>
  isEnabledDeliveryComment?: Maybe<Scalars['String']>
  isEnabledDeliveryTime?: Maybe<Scalars['String']>
  isEnabledHouseSecurityCode?: Maybe<Scalars['String']>
}

export type HostedProUrlInput = {
  cart_id: Scalars['String']
}

export type HostedProUrl = {
  __typename?: 'HostedProUrl'
  secure_form_url?: Maybe<Scalars['String']>
}

export type PayflowLinkTokenInput = {
  cart_id: Scalars['String']
}

export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken'
  mode?: Maybe<PayflowLinkMode>
  paypal_url?: Maybe<Scalars['String']>
  secure_token?: Maybe<Scalars['String']>
  secure_token_id?: Maybe<Scalars['String']>
}

export enum PayflowLinkMode {
  Test = 'TEST',
  Live = 'LIVE',
}

export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput'
  is_email_available?: Maybe<Scalars['Boolean']>
}

export type GetMpQuoteOutput = {
  __typename?: 'GetMpQuoteOutput'
  quote: Quote
}

export type Quote = {
  __typename?: 'Quote'
  base_currency_code?: Maybe<Scalars['String']>
  base_subtotal?: Maybe<Scalars['Float']>
  created_at?: Maybe<Scalars['String']>
  customer_email?: Maybe<Scalars['String']>
  customer_group_id?: Maybe<Scalars['Int']>
  customer_id?: Maybe<Scalars['Int']>
  discount?: Maybe<Scalars['String']>
  entity_id?: Maybe<Scalars['Int']>
  expired_at?: Maybe<Scalars['String']>
  is_active?: Maybe<Scalars['Boolean']>
  is_sent_reminder?: Maybe<Scalars['Boolean']>
  items?: Maybe<Array<Maybe<QuoteItemInterface>>>
  items_count?: Maybe<Scalars['String']>
  items_qty?: Maybe<Scalars['String']>
  quote_currency_code?: Maybe<Scalars['String']>
  remote_ip?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  store_id?: Maybe<Scalars['Int']>
  subtotal?: Maybe<Scalars['Float']>
  updated_at?: Maybe<Scalars['String']>
}

export type QuoteItemInterface = {
  calculation_price?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['String']>
  id: Scalars['String']
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  qty: Scalars['Float']
  quote_id?: Maybe<Scalars['Int']>
  request_price?: Maybe<Scalars['String']>
  sku?: Maybe<Scalars['String']>
}

export type MpQuoteConfigOutput = {
  __typename?: 'mpQuoteConfigOutput'
  allow_category?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  customer_groups?: Maybe<Scalars['String']>
  file_type?: Maybe<Scalars['String']>
  icon_url?: Maybe<Scalars['String']>
  is_allow_attach?: Maybe<Scalars['Boolean']>
  is_allow_guest?: Maybe<Scalars['Boolean']>
  redirect_page?: Maybe<Scalars['String']>
}

export type MpQuoteConversationFilterInput = {
  author_name?: Maybe<FilterTypeInput>
  content?: Maybe<FilterTypeInput>
  created_at?: Maybe<FilterTypeInput>
  quote_id?: Maybe<FilterTypeInput>
  reply_id?: Maybe<FilterTypeInput>
  type?: Maybe<FilterTypeInput>
}

export type FilterTypeInput = {
  eq?: Maybe<Scalars['String']>
  finset?: Maybe<Array<Maybe<Scalars['String']>>>
  from?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gteq?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  like?: Maybe<Scalars['String']>
  lt?: Maybe<Scalars['String']>
  lteq?: Maybe<Scalars['String']>
  moreq?: Maybe<Scalars['String']>
  neq?: Maybe<Scalars['String']>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  notnull?: Maybe<Scalars['String']>
  null?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
}

export type MpQuoteConversationSortInput = {
  author_name?: Maybe<SortEnum>
  created_at?: Maybe<SortEnum>
  quote_id?: Maybe<SortEnum>
  reply_id?: Maybe<SortEnum>
  type?: Maybe<SortEnum>
}

export type MpQuoteConversationOutput = {
  __typename?: 'mpQuoteConversationOutput'
  items?: Maybe<Array<Maybe<MpQuoteConversation>>>
  page_info?: Maybe<SearchResultPageInfo>
  total_count?: Maybe<Scalars['Int']>
}

export type MpQuoteConversation = {
  __typename?: 'MpQuoteConversation'
  author_name?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['String']>
  files?: Maybe<Scalars['String']>
  is_customer_notified?: Maybe<Scalars['Int']>
  quote_id?: Maybe<Scalars['Int']>
  reply_id?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['Int']>
}

export type MpQuoteFilterInput = {
  base_subtotal?: Maybe<FilterTypeInput>
  created_at?: Maybe<FilterTypeInput>
  entity_id?: Maybe<FilterTypeInput>
  expired_at?: Maybe<FilterTypeInput>
  is_active?: Maybe<FilterTypeInput>
  items_count?: Maybe<FilterTypeInput>
  items_qty?: Maybe<FilterTypeInput>
  remote_ip?: Maybe<FilterTypeInput>
  status?: Maybe<FilterTypeInput>
  store_id?: Maybe<FilterTypeInput>
  subtotal?: Maybe<FilterTypeInput>
  updated_at?: Maybe<FilterTypeInput>
}

export type MpQuoteListOutput = {
  __typename?: 'MpQuoteListOutput'
  items?: Maybe<Array<Maybe<Quote>>>
  page_info?: Maybe<SearchResultPageInfo>
  total_count?: Maybe<Scalars['Int']>
}

export type MpSaveCartConfigsOutput = {
  __typename?: 'MpSaveCartConfigsOutput'
  allow_share?: Maybe<Scalars['Int']>
  button_title?: Maybe<Scalars['String']>
  enabled?: Maybe<Scalars['Int']>
  icon?: Maybe<Scalars['String']>
  icon_url?: Maybe<Scalars['String']>
  page_link_area?: Maybe<Scalars['String']>
  show_button_guest?: Maybe<Scalars['Int']>
}

export type MpCartsFilterInput = {
  cart_id?: Maybe<FilterTypeInput>
  cart_name?: Maybe<FilterTypeInput>
  created_at?: Maybe<FilterTypeInput>
  customer_id?: Maybe<FilterTypeInput>
  description?: Maybe<FilterTypeInput>
  store_id?: Maybe<FilterTypeInput>
  updated_at?: Maybe<FilterTypeInput>
}

export type MpGetCartsOutput = {
  __typename?: 'MpGetCartsOutput'
  items?: Maybe<Array<Maybe<MpCartsOutput>>>
  page_info?: Maybe<SearchResultPageInfo>
  total_count?: Maybe<Scalars['Int']>
}

export type MpCartsOutput = {
  __typename?: 'MpCartsOutput'
  cart_id?: Maybe<Scalars['Int']>
  cart_name?: Maybe<Scalars['String']>
  cart_total?: Maybe<Money>
  created_at?: Maybe<Scalars['String']>
  customer_id?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  items?: Maybe<Array<Maybe<CartItemsOutput>>>
  share_url?: Maybe<Scalars['String']>
  store_id?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

export type CartItemsOutput = {
  __typename?: 'CartItemsOutput'
  cart_id?: Maybe<Scalars['String']>
  cart_item_id?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  product_id?: Maybe<Scalars['String']>
  product_name?: Maybe<Scalars['String']>
  qty?: Maybe<Scalars['Int']>
  sku?: Maybe<Scalars['String']>
  store_id?: Maybe<Scalars['Int']>
  subtotal_converted?: Maybe<Scalars['String']>
}

export type MpProductsFilterInput = {
  created_at?: Maybe<FilterTypeInput>
  customer_id?: Maybe<FilterTypeInput>
  id?: Maybe<FilterTypeInput>
  product_id?: Maybe<FilterTypeInput>
  qty?: Maybe<FilterTypeInput>
  store_id?: Maybe<FilterTypeInput>
  updated_at?: Maybe<FilterTypeInput>
}

export type MpGetProductsOutput = {
  __typename?: 'MpGetProductsOutput'
  items?: Maybe<Array<Maybe<MpProductsOutput>>>
  total_count?: Maybe<Scalars['Int']>
}

export type MpProductsOutput = {
  __typename?: 'MpProductsOutput'
  created_at?: Maybe<Scalars['String']>
  customer_id?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  image_url?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  product_id?: Maybe<Scalars['Int']>
  product_name?: Maybe<Scalars['String']>
  share_url?: Maybe<Scalars['String']>
  store_id?: Maybe<Scalars['Int']>
  subtotal_converted?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

export type MpFilters = {
  from: Scalars['String']
  period_type?: Maybe<Scalars['String']>
  show_empty_rows?: Maybe<Scalars['Boolean']>
  store_id?: Maybe<Scalars['Int']>
  to: Scalars['String']
}

export type SmtpBestsellersOutput = {
  __typename?: 'SmtpBestsellersOutput'
  mpBestsellers?: Maybe<Array<Maybe<BestsellersProductOutput>>>
}

export type BestsellersProductOutput = {
  __typename?: 'BestsellersProductOutput'
  currency?: Maybe<Scalars['String']>
  period?: Maybe<Scalars['String']>
  product_id?: Maybe<Scalars['String']>
  product_image_url?: Maybe<Scalars['String']>
  product_name?: Maybe<Scalars['String']>
  product_price?: Maybe<Scalars['String']>
  product_sku?: Maybe<Scalars['String']>
  product_url?: Maybe<Scalars['String']>
  qty_ordered?: Maybe<Scalars['Int']>
}

export type AreaInput = {
  radius: Scalars['Int']
  search_term: Scalars['String']
}

export type PickupLocationFilterInput = {
  city?: Maybe<FilterTypeInput>
  country_id?: Maybe<FilterTypeInput>
  name?: Maybe<FilterTypeInput>
  pickup_location_code?: Maybe<FilterTypeInput>
  postcode?: Maybe<FilterTypeInput>
  region?: Maybe<FilterTypeInput>
  region_id?: Maybe<FilterTypeInput>
  street?: Maybe<FilterTypeInput>
}

export type PickupLocationSortInput = {
  city?: Maybe<SortEnum>
  contact_name?: Maybe<SortEnum>
  country_id?: Maybe<SortEnum>
  description?: Maybe<SortEnum>
  distance?: Maybe<SortEnum>
  email?: Maybe<SortEnum>
  fax?: Maybe<SortEnum>
  latitude?: Maybe<SortEnum>
  longitude?: Maybe<SortEnum>
  name?: Maybe<SortEnum>
  phone?: Maybe<SortEnum>
  pickup_location_code?: Maybe<SortEnum>
  postcode?: Maybe<SortEnum>
  region?: Maybe<SortEnum>
  region_id?: Maybe<SortEnum>
  street?: Maybe<SortEnum>
}

export type ProductInfoInput = {
  sku: Scalars['String']
}

export type PickupLocations = {
  __typename?: 'PickupLocations'
  items?: Maybe<Array<Maybe<PickupLocation>>>
  page_info?: Maybe<SearchResultPageInfo>
  total_count?: Maybe<Scalars['Int']>
}

export type PickupLocation = {
  __typename?: 'PickupLocation'
  city?: Maybe<Scalars['String']>
  contact_name?: Maybe<Scalars['String']>
  country_id?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  pickup_location_code?: Maybe<Scalars['String']>
  postcode?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  region_id?: Maybe<Scalars['Int']>
  street?: Maybe<Scalars['String']>
}

export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata'
  items: Array<Maybe<ProductReviewRatingMetadata>>
}

export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata'
  id: Scalars['String']
  name: Scalars['String']
  values: Array<Maybe<ProductReviewRatingValueMetadata>>
}

export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata'
  value: Scalars['String']
  value_id: Scalars['String']
}

export type ProductAttributeFilterInput = {
  category_id?: Maybe<FilterEqualTypeInput>
  category_uid?: Maybe<FilterEqualTypeInput>
  color_asiento?: Maybe<FilterEqualTypeInput>
  color_carcasa_tejido?: Maybe<FilterEqualTypeInput>
  color_estructura?: Maybe<FilterEqualTypeInput>
  color_tablero?: Maybe<FilterEqualTypeInput>
  color_tejido?: Maybe<FilterEqualTypeInput>
  created_at?: Maybe<FilterTypeInput>
  description?: Maybe<FilterMatchTypeInput>
  fashion_color?: Maybe<FilterEqualTypeInput>
  fashion_material?: Maybe<FilterEqualTypeInput>
  fashion_size?: Maybe<FilterEqualTypeInput>
  fashion_style?: Maybe<FilterEqualTypeInput>
  forma?: Maybe<FilterEqualTypeInput>
  format?: Maybe<FilterEqualTypeInput>
  has_video?: Maybe<FilterEqualTypeInput>
  material_estructura?: Maybe<FilterEqualTypeInput>
  medida_comercial?: Maybe<FilterEqualTypeInput>
  name?: Maybe<FilterMatchTypeInput>
  news_from_date?: Maybe<FilterTypeInput>
  news_to_date?: Maybe<FilterTypeInput>
  short_description?: Maybe<FilterMatchTypeInput>
  sku?: Maybe<FilterEqualTypeInput>
  url_key?: Maybe<FilterEqualTypeInput>
}

export type Products = {
  __typename?: 'Products'
  aggregations?: Maybe<Array<Maybe<Aggregation>>>
  /** @deprecated Use `aggregations` instead. */
  filters?: Maybe<Array<Maybe<LayerFilter>>>
  items?: Maybe<Array<Maybe<ProductInterface>>>
  page_info?: Maybe<SearchResultPageInfo>
  sort_fields?: Maybe<SortFields>
  suggestions?: Maybe<Array<Maybe<SearchSuggestion>>>
  total_count?: Maybe<Scalars['Int']>
}

export type ProductsAggregationsArgs = {
  filter?: Maybe<AggregationsFilterInput>
}

export type AggregationsFilterInput = {
  category?: Maybe<AggregationsCategoryFilterInput>
}

export type AggregationsCategoryFilterInput = {
  includeDirectChildrenOnly?: Maybe<Scalars['Boolean']>
}

export type Aggregation = {
  __typename?: 'Aggregation'
  attribute_code: Scalars['String']
  count?: Maybe<Scalars['Int']>
  label?: Maybe<Scalars['String']>
  options?: Maybe<Array<Maybe<AggregationOption>>>
  position?: Maybe<Scalars['Int']>
}

export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption'
  count?: Maybe<Scalars['Int']>
  label?: Maybe<Scalars['String']>
  value: Scalars['String']
}

export type AggregationOptionInterface = {
  count?: Maybe<Scalars['Int']>
  label?: Maybe<Scalars['String']>
  value: Scalars['String']
}

export type LayerFilter = {
  __typename?: 'LayerFilter'
  /** @deprecated Use `Aggregation.options` instead. */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>
  /** @deprecated Use `Aggregation.count` instead. */
  filter_items_count?: Maybe<Scalars['Int']>
  /** @deprecated Use `Aggregation.label` instead. */
  name?: Maybe<Scalars['String']>
  /** @deprecated Use `Aggregation.attribute_code` instead. */
  request_var?: Maybe<Scalars['String']>
}

export type LayerFilterItemInterface = {
  /** @deprecated Use `AggregationOption.count` instead. */
  items_count?: Maybe<Scalars['Int']>
  /** @deprecated Use `AggregationOption.label` instead. */
  label?: Maybe<Scalars['String']>
  /** @deprecated Use `AggregationOption.value` instead. */
  value_string?: Maybe<Scalars['String']>
}

export type SortFields = {
  __typename?: 'SortFields'
  default?: Maybe<Scalars['String']>
  options?: Maybe<Array<Maybe<SortField>>>
}

export type SortField = {
  __typename?: 'SortField'
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type SearchSuggestion = {
  __typename?: 'SearchSuggestion'
  search: Scalars['String']
}

export type ReCaptchaConfigurationV3 = {
  __typename?: 'ReCaptchaConfigurationV3'
  badge_position: Scalars['String']
  failure_message: Scalars['String']
  forms: Array<Maybe<ReCaptchaFormEnum>>
  language_code?: Maybe<Scalars['String']>
  minimum_score: Scalars['Float']
  website_key: Scalars['String']
}

export enum ReCaptchaFormEnum {
  PlaceOrder = 'PLACE_ORDER',
  Contact = 'CONTACT',
  CustomerLogin = 'CUSTOMER_LOGIN',
  CustomerForgotPassword = 'CUSTOMER_FORGOT_PASSWORD',
  CustomerCreate = 'CUSTOMER_CREATE',
  CustomerEdit = 'CUSTOMER_EDIT',
  Newsletter = 'NEWSLETTER',
  ProductReview = 'PRODUCT_REVIEW',
  Sendfriend = 'SENDFRIEND',
  Braintree = 'BRAINTREE',
}

export type EntityUrl = {
  __typename?: 'EntityUrl'
  /** @deprecated Use `relative_url` instead. */
  canonical_url?: Maybe<Scalars['String']>
  entity_uid?: Maybe<Scalars['ID']>
  /** @deprecated Use `entity_uid` instead. */
  id?: Maybe<Scalars['Int']>
  redirectCode?: Maybe<Scalars['Int']>
  relative_url?: Maybe<Scalars['String']>
  type?: Maybe<UrlRewriteEntityTypeEnum>
}

export type WishlistOutput = {
  __typename?: 'WishlistOutput'
  /** @deprecated Use the `Wishlist.items` field instead. */
  items?: Maybe<Array<Maybe<WishlistItem>>>
  /** @deprecated Use the `Wishlist.items_count` field instead. */
  items_count?: Maybe<Scalars['Int']>
  /** @deprecated This field is related to Commerce functionality and is always `null` in Open Source. */
  name?: Maybe<Scalars['String']>
  /** @deprecated Use the `Wishlist.sharing_code` field instead. */
  sharing_code?: Maybe<Scalars['String']>
  /** @deprecated Use the `Wishlist.updated_at` field instead. */
  updated_at?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  MpDeliveryTime?: Maybe<Scalars['Boolean']>
  addAllItemsFromCartToMpQuote?: Maybe<AddAllItemsFromCartToMpQuoteOutput>
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>
  addBundleProductsToMpQuote?: Maybe<AddBundleProductsToQuoteOutput>
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>
  addConfigurableProductsToMpQuote?: Maybe<AddConfigurableProductsToQuoteOutput>
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>
  addDownloadableProductsToMpQuote?: Maybe<AddDownloadableProductsToQuoteOutput>
  addItemFromCartToMpQuote?: Maybe<AddItemFromCartToMpQuoteOutput>
  addItemsBySkuToMpQuote?: Maybe<AddItemsBySkuToMpQuoteOutput>
  addMpQuoteToCart?: Maybe<AddMpQuoteToCartOutput>
  addProductsToCart?: Maybe<AddProductsToCartOutput>
  addProductsToCompareList?: Maybe<CompareList>
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>
  addSimpleProductsToMpQuote?: Maybe<AddSimpleProductsToQuoteOutput>
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>
  addVirtualProductsToMpQuote?: Maybe<AddVirtualProductsToQuoteOutput>
  addWishlistItemsToCart?: Maybe<AddWishlistItemsToCartOutput>
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>
  assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>
  assignCustomerToGuestCart: Cart
  beCustomerSendMail?: Maybe<MessageResult>
  cancelMpQuote?: Maybe<Scalars['Boolean']>
  changeCustomerPassword?: Maybe<Customer>
  contactUs?: Maybe<ContactUsOutput>
  createBraintreeClientToken: Scalars['String']
  createCompareList?: Maybe<CompareList>
  createCustomer?: Maybe<CustomerOutput>
  createCustomerAddress?: Maybe<CustomerAddress>
  createCustomerV2?: Maybe<CustomerOutput>
  createEmptyCart?: Maybe<Scalars['String']>
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>
  createProductReview: CreateProductReviewOutput
  customAttributeQuoteSave?: Maybe<SuccessMessage>
  deleteCompareList?: Maybe<DeleteCompareListOutput>
  deleteCurrentMpQuote?: Maybe<Scalars['Boolean']>
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>
  deleteItemFromMpQuote?: Maybe<DeleteItemFromMpQuoteOutput>
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>
  deleteSubmittedMpQuote?: Maybe<Scalars['Boolean']>
  duplicateMpQuote?: Maybe<DuplicateMpQuoteOutput>
  generateCustomerToken?: Maybe<CustomerToken>
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>
  mergeCarts: Cart
  mpQuoteSubmit?: Maybe<Scalars['Int']>
  mpSaveCart?: Maybe<Scalars['Boolean']>
  mpSaveCartDeleteCart?: Maybe<Scalars['Boolean']>
  mpSaveCartDeleteProduct?: Maybe<Scalars['Boolean']>
  mpSaveCartRestoreCart?: Maybe<Scalars['Boolean']>
  mpSaveCartRestoreProduct?: Maybe<Scalars['Boolean']>
  mpSaveCartSaveItem?: Maybe<Scalars['Boolean']>
  mpSaveCartShareCart?: Maybe<Scalars['Boolean']>
  mpSaveCartShareProduct?: Maybe<Scalars['Boolean']>
  nonCustomerSendMail?: Maybe<MessageResult>
  o_mpSaveCart?: Maybe<Scalars['Boolean']>
  orderIncidencesEmail?: Maybe<EmailResponse>
  placeOrder?: Maybe<PlaceOrderOutput>
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>
  removeProductsFromCompareList?: Maybe<CompareList>
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>
  reorderItems?: Maybe<ReorderItemsOutput>
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']>
  resetPassword?: Maybe<Scalars['Boolean']>
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>
  saveMpQuoteReply?: Maybe<Scalars['Boolean']>
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>
  /** @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request. */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>
  updateCartItems?: Maybe<UpdateCartItemsOutput>
  updateCustomer?: Maybe<CustomerOutput>
  updateCustomerAddress?: Maybe<CustomerAddress>
  updateCustomerEmail?: Maybe<CustomerOutput>
  updateCustomerV2?: Maybe<CustomerOutput>
  updateMpQuote?: Maybe<UpdateMpQuoteOutput>
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>
}

export type MutationMpDeliveryTimeArgs = {
  cart_id: Scalars['String']
  mp_delivery_time?: Maybe<DeliveryTimeInput>
}

export type MutationAddBundleProductsToCartArgs = {
  input?: Maybe<AddBundleProductsToCartInput>
}

export type MutationAddBundleProductsToMpQuoteArgs = {
  input?: Maybe<AddBundleProductsToQuoteInput>
}

export type MutationAddConfigurableProductsToCartArgs = {
  input?: Maybe<AddConfigurableProductsToCartInput>
}

export type MutationAddConfigurableProductsToMpQuoteArgs = {
  input?: Maybe<AddConfigurableProductsToQuoteInput>
}

export type MutationAddDownloadableProductsToCartArgs = {
  input?: Maybe<AddDownloadableProductsToCartInput>
}

export type MutationAddDownloadableProductsToMpQuoteArgs = {
  input?: Maybe<AddDownloadableProductsToQuoteInput>
}

export type MutationAddItemFromCartToMpQuoteArgs = {
  cart_item_id: Scalars['String']
}

export type MutationAddItemsBySkuToMpQuoteArgs = {
  input?: Maybe<AddItemsBySkuToMpQuoteInput>
}

export type MutationAddMpQuoteToCartArgs = {
  quote_id: Scalars['Int']
}

export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String']
  cartItems: Array<CartItemInput>
}

export type MutationAddProductsToCompareListArgs = {
  input?: Maybe<AddProductsToCompareListInput>
}

export type MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID']
  wishlistItems: Array<WishlistItemInput>
}

export type MutationAddSimpleProductsToCartArgs = {
  input?: Maybe<AddSimpleProductsToCartInput>
}

export type MutationAddSimpleProductsToMpQuoteArgs = {
  input?: Maybe<AddSimpleProductsToQuoteInput>
}

export type MutationAddVirtualProductsToCartArgs = {
  input?: Maybe<AddVirtualProductsToCartInput>
}

export type MutationAddVirtualProductsToMpQuoteArgs = {
  input?: Maybe<AddVirtualProductsToQuoteInput>
}

export type MutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID']
  wishlistItemIds?: Maybe<Array<Scalars['ID']>>
}

export type MutationApplyCouponToCartArgs = {
  input?: Maybe<ApplyCouponToCartInput>
}

export type MutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID']
}

export type MutationAssignCustomerToGuestCartArgs = {
  cart_id: Scalars['String']
}

export type MutationBeCustomerSendMailArgs = {
  email: Scalars['String']
  nif: Scalars['String']
  no_of_client: Scalars['Int']
}

export type MutationCancelMpQuoteArgs = {
  quote_id: Scalars['Int']
}

export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
}

export type MutationContactUsArgs = {
  input: ContactUsInput
}

export type MutationCreateCompareListArgs = {
  input?: Maybe<CreateCompareListInput>
}

export type MutationCreateCustomerArgs = {
  input: CustomerInput
}

export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput
}

export type MutationCreateCustomerV2Args = {
  input: CustomerCreateInput
}

export type MutationCreateEmptyCartArgs = {
  input?: Maybe<CreateEmptyCartInput>
}

export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput
}

export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput
}

export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput
}

export type MutationCustomAttributeQuoteSaveArgs = {
  masked_id: Scalars['String']
  comment?: Maybe<Scalars['String']>
  external_order_number?: Maybe<Scalars['String']>
}

export type MutationDeleteCompareListArgs = {
  uid: Scalars['ID']
}

export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int']
}

export type MutationDeleteItemFromMpQuoteArgs = {
  item_id: Scalars['Int']
}

export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String']
}

export type MutationDeleteSubmittedMpQuoteArgs = {
  quote_id: Scalars['Int']
}

export type MutationDuplicateMpQuoteArgs = {
  quote_id: Scalars['Int']
}

export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationGenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput
}

export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput
}

export type MutationMergeCartsArgs = {
  source_cart_id: Scalars['String']
  destination_cart_id?: Maybe<Scalars['String']>
}

export type MutationMpSaveCartArgs = {
  cart_id: Scalars['Int']
  cart_name: Scalars['String']
  description?: Maybe<Scalars['String']>
}

export type MutationMpSaveCartDeleteCartArgs = {
  token: Scalars['String']
}

export type MutationMpSaveCartDeleteProductArgs = {
  token: Scalars['String']
}

export type MutationMpSaveCartRestoreCartArgs = {
  cart_id: Scalars['String']
  token: Scalars['String']
}

export type MutationMpSaveCartRestoreProductArgs = {
  cart_id: Scalars['String']
  token: Scalars['String']
}

export type MutationMpSaveCartSaveItemArgs = {
  cart_id: Scalars['Int']
  item_id: Scalars['Int']
}

export type MutationMpSaveCartShareCartArgs = {
  cart_id: Scalars['String']
  token: Scalars['String']
}

export type MutationMpSaveCartShareProductArgs = {
  cart_id: Scalars['String']
  token: Scalars['String']
}

export type MutationNonCustomerSendMailArgs = {
  email: Scalars['String']
  name: Scalars['String']
  nif: Scalars['String']
  address1: Scalars['String']
  address2: Scalars['String']
  postal_code: Scalars['String']
  population: Scalars['Int']
  province: Scalars['String']
  country: Scalars['String']
  contact_name: Scalars['String']
  phone_number: Scalars['String']
}

export type MutationO_MpSaveCartArgs = {
  cart_id: Scalars['String']
  cart_name: Scalars['String']
  description?: Maybe<Scalars['String']>
}

export type MutationOrderIncidencesEmailArgs = {
  input?: Maybe<OrderIncidencesEmailInput>
}

export type MutationPlaceOrderArgs = {
  input?: Maybe<PlaceOrderInput>
}

export type MutationRemoveCouponFromCartArgs = {
  input?: Maybe<RemoveCouponFromCartInput>
}

export type MutationRemoveItemFromCartArgs = {
  input?: Maybe<RemoveItemFromCartInput>
}

export type MutationRemoveProductsFromCompareListArgs = {
  input?: Maybe<RemoveProductsFromCompareListInput>
}

export type MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID']
  wishlistItemsIds: Array<Scalars['ID']>
}

export type MutationReorderItemsArgs = {
  orderNumber: Scalars['String']
}

export type MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  email: Scalars['String']
  resetPasswordToken: Scalars['String']
  newPassword: Scalars['String']
}

export type MutationSaveMpQuoteReplyArgs = {
  quote_id?: Maybe<Scalars['Int']>
  content?: Maybe<Scalars['String']>
  files?: Maybe<Array<Maybe<MpQuoteReplyFileInput>>>
}

export type MutationSendEmailToFriendArgs = {
  input?: Maybe<SendEmailToFriendInput>
}

export type MutationSetBillingAddressOnCartArgs = {
  input?: Maybe<SetBillingAddressOnCartInput>
}

export type MutationSetGuestEmailOnCartArgs = {
  input?: Maybe<SetGuestEmailOnCartInput>
}

export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: Maybe<SetPaymentMethodAndPlaceOrderInput>
}

export type MutationSetPaymentMethodOnCartArgs = {
  input?: Maybe<SetPaymentMethodOnCartInput>
}

export type MutationSetShippingAddressesOnCartArgs = {
  input?: Maybe<SetShippingAddressesOnCartInput>
}

export type MutationSetShippingMethodsOnCartArgs = {
  input?: Maybe<SetShippingMethodsOnCartInput>
}

export type MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String']
}

export type MutationUpdateCartItemsArgs = {
  input?: Maybe<UpdateCartItemsInput>
}

export type MutationUpdateCustomerArgs = {
  input: CustomerInput
}

export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int']
  input?: Maybe<CustomerAddressInput>
}

export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationUpdateCustomerV2Args = {
  input: CustomerUpdateInput
}

export type MutationUpdateMpQuoteArgs = {
  input: UpdateMpQuoteInput
}

export type MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID']
  wishlistItems: Array<WishlistItemUpdateInput>
}

export type DeliveryTimeInput = {
  mp_delivery_comment?: Maybe<Scalars['String']>
  mp_delivery_date?: Maybe<Scalars['String']>
  mp_delivery_time?: Maybe<Scalars['String']>
  mp_house_security_code?: Maybe<Scalars['String']>
}

export type AddAllItemsFromCartToMpQuoteOutput = {
  __typename?: 'AddAllItemsFromCartToMpQuoteOutput'
  quote: Quote
}

export type AddBundleProductsToCartInput = {
  cart_id: Scalars['String']
  cart_items: Array<Maybe<BundleProductCartItemInput>>
}

export type BundleProductCartItemInput = {
  bundle_options: Array<Maybe<BundleOptionInput>>
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>
  data: CartItemInput
}

export type BundleOptionInput = {
  id: Scalars['Int']
  quantity: Scalars['Float']
  value: Array<Maybe<Scalars['String']>>
}

export type CustomizableOptionInput = {
  id?: Maybe<Scalars['Int']>
  value_string: Scalars['String']
}

export type CartItemInput = {
  entered_options?: Maybe<Array<Maybe<EnteredOptionInput>>>
  parent_sku?: Maybe<Scalars['String']>
  quantity: Scalars['Float']
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>
  sku: Scalars['String']
}

export type EnteredOptionInput = {
  uid: Scalars['ID']
  value: Scalars['String']
}

export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput'
  cart: Cart
}

export type AddBundleProductsToQuoteInput = {
  cart_items: Array<Maybe<BundleProductCartItemInput>>
}

export type AddBundleProductsToQuoteOutput = {
  __typename?: 'AddBundleProductsToQuoteOutput'
  quote: Quote
}

export type AddConfigurableProductsToCartInput = {
  cart_id: Scalars['String']
  cart_items: Array<Maybe<ConfigurableProductCartItemInput>>
}

export type ConfigurableProductCartItemInput = {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>
  data: CartItemInput
  parent_sku?: Maybe<Scalars['String']>
  variant_sku?: Maybe<Scalars['String']>
}

export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput'
  cart: Cart
}

export type AddConfigurableProductsToQuoteInput = {
  cart_items: Array<Maybe<ConfigurableProductCartItemInput>>
}

export type AddConfigurableProductsToQuoteOutput = {
  __typename?: 'AddConfigurableProductsToQuoteOutput'
  quote: Quote
}

export type AddDownloadableProductsToCartInput = {
  cart_id: Scalars['String']
  cart_items: Array<Maybe<DownloadableProductCartItemInput>>
}

export type DownloadableProductCartItemInput = {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>
  data: CartItemInput
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinksInput>>>
}

export type DownloadableProductLinksInput = {
  link_id: Scalars['Int']
}

export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput'
  cart: Cart
}

export type AddDownloadableProductsToQuoteInput = {
  cart_items: Array<Maybe<DownloadableProductCartItemInput>>
}

export type AddDownloadableProductsToQuoteOutput = {
  __typename?: 'AddDownloadableProductsToQuoteOutput'
  quote: Quote
}

export type AddItemFromCartToMpQuoteOutput = {
  __typename?: 'AddItemFromCartToMpQuoteOutput'
  quote: Quote
}

export type AddItemsBySkuToMpQuoteInput = {
  qty?: Maybe<Scalars['Int']>
  skus: Array<Maybe<Scalars['String']>>
}

export type AddItemsBySkuToMpQuoteOutput = {
  __typename?: 'AddItemsBySkuToMpQuoteOutput'
  quote: Quote
}

export type AddMpQuoteToCartOutput = {
  __typename?: 'AddMpQuoteToCartOutput'
  cart: Cart
}

export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput'
  cart: Cart
  user_errors: Array<Maybe<CartUserInputError>>
}

export type CartUserInputError = {
  __typename?: 'CartUserInputError'
  code: CartUserInputErrorType
  message: Scalars['String']
}

export enum CartUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  NotSalable = 'NOT_SALABLE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Undefined = 'UNDEFINED',
}

export type AddProductsToCompareListInput = {
  products: Array<Maybe<Scalars['ID']>>
  uid: Scalars['ID']
}

export type WishlistItemInput = {
  entered_options?: Maybe<Array<Maybe<EnteredOptionInput>>>
  parent_sku?: Maybe<Scalars['String']>
  quantity: Scalars['Float']
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>
  sku: Scalars['String']
}

export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput'
  user_errors: Array<Maybe<WishListUserInputError>>
  wishlist: Wishlist
}

export type WishListUserInputError = {
  __typename?: 'WishListUserInputError'
  code: WishListUserInputErrorType
  message: Scalars['String']
}

export enum WishListUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED',
}

export type AddSimpleProductsToCartInput = {
  cart_id: Scalars['String']
  cart_items: Array<Maybe<SimpleProductCartItemInput>>
}

export type SimpleProductCartItemInput = {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>
  data: CartItemInput
}

export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput'
  cart: Cart
}

export type AddSimpleProductsToQuoteInput = {
  cart_items: Array<Maybe<SimpleProductCartItemInput>>
}

export type AddSimpleProductsToQuoteOutput = {
  __typename?: 'AddSimpleProductsToQuoteOutput'
  quote: Quote
}

export type AddVirtualProductsToCartInput = {
  cart_id: Scalars['String']
  cart_items: Array<Maybe<VirtualProductCartItemInput>>
}

export type VirtualProductCartItemInput = {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>
  data: CartItemInput
}

export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput'
  cart: Cart
}

export type AddVirtualProductsToQuoteInput = {
  cart_items: Array<Maybe<VirtualProductCartItemInput>>
}

export type AddVirtualProductsToQuoteOutput = {
  __typename?: 'AddVirtualProductsToQuoteOutput'
  quote: Quote
}

export type AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput'
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>
  status: Scalars['Boolean']
  wishlist: Wishlist
}

export type WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError'
  code: WishlistCartUserInputErrorType
  message: Scalars['String']
  wishlistId: Scalars['ID']
  wishlistItemId: Scalars['ID']
}

export enum WishlistCartUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  NotSalable = 'NOT_SALABLE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Undefined = 'UNDEFINED',
}

export type ApplyCouponToCartInput = {
  cart_id: Scalars['String']
  coupon_code: Scalars['String']
}

export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput'
  cart: Cart
}

export type AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput'
  compare_list?: Maybe<CompareList>
  result: Scalars['Boolean']
}

export type MessageResult = {
  __typename?: 'messageResult'
  error?: Maybe<Scalars['Boolean']>
  message?: Maybe<Scalars['String']>
}

export type ContactUsInput = {
  comment: Scalars['String']
  email: Scalars['String']
  name: Scalars['String']
  telephone?: Maybe<Scalars['String']>
}

export type ContactUsOutput = {
  __typename?: 'ContactUsOutput'
  status: Scalars['Boolean']
}

export type CreateCompareListInput = {
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type CustomerInput = {
  date_of_birth?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['Int']>
  is_subscribed?: Maybe<Scalars['Boolean']>
  lastname?: Maybe<Scalars['String']>
  middlename?: Maybe<Scalars['String']>
  moodle_id?: Maybe<Scalars['String']>
  moodle_token?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  prefix?: Maybe<Scalars['String']>
  suffix?: Maybe<Scalars['String']>
  taxvat?: Maybe<Scalars['String']>
}

export type CustomerOutput = {
  __typename?: 'CustomerOutput'
  customer: Customer
}

export type CustomerAddressInput = {
  city?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  country_code?: Maybe<CountryCodeEnum>
  country_id?: Maybe<CountryCodeEnum>
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttributeInput>>>
  default_billing?: Maybe<Scalars['Boolean']>
  default_shipping?: Maybe<Scalars['Boolean']>
  fax?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  lastname?: Maybe<Scalars['String']>
  middlename?: Maybe<Scalars['String']>
  postcode?: Maybe<Scalars['String']>
  prefix?: Maybe<Scalars['String']>
  region?: Maybe<CustomerAddressRegionInput>
  street?: Maybe<Array<Maybe<Scalars['String']>>>
  suffix?: Maybe<Scalars['String']>
  telephone?: Maybe<Scalars['String']>
  vat_id?: Maybe<Scalars['String']>
}

export type CustomerAddressAttributeInput = {
  attribute_code: Scalars['String']
  value: Scalars['String']
}

export type CustomerAddressRegionInput = {
  region?: Maybe<Scalars['String']>
  region_code?: Maybe<Scalars['String']>
  region_id?: Maybe<Scalars['Int']>
}

export type CustomerCreateInput = {
  allow_remote_shopping_assistance?: Maybe<Scalars['Boolean']>
  date_of_birth?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstname: Scalars['String']
  gender?: Maybe<Scalars['Int']>
  is_subscribed?: Maybe<Scalars['Boolean']>
  lastname: Scalars['String']
  middlename?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  prefix?: Maybe<Scalars['String']>
  suffix?: Maybe<Scalars['String']>
  taxvat?: Maybe<Scalars['String']>
}

export type CreateEmptyCartInput = {
  cart_id?: Maybe<Scalars['String']>
}

export type PayflowProTokenInput = {
  cart_id: Scalars['String']
  urls: PayflowProUrlInput
}

export type PayflowProUrlInput = {
  cancel_url: Scalars['String']
  error_url: Scalars['String']
  return_url: Scalars['String']
}

export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput'
  response_message: Scalars['String']
  result: Scalars['Int']
  result_code: Scalars['Int']
  secure_token: Scalars['String']
  secure_token_id: Scalars['String']
}

export type PaypalExpressTokenInput = {
  cart_id: Scalars['String']
  code: Scalars['String']
  express_button?: Maybe<Scalars['Boolean']>
  urls: PaypalExpressUrlsInput
  use_paypal_credit?: Maybe<Scalars['Boolean']>
}

export type PaypalExpressUrlsInput = {
  cancel_url: Scalars['String']
  pending_url?: Maybe<Scalars['String']>
  return_url: Scalars['String']
  success_url?: Maybe<Scalars['String']>
}

export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput'
  paypal_urls?: Maybe<PaypalExpressUrlList>
  token?: Maybe<Scalars['String']>
}

export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList'
  edit?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['String']>
}

export type CreateProductReviewInput = {
  nickname: Scalars['String']
  ratings: Array<Maybe<ProductReviewRatingInput>>
  sku: Scalars['String']
  summary: Scalars['String']
  text: Scalars['String']
}

export type ProductReviewRatingInput = {
  id: Scalars['String']
  value_id: Scalars['String']
}

export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput'
  review: ProductReview
}

export type SuccessMessage = {
  __typename?: 'SuccessMessage'
  message?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export type DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput'
  result: Scalars['Boolean']
}

export type DeleteItemFromMpQuoteOutput = {
  __typename?: 'DeleteItemFromMpQuoteOutput'
  quote: Quote
}

export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput'
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>
  result: Scalars['Boolean']
}

export type DuplicateMpQuoteOutput = {
  __typename?: 'DuplicateMpQuoteOutput'
  quote: Quote
}

export type CustomerToken = {
  __typename?: 'CustomerToken'
  token?: Maybe<Scalars['String']>
}

export type GenerateCustomerTokenAsAdminInput = {
  customer_email: Scalars['String']
}

export type GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput'
  customer_token: Scalars['String']
}

export type PayflowProResponseInput = {
  cart_id: Scalars['String']
  paypal_payload: Scalars['String']
}

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput'
  cart: Cart
}

export type OrderIncidencesEmailInput = {
  email: Scalars['String']
  incidences?: Maybe<Array<Maybe<IncidencesData>>>
  name: Scalars['String']
  order_number: Scalars['String']
  phone: Scalars['String']
}

export type IncidencesData = {
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  images?: Maybe<Array<Maybe<IncidencesImage>>>
  reference?: Maybe<Scalars['String']>
  units?: Maybe<Scalars['Int']>
}

export type IncidencesImage = {
  base64?: Maybe<Scalars['String']>
  lastModified?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  webkitRelativePath?: Maybe<Scalars['String']>
}

export type EmailResponse = {
  __typename?: 'EmailResponse'
  message?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['Boolean']>
}

export type PlaceOrderInput = {
  cart_id: Scalars['String']
}

export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput'
  order: Order
}

export type Order = {
  __typename?: 'Order'
  /** @deprecated Use `order_number` instead. */
  order_id?: Maybe<Scalars['String']>
  order_number: Scalars['String']
}

export type RemoveCouponFromCartInput = {
  cart_id: Scalars['String']
}

export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput'
  cart?: Maybe<Cart>
}

export type RemoveItemFromCartInput = {
  cart_id: Scalars['String']
  cart_item_id?: Maybe<Scalars['Int']>
  cart_item_uid?: Maybe<Scalars['ID']>
}

export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput'
  cart: Cart
}

export type RemoveProductsFromCompareListInput = {
  products: Array<Maybe<Scalars['ID']>>
  uid: Scalars['ID']
}

export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput'
  user_errors: Array<Maybe<WishListUserInputError>>
  wishlist: Wishlist
}

export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput'
  cart: Cart
  userInputErrors: Array<Maybe<CheckoutUserInputError>>
}

export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError'
  code: CheckoutUserInputErrorCodes
  message: Scalars['String']
  path: Array<Maybe<Scalars['String']>>
}

export enum CheckoutUserInputErrorCodes {
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  NotSalable = 'NOT_SALABLE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Undefined = 'UNDEFINED',
}

export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput'
  result: Scalars['Boolean']
}

export type MpQuoteReplyFileInput = {
  file?: Maybe<Scalars['String']>
  file_id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type SendEmailToFriendInput = {
  product_id: Scalars['Int']
  recipients: Array<Maybe<SendEmailToFriendRecipientInput>>
  sender: SendEmailToFriendSenderInput
}

export type SendEmailToFriendRecipientInput = {
  email: Scalars['String']
  name: Scalars['String']
}

export type SendEmailToFriendSenderInput = {
  email: Scalars['String']
  message: Scalars['String']
  name: Scalars['String']
}

export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput'
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>
  sender?: Maybe<SendEmailToFriendSender>
}

export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient'
  email: Scalars['String']
  name: Scalars['String']
}

export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender'
  email: Scalars['String']
  message: Scalars['String']
  name: Scalars['String']
}

export type SetBillingAddressOnCartInput = {
  billing_address: BillingAddressInput
  cart_id: Scalars['String']
}

export type BillingAddressInput = {
  address?: Maybe<CartAddressInput>
  customer_address_id?: Maybe<Scalars['Int']>
  same_as_shipping?: Maybe<Scalars['Boolean']>
  use_for_shipping?: Maybe<Scalars['Boolean']>
}

export type CartAddressInput = {
  city: Scalars['String']
  company?: Maybe<Scalars['String']>
  country_code: Scalars['String']
  firstname: Scalars['String']
  lastname: Scalars['String']
  postcode?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  region_id?: Maybe<Scalars['Int']>
  save_in_address_book?: Maybe<Scalars['Boolean']>
  street: Array<Maybe<Scalars['String']>>
  telephone?: Maybe<Scalars['String']>
}

export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput'
  cart: Cart
}

export type SetGuestEmailOnCartInput = {
  cart_id: Scalars['String']
  email: Scalars['String']
}

export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput'
  cart: Cart
}

export type SetPaymentMethodAndPlaceOrderInput = {
  cart_id: Scalars['String']
  payment_method: PaymentMethodInput
}

export type PaymentMethodInput = {
  braintree?: Maybe<BraintreeInput>
  braintree_cc_vault?: Maybe<BraintreeCcVaultInput>
  code: Scalars['String']
  hosted_pro?: Maybe<HostedProInput>
  payflow_express?: Maybe<PayflowExpressInput>
  payflow_link?: Maybe<PayflowLinkInput>
  payflowpro?: Maybe<PayflowProInput>
  payflowpro_cc_vault?: Maybe<VaultTokenInput>
  paypal_express?: Maybe<PaypalExpressInput>
  purchase_order_number?: Maybe<Scalars['String']>
}

export type BraintreeInput = {
  device_data?: Maybe<Scalars['String']>
  is_active_payment_token_enabler: Scalars['Boolean']
  payment_method_nonce: Scalars['String']
}

export type BraintreeCcVaultInput = {
  device_data?: Maybe<Scalars['String']>
  public_hash: Scalars['String']
}

export type HostedProInput = {
  cancel_url: Scalars['String']
  return_url: Scalars['String']
}

export type PayflowExpressInput = {
  payer_id: Scalars['String']
  token: Scalars['String']
}

export type PayflowLinkInput = {
  cancel_url: Scalars['String']
  error_url: Scalars['String']
  return_url: Scalars['String']
}

export type PayflowProInput = {
  cc_details: CreditCardDetailsInput
  is_active_payment_token_enabler?: Maybe<Scalars['Boolean']>
}

export type CreditCardDetailsInput = {
  cc_exp_month: Scalars['Int']
  cc_exp_year: Scalars['Int']
  cc_last_4: Scalars['Int']
  cc_type: Scalars['String']
}

export type VaultTokenInput = {
  public_hash: Scalars['String']
}

export type PaypalExpressInput = {
  payer_id: Scalars['String']
  token: Scalars['String']
}

export type SetPaymentMethodOnCartInput = {
  cart_id: Scalars['String']
  payment_method: PaymentMethodInput
}

export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput'
  cart: Cart
}

export type SetShippingAddressesOnCartInput = {
  cart_id: Scalars['String']
  shipping_addresses: Array<Maybe<ShippingAddressInput>>
}

export type ShippingAddressInput = {
  address?: Maybe<CartAddressInput>
  customer_address_id?: Maybe<Scalars['Int']>
  customer_notes?: Maybe<Scalars['String']>
  pickup_location_code?: Maybe<Scalars['String']>
}

export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput'
  cart: Cart
}

export type SetShippingMethodsOnCartInput = {
  cart_id: Scalars['String']
  shipping_methods: Array<Maybe<ShippingMethodInput>>
}

export type ShippingMethodInput = {
  carrier_code: Scalars['String']
  method_code: Scalars['String']
}

export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput'
  cart: Cart
}

export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput'
  status?: Maybe<SubscriptionStatusesEnum>
}

export enum SubscriptionStatusesEnum {
  NotActive = 'NOT_ACTIVE',
  Subscribed = 'SUBSCRIBED',
  Unsubscribed = 'UNSUBSCRIBED',
  Unconfirmed = 'UNCONFIRMED',
}

export type UpdateCartItemsInput = {
  cart_id: Scalars['String']
  cart_items: Array<Maybe<CartItemUpdateInput>>
}

export type CartItemUpdateInput = {
  cart_item_id?: Maybe<Scalars['Int']>
  cart_item_uid?: Maybe<Scalars['ID']>
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>
  gift_message?: Maybe<GiftMessageInput>
  quantity?: Maybe<Scalars['Float']>
}

export type GiftMessageInput = {
  from: Scalars['String']
  message: Scalars['String']
  to: Scalars['String']
}

export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput'
  cart: Cart
}

export type CustomerUpdateInput = {
  allow_remote_shopping_assistance?: Maybe<Scalars['Boolean']>
  date_of_birth?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['Int']>
  is_subscribed?: Maybe<Scalars['Boolean']>
  lastname?: Maybe<Scalars['String']>
  middlename?: Maybe<Scalars['String']>
  prefix?: Maybe<Scalars['String']>
  suffix?: Maybe<Scalars['String']>
  taxvat?: Maybe<Scalars['String']>
}

export type UpdateMpQuoteInput = {
  items: Array<Maybe<UpdateMpQuoteItemInput>>
  quote_id?: Maybe<Scalars['Int']>
}

export type UpdateMpQuoteItemInput = {
  item_id: Scalars['Int']
  price?: Maybe<Scalars['Float']>
  qty?: Maybe<Scalars['Int']>
}

export type UpdateMpQuoteOutput = {
  __typename?: 'UpdateMpQuoteOutput'
  quote: Quote
}

export type WishlistItemUpdateInput = {
  description?: Maybe<Scalars['String']>
  entered_options?: Maybe<Array<Maybe<EnteredOptionInput>>>
  quantity?: Maybe<Scalars['Float']>
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>
  wishlist_item_id: Scalars['ID']
}

export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput'
  user_errors: Array<Maybe<WishListUserInputError>>
  wishlist: Wishlist
}

export type FilterRangeTypeInput = {
  from?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
}

export enum BatchMutationStatus {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  MixedResults = 'MIXED_RESULTS',
}

export type ErrorInterface = {
  message: Scalars['String']
}

export type NoSuchEntityUidError = ErrorInterface & {
  __typename?: 'NoSuchEntityUidError'
  message: Scalars['String']
  uid: Scalars['ID']
}

export type InternalError = ErrorInterface & {
  __typename?: 'InternalError'
  message: Scalars['String']
}

export type AttributeOptionsInterface = {
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>
}

export type SelectableInputTypeInterface = {
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>
}

export type AttributeOptions = AttributeOptionsInterface & {
  __typename?: 'AttributeOptions'
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>
}

export type UiAttributeTypeSelect = UiInputTypeInterface &
  AttributeOptionsInterface &
  SelectableInputTypeInterface & {
    __typename?: 'UiAttributeTypeSelect'
    attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>
    is_html_allowed?: Maybe<Scalars['Boolean']>
    ui_input_type?: Maybe<UiInputTypeEnum>
  }

export type UiAttributeTypeMultiSelect = UiInputTypeInterface &
  AttributeOptionsInterface &
  SelectableInputTypeInterface & {
    __typename?: 'UiAttributeTypeMultiSelect'
    attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>
    is_html_allowed?: Maybe<Scalars['Boolean']>
    ui_input_type?: Maybe<UiInputTypeEnum>
  }

export type UiAttributeTypeBoolean = UiInputTypeInterface &
  AttributeOptionsInterface &
  SelectableInputTypeInterface & {
    __typename?: 'UiAttributeTypeBoolean'
    attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>
    is_html_allowed?: Maybe<Scalars['Boolean']>
    ui_input_type?: Maybe<UiInputTypeEnum>
  }

export type UiAttributeTypeAny = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeAny'
  is_html_allowed?: Maybe<Scalars['Boolean']>
  ui_input_type?: Maybe<UiInputTypeEnum>
}

export type UiAttributeTypeTextarea = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeTextarea'
  is_html_allowed?: Maybe<Scalars['Boolean']>
  ui_input_type?: Maybe<UiInputTypeEnum>
}

export type UiAttributeTypeTextEditor = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeTextEditor'
  is_html_allowed?: Maybe<Scalars['Boolean']>
  ui_input_type?: Maybe<UiInputTypeEnum>
}

export enum CustomizableDateTypeEnum {
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Time = 'TIME',
}

export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks'
  link_type?: Maybe<Scalars['String']>
  linked_product_sku?: Maybe<Scalars['String']>
  linked_product_type?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  sku?: Maybe<Scalars['String']>
}

export type PhysicalProductInterface = {
  weight?: Maybe<Scalars['Float']>
}

export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  product_sku?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<CustomizableAreaValue>
}

export type CustomizableOptionInterface = {
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue'
  max_characters?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  sku?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  product_sku?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<CustomizableDateValue>
}

export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue'
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  sku?: Maybe<Scalars['String']>
  type?: Maybe<CustomizableDateTypeEnum>
  uid: Scalars['ID']
}

export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>
}

export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue'
  option_type_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  sku?: Maybe<Scalars['String']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>
}

export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue'
  option_type_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  sku?: Maybe<Scalars['String']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  product_sku?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<CustomizableFieldValue>
}

export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue'
  max_characters?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  sku?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  product_sku?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<CustomizableFileValue>
}

export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue'
  file_extension?: Maybe<Scalars['String']>
  image_size_x?: Maybe<Scalars['Int']>
  image_size_y?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  sku?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo'
  disabled?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>
}

export type CustomizableProductInterface = {
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>
}

export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>
}

export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue'
  option_type_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  sku?: Maybe<Scalars['String']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  required?: Maybe<Scalars['Boolean']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>
}

export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue'
  option_type_id?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  sku?: Maybe<Scalars['String']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type VirtualProduct = ProductInterface &
  RoutableInterface &
  CustomizableProductInterface & {
    __typename?: 'VirtualProduct'
    /** @deprecated The field should not be used on the storefront. */
    attribute_set_id?: Maybe<Scalars['Int']>
    canonical_url?: Maybe<Scalars['String']>
    categories?: Maybe<Array<Maybe<CategoryInterface>>>
    color?: Maybe<Scalars['Int']>
    color_asiento?: Maybe<Scalars['Int']>
    color_carcasa_tejido?: Maybe<Scalars['Int']>
    color_estructura?: Maybe<Scalars['Int']>
    color_tablero?: Maybe<Scalars['Int']>
    color_tejido?: Maybe<Scalars['Int']>
    country_of_manufacture?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>
    custom_attributes: Array<Maybe<CustomAttribute>>
    description?: Maybe<ComplexTextValue>
    fashion_color?: Maybe<Scalars['Int']>
    fashion_material?: Maybe<Scalars['String']>
    fashion_size?: Maybe<Scalars['Int']>
    fashion_style?: Maybe<Scalars['String']>
    forma?: Maybe<Scalars['Int']>
    format?: Maybe<Scalars['Int']>
    gift_message_available?: Maybe<Scalars['String']>
    has_video?: Maybe<Scalars['Int']>
    /** @deprecated Use the `uid` field instead. */
    id?: Maybe<Scalars['Int']>
    image?: Maybe<ProductImage>
    manufacturer?: Maybe<Scalars['Int']>
    material_estructura?: Maybe<Scalars['Int']>
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>
    /** @deprecated Use `media_gallery` instead. */
    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>
    medida_comercial?: Maybe<Scalars['Int']>
    meta_description?: Maybe<Scalars['String']>
    meta_keyword?: Maybe<Scalars['String']>
    meta_title?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_from_date?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_to_date?: Maybe<Scalars['String']>
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>
    options_container?: Maybe<Scalars['String']>
    orParentSku?: Maybe<Scalars['String']>
    orParentUrlKey?: Maybe<Scalars['String']>
    /** @deprecated Use `price_range` for product price information. */
    price?: Maybe<ProductPrices>
    price_range: PriceRange
    price_tiers?: Maybe<Array<Maybe<TierPrice>>>
    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>
    rating_summary: Scalars['Float']
    redirect_code: Scalars['Int']
    related_products?: Maybe<Array<Maybe<ProductInterface>>>
    relative_url?: Maybe<Scalars['String']>
    review_count: Scalars['Int']
    reviews: ProductReviews
    short_description?: Maybe<ComplexTextValue>
    sku?: Maybe<Scalars['String']>
    small_image?: Maybe<ProductImage>
    /** @deprecated The field should not be used on the storefront. */
    special_from_date?: Maybe<Scalars['String']>
    special_price?: Maybe<Scalars['Float']>
    special_to_date?: Maybe<Scalars['String']>
    stock_status?: Maybe<ProductStockStatus>
    swatch_image?: Maybe<Scalars['String']>
    thumbnail?: Maybe<ProductImage>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_price?: Maybe<Scalars['Float']>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>
    type?: Maybe<UrlRewriteEntityTypeEnum>
    /** @deprecated Use `__typename` instead. */
    type_id?: Maybe<Scalars['String']>
    uid: Scalars['ID']
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>
    url_suffix?: Maybe<Scalars['String']>
    video_file?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    websites?: Maybe<Array<Maybe<Website>>>
  }

export type VirtualProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type SimpleProduct = ProductInterface &
  RoutableInterface &
  PhysicalProductInterface &
  CustomizableProductInterface & {
    __typename?: 'SimpleProduct'
    /** @deprecated The field should not be used on the storefront. */
    attribute_set_id?: Maybe<Scalars['Int']>
    canonical_url?: Maybe<Scalars['String']>
    categories?: Maybe<Array<Maybe<CategoryInterface>>>
    color?: Maybe<Scalars['Int']>
    color_asiento?: Maybe<Scalars['Int']>
    color_carcasa_tejido?: Maybe<Scalars['Int']>
    color_estructura?: Maybe<Scalars['Int']>
    color_tablero?: Maybe<Scalars['Int']>
    color_tejido?: Maybe<Scalars['Int']>
    country_of_manufacture?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>
    custom_attributes: Array<Maybe<CustomAttribute>>
    description?: Maybe<ComplexTextValue>
    fashion_color?: Maybe<Scalars['Int']>
    fashion_material?: Maybe<Scalars['String']>
    fashion_size?: Maybe<Scalars['Int']>
    fashion_style?: Maybe<Scalars['String']>
    forma?: Maybe<Scalars['Int']>
    format?: Maybe<Scalars['Int']>
    gift_message_available?: Maybe<Scalars['String']>
    has_video?: Maybe<Scalars['Int']>
    /** @deprecated Use the `uid` field instead. */
    id?: Maybe<Scalars['Int']>
    image?: Maybe<ProductImage>
    manufacturer?: Maybe<Scalars['Int']>
    material_estructura?: Maybe<Scalars['Int']>
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>
    /** @deprecated Use `media_gallery` instead. */
    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>
    medida_comercial?: Maybe<Scalars['Int']>
    meta_description?: Maybe<Scalars['String']>
    meta_keyword?: Maybe<Scalars['String']>
    meta_title?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_from_date?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_to_date?: Maybe<Scalars['String']>
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>
    options_container?: Maybe<Scalars['String']>
    orParentSku?: Maybe<Scalars['String']>
    orParentUrlKey?: Maybe<Scalars['String']>
    /** @deprecated Use `price_range` for product price information. */
    price?: Maybe<ProductPrices>
    price_range: PriceRange
    price_tiers?: Maybe<Array<Maybe<TierPrice>>>
    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>
    rating_summary: Scalars['Float']
    redirect_code: Scalars['Int']
    related_products?: Maybe<Array<Maybe<ProductInterface>>>
    relative_url?: Maybe<Scalars['String']>
    review_count: Scalars['Int']
    reviews: ProductReviews
    short_description?: Maybe<ComplexTextValue>
    sku?: Maybe<Scalars['String']>
    small_image?: Maybe<ProductImage>
    /** @deprecated The field should not be used on the storefront. */
    special_from_date?: Maybe<Scalars['String']>
    special_price?: Maybe<Scalars['Float']>
    special_to_date?: Maybe<Scalars['String']>
    stock_status?: Maybe<ProductStockStatus>
    swatch_image?: Maybe<Scalars['String']>
    thumbnail?: Maybe<ProductImage>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_price?: Maybe<Scalars['Float']>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>
    type?: Maybe<UrlRewriteEntityTypeEnum>
    /** @deprecated Use `__typename` instead. */
    type_id?: Maybe<Scalars['String']>
    uid: Scalars['ID']
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>
    url_suffix?: Maybe<Scalars['String']>
    video_file?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    websites?: Maybe<Array<Maybe<Website>>>
    weight?: Maybe<Scalars['Float']>
  }

export type SimpleProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type ProductFilterInput = {
  category_id?: Maybe<FilterTypeInput>
  country_of_manufacture?: Maybe<FilterTypeInput>
  created_at?: Maybe<FilterTypeInput>
  custom_layout?: Maybe<FilterTypeInput>
  custom_layout_update?: Maybe<FilterTypeInput>
  description?: Maybe<FilterTypeInput>
  gift_message_available?: Maybe<FilterTypeInput>
  has_options?: Maybe<FilterTypeInput>
  image?: Maybe<FilterTypeInput>
  image_label?: Maybe<FilterTypeInput>
  manufacturer?: Maybe<FilterTypeInput>
  max_price?: Maybe<FilterTypeInput>
  meta_description?: Maybe<FilterTypeInput>
  meta_keyword?: Maybe<FilterTypeInput>
  meta_title?: Maybe<FilterTypeInput>
  min_price?: Maybe<FilterTypeInput>
  name?: Maybe<FilterTypeInput>
  news_from_date?: Maybe<FilterTypeInput>
  news_to_date?: Maybe<FilterTypeInput>
  options_container?: Maybe<FilterTypeInput>
  or?: Maybe<ProductFilterInput>
  price?: Maybe<FilterTypeInput>
  required_options?: Maybe<FilterTypeInput>
  short_description?: Maybe<FilterTypeInput>
  sku?: Maybe<FilterTypeInput>
  small_image?: Maybe<FilterTypeInput>
  small_image_label?: Maybe<FilterTypeInput>
  special_from_date?: Maybe<FilterTypeInput>
  special_price?: Maybe<FilterTypeInput>
  special_to_date?: Maybe<FilterTypeInput>
  swatch_image?: Maybe<FilterTypeInput>
  thumbnail?: Maybe<FilterTypeInput>
  thumbnail_label?: Maybe<FilterTypeInput>
  tier_price?: Maybe<FilterTypeInput>
  updated_at?: Maybe<FilterTypeInput>
  url_key?: Maybe<FilterTypeInput>
  url_path?: Maybe<FilterTypeInput>
  weight?: Maybe<FilterTypeInput>
}

export type ProductSortInput = {
  country_of_manufacture?: Maybe<SortEnum>
  created_at?: Maybe<SortEnum>
  custom_layout?: Maybe<SortEnum>
  custom_layout_update?: Maybe<SortEnum>
  description?: Maybe<SortEnum>
  gift_message_available?: Maybe<SortEnum>
  has_options?: Maybe<SortEnum>
  image?: Maybe<SortEnum>
  image_label?: Maybe<SortEnum>
  manufacturer?: Maybe<SortEnum>
  meta_description?: Maybe<SortEnum>
  meta_keyword?: Maybe<SortEnum>
  meta_title?: Maybe<SortEnum>
  name?: Maybe<SortEnum>
  news_from_date?: Maybe<SortEnum>
  news_to_date?: Maybe<SortEnum>
  options_container?: Maybe<SortEnum>
  price?: Maybe<SortEnum>
  required_options?: Maybe<SortEnum>
  short_description?: Maybe<SortEnum>
  sku?: Maybe<SortEnum>
  small_image?: Maybe<SortEnum>
  small_image_label?: Maybe<SortEnum>
  special_from_date?: Maybe<SortEnum>
  special_price?: Maybe<SortEnum>
  special_to_date?: Maybe<SortEnum>
  swatch_image?: Maybe<SortEnum>
  thumbnail?: Maybe<SortEnum>
  thumbnail_label?: Maybe<SortEnum>
  tier_price?: Maybe<SortEnum>
  updated_at?: Maybe<SortEnum>
  url_key?: Maybe<SortEnum>
  url_path?: Maybe<SortEnum>
  weight?: Maybe<SortEnum>
}

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem'
  /** @deprecated Use `AggregationOption.count` instead. */
  items_count?: Maybe<Scalars['Int']>
  /** @deprecated Use `AggregationOption.label` instead. */
  label?: Maybe<Scalars['String']>
  /** @deprecated Use `AggregationOption.value` instead. */
  value_string?: Maybe<Scalars['String']>
}

export type SimpleWishlistItem = WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem'
  added_at: Scalars['String']
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  product?: Maybe<ProductInterface>
  quantity: Scalars['Float']
}

export type VirtualWishlistItem = WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem'
  added_at: Scalars['String']
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  product?: Maybe<ProductInterface>
  quantity: Scalars['Float']
}

export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem'
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  errors?: Maybe<Array<Maybe<CartItemError>>>
  gift_message?: Maybe<GiftMessage>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  quantity: Scalars['Float']
  uid: Scalars['ID']
}

export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem'
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  errors?: Maybe<Array<Maybe<CartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  quantity: Scalars['Float']
  uid: Scalars['ID']
}

export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem'
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  errors?: Maybe<Array<Maybe<CartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  quantity: Scalars['Float']
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>
  uid: Scalars['ID']
}

export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks'
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']>
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable?: Maybe<Scalars['Boolean']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>
  sample_url?: Maybe<Scalars['String']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export enum DownloadableFileTypeEnum {
  File = 'FILE',
  Url = 'URL',
}

export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples'
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>
  sample_url?: Maybe<Scalars['String']>
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

export type DownloadableProduct = ProductInterface &
  RoutableInterface &
  CustomizableProductInterface & {
    __typename?: 'DownloadableProduct'
    /** @deprecated The field should not be used on the storefront. */
    attribute_set_id?: Maybe<Scalars['Int']>
    canonical_url?: Maybe<Scalars['String']>
    categories?: Maybe<Array<Maybe<CategoryInterface>>>
    color?: Maybe<Scalars['Int']>
    color_asiento?: Maybe<Scalars['Int']>
    color_carcasa_tejido?: Maybe<Scalars['Int']>
    color_estructura?: Maybe<Scalars['Int']>
    color_tablero?: Maybe<Scalars['Int']>
    color_tejido?: Maybe<Scalars['Int']>
    country_of_manufacture?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>
    custom_attributes: Array<Maybe<CustomAttribute>>
    description?: Maybe<ComplexTextValue>
    downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>
    downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>
    fashion_color?: Maybe<Scalars['Int']>
    fashion_material?: Maybe<Scalars['String']>
    fashion_size?: Maybe<Scalars['Int']>
    fashion_style?: Maybe<Scalars['String']>
    forma?: Maybe<Scalars['Int']>
    format?: Maybe<Scalars['Int']>
    gift_message_available?: Maybe<Scalars['String']>
    has_video?: Maybe<Scalars['Int']>
    /** @deprecated Use the `uid` field instead. */
    id?: Maybe<Scalars['Int']>
    image?: Maybe<ProductImage>
    links_purchased_separately?: Maybe<Scalars['Int']>
    links_title?: Maybe<Scalars['String']>
    manufacturer?: Maybe<Scalars['Int']>
    material_estructura?: Maybe<Scalars['Int']>
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>
    /** @deprecated Use `media_gallery` instead. */
    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>
    medida_comercial?: Maybe<Scalars['Int']>
    meta_description?: Maybe<Scalars['String']>
    meta_keyword?: Maybe<Scalars['String']>
    meta_title?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_from_date?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_to_date?: Maybe<Scalars['String']>
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>
    options_container?: Maybe<Scalars['String']>
    orParentSku?: Maybe<Scalars['String']>
    orParentUrlKey?: Maybe<Scalars['String']>
    /** @deprecated Use `price_range` for product price information. */
    price?: Maybe<ProductPrices>
    price_range: PriceRange
    price_tiers?: Maybe<Array<Maybe<TierPrice>>>
    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>
    rating_summary: Scalars['Float']
    redirect_code: Scalars['Int']
    related_products?: Maybe<Array<Maybe<ProductInterface>>>
    relative_url?: Maybe<Scalars['String']>
    review_count: Scalars['Int']
    reviews: ProductReviews
    short_description?: Maybe<ComplexTextValue>
    sku?: Maybe<Scalars['String']>
    small_image?: Maybe<ProductImage>
    /** @deprecated The field should not be used on the storefront. */
    special_from_date?: Maybe<Scalars['String']>
    special_price?: Maybe<Scalars['Float']>
    special_to_date?: Maybe<Scalars['String']>
    stock_status?: Maybe<ProductStockStatus>
    swatch_image?: Maybe<Scalars['String']>
    thumbnail?: Maybe<ProductImage>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_price?: Maybe<Scalars['Float']>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>
    type?: Maybe<UrlRewriteEntityTypeEnum>
    /** @deprecated Use `__typename` instead. */
    type_id?: Maybe<Scalars['String']>
    uid: Scalars['ID']
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>
    url_suffix?: Maybe<Scalars['String']>
    video_file?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    websites?: Maybe<Array<Maybe<Website>>>
  }

export type DownloadableProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem'
  discounts?: Maybe<Array<Maybe<Discount>>>
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>
  id: Scalars['ID']
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  product_type?: Maybe<Scalars['String']>
  product_url_key?: Maybe<Scalars['String']>
  quantity_canceled?: Maybe<Scalars['Float']>
  quantity_invoiced?: Maybe<Scalars['Float']>
  quantity_ordered?: Maybe<Scalars['Float']>
  quantity_refunded?: Maybe<Scalars['Float']>
  quantity_returned?: Maybe<Scalars['Float']>
  quantity_shipped?: Maybe<Scalars['Float']>
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>
  status?: Maybe<Scalars['String']>
}

export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks'
  sort_order?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  uid: Scalars['ID']
}

export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem'
  discounts?: Maybe<Array<Maybe<Discount>>>
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_invoiced?: Maybe<Scalars['Float']>
}

export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem'
  discounts?: Maybe<Array<Maybe<Discount>>>
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_refunded?: Maybe<Scalars['Float']>
}

export type DownloadableWishlistItem = WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem'
  added_at: Scalars['String']
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>
  product?: Maybe<ProductInterface>
  quantity: Scalars['Float']
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>
}

export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem'
  bundle_options: Array<Maybe<SelectedBundleOption>>
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  errors?: Maybe<Array<Maybe<CartItemError>>>
  gift_message?: Maybe<GiftMessage>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  quantity: Scalars['Float']
  uid: Scalars['ID']
}

export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption'
  /** @deprecated Use `uid` instead */
  id: Scalars['Int']
  label: Scalars['String']
  type: Scalars['String']
  uid: Scalars['ID']
  values: Array<Maybe<SelectedBundleOptionValue>>
}

export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue'
  id: Scalars['Int']
  label: Scalars['String']
  price: Scalars['Float']
  quantity: Scalars['Float']
  uid: Scalars['ID']
}

export type BundleItem = {
  __typename?: 'BundleItem'
  /** @deprecated Use `uid` instead */
  option_id?: Maybe<Scalars['Int']>
  options?: Maybe<Array<Maybe<BundleItemOption>>>
  position?: Maybe<Scalars['Int']>
  required?: Maybe<Scalars['Boolean']>
  sku?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['ID']>
}

export type BundleItemOption = {
  __typename?: 'BundleItemOption'
  can_change_quantity?: Maybe<Scalars['Boolean']>
  /** @deprecated Use `uid` instead */
  id?: Maybe<Scalars['Int']>
  is_default?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  price_type?: Maybe<PriceTypeEnum>
  product?: Maybe<ProductInterface>
  /** @deprecated Use `quantity` instead. */
  qty?: Maybe<Scalars['Float']>
  quantity?: Maybe<Scalars['Float']>
  uid: Scalars['ID']
}

export type BundleProduct = ProductInterface &
  RoutableInterface &
  PhysicalProductInterface &
  CustomizableProductInterface & {
    __typename?: 'BundleProduct'
    /** @deprecated The field should not be used on the storefront. */
    attribute_set_id?: Maybe<Scalars['Int']>
    canonical_url?: Maybe<Scalars['String']>
    categories?: Maybe<Array<Maybe<CategoryInterface>>>
    color?: Maybe<Scalars['Int']>
    color_asiento?: Maybe<Scalars['Int']>
    color_carcasa_tejido?: Maybe<Scalars['Int']>
    color_estructura?: Maybe<Scalars['Int']>
    color_tablero?: Maybe<Scalars['Int']>
    color_tejido?: Maybe<Scalars['Int']>
    country_of_manufacture?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>
    custom_attributes: Array<Maybe<CustomAttribute>>
    description?: Maybe<ComplexTextValue>
    dynamic_price?: Maybe<Scalars['Boolean']>
    dynamic_sku?: Maybe<Scalars['Boolean']>
    dynamic_weight?: Maybe<Scalars['Boolean']>
    fashion_color?: Maybe<Scalars['Int']>
    fashion_material?: Maybe<Scalars['String']>
    fashion_size?: Maybe<Scalars['Int']>
    fashion_style?: Maybe<Scalars['String']>
    forma?: Maybe<Scalars['Int']>
    format?: Maybe<Scalars['Int']>
    gift_message_available?: Maybe<Scalars['String']>
    has_video?: Maybe<Scalars['Int']>
    /** @deprecated Use the `uid` field instead. */
    id?: Maybe<Scalars['Int']>
    image?: Maybe<ProductImage>
    items?: Maybe<Array<Maybe<BundleItem>>>
    manufacturer?: Maybe<Scalars['Int']>
    material_estructura?: Maybe<Scalars['Int']>
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>
    /** @deprecated Use `media_gallery` instead. */
    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>
    medida_comercial?: Maybe<Scalars['Int']>
    meta_description?: Maybe<Scalars['String']>
    meta_keyword?: Maybe<Scalars['String']>
    meta_title?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_from_date?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_to_date?: Maybe<Scalars['String']>
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>
    options_container?: Maybe<Scalars['String']>
    orParentSku?: Maybe<Scalars['String']>
    orParentUrlKey?: Maybe<Scalars['String']>
    /** @deprecated Use `price_range` for product price information. */
    price?: Maybe<ProductPrices>
    price_range: PriceRange
    price_tiers?: Maybe<Array<Maybe<TierPrice>>>
    price_view?: Maybe<PriceViewEnum>
    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>
    rating_summary: Scalars['Float']
    redirect_code: Scalars['Int']
    related_products?: Maybe<Array<Maybe<ProductInterface>>>
    relative_url?: Maybe<Scalars['String']>
    review_count: Scalars['Int']
    reviews: ProductReviews
    ship_bundle_items?: Maybe<ShipBundleItemsEnum>
    short_description?: Maybe<ComplexTextValue>
    sku?: Maybe<Scalars['String']>
    small_image?: Maybe<ProductImage>
    /** @deprecated The field should not be used on the storefront. */
    special_from_date?: Maybe<Scalars['String']>
    special_price?: Maybe<Scalars['Float']>
    special_to_date?: Maybe<Scalars['String']>
    stock_status?: Maybe<ProductStockStatus>
    swatch_image?: Maybe<Scalars['String']>
    thumbnail?: Maybe<ProductImage>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_price?: Maybe<Scalars['Float']>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>
    type?: Maybe<UrlRewriteEntityTypeEnum>
    /** @deprecated Use `__typename` instead. */
    type_id?: Maybe<Scalars['String']>
    uid: Scalars['ID']
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>
    url_suffix?: Maybe<Scalars['String']>
    video_file?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    websites?: Maybe<Array<Maybe<Website>>>
    weight?: Maybe<Scalars['Float']>
  }

export type BundleProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export enum PriceViewEnum {
  PriceRange = 'PRICE_RANGE',
  AsLowAs = 'AS_LOW_AS',
}

export enum ShipBundleItemsEnum {
  Together = 'TOGETHER',
  Separately = 'SEPARATELY',
}

export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem'
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>
  discounts?: Maybe<Array<Maybe<Discount>>>
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>
  id: Scalars['ID']
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  product_type?: Maybe<Scalars['String']>
  product_url_key?: Maybe<Scalars['String']>
  quantity_canceled?: Maybe<Scalars['Float']>
  quantity_invoiced?: Maybe<Scalars['Float']>
  quantity_ordered?: Maybe<Scalars['Float']>
  quantity_refunded?: Maybe<Scalars['Float']>
  quantity_returned?: Maybe<Scalars['Float']>
  quantity_shipped?: Maybe<Scalars['Float']>
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>
  status?: Maybe<Scalars['String']>
}

export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption'
  /** @deprecated Use `uid` instead. */
  id: Scalars['ID']
  label: Scalars['String']
  uid: Scalars['ID']
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>
}

export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue'
  /** @deprecated Use `uid` instead. */
  id: Scalars['ID']
  price: Money
  product_name: Scalars['String']
  product_sku: Scalars['String']
  quantity: Scalars['Float']
  uid: Scalars['ID']
}

export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem'
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>
  discounts?: Maybe<Array<Maybe<Discount>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_invoiced?: Maybe<Scalars['Float']>
}

export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem'
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_shipped: Scalars['Float']
}

export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem'
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>
  discounts?: Maybe<Array<Maybe<Discount>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_refunded?: Maybe<Scalars['Float']>
}

export type BundleWishlistItem = WishlistItemInterface & {
  __typename?: 'BundleWishlistItem'
  added_at: Scalars['String']
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  product?: Maybe<ProductInterface>
  quantity: Scalars['Float']
}

export type ProductAttributeMetadata = AttributeMetadataInterface & {
  __typename?: 'ProductAttributeMetadata'
  attribute_labels?: Maybe<Array<Maybe<StoreLabels>>>
  code?: Maybe<Scalars['String']>
  data_type?: Maybe<ObjectDataTypeEnum>
  entity_type?: Maybe<AttributeEntityTypeEnum>
  is_system?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  sort_order?: Maybe<Scalars['Int']>
  ui_input?: Maybe<UiInputTypeInterface>
  uid?: Maybe<Scalars['ID']>
  used_in_components?: Maybe<Array<Maybe<CustomAttributesListsEnum>>>
}

export enum CustomAttributesListsEnum {
  ProductDetailsPage = 'PRODUCT_DETAILS_PAGE',
  ProductsListing = 'PRODUCTS_LISTING',
  ProductsCompare = 'PRODUCTS_COMPARE',
  ProductSort = 'PRODUCT_SORT',
  ProductFilter = 'PRODUCT_FILTER',
  ProductSearchResultsFilter = 'PRODUCT_SEARCH_RESULTS_FILTER',
  AdvancedCatalogSearch = 'ADVANCED_CATALOG_SEARCH',
}

export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem'
  configurable_options: Array<Maybe<SelectedConfigurableOption>>
  configured_variant: ProductInterface
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>
  errors?: Maybe<Array<Maybe<CartItemError>>>
  gift_message?: Maybe<GiftMessage>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  quantity: Scalars['Float']
  uid: Scalars['ID']
}

export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption'
  configurable_product_option_uid: Scalars['ID']
  configurable_product_option_value_uid: Scalars['ID']
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int']
  option_label: Scalars['String']
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int']
  value_label: Scalars['String']
}

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface'
  gift_message?: Maybe<GiftMessage>
}

export type GroupedProduct = ProductInterface &
  RoutableInterface &
  PhysicalProductInterface & {
    __typename?: 'GroupedProduct'
    /** @deprecated The field should not be used on the storefront. */
    attribute_set_id?: Maybe<Scalars['Int']>
    canonical_url?: Maybe<Scalars['String']>
    categories?: Maybe<Array<Maybe<CategoryInterface>>>
    color?: Maybe<Scalars['Int']>
    color_asiento?: Maybe<Scalars['Int']>
    color_carcasa_tejido?: Maybe<Scalars['Int']>
    color_estructura?: Maybe<Scalars['Int']>
    color_tablero?: Maybe<Scalars['Int']>
    color_tejido?: Maybe<Scalars['Int']>
    country_of_manufacture?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>
    custom_attributes: Array<Maybe<CustomAttribute>>
    description?: Maybe<ComplexTextValue>
    fashion_color?: Maybe<Scalars['Int']>
    fashion_material?: Maybe<Scalars['String']>
    fashion_size?: Maybe<Scalars['Int']>
    fashion_style?: Maybe<Scalars['String']>
    forma?: Maybe<Scalars['Int']>
    format?: Maybe<Scalars['Int']>
    gift_message_available?: Maybe<Scalars['String']>
    has_video?: Maybe<Scalars['Int']>
    /** @deprecated Use the `uid` field instead. */
    id?: Maybe<Scalars['Int']>
    image?: Maybe<ProductImage>
    items?: Maybe<Array<Maybe<GroupedProductItem>>>
    manufacturer?: Maybe<Scalars['Int']>
    material_estructura?: Maybe<Scalars['Int']>
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>
    /** @deprecated Use `media_gallery` instead. */
    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>
    medida_comercial?: Maybe<Scalars['Int']>
    meta_description?: Maybe<Scalars['String']>
    meta_keyword?: Maybe<Scalars['String']>
    meta_title?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_from_date?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_to_date?: Maybe<Scalars['String']>
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    options_container?: Maybe<Scalars['String']>
    orParentSku?: Maybe<Scalars['String']>
    orParentUrlKey?: Maybe<Scalars['String']>
    /** @deprecated Use `price_range` for product price information. */
    price?: Maybe<ProductPrices>
    price_range: PriceRange
    price_tiers?: Maybe<Array<Maybe<TierPrice>>>
    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>
    rating_summary: Scalars['Float']
    redirect_code: Scalars['Int']
    related_products?: Maybe<Array<Maybe<ProductInterface>>>
    relative_url?: Maybe<Scalars['String']>
    review_count: Scalars['Int']
    reviews: ProductReviews
    short_description?: Maybe<ComplexTextValue>
    sku?: Maybe<Scalars['String']>
    small_image?: Maybe<ProductImage>
    /** @deprecated The field should not be used on the storefront. */
    special_from_date?: Maybe<Scalars['String']>
    special_price?: Maybe<Scalars['Float']>
    special_to_date?: Maybe<Scalars['String']>
    stock_status?: Maybe<ProductStockStatus>
    swatch_image?: Maybe<Scalars['String']>
    thumbnail?: Maybe<ProductImage>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_price?: Maybe<Scalars['Float']>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>
    type?: Maybe<UrlRewriteEntityTypeEnum>
    /** @deprecated Use `__typename` instead. */
    type_id?: Maybe<Scalars['String']>
    uid: Scalars['ID']
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>
    url_suffix?: Maybe<Scalars['String']>
    video_file?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    websites?: Maybe<Array<Maybe<Website>>>
    weight?: Maybe<Scalars['Float']>
  }

export type GroupedProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type GroupedProductItem = {
  __typename?: 'GroupedProductItem'
  position?: Maybe<Scalars['Int']>
  product?: Maybe<ProductInterface>
  qty?: Maybe<Scalars['Float']>
}

export type GroupedProductWishlistItem = WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem'
  added_at: Scalars['String']
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  product?: Maybe<ProductInterface>
  quantity: Scalars['Float']
}

export type ConfigurableProduct = ProductInterface &
  RoutableInterface &
  PhysicalProductInterface &
  CustomizableProductInterface & {
    __typename?: 'ConfigurableProduct'
    /** @deprecated The field should not be used on the storefront. */
    attribute_set_id?: Maybe<Scalars['Int']>
    canonical_url?: Maybe<Scalars['String']>
    categories?: Maybe<Array<Maybe<CategoryInterface>>>
    color?: Maybe<Scalars['Int']>
    color_asiento?: Maybe<Scalars['Int']>
    color_carcasa_tejido?: Maybe<Scalars['Int']>
    color_estructura?: Maybe<Scalars['Int']>
    color_tablero?: Maybe<Scalars['Int']>
    color_tejido?: Maybe<Scalars['Int']>
    configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>
    configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>
    country_of_manufacture?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>
    custom_attributes: Array<Maybe<CustomAttribute>>
    description?: Maybe<ComplexTextValue>
    fashion_color?: Maybe<Scalars['Int']>
    fashion_material?: Maybe<Scalars['String']>
    fashion_size?: Maybe<Scalars['Int']>
    fashion_style?: Maybe<Scalars['String']>
    forma?: Maybe<Scalars['Int']>
    format?: Maybe<Scalars['Int']>
    gift_message_available?: Maybe<Scalars['String']>
    has_video?: Maybe<Scalars['Int']>
    /** @deprecated Use the `uid` field instead. */
    id?: Maybe<Scalars['Int']>
    image?: Maybe<ProductImage>
    manufacturer?: Maybe<Scalars['Int']>
    material_estructura?: Maybe<Scalars['Int']>
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>
    /** @deprecated Use `media_gallery` instead. */
    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>
    medida_comercial?: Maybe<Scalars['Int']>
    meta_description?: Maybe<Scalars['String']>
    meta_keyword?: Maybe<Scalars['String']>
    meta_title?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_from_date?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    new_to_date?: Maybe<Scalars['String']>
    only_x_left_in_stock?: Maybe<Scalars['Float']>
    options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>
    options_container?: Maybe<Scalars['String']>
    orParentSku?: Maybe<Scalars['String']>
    orParentUrlKey?: Maybe<Scalars['String']>
    /** @deprecated Use `price_range` for product price information. */
    price?: Maybe<ProductPrices>
    price_range: PriceRange
    price_tiers?: Maybe<Array<Maybe<TierPrice>>>
    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>
    rating_summary: Scalars['Float']
    redirect_code: Scalars['Int']
    related_products?: Maybe<Array<Maybe<ProductInterface>>>
    relative_url?: Maybe<Scalars['String']>
    review_count: Scalars['Int']
    reviews: ProductReviews
    short_description?: Maybe<ComplexTextValue>
    sku?: Maybe<Scalars['String']>
    small_image?: Maybe<ProductImage>
    /** @deprecated The field should not be used on the storefront. */
    special_from_date?: Maybe<Scalars['String']>
    special_price?: Maybe<Scalars['Float']>
    special_to_date?: Maybe<Scalars['String']>
    stock_status?: Maybe<ProductStockStatus>
    swatch_image?: Maybe<Scalars['String']>
    thumbnail?: Maybe<ProductImage>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_price?: Maybe<Scalars['Float']>
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>
    type?: Maybe<UrlRewriteEntityTypeEnum>
    /** @deprecated Use `__typename` instead. */
    type_id?: Maybe<Scalars['String']>
    uid: Scalars['ID']
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>
    url_key?: Maybe<Scalars['String']>
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>
    url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>
    url_suffix?: Maybe<Scalars['String']>
    variants?: Maybe<Array<Maybe<ConfigurableVariant>>>
    video_file?: Maybe<Scalars['String']>
    /** @deprecated The field should not be used on the storefront. */
    websites?: Maybe<Array<Maybe<Website>>>
    weight?: Maybe<Scalars['Float']>
  }

export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids?: Maybe<Array<Scalars['ID']>>
}

export type ConfigurableProductReviewsArgs = {
  pageSize?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions'
  attribute_code?: Maybe<Scalars['String']>
  /** @deprecated Use `attribute_uid` instead. */
  attribute_id?: Maybe<Scalars['String']>
  /** @deprecated Use `attribute_uid` instead. */
  attribute_id_v2?: Maybe<Scalars['Int']>
  attribute_uid: Scalars['ID']
  /** @deprecated Use `uid` instead. */
  id?: Maybe<Scalars['Int']>
  label?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  /** @deprecated `product_id` is not needed and can be obtained from its parent. */
  product_id?: Maybe<Scalars['Int']>
  uid: Scalars['ID']
  use_default?: Maybe<Scalars['Boolean']>
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>
}

export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues'
  default_label?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  store_label?: Maybe<Scalars['String']>
  swatch_data?: Maybe<SwatchDataInterface>
  uid?: Maybe<Scalars['ID']>
  use_default_value?: Maybe<Scalars['Boolean']>
  /** @deprecated Use `uid` instead. */
  value_index?: Maybe<Scalars['Int']>
}

export type SwatchDataInterface = {
  value?: Maybe<Scalars['String']>
}

export type ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection'
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>
  variant?: Maybe<SimpleProduct>
}

export type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption'
  attribute_code: Scalars['String']
  label: Scalars['String']
  uid: Scalars['ID']
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>
}

export type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue'
  is_available: Scalars['Boolean']
  is_use_default: Scalars['Boolean']
  label: Scalars['String']
  swatch?: Maybe<SwatchDataInterface>
  uid: Scalars['ID']
}

export type ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection'
  attribute_code: Scalars['String']
  option_value_uids: Array<Maybe<Scalars['ID']>>
}

export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant'
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>
  product?: Maybe<SimpleProduct>
}

export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption'
  code?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  uid: Scalars['ID']
  value_index?: Maybe<Scalars['Int']>
}

export type ConfigurableWishlistItem = WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem'
  added_at: Scalars['String']
  child_sku: Scalars['String']
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  product?: Maybe<ProductInterface>
  quantity: Scalars['Float']
}

export type UiAttributeTypePageBuilder = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypePageBuilder'
  is_html_allowed?: Maybe<Scalars['Boolean']>
  ui_input_type?: Maybe<UiInputTypeEnum>
}

export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken'
  /** @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead. */
  paypal_urls?: Maybe<PaypalExpressUrlList>
  /** @deprecated Use `PaypalExpressTokenOutput.token` instead. */
  token?: Maybe<Scalars['String']>
}

export type PayflowProToken = {
  __typename?: 'PayflowProToken'
  response_message: Scalars['String']
  result: Scalars['Int']
  result_code: Scalars['Int']
  secure_token: Scalars['String']
  secure_token_id: Scalars['String']
}

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem'
  discounts?: Maybe<Array<Maybe<Discount>>>
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>
  id: Scalars['ID']
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  product_type?: Maybe<Scalars['String']>
  product_url_key?: Maybe<Scalars['String']>
  quantity_canceled?: Maybe<Scalars['Float']>
  quantity_invoiced?: Maybe<Scalars['Float']>
  quantity_ordered?: Maybe<Scalars['Float']>
  quantity_refunded?: Maybe<Scalars['Float']>
  quantity_returned?: Maybe<Scalars['Float']>
  quantity_shipped?: Maybe<Scalars['Float']>
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>
  status?: Maybe<Scalars['String']>
}

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem'
  discounts?: Maybe<Array<Maybe<Discount>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_invoiced?: Maybe<Scalars['Float']>
}

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem'
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_shipped: Scalars['Float']
}

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem'
  discounts?: Maybe<Array<Maybe<Discount>>>
  id: Scalars['ID']
  order_item?: Maybe<OrderItemInterface>
  product_name?: Maybe<Scalars['String']>
  product_sale_price: Money
  product_sku: Scalars['String']
  quantity_refunded?: Maybe<Scalars['Float']>
}

export type SwatchLayerFilterItemInterface = {
  swatch_data?: Maybe<SwatchData>
}

export type SwatchData = {
  __typename?: 'SwatchData'
  type?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type SwatchLayerFilterItem = LayerFilterItemInterface &
  SwatchLayerFilterItemInterface & {
    __typename?: 'SwatchLayerFilterItem'
    /** @deprecated Use `AggregationOption.count` instead. */
    items_count?: Maybe<Scalars['Int']>
    /** @deprecated Use `AggregationOption.label` instead. */
    label?: Maybe<Scalars['String']>
    swatch_data?: Maybe<SwatchData>
    /** @deprecated Use `AggregationOption.value` instead. */
    value_string?: Maybe<Scalars['String']>
  }

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData'
  thumbnail?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData'
  value?: Maybe<Scalars['String']>
}

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData'
  value?: Maybe<Scalars['String']>
}

export type UiAttributeTypeFixedProductTax = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeFixedProductTax'
  is_html_allowed?: Maybe<Scalars['Boolean']>
  ui_input_type?: Maybe<UiInputTypeEnum>
}

export type SimpleQuoteItem = QuoteItemInterface & {
  __typename?: 'SimpleQuoteItem'
  calculation_price?: Maybe<Scalars['String']>
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>
  discount?: Maybe<Scalars['String']>
  id: Scalars['String']
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  qty: Scalars['Float']
  quote_id?: Maybe<Scalars['Int']>
  request_price?: Maybe<Scalars['String']>
  sku?: Maybe<Scalars['String']>
}

export type VirtualQuoteItem = QuoteItemInterface & {
  __typename?: 'VirtualQuoteItem'
  calculation_price?: Maybe<Scalars['String']>
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>
  discount?: Maybe<Scalars['String']>
  id: Scalars['String']
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  qty: Scalars['Float']
  quote_id?: Maybe<Scalars['Int']>
  request_price?: Maybe<Scalars['String']>
  sku?: Maybe<Scalars['String']>
}

export type ConfigurableQuoteItem = QuoteItemInterface & {
  __typename?: 'ConfigurableQuoteItem'
  calculation_price?: Maybe<Scalars['String']>
  configurable_options: Array<Maybe<SelectedConfigurableOption>>
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  discount?: Maybe<Scalars['String']>
  id: Scalars['String']
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  qty: Scalars['Float']
  quote_id?: Maybe<Scalars['Int']>
  request_price?: Maybe<Scalars['String']>
  sku?: Maybe<Scalars['String']>
}

export type DownloadableQuoteItem = QuoteItemInterface & {
  __typename?: 'DownloadableQuoteItem'
  calculation_price?: Maybe<Scalars['String']>
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>
  discount?: Maybe<Scalars['String']>
  id: Scalars['String']
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  qty: Scalars['Float']
  quote_id?: Maybe<Scalars['Int']>
  request_price?: Maybe<Scalars['String']>
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>
  sku?: Maybe<Scalars['String']>
}

export type BundleQuoteItem = QuoteItemInterface & {
  __typename?: 'BundleQuoteItem'
  bundle_options: Array<Maybe<SelectedBundleOption>>
  calculation_price?: Maybe<Scalars['String']>
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  discount?: Maybe<Scalars['String']>
  id: Scalars['String']
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  prices?: Maybe<CartItemPrices>
  product: ProductInterface
  qty: Scalars['Float']
  quote_id?: Maybe<Scalars['Int']>
  request_price?: Maybe<Scalars['String']>
  sku?: Maybe<Scalars['String']>
}
