import { FunctionComponent } from 'react';
import { useMap } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import findOfferById from '../../utils/findOfferById';
import { ApiOffer } from '../../api';

/**
 * A helper component that will pan the map to the location of the current offer.
 *
 * @param props
 * @constructor
 */
export const MapOfferNavigator: FunctionComponent<{ offers: ApiOffer[] }> = (
  props
) => {
  const { offers } = props;

  const map = useMap();
  const { offerId } = useParams();
  const offer = offerId ? findOfferById(offers, offerId) : undefined;

  if (offer) map.panTo({ lat: offer.latitude, lng: offer.longitude });

  return null;
};
