import PropTypes from 'prop-types'
import clsx from 'clsx'
import GoogleMapReact from 'google-map-react'
import MarkerSVG from '../../../public/assets/marker.svg'
import styles from './styles.module.scss'

const API_KEY = process.env.GOOGLE_MAPS_API || ''

const Marker = ({ lat, lng }) => {
    return (
        <div className={styles.marker} lat={lat} lng={lng}>
            <MarkerSVG />
        </div>
    )
}

Marker.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
}

const Map = ({
    address,
    location = {},
    zoomLevel = 15,
    className,
    ...props
}) => {
    const { latitude: lat, longitude: lng } = location
    return (
        <div className={clsx(styles.container, className)} {...props}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: API_KEY,
                }}
                defaultCenter={{ lat, lng }}
                defaultZoom={zoomLevel}
            >
                <Marker lat={lat} lng={lng} />
            </GoogleMapReact>
        </div>
    )
}

Map.propTypes = {
    address: PropTypes.string,
    location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
    }),
    zoomLevel: PropTypes.number,
    className: PropTypes.any,
}

export default Map
