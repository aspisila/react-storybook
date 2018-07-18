import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, titleClick}) => (
    <div>
        <h2 onClick={titleClick}>{title}</h2>
        <div>
            Pastoral da comunicação
        </div>
        <img alt='' src='https://storybook.js.org/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-44d6a.png' />
    </div>
)

Post.defaultProps = {
    titleClick: () => {}
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    titleAction: PropTypes.func
}

export default Post