import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [errPermission, setErrPermission] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            
            if (!granted) {
              throw new Error('Location permission not granted');
            }
            
            const subscriberEvent = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback);
            

            setSubscriber(subscriberEvent);
          } catch (e) {
            setErrPermission(e);
          }
    };

    useEffect(() => {
        if(shouldTrack) {
            startWatching();
        } else {
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack]);

    return [
        errPermission
    ];
}