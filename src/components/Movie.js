import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

function Movie({ id, coverImg, title, summary, genres }) {
    return <div>
        <img src={coverImg} alt={title} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0.235)}...` : summary}</p>
        <ul>
            {genres.map((genre) => (
                <li key={genre}>{genre}</li>
            ))}
        </ul>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
// 영화별 상세페이지 보내기 구현을 위해
// npm install react-router-dom을 설치한다