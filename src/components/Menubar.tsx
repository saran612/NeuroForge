import './Menubar.css'

function Menubar(){
    return (
    <>
        <section className='menu'>
            <div className='Glass_bar'>
                <a href='#' target='_self' className='menu_logo link'>
                    NEUROFORGE
                </a> 
                <ul> 
                    <a href='' className='link'>Problem</a> 
                    <a href='' className='link'>Solution</a> 
                    <a href='' className='link'>Impact</a> 
                    <a href='' className='link'>Research</a> 
                    <a href='' className='link'>Team</a> 
                    <a href='' className='link'>Contact</a> 
                    <a href='' className='link'>
                        <div className='menu_try colorbg'>
                            Try Now
                        </div>
                    </a> 
                </ul> 
                
            </div>
        </section>
    </>
);
}

export default Menubar;