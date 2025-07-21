export interface RedditListing {
  kind: string;
  data: RedditListingData;
}

export interface RedditListingData {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: any;
  children: Post[];
  before: any;
}

export interface Post {
  kind: string;
  data: PostData;
}

export interface PostData {
  approved_at_utc: any;
  subreddit: string;
  selftext: string;
  author_fullname?: string;
  saved: boolean;
  mod_reason_title: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: LinkFlairRichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: any;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height?: number;
  top_awarded_type: any;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color?: string;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width?: number;
  author_flair_template_id?: string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media?: SecureMedia;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: any;
  secure_media_embed: SecureMediaEmbed;
  link_flair_text: string;
  can_mod_post: boolean;
  sr_detail: {
    community_icon?: string;
    header_img?: string;
    icon_img: string;
  };
  score: number;
  approved_by: any;
  is_created_from_ads_ui: boolean;
  author_premium?: boolean;
  thumbnail: string;
  edited: any;
  author_flair_css_class?: string;
  author_flair_richtext?: AuthorFlairRichtext[];
  gildings: Gildings;
  content_categories: any;
  is_self: boolean;
  mod_note: any;
  created: number;
  link_flair_type: string;
  wls: any;
  removed_by_category: any;
  banned_by: any;
  author_flair_type?: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html?: string;
  likes: any;
  suggested_sort: any;
  banned_at_utc: any;
  view_count: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: string;
  treatment_tags: any[];
  visited: boolean;
  removed_by: any;
  num_reports: any;
  distinguished?: string;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: any;
  removal_reason: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: any;
  author: string;
  discussion_type: any;
  num_comments: number;
  send_replies: boolean;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair?: boolean;
  author_flair_text_color?: string;
  permalink: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media?: Media;
  is_video: boolean;
  is_gallery?: boolean;
  media_metadata?: MediaMetadata;
  gallery_data?: GalleryData;
  url_overridden_by_dest?: string;
  post_hint?: string;
  preview?: Preview;
  crosspost_parent_list?: CrosspostParentList[];
  crosspost_parent?: string;
}

export interface LinkFlairRichtext {
  e: string;
  t: string;
}

export interface MediaEmbed {
  content?: string;
  width?: number;
  scrolling?: boolean;
  height?: number;
}

export interface SecureMedia {
  type: string;
  oembed: Oembed;
  reddit_video: {
    fallback_url: string;
  };
}

export interface Oembed {
  provider_url: string;
  version: string;
  title: string;
  thumbnail_width?: number;
  height: number;
  width: number;
  html: string;
  provider_name: string;
  thumbnail_url: string;
  type: string;
  thumbnail_height?: number;
}

export interface SecureMediaEmbed {
  content?: string;
  width?: number;
  scrolling?: boolean;
  media_domain_url?: string;
  height?: number;
}

export interface AuthorFlairRichtext {
  e: string;
  t: string;
}

export interface Gildings {}

export interface Media {
  type: string;
  oembed: Oembed2;
  reddit_video: {
    fallback_url: string;
  };
}

export interface Oembed2 {
  provider_url: string;
  version: string;
  title: string;
  thumbnail_width?: number;
  height: number;
  width: number;
  html: string;
  provider_name: string;
  thumbnail_url: string;
  type: string;
  thumbnail_height?: number;
}

export interface MediaMetadata {
  "83l0gbv8ly8f1"?: N83l0gbv8ly8f1;
  fef71bv8ly8f1?: Fef71bv8ly8f1;
  jtwtkcv8ly8f1?: Jtwtkcv8ly8f1;
  "7117obv8ly8f1"?: N7117obv8ly8f1;
  "1uftlav8ly8f1"?: N1uftlav8ly8f1;
  mcsxgbv8ly8f1?: Mcsxgbv8ly8f1;
  "2kg0lov8ly8f1"?: N2kg0lov8ly8f1;
  wil0kav8ly8f1?: Wil0kav8ly8f1;
  hlilodv8ly8f1?: Hlilodv8ly8f1;
  "38zklav8ly8f1"?: N38zklav8ly8f1;
  wawkoav8ly8f1?: Wawkoav8ly8f1;
  zf1huev8ly8f1?: Zf1huev8ly8f1;
  k29d6bv8ly8f1?: K29d6bv8ly8f1;
  "3mghhbv8ly8f1"?: N3mghhbv8ly8f1;
  v7plfev8ly8f1?: V7plfev8ly8f1;
  bbt4gav8ly8f1?: Bbt4gav8ly8f1;
  rl35w804ia9f1?: Rl35w804ia9f1;
  ln54w804ia9f1?: Ln54w804ia9f1;
  al6sbb04ia9f1?: Al6sbb04ia9f1;
  qjh00b04ia9f1?: Qjh00b04ia9f1;
  x0f9m904ia9f1?: X0f9m904ia9f1;
  fhllck04ia9f1?: Fhllck04ia9f1;
  wvucu904ia9f1?: Wvucu904ia9f1;
  "7i8hh904ia9f1"?: N7i8hh904ia9f1;
  wreey804ia9f1?: Wreey804ia9f1;
  jqyrud04ia9f1?: Jqyrud04ia9f1;
  e6m6ob04ia9f1?: E6m6ob04ia9f1;
  u8x0m804ia9f1?: U8x0m804ia9f1;
  "03zvg904ia9f1"?: N03zvg904ia9f1;
  v3k60x71to9f1?: V3k60x71to9f1;
  d1chm411to9f1?: D1chm411to9f1;
  ildw81j1to9f1?: Ildw81j1to9f1;
  w395j8o0to9f1?: W395j8o0to9f1;
  "9t0arpsmbw9f1"?: N9t0arpsmbw9f1;
  hdvc4rsmbw9f1?: Hdvc4rsmbw9f1;
  dhbutewmbw9f1?: Dhbutewmbw9f1;
  noxrxosmbw9f1?: Noxrxosmbw9f1;
  q2uimd298haf1?: Q2uimd298haf1;
  "3egy67298haf1"?: N3egy67298haf1;
  y5her9298haf1?: Y5her9298haf1;
  kom76a298haf1?: Kom76a298haf1;
  "9ar6kc298haf1"?: N9ar6kc298haf1;
  jxlmya298haf1?: Jxlmya298haf1;
  rvscjd298haf1?: Rvscjd298haf1;
  s0igna298haf1?: S0igna298haf1;
  "2mugq9mcnjaf1"?: N2mugq9mcnjaf1;
  d74b7zxanjaf1?: D74b7zxanjaf1;
  yyrlev4l8qaf1?: Yyrlev4l8qaf1;
  "58rqjn4l8qaf1"?: N58rqjn4l8qaf1;
  "6syvyt3l8qaf1"?: N6syvyt3l8qaf1;
  s8lwmt3l8qaf1?: S8lwmt3l8qaf1;
  s3ycut3l8qaf1?: S3ycut3l8qaf1;
  ivipwv3l8qaf1?: Ivipwv3l8qaf1;
  aqpi2acxx1bf1?: Aqpi2acxx1bf1;
  "904qpi9xx1bf1"?: N904qpi9xx1bf1;
  "9jv10f9vohbf1"?: N9jv10f9vohbf1;
  unx4tt7vohbf1?: Unx4tt7vohbf1;
  u46blbca5qbf1?: U46blbca5qbf1;
  "5zk28bca5qbf1"?: N5zk28bca5qbf1;
  jutfbcca5qbf1?: Jutfbcca5qbf1;
  "43rg0bca5qbf1"?: N43rg0bca5qbf1;
  "0xdwdcca5qbf1"?: N0xdwdcca5qbf1;
  f7ldjbca5qbf1?: F7ldjbca5qbf1;
  dag9ucca5qbf1?: Dag9ucca5qbf1;
  diwg9cca5qbf1?: Diwg9cca5qbf1;
  "5uvkjcca5qbf1"?: N5uvkjcca5qbf1;
  tkcwnbca5qbf1?: Tkcwnbca5qbf1;
  "25mahcca5qbf1"?: N25mahcca5qbf1;
  fmk5cbca5qbf1?: Fmk5cbca5qbf1;
  bm4i5bca5qbf1?: Bm4i5bca5qbf1;
  qoe5x6bw4qbf1?: Qoe5x6bw4qbf1;
  xjpqm5bw4qbf1?: Xjpqm5bw4qbf1;
  f3q18wbw4qbf1?: F3q18wbw4qbf1;
  olh4g6bw4qbf1?: Olh4g6bw4qbf1;
  "9ov8lvbw4qbf1"?: N9ov8lvbw4qbf1;
  kcml95bw4qbf1?: Kcml95bw4qbf1;
  nhsa18bw4qbf1?: Nhsa18bw4qbf1;
  "8b1e0xbw4qbf1"?: N8b1e0xbw4qbf1;
  k7stixbw4qbf1?: K7stixbw4qbf1;
  "1tv1qa86uxbf1"?: N1tv1qa86uxbf1;
  gkyoe986uxbf1?: Gkyoe986uxbf1;
  rh1m56bn1acf1?: Rh1m56bn1acf1;
  jels45bn1acf1?: Jels45bn1acf1;
  qqf8p4bn1acf1?: Qqf8p4bn1acf1;
  wx9lw6bn1acf1?: Wx9lw6bn1acf1;
  "23xv78bn1acf1"?: N23xv78bn1acf1;
  cd98drsw3ocf1?: Cd98drsw3ocf1;
  h0mg11qw3ocf1?: H0mg11qw3ocf1;
  l1cm6rrw3ocf1?: L1cm6rrw3ocf1;
  fuir1vtw3ocf1?: Fuir1vtw3ocf1;
  "225i8me8hwcf1"?: N225i8me8hwcf1;
  "79dzzvy2hwcf1"?: N79dzzvy2hwcf1;
  ttgwc1s1hwcf1?: Ttgwc1s1hwcf1;
  "49yv4zd6hwcf1"?: N49yv4zd6hwcf1;
  czev7924hwcf1?: Czev7924hwcf1;
  "491oon45hwcf1"?: N491oon45hwcf1;
  yh2u7gc9hwcf1?: Yh2u7gc9hwcf1;
  rqegve9302df1?: Rqegve9302df1;
  ax1zn79302df1?: Ax1zn79302df1;
  "7xdt0c9302df1"?: N7xdt0c9302df1;
  ihk68za302df1?: Ihk68za302df1;
  v6yvlf9302df1?: V6yvlf9302df1;
  nhlhd59302df1?: Nhlhd59302df1;
  w3bvi79302df1?: W3bvi79302df1;
  jh8j0b9302df1?: Jh8j0b9302df1;
  zgzbe89302df1?: Zgzbe89302df1;
  ibe3tb9302df1?: Ibe3tb9302df1;
  nfzspc9302df1?: Nfzspc9302df1;
  i8c9i1a302df1?: I8c9i1a302df1;
  vm98x7qeyodf1?: Vm98x7qeyodf1;
  zxef78qeyodf1?: Zxef78qeyodf1;
  w7ixa0ols8ef1?: W7ixa0ols8ef1;
  "5jc10znls8ef1"?: N5jc10znls8ef1;
}

export interface N83l0gbv8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O[];
  p: P[];
  s: S;
  id: string;
}

export interface O {
  y: number;
  x: number;
  u: string;
}

export interface P {
  y: number;
  x: number;
  u: string;
}

export interface S {
  y: number;
  x: number;
  u: string;
}

export interface Fef71bv8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O2[];
  p: P2[];
  s: S2;
  id: string;
}

export interface O2 {
  y: number;
  x: number;
  u: string;
}

export interface P2 {
  y: number;
  x: number;
  u: string;
}

export interface S2 {
  y: number;
  x: number;
  u: string;
}

export interface Jtwtkcv8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O3[];
  p: P3[];
  s: S3;
  id: string;
}

export interface O3 {
  y: number;
  x: number;
  u: string;
}

export interface P3 {
  y: number;
  x: number;
  u: string;
}

export interface S3 {
  y: number;
  x: number;
  u: string;
}

export interface N7117obv8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O4[];
  p: P4[];
  s: S4;
  id: string;
}

export interface O4 {
  y: number;
  x: number;
  u: string;
}

export interface P4 {
  y: number;
  x: number;
  u: string;
}

export interface S4 {
  y: number;
  x: number;
  u: string;
}

export interface N1uftlav8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O5[];
  p: P5[];
  s: S5;
  id: string;
}

export interface O5 {
  y: number;
  x: number;
  u: string;
}

export interface P5 {
  y: number;
  x: number;
  u: string;
}

export interface S5 {
  y: number;
  x: number;
  u: string;
}

export interface Mcsxgbv8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O6[];
  p: P6[];
  s: S6;
  id: string;
}

export interface O6 {
  y: number;
  x: number;
  u: string;
}

export interface P6 {
  y: number;
  x: number;
  u: string;
}

export interface S6 {
  y: number;
  x: number;
  u: string;
}

export interface N2kg0lov8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O7[];
  p: P7[];
  s: S7;
  id: string;
}

export interface O7 {
  y: number;
  x: number;
  u: string;
}

export interface P7 {
  y: number;
  x: number;
  u: string;
}

export interface S7 {
  y: number;
  x: number;
  u: string;
}

export interface Wil0kav8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O8[];
  p: P8[];
  s: S8;
  id: string;
}

export interface O8 {
  y: number;
  x: number;
  u: string;
}

export interface P8 {
  y: number;
  x: number;
  u: string;
}

export interface S8 {
  y: number;
  x: number;
  u: string;
}

export interface Hlilodv8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O9[];
  p: P9[];
  s: S9;
  id: string;
}

export interface O9 {
  y: number;
  x: number;
  u: string;
}

export interface P9 {
  y: number;
  x: number;
  u: string;
}

export interface S9 {
  y: number;
  x: number;
  u: string;
}

export interface N38zklav8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O10[];
  p: P10[];
  s: S10;
  id: string;
}

export interface O10 {
  y: number;
  x: number;
  u: string;
}

export interface P10 {
  y: number;
  x: number;
  u: string;
}

export interface S10 {
  y: number;
  x: number;
  u: string;
}

export interface Wawkoav8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O11[];
  p: P11[];
  s: S11;
  id: string;
}

export interface O11 {
  y: number;
  x: number;
  u: string;
}

export interface P11 {
  y: number;
  x: number;
  u: string;
}

export interface S11 {
  y: number;
  x: number;
  u: string;
}

export interface Zf1huev8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O12[];
  p: P12[];
  s: S12;
  id: string;
}

export interface O12 {
  y: number;
  x: number;
  u: string;
}

export interface P12 {
  y: number;
  x: number;
  u: string;
}

export interface S12 {
  y: number;
  x: number;
  u: string;
}

export interface K29d6bv8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O13[];
  p: P13[];
  s: S13;
  id: string;
}

export interface O13 {
  y: number;
  x: number;
  u: string;
}

export interface P13 {
  y: number;
  x: number;
  u: string;
}

export interface S13 {
  y: number;
  x: number;
  u: string;
}

export interface N3mghhbv8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O14[];
  p: P14[];
  s: S14;
  id: string;
}

export interface O14 {
  y: number;
  x: number;
  u: string;
}

export interface P14 {
  y: number;
  x: number;
  u: string;
}

export interface S14 {
  y: number;
  x: number;
  u: string;
}

export interface V7plfev8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O15[];
  p: P15[];
  s: S15;
  id: string;
}

export interface O15 {
  y: number;
  x: number;
  u: string;
}

export interface P15 {
  y: number;
  x: number;
  u: string;
}

export interface S15 {
  y: number;
  x: number;
  u: string;
}

export interface Bbt4gav8ly8f1 {
  status: string;
  e: string;
  m: string;
  o: O16[];
  p: P16[];
  s: S16;
  id: string;
}

export interface O16 {
  y: number;
  x: number;
  u: string;
}

export interface P16 {
  y: number;
  x: number;
  u: string;
}

export interface S16 {
  y: number;
  x: number;
  u: string;
}

export interface Rl35w804ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O17[];
  p: P17[];
  s: S17;
  id: string;
}

export interface O17 {
  y: number;
  x: number;
  u: string;
}

export interface P17 {
  y: number;
  x: number;
  u: string;
}

export interface S17 {
  y: number;
  x: number;
  u: string;
}

export interface Ln54w804ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O18[];
  p: P18[];
  s: S18;
  id: string;
}

export interface O18 {
  y: number;
  x: number;
  u: string;
}

export interface P18 {
  y: number;
  x: number;
  u: string;
}

export interface S18 {
  y: number;
  x: number;
  u: string;
}

export interface Al6sbb04ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O19[];
  p: P19[];
  s: S19;
  id: string;
}

export interface O19 {
  y: number;
  x: number;
  u: string;
}

export interface P19 {
  y: number;
  x: number;
  u: string;
}

export interface S19 {
  y: number;
  x: number;
  u: string;
}

export interface Qjh00b04ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O20[];
  p: P20[];
  s: S20;
  id: string;
}

export interface O20 {
  y: number;
  x: number;
  u: string;
}

export interface P20 {
  y: number;
  x: number;
  u: string;
}

export interface S20 {
  y: number;
  x: number;
  u: string;
}

export interface X0f9m904ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O21[];
  p: P21[];
  s: S21;
  id: string;
}

export interface O21 {
  y: number;
  x: number;
  u: string;
}

export interface P21 {
  y: number;
  x: number;
  u: string;
}

export interface S21 {
  y: number;
  x: number;
  u: string;
}

export interface Fhllck04ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O22[];
  p: P22[];
  s: S22;
  id: string;
}

export interface O22 {
  y: number;
  x: number;
  u: string;
}

export interface P22 {
  y: number;
  x: number;
  u: string;
}

export interface S22 {
  y: number;
  x: number;
  u: string;
}

export interface Wvucu904ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O23[];
  p: P23[];
  s: S23;
  id: string;
}

export interface O23 {
  y: number;
  x: number;
  u: string;
}

export interface P23 {
  y: number;
  x: number;
  u: string;
}

export interface S23 {
  y: number;
  x: number;
  u: string;
}

export interface N7i8hh904ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O24[];
  p: P24[];
  s: S24;
  id: string;
}

export interface O24 {
  y: number;
  x: number;
  u: string;
}

export interface P24 {
  y: number;
  x: number;
  u: string;
}

export interface S24 {
  y: number;
  x: number;
  u: string;
}

export interface Wreey804ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O25[];
  p: P25[];
  s: S25;
  id: string;
}

export interface O25 {
  y: number;
  x: number;
  u: string;
}

export interface P25 {
  y: number;
  x: number;
  u: string;
}

export interface S25 {
  y: number;
  x: number;
  u: string;
}

export interface Jqyrud04ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O26[];
  p: P26[];
  s: S26;
  id: string;
}

export interface O26 {
  y: number;
  x: number;
  u: string;
}

export interface P26 {
  y: number;
  x: number;
  u: string;
}

export interface S26 {
  y: number;
  x: number;
  u: string;
}

export interface E6m6ob04ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O27[];
  p: P27[];
  s: S27;
  id: string;
}

export interface O27 {
  y: number;
  x: number;
  u: string;
}

export interface P27 {
  y: number;
  x: number;
  u: string;
}

export interface S27 {
  y: number;
  x: number;
  u: string;
}

export interface U8x0m804ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O28[];
  p: P28[];
  s: S28;
  id: string;
}

export interface O28 {
  y: number;
  x: number;
  u: string;
}

export interface P28 {
  y: number;
  x: number;
  u: string;
}

export interface S28 {
  y: number;
  x: number;
  u: string;
}

export interface N03zvg904ia9f1 {
  status: string;
  e: string;
  m: string;
  o: O29[];
  p: P29[];
  s: S29;
  id: string;
}

export interface O29 {
  y: number;
  x: number;
  u: string;
}

export interface P29 {
  y: number;
  x: number;
  u: string;
}

export interface S29 {
  y: number;
  x: number;
  u: string;
}

export interface V3k60x71to9f1 {
  status: string;
  e: string;
  m: string;
  o: O30[];
  p: P30[];
  s: S30;
  id: string;
}

export interface O30 {
  y: number;
  x: number;
  u: string;
}

export interface P30 {
  y: number;
  x: number;
  u: string;
}

export interface S30 {
  y: number;
  x: number;
  u: string;
}

export interface D1chm411to9f1 {
  status: string;
  e: string;
  m: string;
  o: O31[];
  p: P31[];
  s: S31;
  id: string;
}

export interface O31 {
  y: number;
  x: number;
  u: string;
}

export interface P31 {
  y: number;
  x: number;
  u: string;
}

export interface S31 {
  y: number;
  x: number;
  u: string;
}

export interface Ildw81j1to9f1 {
  status: string;
  e: string;
  m: string;
  o: O32[];
  p: P32[];
  s: S32;
  id: string;
}

export interface O32 {
  y: number;
  x: number;
  u: string;
}

export interface P32 {
  y: number;
  x: number;
  u: string;
}

export interface S32 {
  y: number;
  gif: string;
  mp4: string;
  x: number;
}

export interface W395j8o0to9f1 {
  status: string;
  e: string;
  m: string;
  o: O33[];
  p: P33[];
  s: S33;
  id: string;
}

export interface O33 {
  y: number;
  x: number;
  u: string;
}

export interface P33 {
  y: number;
  x: number;
  u: string;
}

export interface S33 {
  y: number;
  x: number;
  u: string;
}

export interface N9t0arpsmbw9f1 {
  status: string;
  e: string;
  m: string;
  o: O34[];
  p: P34[];
  s: S34;
  id: string;
}

export interface O34 {
  y: number;
  x: number;
  u: string;
}

export interface P34 {
  y: number;
  x: number;
  u: string;
}

export interface S34 {
  y: number;
  x: number;
  u: string;
}

export interface Hdvc4rsmbw9f1 {
  status: string;
  e: string;
  m: string;
  o: O35[];
  p: P35[];
  s: S35;
  id: string;
}

export interface O35 {
  y: number;
  x: number;
  u: string;
}

export interface P35 {
  y: number;
  x: number;
  u: string;
}

export interface S35 {
  y: number;
  x: number;
  u: string;
}

export interface Dhbutewmbw9f1 {
  status: string;
  e: string;
  m: string;
  o: O36[];
  p: P36[];
  s: S36;
  id: string;
}

export interface O36 {
  y: number;
  x: number;
  u: string;
}

export interface P36 {
  y: number;
  x: number;
  u: string;
}

export interface S36 {
  y: number;
  x: number;
  u: string;
}

export interface Noxrxosmbw9f1 {
  status: string;
  e: string;
  m: string;
  o: O37[];
  p: P37[];
  s: S37;
  id: string;
}

export interface O37 {
  y: number;
  x: number;
  u: string;
}

export interface P37 {
  y: number;
  x: number;
  u: string;
}

export interface S37 {
  y: number;
  x: number;
  u: string;
}

export interface Q2uimd298haf1 {
  status: string;
  e: string;
  m: string;
  o: O38[];
  p: P38[];
  s: S38;
  id: string;
}

export interface O38 {
  y: number;
  x: number;
  u: string;
}

export interface P38 {
  y: number;
  x: number;
  u: string;
}

export interface S38 {
  y: number;
  x: number;
  u: string;
}

export interface N3egy67298haf1 {
  status: string;
  e: string;
  m: string;
  o: O39[];
  p: P39[];
  s: S39;
  id: string;
}

export interface O39 {
  y: number;
  x: number;
  u: string;
}

export interface P39 {
  y: number;
  x: number;
  u: string;
}

export interface S39 {
  y: number;
  x: number;
  u: string;
}

export interface Y5her9298haf1 {
  status: string;
  e: string;
  m: string;
  o: O40[];
  p: P40[];
  s: S40;
  id: string;
}

export interface O40 {
  y: number;
  x: number;
  u: string;
}

export interface P40 {
  y: number;
  x: number;
  u: string;
}

export interface S40 {
  y: number;
  x: number;
  u: string;
}

export interface Kom76a298haf1 {
  status: string;
  e: string;
  m: string;
  o: O41[];
  p: P41[];
  s: S41;
  id: string;
}

export interface O41 {
  y: number;
  x: number;
  u: string;
}

export interface P41 {
  y: number;
  x: number;
  u: string;
}

export interface S41 {
  y: number;
  x: number;
  u: string;
}

export interface N9ar6kc298haf1 {
  status: string;
  e: string;
  m: string;
  o: O42[];
  p: P42[];
  s: S42;
  id: string;
}

export interface O42 {
  y: number;
  x: number;
  u: string;
}

export interface P42 {
  y: number;
  x: number;
  u: string;
}

export interface S42 {
  y: number;
  x: number;
  u: string;
}

export interface Jxlmya298haf1 {
  status: string;
  e: string;
  m: string;
  o: O43[];
  p: P43[];
  s: S43;
  id: string;
}

export interface O43 {
  y: number;
  x: number;
  u: string;
}

export interface P43 {
  y: number;
  x: number;
  u: string;
}

export interface S43 {
  y: number;
  x: number;
  u: string;
}

export interface Rvscjd298haf1 {
  status: string;
  e: string;
  m: string;
  o: O44[];
  p: P44[];
  s: S44;
  id: string;
}

export interface O44 {
  y: number;
  x: number;
  u: string;
}

export interface P44 {
  y: number;
  x: number;
  u: string;
}

export interface S44 {
  y: number;
  x: number;
  u: string;
}

export interface S0igna298haf1 {
  status: string;
  e: string;
  m: string;
  o: O45[];
  p: P45[];
  s: S45;
  id: string;
}

export interface O45 {
  y: number;
  x: number;
  u: string;
}

export interface P45 {
  y: number;
  x: number;
  u: string;
}

export interface S45 {
  y: number;
  x: number;
  u: string;
}

export interface N2mugq9mcnjaf1 {
  status: string;
  e: string;
  m: string;
  o: O46[];
  p: P46[];
  s: S46;
  id: string;
}

export interface O46 {
  y: number;
  x: number;
  u: string;
}

export interface P46 {
  y: number;
  x: number;
  u: string;
}

export interface S46 {
  y: number;
  x: number;
  u: string;
}

export interface D74b7zxanjaf1 {
  status: string;
  e: string;
  m: string;
  o: O47[];
  p: P47[];
  s: S47;
  id: string;
}

export interface O47 {
  y: number;
  x: number;
  u: string;
}

export interface P47 {
  y: number;
  x: number;
  u: string;
}

export interface S47 {
  y: number;
  x: number;
  u: string;
}

export interface Yyrlev4l8qaf1 {
  status: string;
  e: string;
  m: string;
  o: O48[];
  p: P48[];
  s: S48;
  id: string;
}

export interface O48 {
  y: number;
  x: number;
  u: string;
}

export interface P48 {
  y: number;
  x: number;
  u: string;
}

export interface S48 {
  y: number;
  x: number;
  u: string;
}

export interface N58rqjn4l8qaf1 {
  status: string;
  e: string;
  m: string;
  o: O49[];
  p: P49[];
  s: S49;
  id: string;
}

export interface O49 {
  y: number;
  x: number;
  u: string;
}

export interface P49 {
  y: number;
  x: number;
  u: string;
}

export interface S49 {
  y: number;
  x: number;
  u: string;
}

export interface N6syvyt3l8qaf1 {
  status: string;
  e: string;
  m: string;
  o: O50[];
  p: P50[];
  s: S50;
  id: string;
}

export interface O50 {
  y: number;
  x: number;
  u: string;
}

export interface P50 {
  y: number;
  x: number;
  u: string;
}

export interface S50 {
  y: number;
  x: number;
  u: string;
}

export interface S8lwmt3l8qaf1 {
  status: string;
  e: string;
  m: string;
  o: O51[];
  p: P51[];
  s: S51;
  id: string;
}

export interface O51 {
  y: number;
  x: number;
  u: string;
}

export interface P51 {
  y: number;
  x: number;
  u: string;
}

export interface S51 {
  y: number;
  x: number;
  u: string;
}

export interface S3ycut3l8qaf1 {
  status: string;
  e: string;
  m: string;
  o: O52[];
  p: P52[];
  s: S52;
  id: string;
}

export interface O52 {
  y: number;
  x: number;
  u: string;
}

export interface P52 {
  y: number;
  x: number;
  u: string;
}

export interface S52 {
  y: number;
  x: number;
  u: string;
}

export interface Ivipwv3l8qaf1 {
  status: string;
  e: string;
  m: string;
  o: O53[];
  p: P53[];
  s: S53;
  id: string;
}

export interface O53 {
  y: number;
  x: number;
  u: string;
}

export interface P53 {
  y: number;
  x: number;
  u: string;
}

export interface S53 {
  y: number;
  x: number;
  u: string;
}

export interface Aqpi2acxx1bf1 {
  status: string;
  e: string;
  m: string;
  o: O54[];
  p: P54[];
  s: S54;
  id: string;
}

export interface O54 {
  y: number;
  x: number;
  u: string;
}

export interface P54 {
  y: number;
  x: number;
  u: string;
}

export interface S54 {
  y: number;
  x: number;
  u: string;
}

export interface N904qpi9xx1bf1 {
  status: string;
  e: string;
  m: string;
  o: O55[];
  p: P55[];
  s: S55;
  id: string;
}

export interface O55 {
  y: number;
  x: number;
  u: string;
}

export interface P55 {
  y: number;
  x: number;
  u: string;
}

export interface S55 {
  y: number;
  x: number;
  u: string;
}

export interface N9jv10f9vohbf1 {
  status: string;
  e: string;
  m: string;
  o: O56[];
  p: P56[];
  s: S56;
  id: string;
}

export interface O56 {
  y: number;
  x: number;
  u: string;
}

export interface P56 {
  y: number;
  x: number;
  u: string;
}

export interface S56 {
  y: number;
  x: number;
  u: string;
}

export interface Unx4tt7vohbf1 {
  status: string;
  e: string;
  m: string;
  o: O57[];
  p: P57[];
  s: S57;
  id: string;
}

export interface O57 {
  y: number;
  x: number;
  u: string;
}

export interface P57 {
  y: number;
  x: number;
  u: string;
}

export interface S57 {
  y: number;
  x: number;
  u: string;
}

export interface U46blbca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O58[];
  p: P58[];
  s: S58;
  id: string;
}

export interface O58 {
  y: number;
  x: number;
  u: string;
}

export interface P58 {
  y: number;
  x: number;
  u: string;
}

export interface S58 {
  y: number;
  x: number;
  u: string;
}

export interface N5zk28bca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O59[];
  p: P59[];
  s: S59;
  id: string;
}

export interface O59 {
  y: number;
  x: number;
  u: string;
}

export interface P59 {
  y: number;
  x: number;
  u: string;
}

export interface S59 {
  y: number;
  x: number;
  u: string;
}

export interface Jutfbcca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O60[];
  p: P60[];
  s: S60;
  id: string;
}

export interface O60 {
  y: number;
  x: number;
  u: string;
}

export interface P60 {
  y: number;
  x: number;
  u: string;
}

export interface S60 {
  y: number;
  x: number;
  u: string;
}

export interface N43rg0bca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O61[];
  p: P61[];
  s: S61;
  id: string;
}

export interface O61 {
  y: number;
  x: number;
  u: string;
}

export interface P61 {
  y: number;
  x: number;
  u: string;
}

export interface S61 {
  y: number;
  x: number;
  u: string;
}

export interface N0xdwdcca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O62[];
  p: P62[];
  s: S62;
  id: string;
}

export interface O62 {
  y: number;
  x: number;
  u: string;
}

export interface P62 {
  y: number;
  x: number;
  u: string;
}

export interface S62 {
  y: number;
  x: number;
  u: string;
}

export interface F7ldjbca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O63[];
  p: P63[];
  s: S63;
  id: string;
}

export interface O63 {
  y: number;
  x: number;
  u: string;
}

export interface P63 {
  y: number;
  x: number;
  u: string;
}

export interface S63 {
  y: number;
  x: number;
  u: string;
}

export interface Dag9ucca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O64[];
  p: P64[];
  s: S64;
  id: string;
}

export interface O64 {
  y: number;
  x: number;
  u: string;
}

export interface P64 {
  y: number;
  x: number;
  u: string;
}

export interface S64 {
  y: number;
  x: number;
  u: string;
}

export interface Diwg9cca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O65[];
  p: P65[];
  s: S65;
  id: string;
}

export interface O65 {
  y: number;
  x: number;
  u: string;
}

export interface P65 {
  y: number;
  x: number;
  u: string;
}

export interface S65 {
  y: number;
  x: number;
  u: string;
}

export interface N5uvkjcca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O66[];
  p: P66[];
  s: S66;
  id: string;
}

export interface O66 {
  y: number;
  x: number;
  u: string;
}

export interface P66 {
  y: number;
  x: number;
  u: string;
}

export interface S66 {
  y: number;
  x: number;
  u: string;
}

export interface Tkcwnbca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O67[];
  p: P67[];
  s: S67;
  id: string;
}

export interface O67 {
  y: number;
  x: number;
  u: string;
}

export interface P67 {
  y: number;
  x: number;
  u: string;
}

export interface S67 {
  y: number;
  x: number;
  u: string;
}

export interface N25mahcca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O68[];
  p: P68[];
  s: S68;
  id: string;
}

export interface O68 {
  y: number;
  x: number;
  u: string;
}

export interface P68 {
  y: number;
  x: number;
  u: string;
}

export interface S68 {
  y: number;
  x: number;
  u: string;
}

export interface Fmk5cbca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O69[];
  p: P69[];
  s: S69;
  id: string;
}

export interface O69 {
  y: number;
  x: number;
  u: string;
}

export interface P69 {
  y: number;
  x: number;
  u: string;
}

export interface S69 {
  y: number;
  x: number;
  u: string;
}

export interface Bm4i5bca5qbf1 {
  status: string;
  e: string;
  m: string;
  o: O70[];
  p: P70[];
  s: S70;
  id: string;
}

export interface O70 {
  y: number;
  x: number;
  u: string;
}

export interface P70 {
  y: number;
  x: number;
  u: string;
}

export interface S70 {
  y: number;
  x: number;
  u: string;
}

export interface Qoe5x6bw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O71[];
  p: P71[];
  s: S71;
  id: string;
}

export interface O71 {
  y: number;
  x: number;
  u: string;
}

export interface P71 {
  y: number;
  x: number;
  u: string;
}

export interface S71 {
  y: number;
  x: number;
  u: string;
}

export interface Xjpqm5bw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O72[];
  p: P72[];
  s: S72;
  id: string;
}

export interface O72 {
  y: number;
  x: number;
  u: string;
}

export interface P72 {
  y: number;
  x: number;
  u: string;
}

export interface S72 {
  y: number;
  x: number;
  u: string;
}

export interface F3q18wbw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O73[];
  p: P73[];
  s: S73;
  id: string;
}

export interface O73 {
  y: number;
  x: number;
  u: string;
}

export interface P73 {
  y: number;
  x: number;
  u: string;
}

export interface S73 {
  y: number;
  x: number;
  u: string;
}

export interface Olh4g6bw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O74[];
  p: P74[];
  s: S74;
  id: string;
}

export interface O74 {
  y: number;
  x: number;
  u: string;
}

export interface P74 {
  y: number;
  x: number;
  u: string;
}

export interface S74 {
  y: number;
  x: number;
  u: string;
}

export interface N9ov8lvbw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O75[];
  p: P75[];
  s: S75;
  id: string;
}

export interface O75 {
  y: number;
  x: number;
  u: string;
}

export interface P75 {
  y: number;
  x: number;
  u: string;
}

export interface S75 {
  y: number;
  x: number;
  u: string;
}

export interface Kcml95bw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O76[];
  p: P76[];
  s: S76;
  id: string;
}

export interface O76 {
  y: number;
  x: number;
  u: string;
}

export interface P76 {
  y: number;
  x: number;
  u: string;
}

export interface S76 {
  y: number;
  x: number;
  u: string;
}

export interface Nhsa18bw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O77[];
  p: P77[];
  s: S77;
  id: string;
}

export interface O77 {
  y: number;
  x: number;
  u: string;
}

export interface P77 {
  y: number;
  x: number;
  u: string;
}

export interface S77 {
  y: number;
  x: number;
  u: string;
}

export interface N8b1e0xbw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O78[];
  p: P78[];
  s: S78;
  id: string;
}

export interface O78 {
  y: number;
  x: number;
  u: string;
}

export interface P78 {
  y: number;
  x: number;
  u: string;
}

export interface S78 {
  y: number;
  x: number;
  u: string;
}

export interface K7stixbw4qbf1 {
  status: string;
  e: string;
  m: string;
  o: O79[];
  p: P79[];
  s: S79;
  id: string;
}

export interface O79 {
  y: number;
  x: number;
  u: string;
}

export interface P79 {
  y: number;
  x: number;
  u: string;
}

export interface S79 {
  y: number;
  x: number;
  u: string;
}

export interface N1tv1qa86uxbf1 {
  status: string;
  e: string;
  m: string;
  o: O80[];
  p: P80[];
  s: S80;
  id: string;
}

export interface O80 {
  y: number;
  x: number;
  u: string;
}

export interface P80 {
  y: number;
  x: number;
  u: string;
}

export interface S80 {
  y: number;
  x: number;
  u: string;
}

export interface Gkyoe986uxbf1 {
  status: string;
  e: string;
  m: string;
  o: O81[];
  p: P81[];
  s: S81;
  id: string;
}

export interface O81 {
  y: number;
  x: number;
  u: string;
}

export interface P81 {
  y: number;
  x: number;
  u: string;
}

export interface S81 {
  y: number;
  x: number;
  u: string;
}

export interface Rh1m56bn1acf1 {
  status: string;
  e: string;
  m: string;
  o: O82[];
  p: P82[];
  s: S82;
  id: string;
}

export interface O82 {
  y: number;
  x: number;
  u: string;
}

export interface P82 {
  y: number;
  x: number;
  u: string;
}

export interface S82 {
  y: number;
  x: number;
  u: string;
}

export interface Jels45bn1acf1 {
  status: string;
  e: string;
  m: string;
  o: O83[];
  p: P83[];
  s: S83;
  id: string;
}

export interface O83 {
  y: number;
  x: number;
  u: string;
}

export interface P83 {
  y: number;
  x: number;
  u: string;
}

export interface S83 {
  y: number;
  x: number;
  u: string;
}

export interface Qqf8p4bn1acf1 {
  status: string;
  e: string;
  m: string;
  o: O84[];
  p: P84[];
  s: S84;
  id: string;
}

export interface O84 {
  y: number;
  x: number;
  u: string;
}

export interface P84 {
  y: number;
  x: number;
  u: string;
}

export interface S84 {
  y: number;
  x: number;
  u: string;
}

export interface Wx9lw6bn1acf1 {
  status: string;
  e: string;
  m: string;
  o: O85[];
  p: P85[];
  s: S85;
  id: string;
}

export interface O85 {
  y: number;
  x: number;
  u: string;
}

export interface P85 {
  y: number;
  x: number;
  u: string;
}

export interface S85 {
  y: number;
  x: number;
  u: string;
}

export interface N23xv78bn1acf1 {
  status: string;
  e: string;
  m: string;
  o: O86[];
  p: P86[];
  s: S86;
  id: string;
}

export interface O86 {
  y: number;
  x: number;
  u: string;
}

export interface P86 {
  y: number;
  x: number;
  u: string;
}

export interface S86 {
  y: number;
  x: number;
  u: string;
}

export interface Cd98drsw3ocf1 {
  status: string;
  e: string;
  m: string;
  o: O87[];
  p: P87[];
  s: S87;
  id: string;
}

export interface O87 {
  y: number;
  x: number;
  u: string;
}

export interface P87 {
  y: number;
  x: number;
  u: string;
}

export interface S87 {
  y: number;
  x: number;
  u: string;
}

export interface H0mg11qw3ocf1 {
  status: string;
  e: string;
  m: string;
  o: O88[];
  p: P88[];
  s: S88;
  id: string;
}

export interface O88 {
  y: number;
  x: number;
  u: string;
}

export interface P88 {
  y: number;
  x: number;
  u: string;
}

export interface S88 {
  y: number;
  x: number;
  u: string;
}

export interface L1cm6rrw3ocf1 {
  status: string;
  e: string;
  m: string;
  o: O89[];
  p: P89[];
  s: S89;
  id: string;
}

export interface O89 {
  y: number;
  x: number;
  u: string;
}

export interface P89 {
  y: number;
  x: number;
  u: string;
}

export interface S89 {
  y: number;
  x: number;
  u: string;
}

export interface Fuir1vtw3ocf1 {
  status: string;
  e: string;
  m: string;
  o: O90[];
  p: P90[];
  s: S90;
  id: string;
}

export interface O90 {
  y: number;
  x: number;
  u: string;
}

export interface P90 {
  y: number;
  x: number;
  u: string;
}

export interface S90 {
  y: number;
  x: number;
  u: string;
}

export interface N225i8me8hwcf1 {
  status: string;
  e: string;
  m: string;
  o: O91[];
  p: P91[];
  s: S91;
  id: string;
}

export interface O91 {
  y: number;
  x: number;
  u: string;
}

export interface P91 {
  y: number;
  x: number;
  u: string;
}

export interface S91 {
  y: number;
  x: number;
  u: string;
}

export interface N79dzzvy2hwcf1 {
  status: string;
  e: string;
  m: string;
  o: O92[];
  p: P92[];
  s: S92;
  id: string;
}

export interface O92 {
  y: number;
  x: number;
  u: string;
}

export interface P92 {
  y: number;
  x: number;
  u: string;
}

export interface S92 {
  y: number;
  x: number;
  u: string;
}

export interface Ttgwc1s1hwcf1 {
  status: string;
  e: string;
  m: string;
  o: O93[];
  p: P93[];
  s: S93;
  id: string;
}

export interface O93 {
  y: number;
  x: number;
  u: string;
}

export interface P93 {
  y: number;
  x: number;
  u: string;
}

export interface S93 {
  y: number;
  x: number;
  u: string;
}

export interface N49yv4zd6hwcf1 {
  status: string;
  e: string;
  m: string;
  o: O94[];
  p: P94[];
  s: S94;
  id: string;
}

export interface O94 {
  y: number;
  x: number;
  u: string;
}

export interface P94 {
  y: number;
  x: number;
  u: string;
}

export interface S94 {
  y: number;
  x: number;
  u: string;
}

export interface Czev7924hwcf1 {
  status: string;
  e: string;
  m: string;
  o: O95[];
  p: P95[];
  s: S95;
  id: string;
}

export interface O95 {
  y: number;
  x: number;
  u: string;
}

export interface P95 {
  y: number;
  x: number;
  u: string;
}

export interface S95 {
  y: number;
  x: number;
  u: string;
}

export interface N491oon45hwcf1 {
  status: string;
  e: string;
  m: string;
  o: O96[];
  p: P96[];
  s: S96;
  id: string;
}

export interface O96 {
  y: number;
  x: number;
  u: string;
}

export interface P96 {
  y: number;
  x: number;
  u: string;
}

export interface S96 {
  y: number;
  x: number;
  u: string;
}

export interface Yh2u7gc9hwcf1 {
  status: string;
  e: string;
  m: string;
  o: O97[];
  p: P97[];
  s: S97;
  id: string;
}

export interface O97 {
  y: number;
  x: number;
  u: string;
}

export interface P97 {
  y: number;
  x: number;
  u: string;
}

export interface S97 {
  y: number;
  x: number;
  u: string;
}

export interface Rqegve9302df1 {
  status: string;
  e: string;
  m: string;
  o: O98[];
  p: P98[];
  s: S98;
  id: string;
}

export interface O98 {
  y: number;
  x: number;
  u: string;
}

export interface P98 {
  y: number;
  x: number;
  u: string;
}

export interface S98 {
  y: number;
  x: number;
  u: string;
}

export interface Ax1zn79302df1 {
  status: string;
  e: string;
  m: string;
  o: O99[];
  p: P99[];
  s: S99;
  id: string;
}

export interface O99 {
  y: number;
  x: number;
  u: string;
}

export interface P99 {
  y: number;
  x: number;
  u: string;
}

export interface S99 {
  y: number;
  x: number;
  u: string;
}

export interface N7xdt0c9302df1 {
  status: string;
  e: string;
  m: string;
  o: O100[];
  p: P100[];
  s: S100;
  id: string;
}

export interface O100 {
  y: number;
  x: number;
  u: string;
}

export interface P100 {
  y: number;
  x: number;
  u: string;
}

export interface S100 {
  y: number;
  x: number;
  u: string;
}

export interface Ihk68za302df1 {
  status: string;
  e: string;
  m: string;
  o: O101[];
  p: P101[];
  s: S101;
  id: string;
}

export interface O101 {
  y: number;
  x: number;
  u: string;
}

export interface P101 {
  y: number;
  x: number;
  u: string;
}

export interface S101 {
  y: number;
  x: number;
  u: string;
}

export interface V6yvlf9302df1 {
  status: string;
  e: string;
  m: string;
  o: O102[];
  p: P102[];
  s: S102;
  id: string;
}

export interface O102 {
  y: number;
  x: number;
  u: string;
}

export interface P102 {
  y: number;
  x: number;
  u: string;
}

export interface S102 {
  y: number;
  x: number;
  u: string;
}

export interface Nhlhd59302df1 {
  status: string;
  e: string;
  m: string;
  o: O103[];
  p: P103[];
  s: S103;
  id: string;
}

export interface O103 {
  y: number;
  x: number;
  u: string;
}

export interface P103 {
  y: number;
  x: number;
  u: string;
}

export interface S103 {
  y: number;
  x: number;
  u: string;
}

export interface W3bvi79302df1 {
  status: string;
  e: string;
  m: string;
  o: O104[];
  p: P104[];
  s: S104;
  id: string;
}

export interface O104 {
  y: number;
  x: number;
  u: string;
}

export interface P104 {
  y: number;
  x: number;
  u: string;
}

export interface S104 {
  y: number;
  x: number;
  u: string;
}

export interface Jh8j0b9302df1 {
  status: string;
  e: string;
  m: string;
  o: O105[];
  p: P105[];
  s: S105;
  id: string;
}

export interface O105 {
  y: number;
  x: number;
  u: string;
}

export interface P105 {
  y: number;
  x: number;
  u: string;
}

export interface S105 {
  y: number;
  x: number;
  u: string;
}

export interface Zgzbe89302df1 {
  status: string;
  e: string;
  m: string;
  o: O106[];
  p: P106[];
  s: S106;
  id: string;
}

export interface O106 {
  y: number;
  x: number;
  u: string;
}

export interface P106 {
  y: number;
  x: number;
  u: string;
}

export interface S106 {
  y: number;
  x: number;
  u: string;
}

export interface Ibe3tb9302df1 {
  status: string;
  e: string;
  m: string;
  o: O107[];
  p: P107[];
  s: S107;
  id: string;
}

export interface O107 {
  y: number;
  x: number;
  u: string;
}

export interface P107 {
  y: number;
  x: number;
  u: string;
}

export interface S107 {
  y: number;
  x: number;
  u: string;
}

export interface Nfzspc9302df1 {
  status: string;
  e: string;
  m: string;
  o: O108[];
  p: P108[];
  s: S108;
  id: string;
}

export interface O108 {
  y: number;
  x: number;
  u: string;
}

export interface P108 {
  y: number;
  x: number;
  u: string;
}

export interface S108 {
  y: number;
  x: number;
  u: string;
}

export interface I8c9i1a302df1 {
  status: string;
  e: string;
  m: string;
  o: O109[];
  p: P109[];
  s: S109;
  id: string;
}

export interface O109 {
  y: number;
  x: number;
  u: string;
}

export interface P109 {
  y: number;
  x: number;
  u: string;
}

export interface S109 {
  y: number;
  x: number;
  u: string;
}

export interface Vm98x7qeyodf1 {
  status: string;
  e: string;
  m: string;
  o: O110[];
  p: P110[];
  s: S110;
  id: string;
}

export interface O110 {
  y: number;
  x: number;
  u: string;
}

export interface P110 {
  y: number;
  x: number;
  u: string;
}

export interface S110 {
  y: number;
  x: number;
  u: string;
}

export interface Zxef78qeyodf1 {
  status: string;
  e: string;
  m: string;
  o: O111[];
  p: P111[];
  s: S111;
  id: string;
}

export interface O111 {
  y: number;
  x: number;
  u: string;
}

export interface P111 {
  y: number;
  x: number;
  u: string;
}

export interface S111 {
  y: number;
  x: number;
  u: string;
}

export interface W7ixa0ols8ef1 {
  status: string;
  e: string;
  m: string;
  o: O112[];
  p: P112[];
  s: S112;
  id: string;
}

export interface O112 {
  y: number;
  x: number;
  u: string;
}

export interface P112 {
  y: number;
  x: number;
  u: string;
}

export interface S112 {
  y: number;
  x: number;
  u: string;
}

export interface N5jc10znls8ef1 {
  status: string;
  e: string;
  m: string;
  o: O113[];
  p: P113[];
  s: S113;
  id: string;
}

export interface O113 {
  y: number;
  x: number;
  u: string;
}

export interface P113 {
  y: number;
  x: number;
  u: string;
}

export interface S113 {
  y: number;
  x: number;
  u: string;
}

export interface GalleryData {
  items: Item[];
}

export interface Item {
  media_id: string;
  id: number;
  caption?: string;
}

export interface Preview {
  images: Image[];
  enabled: boolean;
  reddit_video_preview?: RedditVideoPreview;
}

export interface Image {
  source: Source;
  resolutions: Resolution[];
  variants: Variants;
  id: string;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface Variants {
  obfuscated: Obfuscated;
  gif?: Gif;
  mp4?: Mp4;
  nsfw: Nsfw;
}

export interface Obfuscated {
  source: Source2;
  resolutions: Resolution2[];
}

export interface Source2 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution2 {
  url: string;
  width: number;
  height: number;
}

export interface Gif {
  source: Source3;
  resolutions: Resolution3[];
}

export interface Source3 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution3 {
  url: string;
  width: number;
  height: number;
}

export interface Mp4 {
  source: Source4;
  resolutions: Resolution4[];
}

export interface Source4 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution4 {
  url: string;
  width: number;
  height: number;
}

export interface Nsfw {
  source: Source5;
  resolutions: Resolution5[];
}

export interface Source5 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution5 {
  url: string;
  width: number;
  height: number;
}

export interface RedditVideoPreview {
  bitrate_kbps: number;
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface CrosspostParentList {
  approved_at_utc: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: any;
  gilded: number;
  clicked: boolean;
  is_gallery: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: any;
  link_flair_css_class: any;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: any;
  hide_score: boolean;
  media_metadata: MediaMetadata2;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: any;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed2;
  thumbnail_width: number;
  author_flair_template_id: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: any;
  secure_media_embed: SecureMediaEmbed2;
  gallery_data: GalleryData2;
  link_flair_text: any;
  can_mod_post: boolean;
  score: number;
  approved_by: any;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: any;
  author_flair_richtext: any[];
  gildings: Gildings2;
  content_categories: any;
  is_self: boolean;
  subreddit_type: string;
  created: number;
  link_flair_type: string;
  wls: any;
  removed_by_category: any;
  banned_by: any;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: any;
  likes: any;
  suggested_sort: any;
  banned_at_utc: any;
  url_overridden_by_dest: string;
  view_count: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: any;
  treatment_tags: any[];
  visited: boolean;
  removed_by: any;
  mod_note: any;
  distinguished: any;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: any;
  num_reports: any;
  removal_reason: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: any;
  author: string;
  discussion_type: any;
  num_comments: number;
  send_replies: boolean;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: any;
  permalink: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: any;
  is_video: boolean;
}

export interface MediaMetadata2 {
  "4xrv6z4uafbf1": N4xrv6z4uafbf1;
  khtg995uafbf1: Khtg995uafbf1;
  "6tnyc05uafbf1": N6tnyc05uafbf1;
  fq2vg15uafbf1: Fq2vg15uafbf1;
  loh7e35uafbf1: Loh7e35uafbf1;
  "9ma2535uafbf1": N9ma2535uafbf1;
}

export interface N4xrv6z4uafbf1 {
  status: string;
  e: string;
  m: string;
  o: O114[];
  p: P114[];
  s: S114;
  id: string;
}

export interface O114 {
  y: number;
  x: number;
  u: string;
}

export interface P114 {
  y: number;
  x: number;
  u: string;
}

export interface S114 {
  y: number;
  x: number;
  u: string;
}

export interface Khtg995uafbf1 {
  status: string;
  e: string;
  m: string;
  o: O115[];
  p: P115[];
  s: S115;
  id: string;
}

export interface O115 {
  y: number;
  x: number;
  u: string;
}

export interface P115 {
  y: number;
  x: number;
  u: string;
}

export interface S115 {
  y: number;
  x: number;
  u: string;
}

export interface N6tnyc05uafbf1 {
  status: string;
  e: string;
  m: string;
  o: O116[];
  p: P116[];
  s: S116;
  id: string;
}

export interface O116 {
  y: number;
  x: number;
  u: string;
}

export interface P116 {
  y: number;
  x: number;
  u: string;
}

export interface S116 {
  y: number;
  x: number;
  u: string;
}

export interface Fq2vg15uafbf1 {
  status: string;
  e: string;
  m: string;
  o: O117[];
  p: P117[];
  s: S117;
  id: string;
}

export interface O117 {
  y: number;
  x: number;
  u: string;
}

export interface P117 {
  y: number;
  x: number;
  u: string;
}

export interface S117 {
  y: number;
  x: number;
  u: string;
}

export interface Loh7e35uafbf1 {
  status: string;
  e: string;
  m: string;
  o: O118[];
  p: P118[];
  s: S118;
  id: string;
}

export interface O118 {
  y: number;
  x: number;
  u: string;
}

export interface P118 {
  y: number;
  x: number;
  u: string;
}

export interface S118 {
  y: number;
  x: number;
  u: string;
}

export interface N9ma2535uafbf1 {
  status: string;
  e: string;
  m: string;
  o: O119[];
  p: P119[];
  s: S119;
  id: string;
}

export interface O119 {
  y: number;
  x: number;
  u: string;
}

export interface P119 {
  y: number;
  x: number;
  u: string;
}

export interface S119 {
  y: number;
  x: number;
  u: string;
}

export interface MediaEmbed2 {}

export interface SecureMediaEmbed2 {}

export interface GalleryData2 {
  items: Item2[];
}

export interface Item2 {
  media_id: string;
  id: number;
}

export interface Gildings2 {}
