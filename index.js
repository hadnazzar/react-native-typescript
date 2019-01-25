/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Sentry } from 'react-native-sentry';
Sentry.config('https://31fa165832a44cfab2642d9c2a6ed1ce@sentry.io/1379190').install();

AppRegistry.registerComponent(appName, () => App);
