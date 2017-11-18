import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const backgroundColorPostContainer = '#ffffff';
const shadowColorPostContainer = '#DA6C6C';
const borderColorPostContainer = '#EEEEEE';
const colorTitle = '#333333';
const colorAuthor = '#999999';
const colorDescription = '#666666';

const styles = StyleSheet.create({
  postContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: backgroundColorPostContainer,
    shadowColor: shadowColorPostContainer,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  postHeader: {
    borderBottomWidth: 1,
    borderColor: borderColorPostContainer,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colorTitle,
  },
  author: {
    color: colorAuthor,
  },
  containerDescription: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: colorDescription,
  },
});

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>{post.author}</Text>
    </View>
    <View style={styles.containerDescription}>
      <Text style={styles.description}>{post.description}</Text>
    </View>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default Post;
