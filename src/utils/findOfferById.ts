import { ApiOffer } from '../layouts/OffersLayout';

export default function findOfferById(
  offers: ApiOffer[],
  offerId: string
): ApiOffer | undefined {
  return offers.find(
    // NOTE: The `offer.id` might contain a URL encoded value,
    //       e.g. "full-stack-c%23-angular" which translates to "full-stack-c#-angular" route param.
    //       We need to either decode `offer.id` OR encode route param `offerId`.
    (o) => decodeURIComponent(o.id) === offerId
  );
}
