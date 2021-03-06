import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import Header from "./Components/Header/Header";
import Posts from "./Containers/Posts/Posts";
import SingleItemPost from "./Components/SingleItemPost/SingleItemPost";
import NewPost from "./Containers/NewPost/NewPosts";
import FormPost from "./Components/FormPost/FormPost";

function App({ loader, error }) {
  return (
    <>
      <Header />
      {loader && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {error && <h1>Something went wrong</h1>}

      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/new" component={NewPost} />
        <Route exact path="/posts/:postId" component={SingleItemPost} />
        <Route path="/posts/:postId/editing" component={FormPost} />
        <Redirect to="/posts" />
      </Switch>
    </>
  );
}

App.propTypes = {
  error: PropTypes.string.isRequired,
  loader: PropTypes.bool.isRequired,
};

const mapStateToProps = (store) => ({
  error: store.error,
  loader: store.loader,
});

export default connect(mapStateToProps)(App);
