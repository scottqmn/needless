/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AlternateLanguage {
    id: string
    uid?: string
    type: string
    lang: string
}
export interface Document {
    id: string
    uid?: string
    url?: string
    type: string
    href: string
    tags: string[]
    slugs: string[]
    lang?: string
    alternate_languages: AlternateLanguage[]
    first_publication_date: string | null
    last_publication_date: string | null
    data: any
}

export interface RichTextContent {
    spans: any[]
    text: string
    type: string
}

export interface Slice {
    items: Record<string, unknown>[]
    primary: Record<string, unknown>
    slice_label?: string
    slice_type: string
}
