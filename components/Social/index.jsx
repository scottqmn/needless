/* eslint-disable */
import PropTypes from 'prop-types'
import { Link } from '../Prismic'
import styles from './styles.module.scss'
import { prismicLinkPropType } from '../../prop-types/prismic'
import FacebookIcon from '../../public/social/facebook.svg'
import InstagramIcon from '../../public/social/instagram.svg'
import LinkedInIcon from '../../public/social/linkedin.svg'
import NaverIcon from '../../public/social/naver.svg'
import TwitterIcon from '../../public/social/twitter.svg'
import YouTubeIcon from '../../public/social/youtube.svg'

const Social = ({ items }) => {
    const renderIcon = (type) => {
        const formattedType = type.toLowerCase()
        switch (formattedType) {
            case 'facebook':
                return <FacebookIcon />
            case 'instagram':
                return <InstagramIcon />
            case 'linkedin':
                return <LinkedInIcon />
            case 'naver':
                return <NaverIcon />
            case 'twitter':
                return <TwitterIcon />
            case 'youtube':
                return <YouTubeIcon />
            default:
                console.warn('No social case:', type)
                return <div className={styles.placeholder} />
        }
    }

    return items.length ? (
        <div className={styles.container}>
            {items.map(({ type, link }) => {
                return (
                    <div key={link.url}>
                        <Link link={link} aria-label={type}>
                            {renderIcon(type)}
                        </Link>
                    </div>
                )
            })}
        </div>
    ) : null
}

Social.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ type: PropTypes.string, link: prismicLinkPropType })
    ),
}

export default Social
