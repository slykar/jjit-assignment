import { FunctionComponent, useMemo } from 'react';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import { UseQueryResult } from 'react-query';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { OffersMarkerCluster } from '../components/map/OffersMarkerCluster';
import { MapOfferNavigator } from '../components/map/MapOfferNavigator';
import { ApiOffer, useOfferQuery } from '../api';
import { findOfferById } from '../utils/offers';
import JobFiltersContainer from '../containers/JobFiltersContainer';

/**
 * Expose offers loaded as part of this layout page using React Router.
 */
export function useOffersQueryResult() {
  return useOutletContext<UseQueryResult<ApiOffer[], Error>>();
}

/**
 * Get current offer from offers stored on the context of the outlet.
 * TODO: A better state management.
 */
export function useOffer(): ApiOffer | undefined {
  const offers = useOffersQueryResult();
  const { offerId } = useParams();

  return useMemo(() => {
    const offersData = offers?.data;
    const canLookupOffer = offerId && offersData;
    return canLookupOffer
      ? findOfferById(offers?.data ?? [], offerId)
      : undefined;
  }, [offerId, offers]);
}

const OffersLayout: FunctionComponent = () => {
  const offers = useOfferQuery();
  const offersData = offers.data ?? [];

  return (
    <>
      <JobFiltersContainer />
      <div className="flex flex-row grow min-h-0">
        <div className="flex flex-col basis-full lg:basis-7/12 xl:basis-1/2 2xl:basis-5/12">
          <Outlet context={offers} />
        </div>
        <aside className="hidden lg:flex lg:basis-5/12 xl:basis-1/2 2xl:basis-7/12">
          <MapContainer
            className="w-full h-full"
            center={[53.428543, 14.552812]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <MapOfferNavigator offers={offers?.data ?? []} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <OffersMarkerCluster>
              {offersData.map((offer) => (
                <Marker
                  key={offer.id}
                  position={{ lat: offer.latitude, lng: offer.longitude }}
                />
              ))}
            </OffersMarkerCluster>
          </MapContainer>
        </aside>
      </div>
    </>
  );
};

export default OffersLayout;
