import '../../assets/scss/SecondPage.scss';

function Blog() {
    return (
        <section className='blog'>
            <div className='blog__wrapper'>
                <h2 className='blog__title'>Blog</h2>
                <BlogContent />
            </div>
        </section>
    );
}

function BlogContent() {
    const count = 4;

    const blogContent = Array(count).fill().map((_, index) => (
        <div key={index} className='blog__content'></div>
    ));

    return (
        <>
        {blogContent}
        </>
        
    );
}

export default Blog;