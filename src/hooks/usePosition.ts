import { useState, useEffect } from "react";

interface Coordinates {
  latitude:number
  longitude: number
}


export const usePosition = () => {
  const [position, setPosition] = useState<Coordinates>();
  const [error, setError] = useState<any>("");

  const onChange = ({ coords }: any) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return { ...position, error };
};

