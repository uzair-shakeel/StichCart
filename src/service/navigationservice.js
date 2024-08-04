//libs
import * as React from 'react';
import { NavigationActions, StackActions } from "@react-navigation/native";
//utils
import logger from '../util/logger';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigationReset(routeName) {
    try {
      if (navigationRef.current) { 
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: routeName , params: {"invalidateLogin": true} })],
        });
        navigationRef.current?.dispatch(resetAction);

      } else {
        logger.log('Failed to route login page due to navigationRef not initialized', null , true);
      }
    }catch(error) {
        logger.recordError(error, 'Failed to reset the navigation', true);
    }
}

