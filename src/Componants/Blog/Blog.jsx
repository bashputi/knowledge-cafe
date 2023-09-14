import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa';

const Blog = ({blog, handleAddToBooknark}) => {
   const {title, cover, author, authore_image, posted_date, hashtags, reading_time} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 ml-6' src={authore_image} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                    <button onClick={() => handleAddToBooknark(blog)} className='ml-2 text-2xl text-red-600'>
                    <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBooknark: PropTypes.func
}
export default Blog;