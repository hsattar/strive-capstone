interface UnsplashAPI {
    total:       number
    total_pages: number
    results:     IUnsplashResult[]
}

interface IUnsplashResult {
    id:                       string
    created_at:               Date
    updated_at:               Date
    promoted_at:              Date
    width:                    number
    height:                   number
    color:                    string
    blur_hash:                string
    description:              null
    alt_description:          string
    urls:                     Urls
    links:                    ResultLinks
    categories:               any[]
    likes:                    number
    liked_by_user:            boolean
    current_user_collections: any[]
    sponsorship:              null
    topic_submissions:        TopicSubmissions
    user:                     User
    tags:                     Tag[]
}

interface ResultLinks {
    self:              string
    html:              string
    download:          string
    download_location: string
}

interface Tag {
    type:    string
    title:   string
    source?: Source
}

interface Source {
    ancestry:         Ancestry
    title:            string
    subtitle:         string
    description:      string
    meta_title:       string
    meta_description: string
    cover_photo:      CoverPhoto
}

interface Ancestry {
    type:        Category
    category:    Category
    subcategory: Category
}

interface Category {
    slug:        string
    pretty_slug: string
}

interface CoverPhoto {
    id:                       string
    created_at:               Date
    updated_at:               Date
    promoted_at:              Date | null
    width:                    number
    height:                   number
    color:                    string
    blur_hash:                string
    description:              null | string
    alt_description:          string
    urls:                     Urls
    links:                    ResultLinks
    categories:               any[]
    likes:                    number
    liked_by_user:            boolean
    current_user_collections: any[]
    sponsorship:              null
    topic_submissions:        TopicSubmissions
    user:                     User
}

interface TopicSubmissions {
}

interface Urls {
    raw:      string
    full:     string
    regular:  string
    small:    string
    thumb:    string
    small_s3: string
}

interface User {
    id:                 string
    updated_at:         Date
    username:           string
    name:               string
    first_name:         string
    last_name:          string
    twitter_username:   null | string
    portfolio_url:      string
    bio:                null | string
    location:           null | string
    links:              UserLinks
    profile_image:      ProfileImage
    instagram_username: string
    total_collections:  number
    total_likes:        number
    total_photos:       number
    accepted_tos:       boolean
    for_hire:           boolean
    social:             Social
}

interface UserLinks {
    self:      string
    html:      string
    photos:    string
    likes:     string
    portfolio: string
    following: string
    followers: string
}

interface ProfileImage {
    small:  string
    medium: string
    large:  string
}

interface Social {
    instagram_username: string
    portfolio_url:      string
    twitter_username:   null | string
    paypal_email:       null
}