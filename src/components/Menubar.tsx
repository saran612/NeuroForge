import './Menubar.css'

function Menubar(){
    return (
    <>
        <div className='menu glass-bar'>
            <a href='#' target='_self' className='menu_logo'>NEUROFORGE</a>
            <ul>
                <a href=''>Problem</a>
                <a href=''>Solution</a>
                <a href=''>Impact</a>
                <a href=''>Research</a>
                <a href=''>Team</a>
                <a href=''>Contact</a>
            </ul>
            <a href=''><div className='menu_try'>Try Now</div></a>
        </div>
    </>
);
}

export default Menubar;