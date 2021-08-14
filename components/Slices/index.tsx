import React from 'react'
import Heading from './Heading'
import Hero from './Hero'
import Images from './Images'
import RichText from './RichText'
import { Slice } from '../../interfaces/prismic'

type Props = {
    body: Slice[]
}

const Slices: React.FC<Props> = ({ body }) => {
    const renderSlice = (slice) => {
        const { slice_type } = slice
        let Component

        switch (slice_type) {
            case 'heading': {
                Component = Heading
                break
            }
            case 'hero': {
                Component = Hero
                break
            }
            case 'images': {
                Component = Images
                break
            }
            case 'rich_text': {
                Component = RichText
                break
            }
            default:
                return (
                    <div>TODO: handle slice_type &apos;{slice_type}&apos;</div>
                )
        }
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...slice.primary} items={slice.items} />
    }
    return (
        <div>
            {body.map((slice, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`${slice.slice_type}-${index}`} className='section'>
                    {renderSlice(slice)}
                </div>
            ))}
        </div>
    )
}

export default Slices
