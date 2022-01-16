import { ApiOffer } from '../api';

/**
 * Helper function to find offer by ID in a list of offers.
 *
 * The `offer.id` might contain a URL encoded value,
 * e.g. "full-stack-c%23-angular" which translates to "full-stack-c#-angular" route param.
 *
 * We need to either decode `offer.id` OR encode route param `offerId`.
 *
 * @param offers
 * @param offerId
 */
export function findOfferById(
  offers: ApiOffer[],
  offerId: string
): ApiOffer | undefined {
  return offers.find((o) => decodeURIComponent(o.id) === offerId);
}

/**
 * Takes an ApiOffer and returns an JSX element with formatted salary range (or no salary)
 *
 * @param offer
 */
export function salaryRangeForApiOffer(offer: ApiOffer): JSX.Element {
  const hasSalaryInfo = offer.salary_from && offer.salary_to;
  const localize = (n: number) => n.toLocaleString();

  return hasSalaryInfo ? (
    <>
      {localize(offer.salary_from!)} &ndash; {localize(offer.salary_to!)}
      {offer.salary_currency && ' ' + offer.salary_currency}
    </>
  ) : (
    <>Undisclosed Salary</>
  );
}
