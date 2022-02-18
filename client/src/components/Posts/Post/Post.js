import React from 'react';
import useStyles from './styles';
const Post = () => {
    //there's no function inside styles.js, invoking this will only cause error
    const classes = useStyles();
    return(
        <h1>POST</h1>
    );
}
export default Post;