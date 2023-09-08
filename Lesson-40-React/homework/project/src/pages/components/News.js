import '../../assets/scss/SecondPage.scss';

function News() {
    return (
        <section className='news'>
            <div className='news__wrapper'>
                <h2 className='news__title'>News</h2>
                <NewsContent />
            </div>
        </section>
    );
}

function NewsContent() {
    const count = 3;

    const newsContent = Array(count).fill().map((_, index) => (
        <div key={index} className='news__content'></div>
    ));

    return (
        <>
        {newsContent}
        </>
        
    );
}

export default News;