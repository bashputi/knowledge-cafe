import PropTypes from 'prop-types';

const Bookmark = ({bookmarks}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
};

Bookmark.proptypes = {
    bookmark: PropTypes.object

}

export default Bookmark;