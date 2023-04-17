
export default function MovieItem(props) {


    const { title, poster_path,} = props


    return (
        <>

            <div className="movie-card">
                <div className="imgbox">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                    <h4 style={{ color: 'white' }}>{title}</h4>
                </div>
            </div>


        </>
    )
}
