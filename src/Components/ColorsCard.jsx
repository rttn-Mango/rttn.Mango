import PropTypes from 'prop-types'

export default function ColorsCard({name, hex, rgb, hsl}){
    return(
        <section className="colors__container--card">
            <div style={{ backgroundColor: `${hex}` }}></div>
            <p>{name}</p>
            <p>{hex}</p>
            <p>{rgb}</p>
            <p>{hsl}</p>
        </section>
    )
}

ColorsCard.propTypes = {
    name: PropTypes.string,
    hex: PropTypes.string,
    rgb: PropTypes.string,
    hsl: PropTypes.string
}