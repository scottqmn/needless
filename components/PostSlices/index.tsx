import RichText from './RichText'
import Images from './Images'

type Props = {
    body: { slice_type: string }[]
}

const PageSlices: React.FC<Props> = ({ body }) => {
    const renderSlice = (slice) => {
        const { slice_type } = slice
        let Component

        switch (slice_type) {
            case 'rich_text': {
                Component = RichText
                break
            }
            case 'images': {
                Component = Images
                break
            }
            default:
                return (
                    <div>TODO: handle slice_type &apos;{slice_type}&apos;</div>
                )
        }
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...slice} />
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

export default PageSlices
