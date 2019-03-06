import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  type NavigationState,
} from 'react-native-tab-view';
import Repos from './Shared/Repos';
import Gists from './Shared/Gists';

type State = NavigationState<{
  key: string,
  title: string,
}>;

export default class Usergit extends React.Component<State> {
  static title = 'UserGit';
  static backgroundColor = '#3f51b5';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      { key: 'repos', title: 'Repos' },
      { key: 'gists', title: 'Gists' }
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  _renderScene = SceneMap({
    repos: Repos,
    gists: Gists
  });

  render() {
    return (
      <TabView
        style={this.props.style}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#3f51b5',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },
});
