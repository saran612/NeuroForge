import './Title.css'

function Title(){
    return(
        <>
        <section className='title'>
            <div className='main_title h1 color'>
                MEMORA
            </div>
            <img src='./public/Nciipc.svg' alt='Build for NCIIPC' className='sub_title'></img>
            <div className='tag_line'>
                <div>When Accuracy Matters — Ask with</div>
                <div className='color'>MEMORA</div>
                <div>.</div>
            </div>
            <div className='button_sec'>
                <a href='' target='_self' className='button link colorbg bk'>
                    Pitch Deck
                </a>
                <a href='#' target='_blank' className='button txtbk' >
                    Try Now
                </a>
            </div>
        </section>
        </>
    )
}
export default Title;