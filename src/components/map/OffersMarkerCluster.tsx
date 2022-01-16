import { createPathComponent } from '@react-leaflet/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

export const OffersMarkerCluster = createPathComponent((props, ctx) => {
  const markerClusterGroup = L.markerClusterGroup({
    showCoverageOnHover: false,
    spiderfyOnMaxZoom: false,
    removeOutsideVisibleBounds: true,
  });

  return {
    instance: markerClusterGroup,
    context: { ...ctx, layerContainer: markerClusterGroup },
  };
});
